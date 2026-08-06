(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod2) => function __require() {
    try {
      return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
    } catch (e) {
      throw mod2 = 0, e;
    }
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key2 of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key2) && key2 !== except)
          __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
    mod2
  ));

  // node_modules/d3/d3.js
  var require_d3 = __commonJS({
    "node_modules/d3/d3.js"(exports, module) {
      !(function() {
        var d32 = {
          version: "3.5.17"
        };
        var d3_arraySlice = [].slice, d3_array = function(list) {
          return d3_arraySlice.call(list);
        };
        var d3_document = this.document;
        function d3_documentElement(node) {
          return node && (node.ownerDocument || node.document || node).documentElement;
        }
        function d3_window(node) {
          return node && (node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView);
        }
        if (d3_document) {
          try {
            d3_array(d3_document.documentElement.childNodes)[0].nodeType;
          } catch (e) {
            d3_array = function(list) {
              var i = list.length, array = new Array(i);
              while (i--) array[i] = list[i];
              return array;
            };
          }
        }
        if (!Date.now) Date.now = function() {
          return +/* @__PURE__ */ new Date();
        };
        if (d3_document) {
          try {
            d3_document.createElement("DIV").style.setProperty("opacity", 0, "");
          } catch (error) {
            var d3_element_prototype = this.Element.prototype, d3_element_setAttribute = d3_element_prototype.setAttribute, d3_element_setAttributeNS = d3_element_prototype.setAttributeNS, d3_style_prototype = this.CSSStyleDeclaration.prototype, d3_style_setProperty = d3_style_prototype.setProperty;
            d3_element_prototype.setAttribute = function(name, value) {
              d3_element_setAttribute.call(this, name, value + "");
            };
            d3_element_prototype.setAttributeNS = function(space, local, value) {
              d3_element_setAttributeNS.call(this, space, local, value + "");
            };
            d3_style_prototype.setProperty = function(name, value, priority) {
              d3_style_setProperty.call(this, name, value + "", priority);
            };
          }
        }
        d32.ascending = d3_ascending;
        function d3_ascending(a, b) {
          return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
        }
        d32.descending = function(a, b) {
          return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
        };
        d32.min = function(array, f) {
          var i = -1, n = array.length, a, b;
          if (arguments.length === 1) {
            while (++i < n) if ((b = array[i]) != null && b >= b) {
              a = b;
              break;
            }
            while (++i < n) if ((b = array[i]) != null && a > b) a = b;
          } else {
            while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
              a = b;
              break;
            }
            while (++i < n) if ((b = f.call(array, array[i], i)) != null && a > b) a = b;
          }
          return a;
        };
        d32.max = function(array, f) {
          var i = -1, n = array.length, a, b;
          if (arguments.length === 1) {
            while (++i < n) if ((b = array[i]) != null && b >= b) {
              a = b;
              break;
            }
            while (++i < n) if ((b = array[i]) != null && b > a) a = b;
          } else {
            while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
              a = b;
              break;
            }
            while (++i < n) if ((b = f.call(array, array[i], i)) != null && b > a) a = b;
          }
          return a;
        };
        d32.extent = function(array, f) {
          var i = -1, n = array.length, a, b, c;
          if (arguments.length === 1) {
            while (++i < n) if ((b = array[i]) != null && b >= b) {
              a = c = b;
              break;
            }
            while (++i < n) if ((b = array[i]) != null) {
              if (a > b) a = b;
              if (c < b) c = b;
            }
          } else {
            while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
              a = c = b;
              break;
            }
            while (++i < n) if ((b = f.call(array, array[i], i)) != null) {
              if (a > b) a = b;
              if (c < b) c = b;
            }
          }
          return [a, c];
        };
        function d3_number(x) {
          return x === null ? NaN : +x;
        }
        function d3_numeric(x) {
          return !isNaN(x);
        }
        d32.sum = function(array, f) {
          var s = 0, n = array.length, a, i = -1;
          if (arguments.length === 1) {
            while (++i < n) if (d3_numeric(a = +array[i])) s += a;
          } else {
            while (++i < n) if (d3_numeric(a = +f.call(array, array[i], i))) s += a;
          }
          return s;
        };
        d32.mean = function(array, f) {
          var s = 0, n = array.length, a, i = -1, j = n;
          if (arguments.length === 1) {
            while (++i < n) if (d3_numeric(a = d3_number(array[i]))) s += a;
            else --j;
          } else {
            while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) s += a;
            else --j;
          }
          if (j) return s / j;
        };
        d32.quantile = function(values2, p) {
          var H = (values2.length - 1) * p + 1, h = Math.floor(H), v = +values2[h - 1], e = H - h;
          return e ? v + e * (values2[h] - v) : v;
        };
        d32.median = function(array, f) {
          var numbers = [], n = array.length, a, i = -1;
          if (arguments.length === 1) {
            while (++i < n) if (d3_numeric(a = d3_number(array[i]))) numbers.push(a);
          } else {
            while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) numbers.push(a);
          }
          if (numbers.length) return d32.quantile(numbers.sort(d3_ascending), 0.5);
        };
        d32.variance = function(array, f) {
          var n = array.length, m = 0, a, d, s = 0, i = -1, j = 0;
          if (arguments.length === 1) {
            while (++i < n) {
              if (d3_numeric(a = d3_number(array[i]))) {
                d = a - m;
                m += d / ++j;
                s += d * (a - m);
              }
            }
          } else {
            while (++i < n) {
              if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) {
                d = a - m;
                m += d / ++j;
                s += d * (a - m);
              }
            }
          }
          if (j > 1) return s / (j - 1);
        };
        d32.deviation = function() {
          var v = d32.variance.apply(this, arguments);
          return v ? Math.sqrt(v) : v;
        };
        function d3_bisector(compare3) {
          return {
            left: function(a, x, lo, hi) {
              if (arguments.length < 3) lo = 0;
              if (arguments.length < 4) hi = a.length;
              while (lo < hi) {
                var mid = lo + hi >>> 1;
                if (compare3(a[mid], x) < 0) lo = mid + 1;
                else hi = mid;
              }
              return lo;
            },
            right: function(a, x, lo, hi) {
              if (arguments.length < 3) lo = 0;
              if (arguments.length < 4) hi = a.length;
              while (lo < hi) {
                var mid = lo + hi >>> 1;
                if (compare3(a[mid], x) > 0) hi = mid;
                else lo = mid + 1;
              }
              return lo;
            }
          };
        }
        var d3_bisect = d3_bisector(d3_ascending);
        d32.bisectLeft = d3_bisect.left;
        d32.bisect = d32.bisectRight = d3_bisect.right;
        d32.bisector = function(f) {
          return d3_bisector(f.length === 1 ? function(d, x) {
            return d3_ascending(f(d), x);
          } : f);
        };
        d32.shuffle = function(array, i0, i1) {
          if ((m = arguments.length) < 3) {
            i1 = array.length;
            if (m < 2) i0 = 0;
          }
          var m = i1 - i0, t, i;
          while (m) {
            i = Math.random() * m-- | 0;
            t = array[m + i0], array[m + i0] = array[i + i0], array[i + i0] = t;
          }
          return array;
        };
        d32.permute = function(array, indexes) {
          var i = indexes.length, permutes = new Array(i);
          while (i--) permutes[i] = array[indexes[i]];
          return permutes;
        };
        d32.pairs = function(array) {
          var i = 0, n = array.length - 1, p0, p1 = array[0], pairs = new Array(n < 0 ? 0 : n);
          while (i < n) pairs[i] = [p0 = p1, p1 = array[++i]];
          return pairs;
        };
        d32.transpose = function(matrix) {
          if (!(n = matrix.length)) return [];
          for (var i = -1, m = d32.min(matrix, d3_transposeLength), transpose = new Array(m); ++i < m; ) {
            for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n; ) {
              row[j] = matrix[j][i];
            }
          }
          return transpose;
        };
        function d3_transposeLength(d) {
          return d.length;
        }
        d32.zip = function() {
          return d32.transpose(arguments);
        };
        d32.keys = function(map7) {
          var keys3 = [];
          for (var key2 in map7) keys3.push(key2);
          return keys3;
        };
        d32.values = function(map7) {
          var values2 = [];
          for (var key2 in map7) values2.push(map7[key2]);
          return values2;
        };
        d32.entries = function(map7) {
          var entries = [];
          for (var key2 in map7) entries.push({
            key: key2,
            value: map7[key2]
          });
          return entries;
        };
        d32.merge = function(arrays) {
          var n = arrays.length, m, i = -1, j = 0, merged, array;
          while (++i < n) j += arrays[i].length;
          merged = new Array(j);
          while (--n >= 0) {
            array = arrays[n];
            m = array.length;
            while (--m >= 0) {
              merged[--j] = array[m];
            }
          }
          return merged;
        };
        var abs3 = Math.abs;
        d32.range = function(start, stop, step) {
          if (arguments.length < 3) {
            step = 1;
            if (arguments.length < 2) {
              stop = start;
              start = 0;
            }
          }
          if ((stop - start) / step === Infinity) throw new Error("infinite range");
          var range2 = [], k = d3_range_integerScale(abs3(step)), i = -1, j;
          start *= k, stop *= k, step *= k;
          if (step < 0) while ((j = start + step * ++i) > stop) range2.push(j / k);
          else while ((j = start + step * ++i) < stop) range2.push(j / k);
          return range2;
        };
        function d3_range_integerScale(x) {
          var k = 1;
          while (x * k % 1) k *= 10;
          return k;
        }
        function d3_class(ctor, properties) {
          for (var key2 in properties) {
            Object.defineProperty(ctor.prototype, key2, {
              value: properties[key2],
              enumerable: false
            });
          }
        }
        d32.map = function(object, f) {
          var map7 = new d3_Map();
          if (object instanceof d3_Map) {
            object.forEach(function(key3, value) {
              map7.set(key3, value);
            });
          } else if (Array.isArray(object)) {
            var i = -1, n = object.length, o;
            if (arguments.length === 1) while (++i < n) map7.set(i, object[i]);
            else while (++i < n) map7.set(f.call(object, o = object[i], i), o);
          } else {
            for (var key2 in object) map7.set(key2, object[key2]);
          }
          return map7;
        };
        function d3_Map() {
          this._ = /* @__PURE__ */ Object.create(null);
        }
        var d3_map_proto = "__proto__", d3_map_zero = "\0";
        d3_class(d3_Map, {
          has: d3_map_has,
          get: function(key2) {
            return this._[d3_map_escape(key2)];
          },
          set: function(key2, value) {
            return this._[d3_map_escape(key2)] = value;
          },
          remove: d3_map_remove,
          keys: d3_map_keys,
          values: function() {
            var values2 = [];
            for (var key2 in this._) values2.push(this._[key2]);
            return values2;
          },
          entries: function() {
            var entries = [];
            for (var key2 in this._) entries.push({
              key: d3_map_unescape(key2),
              value: this._[key2]
            });
            return entries;
          },
          size: d3_map_size,
          empty: d3_map_empty,
          forEach: function(f) {
            for (var key2 in this._) f.call(this, d3_map_unescape(key2), this._[key2]);
          }
        });
        function d3_map_escape(key2) {
          return (key2 += "") === d3_map_proto || key2[0] === d3_map_zero ? d3_map_zero + key2 : key2;
        }
        function d3_map_unescape(key2) {
          return (key2 += "")[0] === d3_map_zero ? key2.slice(1) : key2;
        }
        function d3_map_has(key2) {
          return d3_map_escape(key2) in this._;
        }
        function d3_map_remove(key2) {
          return (key2 = d3_map_escape(key2)) in this._ && delete this._[key2];
        }
        function d3_map_keys() {
          var keys3 = [];
          for (var key2 in this._) keys3.push(d3_map_unescape(key2));
          return keys3;
        }
        function d3_map_size() {
          var size2 = 0;
          for (var key2 in this._) ++size2;
          return size2;
        }
        function d3_map_empty() {
          for (var key2 in this._) return false;
          return true;
        }
        d32.nest = function() {
          var nest = {}, keys3 = [], sortKeys = [], sortValues, rollup;
          function map7(mapType, array, depth) {
            if (depth >= keys3.length) return rollup ? rollup.call(nest, array) : sortValues ? array.sort(sortValues) : array;
            var i = -1, n = array.length, key2 = keys3[depth++], keyValue, object, setter, valuesByKey = new d3_Map(), values2;
            while (++i < n) {
              if (values2 = valuesByKey.get(keyValue = key2(object = array[i]))) {
                values2.push(object);
              } else {
                valuesByKey.set(keyValue, [object]);
              }
            }
            if (mapType) {
              object = mapType();
              setter = function(keyValue2, values3) {
                object.set(keyValue2, map7(mapType, values3, depth));
              };
            } else {
              object = {};
              setter = function(keyValue2, values3) {
                object[keyValue2] = map7(mapType, values3, depth);
              };
            }
            valuesByKey.forEach(setter);
            return object;
          }
          function entries(map8, depth) {
            if (depth >= keys3.length) return map8;
            var array = [], sortKey = sortKeys[depth++];
            map8.forEach(function(key2, keyMap) {
              array.push({
                key: key2,
                values: entries(keyMap, depth)
              });
            });
            return sortKey ? array.sort(function(a, b) {
              return sortKey(a.key, b.key);
            }) : array;
          }
          nest.map = function(array, mapType) {
            return map7(mapType, array, 0);
          };
          nest.entries = function(array) {
            return entries(map7(d32.map, array, 0), 0);
          };
          nest.key = function(d) {
            keys3.push(d);
            return nest;
          };
          nest.sortKeys = function(order) {
            sortKeys[keys3.length - 1] = order;
            return nest;
          };
          nest.sortValues = function(order) {
            sortValues = order;
            return nest;
          };
          nest.rollup = function(f) {
            rollup = f;
            return nest;
          };
          return nest;
        };
        d32.set = function(array) {
          var set2 = new d3_Set();
          if (array) for (var i = 0, n = array.length; i < n; ++i) set2.add(array[i]);
          return set2;
        };
        function d3_Set() {
          this._ = /* @__PURE__ */ Object.create(null);
        }
        d3_class(d3_Set, {
          has: d3_map_has,
          add: function(key2) {
            this._[d3_map_escape(key2 += "")] = true;
            return key2;
          },
          remove: d3_map_remove,
          values: d3_map_keys,
          size: d3_map_size,
          empty: d3_map_empty,
          forEach: function(f) {
            for (var key2 in this._) f.call(this, d3_map_unescape(key2));
          }
        });
        d32.behavior = {};
        function d3_identity(d) {
          return d;
        }
        d32.rebind = function(target, source2) {
          var i = 1, n = arguments.length, method;
          while (++i < n) target[method = arguments[i]] = d3_rebind(target, source2, source2[method]);
          return target;
        };
        function d3_rebind(target, source2, method) {
          return function() {
            var value = method.apply(source2, arguments);
            return value === source2 ? target : value;
          };
        }
        function d3_vendorSymbol(object, name) {
          if (name in object) return name;
          name = name.charAt(0).toUpperCase() + name.slice(1);
          for (var i = 0, n = d3_vendorPrefixes.length; i < n; ++i) {
            var prefixName = d3_vendorPrefixes[i] + name;
            if (prefixName in object) return prefixName;
          }
        }
        var d3_vendorPrefixes = ["webkit", "ms", "moz", "Moz", "o", "O"];
        function d3_noop() {
        }
        d32.dispatch = function() {
          var dispatch = new d3_dispatch(), i = -1, n = arguments.length;
          while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
          return dispatch;
        };
        function d3_dispatch() {
        }
        d3_dispatch.prototype.on = function(type, listener) {
          var i = type.indexOf("."), name = "";
          if (i >= 0) {
            name = type.slice(i + 1);
            type = type.slice(0, i);
          }
          if (type) return arguments.length < 2 ? this[type].on(name) : this[type].on(name, listener);
          if (arguments.length === 2) {
            if (listener == null) for (type in this) {
              if (this.hasOwnProperty(type)) this[type].on(name, null);
            }
            return this;
          }
        };
        function d3_dispatch_event(dispatch) {
          var listeners = [], listenerByName = new d3_Map();
          function event() {
            var z = listeners, i = -1, n = z.length, l;
            while (++i < n) if (l = z[i].on) l.apply(this, arguments);
            return dispatch;
          }
          event.on = function(name, listener) {
            var l = listenerByName.get(name), i;
            if (arguments.length < 2) return l && l.on;
            if (l) {
              l.on = null;
              listeners = listeners.slice(0, i = listeners.indexOf(l)).concat(listeners.slice(i + 1));
              listenerByName.remove(name);
            }
            if (listener) listeners.push(listenerByName.set(name, {
              on: listener
            }));
            return dispatch;
          };
          return event;
        }
        d32.event = null;
        function d3_eventPreventDefault() {
          d32.event.preventDefault();
        }
        function d3_eventSource() {
          var e = d32.event, s;
          while (s = e.sourceEvent) e = s;
          return e;
        }
        function d3_eventDispatch(target) {
          var dispatch = new d3_dispatch(), i = 0, n = arguments.length;
          while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
          dispatch.of = function(thiz, argumentz) {
            return function(e1) {
              try {
                var e0 = e1.sourceEvent = d32.event;
                e1.target = target;
                d32.event = e1;
                dispatch[e1.type].apply(thiz, argumentz);
              } finally {
                d32.event = e0;
              }
            };
          };
          return dispatch;
        }
        d32.requote = function(s) {
          return s.replace(d3_requote_re, "\\$&");
        };
        var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
        var d3_subclass = {}.__proto__ ? function(object, prototype) {
          object.__proto__ = prototype;
        } : function(object, prototype) {
          for (var property in prototype) object[property] = prototype[property];
        };
        function d3_selection(groups) {
          d3_subclass(groups, d3_selectionPrototype);
          return groups;
        }
        var d3_select = function(s, n) {
          return n.querySelector(s);
        }, d3_selectAll = function(s, n) {
          return n.querySelectorAll(s);
        }, d3_selectMatches = function(n, s) {
          var d3_selectMatcher = n.matches || n[d3_vendorSymbol(n, "matchesSelector")];
          d3_selectMatches = function(n2, s2) {
            return d3_selectMatcher.call(n2, s2);
          };
          return d3_selectMatches(n, s);
        };
        if (typeof Sizzle === "function") {
          d3_select = function(s, n) {
            return Sizzle(s, n)[0] || null;
          };
          d3_selectAll = Sizzle;
          d3_selectMatches = Sizzle.matchesSelector;
        }
        d32.selection = function() {
          return d32.select(d3_document.documentElement);
        };
        var d3_selectionPrototype = d32.selection.prototype = [];
        d3_selectionPrototype.select = function(selector) {
          var subgroups = [], subgroup, subnode, group, node;
          selector = d3_selection_selector(selector);
          for (var j = -1, m = this.length; ++j < m; ) {
            subgroups.push(subgroup = []);
            subgroup.parentNode = (group = this[j]).parentNode;
            for (var i = -1, n = group.length; ++i < n; ) {
              if (node = group[i]) {
                subgroup.push(subnode = selector.call(node, node.__data__, i, j));
                if (subnode && "__data__" in node) subnode.__data__ = node.__data__;
              } else {
                subgroup.push(null);
              }
            }
          }
          return d3_selection(subgroups);
        };
        function d3_selection_selector(selector) {
          return typeof selector === "function" ? selector : function() {
            return d3_select(selector, this);
          };
        }
        d3_selectionPrototype.selectAll = function(selector) {
          var subgroups = [], subgroup, node;
          selector = d3_selection_selectorAll(selector);
          for (var j = -1, m = this.length; ++j < m; ) {
            for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
              if (node = group[i]) {
                subgroups.push(subgroup = d3_array(selector.call(node, node.__data__, i, j)));
                subgroup.parentNode = node;
              }
            }
          }
          return d3_selection(subgroups);
        };
        function d3_selection_selectorAll(selector) {
          return typeof selector === "function" ? selector : function() {
            return d3_selectAll(selector, this);
          };
        }
        var d3_nsXhtml = "http://www.w3.org/1999/xhtml";
        var d3_nsPrefix = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: d3_nsXhtml,
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/"
        };
        d32.ns = {
          prefix: d3_nsPrefix,
          qualify: function(name) {
            var i = name.indexOf(":"), prefix = name;
            if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
            return d3_nsPrefix.hasOwnProperty(prefix) ? {
              space: d3_nsPrefix[prefix],
              local: name
            } : name;
          }
        };
        d3_selectionPrototype.attr = function(name, value) {
          if (arguments.length < 2) {
            if (typeof name === "string") {
              var node = this.node();
              name = d32.ns.qualify(name);
              return name.local ? node.getAttributeNS(name.space, name.local) : node.getAttribute(name);
            }
            for (value in name) this.each(d3_selection_attr(value, name[value]));
            return this;
          }
          return this.each(d3_selection_attr(name, value));
        };
        function d3_selection_attr(name, value) {
          name = d32.ns.qualify(name);
          function attrNull() {
            this.removeAttribute(name);
          }
          function attrNullNS() {
            this.removeAttributeNS(name.space, name.local);
          }
          function attrConstant() {
            this.setAttribute(name, value);
          }
          function attrConstantNS() {
            this.setAttributeNS(name.space, name.local, value);
          }
          function attrFunction() {
            var x = value.apply(this, arguments);
            if (x == null) this.removeAttribute(name);
            else this.setAttribute(name, x);
          }
          function attrFunctionNS() {
            var x = value.apply(this, arguments);
            if (x == null) this.removeAttributeNS(name.space, name.local);
            else this.setAttributeNS(name.space, name.local, x);
          }
          return value == null ? name.local ? attrNullNS : attrNull : typeof value === "function" ? name.local ? attrFunctionNS : attrFunction : name.local ? attrConstantNS : attrConstant;
        }
        function d3_collapse(s) {
          return s.trim().replace(/\s+/g, " ");
        }
        d3_selectionPrototype.classed = function(name, value) {
          if (arguments.length < 2) {
            if (typeof name === "string") {
              var node = this.node(), n = (name = d3_selection_classes(name)).length, i = -1;
              if (value = node.classList) {
                while (++i < n) if (!value.contains(name[i])) return false;
              } else {
                value = node.getAttribute("class");
                while (++i < n) if (!d3_selection_classedRe(name[i]).test(value)) return false;
              }
              return true;
            }
            for (value in name) this.each(d3_selection_classed(value, name[value]));
            return this;
          }
          return this.each(d3_selection_classed(name, value));
        };
        function d3_selection_classedRe(name) {
          return new RegExp("(?:^|\\s+)" + d32.requote(name) + "(?:\\s+|$)", "g");
        }
        function d3_selection_classes(name) {
          return (name + "").trim().split(/^|\s+/);
        }
        function d3_selection_classed(name, value) {
          name = d3_selection_classes(name).map(d3_selection_classedName);
          var n = name.length;
          function classedConstant() {
            var i = -1;
            while (++i < n) name[i](this, value);
          }
          function classedFunction() {
            var i = -1, x = value.apply(this, arguments);
            while (++i < n) name[i](this, x);
          }
          return typeof value === "function" ? classedFunction : classedConstant;
        }
        function d3_selection_classedName(name) {
          var re = d3_selection_classedRe(name);
          return function(node, value) {
            if (c = node.classList) return value ? c.add(name) : c.remove(name);
            var c = node.getAttribute("class") || "";
            if (value) {
              re.lastIndex = 0;
              if (!re.test(c)) node.setAttribute("class", d3_collapse(c + " " + name));
            } else {
              node.setAttribute("class", d3_collapse(c.replace(re, " ")));
            }
          };
        }
        d3_selectionPrototype.style = function(name, value, priority) {
          var n = arguments.length;
          if (n < 3) {
            if (typeof name !== "string") {
              if (n < 2) value = "";
              for (priority in name) this.each(d3_selection_style(priority, name[priority], value));
              return this;
            }
            if (n < 2) {
              var node = this.node();
              return d3_window(node).getComputedStyle(node, null).getPropertyValue(name);
            }
            priority = "";
          }
          return this.each(d3_selection_style(name, value, priority));
        };
        function d3_selection_style(name, value, priority) {
          function styleNull() {
            this.style.removeProperty(name);
          }
          function styleConstant() {
            this.style.setProperty(name, value, priority);
          }
          function styleFunction() {
            var x = value.apply(this, arguments);
            if (x == null) this.style.removeProperty(name);
            else this.style.setProperty(name, x, priority);
          }
          return value == null ? styleNull : typeof value === "function" ? styleFunction : styleConstant;
        }
        d3_selectionPrototype.property = function(name, value) {
          if (arguments.length < 2) {
            if (typeof name === "string") return this.node()[name];
            for (value in name) this.each(d3_selection_property(value, name[value]));
            return this;
          }
          return this.each(d3_selection_property(name, value));
        };
        function d3_selection_property(name, value) {
          function propertyNull() {
            delete this[name];
          }
          function propertyConstant() {
            this[name] = value;
          }
          function propertyFunction() {
            var x = value.apply(this, arguments);
            if (x == null) delete this[name];
            else this[name] = x;
          }
          return value == null ? propertyNull : typeof value === "function" ? propertyFunction : propertyConstant;
        }
        d3_selectionPrototype.text = function(value) {
          return arguments.length ? this.each(typeof value === "function" ? function() {
            var v = value.apply(this, arguments);
            this.textContent = v == null ? "" : v;
          } : value == null ? function() {
            this.textContent = "";
          } : function() {
            this.textContent = value;
          }) : this.node().textContent;
        };
        d3_selectionPrototype.html = function(value) {
          return arguments.length ? this.each(typeof value === "function" ? function() {
            var v = value.apply(this, arguments);
            this.innerHTML = v == null ? "" : v;
          } : value == null ? function() {
            this.innerHTML = "";
          } : function() {
            this.innerHTML = value;
          }) : this.node().innerHTML;
        };
        d3_selectionPrototype.append = function(name) {
          name = d3_selection_creator(name);
          return this.select(function() {
            return this.appendChild(name.apply(this, arguments));
          });
        };
        function d3_selection_creator(name) {
          function create() {
            var document2 = this.ownerDocument, namespace = this.namespaceURI;
            return namespace === d3_nsXhtml && document2.documentElement.namespaceURI === d3_nsXhtml ? document2.createElement(name) : document2.createElementNS(namespace, name);
          }
          function createNS() {
            return this.ownerDocument.createElementNS(name.space, name.local);
          }
          return typeof name === "function" ? name : (name = d32.ns.qualify(name)).local ? createNS : create;
        }
        d3_selectionPrototype.insert = function(name, before2) {
          name = d3_selection_creator(name);
          before2 = d3_selection_selector(before2);
          return this.select(function() {
            return this.insertBefore(name.apply(this, arguments), before2.apply(this, arguments) || null);
          });
        };
        d3_selectionPrototype.remove = function() {
          return this.each(d3_selectionRemove);
        };
        function d3_selectionRemove() {
          var parent = this.parentNode;
          if (parent) parent.removeChild(this);
        }
        d3_selectionPrototype.data = function(value, key2) {
          var i = -1, n = this.length, group, node;
          if (!arguments.length) {
            value = new Array(n = (group = this[0]).length);
            while (++i < n) {
              if (node = group[i]) {
                value[i] = node.__data__;
              }
            }
            return value;
          }
          function bind2(group2, groupData) {
            var i2, n2 = group2.length, m = groupData.length, n0 = Math.min(n2, m), updateNodes = new Array(m), enterNodes = new Array(m), exitNodes = new Array(n2), node2, nodeData;
            if (key2) {
              var nodeByKeyValue = new d3_Map(), keyValues = new Array(n2), keyValue;
              for (i2 = -1; ++i2 < n2; ) {
                if (node2 = group2[i2]) {
                  if (nodeByKeyValue.has(keyValue = key2.call(node2, node2.__data__, i2))) {
                    exitNodes[i2] = node2;
                  } else {
                    nodeByKeyValue.set(keyValue, node2);
                  }
                  keyValues[i2] = keyValue;
                }
              }
              for (i2 = -1; ++i2 < m; ) {
                if (!(node2 = nodeByKeyValue.get(keyValue = key2.call(groupData, nodeData = groupData[i2], i2)))) {
                  enterNodes[i2] = d3_selection_dataNode(nodeData);
                } else if (node2 !== true) {
                  updateNodes[i2] = node2;
                  node2.__data__ = nodeData;
                }
                nodeByKeyValue.set(keyValue, true);
              }
              for (i2 = -1; ++i2 < n2; ) {
                if (i2 in keyValues && nodeByKeyValue.get(keyValues[i2]) !== true) {
                  exitNodes[i2] = group2[i2];
                }
              }
            } else {
              for (i2 = -1; ++i2 < n0; ) {
                node2 = group2[i2];
                nodeData = groupData[i2];
                if (node2) {
                  node2.__data__ = nodeData;
                  updateNodes[i2] = node2;
                } else {
                  enterNodes[i2] = d3_selection_dataNode(nodeData);
                }
              }
              for (; i2 < m; ++i2) {
                enterNodes[i2] = d3_selection_dataNode(groupData[i2]);
              }
              for (; i2 < n2; ++i2) {
                exitNodes[i2] = group2[i2];
              }
            }
            enterNodes.update = updateNodes;
            enterNodes.parentNode = updateNodes.parentNode = exitNodes.parentNode = group2.parentNode;
            enter.push(enterNodes);
            update2.push(updateNodes);
            exit.push(exitNodes);
          }
          var enter = d3_selection_enter([]), update2 = d3_selection([]), exit = d3_selection([]);
          if (typeof value === "function") {
            while (++i < n) {
              bind2(group = this[i], value.call(group, group.parentNode.__data__, i));
            }
          } else {
            while (++i < n) {
              bind2(group = this[i], value);
            }
          }
          update2.enter = function() {
            return enter;
          };
          update2.exit = function() {
            return exit;
          };
          return update2;
        };
        function d3_selection_dataNode(data) {
          return {
            __data__: data
          };
        }
        d3_selectionPrototype.datum = function(value) {
          return arguments.length ? this.property("__data__", value) : this.property("__data__");
        };
        d3_selectionPrototype.filter = function(filter3) {
          var subgroups = [], subgroup, group, node;
          if (typeof filter3 !== "function") filter3 = d3_selection_filter(filter3);
          for (var j = 0, m = this.length; j < m; j++) {
            subgroups.push(subgroup = []);
            subgroup.parentNode = (group = this[j]).parentNode;
            for (var i = 0, n = group.length; i < n; i++) {
              if ((node = group[i]) && filter3.call(node, node.__data__, i, j)) {
                subgroup.push(node);
              }
            }
          }
          return d3_selection(subgroups);
        };
        function d3_selection_filter(selector) {
          return function() {
            return d3_selectMatches(this, selector);
          };
        }
        d3_selectionPrototype.order = function() {
          for (var j = -1, m = this.length; ++j < m; ) {
            for (var group = this[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
              if (node = group[i]) {
                if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
                next = node;
              }
            }
          }
          return this;
        };
        d3_selectionPrototype.sort = function(comparator) {
          comparator = d3_selection_sortComparator.apply(this, arguments);
          for (var j = -1, m = this.length; ++j < m; ) this[j].sort(comparator);
          return this.order();
        };
        function d3_selection_sortComparator(comparator) {
          if (!arguments.length) comparator = d3_ascending;
          return function(a, b) {
            return a && b ? comparator(a.__data__, b.__data__) : !a - !b;
          };
        }
        d3_selectionPrototype.each = function(callback) {
          return d3_selection_each(this, function(node, i, j) {
            callback.call(node, node.__data__, i, j);
          });
        };
        function d3_selection_each(groups, callback) {
          for (var j = 0, m = groups.length; j < m; j++) {
            for (var group = groups[j], i = 0, n = group.length, node; i < n; i++) {
              if (node = group[i]) callback(node, i, j);
            }
          }
          return groups;
        }
        d3_selectionPrototype.call = function(callback) {
          var args = d3_array(arguments);
          callback.apply(args[0] = this, args);
          return this;
        };
        d3_selectionPrototype.empty = function() {
          return !this.node();
        };
        d3_selectionPrototype.node = function() {
          for (var j = 0, m = this.length; j < m; j++) {
            for (var group = this[j], i = 0, n = group.length; i < n; i++) {
              var node = group[i];
              if (node) return node;
            }
          }
          return null;
        };
        d3_selectionPrototype.size = function() {
          var n = 0;
          d3_selection_each(this, function() {
            ++n;
          });
          return n;
        };
        function d3_selection_enter(selection) {
          d3_subclass(selection, d3_selection_enterPrototype);
          return selection;
        }
        var d3_selection_enterPrototype = [];
        d32.selection.enter = d3_selection_enter;
        d32.selection.enter.prototype = d3_selection_enterPrototype;
        d3_selection_enterPrototype.append = d3_selectionPrototype.append;
        d3_selection_enterPrototype.empty = d3_selectionPrototype.empty;
        d3_selection_enterPrototype.node = d3_selectionPrototype.node;
        d3_selection_enterPrototype.call = d3_selectionPrototype.call;
        d3_selection_enterPrototype.size = d3_selectionPrototype.size;
        d3_selection_enterPrototype.select = function(selector) {
          var subgroups = [], subgroup, subnode, upgroup, group, node;
          for (var j = -1, m = this.length; ++j < m; ) {
            upgroup = (group = this[j]).update;
            subgroups.push(subgroup = []);
            subgroup.parentNode = group.parentNode;
            for (var i = -1, n = group.length; ++i < n; ) {
              if (node = group[i]) {
                subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i, j));
                subnode.__data__ = node.__data__;
              } else {
                subgroup.push(null);
              }
            }
          }
          return d3_selection(subgroups);
        };
        d3_selection_enterPrototype.insert = function(name, before2) {
          if (arguments.length < 2) before2 = d3_selection_enterInsertBefore(this);
          return d3_selectionPrototype.insert.call(this, name, before2);
        };
        function d3_selection_enterInsertBefore(enter) {
          var i0, j0;
          return function(d, i, j) {
            var group = enter[j].update, n = group.length, node;
            if (j != j0) j0 = j, i0 = 0;
            if (i >= i0) i0 = i + 1;
            while (!(node = group[i0]) && ++i0 < n) ;
            return node;
          };
        }
        d32.select = function(node) {
          var group;
          if (typeof node === "string") {
            group = [d3_select(node, d3_document)];
            group.parentNode = d3_document.documentElement;
          } else {
            group = [node];
            group.parentNode = d3_documentElement(node);
          }
          return d3_selection([group]);
        };
        d32.selectAll = function(nodes) {
          var group;
          if (typeof nodes === "string") {
            group = d3_array(d3_selectAll(nodes, d3_document));
            group.parentNode = d3_document.documentElement;
          } else {
            group = d3_array(nodes);
            group.parentNode = null;
          }
          return d3_selection([group]);
        };
        d3_selectionPrototype.on = function(type, listener, capture) {
          var n = arguments.length;
          if (n < 3) {
            if (typeof type !== "string") {
              if (n < 2) listener = false;
              for (capture in type) this.each(d3_selection_on(capture, type[capture], listener));
              return this;
            }
            if (n < 2) return (n = this.node()["__on" + type]) && n._;
            capture = false;
          }
          return this.each(d3_selection_on(type, listener, capture));
        };
        function d3_selection_on(type, listener, capture) {
          var name = "__on" + type, i = type.indexOf("."), wrap = d3_selection_onListener;
          if (i > 0) type = type.slice(0, i);
          var filter3 = d3_selection_onFilters.get(type);
          if (filter3) type = filter3, wrap = d3_selection_onFilter;
          function onRemove() {
            var l = this[name];
            if (l) {
              this.removeEventListener(type, l, l.$);
              delete this[name];
            }
          }
          function onAdd() {
            var l = wrap(listener, d3_array(arguments));
            onRemove.call(this);
            this.addEventListener(type, this[name] = l, l.$ = capture);
            l._ = listener;
          }
          function removeAll() {
            var re = new RegExp("^__on([^.]+)" + d32.requote(type) + "$"), match;
            for (var name2 in this) {
              if (match = name2.match(re)) {
                var l = this[name2];
                this.removeEventListener(match[1], l, l.$);
                delete this[name2];
              }
            }
          }
          return i ? listener ? onAdd : onRemove : listener ? d3_noop : removeAll;
        }
        var d3_selection_onFilters = d32.map({
          mouseenter: "mouseover",
          mouseleave: "mouseout"
        });
        if (d3_document) {
          d3_selection_onFilters.forEach(function(k) {
            if ("on" + k in d3_document) d3_selection_onFilters.remove(k);
          });
        }
        function d3_selection_onListener(listener, argumentz) {
          return function(e) {
            var o = d32.event;
            d32.event = e;
            argumentz[0] = this.__data__;
            try {
              listener.apply(this, argumentz);
            } finally {
              d32.event = o;
            }
          };
        }
        function d3_selection_onFilter(listener, argumentz) {
          var l = d3_selection_onListener(listener, argumentz);
          return function(e) {
            var target = this, related = e.relatedTarget;
            if (!related || related !== target && !(related.compareDocumentPosition(target) & 8)) {
              l.call(target, e);
            }
          };
        }
        var d3_event_dragSelect, d3_event_dragId = 0;
        function d3_event_dragSuppress(node) {
          var name = ".dragsuppress-" + ++d3_event_dragId, click = "click" + name, w = d32.select(d3_window(node)).on("touchmove" + name, d3_eventPreventDefault).on("dragstart" + name, d3_eventPreventDefault).on("selectstart" + name, d3_eventPreventDefault);
          if (d3_event_dragSelect == null) {
            d3_event_dragSelect = "onselectstart" in node ? false : d3_vendorSymbol(node.style, "userSelect");
          }
          if (d3_event_dragSelect) {
            var style = d3_documentElement(node).style, select2 = style[d3_event_dragSelect];
            style[d3_event_dragSelect] = "none";
          }
          return function(suppressClick) {
            w.on(name, null);
            if (d3_event_dragSelect) style[d3_event_dragSelect] = select2;
            if (suppressClick) {
              var off = function() {
                w.on(click, null);
              };
              w.on(click, function() {
                d3_eventPreventDefault();
                off();
              }, true);
              setTimeout(off, 0);
            }
          };
        }
        d32.mouse = function(container) {
          return d3_mousePoint(container, d3_eventSource());
        };
        var d3_mouse_bug44083 = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
        function d3_mousePoint(container, e) {
          if (e.changedTouches) e = e.changedTouches[0];
          var svg3 = container.ownerSVGElement || container;
          if (svg3.createSVGPoint) {
            var point = svg3.createSVGPoint();
            if (d3_mouse_bug44083 < 0) {
              var window2 = d3_window(container);
              if (window2.scrollX || window2.scrollY) {
                svg3 = d32.select("body").append("svg").style({
                  position: "absolute",
                  top: 0,
                  left: 0,
                  margin: 0,
                  padding: 0,
                  border: "none"
                }, "important");
                var ctm = svg3[0][0].getScreenCTM();
                d3_mouse_bug44083 = !(ctm.f || ctm.e);
                svg3.remove();
              }
            }
            if (d3_mouse_bug44083) point.x = e.pageX, point.y = e.pageY;
            else point.x = e.clientX, point.y = e.clientY;
            point = point.matrixTransform(container.getScreenCTM().inverse());
            return [point.x, point.y];
          }
          var rect = container.getBoundingClientRect();
          return [e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop];
        }
        d32.touch = function(container, touches, identifier) {
          if (arguments.length < 3) identifier = touches, touches = d3_eventSource().changedTouches;
          if (touches) for (var i = 0, n = touches.length, touch; i < n; ++i) {
            if ((touch = touches[i]).identifier === identifier) {
              return d3_mousePoint(container, touch);
            }
          }
        };
        d32.behavior.drag = function() {
          var event = d3_eventDispatch(drag, "drag", "dragstart", "dragend"), origin = null, mousedown = dragstart(d3_noop, d32.mouse, d3_window, "mousemove", "mouseup"), touchstart = dragstart(d3_behavior_dragTouchId, d32.touch, d3_identity, "touchmove", "touchend");
          function drag() {
            this.on("mousedown.drag", mousedown).on("touchstart.drag", touchstart);
          }
          function dragstart(id, position, subject, move, end) {
            return function() {
              var that = this, target = d32.event.target.correspondingElement || d32.event.target, parent = that.parentNode, dispatch = event.of(that, arguments), dragged = 0, dragId = id(), dragName = ".drag" + (dragId == null ? "" : "-" + dragId), dragOffset, dragSubject = d32.select(subject(target)).on(move + dragName, moved).on(end + dragName, ended), dragRestore = d3_event_dragSuppress(target), position0 = position(parent, dragId);
              if (origin) {
                dragOffset = origin.apply(that, arguments);
                dragOffset = [dragOffset.x - position0[0], dragOffset.y - position0[1]];
              } else {
                dragOffset = [0, 0];
              }
              dispatch({
                type: "dragstart"
              });
              function moved() {
                var position1 = position(parent, dragId), dx, dy;
                if (!position1) return;
                dx = position1[0] - position0[0];
                dy = position1[1] - position0[1];
                dragged |= dx | dy;
                position0 = position1;
                dispatch({
                  type: "drag",
                  x: position1[0] + dragOffset[0],
                  y: position1[1] + dragOffset[1],
                  dx,
                  dy
                });
              }
              function ended() {
                if (!position(parent, dragId)) return;
                dragSubject.on(move + dragName, null).on(end + dragName, null);
                dragRestore(dragged);
                dispatch({
                  type: "dragend"
                });
              }
            };
          }
          drag.origin = function(x) {
            if (!arguments.length) return origin;
            origin = x;
            return drag;
          };
          return d32.rebind(drag, event, "on");
        };
        function d3_behavior_dragTouchId() {
          return d32.event.changedTouches[0].identifier;
        }
        d32.touches = function(container, touches) {
          if (arguments.length < 2) touches = d3_eventSource().touches;
          return touches ? d3_array(touches).map(function(touch) {
            var point = d3_mousePoint(container, touch);
            point.identifier = touch.identifier;
            return point;
          }) : [];
        };
        var \u03B5 = 1e-6, \u03B52 = \u03B5 * \u03B5, \u03C0 = Math.PI, \u03C4 = 2 * \u03C0, \u03C4\u03B5 = \u03C4 - \u03B5, half\u03C0 = \u03C0 / 2, d3_radians = \u03C0 / 180, d3_degrees = 180 / \u03C0;
        function d3_sgn(x) {
          return x > 0 ? 1 : x < 0 ? -1 : 0;
        }
        function d3_cross2d(a, b, c) {
          return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
        }
        function d3_acos(x) {
          return x > 1 ? 0 : x < -1 ? \u03C0 : Math.acos(x);
        }
        function d3_asin(x) {
          return x > 1 ? half\u03C0 : x < -1 ? -half\u03C0 : Math.asin(x);
        }
        function d3_sinh(x) {
          return ((x = Math.exp(x)) - 1 / x) / 2;
        }
        function d3_cosh(x) {
          return ((x = Math.exp(x)) + 1 / x) / 2;
        }
        function d3_tanh(x) {
          return ((x = Math.exp(2 * x)) - 1) / (x + 1);
        }
        function d3_haversin(x) {
          return (x = Math.sin(x / 2)) * x;
        }
        var \u03C1 = Math.SQRT2, \u03C12 = 2, \u03C14 = 4;
        d32.interpolateZoom = function(p0, p1) {
          var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
          if (d2 < \u03B52) {
            S = Math.log(w1 / w0) / \u03C1;
            i = function(t) {
              return [ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(\u03C1 * t * S)];
            };
          } else {
            var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + \u03C14 * d2) / (2 * w0 * \u03C12 * d1), b1 = (w1 * w1 - w0 * w0 - \u03C14 * d2) / (2 * w1 * \u03C12 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
            S = (r1 - r0) / \u03C1;
            i = function(t) {
              var s = t * S, coshr0 = d3_cosh(r0), u = w0 / (\u03C12 * d1) * (coshr0 * d3_tanh(\u03C1 * s + r0) - d3_sinh(r0));
              return [ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / d3_cosh(\u03C1 * s + r0)];
            };
          }
          i.duration = S * 1e3;
          return i;
        };
        d32.behavior.zoom = function() {
          var view = {
            x: 0,
            y: 0,
            k: 1
          }, translate0, center0, center, size2 = [960, 500], scaleExtent = d3_behavior_zoomInfinity, duration = 250, zooming = 0, mousedown = "mousedown.zoom", mousemove = "mousemove.zoom", mouseup = "mouseup.zoom", mousewheelTimer, touchstart = "touchstart.zoom", touchtime, event = d3_eventDispatch(zoom, "zoomstart", "zoom", "zoomend"), x0, x1, y0, y1;
          if (!d3_behavior_zoomWheel) {
            d3_behavior_zoomWheel = "onwheel" in d3_document ? (d3_behavior_zoomDelta = function() {
              return -d32.event.deltaY * (d32.event.deltaMode ? 120 : 1);
            }, "wheel") : "onmousewheel" in d3_document ? (d3_behavior_zoomDelta = function() {
              return d32.event.wheelDelta;
            }, "mousewheel") : (d3_behavior_zoomDelta = function() {
              return -d32.event.detail;
            }, "MozMousePixelScroll");
          }
          function zoom(g) {
            g.on(mousedown, mousedowned).on(d3_behavior_zoomWheel + ".zoom", mousewheeled).on("dblclick.zoom", dblclicked).on(touchstart, touchstarted);
          }
          zoom.event = function(g) {
            g.each(function() {
              var dispatch = event.of(this, arguments), view1 = view;
              if (d3_transitionInheritId) {
                d32.select(this).transition().each("start.zoom", function() {
                  view = this.__chart__ || {
                    x: 0,
                    y: 0,
                    k: 1
                  };
                  zoomstarted(dispatch);
                }).tween("zoom:zoom", function() {
                  var dx = size2[0], dy = size2[1], cx = center0 ? center0[0] : dx / 2, cy = center0 ? center0[1] : dy / 2, i = d32.interpolateZoom([(cx - view.x) / view.k, (cy - view.y) / view.k, dx / view.k], [(cx - view1.x) / view1.k, (cy - view1.y) / view1.k, dx / view1.k]);
                  return function(t) {
                    var l = i(t), k = dx / l[2];
                    this.__chart__ = view = {
                      x: cx - l[0] * k,
                      y: cy - l[1] * k,
                      k
                    };
                    zoomed(dispatch);
                  };
                }).each("interrupt.zoom", function() {
                  zoomended(dispatch);
                }).each("end.zoom", function() {
                  zoomended(dispatch);
                });
              } else {
                this.__chart__ = view;
                zoomstarted(dispatch);
                zoomed(dispatch);
                zoomended(dispatch);
              }
            });
          };
          zoom.translate = function(_) {
            if (!arguments.length) return [view.x, view.y];
            view = {
              x: +_[0],
              y: +_[1],
              k: view.k
            };
            rescale();
            return zoom;
          };
          zoom.scale = function(_) {
            if (!arguments.length) return view.k;
            view = {
              x: view.x,
              y: view.y,
              k: null
            };
            scaleTo(+_);
            rescale();
            return zoom;
          };
          zoom.scaleExtent = function(_) {
            if (!arguments.length) return scaleExtent;
            scaleExtent = _ == null ? d3_behavior_zoomInfinity : [+_[0], +_[1]];
            return zoom;
          };
          zoom.center = function(_) {
            if (!arguments.length) return center;
            center = _ && [+_[0], +_[1]];
            return zoom;
          };
          zoom.size = function(_) {
            if (!arguments.length) return size2;
            size2 = _ && [+_[0], +_[1]];
            return zoom;
          };
          zoom.duration = function(_) {
            if (!arguments.length) return duration;
            duration = +_;
            return zoom;
          };
          zoom.x = function(z) {
            if (!arguments.length) return x1;
            x1 = z;
            x0 = z.copy();
            view = {
              x: 0,
              y: 0,
              k: 1
            };
            return zoom;
          };
          zoom.y = function(z) {
            if (!arguments.length) return y1;
            y1 = z;
            y0 = z.copy();
            view = {
              x: 0,
              y: 0,
              k: 1
            };
            return zoom;
          };
          function location2(p) {
            return [(p[0] - view.x) / view.k, (p[1] - view.y) / view.k];
          }
          function point(l) {
            return [l[0] * view.k + view.x, l[1] * view.k + view.y];
          }
          function scaleTo(s) {
            view.k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], s));
          }
          function translateTo(p, l) {
            l = point(l);
            view.x += p[0] - l[0];
            view.y += p[1] - l[1];
          }
          function zoomTo(that, p, l, k) {
            that.__chart__ = {
              x: view.x,
              y: view.y,
              k: view.k
            };
            scaleTo(Math.pow(2, k));
            translateTo(center0 = p, l);
            that = d32.select(that);
            if (duration > 0) that = that.transition().duration(duration);
            that.call(zoom.event);
          }
          function rescale() {
            if (x1) x1.domain(x0.range().map(function(x) {
              return (x - view.x) / view.k;
            }).map(x0.invert));
            if (y1) y1.domain(y0.range().map(function(y) {
              return (y - view.y) / view.k;
            }).map(y0.invert));
          }
          function zoomstarted(dispatch) {
            if (!zooming++) dispatch({
              type: "zoomstart"
            });
          }
          function zoomed(dispatch) {
            rescale();
            dispatch({
              type: "zoom",
              scale: view.k,
              translate: [view.x, view.y]
            });
          }
          function zoomended(dispatch) {
            if (!--zooming) dispatch({
              type: "zoomend"
            }), center0 = null;
          }
          function mousedowned() {
            var that = this, dispatch = event.of(that, arguments), dragged = 0, subject = d32.select(d3_window(that)).on(mousemove, moved).on(mouseup, ended), location0 = location2(d32.mouse(that)), dragRestore = d3_event_dragSuppress(that);
            d3_selection_interrupt.call(that);
            zoomstarted(dispatch);
            function moved() {
              dragged = 1;
              translateTo(d32.mouse(that), location0);
              zoomed(dispatch);
            }
            function ended() {
              subject.on(mousemove, null).on(mouseup, null);
              dragRestore(dragged);
              zoomended(dispatch);
            }
          }
          function touchstarted() {
            var that = this, dispatch = event.of(that, arguments), locations0 = {}, distance0 = 0, scale0, zoomName = ".zoom-" + d32.event.changedTouches[0].identifier, touchmove = "touchmove" + zoomName, touchend = "touchend" + zoomName, targets = [], subject = d32.select(that), dragRestore = d3_event_dragSuppress(that);
            started();
            zoomstarted(dispatch);
            subject.on(mousedown, null).on(touchstart, started);
            function relocate() {
              var touches = d32.touches(that);
              scale0 = view.k;
              touches.forEach(function(t) {
                if (t.identifier in locations0) locations0[t.identifier] = location2(t);
              });
              return touches;
            }
            function started() {
              var target = d32.event.target;
              d32.select(target).on(touchmove, moved).on(touchend, ended);
              targets.push(target);
              var changed = d32.event.changedTouches;
              for (var i = 0, n = changed.length; i < n; ++i) {
                locations0[changed[i].identifier] = null;
              }
              var touches = relocate(), now = Date.now();
              if (touches.length === 1) {
                if (now - touchtime < 500) {
                  var p = touches[0];
                  zoomTo(that, p, locations0[p.identifier], Math.floor(Math.log(view.k) / Math.LN2) + 1);
                  d3_eventPreventDefault();
                }
                touchtime = now;
              } else if (touches.length > 1) {
                var p = touches[0], q = touches[1], dx = p[0] - q[0], dy = p[1] - q[1];
                distance0 = dx * dx + dy * dy;
              }
            }
            function moved() {
              var touches = d32.touches(that), p0, l0, p1, l1;
              d3_selection_interrupt.call(that);
              for (var i = 0, n = touches.length; i < n; ++i, l1 = null) {
                p1 = touches[i];
                if (l1 = locations0[p1.identifier]) {
                  if (l0) break;
                  p0 = p1, l0 = l1;
                }
              }
              if (l1) {
                var distance1 = (distance1 = p1[0] - p0[0]) * distance1 + (distance1 = p1[1] - p0[1]) * distance1, scale1 = distance0 && Math.sqrt(distance1 / distance0);
                p0 = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
                l0 = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
                scaleTo(scale1 * scale0);
              }
              touchtime = null;
              translateTo(p0, l0);
              zoomed(dispatch);
            }
            function ended() {
              if (d32.event.touches.length) {
                var changed = d32.event.changedTouches;
                for (var i = 0, n = changed.length; i < n; ++i) {
                  delete locations0[changed[i].identifier];
                }
                for (var identifier in locations0) {
                  return void relocate();
                }
              }
              d32.selectAll(targets).on(zoomName, null);
              subject.on(mousedown, mousedowned).on(touchstart, touchstarted);
              dragRestore();
              zoomended(dispatch);
            }
          }
          function mousewheeled() {
            var dispatch = event.of(this, arguments);
            if (mousewheelTimer) clearTimeout(mousewheelTimer);
            else d3_selection_interrupt.call(this), translate0 = location2(center0 = center || d32.mouse(this)), zoomstarted(dispatch);
            mousewheelTimer = setTimeout(function() {
              mousewheelTimer = null;
              zoomended(dispatch);
            }, 50);
            d3_eventPreventDefault();
            scaleTo(Math.pow(2, d3_behavior_zoomDelta() * 2e-3) * view.k);
            translateTo(center0, translate0);
            zoomed(dispatch);
          }
          function dblclicked() {
            var p = d32.mouse(this), k = Math.log(view.k) / Math.LN2;
            zoomTo(this, p, location2(p), d32.event.shiftKey ? Math.ceil(k) - 1 : Math.floor(k) + 1);
          }
          return d32.rebind(zoom, event, "on");
        };
        var d3_behavior_zoomInfinity = [0, Infinity], d3_behavior_zoomDelta, d3_behavior_zoomWheel;
        d32.color = d3_color;
        function d3_color() {
        }
        d3_color.prototype.toString = function() {
          return this.rgb() + "";
        };
        d32.hsl = d3_hsl;
        function d3_hsl(h, s, l) {
          return this instanceof d3_hsl ? void (this.h = +h, this.s = +s, this.l = +l) : arguments.length < 2 ? h instanceof d3_hsl ? new d3_hsl(h.h, h.s, h.l) : d3_rgb_parse("" + h, d3_rgb_hsl, d3_hsl) : new d3_hsl(h, s, l);
        }
        var d3_hslPrototype = d3_hsl.prototype = new d3_color();
        d3_hslPrototype.brighter = function(k) {
          k = Math.pow(0.7, arguments.length ? k : 1);
          return new d3_hsl(this.h, this.s, this.l / k);
        };
        d3_hslPrototype.darker = function(k) {
          k = Math.pow(0.7, arguments.length ? k : 1);
          return new d3_hsl(this.h, this.s, k * this.l);
        };
        d3_hslPrototype.rgb = function() {
          return d3_hsl_rgb(this.h, this.s, this.l);
        };
        function d3_hsl_rgb(h, s, l) {
          var m1, m2;
          h = isNaN(h) ? 0 : (h %= 360) < 0 ? h + 360 : h;
          s = isNaN(s) ? 0 : s < 0 ? 0 : s > 1 ? 1 : s;
          l = l < 0 ? 0 : l > 1 ? 1 : l;
          m2 = l <= 0.5 ? l * (1 + s) : l + s - l * s;
          m1 = 2 * l - m2;
          function v(h2) {
            if (h2 > 360) h2 -= 360;
            else if (h2 < 0) h2 += 360;
            if (h2 < 60) return m1 + (m2 - m1) * h2 / 60;
            if (h2 < 180) return m2;
            if (h2 < 240) return m1 + (m2 - m1) * (240 - h2) / 60;
            return m1;
          }
          function vv(h2) {
            return Math.round(v(h2) * 255);
          }
          return new d3_rgb(vv(h + 120), vv(h), vv(h - 120));
        }
        d32.hcl = d3_hcl;
        function d3_hcl(h, c, l) {
          return this instanceof d3_hcl ? void (this.h = +h, this.c = +c, this.l = +l) : arguments.length < 2 ? h instanceof d3_hcl ? new d3_hcl(h.h, h.c, h.l) : h instanceof d3_lab ? d3_lab_hcl(h.l, h.a, h.b) : d3_lab_hcl((h = d3_rgb_lab((h = d32.rgb(h)).r, h.g, h.b)).l, h.a, h.b) : new d3_hcl(h, c, l);
        }
        var d3_hclPrototype = d3_hcl.prototype = new d3_color();
        d3_hclPrototype.brighter = function(k) {
          return new d3_hcl(this.h, this.c, Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)));
        };
        d3_hclPrototype.darker = function(k) {
          return new d3_hcl(this.h, this.c, Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)));
        };
        d3_hclPrototype.rgb = function() {
          return d3_hcl_lab(this.h, this.c, this.l).rgb();
        };
        function d3_hcl_lab(h, c, l) {
          if (isNaN(h)) h = 0;
          if (isNaN(c)) c = 0;
          return new d3_lab(l, Math.cos(h *= d3_radians) * c, Math.sin(h) * c);
        }
        d32.lab = d3_lab;
        function d3_lab(l, a, b) {
          return this instanceof d3_lab ? void (this.l = +l, this.a = +a, this.b = +b) : arguments.length < 2 ? l instanceof d3_lab ? new d3_lab(l.l, l.a, l.b) : l instanceof d3_hcl ? d3_hcl_lab(l.h, l.c, l.l) : d3_rgb_lab((l = d3_rgb(l)).r, l.g, l.b) : new d3_lab(l, a, b);
        }
        var d3_lab_K = 18;
        var d3_lab_X = 0.95047, d3_lab_Y = 1, d3_lab_Z = 1.08883;
        var d3_labPrototype = d3_lab.prototype = new d3_color();
        d3_labPrototype.brighter = function(k) {
          return new d3_lab(Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
        };
        d3_labPrototype.darker = function(k) {
          return new d3_lab(Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
        };
        d3_labPrototype.rgb = function() {
          return d3_lab_rgb(this.l, this.a, this.b);
        };
        function d3_lab_rgb(l, a, b) {
          var y = (l + 16) / 116, x = y + a / 500, z = y - b / 200;
          x = d3_lab_xyz(x) * d3_lab_X;
          y = d3_lab_xyz(y) * d3_lab_Y;
          z = d3_lab_xyz(z) * d3_lab_Z;
          return new d3_rgb(d3_xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z), d3_xyz_rgb(-0.969266 * x + 1.8760108 * y + 0.041556 * z), d3_xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z));
        }
        function d3_lab_hcl(l, a, b) {
          return l > 0 ? new d3_hcl(Math.atan2(b, a) * d3_degrees, Math.sqrt(a * a + b * b), l) : new d3_hcl(NaN, NaN, l);
        }
        function d3_lab_xyz(x) {
          return x > 0.206893034 ? x * x * x : (x - 4 / 29) / 7.787037;
        }
        function d3_xyz_lab(x) {
          return x > 8856e-6 ? Math.pow(x, 1 / 3) : 7.787037 * x + 4 / 29;
        }
        function d3_xyz_rgb(r) {
          return Math.round(255 * (r <= 304e-5 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - 0.055));
        }
        d32.rgb = d3_rgb;
        function d3_rgb(r, g, b) {
          return this instanceof d3_rgb ? void (this.r = ~~r, this.g = ~~g, this.b = ~~b) : arguments.length < 2 ? r instanceof d3_rgb ? new d3_rgb(r.r, r.g, r.b) : d3_rgb_parse("" + r, d3_rgb, d3_hsl_rgb) : new d3_rgb(r, g, b);
        }
        function d3_rgbNumber(value) {
          return new d3_rgb(value >> 16, value >> 8 & 255, value & 255);
        }
        function d3_rgbString(value) {
          return d3_rgbNumber(value) + "";
        }
        var d3_rgbPrototype = d3_rgb.prototype = new d3_color();
        d3_rgbPrototype.brighter = function(k) {
          k = Math.pow(0.7, arguments.length ? k : 1);
          var r = this.r, g = this.g, b = this.b, i = 30;
          if (!r && !g && !b) return new d3_rgb(i, i, i);
          if (r && r < i) r = i;
          if (g && g < i) g = i;
          if (b && b < i) b = i;
          return new d3_rgb(Math.min(255, r / k), Math.min(255, g / k), Math.min(255, b / k));
        };
        d3_rgbPrototype.darker = function(k) {
          k = Math.pow(0.7, arguments.length ? k : 1);
          return new d3_rgb(k * this.r, k * this.g, k * this.b);
        };
        d3_rgbPrototype.hsl = function() {
          return d3_rgb_hsl(this.r, this.g, this.b);
        };
        d3_rgbPrototype.toString = function() {
          return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b);
        };
        function d3_rgb_hex(v) {
          return v < 16 ? "0" + Math.max(0, v).toString(16) : Math.min(255, v).toString(16);
        }
        function d3_rgb_parse(format2, rgb, hsl) {
          var r = 0, g = 0, b = 0, m1, m2, color2;
          m1 = /([a-z]+)\((.*)\)/.exec(format2 = format2.toLowerCase());
          if (m1) {
            m2 = m1[2].split(",");
            switch (m1[1]) {
              case "hsl": {
                return hsl(parseFloat(m2[0]), parseFloat(m2[1]) / 100, parseFloat(m2[2]) / 100);
              }
              case "rgb": {
                return rgb(d3_rgb_parseNumber(m2[0]), d3_rgb_parseNumber(m2[1]), d3_rgb_parseNumber(m2[2]));
              }
            }
          }
          if (color2 = d3_rgb_names.get(format2)) {
            return rgb(color2.r, color2.g, color2.b);
          }
          if (format2 != null && format2.charAt(0) === "#" && !isNaN(color2 = parseInt(format2.slice(1), 16))) {
            if (format2.length === 4) {
              r = (color2 & 3840) >> 4;
              r = r >> 4 | r;
              g = color2 & 240;
              g = g >> 4 | g;
              b = color2 & 15;
              b = b << 4 | b;
            } else if (format2.length === 7) {
              r = (color2 & 16711680) >> 16;
              g = (color2 & 65280) >> 8;
              b = color2 & 255;
            }
          }
          return rgb(r, g, b);
        }
        function d3_rgb_hsl(r, g, b) {
          var min3 = Math.min(r /= 255, g /= 255, b /= 255), max3 = Math.max(r, g, b), d = max3 - min3, h, s, l = (max3 + min3) / 2;
          if (d) {
            s = l < 0.5 ? d / (max3 + min3) : d / (2 - max3 - min3);
            if (r == max3) h = (g - b) / d + (g < b ? 6 : 0);
            else if (g == max3) h = (b - r) / d + 2;
            else h = (r - g) / d + 4;
            h *= 60;
          } else {
            h = NaN;
            s = l > 0 && l < 1 ? 0 : h;
          }
          return new d3_hsl(h, s, l);
        }
        function d3_rgb_lab(r, g, b) {
          r = d3_rgb_xyz(r);
          g = d3_rgb_xyz(g);
          b = d3_rgb_xyz(b);
          var x = d3_xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / d3_lab_X), y = d3_xyz_lab((0.2126729 * r + 0.7151522 * g + 0.072175 * b) / d3_lab_Y), z = d3_xyz_lab((0.0193339 * r + 0.119192 * g + 0.9503041 * b) / d3_lab_Z);
          return d3_lab(116 * y - 16, 500 * (x - y), 200 * (y - z));
        }
        function d3_rgb_xyz(r) {
          return (r /= 255) <= 0.04045 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
        }
        function d3_rgb_parseNumber(c) {
          var f = parseFloat(c);
          return c.charAt(c.length - 1) === "%" ? Math.round(f * 2.55) : f;
        }
        var d3_rgb_names = d32.map({
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074
        });
        d3_rgb_names.forEach(function(key2, value) {
          d3_rgb_names.set(key2, d3_rgbNumber(value));
        });
        function d3_functor(v) {
          return typeof v === "function" ? v : function() {
            return v;
          };
        }
        d32.functor = d3_functor;
        d32.xhr = d3_xhrType(d3_identity);
        function d3_xhrType(response) {
          return function(url, mimeType, callback) {
            if (arguments.length === 2 && typeof mimeType === "function") callback = mimeType, mimeType = null;
            return d3_xhr(url, mimeType, response, callback);
          };
        }
        function d3_xhr(url, mimeType, response, callback) {
          var xhr = {}, dispatch = d32.dispatch("beforesend", "progress", "load", "error"), headers = {}, request = new XMLHttpRequest(), responseType = null;
          if (this.XDomainRequest && !("withCredentials" in request) && /^(http(s)?:)?\/\//.test(url)) request = new XDomainRequest();
          "onload" in request ? request.onload = request.onerror = respond : request.onreadystatechange = function() {
            request.readyState > 3 && respond();
          };
          function respond() {
            var status = request.status, result;
            if (!status && d3_xhrHasResponse(request) || status >= 200 && status < 300 || status === 304) {
              try {
                result = response.call(xhr, request);
              } catch (e) {
                dispatch.error.call(xhr, e);
                return;
              }
              dispatch.load.call(xhr, result);
            } else {
              dispatch.error.call(xhr, request);
            }
          }
          request.onprogress = function(event) {
            var o = d32.event;
            d32.event = event;
            try {
              dispatch.progress.call(xhr, request);
            } finally {
              d32.event = o;
            }
          };
          xhr.header = function(name, value) {
            name = (name + "").toLowerCase();
            if (arguments.length < 2) return headers[name];
            if (value == null) delete headers[name];
            else headers[name] = value + "";
            return xhr;
          };
          xhr.mimeType = function(value) {
            if (!arguments.length) return mimeType;
            mimeType = value == null ? null : value + "";
            return xhr;
          };
          xhr.responseType = function(value) {
            if (!arguments.length) return responseType;
            responseType = value;
            return xhr;
          };
          xhr.response = function(value) {
            response = value;
            return xhr;
          };
          ["get", "post"].forEach(function(method) {
            xhr[method] = function() {
              return xhr.send.apply(xhr, [method].concat(d3_array(arguments)));
            };
          });
          xhr.send = function(method, data, callback2) {
            if (arguments.length === 2 && typeof data === "function") callback2 = data, data = null;
            request.open(method, url, true);
            if (mimeType != null && !("accept" in headers)) headers["accept"] = mimeType + ",*/*";
            if (request.setRequestHeader) for (var name in headers) request.setRequestHeader(name, headers[name]);
            if (mimeType != null && request.overrideMimeType) request.overrideMimeType(mimeType);
            if (responseType != null) request.responseType = responseType;
            if (callback2 != null) xhr.on("error", callback2).on("load", function(request2) {
              callback2(null, request2);
            });
            dispatch.beforesend.call(xhr, request);
            request.send(data == null ? null : data);
            return xhr;
          };
          xhr.abort = function() {
            request.abort();
            return xhr;
          };
          d32.rebind(xhr, dispatch, "on");
          return callback == null ? xhr : xhr.get(d3_xhr_fixCallback(callback));
        }
        function d3_xhr_fixCallback(callback) {
          return callback.length === 1 ? function(error, request) {
            callback(error == null ? request : null);
          } : callback;
        }
        function d3_xhrHasResponse(request) {
          var type = request.responseType;
          return type && type !== "text" ? request.response : request.responseText;
        }
        d32.dsv = function(delimiter, mimeType) {
          var reFormat = new RegExp('["' + delimiter + "\n]"), delimiterCode = delimiter.charCodeAt(0);
          function dsv(url, row, callback) {
            if (arguments.length < 3) callback = row, row = null;
            var xhr = d3_xhr(url, mimeType, row == null ? response : typedResponse(row), callback);
            xhr.row = function(_) {
              return arguments.length ? xhr.response((row = _) == null ? response : typedResponse(_)) : row;
            };
            return xhr;
          }
          function response(request) {
            return dsv.parse(request.responseText);
          }
          function typedResponse(f) {
            return function(request) {
              return dsv.parse(request.responseText, f);
            };
          }
          dsv.parse = function(text, f) {
            var o;
            return dsv.parseRows(text, function(row, i) {
              if (o) return o(row, i - 1);
              var a = new Function("d", "return {" + row.map(function(name, i2) {
                return JSON.stringify(name) + ": d[" + i2 + "]";
              }).join(",") + "}");
              o = f ? function(row2, i2) {
                return f(a(row2), i2);
              } : a;
            });
          };
          dsv.parseRows = function(text, f) {
            var EOL = {}, EOF = {}, rows = [], N = text.length, I = 0, n = 0, t, eol;
            function token() {
              if (I >= N) return EOF;
              if (eol) return eol = false, EOL;
              var j = I;
              if (text.charCodeAt(j) === 34) {
                var i = j;
                while (i++ < N) {
                  if (text.charCodeAt(i) === 34) {
                    if (text.charCodeAt(i + 1) !== 34) break;
                    ++i;
                  }
                }
                I = i + 2;
                var c = text.charCodeAt(i + 1);
                if (c === 13) {
                  eol = true;
                  if (text.charCodeAt(i + 2) === 10) ++I;
                } else if (c === 10) {
                  eol = true;
                }
                return text.slice(j + 1, i).replace(/""/g, '"');
              }
              while (I < N) {
                var c = text.charCodeAt(I++), k = 1;
                if (c === 10) eol = true;
                else if (c === 13) {
                  eol = true;
                  if (text.charCodeAt(I) === 10) ++I, ++k;
                } else if (c !== delimiterCode) continue;
                return text.slice(j, I - k);
              }
              return text.slice(j);
            }
            while ((t = token()) !== EOF) {
              var a = [];
              while (t !== EOL && t !== EOF) {
                a.push(t);
                t = token();
              }
              if (f && (a = f(a, n++)) == null) continue;
              rows.push(a);
            }
            return rows;
          };
          dsv.format = function(rows) {
            if (Array.isArray(rows[0])) return dsv.formatRows(rows);
            var fieldSet = new d3_Set(), fields = [];
            rows.forEach(function(row) {
              for (var field in row) {
                if (!fieldSet.has(field)) {
                  fields.push(fieldSet.add(field));
                }
              }
            });
            return [fields.map(formatValue).join(delimiter)].concat(rows.map(function(row) {
              return fields.map(function(field) {
                return formatValue(row[field]);
              }).join(delimiter);
            })).join("\n");
          };
          dsv.formatRows = function(rows) {
            return rows.map(formatRow).join("\n");
          };
          function formatRow(row) {
            return row.map(formatValue).join(delimiter);
          }
          function formatValue(text) {
            return reFormat.test(text) ? '"' + text.replace(/\"/g, '""') + '"' : text;
          }
          return dsv;
        };
        d32.csv = d32.dsv(",", "text/csv");
        d32.tsv = d32.dsv("	", "text/tab-separated-values");
        var d3_timer_queueHead, d3_timer_queueTail, d3_timer_interval, d3_timer_timeout, d3_timer_frame = this[d3_vendorSymbol(this, "requestAnimationFrame")] || function(callback) {
          setTimeout(callback, 17);
        };
        d32.timer = function() {
          d3_timer.apply(this, arguments);
        };
        function d3_timer(callback, delay, then) {
          var n = arguments.length;
          if (n < 2) delay = 0;
          if (n < 3) then = Date.now();
          var time = then + delay, timer = {
            c: callback,
            t: time,
            n: null
          };
          if (d3_timer_queueTail) d3_timer_queueTail.n = timer;
          else d3_timer_queueHead = timer;
          d3_timer_queueTail = timer;
          if (!d3_timer_interval) {
            d3_timer_timeout = clearTimeout(d3_timer_timeout);
            d3_timer_interval = 1;
            d3_timer_frame(d3_timer_step);
          }
          return timer;
        }
        function d3_timer_step() {
          var now = d3_timer_mark(), delay = d3_timer_sweep() - now;
          if (delay > 24) {
            if (isFinite(delay)) {
              clearTimeout(d3_timer_timeout);
              d3_timer_timeout = setTimeout(d3_timer_step, delay);
            }
            d3_timer_interval = 0;
          } else {
            d3_timer_interval = 1;
            d3_timer_frame(d3_timer_step);
          }
        }
        d32.timer.flush = function() {
          d3_timer_mark();
          d3_timer_sweep();
        };
        function d3_timer_mark() {
          var now = Date.now(), timer = d3_timer_queueHead;
          while (timer) {
            if (now >= timer.t && timer.c(now - timer.t)) timer.c = null;
            timer = timer.n;
          }
          return now;
        }
        function d3_timer_sweep() {
          var t0, t1 = d3_timer_queueHead, time = Infinity;
          while (t1) {
            if (t1.c) {
              if (t1.t < time) time = t1.t;
              t1 = (t0 = t1).n;
            } else {
              t1 = t0 ? t0.n = t1.n : d3_timer_queueHead = t1.n;
            }
          }
          d3_timer_queueTail = t0;
          return time;
        }
        function d3_format_precision(x, p) {
          return p - (x ? Math.ceil(Math.log(x) / Math.LN10) : 1);
        }
        d32.round = function(x, n) {
          return n ? Math.round(x * (n = Math.pow(10, n))) / n : Math.round(x);
        };
        var d3_formatPrefixes = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(d3_formatPrefix);
        d32.formatPrefix = function(value, precision) {
          var i = 0;
          if (value = +value) {
            if (value < 0) value *= -1;
            if (precision) value = d32.round(value, d3_format_precision(value, precision));
            i = 1 + Math.floor(1e-12 + Math.log(value) / Math.LN10);
            i = Math.max(-24, Math.min(24, Math.floor((i - 1) / 3) * 3));
          }
          return d3_formatPrefixes[8 + i / 3];
        };
        function d3_formatPrefix(d, i) {
          var k = Math.pow(10, abs3(8 - i) * 3);
          return {
            scale: i > 8 ? function(d2) {
              return d2 / k;
            } : function(d2) {
              return d2 * k;
            },
            symbol: d
          };
        }
        function d3_locale_numberFormat(locale) {
          var locale_decimal = locale.decimal, locale_thousands = locale.thousands, locale_grouping = locale.grouping, locale_currency = locale.currency, formatGroup = locale_grouping && locale_thousands ? function(value, width2) {
            var i = value.length, t = [], j = 0, g = locale_grouping[0], length4 = 0;
            while (i > 0 && g > 0) {
              if (length4 + g + 1 > width2) g = Math.max(1, width2 - length4);
              t.push(value.substring(i -= g, i + g));
              if ((length4 += g + 1) > width2) break;
              g = locale_grouping[j = (j + 1) % locale_grouping.length];
            }
            return t.reverse().join(locale_thousands);
          } : d3_identity;
          return function(specifier) {
            var match = d3_format_re.exec(specifier), fill = match[1] || " ", align = match[2] || ">", sign2 = match[3] || "-", symbol = match[4] || "", zfill = match[5], width2 = +match[6], comma = match[7], precision = match[8], type = match[9], scale2 = 1, prefix = "", suffix = "", integer = false, exponent = true;
            if (precision) precision = +precision.substring(1);
            if (zfill || fill === "0" && align === "=") {
              zfill = fill = "0";
              align = "=";
            }
            switch (type) {
              case "n":
                comma = true;
                type = "g";
                break;
              case "%":
                scale2 = 100;
                suffix = "%";
                type = "f";
                break;
              case "p":
                scale2 = 100;
                suffix = "%";
                type = "r";
                break;
              case "b":
              case "o":
              case "x":
              case "X":
                if (symbol === "#") prefix = "0" + type.toLowerCase();
              case "c":
                exponent = false;
              case "d":
                integer = true;
                precision = 0;
                break;
              case "s":
                scale2 = -1;
                type = "r";
                break;
            }
            if (symbol === "$") prefix = locale_currency[0], suffix = locale_currency[1];
            if (type == "r" && !precision) type = "g";
            if (precision != null) {
              if (type == "g") precision = Math.max(1, Math.min(21, precision));
              else if (type == "e" || type == "f") precision = Math.max(0, Math.min(20, precision));
            }
            type = d3_format_types.get(type) || d3_format_typeDefault;
            var zcomma = zfill && comma;
            return function(value) {
              var fullSuffix = suffix;
              if (integer && value % 1) return "";
              var negative = value < 0 || value === 0 && 1 / value < 0 ? (value = -value, "-") : sign2 === "-" ? "" : sign2;
              if (scale2 < 0) {
                var unit2 = d32.formatPrefix(value, precision);
                value = unit2.scale(value);
                fullSuffix = unit2.symbol + suffix;
              } else {
                value *= scale2;
              }
              value = type(value, precision);
              var i = value.lastIndexOf("."), before2, after;
              if (i < 0) {
                var j = exponent ? value.lastIndexOf("e") : -1;
                if (j < 0) before2 = value, after = "";
                else before2 = value.substring(0, j), after = value.substring(j);
              } else {
                before2 = value.substring(0, i);
                after = locale_decimal + value.substring(i + 1);
              }
              if (!zfill && comma) before2 = formatGroup(before2, Infinity);
              var length4 = prefix.length + before2.length + after.length + (zcomma ? 0 : negative.length), padding = length4 < width2 ? new Array(length4 = width2 - length4 + 1).join(fill) : "";
              if (zcomma) before2 = formatGroup(padding + before2, padding.length ? width2 - after.length : Infinity);
              negative += prefix;
              value = before2 + after;
              return (align === "<" ? negative + value + padding : align === ">" ? padding + negative + value : align === "^" ? padding.substring(0, length4 >>= 1) + negative + value + padding.substring(length4) : negative + (zcomma ? value : padding + value)) + fullSuffix;
            };
          };
        }
        var d3_format_re = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i;
        var d3_format_types = d32.map({
          b: function(x) {
            return x.toString(2);
          },
          c: function(x) {
            return String.fromCharCode(x);
          },
          o: function(x) {
            return x.toString(8);
          },
          x: function(x) {
            return x.toString(16);
          },
          X: function(x) {
            return x.toString(16).toUpperCase();
          },
          g: function(x, p) {
            return x.toPrecision(p);
          },
          e: function(x, p) {
            return x.toExponential(p);
          },
          f: function(x, p) {
            return x.toFixed(p);
          },
          r: function(x, p) {
            return (x = d32.round(x, d3_format_precision(x, p))).toFixed(Math.max(0, Math.min(20, d3_format_precision(x * (1 + 1e-15), p))));
          }
        });
        function d3_format_typeDefault(x) {
          return x + "";
        }
        var d3_time = d32.time = {}, d3_date = Date;
        function d3_date_utc() {
          this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
        }
        d3_date_utc.prototype = {
          getDate: function() {
            return this._.getUTCDate();
          },
          getDay: function() {
            return this._.getUTCDay();
          },
          getFullYear: function() {
            return this._.getUTCFullYear();
          },
          getHours: function() {
            return this._.getUTCHours();
          },
          getMilliseconds: function() {
            return this._.getUTCMilliseconds();
          },
          getMinutes: function() {
            return this._.getUTCMinutes();
          },
          getMonth: function() {
            return this._.getUTCMonth();
          },
          getSeconds: function() {
            return this._.getUTCSeconds();
          },
          getTime: function() {
            return this._.getTime();
          },
          getTimezoneOffset: function() {
            return 0;
          },
          valueOf: function() {
            return this._.valueOf();
          },
          setDate: function() {
            d3_time_prototype.setUTCDate.apply(this._, arguments);
          },
          setDay: function() {
            d3_time_prototype.setUTCDay.apply(this._, arguments);
          },
          setFullYear: function() {
            d3_time_prototype.setUTCFullYear.apply(this._, arguments);
          },
          setHours: function() {
            d3_time_prototype.setUTCHours.apply(this._, arguments);
          },
          setMilliseconds: function() {
            d3_time_prototype.setUTCMilliseconds.apply(this._, arguments);
          },
          setMinutes: function() {
            d3_time_prototype.setUTCMinutes.apply(this._, arguments);
          },
          setMonth: function() {
            d3_time_prototype.setUTCMonth.apply(this._, arguments);
          },
          setSeconds: function() {
            d3_time_prototype.setUTCSeconds.apply(this._, arguments);
          },
          setTime: function() {
            d3_time_prototype.setTime.apply(this._, arguments);
          }
        };
        var d3_time_prototype = Date.prototype;
        function d3_time_interval(local, step, number) {
          function round3(date) {
            var d0 = local(date), d1 = offset(d0, 1);
            return date - d0 < d1 - date ? d0 : d1;
          }
          function ceil2(date) {
            step(date = local(new d3_date(date - 1)), 1);
            return date;
          }
          function offset(date, k) {
            step(date = new d3_date(+date), k);
            return date;
          }
          function range2(t0, t1, dt) {
            var time = ceil2(t0), times = [];
            if (dt > 1) {
              while (time < t1) {
                if (!(number(time) % dt)) times.push(/* @__PURE__ */ new Date(+time));
                step(time, 1);
              }
            } else {
              while (time < t1) times.push(/* @__PURE__ */ new Date(+time)), step(time, 1);
            }
            return times;
          }
          function range_utc(t0, t1, dt) {
            try {
              d3_date = d3_date_utc;
              var utc2 = new d3_date_utc();
              utc2._ = t0;
              return range2(utc2, t1, dt);
            } finally {
              d3_date = Date;
            }
          }
          local.floor = local;
          local.round = round3;
          local.ceil = ceil2;
          local.offset = offset;
          local.range = range2;
          var utc = local.utc = d3_time_interval_utc(local);
          utc.floor = utc;
          utc.round = d3_time_interval_utc(round3);
          utc.ceil = d3_time_interval_utc(ceil2);
          utc.offset = d3_time_interval_utc(offset);
          utc.range = range_utc;
          return local;
        }
        function d3_time_interval_utc(method) {
          return function(date, k) {
            try {
              d3_date = d3_date_utc;
              var utc = new d3_date_utc();
              utc._ = date;
              return method(utc, k)._;
            } finally {
              d3_date = Date;
            }
          };
        }
        d3_time.year = d3_time_interval(function(date) {
          date = d3_time.day(date);
          date.setMonth(0, 1);
          return date;
        }, function(date, offset) {
          date.setFullYear(date.getFullYear() + offset);
        }, function(date) {
          return date.getFullYear();
        });
        d3_time.years = d3_time.year.range;
        d3_time.years.utc = d3_time.year.utc.range;
        d3_time.day = d3_time_interval(function(date) {
          var day = new d3_date(2e3, 0);
          day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
          return day;
        }, function(date, offset) {
          date.setDate(date.getDate() + offset);
        }, function(date) {
          return date.getDate() - 1;
        });
        d3_time.days = d3_time.day.range;
        d3_time.days.utc = d3_time.day.utc.range;
        d3_time.dayOfYear = function(date) {
          var year = d3_time.year(date);
          return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 6e4) / 864e5);
        };
        ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(day, i) {
          i = 7 - i;
          var interval = d3_time[day] = d3_time_interval(function(date) {
            (date = d3_time.day(date)).setDate(date.getDate() - (date.getDay() + i) % 7);
            return date;
          }, function(date, offset) {
            date.setDate(date.getDate() + Math.floor(offset) * 7);
          }, function(date) {
            var day2 = d3_time.year(date).getDay();
            return Math.floor((d3_time.dayOfYear(date) + (day2 + i) % 7) / 7) - (day2 !== i);
          });
          d3_time[day + "s"] = interval.range;
          d3_time[day + "s"].utc = interval.utc.range;
          d3_time[day + "OfYear"] = function(date) {
            var day2 = d3_time.year(date).getDay();
            return Math.floor((d3_time.dayOfYear(date) + (day2 + i) % 7) / 7);
          };
        });
        d3_time.week = d3_time.sunday;
        d3_time.weeks = d3_time.sunday.range;
        d3_time.weeks.utc = d3_time.sunday.utc.range;
        d3_time.weekOfYear = d3_time.sundayOfYear;
        function d3_locale_timeFormat(locale) {
          var locale_dateTime = locale.dateTime, locale_date = locale.date, locale_time = locale.time, locale_periods = locale.periods, locale_days = locale.days, locale_shortDays = locale.shortDays, locale_months = locale.months, locale_shortMonths = locale.shortMonths;
          function d3_time_format2(template) {
            var n = template.length;
            function format2(date) {
              var string = [], i = -1, j = 0, c, p, f;
              while (++i < n) {
                if (template.charCodeAt(i) === 37) {
                  string.push(template.slice(j, i));
                  if ((p = d3_time_formatPads[c = template.charAt(++i)]) != null) c = template.charAt(++i);
                  if (f = d3_time_formats[c]) c = f(date, p == null ? c === "e" ? " " : "0" : p);
                  string.push(c);
                  j = i + 1;
                }
              }
              string.push(template.slice(j, i));
              return string.join("");
            }
            format2.parse = function(string) {
              var d = {
                y: 1900,
                m: 0,
                d: 1,
                H: 0,
                M: 0,
                S: 0,
                L: 0,
                Z: null
              }, i = d3_time_parse(d, template, string, 0);
              if (i != string.length) return null;
              if ("p" in d) d.H = d.H % 12 + d.p * 12;
              var localZ = d.Z != null && d3_date !== d3_date_utc, date = new (localZ ? d3_date_utc : d3_date)();
              if ("j" in d) date.setFullYear(d.y, 0, d.j);
              else if ("W" in d || "U" in d) {
                if (!("w" in d)) d.w = "W" in d ? 1 : 0;
                date.setFullYear(d.y, 0, 1);
                date.setFullYear(d.y, 0, "W" in d ? (d.w + 6) % 7 + d.W * 7 - (date.getDay() + 5) % 7 : d.w + d.U * 7 - (date.getDay() + 6) % 7);
              } else date.setFullYear(d.y, d.m, d.d);
              date.setHours(d.H + (d.Z / 100 | 0), d.M + d.Z % 100, d.S, d.L);
              return localZ ? date._ : date;
            };
            format2.toString = function() {
              return template;
            };
            return format2;
          }
          function d3_time_parse(date, template, string, j) {
            var c, p, t, i = 0, n = template.length, m = string.length;
            while (i < n) {
              if (j >= m) return -1;
              c = template.charCodeAt(i++);
              if (c === 37) {
                t = template.charAt(i++);
                p = d3_time_parsers[t in d3_time_formatPads ? template.charAt(i++) : t];
                if (!p || (j = p(date, string, j)) < 0) return -1;
              } else if (c != string.charCodeAt(j++)) {
                return -1;
              }
            }
            return j;
          }
          d3_time_format2.utc = function(template) {
            var local = d3_time_format2(template);
            function format2(date) {
              try {
                d3_date = d3_date_utc;
                var utc = new d3_date();
                utc._ = date;
                return local(utc);
              } finally {
                d3_date = Date;
              }
            }
            format2.parse = function(string) {
              try {
                d3_date = d3_date_utc;
                var date = local.parse(string);
                return date && date._;
              } finally {
                d3_date = Date;
              }
            };
            format2.toString = local.toString;
            return format2;
          };
          d3_time_format2.multi = d3_time_format2.utc.multi = d3_time_formatMulti;
          var d3_time_periodLookup = d32.map(), d3_time_dayRe = d3_time_formatRe(locale_days), d3_time_dayLookup = d3_time_formatLookup(locale_days), d3_time_dayAbbrevRe = d3_time_formatRe(locale_shortDays), d3_time_dayAbbrevLookup = d3_time_formatLookup(locale_shortDays), d3_time_monthRe = d3_time_formatRe(locale_months), d3_time_monthLookup = d3_time_formatLookup(locale_months), d3_time_monthAbbrevRe = d3_time_formatRe(locale_shortMonths), d3_time_monthAbbrevLookup = d3_time_formatLookup(locale_shortMonths);
          locale_periods.forEach(function(p, i) {
            d3_time_periodLookup.set(p.toLowerCase(), i);
          });
          var d3_time_formats = {
            a: function(d) {
              return locale_shortDays[d.getDay()];
            },
            A: function(d) {
              return locale_days[d.getDay()];
            },
            b: function(d) {
              return locale_shortMonths[d.getMonth()];
            },
            B: function(d) {
              return locale_months[d.getMonth()];
            },
            c: d3_time_format2(locale_dateTime),
            d: function(d, p) {
              return d3_time_formatPad(d.getDate(), p, 2);
            },
            e: function(d, p) {
              return d3_time_formatPad(d.getDate(), p, 2);
            },
            H: function(d, p) {
              return d3_time_formatPad(d.getHours(), p, 2);
            },
            I: function(d, p) {
              return d3_time_formatPad(d.getHours() % 12 || 12, p, 2);
            },
            j: function(d, p) {
              return d3_time_formatPad(1 + d3_time.dayOfYear(d), p, 3);
            },
            L: function(d, p) {
              return d3_time_formatPad(d.getMilliseconds(), p, 3);
            },
            m: function(d, p) {
              return d3_time_formatPad(d.getMonth() + 1, p, 2);
            },
            M: function(d, p) {
              return d3_time_formatPad(d.getMinutes(), p, 2);
            },
            p: function(d) {
              return locale_periods[+(d.getHours() >= 12)];
            },
            S: function(d, p) {
              return d3_time_formatPad(d.getSeconds(), p, 2);
            },
            U: function(d, p) {
              return d3_time_formatPad(d3_time.sundayOfYear(d), p, 2);
            },
            w: function(d) {
              return d.getDay();
            },
            W: function(d, p) {
              return d3_time_formatPad(d3_time.mondayOfYear(d), p, 2);
            },
            x: d3_time_format2(locale_date),
            X: d3_time_format2(locale_time),
            y: function(d, p) {
              return d3_time_formatPad(d.getFullYear() % 100, p, 2);
            },
            Y: function(d, p) {
              return d3_time_formatPad(d.getFullYear() % 1e4, p, 4);
            },
            Z: d3_time_zone,
            "%": function() {
              return "%";
            }
          };
          var d3_time_parsers = {
            a: d3_time_parseWeekdayAbbrev,
            A: d3_time_parseWeekday,
            b: d3_time_parseMonthAbbrev,
            B: d3_time_parseMonth,
            c: d3_time_parseLocaleFull,
            d: d3_time_parseDay,
            e: d3_time_parseDay,
            H: d3_time_parseHour24,
            I: d3_time_parseHour24,
            j: d3_time_parseDayOfYear,
            L: d3_time_parseMilliseconds,
            m: d3_time_parseMonthNumber,
            M: d3_time_parseMinutes,
            p: d3_time_parseAmPm,
            S: d3_time_parseSeconds,
            U: d3_time_parseWeekNumberSunday,
            w: d3_time_parseWeekdayNumber,
            W: d3_time_parseWeekNumberMonday,
            x: d3_time_parseLocaleDate,
            X: d3_time_parseLocaleTime,
            y: d3_time_parseYear,
            Y: d3_time_parseFullYear,
            Z: d3_time_parseZone,
            "%": d3_time_parseLiteralPercent
          };
          function d3_time_parseWeekdayAbbrev(date, string, i) {
            d3_time_dayAbbrevRe.lastIndex = 0;
            var n = d3_time_dayAbbrevRe.exec(string.slice(i));
            return n ? (date.w = d3_time_dayAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
          }
          function d3_time_parseWeekday(date, string, i) {
            d3_time_dayRe.lastIndex = 0;
            var n = d3_time_dayRe.exec(string.slice(i));
            return n ? (date.w = d3_time_dayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
          }
          function d3_time_parseMonthAbbrev(date, string, i) {
            d3_time_monthAbbrevRe.lastIndex = 0;
            var n = d3_time_monthAbbrevRe.exec(string.slice(i));
            return n ? (date.m = d3_time_monthAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
          }
          function d3_time_parseMonth(date, string, i) {
            d3_time_monthRe.lastIndex = 0;
            var n = d3_time_monthRe.exec(string.slice(i));
            return n ? (date.m = d3_time_monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
          }
          function d3_time_parseLocaleFull(date, string, i) {
            return d3_time_parse(date, d3_time_formats.c.toString(), string, i);
          }
          function d3_time_parseLocaleDate(date, string, i) {
            return d3_time_parse(date, d3_time_formats.x.toString(), string, i);
          }
          function d3_time_parseLocaleTime(date, string, i) {
            return d3_time_parse(date, d3_time_formats.X.toString(), string, i);
          }
          function d3_time_parseAmPm(date, string, i) {
            var n = d3_time_periodLookup.get(string.slice(i, i += 2).toLowerCase());
            return n == null ? -1 : (date.p = n, i);
          }
          return d3_time_format2;
        }
        var d3_time_formatPads = {
          "-": "",
          _: " ",
          "0": "0"
        }, d3_time_numberRe = /^\s*\d+/, d3_time_percentRe = /^%/;
        function d3_time_formatPad(value, fill, width2) {
          var sign2 = value < 0 ? "-" : "", string = (sign2 ? -value : value) + "", length4 = string.length;
          return sign2 + (length4 < width2 ? new Array(width2 - length4 + 1).join(fill) + string : string);
        }
        function d3_time_formatRe(names) {
          return new RegExp("^(?:" + names.map(d32.requote).join("|") + ")", "i");
        }
        function d3_time_formatLookup(names) {
          var map7 = new d3_Map(), i = -1, n = names.length;
          while (++i < n) map7.set(names[i].toLowerCase(), i);
          return map7;
        }
        function d3_time_parseWeekdayNumber(date, string, i) {
          d3_time_numberRe.lastIndex = 0;
          var n = d3_time_numberRe.exec(string.slice(i, i + 1));
          return n ? (date.w = +n[0], i + n[0].length) : -1;
        }
        function d3_time_parseWeekNumberSunday(date, string, i) {
          d3_time_numberRe.lastIndex = 0;
          var n = d3_time_numberRe.exec(string.slice(i));
          return n ? (date.U = +n[0], i + n[0].length) : -1;
        }
        function d3_time_parseWeekNumberMonday(date, string, i) {
          d3_time_numberRe.lastIndex = 0;
          var n = d3_time_numberRe.exec(string.slice(i));
          return n ? (date.W = +n[0], i + n[0].length) : -1;
        }
        function d3_time_parseFullYear(date, string, i) {
          d3_time_numberRe.lastIndex = 0;
          var n = d3_time_numberRe.exec(string.slice(i, i + 4));
          return n ? (date.y = +n[0], i + n[0].length) : -1;
        }
        function d3_time_parseYear(date, string, i) {
          d3_time_numberRe.lastIndex = 0;
          var n = d3_time_numberRe.exec(string.slice(i, i + 2));
          return n ? (date.y = d3_time_expandYear(+n[0]), i + n[0].length) : -1;
        }
        function d3_time_parseZone(date, string, i) {
          return /^[+-]\d{4}$/.test(string = string.slice(i, i + 5)) ? (date.Z = -string, i + 5) : -1;
        }
        function d3_time_expandYear(d) {
          return d + (d > 68 ? 1900 : 2e3);
        }
        function d3_time_parseMonthNumber(date, string, i) {
          d3_time_numberRe.lastIndex = 0;
          var n = d3_time_numberRe.exec(string.slice(i, i + 2));
          return n ? (date.m = n[0] - 1, i + n[0].length) : -1;
        }
        function d3_time_parseDay(date, string, i) {
          d3_time_numberRe.lastIndex = 0;
          var n = d3_time_numberRe.exec(string.slice(i, i + 2));
          return n ? (date.d = +n[0], i + n[0].length) : -1;
        }
        function d3_time_parseDayOfYear(date, string, i) {
          d3_time_numberRe.lastIndex = 0;
          var n = d3_time_numberRe.exec(string.slice(i, i + 3));
          return n ? (date.j = +n[0], i + n[0].length) : -1;
        }
        function d3_time_parseHour24(date, string, i) {
          d3_time_numberRe.lastIndex = 0;
          var n = d3_time_numberRe.exec(string.slice(i, i + 2));
          return n ? (date.H = +n[0], i + n[0].length) : -1;
        }
        function d3_time_parseMinutes(date, string, i) {
          d3_time_numberRe.lastIndex = 0;
          var n = d3_time_numberRe.exec(string.slice(i, i + 2));
          return n ? (date.M = +n[0], i + n[0].length) : -1;
        }
        function d3_time_parseSeconds(date, string, i) {
          d3_time_numberRe.lastIndex = 0;
          var n = d3_time_numberRe.exec(string.slice(i, i + 2));
          return n ? (date.S = +n[0], i + n[0].length) : -1;
        }
        function d3_time_parseMilliseconds(date, string, i) {
          d3_time_numberRe.lastIndex = 0;
          var n = d3_time_numberRe.exec(string.slice(i, i + 3));
          return n ? (date.L = +n[0], i + n[0].length) : -1;
        }
        function d3_time_zone(d) {
          var z = d.getTimezoneOffset(), zs = z > 0 ? "-" : "+", zh = abs3(z) / 60 | 0, zm = abs3(z) % 60;
          return zs + d3_time_formatPad(zh, "0", 2) + d3_time_formatPad(zm, "0", 2);
        }
        function d3_time_parseLiteralPercent(date, string, i) {
          d3_time_percentRe.lastIndex = 0;
          var n = d3_time_percentRe.exec(string.slice(i, i + 1));
          return n ? i + n[0].length : -1;
        }
        function d3_time_formatMulti(formats) {
          var n = formats.length, i = -1;
          while (++i < n) formats[i][0] = this(formats[i][0]);
          return function(date) {
            var i2 = 0, f = formats[i2];
            while (!f[1](date)) f = formats[++i2];
            return f[0](date);
          };
        }
        d32.locale = function(locale) {
          return {
            numberFormat: d3_locale_numberFormat(locale),
            timeFormat: d3_locale_timeFormat(locale)
          };
        };
        var d3_locale_enUS = d32.locale({
          decimal: ".",
          thousands: ",",
          grouping: [3],
          currency: ["$", ""],
          dateTime: "%a %b %e %X %Y",
          date: "%m/%d/%Y",
          time: "%H:%M:%S",
          periods: ["AM", "PM"],
          days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        });
        d32.format = d3_locale_enUS.numberFormat;
        d32.geo = {};
        function d3_adder() {
        }
        d3_adder.prototype = {
          s: 0,
          t: 0,
          add: function(y) {
            d3_adderSum(y, this.t, d3_adderTemp);
            d3_adderSum(d3_adderTemp.s, this.s, this);
            if (this.s) this.t += d3_adderTemp.t;
            else this.s = d3_adderTemp.t;
          },
          reset: function() {
            this.s = this.t = 0;
          },
          valueOf: function() {
            return this.s;
          }
        };
        var d3_adderTemp = new d3_adder();
        function d3_adderSum(a, b, o) {
          var x = o.s = a + b, bv = x - a, av = x - bv;
          o.t = a - av + (b - bv);
        }
        d32.geo.stream = function(object, listener) {
          if (object && d3_geo_streamObjectType.hasOwnProperty(object.type)) {
            d3_geo_streamObjectType[object.type](object, listener);
          } else {
            d3_geo_streamGeometry(object, listener);
          }
        };
        function d3_geo_streamGeometry(geometry, listener) {
          if (geometry && d3_geo_streamGeometryType.hasOwnProperty(geometry.type)) {
            d3_geo_streamGeometryType[geometry.type](geometry, listener);
          }
        }
        var d3_geo_streamObjectType = {
          Feature: function(feature, listener) {
            d3_geo_streamGeometry(feature.geometry, listener);
          },
          FeatureCollection: function(object, listener) {
            var features = object.features, i = -1, n = features.length;
            while (++i < n) d3_geo_streamGeometry(features[i].geometry, listener);
          }
        };
        var d3_geo_streamGeometryType = {
          Sphere: function(object, listener) {
            listener.sphere();
          },
          Point: function(object, listener) {
            object = object.coordinates;
            listener.point(object[0], object[1], object[2]);
          },
          MultiPoint: function(object, listener) {
            var coordinates = object.coordinates, i = -1, n = coordinates.length;
            while (++i < n) object = coordinates[i], listener.point(object[0], object[1], object[2]);
          },
          LineString: function(object, listener) {
            d3_geo_streamLine(object.coordinates, listener, 0);
          },
          MultiLineString: function(object, listener) {
            var coordinates = object.coordinates, i = -1, n = coordinates.length;
            while (++i < n) d3_geo_streamLine(coordinates[i], listener, 0);
          },
          Polygon: function(object, listener) {
            d3_geo_streamPolygon(object.coordinates, listener);
          },
          MultiPolygon: function(object, listener) {
            var coordinates = object.coordinates, i = -1, n = coordinates.length;
            while (++i < n) d3_geo_streamPolygon(coordinates[i], listener);
          },
          GeometryCollection: function(object, listener) {
            var geometries = object.geometries, i = -1, n = geometries.length;
            while (++i < n) d3_geo_streamGeometry(geometries[i], listener);
          }
        };
        function d3_geo_streamLine(coordinates, listener, closed) {
          var i = -1, n = coordinates.length - closed, coordinate;
          listener.lineStart();
          while (++i < n) coordinate = coordinates[i], listener.point(coordinate[0], coordinate[1], coordinate[2]);
          listener.lineEnd();
        }
        function d3_geo_streamPolygon(coordinates, listener) {
          var i = -1, n = coordinates.length;
          listener.polygonStart();
          while (++i < n) d3_geo_streamLine(coordinates[i], listener, 1);
          listener.polygonEnd();
        }
        d32.geo.area = function(object) {
          d3_geo_areaSum = 0;
          d32.geo.stream(object, d3_geo_area);
          return d3_geo_areaSum;
        };
        var d3_geo_areaSum, d3_geo_areaRingSum = new d3_adder();
        var d3_geo_area = {
          sphere: function() {
            d3_geo_areaSum += 4 * \u03C0;
          },
          point: d3_noop,
          lineStart: d3_noop,
          lineEnd: d3_noop,
          polygonStart: function() {
            d3_geo_areaRingSum.reset();
            d3_geo_area.lineStart = d3_geo_areaRingStart;
          },
          polygonEnd: function() {
            var area = 2 * d3_geo_areaRingSum;
            d3_geo_areaSum += area < 0 ? 4 * \u03C0 + area : area;
            d3_geo_area.lineStart = d3_geo_area.lineEnd = d3_geo_area.point = d3_noop;
          }
        };
        function d3_geo_areaRingStart() {
          var \u03BB00, \u03C600, \u03BB0, cos\u03C60, sin\u03C60;
          d3_geo_area.point = function(\u03BB, \u03C6) {
            d3_geo_area.point = nextPoint;
            \u03BB0 = (\u03BB00 = \u03BB) * d3_radians, cos\u03C60 = Math.cos(\u03C6 = (\u03C600 = \u03C6) * d3_radians / 2 + \u03C0 / 4), sin\u03C60 = Math.sin(\u03C6);
          };
          function nextPoint(\u03BB, \u03C6) {
            \u03BB *= d3_radians;
            \u03C6 = \u03C6 * d3_radians / 2 + \u03C0 / 4;
            var d\u03BB = \u03BB - \u03BB0, sd\u03BB = d\u03BB >= 0 ? 1 : -1, ad\u03BB = sd\u03BB * d\u03BB, cos\u03C6 = Math.cos(\u03C6), sin\u03C6 = Math.sin(\u03C6), k = sin\u03C60 * sin\u03C6, u = cos\u03C60 * cos\u03C6 + k * Math.cos(ad\u03BB), v = k * sd\u03BB * Math.sin(ad\u03BB);
            d3_geo_areaRingSum.add(Math.atan2(v, u));
            \u03BB0 = \u03BB, cos\u03C60 = cos\u03C6, sin\u03C60 = sin\u03C6;
          }
          d3_geo_area.lineEnd = function() {
            nextPoint(\u03BB00, \u03C600);
          };
        }
        function d3_geo_cartesian(spherical) {
          var \u03BB = spherical[0], \u03C6 = spherical[1], cos\u03C6 = Math.cos(\u03C6);
          return [cos\u03C6 * Math.cos(\u03BB), cos\u03C6 * Math.sin(\u03BB), Math.sin(\u03C6)];
        }
        function d3_geo_cartesianDot(a, b) {
          return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
        }
        function d3_geo_cartesianCross(a, b) {
          return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
        }
        function d3_geo_cartesianAdd(a, b) {
          a[0] += b[0];
          a[1] += b[1];
          a[2] += b[2];
        }
        function d3_geo_cartesianScale(vector, k) {
          return [vector[0] * k, vector[1] * k, vector[2] * k];
        }
        function d3_geo_cartesianNormalize(d) {
          var l = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
          d[0] /= l;
          d[1] /= l;
          d[2] /= l;
        }
        function d3_geo_spherical(cartesian) {
          return [Math.atan2(cartesian[1], cartesian[0]), d3_asin(cartesian[2])];
        }
        function d3_geo_sphericalEqual(a, b) {
          return abs3(a[0] - b[0]) < \u03B5 && abs3(a[1] - b[1]) < \u03B5;
        }
        d32.geo.bounds = /* @__PURE__ */ (function() {
          var \u03BB0, \u03C60, \u03BB1, \u03C61, \u03BB_, \u03BB__, \u03C6__, p0, d\u03BBSum, ranges, range2;
          var bound = {
            point,
            lineStart,
            lineEnd,
            polygonStart: function() {
              bound.point = ringPoint;
              bound.lineStart = ringStart;
              bound.lineEnd = ringEnd;
              d\u03BBSum = 0;
              d3_geo_area.polygonStart();
            },
            polygonEnd: function() {
              d3_geo_area.polygonEnd();
              bound.point = point;
              bound.lineStart = lineStart;
              bound.lineEnd = lineEnd;
              if (d3_geo_areaRingSum < 0) \u03BB0 = -(\u03BB1 = 180), \u03C60 = -(\u03C61 = 90);
              else if (d\u03BBSum > \u03B5) \u03C61 = 90;
              else if (d\u03BBSum < -\u03B5) \u03C60 = -90;
              range2[0] = \u03BB0, range2[1] = \u03BB1;
            }
          };
          function point(\u03BB, \u03C6) {
            ranges.push(range2 = [\u03BB0 = \u03BB, \u03BB1 = \u03BB]);
            if (\u03C6 < \u03C60) \u03C60 = \u03C6;
            if (\u03C6 > \u03C61) \u03C61 = \u03C6;
          }
          function linePoint(\u03BB, \u03C6) {
            var p = d3_geo_cartesian([\u03BB * d3_radians, \u03C6 * d3_radians]);
            if (p0) {
              var normal = d3_geo_cartesianCross(p0, p), equatorial = [normal[1], -normal[0], 0], inflection = d3_geo_cartesianCross(equatorial, normal);
              d3_geo_cartesianNormalize(inflection);
              inflection = d3_geo_spherical(inflection);
              var d\u03BB = \u03BB - \u03BB_, s = d\u03BB > 0 ? 1 : -1, \u03BBi = inflection[0] * d3_degrees * s, antimeridian = abs3(d\u03BB) > 180;
              if (antimeridian ^ (s * \u03BB_ < \u03BBi && \u03BBi < s * \u03BB)) {
                var \u03C6i = inflection[1] * d3_degrees;
                if (\u03C6i > \u03C61) \u03C61 = \u03C6i;
              } else if (\u03BBi = (\u03BBi + 360) % 360 - 180, antimeridian ^ (s * \u03BB_ < \u03BBi && \u03BBi < s * \u03BB)) {
                var \u03C6i = -inflection[1] * d3_degrees;
                if (\u03C6i < \u03C60) \u03C60 = \u03C6i;
              } else {
                if (\u03C6 < \u03C60) \u03C60 = \u03C6;
                if (\u03C6 > \u03C61) \u03C61 = \u03C6;
              }
              if (antimeridian) {
                if (\u03BB < \u03BB_) {
                  if (angle(\u03BB0, \u03BB) > angle(\u03BB0, \u03BB1)) \u03BB1 = \u03BB;
                } else {
                  if (angle(\u03BB, \u03BB1) > angle(\u03BB0, \u03BB1)) \u03BB0 = \u03BB;
                }
              } else {
                if (\u03BB1 >= \u03BB0) {
                  if (\u03BB < \u03BB0) \u03BB0 = \u03BB;
                  if (\u03BB > \u03BB1) \u03BB1 = \u03BB;
                } else {
                  if (\u03BB > \u03BB_) {
                    if (angle(\u03BB0, \u03BB) > angle(\u03BB0, \u03BB1)) \u03BB1 = \u03BB;
                  } else {
                    if (angle(\u03BB, \u03BB1) > angle(\u03BB0, \u03BB1)) \u03BB0 = \u03BB;
                  }
                }
              }
            } else {
              point(\u03BB, \u03C6);
            }
            p0 = p, \u03BB_ = \u03BB;
          }
          function lineStart() {
            bound.point = linePoint;
          }
          function lineEnd() {
            range2[0] = \u03BB0, range2[1] = \u03BB1;
            bound.point = point;
            p0 = null;
          }
          function ringPoint(\u03BB, \u03C6) {
            if (p0) {
              var d\u03BB = \u03BB - \u03BB_;
              d\u03BBSum += abs3(d\u03BB) > 180 ? d\u03BB + (d\u03BB > 0 ? 360 : -360) : d\u03BB;
            } else \u03BB__ = \u03BB, \u03C6__ = \u03C6;
            d3_geo_area.point(\u03BB, \u03C6);
            linePoint(\u03BB, \u03C6);
          }
          function ringStart() {
            d3_geo_area.lineStart();
          }
          function ringEnd() {
            ringPoint(\u03BB__, \u03C6__);
            d3_geo_area.lineEnd();
            if (abs3(d\u03BBSum) > \u03B5) \u03BB0 = -(\u03BB1 = 180);
            range2[0] = \u03BB0, range2[1] = \u03BB1;
            p0 = null;
          }
          function angle(\u03BB02, \u03BB12) {
            return (\u03BB12 -= \u03BB02) < 0 ? \u03BB12 + 360 : \u03BB12;
          }
          function compareRanges(a, b) {
            return a[0] - b[0];
          }
          function withinRange(x, range3) {
            return range3[0] <= range3[1] ? range3[0] <= x && x <= range3[1] : x < range3[0] || range3[1] < x;
          }
          return function(feature) {
            \u03C61 = \u03BB1 = -(\u03BB0 = \u03C60 = Infinity);
            ranges = [];
            d32.geo.stream(feature, bound);
            var n = ranges.length;
            if (n) {
              ranges.sort(compareRanges);
              for (var i = 1, a = ranges[0], b, merged = [a]; i < n; ++i) {
                b = ranges[i];
                if (withinRange(b[0], a) || withinRange(b[1], a)) {
                  if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
                  if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
                } else {
                  merged.push(a = b);
                }
              }
              var best = -Infinity, d\u03BB;
              for (var n = merged.length - 1, i = 0, a = merged[n], b; i <= n; a = b, ++i) {
                b = merged[i];
                if ((d\u03BB = angle(a[1], b[0])) > best) best = d\u03BB, \u03BB0 = b[0], \u03BB1 = a[1];
              }
            }
            ranges = range2 = null;
            return \u03BB0 === Infinity || \u03C60 === Infinity ? [[NaN, NaN], [NaN, NaN]] : [[\u03BB0, \u03C60], [\u03BB1, \u03C61]];
          };
        })();
        d32.geo.centroid = function(object) {
          d3_geo_centroidW0 = d3_geo_centroidW1 = d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
          d32.geo.stream(object, d3_geo_centroid);
          var x = d3_geo_centroidX2, y = d3_geo_centroidY2, z = d3_geo_centroidZ2, m = x * x + y * y + z * z;
          if (m < \u03B52) {
            x = d3_geo_centroidX1, y = d3_geo_centroidY1, z = d3_geo_centroidZ1;
            if (d3_geo_centroidW1 < \u03B5) x = d3_geo_centroidX0, y = d3_geo_centroidY0, z = d3_geo_centroidZ0;
            m = x * x + y * y + z * z;
            if (m < \u03B52) return [NaN, NaN];
          }
          return [Math.atan2(y, x) * d3_degrees, d3_asin(z / Math.sqrt(m)) * d3_degrees];
        };
        var d3_geo_centroidW0, d3_geo_centroidW1, d3_geo_centroidX0, d3_geo_centroidY0, d3_geo_centroidZ0, d3_geo_centroidX1, d3_geo_centroidY1, d3_geo_centroidZ1, d3_geo_centroidX2, d3_geo_centroidY2, d3_geo_centroidZ2;
        var d3_geo_centroid = {
          sphere: d3_noop,
          point: d3_geo_centroidPoint,
          lineStart: d3_geo_centroidLineStart,
          lineEnd: d3_geo_centroidLineEnd,
          polygonStart: function() {
            d3_geo_centroid.lineStart = d3_geo_centroidRingStart;
          },
          polygonEnd: function() {
            d3_geo_centroid.lineStart = d3_geo_centroidLineStart;
          }
        };
        function d3_geo_centroidPoint(\u03BB, \u03C6) {
          \u03BB *= d3_radians;
          var cos\u03C6 = Math.cos(\u03C6 *= d3_radians);
          d3_geo_centroidPointXYZ(cos\u03C6 * Math.cos(\u03BB), cos\u03C6 * Math.sin(\u03BB), Math.sin(\u03C6));
        }
        function d3_geo_centroidPointXYZ(x, y, z) {
          ++d3_geo_centroidW0;
          d3_geo_centroidX0 += (x - d3_geo_centroidX0) / d3_geo_centroidW0;
          d3_geo_centroidY0 += (y - d3_geo_centroidY0) / d3_geo_centroidW0;
          d3_geo_centroidZ0 += (z - d3_geo_centroidZ0) / d3_geo_centroidW0;
        }
        function d3_geo_centroidLineStart() {
          var x0, y0, z0;
          d3_geo_centroid.point = function(\u03BB, \u03C6) {
            \u03BB *= d3_radians;
            var cos\u03C6 = Math.cos(\u03C6 *= d3_radians);
            x0 = cos\u03C6 * Math.cos(\u03BB);
            y0 = cos\u03C6 * Math.sin(\u03BB);
            z0 = Math.sin(\u03C6);
            d3_geo_centroid.point = nextPoint;
            d3_geo_centroidPointXYZ(x0, y0, z0);
          };
          function nextPoint(\u03BB, \u03C6) {
            \u03BB *= d3_radians;
            var cos\u03C6 = Math.cos(\u03C6 *= d3_radians), x = cos\u03C6 * Math.cos(\u03BB), y = cos\u03C6 * Math.sin(\u03BB), z = Math.sin(\u03C6), w = Math.atan2(Math.sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
            d3_geo_centroidW1 += w;
            d3_geo_centroidX1 += w * (x0 + (x0 = x));
            d3_geo_centroidY1 += w * (y0 + (y0 = y));
            d3_geo_centroidZ1 += w * (z0 + (z0 = z));
            d3_geo_centroidPointXYZ(x0, y0, z0);
          }
        }
        function d3_geo_centroidLineEnd() {
          d3_geo_centroid.point = d3_geo_centroidPoint;
        }
        function d3_geo_centroidRingStart() {
          var \u03BB00, \u03C600, x0, y0, z0;
          d3_geo_centroid.point = function(\u03BB, \u03C6) {
            \u03BB00 = \u03BB, \u03C600 = \u03C6;
            d3_geo_centroid.point = nextPoint;
            \u03BB *= d3_radians;
            var cos\u03C6 = Math.cos(\u03C6 *= d3_radians);
            x0 = cos\u03C6 * Math.cos(\u03BB);
            y0 = cos\u03C6 * Math.sin(\u03BB);
            z0 = Math.sin(\u03C6);
            d3_geo_centroidPointXYZ(x0, y0, z0);
          };
          d3_geo_centroid.lineEnd = function() {
            nextPoint(\u03BB00, \u03C600);
            d3_geo_centroid.lineEnd = d3_geo_centroidLineEnd;
            d3_geo_centroid.point = d3_geo_centroidPoint;
          };
          function nextPoint(\u03BB, \u03C6) {
            \u03BB *= d3_radians;
            var cos\u03C6 = Math.cos(\u03C6 *= d3_radians), x = cos\u03C6 * Math.cos(\u03BB), y = cos\u03C6 * Math.sin(\u03BB), z = Math.sin(\u03C6), cx = y0 * z - z0 * y, cy = z0 * x - x0 * z, cz = x0 * y - y0 * x, m = Math.sqrt(cx * cx + cy * cy + cz * cz), u = x0 * x + y0 * y + z0 * z, v = m && -d3_acos(u) / m, w = Math.atan2(m, u);
            d3_geo_centroidX2 += v * cx;
            d3_geo_centroidY2 += v * cy;
            d3_geo_centroidZ2 += v * cz;
            d3_geo_centroidW1 += w;
            d3_geo_centroidX1 += w * (x0 + (x0 = x));
            d3_geo_centroidY1 += w * (y0 + (y0 = y));
            d3_geo_centroidZ1 += w * (z0 + (z0 = z));
            d3_geo_centroidPointXYZ(x0, y0, z0);
          }
        }
        function d3_geo_compose(a, b) {
          function compose2(x, y) {
            return x = a(x, y), b(x[0], x[1]);
          }
          if (a.invert && b.invert) compose2.invert = function(x, y) {
            return x = b.invert(x, y), x && a.invert(x[0], x[1]);
          };
          return compose2;
        }
        function d3_true() {
          return true;
        }
        function d3_geo_clipPolygon(segments, compare3, clipStartInside, interpolate2, listener) {
          var subject = [], clip = [];
          segments.forEach(function(segment) {
            if ((n2 = segment.length - 1) <= 0) return;
            var n2, p0 = segment[0], p1 = segment[n2];
            if (d3_geo_sphericalEqual(p0, p1)) {
              listener.lineStart();
              for (var i2 = 0; i2 < n2; ++i2) listener.point((p0 = segment[i2])[0], p0[1]);
              listener.lineEnd();
              return;
            }
            var a = new d3_geo_clipPolygonIntersection(p0, segment, null, true), b = new d3_geo_clipPolygonIntersection(p0, null, a, false);
            a.o = b;
            subject.push(a);
            clip.push(b);
            a = new d3_geo_clipPolygonIntersection(p1, segment, null, false);
            b = new d3_geo_clipPolygonIntersection(p1, null, a, true);
            a.o = b;
            subject.push(a);
            clip.push(b);
          });
          clip.sort(compare3);
          d3_geo_clipPolygonLinkCircular(subject);
          d3_geo_clipPolygonLinkCircular(clip);
          if (!subject.length) return;
          for (var i = 0, entry = clipStartInside, n = clip.length; i < n; ++i) {
            clip[i].e = entry = !entry;
          }
          var start = subject[0], points, point;
          while (1) {
            var current = start, isSubject = true;
            while (current.v) if ((current = current.n) === start) return;
            points = current.z;
            listener.lineStart();
            do {
              current.v = current.o.v = true;
              if (current.e) {
                if (isSubject) {
                  for (var i = 0, n = points.length; i < n; ++i) listener.point((point = points[i])[0], point[1]);
                } else {
                  interpolate2(current.x, current.n.x, 1, listener);
                }
                current = current.n;
              } else {
                if (isSubject) {
                  points = current.p.z;
                  for (var i = points.length - 1; i >= 0; --i) listener.point((point = points[i])[0], point[1]);
                } else {
                  interpolate2(current.x, current.p.x, -1, listener);
                }
                current = current.p;
              }
              current = current.o;
              points = current.z;
              isSubject = !isSubject;
            } while (!current.v);
            listener.lineEnd();
          }
        }
        function d3_geo_clipPolygonLinkCircular(array) {
          if (!(n = array.length)) return;
          var n, i = 0, a = array[0], b;
          while (++i < n) {
            a.n = b = array[i];
            b.p = a;
            a = b;
          }
          a.n = b = array[0];
          b.p = a;
        }
        function d3_geo_clipPolygonIntersection(point, points, other, entry) {
          this.x = point;
          this.z = points;
          this.o = other;
          this.e = entry;
          this.v = false;
          this.n = this.p = null;
        }
        function d3_geo_clip(pointVisible, clipLine, interpolate2, clipStart) {
          return function(rotate, listener) {
            var line = clipLine(listener), rotatedClipStart = rotate.invert(clipStart[0], clipStart[1]);
            var clip = {
              point,
              lineStart,
              lineEnd,
              polygonStart: function() {
                clip.point = pointRing;
                clip.lineStart = ringStart;
                clip.lineEnd = ringEnd;
                segments = [];
                polygon = [];
              },
              polygonEnd: function() {
                clip.point = point;
                clip.lineStart = lineStart;
                clip.lineEnd = lineEnd;
                segments = d32.merge(segments);
                var clipStartInside = d3_geo_pointInPolygon(rotatedClipStart, polygon);
                if (segments.length) {
                  if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
                  d3_geo_clipPolygon(segments, d3_geo_clipSort, clipStartInside, interpolate2, listener);
                } else if (clipStartInside) {
                  if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
                  listener.lineStart();
                  interpolate2(null, null, 1, listener);
                  listener.lineEnd();
                }
                if (polygonStarted) listener.polygonEnd(), polygonStarted = false;
                segments = polygon = null;
              },
              sphere: function() {
                listener.polygonStart();
                listener.lineStart();
                interpolate2(null, null, 1, listener);
                listener.lineEnd();
                listener.polygonEnd();
              }
            };
            function point(\u03BB, \u03C6) {
              var point2 = rotate(\u03BB, \u03C6);
              if (pointVisible(\u03BB = point2[0], \u03C6 = point2[1])) listener.point(\u03BB, \u03C6);
            }
            function pointLine(\u03BB, \u03C6) {
              var point2 = rotate(\u03BB, \u03C6);
              line.point(point2[0], point2[1]);
            }
            function lineStart() {
              clip.point = pointLine;
              line.lineStart();
            }
            function lineEnd() {
              clip.point = point;
              line.lineEnd();
            }
            var segments;
            var buffer = d3_geo_clipBufferListener(), ringListener = clipLine(buffer), polygonStarted = false, polygon, ring;
            function pointRing(\u03BB, \u03C6) {
              ring.push([\u03BB, \u03C6]);
              var point2 = rotate(\u03BB, \u03C6);
              ringListener.point(point2[0], point2[1]);
            }
            function ringStart() {
              ringListener.lineStart();
              ring = [];
            }
            function ringEnd() {
              pointRing(ring[0][0], ring[0][1]);
              ringListener.lineEnd();
              var clean = ringListener.clean(), ringSegments = buffer.buffer(), segment, n = ringSegments.length;
              ring.pop();
              polygon.push(ring);
              ring = null;
              if (!n) return;
              if (clean & 1) {
                segment = ringSegments[0];
                var n = segment.length - 1, i = -1, point2;
                if (n > 0) {
                  if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
                  listener.lineStart();
                  while (++i < n) listener.point((point2 = segment[i])[0], point2[1]);
                  listener.lineEnd();
                }
                return;
              }
              if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
              segments.push(ringSegments.filter(d3_geo_clipSegmentLength1));
            }
            return clip;
          };
        }
        function d3_geo_clipSegmentLength1(segment) {
          return segment.length > 1;
        }
        function d3_geo_clipBufferListener() {
          var lines = [], line;
          return {
            lineStart: function() {
              lines.push(line = []);
            },
            point: function(\u03BB, \u03C6) {
              line.push([\u03BB, \u03C6]);
            },
            lineEnd: d3_noop,
            buffer: function() {
              var buffer = lines;
              lines = [];
              line = null;
              return buffer;
            },
            rejoin: function() {
              if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
            }
          };
        }
        function d3_geo_clipSort(a, b) {
          return ((a = a.x)[0] < 0 ? a[1] - half\u03C0 - \u03B5 : half\u03C0 - a[1]) - ((b = b.x)[0] < 0 ? b[1] - half\u03C0 - \u03B5 : half\u03C0 - b[1]);
        }
        var d3_geo_clipAntimeridian = d3_geo_clip(d3_true, d3_geo_clipAntimeridianLine, d3_geo_clipAntimeridianInterpolate, [-\u03C0, -\u03C0 / 2]);
        function d3_geo_clipAntimeridianLine(listener) {
          var \u03BB0 = NaN, \u03C60 = NaN, s\u03BB0 = NaN, clean;
          return {
            lineStart: function() {
              listener.lineStart();
              clean = 1;
            },
            point: function(\u03BB1, \u03C61) {
              var s\u03BB1 = \u03BB1 > 0 ? \u03C0 : -\u03C0, d\u03BB = abs3(\u03BB1 - \u03BB0);
              if (abs3(d\u03BB - \u03C0) < \u03B5) {
                listener.point(\u03BB0, \u03C60 = (\u03C60 + \u03C61) / 2 > 0 ? half\u03C0 : -half\u03C0);
                listener.point(s\u03BB0, \u03C60);
                listener.lineEnd();
                listener.lineStart();
                listener.point(s\u03BB1, \u03C60);
                listener.point(\u03BB1, \u03C60);
                clean = 0;
              } else if (s\u03BB0 !== s\u03BB1 && d\u03BB >= \u03C0) {
                if (abs3(\u03BB0 - s\u03BB0) < \u03B5) \u03BB0 -= s\u03BB0 * \u03B5;
                if (abs3(\u03BB1 - s\u03BB1) < \u03B5) \u03BB1 -= s\u03BB1 * \u03B5;
                \u03C60 = d3_geo_clipAntimeridianIntersect(\u03BB0, \u03C60, \u03BB1, \u03C61);
                listener.point(s\u03BB0, \u03C60);
                listener.lineEnd();
                listener.lineStart();
                listener.point(s\u03BB1, \u03C60);
                clean = 0;
              }
              listener.point(\u03BB0 = \u03BB1, \u03C60 = \u03C61);
              s\u03BB0 = s\u03BB1;
            },
            lineEnd: function() {
              listener.lineEnd();
              \u03BB0 = \u03C60 = NaN;
            },
            clean: function() {
              return 2 - clean;
            }
          };
        }
        function d3_geo_clipAntimeridianIntersect(\u03BB0, \u03C60, \u03BB1, \u03C61) {
          var cos\u03C60, cos\u03C61, sin\u03BB0_\u03BB1 = Math.sin(\u03BB0 - \u03BB1);
          return abs3(sin\u03BB0_\u03BB1) > \u03B5 ? Math.atan((Math.sin(\u03C60) * (cos\u03C61 = Math.cos(\u03C61)) * Math.sin(\u03BB1) - Math.sin(\u03C61) * (cos\u03C60 = Math.cos(\u03C60)) * Math.sin(\u03BB0)) / (cos\u03C60 * cos\u03C61 * sin\u03BB0_\u03BB1)) : (\u03C60 + \u03C61) / 2;
        }
        function d3_geo_clipAntimeridianInterpolate(from, to, direction, listener) {
          var \u03C6;
          if (from == null) {
            \u03C6 = direction * half\u03C0;
            listener.point(-\u03C0, \u03C6);
            listener.point(0, \u03C6);
            listener.point(\u03C0, \u03C6);
            listener.point(\u03C0, 0);
            listener.point(\u03C0, -\u03C6);
            listener.point(0, -\u03C6);
            listener.point(-\u03C0, -\u03C6);
            listener.point(-\u03C0, 0);
            listener.point(-\u03C0, \u03C6);
          } else if (abs3(from[0] - to[0]) > \u03B5) {
            var s = from[0] < to[0] ? \u03C0 : -\u03C0;
            \u03C6 = direction * s / 2;
            listener.point(-s, \u03C6);
            listener.point(0, \u03C6);
            listener.point(s, \u03C6);
          } else {
            listener.point(to[0], to[1]);
          }
        }
        function d3_geo_pointInPolygon(point, polygon) {
          var meridian = point[0], parallel = point[1], meridianNormal = [Math.sin(meridian), -Math.cos(meridian), 0], polarAngle = 0, winding = 0;
          d3_geo_areaRingSum.reset();
          for (var i = 0, n = polygon.length; i < n; ++i) {
            var ring = polygon[i], m = ring.length;
            if (!m) continue;
            var point0 = ring[0], \u03BB0 = point0[0], \u03C60 = point0[1] / 2 + \u03C0 / 4, sin\u03C60 = Math.sin(\u03C60), cos\u03C60 = Math.cos(\u03C60), j = 1;
            while (true) {
              if (j === m) j = 0;
              point = ring[j];
              var \u03BB = point[0], \u03C6 = point[1] / 2 + \u03C0 / 4, sin\u03C6 = Math.sin(\u03C6), cos\u03C6 = Math.cos(\u03C6), d\u03BB = \u03BB - \u03BB0, sd\u03BB = d\u03BB >= 0 ? 1 : -1, ad\u03BB = sd\u03BB * d\u03BB, antimeridian = ad\u03BB > \u03C0, k = sin\u03C60 * sin\u03C6;
              d3_geo_areaRingSum.add(Math.atan2(k * sd\u03BB * Math.sin(ad\u03BB), cos\u03C60 * cos\u03C6 + k * Math.cos(ad\u03BB)));
              polarAngle += antimeridian ? d\u03BB + sd\u03BB * \u03C4 : d\u03BB;
              if (antimeridian ^ \u03BB0 >= meridian ^ \u03BB >= meridian) {
                var arc2 = d3_geo_cartesianCross(d3_geo_cartesian(point0), d3_geo_cartesian(point));
                d3_geo_cartesianNormalize(arc2);
                var intersection2 = d3_geo_cartesianCross(meridianNormal, arc2);
                d3_geo_cartesianNormalize(intersection2);
                var \u03C6arc = (antimeridian ^ d\u03BB >= 0 ? -1 : 1) * d3_asin(intersection2[2]);
                if (parallel > \u03C6arc || parallel === \u03C6arc && (arc2[0] || arc2[1])) {
                  winding += antimeridian ^ d\u03BB >= 0 ? 1 : -1;
                }
              }
              if (!j++) break;
              \u03BB0 = \u03BB, sin\u03C60 = sin\u03C6, cos\u03C60 = cos\u03C6, point0 = point;
            }
          }
          return (polarAngle < -\u03B5 || polarAngle < \u03B5 && d3_geo_areaRingSum < -\u03B5) ^ winding & 1;
        }
        function d3_geo_clipCircle(radius2) {
          var cr = Math.cos(radius2), smallRadius = cr > 0, notHemisphere = abs3(cr) > \u03B5, interpolate2 = d3_geo_circleInterpolate(radius2, 6 * d3_radians);
          return d3_geo_clip(visible, clipLine, interpolate2, smallRadius ? [0, -radius2] : [-\u03C0, radius2 - \u03C0]);
          function visible(\u03BB, \u03C6) {
            return Math.cos(\u03BB) * Math.cos(\u03C6) > cr;
          }
          function clipLine(listener) {
            var point0, c0, v0, v00, clean;
            return {
              lineStart: function() {
                v00 = v0 = false;
                clean = 1;
              },
              point: function(\u03BB, \u03C6) {
                var point1 = [\u03BB, \u03C6], point2, v = visible(\u03BB, \u03C6), c = smallRadius ? v ? 0 : code(\u03BB, \u03C6) : v ? code(\u03BB + (\u03BB < 0 ? \u03C0 : -\u03C0), \u03C6) : 0;
                if (!point0 && (v00 = v0 = v)) listener.lineStart();
                if (v !== v0) {
                  point2 = intersect(point0, point1);
                  if (d3_geo_sphericalEqual(point0, point2) || d3_geo_sphericalEqual(point1, point2)) {
                    point1[0] += \u03B5;
                    point1[1] += \u03B5;
                    v = visible(point1[0], point1[1]);
                  }
                }
                if (v !== v0) {
                  clean = 0;
                  if (v) {
                    listener.lineStart();
                    point2 = intersect(point1, point0);
                    listener.point(point2[0], point2[1]);
                  } else {
                    point2 = intersect(point0, point1);
                    listener.point(point2[0], point2[1]);
                    listener.lineEnd();
                  }
                  point0 = point2;
                } else if (notHemisphere && point0 && smallRadius ^ v) {
                  var t;
                  if (!(c & c0) && (t = intersect(point1, point0, true))) {
                    clean = 0;
                    if (smallRadius) {
                      listener.lineStart();
                      listener.point(t[0][0], t[0][1]);
                      listener.point(t[1][0], t[1][1]);
                      listener.lineEnd();
                    } else {
                      listener.point(t[1][0], t[1][1]);
                      listener.lineEnd();
                      listener.lineStart();
                      listener.point(t[0][0], t[0][1]);
                    }
                  }
                }
                if (v && (!point0 || !d3_geo_sphericalEqual(point0, point1))) {
                  listener.point(point1[0], point1[1]);
                }
                point0 = point1, v0 = v, c0 = c;
              },
              lineEnd: function() {
                if (v0) listener.lineEnd();
                point0 = null;
              },
              clean: function() {
                return clean | (v00 && v0) << 1;
              }
            };
          }
          function intersect(a, b, two) {
            var pa = d3_geo_cartesian(a), pb = d3_geo_cartesian(b);
            var n1 = [1, 0, 0], n2 = d3_geo_cartesianCross(pa, pb), n2n2 = d3_geo_cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
            if (!determinant) return !two && a;
            var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = d3_geo_cartesianCross(n1, n2), A = d3_geo_cartesianScale(n1, c1), B = d3_geo_cartesianScale(n2, c2);
            d3_geo_cartesianAdd(A, B);
            var u = n1xn2, w = d3_geo_cartesianDot(A, u), uu = d3_geo_cartesianDot(u, u), t2 = w * w - uu * (d3_geo_cartesianDot(A, A) - 1);
            if (t2 < 0) return;
            var t = Math.sqrt(t2), q = d3_geo_cartesianScale(u, (-w - t) / uu);
            d3_geo_cartesianAdd(q, A);
            q = d3_geo_spherical(q);
            if (!two) return q;
            var \u03BB0 = a[0], \u03BB1 = b[0], \u03C60 = a[1], \u03C61 = b[1], z;
            if (\u03BB1 < \u03BB0) z = \u03BB0, \u03BB0 = \u03BB1, \u03BB1 = z;
            var \u03B4\u03BB = \u03BB1 - \u03BB0, polar = abs3(\u03B4\u03BB - \u03C0) < \u03B5, meridian = polar || \u03B4\u03BB < \u03B5;
            if (!polar && \u03C61 < \u03C60) z = \u03C60, \u03C60 = \u03C61, \u03C61 = z;
            if (meridian ? polar ? \u03C60 + \u03C61 > 0 ^ q[1] < (abs3(q[0] - \u03BB0) < \u03B5 ? \u03C60 : \u03C61) : \u03C60 <= q[1] && q[1] <= \u03C61 : \u03B4\u03BB > \u03C0 ^ (\u03BB0 <= q[0] && q[0] <= \u03BB1)) {
              var q1 = d3_geo_cartesianScale(u, (-w + t) / uu);
              d3_geo_cartesianAdd(q1, A);
              return [q, d3_geo_spherical(q1)];
            }
          }
          function code(\u03BB, \u03C6) {
            var r = smallRadius ? radius2 : \u03C0 - radius2, code2 = 0;
            if (\u03BB < -r) code2 |= 1;
            else if (\u03BB > r) code2 |= 2;
            if (\u03C6 < -r) code2 |= 4;
            else if (\u03C6 > r) code2 |= 8;
            return code2;
          }
        }
        function d3_geom_clipLine(x0, y0, x1, y1) {
          return function(line) {
            var a = line.a, b = line.b, ax = a.x, ay = a.y, bx = b.x, by = b.y, t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r;
            r = x0 - ax;
            if (!dx && r > 0) return;
            r /= dx;
            if (dx < 0) {
              if (r < t0) return;
              if (r < t1) t1 = r;
            } else if (dx > 0) {
              if (r > t1) return;
              if (r > t0) t0 = r;
            }
            r = x1 - ax;
            if (!dx && r < 0) return;
            r /= dx;
            if (dx < 0) {
              if (r > t1) return;
              if (r > t0) t0 = r;
            } else if (dx > 0) {
              if (r < t0) return;
              if (r < t1) t1 = r;
            }
            r = y0 - ay;
            if (!dy && r > 0) return;
            r /= dy;
            if (dy < 0) {
              if (r < t0) return;
              if (r < t1) t1 = r;
            } else if (dy > 0) {
              if (r > t1) return;
              if (r > t0) t0 = r;
            }
            r = y1 - ay;
            if (!dy && r < 0) return;
            r /= dy;
            if (dy < 0) {
              if (r > t1) return;
              if (r > t0) t0 = r;
            } else if (dy > 0) {
              if (r < t0) return;
              if (r < t1) t1 = r;
            }
            if (t0 > 0) line.a = {
              x: ax + t0 * dx,
              y: ay + t0 * dy
            };
            if (t1 < 1) line.b = {
              x: ax + t1 * dx,
              y: ay + t1 * dy
            };
            return line;
          };
        }
        var d3_geo_clipExtentMAX = 1e9;
        d32.geo.clipExtent = function() {
          var x0, y0, x1, y1, stream, clip, clipExtent = {
            stream: function(output) {
              if (stream) stream.valid = false;
              stream = clip(output);
              stream.valid = true;
              return stream;
            },
            extent: function(_) {
              if (!arguments.length) return [[x0, y0], [x1, y1]];
              clip = d3_geo_clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]);
              if (stream) stream.valid = false, stream = null;
              return clipExtent;
            }
          };
          return clipExtent.extent([[0, 0], [960, 500]]);
        };
        function d3_geo_clipExtent(x0, y0, x1, y1) {
          return function(listener) {
            var listener_ = listener, bufferListener = d3_geo_clipBufferListener(), clipLine = d3_geom_clipLine(x0, y0, x1, y1), segments, polygon, ring;
            var clip = {
              point,
              lineStart,
              lineEnd,
              polygonStart: function() {
                listener = bufferListener;
                segments = [];
                polygon = [];
                clean = true;
              },
              polygonEnd: function() {
                listener = listener_;
                segments = d32.merge(segments);
                var clipStartInside = insidePolygon([x0, y1]), inside = clean && clipStartInside, visible = segments.length;
                if (inside || visible) {
                  listener.polygonStart();
                  if (inside) {
                    listener.lineStart();
                    interpolate2(null, null, 1, listener);
                    listener.lineEnd();
                  }
                  if (visible) {
                    d3_geo_clipPolygon(segments, compare3, clipStartInside, interpolate2, listener);
                  }
                  listener.polygonEnd();
                }
                segments = polygon = ring = null;
              }
            };
            function insidePolygon(p) {
              var wn = 0, n = polygon.length, y = p[1];
              for (var i = 0; i < n; ++i) {
                for (var j = 1, v = polygon[i], m = v.length, a = v[0], b; j < m; ++j) {
                  b = v[j];
                  if (a[1] <= y) {
                    if (b[1] > y && d3_cross2d(a, b, p) > 0) ++wn;
                  } else {
                    if (b[1] <= y && d3_cross2d(a, b, p) < 0) --wn;
                  }
                  a = b;
                }
              }
              return wn !== 0;
            }
            function interpolate2(from, to, direction, listener2) {
              var a = 0, a1 = 0;
              if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoints(from, to) < 0 ^ direction > 0) {
                do {
                  listener2.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
                } while ((a = (a + direction + 4) % 4) !== a1);
              } else {
                listener2.point(to[0], to[1]);
              }
            }
            function pointVisible(x, y) {
              return x0 <= x && x <= x1 && y0 <= y && y <= y1;
            }
            function point(x, y) {
              if (pointVisible(x, y)) listener.point(x, y);
            }
            var x__, y__, v__, x_, y_, v_, first, clean;
            function lineStart() {
              clip.point = linePoint;
              if (polygon) polygon.push(ring = []);
              first = true;
              v_ = false;
              x_ = y_ = NaN;
            }
            function lineEnd() {
              if (segments) {
                linePoint(x__, y__);
                if (v__ && v_) bufferListener.rejoin();
                segments.push(bufferListener.buffer());
              }
              clip.point = point;
              if (v_) listener.lineEnd();
            }
            function linePoint(x, y) {
              x = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, x));
              y = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, y));
              var v = pointVisible(x, y);
              if (polygon) ring.push([x, y]);
              if (first) {
                x__ = x, y__ = y, v__ = v;
                first = false;
                if (v) {
                  listener.lineStart();
                  listener.point(x, y);
                }
              } else {
                if (v && v_) listener.point(x, y);
                else {
                  var l = {
                    a: {
                      x: x_,
                      y: y_
                    },
                    b: {
                      x,
                      y
                    }
                  };
                  if (clipLine(l)) {
                    if (!v_) {
                      listener.lineStart();
                      listener.point(l.a.x, l.a.y);
                    }
                    listener.point(l.b.x, l.b.y);
                    if (!v) listener.lineEnd();
                    clean = false;
                  } else if (v) {
                    listener.lineStart();
                    listener.point(x, y);
                    clean = false;
                  }
                }
              }
              x_ = x, y_ = y, v_ = v;
            }
            return clip;
          };
          function corner(p, direction) {
            return abs3(p[0] - x0) < \u03B5 ? direction > 0 ? 0 : 3 : abs3(p[0] - x1) < \u03B5 ? direction > 0 ? 2 : 1 : abs3(p[1] - y0) < \u03B5 ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
          }
          function compare3(a, b) {
            return comparePoints(a.x, b.x);
          }
          function comparePoints(a, b) {
            var ca = corner(a, 1), cb = corner(b, 1);
            return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
          }
        }
        function d3_geo_conic(projectAt) {
          var \u03C60 = 0, \u03C61 = \u03C0 / 3, m = d3_geo_projectionMutator(projectAt), p = m(\u03C60, \u03C61);
          p.parallels = function(_) {
            if (!arguments.length) return [\u03C60 / \u03C0 * 180, \u03C61 / \u03C0 * 180];
            return m(\u03C60 = _[0] * \u03C0 / 180, \u03C61 = _[1] * \u03C0 / 180);
          };
          return p;
        }
        function d3_geo_conicEqualArea(\u03C60, \u03C61) {
          var sin\u03C60 = Math.sin(\u03C60), n = (sin\u03C60 + Math.sin(\u03C61)) / 2, C = 1 + sin\u03C60 * (2 * n - sin\u03C60), \u03C10 = Math.sqrt(C) / n;
          function forward(\u03BB, \u03C6) {
            var \u03C13 = Math.sqrt(C - 2 * n * Math.sin(\u03C6)) / n;
            return [\u03C13 * Math.sin(\u03BB *= n), \u03C10 - \u03C13 * Math.cos(\u03BB)];
          }
          forward.invert = function(x, y) {
            var \u03C10_y = \u03C10 - y;
            return [Math.atan2(x, \u03C10_y) / n, d3_asin((C - (x * x + \u03C10_y * \u03C10_y) * n * n) / (2 * n))];
          };
          return forward;
        }
        (d32.geo.conicEqualArea = function() {
          return d3_geo_conic(d3_geo_conicEqualArea);
        }).raw = d3_geo_conicEqualArea;
        d32.geo.albers = function() {
          return d32.geo.conicEqualArea().rotate([96, 0]).center([-0.6, 38.7]).parallels([29.5, 45.5]).scale(1070);
        };
        d32.geo.albersUsa = function() {
          var lower48 = d32.geo.albers();
          var alaska = d32.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]);
          var hawaii = d32.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]);
          var point, pointStream = {
            point: function(x, y) {
              point = [x, y];
            }
          }, lower48Point, alaskaPoint, hawaiiPoint;
          function albersUsa(coordinates) {
            var x = coordinates[0], y = coordinates[1];
            point = null;
            (lower48Point(x, y), point) || (alaskaPoint(x, y), point) || hawaiiPoint(x, y);
            return point;
          }
          albersUsa.invert = function(coordinates) {
            var k = lower48.scale(), t = lower48.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
            return (y >= 0.12 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii : lower48).invert(coordinates);
          };
          albersUsa.stream = function(stream) {
            var lower48Stream = lower48.stream(stream), alaskaStream = alaska.stream(stream), hawaiiStream = hawaii.stream(stream);
            return {
              point: function(x, y) {
                lower48Stream.point(x, y);
                alaskaStream.point(x, y);
                hawaiiStream.point(x, y);
              },
              sphere: function() {
                lower48Stream.sphere();
                alaskaStream.sphere();
                hawaiiStream.sphere();
              },
              lineStart: function() {
                lower48Stream.lineStart();
                alaskaStream.lineStart();
                hawaiiStream.lineStart();
              },
              lineEnd: function() {
                lower48Stream.lineEnd();
                alaskaStream.lineEnd();
                hawaiiStream.lineEnd();
              },
              polygonStart: function() {
                lower48Stream.polygonStart();
                alaskaStream.polygonStart();
                hawaiiStream.polygonStart();
              },
              polygonEnd: function() {
                lower48Stream.polygonEnd();
                alaskaStream.polygonEnd();
                hawaiiStream.polygonEnd();
              }
            };
          };
          albersUsa.precision = function(_) {
            if (!arguments.length) return lower48.precision();
            lower48.precision(_);
            alaska.precision(_);
            hawaii.precision(_);
            return albersUsa;
          };
          albersUsa.scale = function(_) {
            if (!arguments.length) return lower48.scale();
            lower48.scale(_);
            alaska.scale(_ * 0.35);
            hawaii.scale(_);
            return albersUsa.translate(lower48.translate());
          };
          albersUsa.translate = function(_) {
            if (!arguments.length) return lower48.translate();
            var k = lower48.scale(), x = +_[0], y = +_[1];
            lower48Point = lower48.translate(_).clipExtent([[x - 0.455 * k, y - 0.238 * k], [x + 0.455 * k, y + 0.238 * k]]).stream(pointStream).point;
            alaskaPoint = alaska.translate([x - 0.307 * k, y + 0.201 * k]).clipExtent([[x - 0.425 * k + \u03B5, y + 0.12 * k + \u03B5], [x - 0.214 * k - \u03B5, y + 0.234 * k - \u03B5]]).stream(pointStream).point;
            hawaiiPoint = hawaii.translate([x - 0.205 * k, y + 0.212 * k]).clipExtent([[x - 0.214 * k + \u03B5, y + 0.166 * k + \u03B5], [x - 0.115 * k - \u03B5, y + 0.234 * k - \u03B5]]).stream(pointStream).point;
            return albersUsa;
          };
          return albersUsa.scale(1070);
        };
        var d3_geo_pathAreaSum, d3_geo_pathAreaPolygon, d3_geo_pathArea = {
          point: d3_noop,
          lineStart: d3_noop,
          lineEnd: d3_noop,
          polygonStart: function() {
            d3_geo_pathAreaPolygon = 0;
            d3_geo_pathArea.lineStart = d3_geo_pathAreaRingStart;
          },
          polygonEnd: function() {
            d3_geo_pathArea.lineStart = d3_geo_pathArea.lineEnd = d3_geo_pathArea.point = d3_noop;
            d3_geo_pathAreaSum += abs3(d3_geo_pathAreaPolygon / 2);
          }
        };
        function d3_geo_pathAreaRingStart() {
          var x00, y00, x0, y0;
          d3_geo_pathArea.point = function(x, y) {
            d3_geo_pathArea.point = nextPoint;
            x00 = x0 = x, y00 = y0 = y;
          };
          function nextPoint(x, y) {
            d3_geo_pathAreaPolygon += y0 * x - x0 * y;
            x0 = x, y0 = y;
          }
          d3_geo_pathArea.lineEnd = function() {
            nextPoint(x00, y00);
          };
        }
        var d3_geo_pathBoundsX0, d3_geo_pathBoundsY0, d3_geo_pathBoundsX1, d3_geo_pathBoundsY1;
        var d3_geo_pathBounds = {
          point: d3_geo_pathBoundsPoint,
          lineStart: d3_noop,
          lineEnd: d3_noop,
          polygonStart: d3_noop,
          polygonEnd: d3_noop
        };
        function d3_geo_pathBoundsPoint(x, y) {
          if (x < d3_geo_pathBoundsX0) d3_geo_pathBoundsX0 = x;
          if (x > d3_geo_pathBoundsX1) d3_geo_pathBoundsX1 = x;
          if (y < d3_geo_pathBoundsY0) d3_geo_pathBoundsY0 = y;
          if (y > d3_geo_pathBoundsY1) d3_geo_pathBoundsY1 = y;
        }
        function d3_geo_pathBuffer() {
          var pointCircle = d3_geo_pathBufferCircle(4.5), buffer = [];
          var stream = {
            point,
            lineStart: function() {
              stream.point = pointLineStart;
            },
            lineEnd,
            polygonStart: function() {
              stream.lineEnd = lineEndPolygon;
            },
            polygonEnd: function() {
              stream.lineEnd = lineEnd;
              stream.point = point;
            },
            pointRadius: function(_) {
              pointCircle = d3_geo_pathBufferCircle(_);
              return stream;
            },
            result: function() {
              if (buffer.length) {
                var result = buffer.join("");
                buffer = [];
                return result;
              }
            }
          };
          function point(x, y) {
            buffer.push("M", x, ",", y, pointCircle);
          }
          function pointLineStart(x, y) {
            buffer.push("M", x, ",", y);
            stream.point = pointLine;
          }
          function pointLine(x, y) {
            buffer.push("L", x, ",", y);
          }
          function lineEnd() {
            stream.point = point;
          }
          function lineEndPolygon() {
            buffer.push("Z");
          }
          return stream;
        }
        function d3_geo_pathBufferCircle(radius2) {
          return "m0," + radius2 + "a" + radius2 + "," + radius2 + " 0 1,1 0," + -2 * radius2 + "a" + radius2 + "," + radius2 + " 0 1,1 0," + 2 * radius2 + "z";
        }
        var d3_geo_pathCentroid = {
          point: d3_geo_pathCentroidPoint,
          lineStart: d3_geo_pathCentroidLineStart,
          lineEnd: d3_geo_pathCentroidLineEnd,
          polygonStart: function() {
            d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidRingStart;
          },
          polygonEnd: function() {
            d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
            d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidLineStart;
            d3_geo_pathCentroid.lineEnd = d3_geo_pathCentroidLineEnd;
          }
        };
        function d3_geo_pathCentroidPoint(x, y) {
          d3_geo_centroidX0 += x;
          d3_geo_centroidY0 += y;
          ++d3_geo_centroidZ0;
        }
        function d3_geo_pathCentroidLineStart() {
          var x0, y0;
          d3_geo_pathCentroid.point = function(x, y) {
            d3_geo_pathCentroid.point = nextPoint;
            d3_geo_pathCentroidPoint(x0 = x, y0 = y);
          };
          function nextPoint(x, y) {
            var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
            d3_geo_centroidX1 += z * (x0 + x) / 2;
            d3_geo_centroidY1 += z * (y0 + y) / 2;
            d3_geo_centroidZ1 += z;
            d3_geo_pathCentroidPoint(x0 = x, y0 = y);
          }
        }
        function d3_geo_pathCentroidLineEnd() {
          d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
        }
        function d3_geo_pathCentroidRingStart() {
          var x00, y00, x0, y0;
          d3_geo_pathCentroid.point = function(x, y) {
            d3_geo_pathCentroid.point = nextPoint;
            d3_geo_pathCentroidPoint(x00 = x0 = x, y00 = y0 = y);
          };
          function nextPoint(x, y) {
            var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
            d3_geo_centroidX1 += z * (x0 + x) / 2;
            d3_geo_centroidY1 += z * (y0 + y) / 2;
            d3_geo_centroidZ1 += z;
            z = y0 * x - x0 * y;
            d3_geo_centroidX2 += z * (x0 + x);
            d3_geo_centroidY2 += z * (y0 + y);
            d3_geo_centroidZ2 += z * 3;
            d3_geo_pathCentroidPoint(x0 = x, y0 = y);
          }
          d3_geo_pathCentroid.lineEnd = function() {
            nextPoint(x00, y00);
          };
        }
        function d3_geo_pathContext(context) {
          var pointRadius = 4.5;
          var stream = {
            point,
            lineStart: function() {
              stream.point = pointLineStart;
            },
            lineEnd,
            polygonStart: function() {
              stream.lineEnd = lineEndPolygon;
            },
            polygonEnd: function() {
              stream.lineEnd = lineEnd;
              stream.point = point;
            },
            pointRadius: function(_) {
              pointRadius = _;
              return stream;
            },
            result: d3_noop
          };
          function point(x, y) {
            context.moveTo(x + pointRadius, y);
            context.arc(x, y, pointRadius, 0, \u03C4);
          }
          function pointLineStart(x, y) {
            context.moveTo(x, y);
            stream.point = pointLine;
          }
          function pointLine(x, y) {
            context.lineTo(x, y);
          }
          function lineEnd() {
            stream.point = point;
          }
          function lineEndPolygon() {
            context.closePath();
          }
          return stream;
        }
        function d3_geo_resample(project) {
          var \u03B42 = 0.5, cosMinDistance = Math.cos(30 * d3_radians), maxDepth = 16;
          function resample(stream) {
            return (maxDepth ? resampleRecursive : resampleNone)(stream);
          }
          function resampleNone(stream) {
            return d3_geo_transformPoint(stream, function(x, y) {
              x = project(x, y);
              stream.point(x[0], x[1]);
            });
          }
          function resampleRecursive(stream) {
            var \u03BB00, \u03C600, x00, y00, a00, b00, c00, \u03BB0, x0, y0, a0, b0, c0;
            var resample2 = {
              point,
              lineStart,
              lineEnd,
              polygonStart: function() {
                stream.polygonStart();
                resample2.lineStart = ringStart;
              },
              polygonEnd: function() {
                stream.polygonEnd();
                resample2.lineStart = lineStart;
              }
            };
            function point(x, y) {
              x = project(x, y);
              stream.point(x[0], x[1]);
            }
            function lineStart() {
              x0 = NaN;
              resample2.point = linePoint;
              stream.lineStart();
            }
            function linePoint(\u03BB, \u03C6) {
              var c = d3_geo_cartesian([\u03BB, \u03C6]), p = project(\u03BB, \u03C6);
              resampleLineTo(x0, y0, \u03BB0, a0, b0, c0, x0 = p[0], y0 = p[1], \u03BB0 = \u03BB, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
              stream.point(x0, y0);
            }
            function lineEnd() {
              resample2.point = point;
              stream.lineEnd();
            }
            function ringStart() {
              lineStart();
              resample2.point = ringPoint;
              resample2.lineEnd = ringEnd;
            }
            function ringPoint(\u03BB, \u03C6) {
              linePoint(\u03BB00 = \u03BB, \u03C600 = \u03C6), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
              resample2.point = linePoint;
            }
            function ringEnd() {
              resampleLineTo(x0, y0, \u03BB0, a0, b0, c0, x00, y00, \u03BB00, a00, b00, c00, maxDepth, stream);
              resample2.lineEnd = lineEnd;
              lineEnd();
            }
            return resample2;
          }
          function resampleLineTo(x0, y0, \u03BB0, a0, b0, c0, x1, y1, \u03BB1, a1, b1, c1, depth, stream) {
            var dx = x1 - x0, dy = y1 - y0, d2 = dx * dx + dy * dy;
            if (d2 > 4 * \u03B42 && depth--) {
              var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = Math.sqrt(a * a + b * b + c * c), \u03C62 = Math.asin(c /= m), \u03BB2 = abs3(abs3(c) - 1) < \u03B5 || abs3(\u03BB0 - \u03BB1) < \u03B5 ? (\u03BB0 + \u03BB1) / 2 : Math.atan2(b, a), p = project(\u03BB2, \u03C62), x2 = p[0], y2 = p[1], dx2 = x2 - x0, dy2 = y2 - y0, dz = dy * dx2 - dx * dy2;
              if (dz * dz / d2 > \u03B42 || abs3((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
                resampleLineTo(x0, y0, \u03BB0, a0, b0, c0, x2, y2, \u03BB2, a /= m, b /= m, c, depth, stream);
                stream.point(x2, y2);
                resampleLineTo(x2, y2, \u03BB2, a, b, c, x1, y1, \u03BB1, a1, b1, c1, depth, stream);
              }
            }
          }
          resample.precision = function(_) {
            if (!arguments.length) return Math.sqrt(\u03B42);
            maxDepth = (\u03B42 = _ * _) > 0 && 16;
            return resample;
          };
          return resample;
        }
        d32.geo.path = function() {
          var pointRadius = 4.5, projection, context, projectStream, contextStream, cacheStream;
          function path(object) {
            if (object) {
              if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
              if (!cacheStream || !cacheStream.valid) cacheStream = projectStream(contextStream);
              d32.geo.stream(object, cacheStream);
            }
            return contextStream.result();
          }
          path.area = function(object) {
            d3_geo_pathAreaSum = 0;
            d32.geo.stream(object, projectStream(d3_geo_pathArea));
            return d3_geo_pathAreaSum;
          };
          path.centroid = function(object) {
            d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
            d32.geo.stream(object, projectStream(d3_geo_pathCentroid));
            return d3_geo_centroidZ2 ? [d3_geo_centroidX2 / d3_geo_centroidZ2, d3_geo_centroidY2 / d3_geo_centroidZ2] : d3_geo_centroidZ1 ? [d3_geo_centroidX1 / d3_geo_centroidZ1, d3_geo_centroidY1 / d3_geo_centroidZ1] : d3_geo_centroidZ0 ? [d3_geo_centroidX0 / d3_geo_centroidZ0, d3_geo_centroidY0 / d3_geo_centroidZ0] : [NaN, NaN];
          };
          path.bounds = function(object) {
            d3_geo_pathBoundsX1 = d3_geo_pathBoundsY1 = -(d3_geo_pathBoundsX0 = d3_geo_pathBoundsY0 = Infinity);
            d32.geo.stream(object, projectStream(d3_geo_pathBounds));
            return [[d3_geo_pathBoundsX0, d3_geo_pathBoundsY0], [d3_geo_pathBoundsX1, d3_geo_pathBoundsY1]];
          };
          path.projection = function(_) {
            if (!arguments.length) return projection;
            projectStream = (projection = _) ? _.stream || d3_geo_pathProjectStream(_) : d3_identity;
            return reset2();
          };
          path.context = function(_) {
            if (!arguments.length) return context;
            contextStream = (context = _) == null ? new d3_geo_pathBuffer() : new d3_geo_pathContext(_);
            if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
            return reset2();
          };
          path.pointRadius = function(_) {
            if (!arguments.length) return pointRadius;
            pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
            return path;
          };
          function reset2() {
            cacheStream = null;
            return path;
          }
          return path.projection(d32.geo.albersUsa()).context(null);
        };
        function d3_geo_pathProjectStream(project) {
          var resample = d3_geo_resample(function(x, y) {
            return project([x * d3_degrees, y * d3_degrees]);
          });
          return function(stream) {
            return d3_geo_projectionRadians(resample(stream));
          };
        }
        d32.geo.transform = function(methods) {
          return {
            stream: function(stream) {
              var transform = new d3_geo_transform(stream);
              for (var k in methods) transform[k] = methods[k];
              return transform;
            }
          };
        };
        function d3_geo_transform(stream) {
          this.stream = stream;
        }
        d3_geo_transform.prototype = {
          point: function(x, y) {
            this.stream.point(x, y);
          },
          sphere: function() {
            this.stream.sphere();
          },
          lineStart: function() {
            this.stream.lineStart();
          },
          lineEnd: function() {
            this.stream.lineEnd();
          },
          polygonStart: function() {
            this.stream.polygonStart();
          },
          polygonEnd: function() {
            this.stream.polygonEnd();
          }
        };
        function d3_geo_transformPoint(stream, point) {
          return {
            point,
            sphere: function() {
              stream.sphere();
            },
            lineStart: function() {
              stream.lineStart();
            },
            lineEnd: function() {
              stream.lineEnd();
            },
            polygonStart: function() {
              stream.polygonStart();
            },
            polygonEnd: function() {
              stream.polygonEnd();
            }
          };
        }
        d32.geo.projection = d3_geo_projection;
        d32.geo.projectionMutator = d3_geo_projectionMutator;
        function d3_geo_projection(project) {
          return d3_geo_projectionMutator(function() {
            return project;
          })();
        }
        function d3_geo_projectionMutator(projectAt) {
          var project, rotate, projectRotate, projectResample = d3_geo_resample(function(x2, y2) {
            x2 = project(x2, y2);
            return [x2[0] * k + \u03B4x, \u03B4y - x2[1] * k];
          }), k = 150, x = 480, y = 250, \u03BB = 0, \u03C6 = 0, \u03B4\u03BB = 0, \u03B4\u03C6 = 0, \u03B4\u03B3 = 0, \u03B4x, \u03B4y, preclip = d3_geo_clipAntimeridian, postclip = d3_identity, clipAngle = null, clipExtent = null, stream;
          function projection(point) {
            point = projectRotate(point[0] * d3_radians, point[1] * d3_radians);
            return [point[0] * k + \u03B4x, \u03B4y - point[1] * k];
          }
          function invert(point) {
            point = projectRotate.invert((point[0] - \u03B4x) / k, (\u03B4y - point[1]) / k);
            return point && [point[0] * d3_degrees, point[1] * d3_degrees];
          }
          projection.stream = function(output) {
            if (stream) stream.valid = false;
            stream = d3_geo_projectionRadians(preclip(rotate, projectResample(postclip(output))));
            stream.valid = true;
            return stream;
          };
          projection.clipAngle = function(_) {
            if (!arguments.length) return clipAngle;
            preclip = _ == null ? (clipAngle = _, d3_geo_clipAntimeridian) : d3_geo_clipCircle((clipAngle = +_) * d3_radians);
            return invalidate();
          };
          projection.clipExtent = function(_) {
            if (!arguments.length) return clipExtent;
            clipExtent = _;
            postclip = _ ? d3_geo_clipExtent(_[0][0], _[0][1], _[1][0], _[1][1]) : d3_identity;
            return invalidate();
          };
          projection.scale = function(_) {
            if (!arguments.length) return k;
            k = +_;
            return reset2();
          };
          projection.translate = function(_) {
            if (!arguments.length) return [x, y];
            x = +_[0];
            y = +_[1];
            return reset2();
          };
          projection.center = function(_) {
            if (!arguments.length) return [\u03BB * d3_degrees, \u03C6 * d3_degrees];
            \u03BB = _[0] % 360 * d3_radians;
            \u03C6 = _[1] % 360 * d3_radians;
            return reset2();
          };
          projection.rotate = function(_) {
            if (!arguments.length) return [\u03B4\u03BB * d3_degrees, \u03B4\u03C6 * d3_degrees, \u03B4\u03B3 * d3_degrees];
            \u03B4\u03BB = _[0] % 360 * d3_radians;
            \u03B4\u03C6 = _[1] % 360 * d3_radians;
            \u03B4\u03B3 = _.length > 2 ? _[2] % 360 * d3_radians : 0;
            return reset2();
          };
          d32.rebind(projection, projectResample, "precision");
          function reset2() {
            projectRotate = d3_geo_compose(rotate = d3_geo_rotation(\u03B4\u03BB, \u03B4\u03C6, \u03B4\u03B3), project);
            var center = project(\u03BB, \u03C6);
            \u03B4x = x - center[0] * k;
            \u03B4y = y + center[1] * k;
            return invalidate();
          }
          function invalidate() {
            if (stream) stream.valid = false, stream = null;
            return projection;
          }
          return function() {
            project = projectAt.apply(this, arguments);
            projection.invert = project.invert && invert;
            return reset2();
          };
        }
        function d3_geo_projectionRadians(stream) {
          return d3_geo_transformPoint(stream, function(x, y) {
            stream.point(x * d3_radians, y * d3_radians);
          });
        }
        function d3_geo_equirectangular(\u03BB, \u03C6) {
          return [\u03BB, \u03C6];
        }
        (d32.geo.equirectangular = function() {
          return d3_geo_projection(d3_geo_equirectangular);
        }).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular;
        d32.geo.rotation = function(rotate) {
          rotate = d3_geo_rotation(rotate[0] % 360 * d3_radians, rotate[1] * d3_radians, rotate.length > 2 ? rotate[2] * d3_radians : 0);
          function forward(coordinates) {
            coordinates = rotate(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
            return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
          }
          forward.invert = function(coordinates) {
            coordinates = rotate.invert(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
            return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
          };
          return forward;
        };
        function d3_geo_identityRotation(\u03BB, \u03C6) {
          return [\u03BB > \u03C0 ? \u03BB - \u03C4 : \u03BB < -\u03C0 ? \u03BB + \u03C4 : \u03BB, \u03C6];
        }
        d3_geo_identityRotation.invert = d3_geo_equirectangular;
        function d3_geo_rotation(\u03B4\u03BB, \u03B4\u03C6, \u03B4\u03B3) {
          return \u03B4\u03BB ? \u03B4\u03C6 || \u03B4\u03B3 ? d3_geo_compose(d3_geo_rotation\u03BB(\u03B4\u03BB), d3_geo_rotation\u03C6\u03B3(\u03B4\u03C6, \u03B4\u03B3)) : d3_geo_rotation\u03BB(\u03B4\u03BB) : \u03B4\u03C6 || \u03B4\u03B3 ? d3_geo_rotation\u03C6\u03B3(\u03B4\u03C6, \u03B4\u03B3) : d3_geo_identityRotation;
        }
        function d3_geo_forwardRotation\u03BB(\u03B4\u03BB) {
          return function(\u03BB, \u03C6) {
            return \u03BB += \u03B4\u03BB, [\u03BB > \u03C0 ? \u03BB - \u03C4 : \u03BB < -\u03C0 ? \u03BB + \u03C4 : \u03BB, \u03C6];
          };
        }
        function d3_geo_rotation\u03BB(\u03B4\u03BB) {
          var rotation = d3_geo_forwardRotation\u03BB(\u03B4\u03BB);
          rotation.invert = d3_geo_forwardRotation\u03BB(-\u03B4\u03BB);
          return rotation;
        }
        function d3_geo_rotation\u03C6\u03B3(\u03B4\u03C6, \u03B4\u03B3) {
          var cos\u03B4\u03C6 = Math.cos(\u03B4\u03C6), sin\u03B4\u03C6 = Math.sin(\u03B4\u03C6), cos\u03B4\u03B3 = Math.cos(\u03B4\u03B3), sin\u03B4\u03B3 = Math.sin(\u03B4\u03B3);
          function rotation(\u03BB, \u03C6) {
            var cos\u03C6 = Math.cos(\u03C6), x = Math.cos(\u03BB) * cos\u03C6, y = Math.sin(\u03BB) * cos\u03C6, z = Math.sin(\u03C6), k = z * cos\u03B4\u03C6 + x * sin\u03B4\u03C6;
            return [Math.atan2(y * cos\u03B4\u03B3 - k * sin\u03B4\u03B3, x * cos\u03B4\u03C6 - z * sin\u03B4\u03C6), d3_asin(k * cos\u03B4\u03B3 + y * sin\u03B4\u03B3)];
          }
          rotation.invert = function(\u03BB, \u03C6) {
            var cos\u03C6 = Math.cos(\u03C6), x = Math.cos(\u03BB) * cos\u03C6, y = Math.sin(\u03BB) * cos\u03C6, z = Math.sin(\u03C6), k = z * cos\u03B4\u03B3 - y * sin\u03B4\u03B3;
            return [Math.atan2(y * cos\u03B4\u03B3 + z * sin\u03B4\u03B3, x * cos\u03B4\u03C6 + k * sin\u03B4\u03C6), d3_asin(k * cos\u03B4\u03C6 - x * sin\u03B4\u03C6)];
          };
          return rotation;
        }
        d32.geo.circle = function() {
          var origin = [0, 0], angle, precision = 6, interpolate2;
          function circle() {
            var center = typeof origin === "function" ? origin.apply(this, arguments) : origin, rotate = d3_geo_rotation(-center[0] * d3_radians, -center[1] * d3_radians, 0).invert, ring = [];
            interpolate2(null, null, 1, {
              point: function(x, y) {
                ring.push(x = rotate(x, y));
                x[0] *= d3_degrees, x[1] *= d3_degrees;
              }
            });
            return {
              type: "Polygon",
              coordinates: [ring]
            };
          }
          circle.origin = function(x) {
            if (!arguments.length) return origin;
            origin = x;
            return circle;
          };
          circle.angle = function(x) {
            if (!arguments.length) return angle;
            interpolate2 = d3_geo_circleInterpolate((angle = +x) * d3_radians, precision * d3_radians);
            return circle;
          };
          circle.precision = function(_) {
            if (!arguments.length) return precision;
            interpolate2 = d3_geo_circleInterpolate(angle * d3_radians, (precision = +_) * d3_radians);
            return circle;
          };
          return circle.angle(90);
        };
        function d3_geo_circleInterpolate(radius2, precision) {
          var cr = Math.cos(radius2), sr = Math.sin(radius2);
          return function(from, to, direction, listener) {
            var step = direction * precision;
            if (from != null) {
              from = d3_geo_circleAngle(cr, from);
              to = d3_geo_circleAngle(cr, to);
              if (direction > 0 ? from < to : from > to) from += direction * \u03C4;
            } else {
              from = radius2 + direction * \u03C4;
              to = radius2 - 0.5 * step;
            }
            for (var point, t = from; direction > 0 ? t > to : t < to; t -= step) {
              listener.point((point = d3_geo_spherical([cr, -sr * Math.cos(t), -sr * Math.sin(t)]))[0], point[1]);
            }
          };
        }
        function d3_geo_circleAngle(cr, point) {
          var a = d3_geo_cartesian(point);
          a[0] -= cr;
          d3_geo_cartesianNormalize(a);
          var angle = d3_acos(-a[1]);
          return ((-a[2] < 0 ? -angle : angle) + 2 * Math.PI - \u03B5) % (2 * Math.PI);
        }
        d32.geo.distance = function(a, b) {
          var \u0394\u03BB = (b[0] - a[0]) * d3_radians, \u03C60 = a[1] * d3_radians, \u03C61 = b[1] * d3_radians, sin\u0394\u03BB = Math.sin(\u0394\u03BB), cos\u0394\u03BB = Math.cos(\u0394\u03BB), sin\u03C60 = Math.sin(\u03C60), cos\u03C60 = Math.cos(\u03C60), sin\u03C61 = Math.sin(\u03C61), cos\u03C61 = Math.cos(\u03C61), t;
          return Math.atan2(Math.sqrt((t = cos\u03C61 * sin\u0394\u03BB) * t + (t = cos\u03C60 * sin\u03C61 - sin\u03C60 * cos\u03C61 * cos\u0394\u03BB) * t), sin\u03C60 * sin\u03C61 + cos\u03C60 * cos\u03C61 * cos\u0394\u03BB);
        };
        d32.geo.graticule = function() {
          var x1, x0, X1, X0, y1, y0, Y1, Y0, dx = 10, dy = dx, DX = 90, DY = 360, x, y, X, Y, precision = 2.5;
          function graticule() {
            return {
              type: "MultiLineString",
              coordinates: lines()
            };
          }
          function lines() {
            return d32.range(Math.ceil(X0 / DX) * DX, X1, DX).map(X).concat(d32.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(d32.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function(x2) {
              return abs3(x2 % DX) > \u03B5;
            }).map(x)).concat(d32.range(Math.ceil(y0 / dy) * dy, y1, dy).filter(function(y2) {
              return abs3(y2 % DY) > \u03B5;
            }).map(y));
          }
          graticule.lines = function() {
            return lines().map(function(coordinates) {
              return {
                type: "LineString",
                coordinates
              };
            });
          };
          graticule.outline = function() {
            return {
              type: "Polygon",
              coordinates: [X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1))]
            };
          };
          graticule.extent = function(_) {
            if (!arguments.length) return graticule.minorExtent();
            return graticule.majorExtent(_).minorExtent(_);
          };
          graticule.majorExtent = function(_) {
            if (!arguments.length) return [[X0, Y0], [X1, Y1]];
            X0 = +_[0][0], X1 = +_[1][0];
            Y0 = +_[0][1], Y1 = +_[1][1];
            if (X0 > X1) _ = X0, X0 = X1, X1 = _;
            if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
            return graticule.precision(precision);
          };
          graticule.minorExtent = function(_) {
            if (!arguments.length) return [[x0, y0], [x1, y1]];
            x0 = +_[0][0], x1 = +_[1][0];
            y0 = +_[0][1], y1 = +_[1][1];
            if (x0 > x1) _ = x0, x0 = x1, x1 = _;
            if (y0 > y1) _ = y0, y0 = y1, y1 = _;
            return graticule.precision(precision);
          };
          graticule.step = function(_) {
            if (!arguments.length) return graticule.minorStep();
            return graticule.majorStep(_).minorStep(_);
          };
          graticule.majorStep = function(_) {
            if (!arguments.length) return [DX, DY];
            DX = +_[0], DY = +_[1];
            return graticule;
          };
          graticule.minorStep = function(_) {
            if (!arguments.length) return [dx, dy];
            dx = +_[0], dy = +_[1];
            return graticule;
          };
          graticule.precision = function(_) {
            if (!arguments.length) return precision;
            precision = +_;
            x = d3_geo_graticuleX(y0, y1, 90);
            y = d3_geo_graticuleY(x0, x1, precision);
            X = d3_geo_graticuleX(Y0, Y1, 90);
            Y = d3_geo_graticuleY(X0, X1, precision);
            return graticule;
          };
          return graticule.majorExtent([[-180, -90 + \u03B5], [180, 90 - \u03B5]]).minorExtent([[-180, -80 - \u03B5], [180, 80 + \u03B5]]);
        };
        function d3_geo_graticuleX(y0, y1, dy) {
          var y = d32.range(y0, y1 - \u03B5, dy).concat(y1);
          return function(x) {
            return y.map(function(y2) {
              return [x, y2];
            });
          };
        }
        function d3_geo_graticuleY(x0, x1, dx) {
          var x = d32.range(x0, x1 - \u03B5, dx).concat(x1);
          return function(y) {
            return x.map(function(x2) {
              return [x2, y];
            });
          };
        }
        function d3_source(d) {
          return d.source;
        }
        function d3_target(d) {
          return d.target;
        }
        d32.geo.greatArc = function() {
          var source2 = d3_source, source_, target = d3_target, target_;
          function greatArc() {
            return {
              type: "LineString",
              coordinates: [source_ || source2.apply(this, arguments), target_ || target.apply(this, arguments)]
            };
          }
          greatArc.distance = function() {
            return d32.geo.distance(source_ || source2.apply(this, arguments), target_ || target.apply(this, arguments));
          };
          greatArc.source = function(_) {
            if (!arguments.length) return source2;
            source2 = _, source_ = typeof _ === "function" ? null : _;
            return greatArc;
          };
          greatArc.target = function(_) {
            if (!arguments.length) return target;
            target = _, target_ = typeof _ === "function" ? null : _;
            return greatArc;
          };
          greatArc.precision = function() {
            return arguments.length ? greatArc : 0;
          };
          return greatArc;
        };
        d32.geo.interpolate = function(source2, target) {
          return d3_geo_interpolate(source2[0] * d3_radians, source2[1] * d3_radians, target[0] * d3_radians, target[1] * d3_radians);
        };
        function d3_geo_interpolate(x0, y0, x1, y1) {
          var cy0 = Math.cos(y0), sy0 = Math.sin(y0), cy1 = Math.cos(y1), sy1 = Math.sin(y1), kx0 = cy0 * Math.cos(x0), ky0 = cy0 * Math.sin(x0), kx1 = cy1 * Math.cos(x1), ky1 = cy1 * Math.sin(x1), d = 2 * Math.asin(Math.sqrt(d3_haversin(y1 - y0) + cy0 * cy1 * d3_haversin(x1 - x0))), k = 1 / Math.sin(d);
          var interpolate2 = d ? function(t) {
            var B = Math.sin(t *= d) * k, A = Math.sin(d - t) * k, x = A * kx0 + B * kx1, y = A * ky0 + B * ky1, z = A * sy0 + B * sy1;
            return [Math.atan2(y, x) * d3_degrees, Math.atan2(z, Math.sqrt(x * x + y * y)) * d3_degrees];
          } : function() {
            return [x0 * d3_degrees, y0 * d3_degrees];
          };
          interpolate2.distance = d;
          return interpolate2;
        }
        d32.geo.length = function(object) {
          d3_geo_lengthSum = 0;
          d32.geo.stream(object, d3_geo_length);
          return d3_geo_lengthSum;
        };
        var d3_geo_lengthSum;
        var d3_geo_length = {
          sphere: d3_noop,
          point: d3_noop,
          lineStart: d3_geo_lengthLineStart,
          lineEnd: d3_noop,
          polygonStart: d3_noop,
          polygonEnd: d3_noop
        };
        function d3_geo_lengthLineStart() {
          var \u03BB0, sin\u03C60, cos\u03C60;
          d3_geo_length.point = function(\u03BB, \u03C6) {
            \u03BB0 = \u03BB * d3_radians, sin\u03C60 = Math.sin(\u03C6 *= d3_radians), cos\u03C60 = Math.cos(\u03C6);
            d3_geo_length.point = nextPoint;
          };
          d3_geo_length.lineEnd = function() {
            d3_geo_length.point = d3_geo_length.lineEnd = d3_noop;
          };
          function nextPoint(\u03BB, \u03C6) {
            var sin\u03C6 = Math.sin(\u03C6 *= d3_radians), cos\u03C6 = Math.cos(\u03C6), t = abs3((\u03BB *= d3_radians) - \u03BB0), cos\u0394\u03BB = Math.cos(t);
            d3_geo_lengthSum += Math.atan2(Math.sqrt((t = cos\u03C6 * Math.sin(t)) * t + (t = cos\u03C60 * sin\u03C6 - sin\u03C60 * cos\u03C6 * cos\u0394\u03BB) * t), sin\u03C60 * sin\u03C6 + cos\u03C60 * cos\u03C6 * cos\u0394\u03BB);
            \u03BB0 = \u03BB, sin\u03C60 = sin\u03C6, cos\u03C60 = cos\u03C6;
          }
        }
        function d3_geo_azimuthal(scale2, angle) {
          function azimuthal(\u03BB, \u03C6) {
            var cos\u03BB = Math.cos(\u03BB), cos\u03C6 = Math.cos(\u03C6), k = scale2(cos\u03BB * cos\u03C6);
            return [k * cos\u03C6 * Math.sin(\u03BB), k * Math.sin(\u03C6)];
          }
          azimuthal.invert = function(x, y) {
            var \u03C13 = Math.sqrt(x * x + y * y), c = angle(\u03C13), sinc = Math.sin(c), cosc = Math.cos(c);
            return [Math.atan2(x * sinc, \u03C13 * cosc), Math.asin(\u03C13 && y * sinc / \u03C13)];
          };
          return azimuthal;
        }
        var d3_geo_azimuthalEqualArea = d3_geo_azimuthal(function(cos\u03BBcos\u03C6) {
          return Math.sqrt(2 / (1 + cos\u03BBcos\u03C6));
        }, function(\u03C13) {
          return 2 * Math.asin(\u03C13 / 2);
        });
        (d32.geo.azimuthalEqualArea = function() {
          return d3_geo_projection(d3_geo_azimuthalEqualArea);
        }).raw = d3_geo_azimuthalEqualArea;
        var d3_geo_azimuthalEquidistant = d3_geo_azimuthal(function(cos\u03BBcos\u03C6) {
          var c = Math.acos(cos\u03BBcos\u03C6);
          return c && c / Math.sin(c);
        }, d3_identity);
        (d32.geo.azimuthalEquidistant = function() {
          return d3_geo_projection(d3_geo_azimuthalEquidistant);
        }).raw = d3_geo_azimuthalEquidistant;
        function d3_geo_conicConformal(\u03C60, \u03C61) {
          var cos\u03C60 = Math.cos(\u03C60), t = function(\u03C6) {
            return Math.tan(\u03C0 / 4 + \u03C6 / 2);
          }, n = \u03C60 === \u03C61 ? Math.sin(\u03C60) : Math.log(cos\u03C60 / Math.cos(\u03C61)) / Math.log(t(\u03C61) / t(\u03C60)), F = cos\u03C60 * Math.pow(t(\u03C60), n) / n;
          if (!n) return d3_geo_mercator;
          function forward(\u03BB, \u03C6) {
            if (F > 0) {
              if (\u03C6 < -half\u03C0 + \u03B5) \u03C6 = -half\u03C0 + \u03B5;
            } else {
              if (\u03C6 > half\u03C0 - \u03B5) \u03C6 = half\u03C0 - \u03B5;
            }
            var \u03C13 = F / Math.pow(t(\u03C6), n);
            return [\u03C13 * Math.sin(n * \u03BB), F - \u03C13 * Math.cos(n * \u03BB)];
          }
          forward.invert = function(x, y) {
            var \u03C10_y = F - y, \u03C13 = d3_sgn(n) * Math.sqrt(x * x + \u03C10_y * \u03C10_y);
            return [Math.atan2(x, \u03C10_y) / n, 2 * Math.atan(Math.pow(F / \u03C13, 1 / n)) - half\u03C0];
          };
          return forward;
        }
        (d32.geo.conicConformal = function() {
          return d3_geo_conic(d3_geo_conicConformal);
        }).raw = d3_geo_conicConformal;
        function d3_geo_conicEquidistant(\u03C60, \u03C61) {
          var cos\u03C60 = Math.cos(\u03C60), n = \u03C60 === \u03C61 ? Math.sin(\u03C60) : (cos\u03C60 - Math.cos(\u03C61)) / (\u03C61 - \u03C60), G = cos\u03C60 / n + \u03C60;
          if (abs3(n) < \u03B5) return d3_geo_equirectangular;
          function forward(\u03BB, \u03C6) {
            var \u03C13 = G - \u03C6;
            return [\u03C13 * Math.sin(n * \u03BB), G - \u03C13 * Math.cos(n * \u03BB)];
          }
          forward.invert = function(x, y) {
            var \u03C10_y = G - y;
            return [Math.atan2(x, \u03C10_y) / n, G - d3_sgn(n) * Math.sqrt(x * x + \u03C10_y * \u03C10_y)];
          };
          return forward;
        }
        (d32.geo.conicEquidistant = function() {
          return d3_geo_conic(d3_geo_conicEquidistant);
        }).raw = d3_geo_conicEquidistant;
        var d3_geo_gnomonic = d3_geo_azimuthal(function(cos\u03BBcos\u03C6) {
          return 1 / cos\u03BBcos\u03C6;
        }, Math.atan);
        (d32.geo.gnomonic = function() {
          return d3_geo_projection(d3_geo_gnomonic);
        }).raw = d3_geo_gnomonic;
        function d3_geo_mercator(\u03BB, \u03C6) {
          return [\u03BB, Math.log(Math.tan(\u03C0 / 4 + \u03C6 / 2))];
        }
        d3_geo_mercator.invert = function(x, y) {
          return [x, 2 * Math.atan(Math.exp(y)) - half\u03C0];
        };
        function d3_geo_mercatorProjection(project) {
          var m = d3_geo_projection(project), scale2 = m.scale, translate = m.translate, clipExtent = m.clipExtent, clipAuto;
          m.scale = function() {
            var v = scale2.apply(m, arguments);
            return v === m ? clipAuto ? m.clipExtent(null) : m : v;
          };
          m.translate = function() {
            var v = translate.apply(m, arguments);
            return v === m ? clipAuto ? m.clipExtent(null) : m : v;
          };
          m.clipExtent = function(_) {
            var v = clipExtent.apply(m, arguments);
            if (v === m) {
              if (clipAuto = _ == null) {
                var k = \u03C0 * scale2(), t = translate();
                clipExtent([[t[0] - k, t[1] - k], [t[0] + k, t[1] + k]]);
              }
            } else if (clipAuto) {
              v = null;
            }
            return v;
          };
          return m.clipExtent(null);
        }
        (d32.geo.mercator = function() {
          return d3_geo_mercatorProjection(d3_geo_mercator);
        }).raw = d3_geo_mercator;
        var d3_geo_orthographic = d3_geo_azimuthal(function() {
          return 1;
        }, Math.asin);
        (d32.geo.orthographic = function() {
          return d3_geo_projection(d3_geo_orthographic);
        }).raw = d3_geo_orthographic;
        var d3_geo_stereographic = d3_geo_azimuthal(function(cos\u03BBcos\u03C6) {
          return 1 / (1 + cos\u03BBcos\u03C6);
        }, function(\u03C13) {
          return 2 * Math.atan(\u03C13);
        });
        (d32.geo.stereographic = function() {
          return d3_geo_projection(d3_geo_stereographic);
        }).raw = d3_geo_stereographic;
        function d3_geo_transverseMercator(\u03BB, \u03C6) {
          return [Math.log(Math.tan(\u03C0 / 4 + \u03C6 / 2)), -\u03BB];
        }
        d3_geo_transverseMercator.invert = function(x, y) {
          return [-y, 2 * Math.atan(Math.exp(x)) - half\u03C0];
        };
        (d32.geo.transverseMercator = function() {
          var projection = d3_geo_mercatorProjection(d3_geo_transverseMercator), center = projection.center, rotate = projection.rotate;
          projection.center = function(_) {
            return _ ? center([-_[1], _[0]]) : (_ = center(), [_[1], -_[0]]);
          };
          projection.rotate = function(_) {
            return _ ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
          };
          return rotate([0, 0, 90]);
        }).raw = d3_geo_transverseMercator;
        d32.geom = {};
        function d3_geom_pointX(d) {
          return d[0];
        }
        function d3_geom_pointY(d) {
          return d[1];
        }
        d32.geom.hull = function(vertices) {
          var x = d3_geom_pointX, y = d3_geom_pointY;
          if (arguments.length) return hull(vertices);
          function hull(data) {
            if (data.length < 3) return [];
            var fx = d3_functor(x), fy = d3_functor(y), i, n = data.length, points = [], flippedPoints = [];
            for (i = 0; i < n; i++) {
              points.push([+fx.call(this, data[i], i), +fy.call(this, data[i], i), i]);
            }
            points.sort(d3_geom_hullOrder);
            for (i = 0; i < n; i++) flippedPoints.push([points[i][0], -points[i][1]]);
            var upper = d3_geom_hullUpper(points), lower = d3_geom_hullUpper(flippedPoints);
            var skipLeft = lower[0] === upper[0], skipRight = lower[lower.length - 1] === upper[upper.length - 1], polygon = [];
            for (i = upper.length - 1; i >= 0; --i) polygon.push(data[points[upper[i]][2]]);
            for (i = +skipLeft; i < lower.length - skipRight; ++i) polygon.push(data[points[lower[i]][2]]);
            return polygon;
          }
          hull.x = function(_) {
            return arguments.length ? (x = _, hull) : x;
          };
          hull.y = function(_) {
            return arguments.length ? (y = _, hull) : y;
          };
          return hull;
        };
        function d3_geom_hullUpper(points) {
          var n = points.length, hull = [0, 1], hs = 2;
          for (var i = 2; i < n; i++) {
            while (hs > 1 && d3_cross2d(points[hull[hs - 2]], points[hull[hs - 1]], points[i]) <= 0) --hs;
            hull[hs++] = i;
          }
          return hull.slice(0, hs);
        }
        function d3_geom_hullOrder(a, b) {
          return a[0] - b[0] || a[1] - b[1];
        }
        d32.geom.polygon = function(coordinates) {
          d3_subclass(coordinates, d3_geom_polygonPrototype);
          return coordinates;
        };
        var d3_geom_polygonPrototype = d32.geom.polygon.prototype = [];
        d3_geom_polygonPrototype.area = function() {
          var i = -1, n = this.length, a, b = this[n - 1], area = 0;
          while (++i < n) {
            a = b;
            b = this[i];
            area += a[1] * b[0] - a[0] * b[1];
          }
          return area * 0.5;
        };
        d3_geom_polygonPrototype.centroid = function(k) {
          var i = -1, n = this.length, x = 0, y = 0, a, b = this[n - 1], c;
          if (!arguments.length) k = -1 / (6 * this.area());
          while (++i < n) {
            a = b;
            b = this[i];
            c = a[0] * b[1] - b[0] * a[1];
            x += (a[0] + b[0]) * c;
            y += (a[1] + b[1]) * c;
          }
          return [x * k, y * k];
        };
        d3_geom_polygonPrototype.clip = function(subject) {
          var input, closed = d3_geom_polygonClosed(subject), i = -1, n = this.length - d3_geom_polygonClosed(this), j, m, a = this[n - 1], b, c, d;
          while (++i < n) {
            input = subject.slice();
            subject.length = 0;
            b = this[i];
            c = input[(m = input.length - closed) - 1];
            j = -1;
            while (++j < m) {
              d = input[j];
              if (d3_geom_polygonInside(d, a, b)) {
                if (!d3_geom_polygonInside(c, a, b)) {
                  subject.push(d3_geom_polygonIntersect(c, d, a, b));
                }
                subject.push(d);
              } else if (d3_geom_polygonInside(c, a, b)) {
                subject.push(d3_geom_polygonIntersect(c, d, a, b));
              }
              c = d;
            }
            if (closed) subject.push(subject[0]);
            a = b;
          }
          return subject;
        };
        function d3_geom_polygonInside(p, a, b) {
          return (b[0] - a[0]) * (p[1] - a[1]) < (b[1] - a[1]) * (p[0] - a[0]);
        }
        function d3_geom_polygonIntersect(c, d, a, b) {
          var x1 = c[0], x3 = a[0], x21 = d[0] - x1, x43 = b[0] - x3, y1 = c[1], y3 = a[1], y21 = d[1] - y1, y43 = b[1] - y3, ua = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
          return [x1 + ua * x21, y1 + ua * y21];
        }
        function d3_geom_polygonClosed(coordinates) {
          var a = coordinates[0], b = coordinates[coordinates.length - 1];
          return !(a[0] - b[0] || a[1] - b[1]);
        }
        var d3_geom_voronoiEdges, d3_geom_voronoiCells, d3_geom_voronoiBeaches, d3_geom_voronoiBeachPool = [], d3_geom_voronoiFirstCircle, d3_geom_voronoiCircles, d3_geom_voronoiCirclePool = [];
        function d3_geom_voronoiBeach() {
          d3_geom_voronoiRedBlackNode(this);
          this.edge = this.site = this.circle = null;
        }
        function d3_geom_voronoiCreateBeach(site) {
          var beach = d3_geom_voronoiBeachPool.pop() || new d3_geom_voronoiBeach();
          beach.site = site;
          return beach;
        }
        function d3_geom_voronoiDetachBeach(beach) {
          d3_geom_voronoiDetachCircle(beach);
          d3_geom_voronoiBeaches.remove(beach);
          d3_geom_voronoiBeachPool.push(beach);
          d3_geom_voronoiRedBlackNode(beach);
        }
        function d3_geom_voronoiRemoveBeach(beach) {
          var circle = beach.circle, x = circle.x, y = circle.cy, vertex = {
            x,
            y
          }, previous = beach.P, next = beach.N, disappearing = [beach];
          d3_geom_voronoiDetachBeach(beach);
          var lArc = previous;
          while (lArc.circle && abs3(x - lArc.circle.x) < \u03B5 && abs3(y - lArc.circle.cy) < \u03B5) {
            previous = lArc.P;
            disappearing.unshift(lArc);
            d3_geom_voronoiDetachBeach(lArc);
            lArc = previous;
          }
          disappearing.unshift(lArc);
          d3_geom_voronoiDetachCircle(lArc);
          var rArc = next;
          while (rArc.circle && abs3(x - rArc.circle.x) < \u03B5 && abs3(y - rArc.circle.cy) < \u03B5) {
            next = rArc.N;
            disappearing.push(rArc);
            d3_geom_voronoiDetachBeach(rArc);
            rArc = next;
          }
          disappearing.push(rArc);
          d3_geom_voronoiDetachCircle(rArc);
          var nArcs = disappearing.length, iArc;
          for (iArc = 1; iArc < nArcs; ++iArc) {
            rArc = disappearing[iArc];
            lArc = disappearing[iArc - 1];
            d3_geom_voronoiSetEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
          }
          lArc = disappearing[0];
          rArc = disappearing[nArcs - 1];
          rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, rArc.site, null, vertex);
          d3_geom_voronoiAttachCircle(lArc);
          d3_geom_voronoiAttachCircle(rArc);
        }
        function d3_geom_voronoiAddBeach(site) {
          var x = site.x, directrix = site.y, lArc, rArc, dxl, dxr, node = d3_geom_voronoiBeaches._;
          while (node) {
            dxl = d3_geom_voronoiLeftBreakPoint(node, directrix) - x;
            if (dxl > \u03B5) node = node.L;
            else {
              dxr = x - d3_geom_voronoiRightBreakPoint(node, directrix);
              if (dxr > \u03B5) {
                if (!node.R) {
                  lArc = node;
                  break;
                }
                node = node.R;
              } else {
                if (dxl > -\u03B5) {
                  lArc = node.P;
                  rArc = node;
                } else if (dxr > -\u03B5) {
                  lArc = node;
                  rArc = node.N;
                } else {
                  lArc = rArc = node;
                }
                break;
              }
            }
          }
          var newArc = d3_geom_voronoiCreateBeach(site);
          d3_geom_voronoiBeaches.insert(lArc, newArc);
          if (!lArc && !rArc) return;
          if (lArc === rArc) {
            d3_geom_voronoiDetachCircle(lArc);
            rArc = d3_geom_voronoiCreateBeach(lArc.site);
            d3_geom_voronoiBeaches.insert(newArc, rArc);
            newArc.edge = rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
            d3_geom_voronoiAttachCircle(lArc);
            d3_geom_voronoiAttachCircle(rArc);
            return;
          }
          if (!rArc) {
            newArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
            return;
          }
          d3_geom_voronoiDetachCircle(lArc);
          d3_geom_voronoiDetachCircle(rArc);
          var lSite = lArc.site, ax = lSite.x, ay = lSite.y, bx = site.x - ax, by = site.y - ay, rSite = rArc.site, cx = rSite.x - ax, cy = rSite.y - ay, d = 2 * (bx * cy - by * cx), hb = bx * bx + by * by, hc = cx * cx + cy * cy, vertex = {
            x: (cy * hb - by * hc) / d + ax,
            y: (bx * hc - cx * hb) / d + ay
          };
          d3_geom_voronoiSetEdgeEnd(rArc.edge, lSite, rSite, vertex);
          newArc.edge = d3_geom_voronoiCreateEdge(lSite, site, null, vertex);
          rArc.edge = d3_geom_voronoiCreateEdge(site, rSite, null, vertex);
          d3_geom_voronoiAttachCircle(lArc);
          d3_geom_voronoiAttachCircle(rArc);
        }
        function d3_geom_voronoiLeftBreakPoint(arc2, directrix) {
          var site = arc2.site, rfocx = site.x, rfocy = site.y, pby2 = rfocy - directrix;
          if (!pby2) return rfocx;
          var lArc = arc2.P;
          if (!lArc) return -Infinity;
          site = lArc.site;
          var lfocx = site.x, lfocy = site.y, plby2 = lfocy - directrix;
          if (!plby2) return lfocx;
          var hl = lfocx - rfocx, aby2 = 1 / pby2 - 1 / plby2, b = hl / plby2;
          if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
          return (rfocx + lfocx) / 2;
        }
        function d3_geom_voronoiRightBreakPoint(arc2, directrix) {
          var rArc = arc2.N;
          if (rArc) return d3_geom_voronoiLeftBreakPoint(rArc, directrix);
          var site = arc2.site;
          return site.y === directrix ? site.x : Infinity;
        }
        function d3_geom_voronoiCell(site) {
          this.site = site;
          this.edges = [];
        }
        d3_geom_voronoiCell.prototype.prepare = function() {
          var halfEdges = this.edges, iHalfEdge = halfEdges.length, edge;
          while (iHalfEdge--) {
            edge = halfEdges[iHalfEdge].edge;
            if (!edge.b || !edge.a) halfEdges.splice(iHalfEdge, 1);
          }
          halfEdges.sort(d3_geom_voronoiHalfEdgeOrder);
          return halfEdges.length;
        };
        function d3_geom_voronoiCloseCells(extent) {
          var x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], x2, y2, x3, y3, cells = d3_geom_voronoiCells, iCell = cells.length, cell, iHalfEdge, halfEdges, nHalfEdges, start, end;
          while (iCell--) {
            cell = cells[iCell];
            if (!cell || !cell.prepare()) continue;
            halfEdges = cell.edges;
            nHalfEdges = halfEdges.length;
            iHalfEdge = 0;
            while (iHalfEdge < nHalfEdges) {
              end = halfEdges[iHalfEdge].end(), x3 = end.x, y3 = end.y;
              start = halfEdges[++iHalfEdge % nHalfEdges].start(), x2 = start.x, y2 = start.y;
              if (abs3(x3 - x2) > \u03B5 || abs3(y3 - y2) > \u03B5) {
                halfEdges.splice(iHalfEdge, 0, new d3_geom_voronoiHalfEdge(d3_geom_voronoiCreateBorderEdge(cell.site, end, abs3(x3 - x0) < \u03B5 && y1 - y3 > \u03B5 ? {
                  x: x0,
                  y: abs3(x2 - x0) < \u03B5 ? y2 : y1
                } : abs3(y3 - y1) < \u03B5 && x1 - x3 > \u03B5 ? {
                  x: abs3(y2 - y1) < \u03B5 ? x2 : x1,
                  y: y1
                } : abs3(x3 - x1) < \u03B5 && y3 - y0 > \u03B5 ? {
                  x: x1,
                  y: abs3(x2 - x1) < \u03B5 ? y2 : y0
                } : abs3(y3 - y0) < \u03B5 && x3 - x0 > \u03B5 ? {
                  x: abs3(y2 - y0) < \u03B5 ? x2 : x0,
                  y: y0
                } : null), cell.site, null));
                ++nHalfEdges;
              }
            }
          }
        }
        function d3_geom_voronoiHalfEdgeOrder(a, b) {
          return b.angle - a.angle;
        }
        function d3_geom_voronoiCircle() {
          d3_geom_voronoiRedBlackNode(this);
          this.x = this.y = this.arc = this.site = this.cy = null;
        }
        function d3_geom_voronoiAttachCircle(arc2) {
          var lArc = arc2.P, rArc = arc2.N;
          if (!lArc || !rArc) return;
          var lSite = lArc.site, cSite = arc2.site, rSite = rArc.site;
          if (lSite === rSite) return;
          var bx = cSite.x, by = cSite.y, ax = lSite.x - bx, ay = lSite.y - by, cx = rSite.x - bx, cy = rSite.y - by;
          var d = 2 * (ax * cy - ay * cx);
          if (d >= -\u03B52) return;
          var ha = ax * ax + ay * ay, hc = cx * cx + cy * cy, x = (cy * ha - ay * hc) / d, y = (ax * hc - cx * ha) / d, cy = y + by;
          var circle = d3_geom_voronoiCirclePool.pop() || new d3_geom_voronoiCircle();
          circle.arc = arc2;
          circle.site = cSite;
          circle.x = x + bx;
          circle.y = cy + Math.sqrt(x * x + y * y);
          circle.cy = cy;
          arc2.circle = circle;
          var before2 = null, node = d3_geom_voronoiCircles._;
          while (node) {
            if (circle.y < node.y || circle.y === node.y && circle.x <= node.x) {
              if (node.L) node = node.L;
              else {
                before2 = node.P;
                break;
              }
            } else {
              if (node.R) node = node.R;
              else {
                before2 = node;
                break;
              }
            }
          }
          d3_geom_voronoiCircles.insert(before2, circle);
          if (!before2) d3_geom_voronoiFirstCircle = circle;
        }
        function d3_geom_voronoiDetachCircle(arc2) {
          var circle = arc2.circle;
          if (circle) {
            if (!circle.P) d3_geom_voronoiFirstCircle = circle.N;
            d3_geom_voronoiCircles.remove(circle);
            d3_geom_voronoiCirclePool.push(circle);
            d3_geom_voronoiRedBlackNode(circle);
            arc2.circle = null;
          }
        }
        function d3_geom_voronoiClipEdges(extent) {
          var edges = d3_geom_voronoiEdges, clip = d3_geom_clipLine(extent[0][0], extent[0][1], extent[1][0], extent[1][1]), i = edges.length, e;
          while (i--) {
            e = edges[i];
            if (!d3_geom_voronoiConnectEdge(e, extent) || !clip(e) || abs3(e.a.x - e.b.x) < \u03B5 && abs3(e.a.y - e.b.y) < \u03B5) {
              e.a = e.b = null;
              edges.splice(i, 1);
            }
          }
        }
        function d3_geom_voronoiConnectEdge(edge, extent) {
          var vb = edge.b;
          if (vb) return true;
          var va = edge.a, x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], lSite = edge.l, rSite = edge.r, lx = lSite.x, ly = lSite.y, rx = rSite.x, ry = rSite.y, fx = (lx + rx) / 2, fy = (ly + ry) / 2, fm, fb;
          if (ry === ly) {
            if (fx < x0 || fx >= x1) return;
            if (lx > rx) {
              if (!va) va = {
                x: fx,
                y: y0
              };
              else if (va.y >= y1) return;
              vb = {
                x: fx,
                y: y1
              };
            } else {
              if (!va) va = {
                x: fx,
                y: y1
              };
              else if (va.y < y0) return;
              vb = {
                x: fx,
                y: y0
              };
            }
          } else {
            fm = (lx - rx) / (ry - ly);
            fb = fy - fm * fx;
            if (fm < -1 || fm > 1) {
              if (lx > rx) {
                if (!va) va = {
                  x: (y0 - fb) / fm,
                  y: y0
                };
                else if (va.y >= y1) return;
                vb = {
                  x: (y1 - fb) / fm,
                  y: y1
                };
              } else {
                if (!va) va = {
                  x: (y1 - fb) / fm,
                  y: y1
                };
                else if (va.y < y0) return;
                vb = {
                  x: (y0 - fb) / fm,
                  y: y0
                };
              }
            } else {
              if (ly < ry) {
                if (!va) va = {
                  x: x0,
                  y: fm * x0 + fb
                };
                else if (va.x >= x1) return;
                vb = {
                  x: x1,
                  y: fm * x1 + fb
                };
              } else {
                if (!va) va = {
                  x: x1,
                  y: fm * x1 + fb
                };
                else if (va.x < x0) return;
                vb = {
                  x: x0,
                  y: fm * x0 + fb
                };
              }
            }
          }
          edge.a = va;
          edge.b = vb;
          return true;
        }
        function d3_geom_voronoiEdge(lSite, rSite) {
          this.l = lSite;
          this.r = rSite;
          this.a = this.b = null;
        }
        function d3_geom_voronoiCreateEdge(lSite, rSite, va, vb) {
          var edge = new d3_geom_voronoiEdge(lSite, rSite);
          d3_geom_voronoiEdges.push(edge);
          if (va) d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, va);
          if (vb) d3_geom_voronoiSetEdgeEnd(edge, rSite, lSite, vb);
          d3_geom_voronoiCells[lSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, lSite, rSite));
          d3_geom_voronoiCells[rSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, rSite, lSite));
          return edge;
        }
        function d3_geom_voronoiCreateBorderEdge(lSite, va, vb) {
          var edge = new d3_geom_voronoiEdge(lSite, null);
          edge.a = va;
          edge.b = vb;
          d3_geom_voronoiEdges.push(edge);
          return edge;
        }
        function d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, vertex) {
          if (!edge.a && !edge.b) {
            edge.a = vertex;
            edge.l = lSite;
            edge.r = rSite;
          } else if (edge.l === rSite) {
            edge.b = vertex;
          } else {
            edge.a = vertex;
          }
        }
        function d3_geom_voronoiHalfEdge(edge, lSite, rSite) {
          var va = edge.a, vb = edge.b;
          this.edge = edge;
          this.site = lSite;
          this.angle = rSite ? Math.atan2(rSite.y - lSite.y, rSite.x - lSite.x) : edge.l === lSite ? Math.atan2(vb.x - va.x, va.y - vb.y) : Math.atan2(va.x - vb.x, vb.y - va.y);
        }
        d3_geom_voronoiHalfEdge.prototype = {
          start: function() {
            return this.edge.l === this.site ? this.edge.a : this.edge.b;
          },
          end: function() {
            return this.edge.l === this.site ? this.edge.b : this.edge.a;
          }
        };
        function d3_geom_voronoiRedBlackTree() {
          this._ = null;
        }
        function d3_geom_voronoiRedBlackNode(node) {
          node.U = node.C = node.L = node.R = node.P = node.N = null;
        }
        d3_geom_voronoiRedBlackTree.prototype = {
          insert: function(after, node) {
            var parent, grandpa, uncle;
            if (after) {
              node.P = after;
              node.N = after.N;
              if (after.N) after.N.P = node;
              after.N = node;
              if (after.R) {
                after = after.R;
                while (after.L) after = after.L;
                after.L = node;
              } else {
                after.R = node;
              }
              parent = after;
            } else if (this._) {
              after = d3_geom_voronoiRedBlackFirst(this._);
              node.P = null;
              node.N = after;
              after.P = after.L = node;
              parent = after;
            } else {
              node.P = node.N = null;
              this._ = node;
              parent = null;
            }
            node.L = node.R = null;
            node.U = parent;
            node.C = true;
            after = node;
            while (parent && parent.C) {
              grandpa = parent.U;
              if (parent === grandpa.L) {
                uncle = grandpa.R;
                if (uncle && uncle.C) {
                  parent.C = uncle.C = false;
                  grandpa.C = true;
                  after = grandpa;
                } else {
                  if (after === parent.R) {
                    d3_geom_voronoiRedBlackRotateLeft(this, parent);
                    after = parent;
                    parent = after.U;
                  }
                  parent.C = false;
                  grandpa.C = true;
                  d3_geom_voronoiRedBlackRotateRight(this, grandpa);
                }
              } else {
                uncle = grandpa.L;
                if (uncle && uncle.C) {
                  parent.C = uncle.C = false;
                  grandpa.C = true;
                  after = grandpa;
                } else {
                  if (after === parent.L) {
                    d3_geom_voronoiRedBlackRotateRight(this, parent);
                    after = parent;
                    parent = after.U;
                  }
                  parent.C = false;
                  grandpa.C = true;
                  d3_geom_voronoiRedBlackRotateLeft(this, grandpa);
                }
              }
              parent = after.U;
            }
            this._.C = false;
          },
          remove: function(node) {
            if (node.N) node.N.P = node.P;
            if (node.P) node.P.N = node.N;
            node.N = node.P = null;
            var parent = node.U, sibling, left = node.L, right = node.R, next, red;
            if (!left) next = right;
            else if (!right) next = left;
            else next = d3_geom_voronoiRedBlackFirst(right);
            if (parent) {
              if (parent.L === node) parent.L = next;
              else parent.R = next;
            } else {
              this._ = next;
            }
            if (left && right) {
              red = next.C;
              next.C = node.C;
              next.L = left;
              left.U = next;
              if (next !== right) {
                parent = next.U;
                next.U = node.U;
                node = next.R;
                parent.L = node;
                next.R = right;
                right.U = next;
              } else {
                next.U = parent;
                parent = next;
                node = next.R;
              }
            } else {
              red = node.C;
              node = next;
            }
            if (node) node.U = parent;
            if (red) return;
            if (node && node.C) {
              node.C = false;
              return;
            }
            do {
              if (node === this._) break;
              if (node === parent.L) {
                sibling = parent.R;
                if (sibling.C) {
                  sibling.C = false;
                  parent.C = true;
                  d3_geom_voronoiRedBlackRotateLeft(this, parent);
                  sibling = parent.R;
                }
                if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
                  if (!sibling.R || !sibling.R.C) {
                    sibling.L.C = false;
                    sibling.C = true;
                    d3_geom_voronoiRedBlackRotateRight(this, sibling);
                    sibling = parent.R;
                  }
                  sibling.C = parent.C;
                  parent.C = sibling.R.C = false;
                  d3_geom_voronoiRedBlackRotateLeft(this, parent);
                  node = this._;
                  break;
                }
              } else {
                sibling = parent.L;
                if (sibling.C) {
                  sibling.C = false;
                  parent.C = true;
                  d3_geom_voronoiRedBlackRotateRight(this, parent);
                  sibling = parent.L;
                }
                if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
                  if (!sibling.L || !sibling.L.C) {
                    sibling.R.C = false;
                    sibling.C = true;
                    d3_geom_voronoiRedBlackRotateLeft(this, sibling);
                    sibling = parent.L;
                  }
                  sibling.C = parent.C;
                  parent.C = sibling.L.C = false;
                  d3_geom_voronoiRedBlackRotateRight(this, parent);
                  node = this._;
                  break;
                }
              }
              sibling.C = true;
              node = parent;
              parent = parent.U;
            } while (!node.C);
            if (node) node.C = false;
          }
        };
        function d3_geom_voronoiRedBlackRotateLeft(tree, node) {
          var p = node, q = node.R, parent = p.U;
          if (parent) {
            if (parent.L === p) parent.L = q;
            else parent.R = q;
          } else {
            tree._ = q;
          }
          q.U = parent;
          p.U = q;
          p.R = q.L;
          if (p.R) p.R.U = p;
          q.L = p;
        }
        function d3_geom_voronoiRedBlackRotateRight(tree, node) {
          var p = node, q = node.L, parent = p.U;
          if (parent) {
            if (parent.L === p) parent.L = q;
            else parent.R = q;
          } else {
            tree._ = q;
          }
          q.U = parent;
          p.U = q;
          p.L = q.R;
          if (p.L) p.L.U = p;
          q.R = p;
        }
        function d3_geom_voronoiRedBlackFirst(node) {
          while (node.L) node = node.L;
          return node;
        }
        function d3_geom_voronoi(sites, bbox) {
          var site = sites.sort(d3_geom_voronoiVertexOrder).pop(), x0, y0, circle;
          d3_geom_voronoiEdges = [];
          d3_geom_voronoiCells = new Array(sites.length);
          d3_geom_voronoiBeaches = new d3_geom_voronoiRedBlackTree();
          d3_geom_voronoiCircles = new d3_geom_voronoiRedBlackTree();
          while (true) {
            circle = d3_geom_voronoiFirstCircle;
            if (site && (!circle || site.y < circle.y || site.y === circle.y && site.x < circle.x)) {
              if (site.x !== x0 || site.y !== y0) {
                d3_geom_voronoiCells[site.i] = new d3_geom_voronoiCell(site);
                d3_geom_voronoiAddBeach(site);
                x0 = site.x, y0 = site.y;
              }
              site = sites.pop();
            } else if (circle) {
              d3_geom_voronoiRemoveBeach(circle.arc);
            } else {
              break;
            }
          }
          if (bbox) d3_geom_voronoiClipEdges(bbox), d3_geom_voronoiCloseCells(bbox);
          var diagram = {
            cells: d3_geom_voronoiCells,
            edges: d3_geom_voronoiEdges
          };
          d3_geom_voronoiBeaches = d3_geom_voronoiCircles = d3_geom_voronoiEdges = d3_geom_voronoiCells = null;
          return diagram;
        }
        function d3_geom_voronoiVertexOrder(a, b) {
          return b.y - a.y || b.x - a.x;
        }
        d32.geom.voronoi = function(points) {
          var x = d3_geom_pointX, y = d3_geom_pointY, fx = x, fy = y, clipExtent = d3_geom_voronoiClipExtent;
          if (points) return voronoi(points);
          function voronoi(data) {
            var polygons = new Array(data.length), x0 = clipExtent[0][0], y0 = clipExtent[0][1], x1 = clipExtent[1][0], y1 = clipExtent[1][1];
            d3_geom_voronoi(sites(data), clipExtent).cells.forEach(function(cell, i) {
              var edges = cell.edges, site = cell.site, polygon = polygons[i] = edges.length ? edges.map(function(e) {
                var s = e.start();
                return [s.x, s.y];
              }) : site.x >= x0 && site.x <= x1 && site.y >= y0 && site.y <= y1 ? [[x0, y1], [x1, y1], [x1, y0], [x0, y0]] : [];
              polygon.point = data[i];
            });
            return polygons;
          }
          function sites(data) {
            return data.map(function(d, i) {
              return {
                x: Math.round(fx(d, i) / \u03B5) * \u03B5,
                y: Math.round(fy(d, i) / \u03B5) * \u03B5,
                i
              };
            });
          }
          voronoi.links = function(data) {
            return d3_geom_voronoi(sites(data)).edges.filter(function(edge) {
              return edge.l && edge.r;
            }).map(function(edge) {
              return {
                source: data[edge.l.i],
                target: data[edge.r.i]
              };
            });
          };
          voronoi.triangles = function(data) {
            var triangles = [];
            d3_geom_voronoi(sites(data)).cells.forEach(function(cell, i) {
              var site = cell.site, edges = cell.edges.sort(d3_geom_voronoiHalfEdgeOrder), j = -1, m = edges.length, e0, s0, e1 = edges[m - 1].edge, s1 = e1.l === site ? e1.r : e1.l;
              while (++j < m) {
                e0 = e1;
                s0 = s1;
                e1 = edges[j].edge;
                s1 = e1.l === site ? e1.r : e1.l;
                if (i < s0.i && i < s1.i && d3_geom_voronoiTriangleArea(site, s0, s1) < 0) {
                  triangles.push([data[i], data[s0.i], data[s1.i]]);
                }
              }
            });
            return triangles;
          };
          voronoi.x = function(_) {
            return arguments.length ? (fx = d3_functor(x = _), voronoi) : x;
          };
          voronoi.y = function(_) {
            return arguments.length ? (fy = d3_functor(y = _), voronoi) : y;
          };
          voronoi.clipExtent = function(_) {
            if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent;
            clipExtent = _ == null ? d3_geom_voronoiClipExtent : _;
            return voronoi;
          };
          voronoi.size = function(_) {
            if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent && clipExtent[1];
            return voronoi.clipExtent(_ && [[0, 0], _]);
          };
          return voronoi;
        };
        var d3_geom_voronoiClipExtent = [[-1e6, -1e6], [1e6, 1e6]];
        function d3_geom_voronoiTriangleArea(a, b, c) {
          return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y);
        }
        d32.geom.delaunay = function(vertices) {
          return d32.geom.voronoi().triangles(vertices);
        };
        d32.geom.quadtree = function(points, x1, y1, x2, y2) {
          var x = d3_geom_pointX, y = d3_geom_pointY, compat;
          if (compat = arguments.length) {
            x = d3_geom_quadtreeCompatX;
            y = d3_geom_quadtreeCompatY;
            if (compat === 3) {
              y2 = y1;
              x2 = x1;
              y1 = x1 = 0;
            }
            return quadtree(points);
          }
          function quadtree(data) {
            var d, fx = d3_functor(x), fy = d3_functor(y), xs, ys, i, n, x1_, y1_, x2_, y2_;
            if (x1 != null) {
              x1_ = x1, y1_ = y1, x2_ = x2, y2_ = y2;
            } else {
              x2_ = y2_ = -(x1_ = y1_ = Infinity);
              xs = [], ys = [];
              n = data.length;
              if (compat) for (i = 0; i < n; ++i) {
                d = data[i];
                if (d.x < x1_) x1_ = d.x;
                if (d.y < y1_) y1_ = d.y;
                if (d.x > x2_) x2_ = d.x;
                if (d.y > y2_) y2_ = d.y;
                xs.push(d.x);
                ys.push(d.y);
              }
              else for (i = 0; i < n; ++i) {
                var x_ = +fx(d = data[i], i), y_ = +fy(d, i);
                if (x_ < x1_) x1_ = x_;
                if (y_ < y1_) y1_ = y_;
                if (x_ > x2_) x2_ = x_;
                if (y_ > y2_) y2_ = y_;
                xs.push(x_);
                ys.push(y_);
              }
            }
            var dx = x2_ - x1_, dy = y2_ - y1_;
            if (dx > dy) y2_ = y1_ + dx;
            else x2_ = x1_ + dy;
            function insert3(n2, d2, x3, y3, x12, y12, x22, y22) {
              if (isNaN(x3) || isNaN(y3)) return;
              if (n2.leaf) {
                var nx = n2.x, ny = n2.y;
                if (nx != null) {
                  if (abs3(nx - x3) + abs3(ny - y3) < 0.01) {
                    insertChild(n2, d2, x3, y3, x12, y12, x22, y22);
                  } else {
                    var nPoint = n2.point;
                    n2.x = n2.y = n2.point = null;
                    insertChild(n2, nPoint, nx, ny, x12, y12, x22, y22);
                    insertChild(n2, d2, x3, y3, x12, y12, x22, y22);
                  }
                } else {
                  n2.x = x3, n2.y = y3, n2.point = d2;
                }
              } else {
                insertChild(n2, d2, x3, y3, x12, y12, x22, y22);
              }
            }
            function insertChild(n2, d2, x3, y3, x12, y12, x22, y22) {
              var xm = (x12 + x22) * 0.5, ym = (y12 + y22) * 0.5, right = x3 >= xm, below = y3 >= ym, i2 = below << 1 | right;
              n2.leaf = false;
              n2 = n2.nodes[i2] || (n2.nodes[i2] = d3_geom_quadtreeNode());
              if (right) x12 = xm;
              else x22 = xm;
              if (below) y12 = ym;
              else y22 = ym;
              insert3(n2, d2, x3, y3, x12, y12, x22, y22);
            }
            var root = d3_geom_quadtreeNode();
            root.add = function(d2) {
              insert3(root, d2, +fx(d2, ++i), +fy(d2, i), x1_, y1_, x2_, y2_);
            };
            root.visit = function(f) {
              d3_geom_quadtreeVisit(f, root, x1_, y1_, x2_, y2_);
            };
            root.find = function(point) {
              return d3_geom_quadtreeFind(root, point[0], point[1], x1_, y1_, x2_, y2_);
            };
            i = -1;
            if (x1 == null) {
              while (++i < n) {
                insert3(root, data[i], xs[i], ys[i], x1_, y1_, x2_, y2_);
              }
              --i;
            } else data.forEach(root.add);
            xs = ys = data = d = null;
            return root;
          }
          quadtree.x = function(_) {
            return arguments.length ? (x = _, quadtree) : x;
          };
          quadtree.y = function(_) {
            return arguments.length ? (y = _, quadtree) : y;
          };
          quadtree.extent = function(_) {
            if (!arguments.length) return x1 == null ? null : [[x1, y1], [x2, y2]];
            if (_ == null) x1 = y1 = x2 = y2 = null;
            else x1 = +_[0][0], y1 = +_[0][1], x2 = +_[1][0], y2 = +_[1][1];
            return quadtree;
          };
          quadtree.size = function(_) {
            if (!arguments.length) return x1 == null ? null : [x2 - x1, y2 - y1];
            if (_ == null) x1 = y1 = x2 = y2 = null;
            else x1 = y1 = 0, x2 = +_[0], y2 = +_[1];
            return quadtree;
          };
          return quadtree;
        };
        function d3_geom_quadtreeCompatX(d) {
          return d.x;
        }
        function d3_geom_quadtreeCompatY(d) {
          return d.y;
        }
        function d3_geom_quadtreeNode() {
          return {
            leaf: true,
            nodes: [],
            point: null,
            x: null,
            y: null
          };
        }
        function d3_geom_quadtreeVisit(f, node, x1, y1, x2, y2) {
          if (!f(node, x1, y1, x2, y2)) {
            var sx = (x1 + x2) * 0.5, sy = (y1 + y2) * 0.5, children = node.nodes;
            if (children[0]) d3_geom_quadtreeVisit(f, children[0], x1, y1, sx, sy);
            if (children[1]) d3_geom_quadtreeVisit(f, children[1], sx, y1, x2, sy);
            if (children[2]) d3_geom_quadtreeVisit(f, children[2], x1, sy, sx, y2);
            if (children[3]) d3_geom_quadtreeVisit(f, children[3], sx, sy, x2, y2);
          }
        }
        function d3_geom_quadtreeFind(root, x, y, x0, y0, x3, y3) {
          var minDistance2 = Infinity, closestPoint;
          (function find2(node, x1, y1, x2, y2) {
            if (x1 > x3 || y1 > y3 || x2 < x0 || y2 < y0) return;
            if (point = node.point) {
              var point, dx = x - node.x, dy = y - node.y, distance2 = dx * dx + dy * dy;
              if (distance2 < minDistance2) {
                var distance = Math.sqrt(minDistance2 = distance2);
                x0 = x - distance, y0 = y - distance;
                x3 = x + distance, y3 = y + distance;
                closestPoint = point;
              }
            }
            var children = node.nodes, xm = (x1 + x2) * 0.5, ym = (y1 + y2) * 0.5, right = x >= xm, below = y >= ym;
            for (var i = below << 1 | right, j = i + 4; i < j; ++i) {
              if (node = children[i & 3]) switch (i & 3) {
                case 0:
                  find2(node, x1, y1, xm, ym);
                  break;
                case 1:
                  find2(node, xm, y1, x2, ym);
                  break;
                case 2:
                  find2(node, x1, ym, xm, y2);
                  break;
                case 3:
                  find2(node, xm, ym, x2, y2);
                  break;
              }
            }
          })(root, x0, y0, x3, y3);
          return closestPoint;
        }
        d32.interpolateRgb = d3_interpolateRgb;
        function d3_interpolateRgb(a, b) {
          a = d32.rgb(a);
          b = d32.rgb(b);
          var ar = a.r, ag = a.g, ab = a.b, br = b.r - ar, bg = b.g - ag, bb = b.b - ab;
          return function(t) {
            return "#" + d3_rgb_hex(Math.round(ar + br * t)) + d3_rgb_hex(Math.round(ag + bg * t)) + d3_rgb_hex(Math.round(ab + bb * t));
          };
        }
        d32.interpolateObject = d3_interpolateObject;
        function d3_interpolateObject(a, b) {
          var i = {}, c = {}, k;
          for (k in a) {
            if (k in b) {
              i[k] = d3_interpolate(a[k], b[k]);
            } else {
              c[k] = a[k];
            }
          }
          for (k in b) {
            if (!(k in a)) {
              c[k] = b[k];
            }
          }
          return function(t) {
            for (k in i) c[k] = i[k](t);
            return c;
          };
        }
        d32.interpolateNumber = d3_interpolateNumber;
        function d3_interpolateNumber(a, b) {
          a = +a, b = +b;
          return function(t) {
            return a * (1 - t) + b * t;
          };
        }
        d32.interpolateString = d3_interpolateString;
        function d3_interpolateString(a, b) {
          var bi = d3_interpolate_numberA.lastIndex = d3_interpolate_numberB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
          a = a + "", b = b + "";
          while ((am = d3_interpolate_numberA.exec(a)) && (bm = d3_interpolate_numberB.exec(b))) {
            if ((bs = bm.index) > bi) {
              bs = b.slice(bi, bs);
              if (s[i]) s[i] += bs;
              else s[++i] = bs;
            }
            if ((am = am[0]) === (bm = bm[0])) {
              if (s[i]) s[i] += bm;
              else s[++i] = bm;
            } else {
              s[++i] = null;
              q.push({
                i,
                x: d3_interpolateNumber(am, bm)
              });
            }
            bi = d3_interpolate_numberB.lastIndex;
          }
          if (bi < b.length) {
            bs = b.slice(bi);
            if (s[i]) s[i] += bs;
            else s[++i] = bs;
          }
          return s.length < 2 ? q[0] ? (b = q[0].x, function(t) {
            return b(t) + "";
          }) : function() {
            return b;
          } : (b = q.length, function(t) {
            for (var i2 = 0, o; i2 < b; ++i2) s[(o = q[i2]).i] = o.x(t);
            return s.join("");
          });
        }
        var d3_interpolate_numberA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, d3_interpolate_numberB = new RegExp(d3_interpolate_numberA.source, "g");
        d32.interpolate = d3_interpolate;
        function d3_interpolate(a, b) {
          var i = d32.interpolators.length, f;
          while (--i >= 0 && !(f = d32.interpolators[i](a, b))) ;
          return f;
        }
        d32.interpolators = [function(a, b) {
          var t = typeof b;
          return (t === "string" ? d3_rgb_names.has(b.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(b) ? d3_interpolateRgb : d3_interpolateString : b instanceof d3_color ? d3_interpolateRgb : Array.isArray(b) ? d3_interpolateArray : t === "object" && isNaN(b) ? d3_interpolateObject : d3_interpolateNumber)(a, b);
        }];
        d32.interpolateArray = d3_interpolateArray;
        function d3_interpolateArray(a, b) {
          var x = [], c = [], na = a.length, nb = b.length, n0 = Math.min(a.length, b.length), i;
          for (i = 0; i < n0; ++i) x.push(d3_interpolate(a[i], b[i]));
          for (; i < na; ++i) c[i] = a[i];
          for (; i < nb; ++i) c[i] = b[i];
          return function(t) {
            for (i = 0; i < n0; ++i) c[i] = x[i](t);
            return c;
          };
        }
        var d3_ease_default = function() {
          return d3_identity;
        };
        var d3_ease = d32.map({
          linear: d3_ease_default,
          poly: d3_ease_poly,
          quad: function() {
            return d3_ease_quad;
          },
          cubic: function() {
            return d3_ease_cubic;
          },
          sin: function() {
            return d3_ease_sin;
          },
          exp: function() {
            return d3_ease_exp;
          },
          circle: function() {
            return d3_ease_circle;
          },
          elastic: d3_ease_elastic,
          back: d3_ease_back,
          bounce: function() {
            return d3_ease_bounce;
          }
        });
        var d3_ease_mode = d32.map({
          "in": d3_identity,
          out: d3_ease_reverse,
          "in-out": d3_ease_reflect,
          "out-in": function(f) {
            return d3_ease_reflect(d3_ease_reverse(f));
          }
        });
        d32.ease = function(name) {
          var i = name.indexOf("-"), t = i >= 0 ? name.slice(0, i) : name, m = i >= 0 ? name.slice(i + 1) : "in";
          t = d3_ease.get(t) || d3_ease_default;
          m = d3_ease_mode.get(m) || d3_identity;
          return d3_ease_clamp(m(t.apply(null, d3_arraySlice.call(arguments, 1))));
        };
        function d3_ease_clamp(f) {
          return function(t) {
            return t <= 0 ? 0 : t >= 1 ? 1 : f(t);
          };
        }
        function d3_ease_reverse(f) {
          return function(t) {
            return 1 - f(1 - t);
          };
        }
        function d3_ease_reflect(f) {
          return function(t) {
            return 0.5 * (t < 0.5 ? f(2 * t) : 2 - f(2 - 2 * t));
          };
        }
        function d3_ease_quad(t) {
          return t * t;
        }
        function d3_ease_cubic(t) {
          return t * t * t;
        }
        function d3_ease_cubicInOut(t) {
          if (t <= 0) return 0;
          if (t >= 1) return 1;
          var t2 = t * t, t3 = t2 * t;
          return 4 * (t < 0.5 ? t3 : 3 * (t - t2) + t3 - 0.75);
        }
        function d3_ease_poly(e) {
          return function(t) {
            return Math.pow(t, e);
          };
        }
        function d3_ease_sin(t) {
          return 1 - Math.cos(t * half\u03C0);
        }
        function d3_ease_exp(t) {
          return Math.pow(2, 10 * (t - 1));
        }
        function d3_ease_circle(t) {
          return 1 - Math.sqrt(1 - t * t);
        }
        function d3_ease_elastic(a, p) {
          var s;
          if (arguments.length < 2) p = 0.45;
          if (arguments.length) s = p / \u03C4 * Math.asin(1 / a);
          else a = 1, s = p / 4;
          return function(t) {
            return 1 + a * Math.pow(2, -10 * t) * Math.sin((t - s) * \u03C4 / p);
          };
        }
        function d3_ease_back(s) {
          if (!s) s = 1.70158;
          return function(t) {
            return t * t * ((s + 1) * t - s);
          };
        }
        function d3_ease_bounce(t) {
          return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
        }
        d32.interpolateHcl = d3_interpolateHcl;
        function d3_interpolateHcl(a, b) {
          a = d32.hcl(a);
          b = d32.hcl(b);
          var ah = a.h, ac = a.c, al = a.l, bh = b.h - ah, bc = b.c - ac, bl = b.l - al;
          if (isNaN(bc)) bc = 0, ac = isNaN(ac) ? b.c : ac;
          if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah;
          else if (bh > 180) bh -= 360;
          else if (bh < -180) bh += 360;
          return function(t) {
            return d3_hcl_lab(ah + bh * t, ac + bc * t, al + bl * t) + "";
          };
        }
        d32.interpolateHsl = d3_interpolateHsl;
        function d3_interpolateHsl(a, b) {
          a = d32.hsl(a);
          b = d32.hsl(b);
          var ah = a.h, as = a.s, al = a.l, bh = b.h - ah, bs = b.s - as, bl = b.l - al;
          if (isNaN(bs)) bs = 0, as = isNaN(as) ? b.s : as;
          if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah;
          else if (bh > 180) bh -= 360;
          else if (bh < -180) bh += 360;
          return function(t) {
            return d3_hsl_rgb(ah + bh * t, as + bs * t, al + bl * t) + "";
          };
        }
        d32.interpolateLab = d3_interpolateLab;
        function d3_interpolateLab(a, b) {
          a = d32.lab(a);
          b = d32.lab(b);
          var al = a.l, aa = a.a, ab = a.b, bl = b.l - al, ba = b.a - aa, bb = b.b - ab;
          return function(t) {
            return d3_lab_rgb(al + bl * t, aa + ba * t, ab + bb * t) + "";
          };
        }
        d32.interpolateRound = d3_interpolateRound;
        function d3_interpolateRound(a, b) {
          b -= a;
          return function(t) {
            return Math.round(a + b * t);
          };
        }
        d32.transform = function(string) {
          var g = d3_document.createElementNS(d32.ns.prefix.svg, "g");
          return (d32.transform = function(string2) {
            if (string2 != null) {
              g.setAttribute("transform", string2);
              var t = g.transform.baseVal.consolidate();
            }
            return new d3_transform(t ? t.matrix : d3_transformIdentity);
          })(string);
        };
        function d3_transform(m) {
          var r0 = [m.a, m.b], r1 = [m.c, m.d], kx = d3_transformNormalize(r0), kz = d3_transformDot(r0, r1), ky = d3_transformNormalize(d3_transformCombine(r1, r0, -kz)) || 0;
          if (r0[0] * r1[1] < r1[0] * r0[1]) {
            r0[0] *= -1;
            r0[1] *= -1;
            kx *= -1;
            kz *= -1;
          }
          this.rotate = (kx ? Math.atan2(r0[1], r0[0]) : Math.atan2(-r1[0], r1[1])) * d3_degrees;
          this.translate = [m.e, m.f];
          this.scale = [kx, ky];
          this.skew = ky ? Math.atan2(kz, ky) * d3_degrees : 0;
        }
        d3_transform.prototype.toString = function() {
          return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
        };
        function d3_transformDot(a, b) {
          return a[0] * b[0] + a[1] * b[1];
        }
        function d3_transformNormalize(a) {
          var k = Math.sqrt(d3_transformDot(a, a));
          if (k) {
            a[0] /= k;
            a[1] /= k;
          }
          return k;
        }
        function d3_transformCombine(a, b, k) {
          a[0] += k * b[0];
          a[1] += k * b[1];
          return a;
        }
        var d3_transformIdentity = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: 0,
          f: 0
        };
        d32.interpolateTransform = d3_interpolateTransform;
        function d3_interpolateTransformPop(s) {
          return s.length ? s.pop() + "," : "";
        }
        function d3_interpolateTranslate(ta, tb, s, q) {
          if (ta[0] !== tb[0] || ta[1] !== tb[1]) {
            var i = s.push("translate(", null, ",", null, ")");
            q.push({
              i: i - 4,
              x: d3_interpolateNumber(ta[0], tb[0])
            }, {
              i: i - 2,
              x: d3_interpolateNumber(ta[1], tb[1])
            });
          } else if (tb[0] || tb[1]) {
            s.push("translate(" + tb + ")");
          }
        }
        function d3_interpolateRotate(ra, rb, s, q) {
          if (ra !== rb) {
            if (ra - rb > 180) rb += 360;
            else if (rb - ra > 180) ra += 360;
            q.push({
              i: s.push(d3_interpolateTransformPop(s) + "rotate(", null, ")") - 2,
              x: d3_interpolateNumber(ra, rb)
            });
          } else if (rb) {
            s.push(d3_interpolateTransformPop(s) + "rotate(" + rb + ")");
          }
        }
        function d3_interpolateSkew(wa, wb, s, q) {
          if (wa !== wb) {
            q.push({
              i: s.push(d3_interpolateTransformPop(s) + "skewX(", null, ")") - 2,
              x: d3_interpolateNumber(wa, wb)
            });
          } else if (wb) {
            s.push(d3_interpolateTransformPop(s) + "skewX(" + wb + ")");
          }
        }
        function d3_interpolateScale(ka, kb, s, q) {
          if (ka[0] !== kb[0] || ka[1] !== kb[1]) {
            var i = s.push(d3_interpolateTransformPop(s) + "scale(", null, ",", null, ")");
            q.push({
              i: i - 4,
              x: d3_interpolateNumber(ka[0], kb[0])
            }, {
              i: i - 2,
              x: d3_interpolateNumber(ka[1], kb[1])
            });
          } else if (kb[0] !== 1 || kb[1] !== 1) {
            s.push(d3_interpolateTransformPop(s) + "scale(" + kb + ")");
          }
        }
        function d3_interpolateTransform(a, b) {
          var s = [], q = [];
          a = d32.transform(a), b = d32.transform(b);
          d3_interpolateTranslate(a.translate, b.translate, s, q);
          d3_interpolateRotate(a.rotate, b.rotate, s, q);
          d3_interpolateSkew(a.skew, b.skew, s, q);
          d3_interpolateScale(a.scale, b.scale, s, q);
          a = b = null;
          return function(t) {
            var i = -1, n = q.length, o;
            while (++i < n) s[(o = q[i]).i] = o.x(t);
            return s.join("");
          };
        }
        function d3_uninterpolateNumber(a, b) {
          b = (b -= a = +a) || 1 / b;
          return function(x) {
            return (x - a) / b;
          };
        }
        function d3_uninterpolateClamp(a, b) {
          b = (b -= a = +a) || 1 / b;
          return function(x) {
            return Math.max(0, Math.min(1, (x - a) / b));
          };
        }
        d32.layout = {};
        d32.layout.bundle = function() {
          return function(links) {
            var paths = [], i = -1, n = links.length;
            while (++i < n) paths.push(d3_layout_bundlePath(links[i]));
            return paths;
          };
        };
        function d3_layout_bundlePath(link) {
          var start = link.source, end = link.target, lca = d3_layout_bundleLeastCommonAncestor(start, end), points = [start];
          while (start !== lca) {
            start = start.parent;
            points.push(start);
          }
          var k = points.length;
          while (end !== lca) {
            points.splice(k, 0, end);
            end = end.parent;
          }
          return points;
        }
        function d3_layout_bundleAncestors(node) {
          var ancestors = [], parent = node.parent;
          while (parent != null) {
            ancestors.push(node);
            node = parent;
            parent = parent.parent;
          }
          ancestors.push(node);
          return ancestors;
        }
        function d3_layout_bundleLeastCommonAncestor(a, b) {
          if (a === b) return a;
          var aNodes = d3_layout_bundleAncestors(a), bNodes = d3_layout_bundleAncestors(b), aNode = aNodes.pop(), bNode = bNodes.pop(), sharedNode = null;
          while (aNode === bNode) {
            sharedNode = aNode;
            aNode = aNodes.pop();
            bNode = bNodes.pop();
          }
          return sharedNode;
        }
        d32.layout.chord = function() {
          var chord = {}, chords, groups, matrix, n, padding = 0, sortGroups, sortSubgroups, sortChords;
          function relayout() {
            var subgroups = {}, groupSums = [], groupIndex = d32.range(n), subgroupIndex = [], k, x, x0, i, j;
            chords = [];
            groups = [];
            k = 0, i = -1;
            while (++i < n) {
              x = 0, j = -1;
              while (++j < n) {
                x += matrix[i][j];
              }
              groupSums.push(x);
              subgroupIndex.push(d32.range(n));
              k += x;
            }
            if (sortGroups) {
              groupIndex.sort(function(a, b) {
                return sortGroups(groupSums[a], groupSums[b]);
              });
            }
            if (sortSubgroups) {
              subgroupIndex.forEach(function(d, i2) {
                d.sort(function(a, b) {
                  return sortSubgroups(matrix[i2][a], matrix[i2][b]);
                });
              });
            }
            k = (\u03C4 - padding * n) / k;
            x = 0, i = -1;
            while (++i < n) {
              x0 = x, j = -1;
              while (++j < n) {
                var di = groupIndex[i], dj = subgroupIndex[di][j], v = matrix[di][dj], a0 = x, a1 = x += v * k;
                subgroups[di + "-" + dj] = {
                  index: di,
                  subindex: dj,
                  startAngle: a0,
                  endAngle: a1,
                  value: v
                };
              }
              groups[di] = {
                index: di,
                startAngle: x0,
                endAngle: x,
                value: groupSums[di]
              };
              x += padding;
            }
            i = -1;
            while (++i < n) {
              j = i - 1;
              while (++j < n) {
                var source2 = subgroups[i + "-" + j], target = subgroups[j + "-" + i];
                if (source2.value || target.value) {
                  chords.push(source2.value < target.value ? {
                    source: target,
                    target: source2
                  } : {
                    source: source2,
                    target
                  });
                }
              }
            }
            if (sortChords) resort();
          }
          function resort() {
            chords.sort(function(a, b) {
              return sortChords((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2);
            });
          }
          chord.matrix = function(x) {
            if (!arguments.length) return matrix;
            n = (matrix = x) && matrix.length;
            chords = groups = null;
            return chord;
          };
          chord.padding = function(x) {
            if (!arguments.length) return padding;
            padding = x;
            chords = groups = null;
            return chord;
          };
          chord.sortGroups = function(x) {
            if (!arguments.length) return sortGroups;
            sortGroups = x;
            chords = groups = null;
            return chord;
          };
          chord.sortSubgroups = function(x) {
            if (!arguments.length) return sortSubgroups;
            sortSubgroups = x;
            chords = null;
            return chord;
          };
          chord.sortChords = function(x) {
            if (!arguments.length) return sortChords;
            sortChords = x;
            if (chords) resort();
            return chord;
          };
          chord.chords = function() {
            if (!chords) relayout();
            return chords;
          };
          chord.groups = function() {
            if (!groups) relayout();
            return groups;
          };
          return chord;
        };
        d32.layout.force = function() {
          var force = {}, event = d32.dispatch("start", "tick", "end"), timer, size2 = [1, 1], drag, alpha, friction = 0.9, linkDistance = d3_layout_forceLinkDistance, linkStrength = d3_layout_forceLinkStrength, charge = -30, chargeDistance2 = d3_layout_forceChargeDistance2, gravity = 0.1, theta2 = 0.64, nodes = [], links = [], distances, strengths, charges;
          function repulse(node) {
            return function(quad, x1, _, x2) {
              if (quad.point !== node) {
                var dx = quad.cx - node.x, dy = quad.cy - node.y, dw = x2 - x1, dn = dx * dx + dy * dy;
                if (dw * dw / theta2 < dn) {
                  if (dn < chargeDistance2) {
                    var k = quad.charge / dn;
                    node.px -= dx * k;
                    node.py -= dy * k;
                  }
                  return true;
                }
                if (quad.point && dn && dn < chargeDistance2) {
                  var k = quad.pointCharge / dn;
                  node.px -= dx * k;
                  node.py -= dy * k;
                }
              }
              return !quad.charge;
            };
          }
          force.tick = function() {
            if ((alpha *= 0.99) < 5e-3) {
              timer = null;
              event.end({
                type: "end",
                alpha: alpha = 0
              });
              return true;
            }
            var n = nodes.length, m = links.length, q, i, o, s, t, l, k, x, y;
            for (i = 0; i < m; ++i) {
              o = links[i];
              s = o.source;
              t = o.target;
              x = t.x - s.x;
              y = t.y - s.y;
              if (l = x * x + y * y) {
                l = alpha * strengths[i] * ((l = Math.sqrt(l)) - distances[i]) / l;
                x *= l;
                y *= l;
                t.x -= x * (k = s.weight + t.weight ? s.weight / (s.weight + t.weight) : 0.5);
                t.y -= y * k;
                s.x += x * (k = 1 - k);
                s.y += y * k;
              }
            }
            if (k = alpha * gravity) {
              x = size2[0] / 2;
              y = size2[1] / 2;
              i = -1;
              if (k) while (++i < n) {
                o = nodes[i];
                o.x += (x - o.x) * k;
                o.y += (y - o.y) * k;
              }
            }
            if (charge) {
              d3_layout_forceAccumulate(q = d32.geom.quadtree(nodes), alpha, charges);
              i = -1;
              while (++i < n) {
                if (!(o = nodes[i]).fixed) {
                  q.visit(repulse(o));
                }
              }
            }
            i = -1;
            while (++i < n) {
              o = nodes[i];
              if (o.fixed) {
                o.x = o.px;
                o.y = o.py;
              } else {
                o.x -= (o.px - (o.px = o.x)) * friction;
                o.y -= (o.py - (o.py = o.y)) * friction;
              }
            }
            event.tick({
              type: "tick",
              alpha
            });
          };
          force.nodes = function(x) {
            if (!arguments.length) return nodes;
            nodes = x;
            return force;
          };
          force.links = function(x) {
            if (!arguments.length) return links;
            links = x;
            return force;
          };
          force.size = function(x) {
            if (!arguments.length) return size2;
            size2 = x;
            return force;
          };
          force.linkDistance = function(x) {
            if (!arguments.length) return linkDistance;
            linkDistance = typeof x === "function" ? x : +x;
            return force;
          };
          force.distance = force.linkDistance;
          force.linkStrength = function(x) {
            if (!arguments.length) return linkStrength;
            linkStrength = typeof x === "function" ? x : +x;
            return force;
          };
          force.friction = function(x) {
            if (!arguments.length) return friction;
            friction = +x;
            return force;
          };
          force.charge = function(x) {
            if (!arguments.length) return charge;
            charge = typeof x === "function" ? x : +x;
            return force;
          };
          force.chargeDistance = function(x) {
            if (!arguments.length) return Math.sqrt(chargeDistance2);
            chargeDistance2 = x * x;
            return force;
          };
          force.gravity = function(x) {
            if (!arguments.length) return gravity;
            gravity = +x;
            return force;
          };
          force.theta = function(x) {
            if (!arguments.length) return Math.sqrt(theta2);
            theta2 = x * x;
            return force;
          };
          force.alpha = function(x) {
            if (!arguments.length) return alpha;
            x = +x;
            if (alpha) {
              if (x > 0) {
                alpha = x;
              } else {
                timer.c = null, timer.t = NaN, timer = null;
                event.end({
                  type: "end",
                  alpha: alpha = 0
                });
              }
            } else if (x > 0) {
              event.start({
                type: "start",
                alpha: alpha = x
              });
              timer = d3_timer(force.tick);
            }
            return force;
          };
          force.start = function() {
            var i, n = nodes.length, m = links.length, w = size2[0], h = size2[1], neighbors, o;
            for (i = 0; i < n; ++i) {
              (o = nodes[i]).index = i;
              o.weight = 0;
            }
            for (i = 0; i < m; ++i) {
              o = links[i];
              if (typeof o.source == "number") o.source = nodes[o.source];
              if (typeof o.target == "number") o.target = nodes[o.target];
              ++o.source.weight;
              ++o.target.weight;
            }
            for (i = 0; i < n; ++i) {
              o = nodes[i];
              if (isNaN(o.x)) o.x = position("x", w);
              if (isNaN(o.y)) o.y = position("y", h);
              if (isNaN(o.px)) o.px = o.x;
              if (isNaN(o.py)) o.py = o.y;
            }
            distances = [];
            if (typeof linkDistance === "function") for (i = 0; i < m; ++i) distances[i] = +linkDistance.call(this, links[i], i);
            else for (i = 0; i < m; ++i) distances[i] = linkDistance;
            strengths = [];
            if (typeof linkStrength === "function") for (i = 0; i < m; ++i) strengths[i] = +linkStrength.call(this, links[i], i);
            else for (i = 0; i < m; ++i) strengths[i] = linkStrength;
            charges = [];
            if (typeof charge === "function") for (i = 0; i < n; ++i) charges[i] = +charge.call(this, nodes[i], i);
            else for (i = 0; i < n; ++i) charges[i] = charge;
            function position(dimension, size3) {
              if (!neighbors) {
                neighbors = new Array(n);
                for (j = 0; j < n; ++j) {
                  neighbors[j] = [];
                }
                for (j = 0; j < m; ++j) {
                  var o2 = links[j];
                  neighbors[o2.source.index].push(o2.target);
                  neighbors[o2.target.index].push(o2.source);
                }
              }
              var candidates = neighbors[i], j = -1, l = candidates.length, x;
              while (++j < l) if (!isNaN(x = candidates[j][dimension])) return x;
              return Math.random() * size3;
            }
            return force.resume();
          };
          force.resume = function() {
            return force.alpha(0.1);
          };
          force.stop = function() {
            return force.alpha(0);
          };
          force.drag = function() {
            if (!drag) drag = d32.behavior.drag().origin(d3_identity).on("dragstart.force", d3_layout_forceDragstart).on("drag.force", dragmove).on("dragend.force", d3_layout_forceDragend);
            if (!arguments.length) return drag;
            this.on("mouseover.force", d3_layout_forceMouseover).on("mouseout.force", d3_layout_forceMouseout).call(drag);
          };
          function dragmove(d) {
            d.px = d32.event.x, d.py = d32.event.y;
            force.resume();
          }
          return d32.rebind(force, event, "on");
        };
        function d3_layout_forceDragstart(d) {
          d.fixed |= 2;
        }
        function d3_layout_forceDragend(d) {
          d.fixed &= ~6;
        }
        function d3_layout_forceMouseover(d) {
          d.fixed |= 4;
          d.px = d.x, d.py = d.y;
        }
        function d3_layout_forceMouseout(d) {
          d.fixed &= ~4;
        }
        function d3_layout_forceAccumulate(quad, alpha, charges) {
          var cx = 0, cy = 0;
          quad.charge = 0;
          if (!quad.leaf) {
            var nodes = quad.nodes, n = nodes.length, i = -1, c;
            while (++i < n) {
              c = nodes[i];
              if (c == null) continue;
              d3_layout_forceAccumulate(c, alpha, charges);
              quad.charge += c.charge;
              cx += c.charge * c.cx;
              cy += c.charge * c.cy;
            }
          }
          if (quad.point) {
            if (!quad.leaf) {
              quad.point.x += Math.random() - 0.5;
              quad.point.y += Math.random() - 0.5;
            }
            var k = alpha * charges[quad.point.index];
            quad.charge += quad.pointCharge = k;
            cx += k * quad.point.x;
            cy += k * quad.point.y;
          }
          quad.cx = cx / quad.charge;
          quad.cy = cy / quad.charge;
        }
        var d3_layout_forceLinkDistance = 20, d3_layout_forceLinkStrength = 1, d3_layout_forceChargeDistance2 = Infinity;
        d32.layout.hierarchy = function() {
          var sort = d3_layout_hierarchySort, children = d3_layout_hierarchyChildren, value = d3_layout_hierarchyValue;
          function hierarchy(root) {
            var stack = [root], nodes = [], node;
            root.depth = 0;
            while ((node = stack.pop()) != null) {
              nodes.push(node);
              if ((childs = children.call(hierarchy, node, node.depth)) && (n = childs.length)) {
                var n, childs, child;
                while (--n >= 0) {
                  stack.push(child = childs[n]);
                  child.parent = node;
                  child.depth = node.depth + 1;
                }
                if (value) node.value = 0;
                node.children = childs;
              } else {
                if (value) node.value = +value.call(hierarchy, node, node.depth) || 0;
                delete node.children;
              }
            }
            d3_layout_hierarchyVisitAfter(root, function(node2) {
              var childs2, parent;
              if (sort && (childs2 = node2.children)) childs2.sort(sort);
              if (value && (parent = node2.parent)) parent.value += node2.value;
            });
            return nodes;
          }
          hierarchy.sort = function(x) {
            if (!arguments.length) return sort;
            sort = x;
            return hierarchy;
          };
          hierarchy.children = function(x) {
            if (!arguments.length) return children;
            children = x;
            return hierarchy;
          };
          hierarchy.value = function(x) {
            if (!arguments.length) return value;
            value = x;
            return hierarchy;
          };
          hierarchy.revalue = function(root) {
            if (value) {
              d3_layout_hierarchyVisitBefore(root, function(node) {
                if (node.children) node.value = 0;
              });
              d3_layout_hierarchyVisitAfter(root, function(node) {
                var parent;
                if (!node.children) node.value = +value.call(hierarchy, node, node.depth) || 0;
                if (parent = node.parent) parent.value += node.value;
              });
            }
            return root;
          };
          return hierarchy;
        };
        function d3_layout_hierarchyRebind(object, hierarchy) {
          d32.rebind(object, hierarchy, "sort", "children", "value");
          object.nodes = object;
          object.links = d3_layout_hierarchyLinks;
          return object;
        }
        function d3_layout_hierarchyVisitBefore(node, callback) {
          var nodes = [node];
          while ((node = nodes.pop()) != null) {
            callback(node);
            if ((children = node.children) && (n = children.length)) {
              var n, children;
              while (--n >= 0) nodes.push(children[n]);
            }
          }
        }
        function d3_layout_hierarchyVisitAfter(node, callback) {
          var nodes = [node], nodes2 = [];
          while ((node = nodes.pop()) != null) {
            nodes2.push(node);
            if ((children = node.children) && (n = children.length)) {
              var i = -1, n, children;
              while (++i < n) nodes.push(children[i]);
            }
          }
          while ((node = nodes2.pop()) != null) {
            callback(node);
          }
        }
        function d3_layout_hierarchyChildren(d) {
          return d.children;
        }
        function d3_layout_hierarchyValue(d) {
          return d.value;
        }
        function d3_layout_hierarchySort(a, b) {
          return b.value - a.value;
        }
        function d3_layout_hierarchyLinks(nodes) {
          return d32.merge(nodes.map(function(parent) {
            return (parent.children || []).map(function(child) {
              return {
                source: parent,
                target: child
              };
            });
          }));
        }
        d32.layout.partition = function() {
          var hierarchy = d32.layout.hierarchy(), size2 = [1, 1];
          function position(node, x, dx, dy) {
            var children = node.children;
            node.x = x;
            node.y = node.depth * dy;
            node.dx = dx;
            node.dy = dy;
            if (children && (n = children.length)) {
              var i = -1, n, c, d;
              dx = node.value ? dx / node.value : 0;
              while (++i < n) {
                position(c = children[i], x, d = c.value * dx, dy);
                x += d;
              }
            }
          }
          function depth(node) {
            var children = node.children, d = 0;
            if (children && (n = children.length)) {
              var i = -1, n;
              while (++i < n) d = Math.max(d, depth(children[i]));
            }
            return 1 + d;
          }
          function partition(d, i) {
            var nodes = hierarchy.call(this, d, i);
            position(nodes[0], 0, size2[0], size2[1] / depth(nodes[0]));
            return nodes;
          }
          partition.size = function(x) {
            if (!arguments.length) return size2;
            size2 = x;
            return partition;
          };
          return d3_layout_hierarchyRebind(partition, hierarchy);
        };
        d32.layout.pie = function() {
          var value = Number, sort = d3_layout_pieSortByValue, startAngle = 0, endAngle = \u03C4, padAngle = 0;
          function pie2(data) {
            var n = data.length, values2 = data.map(function(d, i) {
              return +value.call(pie2, d, i);
            }), a = +(typeof startAngle === "function" ? startAngle.apply(this, arguments) : startAngle), da = (typeof endAngle === "function" ? endAngle.apply(this, arguments) : endAngle) - a, p = Math.min(Math.abs(da) / n, +(typeof padAngle === "function" ? padAngle.apply(this, arguments) : padAngle)), pa = p * (da < 0 ? -1 : 1), sum2 = d32.sum(values2), k = sum2 ? (da - n * pa) / sum2 : 0, index2 = d32.range(n), arcs = [], v;
            if (sort != null) index2.sort(sort === d3_layout_pieSortByValue ? function(i, j) {
              return values2[j] - values2[i];
            } : function(i, j) {
              return sort(data[i], data[j]);
            });
            index2.forEach(function(i) {
              arcs[i] = {
                data: data[i],
                value: v = values2[i],
                startAngle: a,
                endAngle: a += v * k + pa,
                padAngle: p
              };
            });
            return arcs;
          }
          pie2.value = function(_) {
            if (!arguments.length) return value;
            value = _;
            return pie2;
          };
          pie2.sort = function(_) {
            if (!arguments.length) return sort;
            sort = _;
            return pie2;
          };
          pie2.startAngle = function(_) {
            if (!arguments.length) return startAngle;
            startAngle = _;
            return pie2;
          };
          pie2.endAngle = function(_) {
            if (!arguments.length) return endAngle;
            endAngle = _;
            return pie2;
          };
          pie2.padAngle = function(_) {
            if (!arguments.length) return padAngle;
            padAngle = _;
            return pie2;
          };
          return pie2;
        };
        var d3_layout_pieSortByValue = {};
        d32.layout.stack = function() {
          var values2 = d3_identity, order = d3_layout_stackOrderDefault, offset = d3_layout_stackOffsetZero, out = d3_layout_stackOut, x = d3_layout_stackX, y = d3_layout_stackY;
          function stack(data, index2) {
            if (!(n = data.length)) return data;
            var series = data.map(function(d, i2) {
              return values2.call(stack, d, i2);
            });
            var points = series.map(function(d) {
              return d.map(function(v, i2) {
                return [x.call(stack, v, i2), y.call(stack, v, i2)];
              });
            });
            var orders = order.call(stack, points, index2);
            series = d32.permute(series, orders);
            points = d32.permute(points, orders);
            var offsets = offset.call(stack, points, index2);
            var m = series[0].length, n, i, j, o;
            for (j = 0; j < m; ++j) {
              out.call(stack, series[0][j], o = offsets[j], points[0][j][1]);
              for (i = 1; i < n; ++i) {
                out.call(stack, series[i][j], o += points[i - 1][j][1], points[i][j][1]);
              }
            }
            return data;
          }
          stack.values = function(x2) {
            if (!arguments.length) return values2;
            values2 = x2;
            return stack;
          };
          stack.order = function(x2) {
            if (!arguments.length) return order;
            order = typeof x2 === "function" ? x2 : d3_layout_stackOrders.get(x2) || d3_layout_stackOrderDefault;
            return stack;
          };
          stack.offset = function(x2) {
            if (!arguments.length) return offset;
            offset = typeof x2 === "function" ? x2 : d3_layout_stackOffsets.get(x2) || d3_layout_stackOffsetZero;
            return stack;
          };
          stack.x = function(z) {
            if (!arguments.length) return x;
            x = z;
            return stack;
          };
          stack.y = function(z) {
            if (!arguments.length) return y;
            y = z;
            return stack;
          };
          stack.out = function(z) {
            if (!arguments.length) return out;
            out = z;
            return stack;
          };
          return stack;
        };
        function d3_layout_stackX(d) {
          return d.x;
        }
        function d3_layout_stackY(d) {
          return d.y;
        }
        function d3_layout_stackOut(d, y0, y) {
          d.y0 = y0;
          d.y = y;
        }
        var d3_layout_stackOrders = d32.map({
          "inside-out": function(data) {
            var n = data.length, i, j, max3 = data.map(d3_layout_stackMaxIndex), sums = data.map(d3_layout_stackReduceSum), index2 = d32.range(n).sort(function(a, b) {
              return max3[a] - max3[b];
            }), top3 = 0, bottom3 = 0, tops = [], bottoms = [];
            for (i = 0; i < n; ++i) {
              j = index2[i];
              if (top3 < bottom3) {
                top3 += sums[j];
                tops.push(j);
              } else {
                bottom3 += sums[j];
                bottoms.push(j);
              }
            }
            return bottoms.reverse().concat(tops);
          },
          reverse: function(data) {
            return d32.range(data.length).reverse();
          },
          "default": d3_layout_stackOrderDefault
        });
        var d3_layout_stackOffsets = d32.map({
          silhouette: function(data) {
            var n = data.length, m = data[0].length, sums = [], max3 = 0, i, j, o, y0 = [];
            for (j = 0; j < m; ++j) {
              for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
              if (o > max3) max3 = o;
              sums.push(o);
            }
            for (j = 0; j < m; ++j) {
              y0[j] = (max3 - sums[j]) / 2;
            }
            return y0;
          },
          wiggle: function(data) {
            var n = data.length, x = data[0], m = x.length, i, j, k, s1, s2, s3, dx, o, o0, y0 = [];
            y0[0] = o = o0 = 0;
            for (j = 1; j < m; ++j) {
              for (i = 0, s1 = 0; i < n; ++i) s1 += data[i][j][1];
              for (i = 0, s2 = 0, dx = x[j][0] - x[j - 1][0]; i < n; ++i) {
                for (k = 0, s3 = (data[i][j][1] - data[i][j - 1][1]) / (2 * dx); k < i; ++k) {
                  s3 += (data[k][j][1] - data[k][j - 1][1]) / dx;
                }
                s2 += s3 * data[i][j][1];
              }
              y0[j] = o -= s1 ? s2 / s1 * dx : 0;
              if (o < o0) o0 = o;
            }
            for (j = 0; j < m; ++j) y0[j] -= o0;
            return y0;
          },
          expand: function(data) {
            var n = data.length, m = data[0].length, k = 1 / n, i, j, o, y0 = [];
            for (j = 0; j < m; ++j) {
              for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
              if (o) for (i = 0; i < n; i++) data[i][j][1] /= o;
              else for (i = 0; i < n; i++) data[i][j][1] = k;
            }
            for (j = 0; j < m; ++j) y0[j] = 0;
            return y0;
          },
          zero: d3_layout_stackOffsetZero
        });
        function d3_layout_stackOrderDefault(data) {
          return d32.range(data.length);
        }
        function d3_layout_stackOffsetZero(data) {
          var j = -1, m = data[0].length, y0 = [];
          while (++j < m) y0[j] = 0;
          return y0;
        }
        function d3_layout_stackMaxIndex(array) {
          var i = 1, j = 0, v = array[0][1], k, n = array.length;
          for (; i < n; ++i) {
            if ((k = array[i][1]) > v) {
              j = i;
              v = k;
            }
          }
          return j;
        }
        function d3_layout_stackReduceSum(d) {
          return d.reduce(d3_layout_stackSum, 0);
        }
        function d3_layout_stackSum(p, d) {
          return p + d[1];
        }
        d32.layout.histogram = function() {
          var frequency = true, valuer = Number, ranger = d3_layout_histogramRange, binner = d3_layout_histogramBinSturges;
          function histogram(data, i) {
            var bins = [], values2 = data.map(valuer, this), range2 = ranger.call(this, values2, i), thresholds = binner.call(this, range2, values2, i), bin, i = -1, n = values2.length, m = thresholds.length - 1, k = frequency ? 1 : 1 / n, x;
            while (++i < m) {
              bin = bins[i] = [];
              bin.dx = thresholds[i + 1] - (bin.x = thresholds[i]);
              bin.y = 0;
            }
            if (m > 0) {
              i = -1;
              while (++i < n) {
                x = values2[i];
                if (x >= range2[0] && x <= range2[1]) {
                  bin = bins[d32.bisect(thresholds, x, 1, m) - 1];
                  bin.y += k;
                  bin.push(data[i]);
                }
              }
            }
            return bins;
          }
          histogram.value = function(x) {
            if (!arguments.length) return valuer;
            valuer = x;
            return histogram;
          };
          histogram.range = function(x) {
            if (!arguments.length) return ranger;
            ranger = d3_functor(x);
            return histogram;
          };
          histogram.bins = function(x) {
            if (!arguments.length) return binner;
            binner = typeof x === "number" ? function(range2) {
              return d3_layout_histogramBinFixed(range2, x);
            } : d3_functor(x);
            return histogram;
          };
          histogram.frequency = function(x) {
            if (!arguments.length) return frequency;
            frequency = !!x;
            return histogram;
          };
          return histogram;
        };
        function d3_layout_histogramBinSturges(range2, values2) {
          return d3_layout_histogramBinFixed(range2, Math.ceil(Math.log(values2.length) / Math.LN2 + 1));
        }
        function d3_layout_histogramBinFixed(range2, n) {
          var x = -1, b = +range2[0], m = (range2[1] - b) / n, f = [];
          while (++x <= n) f[x] = m * x + b;
          return f;
        }
        function d3_layout_histogramRange(values2) {
          return [d32.min(values2), d32.max(values2)];
        }
        d32.layout.pack = function() {
          var hierarchy = d32.layout.hierarchy().sort(d3_layout_packSort), padding = 0, size2 = [1, 1], radius2;
          function pack(d, i) {
            var nodes = hierarchy.call(this, d, i), root = nodes[0], w = size2[0], h = size2[1], r = radius2 == null ? Math.sqrt : typeof radius2 === "function" ? radius2 : function() {
              return radius2;
            };
            root.x = root.y = 0;
            d3_layout_hierarchyVisitAfter(root, function(d2) {
              d2.r = +r(d2.value);
            });
            d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
            if (padding) {
              var dr = padding * (radius2 ? 1 : Math.max(2 * root.r / w, 2 * root.r / h)) / 2;
              d3_layout_hierarchyVisitAfter(root, function(d2) {
                d2.r += dr;
              });
              d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
              d3_layout_hierarchyVisitAfter(root, function(d2) {
                d2.r -= dr;
              });
            }
            d3_layout_packTransform(root, w / 2, h / 2, radius2 ? 1 : 1 / Math.max(2 * root.r / w, 2 * root.r / h));
            return nodes;
          }
          pack.size = function(_) {
            if (!arguments.length) return size2;
            size2 = _;
            return pack;
          };
          pack.radius = function(_) {
            if (!arguments.length) return radius2;
            radius2 = _ == null || typeof _ === "function" ? _ : +_;
            return pack;
          };
          pack.padding = function(_) {
            if (!arguments.length) return padding;
            padding = +_;
            return pack;
          };
          return d3_layout_hierarchyRebind(pack, hierarchy);
        };
        function d3_layout_packSort(a, b) {
          return a.value - b.value;
        }
        function d3_layout_packInsert(a, b) {
          var c = a._pack_next;
          a._pack_next = b;
          b._pack_prev = a;
          b._pack_next = c;
          c._pack_prev = b;
        }
        function d3_layout_packSplice(a, b) {
          a._pack_next = b;
          b._pack_prev = a;
        }
        function d3_layout_packIntersects(a, b) {
          var dx = b.x - a.x, dy = b.y - a.y, dr = a.r + b.r;
          return 0.999 * dr * dr > dx * dx + dy * dy;
        }
        function d3_layout_packSiblings(node) {
          if (!(nodes = node.children) || !(n = nodes.length)) return;
          var nodes, xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity, a, b, c, i, j, k, n;
          function bound(node2) {
            xMin = Math.min(node2.x - node2.r, xMin);
            xMax = Math.max(node2.x + node2.r, xMax);
            yMin = Math.min(node2.y - node2.r, yMin);
            yMax = Math.max(node2.y + node2.r, yMax);
          }
          nodes.forEach(d3_layout_packLink);
          a = nodes[0];
          a.x = -a.r;
          a.y = 0;
          bound(a);
          if (n > 1) {
            b = nodes[1];
            b.x = b.r;
            b.y = 0;
            bound(b);
            if (n > 2) {
              c = nodes[2];
              d3_layout_packPlace(a, b, c);
              bound(c);
              d3_layout_packInsert(a, c);
              a._pack_prev = c;
              d3_layout_packInsert(c, b);
              b = a._pack_next;
              for (i = 3; i < n; i++) {
                d3_layout_packPlace(a, b, c = nodes[i]);
                var isect = 0, s1 = 1, s2 = 1;
                for (j = b._pack_next; j !== b; j = j._pack_next, s1++) {
                  if (d3_layout_packIntersects(j, c)) {
                    isect = 1;
                    break;
                  }
                }
                if (isect == 1) {
                  for (k = a._pack_prev; k !== j._pack_prev; k = k._pack_prev, s2++) {
                    if (d3_layout_packIntersects(k, c)) {
                      break;
                    }
                  }
                }
                if (isect) {
                  if (s1 < s2 || s1 == s2 && b.r < a.r) d3_layout_packSplice(a, b = j);
                  else d3_layout_packSplice(a = k, b);
                  i--;
                } else {
                  d3_layout_packInsert(a, c);
                  b = c;
                  bound(c);
                }
              }
            }
          }
          var cx = (xMin + xMax) / 2, cy = (yMin + yMax) / 2, cr = 0;
          for (i = 0; i < n; i++) {
            c = nodes[i];
            c.x -= cx;
            c.y -= cy;
            cr = Math.max(cr, c.r + Math.sqrt(c.x * c.x + c.y * c.y));
          }
          node.r = cr;
          nodes.forEach(d3_layout_packUnlink);
        }
        function d3_layout_packLink(node) {
          node._pack_next = node._pack_prev = node;
        }
        function d3_layout_packUnlink(node) {
          delete node._pack_next;
          delete node._pack_prev;
        }
        function d3_layout_packTransform(node, x, y, k) {
          var children = node.children;
          node.x = x += k * node.x;
          node.y = y += k * node.y;
          node.r *= k;
          if (children) {
            var i = -1, n = children.length;
            while (++i < n) d3_layout_packTransform(children[i], x, y, k);
          }
        }
        function d3_layout_packPlace(a, b, c) {
          var db = a.r + c.r, dx = b.x - a.x, dy = b.y - a.y;
          if (db && (dx || dy)) {
            var da = b.r + c.r, dc = dx * dx + dy * dy;
            da *= da;
            db *= db;
            var x = 0.5 + (db - da) / (2 * dc), y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
            c.x = a.x + x * dx + y * dy;
            c.y = a.y + x * dy - y * dx;
          } else {
            c.x = a.x + db;
            c.y = a.y;
          }
        }
        d32.layout.tree = function() {
          var hierarchy = d32.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size2 = [1, 1], nodeSize = null;
          function tree(d, i) {
            var nodes = hierarchy.call(this, d, i), root0 = nodes[0], root1 = wrapTree(root0);
            d3_layout_hierarchyVisitAfter(root1, firstWalk), root1.parent.m = -root1.z;
            d3_layout_hierarchyVisitBefore(root1, secondWalk);
            if (nodeSize) d3_layout_hierarchyVisitBefore(root0, sizeNode);
            else {
              var left = root0, right = root0, bottom3 = root0;
              d3_layout_hierarchyVisitBefore(root0, function(node) {
                if (node.x < left.x) left = node;
                if (node.x > right.x) right = node;
                if (node.depth > bottom3.depth) bottom3 = node;
              });
              var tx = separation(left, right) / 2 - left.x, kx = size2[0] / (right.x + separation(right, left) / 2 + tx), ky = size2[1] / (bottom3.depth || 1);
              d3_layout_hierarchyVisitBefore(root0, function(node) {
                node.x = (node.x + tx) * kx;
                node.y = node.depth * ky;
              });
            }
            return nodes;
          }
          function wrapTree(root0) {
            var root1 = {
              A: null,
              children: [root0]
            }, queue = [root1], node1;
            while ((node1 = queue.pop()) != null) {
              for (var children = node1.children, child, i = 0, n = children.length; i < n; ++i) {
                queue.push((children[i] = child = {
                  _: children[i],
                  parent: node1,
                  children: (child = children[i].children) && child.slice() || [],
                  A: null,
                  a: null,
                  z: 0,
                  m: 0,
                  c: 0,
                  s: 0,
                  t: null,
                  i
                }).a = child);
              }
            }
            return root1.children[0];
          }
          function firstWalk(v) {
            var children = v.children, siblings = v.parent.children, w = v.i ? siblings[v.i - 1] : null;
            if (children.length) {
              d3_layout_treeShift(v);
              var midpoint = (children[0].z + children[children.length - 1].z) / 2;
              if (w) {
                v.z = w.z + separation(v._, w._);
                v.m = v.z - midpoint;
              } else {
                v.z = midpoint;
              }
            } else if (w) {
              v.z = w.z + separation(v._, w._);
            }
            v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
          }
          function secondWalk(v) {
            v._.x = v.z + v.parent.m;
            v.m += v.parent.m;
          }
          function apportion(v, w, ancestor) {
            if (w) {
              var vip = v, vop = v, vim = w, vom = vip.parent.children[0], sip = vip.m, sop = vop.m, sim = vim.m, som = vom.m, shift;
              while (vim = d3_layout_treeRight(vim), vip = d3_layout_treeLeft(vip), vim && vip) {
                vom = d3_layout_treeLeft(vom);
                vop = d3_layout_treeRight(vop);
                vop.a = v;
                shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
                if (shift > 0) {
                  d3_layout_treeMove(d3_layout_treeAncestor(vim, v, ancestor), v, shift);
                  sip += shift;
                  sop += shift;
                }
                sim += vim.m;
                sip += vip.m;
                som += vom.m;
                sop += vop.m;
              }
              if (vim && !d3_layout_treeRight(vop)) {
                vop.t = vim;
                vop.m += sim - sop;
              }
              if (vip && !d3_layout_treeLeft(vom)) {
                vom.t = vip;
                vom.m += sip - som;
                ancestor = v;
              }
            }
            return ancestor;
          }
          function sizeNode(node) {
            node.x *= size2[0];
            node.y = node.depth * size2[1];
          }
          tree.separation = function(x) {
            if (!arguments.length) return separation;
            separation = x;
            return tree;
          };
          tree.size = function(x) {
            if (!arguments.length) return nodeSize ? null : size2;
            nodeSize = (size2 = x) == null ? sizeNode : null;
            return tree;
          };
          tree.nodeSize = function(x) {
            if (!arguments.length) return nodeSize ? size2 : null;
            nodeSize = (size2 = x) == null ? null : sizeNode;
            return tree;
          };
          return d3_layout_hierarchyRebind(tree, hierarchy);
        };
        function d3_layout_treeSeparation(a, b) {
          return a.parent == b.parent ? 1 : 2;
        }
        function d3_layout_treeLeft(v) {
          var children = v.children;
          return children.length ? children[0] : v.t;
        }
        function d3_layout_treeRight(v) {
          var children = v.children, n;
          return (n = children.length) ? children[n - 1] : v.t;
        }
        function d3_layout_treeMove(wm, wp, shift) {
          var change2 = shift / (wp.i - wm.i);
          wp.c -= change2;
          wp.s += shift;
          wm.c += change2;
          wp.z += shift;
          wp.m += shift;
        }
        function d3_layout_treeShift(v) {
          var shift = 0, change2 = 0, children = v.children, i = children.length, w;
          while (--i >= 0) {
            w = children[i];
            w.z += shift;
            w.m += shift;
            shift += w.s + (change2 += w.c);
          }
        }
        function d3_layout_treeAncestor(vim, v, ancestor) {
          return vim.a.parent === v.parent ? vim.a : ancestor;
        }
        d32.layout.cluster = function() {
          var hierarchy = d32.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size2 = [1, 1], nodeSize = false;
          function cluster(d, i) {
            var nodes = hierarchy.call(this, d, i), root = nodes[0], previousNode, x = 0;
            d3_layout_hierarchyVisitAfter(root, function(node) {
              var children = node.children;
              if (children && children.length) {
                node.x = d3_layout_clusterX(children);
                node.y = d3_layout_clusterY(children);
              } else {
                node.x = previousNode ? x += separation(node, previousNode) : 0;
                node.y = 0;
                previousNode = node;
              }
            });
            var left = d3_layout_clusterLeft(root), right = d3_layout_clusterRight(root), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2;
            d3_layout_hierarchyVisitAfter(root, nodeSize ? function(node) {
              node.x = (node.x - root.x) * size2[0];
              node.y = (root.y - node.y) * size2[1];
            } : function(node) {
              node.x = (node.x - x0) / (x1 - x0) * size2[0];
              node.y = (1 - (root.y ? node.y / root.y : 1)) * size2[1];
            });
            return nodes;
          }
          cluster.separation = function(x) {
            if (!arguments.length) return separation;
            separation = x;
            return cluster;
          };
          cluster.size = function(x) {
            if (!arguments.length) return nodeSize ? null : size2;
            nodeSize = (size2 = x) == null;
            return cluster;
          };
          cluster.nodeSize = function(x) {
            if (!arguments.length) return nodeSize ? size2 : null;
            nodeSize = (size2 = x) != null;
            return cluster;
          };
          return d3_layout_hierarchyRebind(cluster, hierarchy);
        };
        function d3_layout_clusterY(children) {
          return 1 + d32.max(children, function(child) {
            return child.y;
          });
        }
        function d3_layout_clusterX(children) {
          return children.reduce(function(x, child) {
            return x + child.x;
          }, 0) / children.length;
        }
        function d3_layout_clusterLeft(node) {
          var children = node.children;
          return children && children.length ? d3_layout_clusterLeft(children[0]) : node;
        }
        function d3_layout_clusterRight(node) {
          var children = node.children, n;
          return children && (n = children.length) ? d3_layout_clusterRight(children[n - 1]) : node;
        }
        d32.layout.treemap = function() {
          var hierarchy = d32.layout.hierarchy(), round3 = Math.round, size2 = [1, 1], padding = null, pad = d3_layout_treemapPadNull, sticky = false, stickies, mode = "squarify", ratio = 0.5 * (1 + Math.sqrt(5));
          function scale2(children, k) {
            var i = -1, n = children.length, child, area;
            while (++i < n) {
              area = (child = children[i]).value * (k < 0 ? 0 : k);
              child.area = isNaN(area) || area <= 0 ? 0 : area;
            }
          }
          function squarify(node) {
            var children = node.children;
            if (children && children.length) {
              var rect = pad(node), row = [], remaining = children.slice(), child, best = Infinity, score, u = mode === "slice" ? rect.dx : mode === "dice" ? rect.dy : mode === "slice-dice" ? node.depth & 1 ? rect.dy : rect.dx : Math.min(rect.dx, rect.dy), n;
              scale2(remaining, rect.dx * rect.dy / node.value);
              row.area = 0;
              while ((n = remaining.length) > 0) {
                row.push(child = remaining[n - 1]);
                row.area += child.area;
                if (mode !== "squarify" || (score = worst(row, u)) <= best) {
                  remaining.pop();
                  best = score;
                } else {
                  row.area -= row.pop().area;
                  position(row, u, rect, false);
                  u = Math.min(rect.dx, rect.dy);
                  row.length = row.area = 0;
                  best = Infinity;
                }
              }
              if (row.length) {
                position(row, u, rect, true);
                row.length = row.area = 0;
              }
              children.forEach(squarify);
            }
          }
          function stickify(node) {
            var children = node.children;
            if (children && children.length) {
              var rect = pad(node), remaining = children.slice(), child, row = [];
              scale2(remaining, rect.dx * rect.dy / node.value);
              row.area = 0;
              while (child = remaining.pop()) {
                row.push(child);
                row.area += child.area;
                if (child.z != null) {
                  position(row, child.z ? rect.dx : rect.dy, rect, !remaining.length);
                  row.length = row.area = 0;
                }
              }
              children.forEach(stickify);
            }
          }
          function worst(row, u) {
            var s = row.area, r, rmax = 0, rmin = Infinity, i = -1, n = row.length;
            while (++i < n) {
              if (!(r = row[i].area)) continue;
              if (r < rmin) rmin = r;
              if (r > rmax) rmax = r;
            }
            s *= s;
            u *= u;
            return s ? Math.max(u * rmax * ratio / s, s / (u * rmin * ratio)) : Infinity;
          }
          function position(row, u, rect, flush) {
            var i = -1, n = row.length, x = rect.x, y = rect.y, v = u ? round3(row.area / u) : 0, o;
            if (u == rect.dx) {
              if (flush || v > rect.dy) v = rect.dy;
              while (++i < n) {
                o = row[i];
                o.x = x;
                o.y = y;
                o.dy = v;
                x += o.dx = Math.min(rect.x + rect.dx - x, v ? round3(o.area / v) : 0);
              }
              o.z = true;
              o.dx += rect.x + rect.dx - x;
              rect.y += v;
              rect.dy -= v;
            } else {
              if (flush || v > rect.dx) v = rect.dx;
              while (++i < n) {
                o = row[i];
                o.x = x;
                o.y = y;
                o.dx = v;
                y += o.dy = Math.min(rect.y + rect.dy - y, v ? round3(o.area / v) : 0);
              }
              o.z = false;
              o.dy += rect.y + rect.dy - y;
              rect.x += v;
              rect.dx -= v;
            }
          }
          function treemap(d) {
            var nodes = stickies || hierarchy(d), root = nodes[0];
            root.x = root.y = 0;
            if (root.value) root.dx = size2[0], root.dy = size2[1];
            else root.dx = root.dy = 0;
            if (stickies) hierarchy.revalue(root);
            scale2([root], root.dx * root.dy / root.value);
            (stickies ? stickify : squarify)(root);
            if (sticky) stickies = nodes;
            return nodes;
          }
          treemap.size = function(x) {
            if (!arguments.length) return size2;
            size2 = x;
            return treemap;
          };
          treemap.padding = function(x) {
            if (!arguments.length) return padding;
            function padFunction(node) {
              var p = x.call(treemap, node, node.depth);
              return p == null ? d3_layout_treemapPadNull(node) : d3_layout_treemapPad(node, typeof p === "number" ? [p, p, p, p] : p);
            }
            function padConstant(node) {
              return d3_layout_treemapPad(node, x);
            }
            var type;
            pad = (padding = x) == null ? d3_layout_treemapPadNull : (type = typeof x) === "function" ? padFunction : type === "number" ? (x = [x, x, x, x], padConstant) : padConstant;
            return treemap;
          };
          treemap.round = function(x) {
            if (!arguments.length) return round3 != Number;
            round3 = x ? Math.round : Number;
            return treemap;
          };
          treemap.sticky = function(x) {
            if (!arguments.length) return sticky;
            sticky = x;
            stickies = null;
            return treemap;
          };
          treemap.ratio = function(x) {
            if (!arguments.length) return ratio;
            ratio = x;
            return treemap;
          };
          treemap.mode = function(x) {
            if (!arguments.length) return mode;
            mode = x + "";
            return treemap;
          };
          return d3_layout_hierarchyRebind(treemap, hierarchy);
        };
        function d3_layout_treemapPadNull(node) {
          return {
            x: node.x,
            y: node.y,
            dx: node.dx,
            dy: node.dy
          };
        }
        function d3_layout_treemapPad(node, padding) {
          var x = node.x + padding[3], y = node.y + padding[0], dx = node.dx - padding[1] - padding[3], dy = node.dy - padding[0] - padding[2];
          if (dx < 0) {
            x += dx / 2;
            dx = 0;
          }
          if (dy < 0) {
            y += dy / 2;
            dy = 0;
          }
          return {
            x,
            y,
            dx,
            dy
          };
        }
        d32.random = {
          normal: function(\u00B5, \u03C3) {
            var n = arguments.length;
            if (n < 2) \u03C3 = 1;
            if (n < 1) \u00B5 = 0;
            return function() {
              var x, y, r;
              do {
                x = Math.random() * 2 - 1;
                y = Math.random() * 2 - 1;
                r = x * x + y * y;
              } while (!r || r > 1);
              return \u00B5 + \u03C3 * x * Math.sqrt(-2 * Math.log(r) / r);
            };
          },
          logNormal: function() {
            var random = d32.random.normal.apply(d32, arguments);
            return function() {
              return Math.exp(random());
            };
          },
          bates: function(m) {
            var random = d32.random.irwinHall(m);
            return function() {
              return random() / m;
            };
          },
          irwinHall: function(m) {
            return function() {
              for (var s = 0, j = 0; j < m; j++) s += Math.random();
              return s;
            };
          }
        };
        d32.scale = {};
        function d3_scaleExtent(domain) {
          var start = domain[0], stop = domain[domain.length - 1];
          return start < stop ? [start, stop] : [stop, start];
        }
        function d3_scaleRange(scale2) {
          return scale2.rangeExtent ? scale2.rangeExtent() : d3_scaleExtent(scale2.range());
        }
        function d3_scale_bilinear(domain, range2, uninterpolate, interpolate2) {
          var u = uninterpolate(domain[0], domain[1]), i = interpolate2(range2[0], range2[1]);
          return function(x) {
            return i(u(x));
          };
        }
        function d3_scale_nice(domain, nice) {
          var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], dx;
          if (x1 < x0) {
            dx = i0, i0 = i1, i1 = dx;
            dx = x0, x0 = x1, x1 = dx;
          }
          domain[i0] = nice.floor(x0);
          domain[i1] = nice.ceil(x1);
          return domain;
        }
        function d3_scale_niceStep(step) {
          return step ? {
            floor: function(x) {
              return Math.floor(x / step) * step;
            },
            ceil: function(x) {
              return Math.ceil(x / step) * step;
            }
          } : d3_scale_niceIdentity;
        }
        var d3_scale_niceIdentity = {
          floor: d3_identity,
          ceil: d3_identity
        };
        function d3_scale_polylinear(domain, range2, uninterpolate, interpolate2) {
          var u = [], i = [], j = 0, k = Math.min(domain.length, range2.length) - 1;
          if (domain[k] < domain[0]) {
            domain = domain.slice().reverse();
            range2 = range2.slice().reverse();
          }
          while (++j <= k) {
            u.push(uninterpolate(domain[j - 1], domain[j]));
            i.push(interpolate2(range2[j - 1], range2[j]));
          }
          return function(x) {
            var j2 = d32.bisect(domain, x, 1, k) - 1;
            return i[j2](u[j2](x));
          };
        }
        d32.scale.linear = function() {
          return d3_scale_linear([0, 1], [0, 1], d3_interpolate, false);
        };
        function d3_scale_linear(domain, range2, interpolate2, clamp) {
          var output, input;
          function rescale() {
            var linear = Math.min(domain.length, range2.length) > 2 ? d3_scale_polylinear : d3_scale_bilinear, uninterpolate = clamp ? d3_uninterpolateClamp : d3_uninterpolateNumber;
            output = linear(domain, range2, uninterpolate, interpolate2);
            input = linear(range2, domain, uninterpolate, d3_interpolate);
            return scale2;
          }
          function scale2(x) {
            return output(x);
          }
          scale2.invert = function(y) {
            return input(y);
          };
          scale2.domain = function(x) {
            if (!arguments.length) return domain;
            domain = x.map(Number);
            return rescale();
          };
          scale2.range = function(x) {
            if (!arguments.length) return range2;
            range2 = x;
            return rescale();
          };
          scale2.rangeRound = function(x) {
            return scale2.range(x).interpolate(d3_interpolateRound);
          };
          scale2.clamp = function(x) {
            if (!arguments.length) return clamp;
            clamp = x;
            return rescale();
          };
          scale2.interpolate = function(x) {
            if (!arguments.length) return interpolate2;
            interpolate2 = x;
            return rescale();
          };
          scale2.ticks = function(m) {
            return d3_scale_linearTicks(domain, m);
          };
          scale2.tickFormat = function(m, format2) {
            return d3_scale_linearTickFormat(domain, m, format2);
          };
          scale2.nice = function(m) {
            d3_scale_linearNice(domain, m);
            return rescale();
          };
          scale2.copy = function() {
            return d3_scale_linear(domain, range2, interpolate2, clamp);
          };
          return rescale();
        }
        function d3_scale_linearRebind(scale2, linear) {
          return d32.rebind(scale2, linear, "range", "rangeRound", "interpolate", "clamp");
        }
        function d3_scale_linearNice(domain, m) {
          d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
          d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
          return domain;
        }
        function d3_scale_linearTickRange(domain, m) {
          if (m == null) m = 10;
          var extent = d3_scaleExtent(domain), span = extent[1] - extent[0], step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)), err = m / span * step;
          if (err <= 0.15) step *= 10;
          else if (err <= 0.35) step *= 5;
          else if (err <= 0.75) step *= 2;
          extent[0] = Math.ceil(extent[0] / step) * step;
          extent[1] = Math.floor(extent[1] / step) * step + step * 0.5;
          extent[2] = step;
          return extent;
        }
        function d3_scale_linearTicks(domain, m) {
          return d32.range.apply(d32, d3_scale_linearTickRange(domain, m));
        }
        function d3_scale_linearTickFormat(domain, m, format2) {
          var range2 = d3_scale_linearTickRange(domain, m);
          if (format2) {
            var match = d3_format_re.exec(format2);
            match.shift();
            if (match[8] === "s") {
              var prefix = d32.formatPrefix(Math.max(abs3(range2[0]), abs3(range2[1])));
              if (!match[7]) match[7] = "." + d3_scale_linearPrecision(prefix.scale(range2[2]));
              match[8] = "f";
              format2 = d32.format(match.join(""));
              return function(d) {
                return format2(prefix.scale(d)) + prefix.symbol;
              };
            }
            if (!match[7]) match[7] = "." + d3_scale_linearFormatPrecision(match[8], range2);
            format2 = match.join("");
          } else {
            format2 = ",." + d3_scale_linearPrecision(range2[2]) + "f";
          }
          return d32.format(format2);
        }
        var d3_scale_linearFormatSignificant = {
          s: 1,
          g: 1,
          p: 1,
          r: 1,
          e: 1
        };
        function d3_scale_linearPrecision(value) {
          return -Math.floor(Math.log(value) / Math.LN10 + 0.01);
        }
        function d3_scale_linearFormatPrecision(type, range2) {
          var p = d3_scale_linearPrecision(range2[2]);
          return type in d3_scale_linearFormatSignificant ? Math.abs(p - d3_scale_linearPrecision(Math.max(abs3(range2[0]), abs3(range2[1])))) + +(type !== "e") : p - (type === "%") * 2;
        }
        d32.scale.log = function() {
          return d3_scale_log(d32.scale.linear().domain([0, 1]), 10, true, [1, 10]);
        };
        function d3_scale_log(linear, base, positive, domain) {
          function log2(x) {
            return (positive ? Math.log(x < 0 ? 0 : x) : -Math.log(x > 0 ? 0 : -x)) / Math.log(base);
          }
          function pow3(x) {
            return positive ? Math.pow(base, x) : -Math.pow(base, -x);
          }
          function scale2(x) {
            return linear(log2(x));
          }
          scale2.invert = function(x) {
            return pow3(linear.invert(x));
          };
          scale2.domain = function(x) {
            if (!arguments.length) return domain;
            positive = x[0] >= 0;
            linear.domain((domain = x.map(Number)).map(log2));
            return scale2;
          };
          scale2.base = function(_) {
            if (!arguments.length) return base;
            base = +_;
            linear.domain(domain.map(log2));
            return scale2;
          };
          scale2.nice = function() {
            var niced = d3_scale_nice(domain.map(log2), positive ? Math : d3_scale_logNiceNegative);
            linear.domain(niced);
            domain = niced.map(pow3);
            return scale2;
          };
          scale2.ticks = function() {
            var extent = d3_scaleExtent(domain), ticks = [], u = extent[0], v = extent[1], i = Math.floor(log2(u)), j = Math.ceil(log2(v)), n = base % 1 ? 2 : base;
            if (isFinite(j - i)) {
              if (positive) {
                for (; i < j; i++) for (var k = 1; k < n; k++) ticks.push(pow3(i) * k);
                ticks.push(pow3(i));
              } else {
                ticks.push(pow3(i));
                for (; i++ < j; ) for (var k = n - 1; k > 0; k--) ticks.push(pow3(i) * k);
              }
              for (i = 0; ticks[i] < u; i++) {
              }
              for (j = ticks.length; ticks[j - 1] > v; j--) {
              }
              ticks = ticks.slice(i, j);
            }
            return ticks;
          };
          scale2.tickFormat = function(n, format2) {
            if (!arguments.length) return d3_scale_logFormat;
            if (arguments.length < 2) format2 = d3_scale_logFormat;
            else if (typeof format2 !== "function") format2 = d32.format(format2);
            var k = Math.max(1, base * n / scale2.ticks().length);
            return function(d) {
              var i = d / pow3(Math.round(log2(d)));
              if (i * base < base - 0.5) i *= base;
              return i <= k ? format2(d) : "";
            };
          };
          scale2.copy = function() {
            return d3_scale_log(linear.copy(), base, positive, domain);
          };
          return d3_scale_linearRebind(scale2, linear);
        }
        var d3_scale_logFormat = d32.format(".0e"), d3_scale_logNiceNegative = {
          floor: function(x) {
            return -Math.ceil(-x);
          },
          ceil: function(x) {
            return -Math.floor(-x);
          }
        };
        d32.scale.pow = function() {
          return d3_scale_pow(d32.scale.linear(), 1, [0, 1]);
        };
        function d3_scale_pow(linear, exponent, domain) {
          var powp = d3_scale_powPow(exponent), powb = d3_scale_powPow(1 / exponent);
          function scale2(x) {
            return linear(powp(x));
          }
          scale2.invert = function(x) {
            return powb(linear.invert(x));
          };
          scale2.domain = function(x) {
            if (!arguments.length) return domain;
            linear.domain((domain = x.map(Number)).map(powp));
            return scale2;
          };
          scale2.ticks = function(m) {
            return d3_scale_linearTicks(domain, m);
          };
          scale2.tickFormat = function(m, format2) {
            return d3_scale_linearTickFormat(domain, m, format2);
          };
          scale2.nice = function(m) {
            return scale2.domain(d3_scale_linearNice(domain, m));
          };
          scale2.exponent = function(x) {
            if (!arguments.length) return exponent;
            powp = d3_scale_powPow(exponent = x);
            powb = d3_scale_powPow(1 / exponent);
            linear.domain(domain.map(powp));
            return scale2;
          };
          scale2.copy = function() {
            return d3_scale_pow(linear.copy(), exponent, domain);
          };
          return d3_scale_linearRebind(scale2, linear);
        }
        function d3_scale_powPow(e) {
          return function(x) {
            return x < 0 ? -Math.pow(-x, e) : Math.pow(x, e);
          };
        }
        d32.scale.sqrt = function() {
          return d32.scale.pow().exponent(0.5);
        };
        d32.scale.ordinal = function() {
          return d3_scale_ordinal([], {
            t: "range",
            a: [[]]
          });
        };
        function d3_scale_ordinal(domain, ranger) {
          var index2, range2, rangeBand;
          function scale2(x) {
            return range2[((index2.get(x) || (ranger.t === "range" ? index2.set(x, domain.push(x)) : NaN)) - 1) % range2.length];
          }
          function steps(start, step) {
            return d32.range(domain.length).map(function(i) {
              return start + step * i;
            });
          }
          scale2.domain = function(x) {
            if (!arguments.length) return domain;
            domain = [];
            index2 = new d3_Map();
            var i = -1, n = x.length, xi;
            while (++i < n) if (!index2.has(xi = x[i])) index2.set(xi, domain.push(xi));
            return scale2[ranger.t].apply(scale2, ranger.a);
          };
          scale2.range = function(x) {
            if (!arguments.length) return range2;
            range2 = x;
            rangeBand = 0;
            ranger = {
              t: "range",
              a: arguments
            };
            return scale2;
          };
          scale2.rangePoints = function(x, padding) {
            if (arguments.length < 2) padding = 0;
            var start = x[0], stop = x[1], step = domain.length < 2 ? (start = (start + stop) / 2, 0) : (stop - start) / (domain.length - 1 + padding);
            range2 = steps(start + step * padding / 2, step);
            rangeBand = 0;
            ranger = {
              t: "rangePoints",
              a: arguments
            };
            return scale2;
          };
          scale2.rangeRoundPoints = function(x, padding) {
            if (arguments.length < 2) padding = 0;
            var start = x[0], stop = x[1], step = domain.length < 2 ? (start = stop = Math.round((start + stop) / 2), 0) : (stop - start) / (domain.length - 1 + padding) | 0;
            range2 = steps(start + Math.round(step * padding / 2 + (stop - start - (domain.length - 1 + padding) * step) / 2), step);
            rangeBand = 0;
            ranger = {
              t: "rangeRoundPoints",
              a: arguments
            };
            return scale2;
          };
          scale2.rangeBands = function(x, padding, outerPadding) {
            if (arguments.length < 2) padding = 0;
            if (arguments.length < 3) outerPadding = padding;
            var reverse2 = x[1] < x[0], start = x[reverse2 - 0], stop = x[1 - reverse2], step = (stop - start) / (domain.length - padding + 2 * outerPadding);
            range2 = steps(start + step * outerPadding, step);
            if (reverse2) range2.reverse();
            rangeBand = step * (1 - padding);
            ranger = {
              t: "rangeBands",
              a: arguments
            };
            return scale2;
          };
          scale2.rangeRoundBands = function(x, padding, outerPadding) {
            if (arguments.length < 2) padding = 0;
            if (arguments.length < 3) outerPadding = padding;
            var reverse2 = x[1] < x[0], start = x[reverse2 - 0], stop = x[1 - reverse2], step = Math.floor((stop - start) / (domain.length - padding + 2 * outerPadding));
            range2 = steps(start + Math.round((stop - start - (domain.length - padding) * step) / 2), step);
            if (reverse2) range2.reverse();
            rangeBand = Math.round(step * (1 - padding));
            ranger = {
              t: "rangeRoundBands",
              a: arguments
            };
            return scale2;
          };
          scale2.rangeBand = function() {
            return rangeBand;
          };
          scale2.rangeExtent = function() {
            return d3_scaleExtent(ranger.a[0]);
          };
          scale2.copy = function() {
            return d3_scale_ordinal(domain, ranger);
          };
          return scale2.domain(domain);
        }
        d32.scale.category10 = function() {
          return d32.scale.ordinal().range(d3_category10);
        };
        d32.scale.category20 = function() {
          return d32.scale.ordinal().range(d3_category20);
        };
        d32.scale.category20b = function() {
          return d32.scale.ordinal().range(d3_category20b);
        };
        d32.scale.category20c = function() {
          return d32.scale.ordinal().range(d3_category20c);
        };
        var d3_category10 = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(d3_rgbString);
        var d3_category20 = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(d3_rgbString);
        var d3_category20b = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(d3_rgbString);
        var d3_category20c = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(d3_rgbString);
        d32.scale.quantile = function() {
          return d3_scale_quantile([], []);
        };
        function d3_scale_quantile(domain, range2) {
          var thresholds;
          function rescale() {
            var k = 0, q = range2.length;
            thresholds = [];
            while (++k < q) thresholds[k - 1] = d32.quantile(domain, k / q);
            return scale2;
          }
          function scale2(x) {
            if (!isNaN(x = +x)) return range2[d32.bisect(thresholds, x)];
          }
          scale2.domain = function(x) {
            if (!arguments.length) return domain;
            domain = x.map(d3_number).filter(d3_numeric).sort(d3_ascending);
            return rescale();
          };
          scale2.range = function(x) {
            if (!arguments.length) return range2;
            range2 = x;
            return rescale();
          };
          scale2.quantiles = function() {
            return thresholds;
          };
          scale2.invertExtent = function(y) {
            y = range2.indexOf(y);
            return y < 0 ? [NaN, NaN] : [y > 0 ? thresholds[y - 1] : domain[0], y < thresholds.length ? thresholds[y] : domain[domain.length - 1]];
          };
          scale2.copy = function() {
            return d3_scale_quantile(domain, range2);
          };
          return rescale();
        }
        d32.scale.quantize = function() {
          return d3_scale_quantize(0, 1, [0, 1]);
        };
        function d3_scale_quantize(x0, x1, range2) {
          var kx, i;
          function scale2(x) {
            return range2[Math.max(0, Math.min(i, Math.floor(kx * (x - x0))))];
          }
          function rescale() {
            kx = range2.length / (x1 - x0);
            i = range2.length - 1;
            return scale2;
          }
          scale2.domain = function(x) {
            if (!arguments.length) return [x0, x1];
            x0 = +x[0];
            x1 = +x[x.length - 1];
            return rescale();
          };
          scale2.range = function(x) {
            if (!arguments.length) return range2;
            range2 = x;
            return rescale();
          };
          scale2.invertExtent = function(y) {
            y = range2.indexOf(y);
            y = y < 0 ? NaN : y / kx + x0;
            return [y, y + 1 / kx];
          };
          scale2.copy = function() {
            return d3_scale_quantize(x0, x1, range2);
          };
          return rescale();
        }
        d32.scale.threshold = function() {
          return d3_scale_threshold([0.5], [0, 1]);
        };
        function d3_scale_threshold(domain, range2) {
          function scale2(x) {
            if (x <= x) return range2[d32.bisect(domain, x)];
          }
          scale2.domain = function(_) {
            if (!arguments.length) return domain;
            domain = _;
            return scale2;
          };
          scale2.range = function(_) {
            if (!arguments.length) return range2;
            range2 = _;
            return scale2;
          };
          scale2.invertExtent = function(y) {
            y = range2.indexOf(y);
            return [domain[y - 1], domain[y]];
          };
          scale2.copy = function() {
            return d3_scale_threshold(domain, range2);
          };
          return scale2;
        }
        d32.scale.identity = function() {
          return d3_scale_identity([0, 1]);
        };
        function d3_scale_identity(domain) {
          function identity4(x) {
            return +x;
          }
          identity4.invert = identity4;
          identity4.domain = identity4.range = function(x) {
            if (!arguments.length) return domain;
            domain = x.map(identity4);
            return identity4;
          };
          identity4.ticks = function(m) {
            return d3_scale_linearTicks(domain, m);
          };
          identity4.tickFormat = function(m, format2) {
            return d3_scale_linearTickFormat(domain, m, format2);
          };
          identity4.copy = function() {
            return d3_scale_identity(domain);
          };
          return identity4;
        }
        d32.svg = {};
        function d3_zero() {
          return 0;
        }
        d32.svg.arc = function() {
          var innerRadius = d3_svg_arcInnerRadius, outerRadius = d3_svg_arcOuterRadius, cornerRadius = d3_zero, padRadius = d3_svg_arcAuto, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle, padAngle = d3_svg_arcPadAngle;
          function arc2() {
            var r0 = Math.max(0, +innerRadius.apply(this, arguments)), r1 = Math.max(0, +outerRadius.apply(this, arguments)), a0 = startAngle.apply(this, arguments) - half\u03C0, a1 = endAngle.apply(this, arguments) - half\u03C0, da = Math.abs(a1 - a0), cw = a0 > a1 ? 0 : 1;
            if (r1 < r0) rc = r1, r1 = r0, r0 = rc;
            if (da >= \u03C4\u03B5) return circleSegment(r1, cw) + (r0 ? circleSegment(r0, 1 - cw) : "") + "Z";
            var rc, cr, rp, ap2, p0 = 0, p1 = 0, x0, y0, x1, y1, x2, y2, x3, y3, path = [];
            if (ap2 = (+padAngle.apply(this, arguments) || 0) / 2) {
              rp = padRadius === d3_svg_arcAuto ? Math.sqrt(r0 * r0 + r1 * r1) : +padRadius.apply(this, arguments);
              if (!cw) p1 *= -1;
              if (r1) p1 = d3_asin(rp / r1 * Math.sin(ap2));
              if (r0) p0 = d3_asin(rp / r0 * Math.sin(ap2));
            }
            if (r1) {
              x0 = r1 * Math.cos(a0 + p1);
              y0 = r1 * Math.sin(a0 + p1);
              x1 = r1 * Math.cos(a1 - p1);
              y1 = r1 * Math.sin(a1 - p1);
              var l1 = Math.abs(a1 - a0 - 2 * p1) <= \u03C0 ? 0 : 1;
              if (p1 && d3_svg_arcSweep(x0, y0, x1, y1) === cw ^ l1) {
                var h1 = (a0 + a1) / 2;
                x0 = r1 * Math.cos(h1);
                y0 = r1 * Math.sin(h1);
                x1 = y1 = null;
              }
            } else {
              x0 = y0 = 0;
            }
            if (r0) {
              x2 = r0 * Math.cos(a1 - p0);
              y2 = r0 * Math.sin(a1 - p0);
              x3 = r0 * Math.cos(a0 + p0);
              y3 = r0 * Math.sin(a0 + p0);
              var l0 = Math.abs(a0 - a1 + 2 * p0) <= \u03C0 ? 0 : 1;
              if (p0 && d3_svg_arcSweep(x2, y2, x3, y3) === 1 - cw ^ l0) {
                var h0 = (a0 + a1) / 2;
                x2 = r0 * Math.cos(h0);
                y2 = r0 * Math.sin(h0);
                x3 = y3 = null;
              }
            } else {
              x2 = y2 = 0;
            }
            if (da > \u03B5 && (rc = Math.min(Math.abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments))) > 1e-3) {
              cr = r0 < r1 ^ cw ? 0 : 1;
              var rc1 = rc, rc0 = rc;
              if (da < \u03C0) {
                var oc = x3 == null ? [x2, y2] : x1 == null ? [x0, y0] : d3_geom_polygonIntersect([x0, y0], [x3, y3], [x1, y1], [x2, y2]), ax = x0 - oc[0], ay = y0 - oc[1], bx = x1 - oc[0], by = y1 - oc[1], kc = 1 / Math.sin(Math.acos((ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by))) / 2), lc = Math.sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
                rc0 = Math.min(rc, (r0 - lc) / (kc - 1));
                rc1 = Math.min(rc, (r1 - lc) / (kc + 1));
              }
              if (x1 != null) {
                var t30 = d3_svg_arcCornerTangents(x3 == null ? [x2, y2] : [x3, y3], [x0, y0], r1, rc1, cw), t12 = d3_svg_arcCornerTangents([x1, y1], [x2, y2], r1, rc1, cw);
                if (rc === rc1) {
                  path.push("M", t30[0], "A", rc1, ",", rc1, " 0 0,", cr, " ", t30[1], "A", r1, ",", r1, " 0 ", 1 - cw ^ d3_svg_arcSweep(t30[1][0], t30[1][1], t12[1][0], t12[1][1]), ",", cw, " ", t12[1], "A", rc1, ",", rc1, " 0 0,", cr, " ", t12[0]);
                } else {
                  path.push("M", t30[0], "A", rc1, ",", rc1, " 0 1,", cr, " ", t12[0]);
                }
              } else {
                path.push("M", x0, ",", y0);
              }
              if (x3 != null) {
                var t03 = d3_svg_arcCornerTangents([x0, y0], [x3, y3], r0, -rc0, cw), t21 = d3_svg_arcCornerTangents([x2, y2], x1 == null ? [x0, y0] : [x1, y1], r0, -rc0, cw);
                if (rc === rc0) {
                  path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t21[1], "A", r0, ",", r0, " 0 ", cw ^ d3_svg_arcSweep(t21[1][0], t21[1][1], t03[1][0], t03[1][1]), ",", 1 - cw, " ", t03[1], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
                } else {
                  path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
                }
              } else {
                path.push("L", x2, ",", y2);
              }
            } else {
              path.push("M", x0, ",", y0);
              if (x1 != null) path.push("A", r1, ",", r1, " 0 ", l1, ",", cw, " ", x1, ",", y1);
              path.push("L", x2, ",", y2);
              if (x3 != null) path.push("A", r0, ",", r0, " 0 ", l0, ",", 1 - cw, " ", x3, ",", y3);
            }
            path.push("Z");
            return path.join("");
          }
          function circleSegment(r1, cw) {
            return "M0," + r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + -r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + r1;
          }
          arc2.innerRadius = function(v) {
            if (!arguments.length) return innerRadius;
            innerRadius = d3_functor(v);
            return arc2;
          };
          arc2.outerRadius = function(v) {
            if (!arguments.length) return outerRadius;
            outerRadius = d3_functor(v);
            return arc2;
          };
          arc2.cornerRadius = function(v) {
            if (!arguments.length) return cornerRadius;
            cornerRadius = d3_functor(v);
            return arc2;
          };
          arc2.padRadius = function(v) {
            if (!arguments.length) return padRadius;
            padRadius = v == d3_svg_arcAuto ? d3_svg_arcAuto : d3_functor(v);
            return arc2;
          };
          arc2.startAngle = function(v) {
            if (!arguments.length) return startAngle;
            startAngle = d3_functor(v);
            return arc2;
          };
          arc2.endAngle = function(v) {
            if (!arguments.length) return endAngle;
            endAngle = d3_functor(v);
            return arc2;
          };
          arc2.padAngle = function(v) {
            if (!arguments.length) return padAngle;
            padAngle = d3_functor(v);
            return arc2;
          };
          arc2.centroid = function() {
            var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - half\u03C0;
            return [Math.cos(a) * r, Math.sin(a) * r];
          };
          return arc2;
        };
        var d3_svg_arcAuto = "auto";
        function d3_svg_arcInnerRadius(d) {
          return d.innerRadius;
        }
        function d3_svg_arcOuterRadius(d) {
          return d.outerRadius;
        }
        function d3_svg_arcStartAngle(d) {
          return d.startAngle;
        }
        function d3_svg_arcEndAngle(d) {
          return d.endAngle;
        }
        function d3_svg_arcPadAngle(d) {
          return d && d.padAngle;
        }
        function d3_svg_arcSweep(x0, y0, x1, y1) {
          return (x0 - x1) * y0 - (y0 - y1) * x0 > 0 ? 0 : 1;
        }
        function d3_svg_arcCornerTangents(p0, p1, r1, rc, cw) {
          var x01 = p0[0] - p1[0], y01 = p0[1] - p1[1], lo = (cw ? rc : -rc) / Math.sqrt(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x1 = p0[0] + ox, y1 = p0[1] + oy, x2 = p1[0] + ox, y2 = p1[1] + oy, x3 = (x1 + x2) / 2, y3 = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1, d2 = dx * dx + dy * dy, r = r1 - rc, D = x1 * y2 - x2 * y1, d = (dy < 0 ? -1 : 1) * Math.sqrt(Math.max(0, r * r * d2 - D * D)), cx0 = (D * dy - dx * d) / d2, cy0 = (-D * dx - dy * d) / d2, cx1 = (D * dy + dx * d) / d2, cy1 = (-D * dx + dy * d) / d2, dx0 = cx0 - x3, dy0 = cy0 - y3, dx1 = cx1 - x3, dy1 = cy1 - y3;
          if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
          return [[cx0 - ox, cy0 - oy], [cx0 * r1 / r, cy0 * r1 / r]];
        }
        function d3_svg_line(projection) {
          var x = d3_geom_pointX, y = d3_geom_pointY, defined = d3_true, interpolate2 = d3_svg_lineLinear, interpolateKey = interpolate2.key, tension = 0.7;
          function line(data) {
            var segments = [], points = [], i = -1, n = data.length, d, fx = d3_functor(x), fy = d3_functor(y);
            function segment() {
              segments.push("M", interpolate2(projection(points), tension));
            }
            while (++i < n) {
              if (defined.call(this, d = data[i], i)) {
                points.push([+fx.call(this, d, i), +fy.call(this, d, i)]);
              } else if (points.length) {
                segment();
                points = [];
              }
            }
            if (points.length) segment();
            return segments.length ? segments.join("") : null;
          }
          line.x = function(_) {
            if (!arguments.length) return x;
            x = _;
            return line;
          };
          line.y = function(_) {
            if (!arguments.length) return y;
            y = _;
            return line;
          };
          line.defined = function(_) {
            if (!arguments.length) return defined;
            defined = _;
            return line;
          };
          line.interpolate = function(_) {
            if (!arguments.length) return interpolateKey;
            if (typeof _ === "function") interpolateKey = interpolate2 = _;
            else interpolateKey = (interpolate2 = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
            return line;
          };
          line.tension = function(_) {
            if (!arguments.length) return tension;
            tension = _;
            return line;
          };
          return line;
        }
        d32.svg.line = function() {
          return d3_svg_line(d3_identity);
        };
        var d3_svg_lineInterpolators = d32.map({
          linear: d3_svg_lineLinear,
          "linear-closed": d3_svg_lineLinearClosed,
          step: d3_svg_lineStep,
          "step-before": d3_svg_lineStepBefore,
          "step-after": d3_svg_lineStepAfter,
          basis: d3_svg_lineBasis,
          "basis-open": d3_svg_lineBasisOpen,
          "basis-closed": d3_svg_lineBasisClosed,
          bundle: d3_svg_lineBundle,
          cardinal: d3_svg_lineCardinal,
          "cardinal-open": d3_svg_lineCardinalOpen,
          "cardinal-closed": d3_svg_lineCardinalClosed,
          monotone: d3_svg_lineMonotone
        });
        d3_svg_lineInterpolators.forEach(function(key2, value) {
          value.key = key2;
          value.closed = /-closed$/.test(key2);
        });
        function d3_svg_lineLinear(points) {
          return points.length > 1 ? points.join("L") : points + "Z";
        }
        function d3_svg_lineLinearClosed(points) {
          return points.join("L") + "Z";
        }
        function d3_svg_lineStep(points) {
          var i = 0, n = points.length, p = points[0], path = [p[0], ",", p[1]];
          while (++i < n) path.push("H", (p[0] + (p = points[i])[0]) / 2, "V", p[1]);
          if (n > 1) path.push("H", p[0]);
          return path.join("");
        }
        function d3_svg_lineStepBefore(points) {
          var i = 0, n = points.length, p = points[0], path = [p[0], ",", p[1]];
          while (++i < n) path.push("V", (p = points[i])[1], "H", p[0]);
          return path.join("");
        }
        function d3_svg_lineStepAfter(points) {
          var i = 0, n = points.length, p = points[0], path = [p[0], ",", p[1]];
          while (++i < n) path.push("H", (p = points[i])[0], "V", p[1]);
          return path.join("");
        }
        function d3_svg_lineCardinalOpen(points, tension) {
          return points.length < 4 ? d3_svg_lineLinear(points) : points[1] + d3_svg_lineHermite(points.slice(1, -1), d3_svg_lineCardinalTangents(points, tension));
        }
        function d3_svg_lineCardinalClosed(points, tension) {
          return points.length < 3 ? d3_svg_lineLinearClosed(points) : points[0] + d3_svg_lineHermite((points.push(points[0]), points), d3_svg_lineCardinalTangents([points[points.length - 2]].concat(points, [points[1]]), tension));
        }
        function d3_svg_lineCardinal(points, tension) {
          return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineCardinalTangents(points, tension));
        }
        function d3_svg_lineHermite(points, tangents) {
          if (tangents.length < 1 || points.length != tangents.length && points.length != tangents.length + 2) {
            return d3_svg_lineLinear(points);
          }
          var quad = points.length != tangents.length, path = "", p0 = points[0], p = points[1], t0 = tangents[0], t = t0, pi = 1;
          if (quad) {
            path += "Q" + (p[0] - t0[0] * 2 / 3) + "," + (p[1] - t0[1] * 2 / 3) + "," + p[0] + "," + p[1];
            p0 = points[1];
            pi = 2;
          }
          if (tangents.length > 1) {
            t = tangents[1];
            p = points[pi];
            pi++;
            path += "C" + (p0[0] + t0[0]) + "," + (p0[1] + t0[1]) + "," + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
            for (var i = 2; i < tangents.length; i++, pi++) {
              p = points[pi];
              t = tangents[i];
              path += "S" + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
            }
          }
          if (quad) {
            var lp = points[pi];
            path += "Q" + (p[0] + t[0] * 2 / 3) + "," + (p[1] + t[1] * 2 / 3) + "," + lp[0] + "," + lp[1];
          }
          return path;
        }
        function d3_svg_lineCardinalTangents(points, tension) {
          var tangents = [], a = (1 - tension) / 2, p0, p1 = points[0], p2 = points[1], i = 1, n = points.length;
          while (++i < n) {
            p0 = p1;
            p1 = p2;
            p2 = points[i];
            tangents.push([a * (p2[0] - p0[0]), a * (p2[1] - p0[1])]);
          }
          return tangents;
        }
        function d3_svg_lineBasis(points) {
          if (points.length < 3) return d3_svg_lineLinear(points);
          var i = 1, n = points.length, pi = points[0], x0 = pi[0], y0 = pi[1], px = [x0, x0, x0, (pi = points[1])[0]], py = [y0, y0, y0, pi[1]], path = [x0, ",", y0, "L", d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py)];
          points.push(points[n - 1]);
          while (++i <= n) {
            pi = points[i];
            px.shift();
            px.push(pi[0]);
            py.shift();
            py.push(pi[1]);
            d3_svg_lineBasisBezier(path, px, py);
          }
          points.pop();
          path.push("L", pi);
          return path.join("");
        }
        function d3_svg_lineBasisOpen(points) {
          if (points.length < 4) return d3_svg_lineLinear(points);
          var path = [], i = -1, n = points.length, pi, px = [0], py = [0];
          while (++i < 3) {
            pi = points[i];
            px.push(pi[0]);
            py.push(pi[1]);
          }
          path.push(d3_svg_lineDot4(d3_svg_lineBasisBezier3, px) + "," + d3_svg_lineDot4(d3_svg_lineBasisBezier3, py));
          --i;
          while (++i < n) {
            pi = points[i];
            px.shift();
            px.push(pi[0]);
            py.shift();
            py.push(pi[1]);
            d3_svg_lineBasisBezier(path, px, py);
          }
          return path.join("");
        }
        function d3_svg_lineBasisClosed(points) {
          var path, i = -1, n = points.length, m = n + 4, pi, px = [], py = [];
          while (++i < 4) {
            pi = points[i % n];
            px.push(pi[0]);
            py.push(pi[1]);
          }
          path = [d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py)];
          --i;
          while (++i < m) {
            pi = points[i % n];
            px.shift();
            px.push(pi[0]);
            py.shift();
            py.push(pi[1]);
            d3_svg_lineBasisBezier(path, px, py);
          }
          return path.join("");
        }
        function d3_svg_lineBundle(points, tension) {
          var n = points.length - 1;
          if (n) {
            var x0 = points[0][0], y0 = points[0][1], dx = points[n][0] - x0, dy = points[n][1] - y0, i = -1, p, t;
            while (++i <= n) {
              p = points[i];
              t = i / n;
              p[0] = tension * p[0] + (1 - tension) * (x0 + t * dx);
              p[1] = tension * p[1] + (1 - tension) * (y0 + t * dy);
            }
          }
          return d3_svg_lineBasis(points);
        }
        function d3_svg_lineDot4(a, b) {
          return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
        }
        var d3_svg_lineBasisBezier1 = [0, 2 / 3, 1 / 3, 0], d3_svg_lineBasisBezier2 = [0, 1 / 3, 2 / 3, 0], d3_svg_lineBasisBezier3 = [0, 1 / 6, 2 / 3, 1 / 6];
        function d3_svg_lineBasisBezier(path, x, y) {
          path.push("C", d3_svg_lineDot4(d3_svg_lineBasisBezier1, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier1, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, y));
        }
        function d3_svg_lineSlope(p0, p1) {
          return (p1[1] - p0[1]) / (p1[0] - p0[0]);
        }
        function d3_svg_lineFiniteDifferences(points) {
          var i = 0, j = points.length - 1, m = [], p0 = points[0], p1 = points[1], d = m[0] = d3_svg_lineSlope(p0, p1);
          while (++i < j) {
            m[i] = (d + (d = d3_svg_lineSlope(p0 = p1, p1 = points[i + 1]))) / 2;
          }
          m[i] = d;
          return m;
        }
        function d3_svg_lineMonotoneTangents(points) {
          var tangents = [], d, a, b, s, m = d3_svg_lineFiniteDifferences(points), i = -1, j = points.length - 1;
          while (++i < j) {
            d = d3_svg_lineSlope(points[i], points[i + 1]);
            if (abs3(d) < \u03B5) {
              m[i] = m[i + 1] = 0;
            } else {
              a = m[i] / d;
              b = m[i + 1] / d;
              s = a * a + b * b;
              if (s > 9) {
                s = d * 3 / Math.sqrt(s);
                m[i] = s * a;
                m[i + 1] = s * b;
              }
            }
          }
          i = -1;
          while (++i <= j) {
            s = (points[Math.min(j, i + 1)][0] - points[Math.max(0, i - 1)][0]) / (6 * (1 + m[i] * m[i]));
            tangents.push([s || 0, m[i] * s || 0]);
          }
          return tangents;
        }
        function d3_svg_lineMonotone(points) {
          return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineMonotoneTangents(points));
        }
        d32.svg.line.radial = function() {
          var line = d3_svg_line(d3_svg_lineRadial);
          line.radius = line.x, delete line.x;
          line.angle = line.y, delete line.y;
          return line;
        };
        function d3_svg_lineRadial(points) {
          var point, i = -1, n = points.length, r, a;
          while (++i < n) {
            point = points[i];
            r = point[0];
            a = point[1] - half\u03C0;
            point[0] = r * Math.cos(a);
            point[1] = r * Math.sin(a);
          }
          return points;
        }
        function d3_svg_area(projection) {
          var x0 = d3_geom_pointX, x1 = d3_geom_pointX, y0 = 0, y1 = d3_geom_pointY, defined = d3_true, interpolate2 = d3_svg_lineLinear, interpolateKey = interpolate2.key, interpolateReverse = interpolate2, L = "L", tension = 0.7;
          function area(data) {
            var segments = [], points0 = [], points1 = [], i = -1, n = data.length, d, fx0 = d3_functor(x0), fy0 = d3_functor(y0), fx1 = x0 === x1 ? function() {
              return x;
            } : d3_functor(x1), fy1 = y0 === y1 ? function() {
              return y;
            } : d3_functor(y1), x, y;
            function segment() {
              segments.push("M", interpolate2(projection(points1), tension), L, interpolateReverse(projection(points0.reverse()), tension), "Z");
            }
            while (++i < n) {
              if (defined.call(this, d = data[i], i)) {
                points0.push([x = +fx0.call(this, d, i), y = +fy0.call(this, d, i)]);
                points1.push([+fx1.call(this, d, i), +fy1.call(this, d, i)]);
              } else if (points0.length) {
                segment();
                points0 = [];
                points1 = [];
              }
            }
            if (points0.length) segment();
            return segments.length ? segments.join("") : null;
          }
          area.x = function(_) {
            if (!arguments.length) return x1;
            x0 = x1 = _;
            return area;
          };
          area.x0 = function(_) {
            if (!arguments.length) return x0;
            x0 = _;
            return area;
          };
          area.x1 = function(_) {
            if (!arguments.length) return x1;
            x1 = _;
            return area;
          };
          area.y = function(_) {
            if (!arguments.length) return y1;
            y0 = y1 = _;
            return area;
          };
          area.y0 = function(_) {
            if (!arguments.length) return y0;
            y0 = _;
            return area;
          };
          area.y1 = function(_) {
            if (!arguments.length) return y1;
            y1 = _;
            return area;
          };
          area.defined = function(_) {
            if (!arguments.length) return defined;
            defined = _;
            return area;
          };
          area.interpolate = function(_) {
            if (!arguments.length) return interpolateKey;
            if (typeof _ === "function") interpolateKey = interpolate2 = _;
            else interpolateKey = (interpolate2 = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
            interpolateReverse = interpolate2.reverse || interpolate2;
            L = interpolate2.closed ? "M" : "L";
            return area;
          };
          area.tension = function(_) {
            if (!arguments.length) return tension;
            tension = _;
            return area;
          };
          return area;
        }
        d3_svg_lineStepBefore.reverse = d3_svg_lineStepAfter;
        d3_svg_lineStepAfter.reverse = d3_svg_lineStepBefore;
        d32.svg.area = function() {
          return d3_svg_area(d3_identity);
        };
        d32.svg.area.radial = function() {
          var area = d3_svg_area(d3_svg_lineRadial);
          area.radius = area.x, delete area.x;
          area.innerRadius = area.x0, delete area.x0;
          area.outerRadius = area.x1, delete area.x1;
          area.angle = area.y, delete area.y;
          area.startAngle = area.y0, delete area.y0;
          area.endAngle = area.y1, delete area.y1;
          return area;
        };
        d32.svg.chord = function() {
          var source2 = d3_source, target = d3_target, radius2 = d3_svg_chordRadius, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle;
          function chord(d, i) {
            var s = subgroup(this, source2, d, i), t = subgroup(this, target, d, i);
            return "M" + s.p0 + arc2(s.r, s.p1, s.a1 - s.a0) + (equals(s, t) ? curve(s.r, s.p1, s.r, s.p0) : curve(s.r, s.p1, t.r, t.p0) + arc2(t.r, t.p1, t.a1 - t.a0) + curve(t.r, t.p1, s.r, s.p0)) + "Z";
          }
          function subgroup(self, f, d, i) {
            var subgroup2 = f.call(self, d, i), r = radius2.call(self, subgroup2, i), a0 = startAngle.call(self, subgroup2, i) - half\u03C0, a1 = endAngle.call(self, subgroup2, i) - half\u03C0;
            return {
              r,
              a0,
              a1,
              p0: [r * Math.cos(a0), r * Math.sin(a0)],
              p1: [r * Math.cos(a1), r * Math.sin(a1)]
            };
          }
          function equals(a, b) {
            return a.a0 == b.a0 && a.a1 == b.a1;
          }
          function arc2(r, p, a) {
            return "A" + r + "," + r + " 0 " + +(a > \u03C0) + ",1 " + p;
          }
          function curve(r0, p0, r1, p1) {
            return "Q 0,0 " + p1;
          }
          chord.radius = function(v) {
            if (!arguments.length) return radius2;
            radius2 = d3_functor(v);
            return chord;
          };
          chord.source = function(v) {
            if (!arguments.length) return source2;
            source2 = d3_functor(v);
            return chord;
          };
          chord.target = function(v) {
            if (!arguments.length) return target;
            target = d3_functor(v);
            return chord;
          };
          chord.startAngle = function(v) {
            if (!arguments.length) return startAngle;
            startAngle = d3_functor(v);
            return chord;
          };
          chord.endAngle = function(v) {
            if (!arguments.length) return endAngle;
            endAngle = d3_functor(v);
            return chord;
          };
          return chord;
        };
        function d3_svg_chordRadius(d) {
          return d.radius;
        }
        d32.svg.diagonal = function() {
          var source2 = d3_source, target = d3_target, projection = d3_svg_diagonalProjection;
          function diagonal(d, i) {
            var p0 = source2.call(this, d, i), p3 = target.call(this, d, i), m = (p0.y + p3.y) / 2, p = [p0, {
              x: p0.x,
              y: m
            }, {
              x: p3.x,
              y: m
            }, p3];
            p = p.map(projection);
            return "M" + p[0] + "C" + p[1] + " " + p[2] + " " + p[3];
          }
          diagonal.source = function(x) {
            if (!arguments.length) return source2;
            source2 = d3_functor(x);
            return diagonal;
          };
          diagonal.target = function(x) {
            if (!arguments.length) return target;
            target = d3_functor(x);
            return diagonal;
          };
          diagonal.projection = function(x) {
            if (!arguments.length) return projection;
            projection = x;
            return diagonal;
          };
          return diagonal;
        };
        function d3_svg_diagonalProjection(d) {
          return [d.x, d.y];
        }
        d32.svg.diagonal.radial = function() {
          var diagonal = d32.svg.diagonal(), projection = d3_svg_diagonalProjection, projection_ = diagonal.projection;
          diagonal.projection = function(x) {
            return arguments.length ? projection_(d3_svg_diagonalRadialProjection(projection = x)) : projection;
          };
          return diagonal;
        };
        function d3_svg_diagonalRadialProjection(projection) {
          return function() {
            var d = projection.apply(this, arguments), r = d[0], a = d[1] - half\u03C0;
            return [r * Math.cos(a), r * Math.sin(a)];
          };
        }
        d32.svg.symbol = function() {
          var type = d3_svg_symbolType, size2 = d3_svg_symbolSize;
          function symbol(d, i) {
            return (d3_svg_symbols.get(type.call(this, d, i)) || d3_svg_symbolCircle)(size2.call(this, d, i));
          }
          symbol.type = function(x) {
            if (!arguments.length) return type;
            type = d3_functor(x);
            return symbol;
          };
          symbol.size = function(x) {
            if (!arguments.length) return size2;
            size2 = d3_functor(x);
            return symbol;
          };
          return symbol;
        };
        function d3_svg_symbolSize() {
          return 64;
        }
        function d3_svg_symbolType() {
          return "circle";
        }
        function d3_svg_symbolCircle(size2) {
          var r = Math.sqrt(size2 / \u03C0);
          return "M0," + r + "A" + r + "," + r + " 0 1,1 0," + -r + "A" + r + "," + r + " 0 1,1 0," + r + "Z";
        }
        var d3_svg_symbols = d32.map({
          circle: d3_svg_symbolCircle,
          cross: function(size2) {
            var r = Math.sqrt(size2 / 5) / 2;
            return "M" + -3 * r + "," + -r + "H" + -r + "V" + -3 * r + "H" + r + "V" + -r + "H" + 3 * r + "V" + r + "H" + r + "V" + 3 * r + "H" + -r + "V" + r + "H" + -3 * r + "Z";
          },
          diamond: function(size2) {
            var ry = Math.sqrt(size2 / (2 * d3_svg_symbolTan30)), rx = ry * d3_svg_symbolTan30;
            return "M0," + -ry + "L" + rx + ",0 0," + ry + " " + -rx + ",0Z";
          },
          square: function(size2) {
            var r = Math.sqrt(size2) / 2;
            return "M" + -r + "," + -r + "L" + r + "," + -r + " " + r + "," + r + " " + -r + "," + r + "Z";
          },
          "triangle-down": function(size2) {
            var rx = Math.sqrt(size2 / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
            return "M0," + ry + "L" + rx + "," + -ry + " " + -rx + "," + -ry + "Z";
          },
          "triangle-up": function(size2) {
            var rx = Math.sqrt(size2 / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
            return "M0," + -ry + "L" + rx + "," + ry + " " + -rx + "," + ry + "Z";
          }
        });
        d32.svg.symbolTypes = d3_svg_symbols.keys();
        var d3_svg_symbolSqrt3 = Math.sqrt(3), d3_svg_symbolTan30 = Math.tan(30 * d3_radians);
        d3_selectionPrototype.transition = function(name) {
          var id = d3_transitionInheritId || ++d3_transitionId, ns = d3_transitionNamespace(name), subgroups = [], subgroup, node, transition = d3_transitionInherit || {
            time: Date.now(),
            ease: d3_ease_cubicInOut,
            delay: 0,
            duration: 250
          };
          for (var j = -1, m = this.length; ++j < m; ) {
            subgroups.push(subgroup = []);
            for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
              if (node = group[i]) d3_transitionNode(node, i, ns, id, transition);
              subgroup.push(node);
            }
          }
          return d3_transition(subgroups, ns, id);
        };
        d3_selectionPrototype.interrupt = function(name) {
          return this.each(name == null ? d3_selection_interrupt : d3_selection_interruptNS(d3_transitionNamespace(name)));
        };
        var d3_selection_interrupt = d3_selection_interruptNS(d3_transitionNamespace());
        function d3_selection_interruptNS(ns) {
          return function() {
            var lock, activeId, active;
            if ((lock = this[ns]) && (active = lock[activeId = lock.active])) {
              active.timer.c = null;
              active.timer.t = NaN;
              if (--lock.count) delete lock[activeId];
              else delete this[ns];
              lock.active += 0.5;
              active.event && active.event.interrupt.call(this, this.__data__, active.index);
            }
          };
        }
        function d3_transition(groups, ns, id) {
          d3_subclass(groups, d3_transitionPrototype);
          groups.namespace = ns;
          groups.id = id;
          return groups;
        }
        var d3_transitionPrototype = [], d3_transitionId = 0, d3_transitionInheritId, d3_transitionInherit;
        d3_transitionPrototype.call = d3_selectionPrototype.call;
        d3_transitionPrototype.empty = d3_selectionPrototype.empty;
        d3_transitionPrototype.node = d3_selectionPrototype.node;
        d3_transitionPrototype.size = d3_selectionPrototype.size;
        d32.transition = function(selection, name) {
          return selection && selection.transition ? d3_transitionInheritId ? selection.transition(name) : selection : d32.selection().transition(selection);
        };
        d32.transition.prototype = d3_transitionPrototype;
        d3_transitionPrototype.select = function(selector) {
          var id = this.id, ns = this.namespace, subgroups = [], subgroup, subnode, node;
          selector = d3_selection_selector(selector);
          for (var j = -1, m = this.length; ++j < m; ) {
            subgroups.push(subgroup = []);
            for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
              if ((node = group[i]) && (subnode = selector.call(node, node.__data__, i, j))) {
                if ("__data__" in node) subnode.__data__ = node.__data__;
                d3_transitionNode(subnode, i, ns, id, node[ns][id]);
                subgroup.push(subnode);
              } else {
                subgroup.push(null);
              }
            }
          }
          return d3_transition(subgroups, ns, id);
        };
        d3_transitionPrototype.selectAll = function(selector) {
          var id = this.id, ns = this.namespace, subgroups = [], subgroup, subnodes, node, subnode, transition;
          selector = d3_selection_selectorAll(selector);
          for (var j = -1, m = this.length; ++j < m; ) {
            for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
              if (node = group[i]) {
                transition = node[ns][id];
                subnodes = selector.call(node, node.__data__, i, j);
                subgroups.push(subgroup = []);
                for (var k = -1, o = subnodes.length; ++k < o; ) {
                  if (subnode = subnodes[k]) d3_transitionNode(subnode, k, ns, id, transition);
                  subgroup.push(subnode);
                }
              }
            }
          }
          return d3_transition(subgroups, ns, id);
        };
        d3_transitionPrototype.filter = function(filter3) {
          var subgroups = [], subgroup, group, node;
          if (typeof filter3 !== "function") filter3 = d3_selection_filter(filter3);
          for (var j = 0, m = this.length; j < m; j++) {
            subgroups.push(subgroup = []);
            for (var group = this[j], i = 0, n = group.length; i < n; i++) {
              if ((node = group[i]) && filter3.call(node, node.__data__, i, j)) {
                subgroup.push(node);
              }
            }
          }
          return d3_transition(subgroups, this.namespace, this.id);
        };
        d3_transitionPrototype.tween = function(name, tween) {
          var id = this.id, ns = this.namespace;
          if (arguments.length < 2) return this.node()[ns][id].tween.get(name);
          return d3_selection_each(this, tween == null ? function(node) {
            node[ns][id].tween.remove(name);
          } : function(node) {
            node[ns][id].tween.set(name, tween);
          });
        };
        function d3_transition_tween(groups, name, value, tween) {
          var id = groups.id, ns = groups.namespace;
          return d3_selection_each(groups, typeof value === "function" ? function(node, i, j) {
            node[ns][id].tween.set(name, tween(value.call(node, node.__data__, i, j)));
          } : (value = tween(value), function(node) {
            node[ns][id].tween.set(name, value);
          }));
        }
        d3_transitionPrototype.attr = function(nameNS, value) {
          if (arguments.length < 2) {
            for (value in nameNS) this.attr(value, nameNS[value]);
            return this;
          }
          var interpolate2 = nameNS == "transform" ? d3_interpolateTransform : d3_interpolate, name = d32.ns.qualify(nameNS);
          function attrNull() {
            this.removeAttribute(name);
          }
          function attrNullNS() {
            this.removeAttributeNS(name.space, name.local);
          }
          function attrTween(b) {
            return b == null ? attrNull : (b += "", function() {
              var a = this.getAttribute(name), i;
              return a !== b && (i = interpolate2(a, b), function(t) {
                this.setAttribute(name, i(t));
              });
            });
          }
          function attrTweenNS(b) {
            return b == null ? attrNullNS : (b += "", function() {
              var a = this.getAttributeNS(name.space, name.local), i;
              return a !== b && (i = interpolate2(a, b), function(t) {
                this.setAttributeNS(name.space, name.local, i(t));
              });
            });
          }
          return d3_transition_tween(this, "attr." + nameNS, value, name.local ? attrTweenNS : attrTween);
        };
        d3_transitionPrototype.attrTween = function(nameNS, tween) {
          var name = d32.ns.qualify(nameNS);
          function attrTween(d, i) {
            var f = tween.call(this, d, i, this.getAttribute(name));
            return f && function(t) {
              this.setAttribute(name, f(t));
            };
          }
          function attrTweenNS(d, i) {
            var f = tween.call(this, d, i, this.getAttributeNS(name.space, name.local));
            return f && function(t) {
              this.setAttributeNS(name.space, name.local, f(t));
            };
          }
          return this.tween("attr." + nameNS, name.local ? attrTweenNS : attrTween);
        };
        d3_transitionPrototype.style = function(name, value, priority) {
          var n = arguments.length;
          if (n < 3) {
            if (typeof name !== "string") {
              if (n < 2) value = "";
              for (priority in name) this.style(priority, name[priority], value);
              return this;
            }
            priority = "";
          }
          function styleNull() {
            this.style.removeProperty(name);
          }
          function styleString(b) {
            return b == null ? styleNull : (b += "", function() {
              var a = d3_window(this).getComputedStyle(this, null).getPropertyValue(name), i;
              return a !== b && (i = d3_interpolate(a, b), function(t) {
                this.style.setProperty(name, i(t), priority);
              });
            });
          }
          return d3_transition_tween(this, "style." + name, value, styleString);
        };
        d3_transitionPrototype.styleTween = function(name, tween, priority) {
          if (arguments.length < 3) priority = "";
          function styleTween(d, i) {
            var f = tween.call(this, d, i, d3_window(this).getComputedStyle(this, null).getPropertyValue(name));
            return f && function(t) {
              this.style.setProperty(name, f(t), priority);
            };
          }
          return this.tween("style." + name, styleTween);
        };
        d3_transitionPrototype.text = function(value) {
          return d3_transition_tween(this, "text", value, d3_transition_text);
        };
        function d3_transition_text(b) {
          if (b == null) b = "";
          return function() {
            this.textContent = b;
          };
        }
        d3_transitionPrototype.remove = function() {
          var ns = this.namespace;
          return this.each("end.transition", function() {
            var p;
            if (this[ns].count < 2 && (p = this.parentNode)) p.removeChild(this);
          });
        };
        d3_transitionPrototype.ease = function(value) {
          var id = this.id, ns = this.namespace;
          if (arguments.length < 1) return this.node()[ns][id].ease;
          if (typeof value !== "function") value = d32.ease.apply(d32, arguments);
          return d3_selection_each(this, function(node) {
            node[ns][id].ease = value;
          });
        };
        d3_transitionPrototype.delay = function(value) {
          var id = this.id, ns = this.namespace;
          if (arguments.length < 1) return this.node()[ns][id].delay;
          return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
            node[ns][id].delay = +value.call(node, node.__data__, i, j);
          } : (value = +value, function(node) {
            node[ns][id].delay = value;
          }));
        };
        d3_transitionPrototype.duration = function(value) {
          var id = this.id, ns = this.namespace;
          if (arguments.length < 1) return this.node()[ns][id].duration;
          return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
            node[ns][id].duration = Math.max(1, value.call(node, node.__data__, i, j));
          } : (value = Math.max(1, value), function(node) {
            node[ns][id].duration = value;
          }));
        };
        d3_transitionPrototype.each = function(type, listener) {
          var id = this.id, ns = this.namespace;
          if (arguments.length < 2) {
            var inherit = d3_transitionInherit, inheritId = d3_transitionInheritId;
            try {
              d3_transitionInheritId = id;
              d3_selection_each(this, function(node, i, j) {
                d3_transitionInherit = node[ns][id];
                type.call(node, node.__data__, i, j);
              });
            } finally {
              d3_transitionInherit = inherit;
              d3_transitionInheritId = inheritId;
            }
          } else {
            d3_selection_each(this, function(node) {
              var transition = node[ns][id];
              (transition.event || (transition.event = d32.dispatch("start", "end", "interrupt"))).on(type, listener);
            });
          }
          return this;
        };
        d3_transitionPrototype.transition = function() {
          var id0 = this.id, id1 = ++d3_transitionId, ns = this.namespace, subgroups = [], subgroup, group, node, transition;
          for (var j = 0, m = this.length; j < m; j++) {
            subgroups.push(subgroup = []);
            for (var group = this[j], i = 0, n = group.length; i < n; i++) {
              if (node = group[i]) {
                transition = node[ns][id0];
                d3_transitionNode(node, i, ns, id1, {
                  time: transition.time,
                  ease: transition.ease,
                  delay: transition.delay + transition.duration,
                  duration: transition.duration
                });
              }
              subgroup.push(node);
            }
          }
          return d3_transition(subgroups, ns, id1);
        };
        function d3_transitionNamespace(name) {
          return name == null ? "__transition__" : "__transition_" + name + "__";
        }
        function d3_transitionNode(node, i, ns, id, inherit) {
          var lock = node[ns] || (node[ns] = {
            active: 0,
            count: 0
          }), transition = lock[id], time, timer, duration, ease, tweens;
          function schedule(elapsed) {
            var delay = transition.delay;
            timer.t = delay + time;
            if (delay <= elapsed) return start(elapsed - delay);
            timer.c = start;
          }
          function start(elapsed) {
            var activeId = lock.active, active = lock[activeId];
            if (active) {
              active.timer.c = null;
              active.timer.t = NaN;
              --lock.count;
              delete lock[activeId];
              active.event && active.event.interrupt.call(node, node.__data__, active.index);
            }
            for (var cancelId in lock) {
              if (+cancelId < id) {
                var cancel = lock[cancelId];
                cancel.timer.c = null;
                cancel.timer.t = NaN;
                --lock.count;
                delete lock[cancelId];
              }
            }
            timer.c = tick;
            d3_timer(function() {
              if (timer.c && tick(elapsed || 1)) {
                timer.c = null;
                timer.t = NaN;
              }
              return 1;
            }, 0, time);
            lock.active = id;
            transition.event && transition.event.start.call(node, node.__data__, i);
            tweens = [];
            transition.tween.forEach(function(key2, value) {
              if (value = value.call(node, node.__data__, i)) {
                tweens.push(value);
              }
            });
            ease = transition.ease;
            duration = transition.duration;
          }
          function tick(elapsed) {
            var t = elapsed / duration, e = ease(t), n = tweens.length;
            while (n > 0) {
              tweens[--n].call(node, e);
            }
            if (t >= 1) {
              transition.event && transition.event.end.call(node, node.__data__, i);
              if (--lock.count) delete lock[id];
              else delete node[ns];
              return 1;
            }
          }
          if (!transition) {
            time = inherit.time;
            timer = d3_timer(schedule, 0, time);
            transition = lock[id] = {
              tween: new d3_Map(),
              time,
              timer,
              delay: inherit.delay,
              duration: inherit.duration,
              ease: inherit.ease,
              index: i
            };
            inherit = null;
            ++lock.count;
          }
        }
        d32.svg.axis = function() {
          var scale2 = d32.scale.linear(), orient = d3_svg_axisDefaultOrient, innerTickSize = 6, outerTickSize = 6, tickPadding = 3, tickArguments_ = [10], tickValues = null, tickFormat_;
          function axis(g) {
            g.each(function() {
              var g2 = d32.select(this);
              var scale0 = this.__chart__ || scale2, scale1 = this.__chart__ = scale2.copy();
              var ticks = tickValues == null ? scale1.ticks ? scale1.ticks.apply(scale1, tickArguments_) : scale1.domain() : tickValues, tickFormat = tickFormat_ == null ? scale1.tickFormat ? scale1.tickFormat.apply(scale1, tickArguments_) : d3_identity : tickFormat_, tick = g2.selectAll(".tick").data(ticks, scale1), tickEnter = tick.enter().insert("g", ".domain").attr("class", "tick").style("opacity", \u03B5), tickExit = d32.transition(tick.exit()).style("opacity", \u03B5).remove(), tickUpdate = d32.transition(tick.order()).style("opacity", 1), tickSpacing = Math.max(innerTickSize, 0) + tickPadding, tickTransform;
              var range2 = d3_scaleRange(scale1), path = g2.selectAll(".domain").data([0]), pathUpdate = (path.enter().append("path").attr("class", "domain"), d32.transition(path));
              tickEnter.append("line");
              tickEnter.append("text");
              var lineEnter = tickEnter.select("line"), lineUpdate = tickUpdate.select("line"), text = tick.select("text").text(tickFormat), textEnter = tickEnter.select("text"), textUpdate = tickUpdate.select("text"), sign2 = orient === "top" || orient === "left" ? -1 : 1, x1, x2, y1, y2;
              if (orient === "bottom" || orient === "top") {
                tickTransform = d3_svg_axisX, x1 = "x", y1 = "y", x2 = "x2", y2 = "y2";
                text.attr("dy", sign2 < 0 ? "0em" : ".71em").style("text-anchor", "middle");
                pathUpdate.attr("d", "M" + range2[0] + "," + sign2 * outerTickSize + "V0H" + range2[1] + "V" + sign2 * outerTickSize);
              } else {
                tickTransform = d3_svg_axisY, x1 = "y", y1 = "x", x2 = "y2", y2 = "x2";
                text.attr("dy", ".32em").style("text-anchor", sign2 < 0 ? "end" : "start");
                pathUpdate.attr("d", "M" + sign2 * outerTickSize + "," + range2[0] + "H0V" + range2[1] + "H" + sign2 * outerTickSize);
              }
              lineEnter.attr(y2, sign2 * innerTickSize);
              textEnter.attr(y1, sign2 * tickSpacing);
              lineUpdate.attr(x2, 0).attr(y2, sign2 * innerTickSize);
              textUpdate.attr(x1, 0).attr(y1, sign2 * tickSpacing);
              if (scale1.rangeBand) {
                var x = scale1, dx = x.rangeBand() / 2;
                scale0 = scale1 = function(d) {
                  return x(d) + dx;
                };
              } else if (scale0.rangeBand) {
                scale0 = scale1;
              } else {
                tickExit.call(tickTransform, scale1, scale0);
              }
              tickEnter.call(tickTransform, scale0, scale1);
              tickUpdate.call(tickTransform, scale1, scale1);
            });
          }
          axis.scale = function(x) {
            if (!arguments.length) return scale2;
            scale2 = x;
            return axis;
          };
          axis.orient = function(x) {
            if (!arguments.length) return orient;
            orient = x in d3_svg_axisOrients ? x + "" : d3_svg_axisDefaultOrient;
            return axis;
          };
          axis.ticks = function() {
            if (!arguments.length) return tickArguments_;
            tickArguments_ = d3_array(arguments);
            return axis;
          };
          axis.tickValues = function(x) {
            if (!arguments.length) return tickValues;
            tickValues = x;
            return axis;
          };
          axis.tickFormat = function(x) {
            if (!arguments.length) return tickFormat_;
            tickFormat_ = x;
            return axis;
          };
          axis.tickSize = function(x) {
            var n = arguments.length;
            if (!n) return innerTickSize;
            innerTickSize = +x;
            outerTickSize = +arguments[n - 1];
            return axis;
          };
          axis.innerTickSize = function(x) {
            if (!arguments.length) return innerTickSize;
            innerTickSize = +x;
            return axis;
          };
          axis.outerTickSize = function(x) {
            if (!arguments.length) return outerTickSize;
            outerTickSize = +x;
            return axis;
          };
          axis.tickPadding = function(x) {
            if (!arguments.length) return tickPadding;
            tickPadding = +x;
            return axis;
          };
          axis.tickSubdivide = function() {
            return arguments.length && axis;
          };
          return axis;
        };
        var d3_svg_axisDefaultOrient = "bottom", d3_svg_axisOrients = {
          top: 1,
          right: 1,
          bottom: 1,
          left: 1
        };
        function d3_svg_axisX(selection, x0, x1) {
          selection.attr("transform", function(d) {
            var v0 = x0(d);
            return "translate(" + (isFinite(v0) ? v0 : x1(d)) + ",0)";
          });
        }
        function d3_svg_axisY(selection, y0, y1) {
          selection.attr("transform", function(d) {
            var v0 = y0(d);
            return "translate(0," + (isFinite(v0) ? v0 : y1(d)) + ")";
          });
        }
        d32.svg.brush = function() {
          var event = d3_eventDispatch(brush, "brushstart", "brush", "brushend"), x = null, y = null, xExtent = [0, 0], yExtent = [0, 0], xExtentDomain, yExtentDomain, xClamp = true, yClamp = true, resizes = d3_svg_brushResizes[0];
          function brush(g) {
            g.each(function() {
              var g2 = d32.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", brushstart).on("touchstart.brush", brushstart);
              var background = g2.selectAll(".background").data([0]);
              background.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair");
              g2.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
              var resize = g2.selectAll(".resize").data(resizes, d3_identity);
              resize.exit().remove();
              resize.enter().append("g").attr("class", function(d) {
                return "resize " + d;
              }).style("cursor", function(d) {
                return d3_svg_brushCursor[d];
              }).append("rect").attr("x", function(d) {
                return /[ew]$/.test(d) ? -3 : null;
              }).attr("y", function(d) {
                return /^[ns]/.test(d) ? -3 : null;
              }).attr("width", 6).attr("height", 6).style("visibility", "hidden");
              resize.style("display", brush.empty() ? "none" : null);
              var gUpdate = d32.transition(g2), backgroundUpdate = d32.transition(background), range2;
              if (x) {
                range2 = d3_scaleRange(x);
                backgroundUpdate.attr("x", range2[0]).attr("width", range2[1] - range2[0]);
                redrawX(gUpdate);
              }
              if (y) {
                range2 = d3_scaleRange(y);
                backgroundUpdate.attr("y", range2[0]).attr("height", range2[1] - range2[0]);
                redrawY(gUpdate);
              }
              redraw(gUpdate);
            });
          }
          brush.event = function(g) {
            g.each(function() {
              var event_ = event.of(this, arguments), extent1 = {
                x: xExtent,
                y: yExtent,
                i: xExtentDomain,
                j: yExtentDomain
              }, extent0 = this.__chart__ || extent1;
              this.__chart__ = extent1;
              if (d3_transitionInheritId) {
                d32.select(this).transition().each("start.brush", function() {
                  xExtentDomain = extent0.i;
                  yExtentDomain = extent0.j;
                  xExtent = extent0.x;
                  yExtent = extent0.y;
                  event_({
                    type: "brushstart"
                  });
                }).tween("brush:brush", function() {
                  var xi = d3_interpolateArray(xExtent, extent1.x), yi = d3_interpolateArray(yExtent, extent1.y);
                  xExtentDomain = yExtentDomain = null;
                  return function(t) {
                    xExtent = extent1.x = xi(t);
                    yExtent = extent1.y = yi(t);
                    event_({
                      type: "brush",
                      mode: "resize"
                    });
                  };
                }).each("end.brush", function() {
                  xExtentDomain = extent1.i;
                  yExtentDomain = extent1.j;
                  event_({
                    type: "brush",
                    mode: "resize"
                  });
                  event_({
                    type: "brushend"
                  });
                });
              } else {
                event_({
                  type: "brushstart"
                });
                event_({
                  type: "brush",
                  mode: "resize"
                });
                event_({
                  type: "brushend"
                });
              }
            });
          };
          function redraw(g) {
            g.selectAll(".resize").attr("transform", function(d) {
              return "translate(" + xExtent[+/e$/.test(d)] + "," + yExtent[+/^s/.test(d)] + ")";
            });
          }
          function redrawX(g) {
            g.select(".extent").attr("x", xExtent[0]);
            g.selectAll(".extent,.n>rect,.s>rect").attr("width", xExtent[1] - xExtent[0]);
          }
          function redrawY(g) {
            g.select(".extent").attr("y", yExtent[0]);
            g.selectAll(".extent,.e>rect,.w>rect").attr("height", yExtent[1] - yExtent[0]);
          }
          function brushstart() {
            var target = this, eventTarget = d32.select(d32.event.target), event_ = event.of(target, arguments), g = d32.select(target), resizing = eventTarget.datum(), resizingX = !/^(n|s)$/.test(resizing) && x, resizingY = !/^(e|w)$/.test(resizing) && y, dragging = eventTarget.classed("extent"), dragRestore = d3_event_dragSuppress(target), center, origin = d32.mouse(target), offset;
            var w = d32.select(d3_window(target)).on("keydown.brush", keydown).on("keyup.brush", keyup);
            if (d32.event.changedTouches) {
              w.on("touchmove.brush", brushmove).on("touchend.brush", brushend);
            } else {
              w.on("mousemove.brush", brushmove).on("mouseup.brush", brushend);
            }
            g.interrupt().selectAll("*").interrupt();
            if (dragging) {
              origin[0] = xExtent[0] - origin[0];
              origin[1] = yExtent[0] - origin[1];
            } else if (resizing) {
              var ex = +/w$/.test(resizing), ey = +/^n/.test(resizing);
              offset = [xExtent[1 - ex] - origin[0], yExtent[1 - ey] - origin[1]];
              origin[0] = xExtent[ex];
              origin[1] = yExtent[ey];
            } else if (d32.event.altKey) center = origin.slice();
            g.style("pointer-events", "none").selectAll(".resize").style("display", null);
            d32.select("body").style("cursor", eventTarget.style("cursor"));
            event_({
              type: "brushstart"
            });
            brushmove();
            function keydown() {
              if (d32.event.keyCode == 32) {
                if (!dragging) {
                  center = null;
                  origin[0] -= xExtent[1];
                  origin[1] -= yExtent[1];
                  dragging = 2;
                }
                d3_eventPreventDefault();
              }
            }
            function keyup() {
              if (d32.event.keyCode == 32 && dragging == 2) {
                origin[0] += xExtent[1];
                origin[1] += yExtent[1];
                dragging = 0;
                d3_eventPreventDefault();
              }
            }
            function brushmove() {
              var point = d32.mouse(target), moved = false;
              if (offset) {
                point[0] += offset[0];
                point[1] += offset[1];
              }
              if (!dragging) {
                if (d32.event.altKey) {
                  if (!center) center = [(xExtent[0] + xExtent[1]) / 2, (yExtent[0] + yExtent[1]) / 2];
                  origin[0] = xExtent[+(point[0] < center[0])];
                  origin[1] = yExtent[+(point[1] < center[1])];
                } else center = null;
              }
              if (resizingX && move1(point, x, 0)) {
                redrawX(g);
                moved = true;
              }
              if (resizingY && move1(point, y, 1)) {
                redrawY(g);
                moved = true;
              }
              if (moved) {
                redraw(g);
                event_({
                  type: "brush",
                  mode: dragging ? "move" : "resize"
                });
              }
            }
            function move1(point, scale2, i) {
              var range2 = d3_scaleRange(scale2), r0 = range2[0], r1 = range2[1], position = origin[i], extent = i ? yExtent : xExtent, size2 = extent[1] - extent[0], min3, max3;
              if (dragging) {
                r0 -= position;
                r1 -= size2 + position;
              }
              min3 = (i ? yClamp : xClamp) ? Math.max(r0, Math.min(r1, point[i])) : point[i];
              if (dragging) {
                max3 = (min3 += position) + size2;
              } else {
                if (center) position = Math.max(r0, Math.min(r1, 2 * center[i] - min3));
                if (position < min3) {
                  max3 = min3;
                  min3 = position;
                } else {
                  max3 = position;
                }
              }
              if (extent[0] != min3 || extent[1] != max3) {
                if (i) yExtentDomain = null;
                else xExtentDomain = null;
                extent[0] = min3;
                extent[1] = max3;
                return true;
              }
            }
            function brushend() {
              brushmove();
              g.style("pointer-events", "all").selectAll(".resize").style("display", brush.empty() ? "none" : null);
              d32.select("body").style("cursor", null);
              w.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null);
              dragRestore();
              event_({
                type: "brushend"
              });
            }
          }
          brush.x = function(z) {
            if (!arguments.length) return x;
            x = z;
            resizes = d3_svg_brushResizes[!x << 1 | !y];
            return brush;
          };
          brush.y = function(z) {
            if (!arguments.length) return y;
            y = z;
            resizes = d3_svg_brushResizes[!x << 1 | !y];
            return brush;
          };
          brush.clamp = function(z) {
            if (!arguments.length) return x && y ? [xClamp, yClamp] : x ? xClamp : y ? yClamp : null;
            if (x && y) xClamp = !!z[0], yClamp = !!z[1];
            else if (x) xClamp = !!z;
            else if (y) yClamp = !!z;
            return brush;
          };
          brush.extent = function(z) {
            var x0, x1, y0, y1, t;
            if (!arguments.length) {
              if (x) {
                if (xExtentDomain) {
                  x0 = xExtentDomain[0], x1 = xExtentDomain[1];
                } else {
                  x0 = xExtent[0], x1 = xExtent[1];
                  if (x.invert) x0 = x.invert(x0), x1 = x.invert(x1);
                  if (x1 < x0) t = x0, x0 = x1, x1 = t;
                }
              }
              if (y) {
                if (yExtentDomain) {
                  y0 = yExtentDomain[0], y1 = yExtentDomain[1];
                } else {
                  y0 = yExtent[0], y1 = yExtent[1];
                  if (y.invert) y0 = y.invert(y0), y1 = y.invert(y1);
                  if (y1 < y0) t = y0, y0 = y1, y1 = t;
                }
              }
              return x && y ? [[x0, y0], [x1, y1]] : x ? [x0, x1] : y && [y0, y1];
            }
            if (x) {
              x0 = z[0], x1 = z[1];
              if (y) x0 = x0[0], x1 = x1[0];
              xExtentDomain = [x0, x1];
              if (x.invert) x0 = x(x0), x1 = x(x1);
              if (x1 < x0) t = x0, x0 = x1, x1 = t;
              if (x0 != xExtent[0] || x1 != xExtent[1]) xExtent = [x0, x1];
            }
            if (y) {
              y0 = z[0], y1 = z[1];
              if (x) y0 = y0[1], y1 = y1[1];
              yExtentDomain = [y0, y1];
              if (y.invert) y0 = y(y0), y1 = y(y1);
              if (y1 < y0) t = y0, y0 = y1, y1 = t;
              if (y0 != yExtent[0] || y1 != yExtent[1]) yExtent = [y0, y1];
            }
            return brush;
          };
          brush.clear = function() {
            if (!brush.empty()) {
              xExtent = [0, 0], yExtent = [0, 0];
              xExtentDomain = yExtentDomain = null;
            }
            return brush;
          };
          brush.empty = function() {
            return !!x && xExtent[0] == xExtent[1] || !!y && yExtent[0] == yExtent[1];
          };
          return d32.rebind(brush, event, "on");
        };
        var d3_svg_brushCursor = {
          n: "ns-resize",
          e: "ew-resize",
          s: "ns-resize",
          w: "ew-resize",
          nw: "nwse-resize",
          ne: "nesw-resize",
          se: "nwse-resize",
          sw: "nesw-resize"
        };
        var d3_svg_brushResizes = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []];
        var d3_time_format = d3_time.format = d3_locale_enUS.timeFormat;
        var d3_time_formatUtc = d3_time_format.utc;
        var d3_time_formatIso = d3_time_formatUtc("%Y-%m-%dT%H:%M:%S.%LZ");
        d3_time_format.iso = Date.prototype.toISOString && +/* @__PURE__ */ new Date("2000-01-01T00:00:00.000Z") ? d3_time_formatIsoNative : d3_time_formatIso;
        function d3_time_formatIsoNative(date) {
          return date.toISOString();
        }
        d3_time_formatIsoNative.parse = function(string) {
          var date = new Date(string);
          return isNaN(date) ? null : date;
        };
        d3_time_formatIsoNative.toString = d3_time_formatIso.toString;
        d3_time.second = d3_time_interval(function(date) {
          return new d3_date(Math.floor(date / 1e3) * 1e3);
        }, function(date, offset) {
          date.setTime(date.getTime() + Math.floor(offset) * 1e3);
        }, function(date) {
          return date.getSeconds();
        });
        d3_time.seconds = d3_time.second.range;
        d3_time.seconds.utc = d3_time.second.utc.range;
        d3_time.minute = d3_time_interval(function(date) {
          return new d3_date(Math.floor(date / 6e4) * 6e4);
        }, function(date, offset) {
          date.setTime(date.getTime() + Math.floor(offset) * 6e4);
        }, function(date) {
          return date.getMinutes();
        });
        d3_time.minutes = d3_time.minute.range;
        d3_time.minutes.utc = d3_time.minute.utc.range;
        d3_time.hour = d3_time_interval(function(date) {
          var timezone = date.getTimezoneOffset() / 60;
          return new d3_date((Math.floor(date / 36e5 - timezone) + timezone) * 36e5);
        }, function(date, offset) {
          date.setTime(date.getTime() + Math.floor(offset) * 36e5);
        }, function(date) {
          return date.getHours();
        });
        d3_time.hours = d3_time.hour.range;
        d3_time.hours.utc = d3_time.hour.utc.range;
        d3_time.month = d3_time_interval(function(date) {
          date = d3_time.day(date);
          date.setDate(1);
          return date;
        }, function(date, offset) {
          date.setMonth(date.getMonth() + offset);
        }, function(date) {
          return date.getMonth();
        });
        d3_time.months = d3_time.month.range;
        d3_time.months.utc = d3_time.month.utc.range;
        function d3_time_scale(linear, methods, format2) {
          function scale2(x) {
            return linear(x);
          }
          scale2.invert = function(x) {
            return d3_time_scaleDate(linear.invert(x));
          };
          scale2.domain = function(x) {
            if (!arguments.length) return linear.domain().map(d3_time_scaleDate);
            linear.domain(x);
            return scale2;
          };
          function tickMethod(extent, count) {
            var span = extent[1] - extent[0], target = span / count, i = d32.bisect(d3_time_scaleSteps, target);
            return i == d3_time_scaleSteps.length ? [methods.year, d3_scale_linearTickRange(extent.map(function(d) {
              return d / 31536e6;
            }), count)[2]] : !i ? [d3_time_scaleMilliseconds, d3_scale_linearTickRange(extent, count)[2]] : methods[target / d3_time_scaleSteps[i - 1] < d3_time_scaleSteps[i] / target ? i - 1 : i];
          }
          scale2.nice = function(interval, skip) {
            var domain = scale2.domain(), extent = d3_scaleExtent(domain), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" && tickMethod(extent, interval);
            if (method) interval = method[0], skip = method[1];
            function skipped(date) {
              return !isNaN(date) && !interval.range(date, d3_time_scaleDate(+date + 1), skip).length;
            }
            return scale2.domain(d3_scale_nice(domain, skip > 1 ? {
              floor: function(date) {
                while (skipped(date = interval.floor(date))) date = d3_time_scaleDate(date - 1);
                return date;
              },
              ceil: function(date) {
                while (skipped(date = interval.ceil(date))) date = d3_time_scaleDate(+date + 1);
                return date;
              }
            } : interval));
          };
          scale2.ticks = function(interval, skip) {
            var extent = d3_scaleExtent(scale2.domain()), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" ? tickMethod(extent, interval) : !interval.range && [{
              range: interval
            }, skip];
            if (method) interval = method[0], skip = method[1];
            return interval.range(extent[0], d3_time_scaleDate(+extent[1] + 1), skip < 1 ? 1 : skip);
          };
          scale2.tickFormat = function() {
            return format2;
          };
          scale2.copy = function() {
            return d3_time_scale(linear.copy(), methods, format2);
          };
          return d3_scale_linearRebind(scale2, linear);
        }
        function d3_time_scaleDate(t) {
          return new Date(t);
        }
        var d3_time_scaleSteps = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6];
        var d3_time_scaleLocalMethods = [[d3_time.second, 1], [d3_time.second, 5], [d3_time.second, 15], [d3_time.second, 30], [d3_time.minute, 1], [d3_time.minute, 5], [d3_time.minute, 15], [d3_time.minute, 30], [d3_time.hour, 1], [d3_time.hour, 3], [d3_time.hour, 6], [d3_time.hour, 12], [d3_time.day, 1], [d3_time.day, 2], [d3_time.week, 1], [d3_time.month, 1], [d3_time.month, 3], [d3_time.year, 1]];
        var d3_time_scaleLocalFormat = d3_time_format.multi([[".%L", function(d) {
          return d.getMilliseconds();
        }], [":%S", function(d) {
          return d.getSeconds();
        }], ["%I:%M", function(d) {
          return d.getMinutes();
        }], ["%I %p", function(d) {
          return d.getHours();
        }], ["%a %d", function(d) {
          return d.getDay() && d.getDate() != 1;
        }], ["%b %d", function(d) {
          return d.getDate() != 1;
        }], ["%B", function(d) {
          return d.getMonth();
        }], ["%Y", d3_true]]);
        var d3_time_scaleMilliseconds = {
          range: function(start, stop, step) {
            return d32.range(Math.ceil(start / step) * step, +stop, step).map(d3_time_scaleDate);
          },
          floor: d3_identity,
          ceil: d3_identity
        };
        d3_time_scaleLocalMethods.year = d3_time.year;
        d3_time.scale = function() {
          return d3_time_scale(d32.scale.linear(), d3_time_scaleLocalMethods, d3_time_scaleLocalFormat);
        };
        var d3_time_scaleUtcMethods = d3_time_scaleLocalMethods.map(function(m) {
          return [m[0].utc, m[1]];
        });
        var d3_time_scaleUtcFormat = d3_time_formatUtc.multi([[".%L", function(d) {
          return d.getUTCMilliseconds();
        }], [":%S", function(d) {
          return d.getUTCSeconds();
        }], ["%I:%M", function(d) {
          return d.getUTCMinutes();
        }], ["%I %p", function(d) {
          return d.getUTCHours();
        }], ["%a %d", function(d) {
          return d.getUTCDay() && d.getUTCDate() != 1;
        }], ["%b %d", function(d) {
          return d.getUTCDate() != 1;
        }], ["%B", function(d) {
          return d.getUTCMonth();
        }], ["%Y", d3_true]]);
        d3_time_scaleUtcMethods.year = d3_time.year.utc;
        d3_time.scale.utc = function() {
          return d3_time_scale(d32.scale.linear(), d3_time_scaleUtcMethods, d3_time_scaleUtcFormat);
        };
        d32.text = d3_xhrType(function(request) {
          return request.responseText;
        });
        d32.json = function(url, callback) {
          return d3_xhr(url, "application/json", d3_json, callback);
        };
        function d3_json(request) {
          return JSON.parse(request.responseText);
        }
        d32.html = function(url, callback) {
          return d3_xhr(url, "text/html", d3_html, callback);
        };
        function d3_html(request) {
          var range2 = d3_document.createRange();
          range2.selectNode(d3_document.body);
          return range2.createContextualFragment(request.responseText);
        }
        d32.xml = d3_xhrType(function(request) {
          return request.responseXML;
        });
        if (typeof define === "function" && define.amd) this.d3 = d32, define(d32);
        else if (typeof module === "object" && module.exports) module.exports = d32;
        else this.d3 = d32;
      })();
    }
  });

  // node_modules/jquery/dist-module/jquery.module.js
  function jQueryFactory(window2, noGlobal) {
    if (typeof window2 === "undefined" || !window2.document) {
      throw new Error("jQuery requires a window with a document");
    }
    var arr = [];
    var getProto = Object.getPrototypeOf;
    var slice3 = arr.slice;
    var flat = arr.flat ? function(array) {
      return arr.flat.call(array);
    } : function(array) {
      return arr.concat.apply([], array);
    };
    var push2 = arr.push;
    var indexOf2 = arr.indexOf;
    var class2type = {};
    var toString = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    var fnToString = hasOwn.toString;
    var ObjectFunctionString = fnToString.call(Object);
    var support = {};
    function toType(obj) {
      if (obj == null) {
        return obj + "";
      }
      return typeof obj === "object" ? class2type[toString.call(obj)] || "object" : typeof obj;
    }
    function isWindow(obj) {
      return obj != null && obj === obj.window;
    }
    function isArrayLike(obj) {
      var length4 = !!obj && obj.length, type = toType(obj);
      if (typeof obj === "function" || isWindow(obj)) {
        return false;
      }
      return type === "array" || length4 === 0 || typeof length4 === "number" && length4 > 0 && length4 - 1 in obj;
    }
    var document$1 = window2.document;
    var preservedScriptAttributes = {
      type: true,
      src: true,
      nonce: true,
      noModule: true
    };
    function DOMEval(code, node, doc) {
      doc = doc || document$1;
      var i2, script = doc.createElement("script");
      script.text = code;
      for (i2 in preservedScriptAttributes) {
        if (node && node[i2]) {
          script[i2] = node[i2];
        }
      }
      if (doc.head.appendChild(script).parentNode) {
        script.parentNode.removeChild(script);
      }
    }
    var version = "4.0.0", rhtmlSuffix = /HTML$/i, jQuery2 = function(selector, context) {
      return new jQuery2.fn.init(selector, context);
    };
    jQuery2.fn = jQuery2.prototype = {
      // The current version of jQuery being used
      jquery: version,
      constructor: jQuery2,
      // The default length of a jQuery object is 0
      length: 0,
      toArray: function() {
        return slice3.call(this);
      },
      // Get the Nth element in the matched element set OR
      // Get the whole matched element set as a clean array
      get: function(num) {
        if (num == null) {
          return slice3.call(this);
        }
        return num < 0 ? this[num + this.length] : this[num];
      },
      // Take an array of elements and push it onto the stack
      // (returning the new matched element set)
      pushStack: function(elems) {
        var ret = jQuery2.merge(this.constructor(), elems);
        ret.prevObject = this;
        return ret;
      },
      // Execute a callback for every element in the matched set.
      each: function(callback) {
        return jQuery2.each(this, callback);
      },
      map: function(callback) {
        return this.pushStack(jQuery2.map(this, function(elem4, i2) {
          return callback.call(elem4, i2, elem4);
        }));
      },
      slice: function() {
        return this.pushStack(slice3.apply(this, arguments));
      },
      first: function() {
        return this.eq(0);
      },
      last: function() {
        return this.eq(-1);
      },
      even: function() {
        return this.pushStack(jQuery2.grep(this, function(_elem, i2) {
          return (i2 + 1) % 2;
        }));
      },
      odd: function() {
        return this.pushStack(jQuery2.grep(this, function(_elem, i2) {
          return i2 % 2;
        }));
      },
      eq: function(i2) {
        var len = this.length, j = +i2 + (i2 < 0 ? len : 0);
        return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
      },
      end: function() {
        return this.prevObject || this.constructor();
      }
    };
    jQuery2.extend = jQuery2.fn.extend = function() {
      var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i2 = 1, length4 = arguments.length, deep = false;
      if (typeof target === "boolean") {
        deep = target;
        target = arguments[i2] || {};
        i2++;
      }
      if (typeof target !== "object" && typeof target !== "function") {
        target = {};
      }
      if (i2 === length4) {
        target = this;
        i2--;
      }
      for (; i2 < length4; i2++) {
        if ((options = arguments[i2]) != null) {
          for (name in options) {
            copy = options[name];
            if (name === "__proto__" || target === copy) {
              continue;
            }
            if (deep && copy && (jQuery2.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
              src = target[name];
              if (copyIsArray && !Array.isArray(src)) {
                clone = [];
              } else if (!copyIsArray && !jQuery2.isPlainObject(src)) {
                clone = {};
              } else {
                clone = src;
              }
              copyIsArray = false;
              target[name] = jQuery2.extend(deep, clone, copy);
            } else if (copy !== void 0) {
              target[name] = copy;
            }
          }
        }
      }
      return target;
    };
    jQuery2.extend({
      // Unique for each copy of jQuery on the page
      expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
      // Assume jQuery is ready without the ready module
      isReady: true,
      error: function(msg) {
        throw new Error(msg);
      },
      noop: function() {
      },
      isPlainObject: function(obj) {
        var proto, Ctor;
        if (!obj || toString.call(obj) !== "[object Object]") {
          return false;
        }
        proto = getProto(obj);
        if (!proto) {
          return true;
        }
        Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
        return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
      },
      isEmptyObject: function(obj) {
        var name;
        for (name in obj) {
          return false;
        }
        return true;
      },
      // Evaluates a script in a provided context; falls back to the global one
      // if not specified.
      globalEval: function(code, options, doc) {
        DOMEval(code, { nonce: options && options.nonce }, doc);
      },
      each: function(obj, callback) {
        var length4, i2 = 0;
        if (isArrayLike(obj)) {
          length4 = obj.length;
          for (; i2 < length4; i2++) {
            if (callback.call(obj[i2], i2, obj[i2]) === false) {
              break;
            }
          }
        } else {
          for (i2 in obj) {
            if (callback.call(obj[i2], i2, obj[i2]) === false) {
              break;
            }
          }
        }
        return obj;
      },
      // Retrieve the text value of an array of DOM nodes
      text: function(elem4) {
        var node, ret = "", i2 = 0, nodeType = elem4.nodeType;
        if (!nodeType) {
          while (node = elem4[i2++]) {
            ret += jQuery2.text(node);
          }
        }
        if (nodeType === 1 || nodeType === 11) {
          return elem4.textContent;
        }
        if (nodeType === 9) {
          return elem4.documentElement.textContent;
        }
        if (nodeType === 3 || nodeType === 4) {
          return elem4.nodeValue;
        }
        return ret;
      },
      // results is for internal usage only
      makeArray: function(arr2, results) {
        var ret = results || [];
        if (arr2 != null) {
          if (isArrayLike(Object(arr2))) {
            jQuery2.merge(
              ret,
              typeof arr2 === "string" ? [arr2] : arr2
            );
          } else {
            push2.call(ret, arr2);
          }
        }
        return ret;
      },
      inArray: function(elem4, arr2, i2) {
        return arr2 == null ? -1 : indexOf2.call(arr2, elem4, i2);
      },
      isXMLDoc: function(elem4) {
        var namespace = elem4 && elem4.namespaceURI, docElem = elem4 && (elem4.ownerDocument || elem4).documentElement;
        return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
      },
      // Note: an element does not contain itself
      contains: function(a, b) {
        var bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && // Support: IE 9 - 11+
        // IE doesn't have `contains` on SVG.
        (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      },
      merge: function(first, second) {
        var len = +second.length, j = 0, i2 = first.length;
        for (; j < len; j++) {
          first[i2++] = second[j];
        }
        first.length = i2;
        return first;
      },
      grep: function(elems, callback, invert) {
        var callbackInverse, matches2 = [], i2 = 0, length4 = elems.length, callbackExpect = !invert;
        for (; i2 < length4; i2++) {
          callbackInverse = !callback(elems[i2], i2);
          if (callbackInverse !== callbackExpect) {
            matches2.push(elems[i2]);
          }
        }
        return matches2;
      },
      // arg is for internal usage only
      map: function(elems, callback, arg) {
        var length4, value, i2 = 0, ret = [];
        if (isArrayLike(elems)) {
          length4 = elems.length;
          for (; i2 < length4; i2++) {
            value = callback(elems[i2], i2, arg);
            if (value != null) {
              ret.push(value);
            }
          }
        } else {
          for (i2 in elems) {
            value = callback(elems[i2], i2, arg);
            if (value != null) {
              ret.push(value);
            }
          }
        }
        return flat(ret);
      },
      // A global GUID counter for objects
      guid: 1,
      // jQuery.support is not used in Core but other projects attach their
      // properties to it so it needs to exist.
      support
    });
    if (typeof Symbol === "function") {
      jQuery2.fn[Symbol.iterator] = arr[Symbol.iterator];
    }
    jQuery2.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
      function(_i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
      }
    );
    function nodeName(elem4, name) {
      return elem4.nodeName && elem4.nodeName.toLowerCase() === name.toLowerCase();
    }
    var pop2 = arr.pop;
    var whitespace = "[\\x20\\t\\r\\n\\f]";
    var isIE = document$1.documentMode;
    var rbuggyQSA = isIE && new RegExp(
      // Support: IE 9 - 11+
      // IE's :disabled selector does not pick up the children of disabled fieldsets
      ":enabled|:disabled|\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`
    );
    var rtrimCSS = new RegExp(
      "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
      "g"
    );
    var identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+";
    var rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*");
    var rdescend = new RegExp(whitespace + "|>");
    var rsibling = /[+~]/;
    var documentElement$1 = document$1.documentElement;
    var matches = documentElement$1.matches || documentElement$1.msMatchesSelector;
    function createCache() {
      var keys3 = [];
      function cache(key2, value) {
        if (keys3.push(key2 + " ") > jQuery2.expr.cacheLength) {
          delete cache[keys3.shift()];
        }
        return cache[key2 + " "] = value;
      }
      return cache;
    }
    function testContext(context) {
      return context && typeof context.getElementsByTagName !== "undefined" && context;
    }
    var attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
    "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
    `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]";
    var pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)";
    var filterMatchExpr = {
      ID: new RegExp("^#(" + identifier + ")"),
      CLASS: new RegExp("^\\.(" + identifier + ")"),
      TAG: new RegExp("^(" + identifier + "|[*])"),
      ATTR: new RegExp("^" + attributes),
      PSEUDO: new RegExp("^" + pseudos),
      CHILD: new RegExp(
        "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)",
        "i"
      )
    };
    var rpseudo = new RegExp(pseudos);
    var runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
      var high = "0x" + escape.slice(1) - 65536;
      if (nonHex) {
        return nonHex;
      }
      return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
    };
    function unescapeSelector(sel) {
      return sel.replace(runescape, funescape);
    }
    function selectorError(msg) {
      jQuery2.error("Syntax error, unrecognized expression: " + msg);
    }
    var rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*");
    var tokenCache = createCache();
    function tokenize(selector, parseOnly) {
      var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }
      soFar = selector;
      groups = [];
      preFilters = jQuery2.expr.preFilter;
      while (soFar) {
        if (!matched || (match = rcomma.exec(soFar))) {
          if (match) {
            soFar = soFar.slice(match[0].length) || soFar;
          }
          groups.push(tokens = []);
        }
        matched = false;
        if (match = rleadingCombinator.exec(soFar)) {
          matched = match.shift();
          tokens.push({
            value: matched,
            // Cast descendant combinators to space
            type: match[0].replace(rtrimCSS, " ")
          });
          soFar = soFar.slice(matched.length);
        }
        for (type in filterMatchExpr) {
          if ((match = jQuery2.expr.match[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type,
              matches: match
            });
            soFar = soFar.slice(matched.length);
          }
        }
        if (!matched) {
          break;
        }
      }
      if (parseOnly) {
        return soFar.length;
      }
      return soFar ? selectorError(selector) : (
        // Cache the tokens
        tokenCache(selector, groups).slice(0)
      );
    }
    var preFilter = {
      ATTR: function(match) {
        match[1] = unescapeSelector(match[1]);
        match[3] = unescapeSelector(match[3] || match[4] || match[5] || "");
        if (match[2] === "~=") {
          match[3] = " " + match[3] + " ";
        }
        return match.slice(0, 4);
      },
      CHILD: function(match) {
        match[1] = match[1].toLowerCase();
        if (match[1].slice(0, 3) === "nth") {
          if (!match[3]) {
            selectorError(match[0]);
          }
          match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
          match[5] = +(match[7] + match[8] || match[3] === "odd");
        } else if (match[3]) {
          selectorError(match[0]);
        }
        return match;
      },
      PSEUDO: function(match) {
        var excess, unquoted = !match[6] && match[2];
        if (filterMatchExpr.CHILD.test(match[0])) {
          return null;
        }
        if (match[3]) {
          match[2] = match[4] || match[5] || "";
        } else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
        (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis
        (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
          match[0] = match[0].slice(0, excess);
          match[2] = unquoted.slice(0, excess);
        }
        return match.slice(0, 3);
      }
    };
    function toSelector(tokens) {
      var i2 = 0, len = tokens.length, selector = "";
      for (; i2 < len; i2++) {
        selector += tokens[i2].value;
      }
      return selector;
    }
    function access(elems, fn, key2, value, chainable, emptyGet, raw) {
      var i2 = 0, len = elems.length, bulk = key2 == null;
      if (toType(key2) === "object") {
        chainable = true;
        for (i2 in key2) {
          access(elems, fn, i2, key2[i2], true, emptyGet, raw);
        }
      } else if (value !== void 0) {
        chainable = true;
        if (typeof value !== "function") {
          raw = true;
        }
        if (bulk) {
          if (raw) {
            fn.call(elems, value);
            fn = null;
          } else {
            bulk = fn;
            fn = function(elem4, _key, value2) {
              return bulk.call(jQuery2(elem4), value2);
            };
          }
        }
        if (fn) {
          for (; i2 < len; i2++) {
            fn(
              elems[i2],
              key2,
              raw ? value : value.call(elems[i2], i2, fn(elems[i2], key2))
            );
          }
        }
      }
      if (chainable) {
        return elems;
      }
      if (bulk) {
        return fn.call(elems);
      }
      return len ? fn(elems[0], key2) : emptyGet;
    }
    var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
    jQuery2.fn.extend({
      attr: function(name, value) {
        return access(this, jQuery2.attr, name, value, arguments.length > 1);
      },
      removeAttr: function(name) {
        return this.each(function() {
          jQuery2.removeAttr(this, name);
        });
      }
    });
    jQuery2.extend({
      attr: function(elem4, name, value) {
        var ret, hooks, nType = elem4.nodeType;
        if (nType === 3 || nType === 8 || nType === 2) {
          return;
        }
        if (typeof elem4.getAttribute === "undefined") {
          return jQuery2.prop(elem4, name, value);
        }
        if (nType !== 1 || !jQuery2.isXMLDoc(elem4)) {
          hooks = jQuery2.attrHooks[name.toLowerCase()];
        }
        if (value !== void 0) {
          if (value === null || // For compat with previous handling of boolean attributes,
          // remove when `false` passed. For ARIA attributes -
          // many of which recognize a `"false"` value - continue to
          // set the `"false"` value as jQuery <4 did.
          value === false && name.toLowerCase().indexOf("aria-") !== 0) {
            jQuery2.removeAttr(elem4, name);
            return;
          }
          if (hooks && "set" in hooks && (ret = hooks.set(elem4, value, name)) !== void 0) {
            return ret;
          }
          elem4.setAttribute(name, value);
          return value;
        }
        if (hooks && "get" in hooks && (ret = hooks.get(elem4, name)) !== null) {
          return ret;
        }
        ret = elem4.getAttribute(name);
        return ret == null ? void 0 : ret;
      },
      attrHooks: {},
      removeAttr: function(elem4, value) {
        var name, i2 = 0, attrNames = value && value.match(rnothtmlwhite);
        if (attrNames && elem4.nodeType === 1) {
          while (name = attrNames[i2++]) {
            elem4.removeAttribute(name);
          }
        }
      }
    });
    if (isIE) {
      jQuery2.attrHooks.type = {
        set: function(elem4, value) {
          if (value === "radio" && nodeName(elem4, "input")) {
            var val = elem4.value;
            elem4.setAttribute("type", value);
            if (val) {
              elem4.value = val;
            }
            return value;
          }
        }
      };
    }
    var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    function fcssescape(ch, asCodePoint) {
      if (asCodePoint) {
        if (ch === "\0") {
          return "\uFFFD";
        }
        return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
      }
      return "\\" + ch;
    }
    jQuery2.escapeSelector = function(sel) {
      return (sel + "").replace(rcssescape, fcssescape);
    };
    var sort = arr.sort;
    var splice = arr.splice;
    var hasDuplicate;
    function sortOrder(a, b) {
      if (a === b) {
        hasDuplicate = true;
        return 0;
      }
      var compare3 = !a.compareDocumentPosition - !b.compareDocumentPosition;
      if (compare3) {
        return compare3;
      }
      compare3 = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : (
        // Otherwise we know they are disconnected
        1
      );
      if (compare3 & 1) {
        if (a == document$1 || a.ownerDocument == document$1 && jQuery2.contains(document$1, a)) {
          return -1;
        }
        if (b == document$1 || b.ownerDocument == document$1 && jQuery2.contains(document$1, b)) {
          return 1;
        }
        return 0;
      }
      return compare3 & 4 ? -1 : 1;
    }
    jQuery2.uniqueSort = function(results) {
      var elem4, duplicates = [], j = 0, i2 = 0;
      hasDuplicate = false;
      sort.call(results, sortOrder);
      if (hasDuplicate) {
        while (elem4 = results[i2++]) {
          if (elem4 === results[i2]) {
            j = duplicates.push(i2);
          }
        }
        while (j--) {
          splice.call(results, duplicates[j], 1);
        }
      }
      return results;
    };
    jQuery2.fn.uniqueSort = function() {
      return this.pushStack(jQuery2.uniqueSort(slice3.apply(this)));
    };
    var i, outermostContext, document2, documentElement, documentIsHTML, dirruns = 0, done = 0, classCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), rwhitespace = new RegExp(whitespace + "+", "g"), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = jQuery2.extend({
      // For use in libraries implementing .is()
      // We use this for POS matching in `select`
      needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
    }, filterMatchExpr), rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr$1 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, unloadHandler = function() {
      setDocument();
    }, inDisabledFieldset = addCombinator(
      function(elem4) {
        return elem4.disabled === true && nodeName(elem4, "fieldset");
      },
      { dir: "parentNode", next: "legend" }
    );
    function find2(selector, context, results, seed) {
      var m, i2, elem4, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
      results = results || [];
      if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
        return results;
      }
      if (!seed) {
        setDocument(context);
        context = context || document2;
        if (documentIsHTML) {
          if (nodeType !== 11 && (match = rquickExpr$1.exec(selector))) {
            if (m = match[1]) {
              if (nodeType === 9) {
                if (elem4 = context.getElementById(m)) {
                  push2.call(results, elem4);
                }
                return results;
              } else {
                if (newContext && (elem4 = newContext.getElementById(m)) && jQuery2.contains(context, elem4)) {
                  push2.call(results, elem4);
                  return results;
                }
              }
            } else if (match[2]) {
              push2.apply(results, context.getElementsByTagName(selector));
              return results;
            } else if ((m = match[3]) && context.getElementsByClassName) {
              push2.apply(results, context.getElementsByClassName(m));
              return results;
            }
          }
          if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
            newSelector = selector;
            newContext = context;
            if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
              newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
              if (newContext != context || isIE) {
                if (nid = context.getAttribute("id")) {
                  nid = jQuery2.escapeSelector(nid);
                } else {
                  context.setAttribute("id", nid = jQuery2.expando);
                }
              }
              groups = tokenize(selector);
              i2 = groups.length;
              while (i2--) {
                groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
              }
              newSelector = groups.join(",");
            }
            try {
              push2.apply(
                results,
                newContext.querySelectorAll(newSelector)
              );
              return results;
            } catch (qsaError) {
              nonnativeSelectorCache(selector, true);
            } finally {
              if (nid === jQuery2.expando) {
                context.removeAttribute("id");
              }
            }
          }
        }
      }
      return select2(selector.replace(rtrimCSS, "$1"), context, results, seed);
    }
    function markFunction(fn) {
      fn[jQuery2.expando] = true;
      return fn;
    }
    function createInputPseudo(type) {
      return function(elem4) {
        return nodeName(elem4, "input") && elem4.type === type;
      };
    }
    function createButtonPseudo(type) {
      return function(elem4) {
        return (nodeName(elem4, "input") || nodeName(elem4, "button")) && elem4.type === type;
      };
    }
    function createDisabledPseudo(disabled) {
      return function(elem4) {
        if ("form" in elem4) {
          if (elem4.parentNode && elem4.disabled === false) {
            if ("label" in elem4) {
              if ("label" in elem4.parentNode) {
                return elem4.parentNode.disabled === disabled;
              } else {
                return elem4.disabled === disabled;
              }
            }
            return elem4.isDisabled === disabled || // Where there is no isDisabled, check manually
            elem4.isDisabled !== !disabled && inDisabledFieldset(elem4) === disabled;
          }
          return elem4.disabled === disabled;
        } else if ("label" in elem4) {
          return elem4.disabled === disabled;
        }
        return false;
      };
    }
    function createPositionalPseudo(fn) {
      return markFunction(function(argument) {
        argument = +argument;
        return markFunction(function(seed, matches2) {
          var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
          while (i2--) {
            if (seed[j = matchIndexes[i2]]) {
              seed[j] = !(matches2[j] = seed[j]);
            }
          }
        });
      });
    }
    function setDocument(node) {
      var subWindow, doc = node ? node.ownerDocument || node : document$1;
      if (doc == document2 || doc.nodeType !== 9) {
        return;
      }
      document2 = doc;
      documentElement = document2.documentElement;
      documentIsHTML = !jQuery2.isXMLDoc(document2);
      if (isIE && document$1 != document2 && (subWindow = document2.defaultView) && subWindow.top !== subWindow) {
        subWindow.addEventListener("unload", unloadHandler);
      }
    }
    find2.matches = function(expr, elements) {
      return find2(expr, null, null, elements);
    };
    find2.matchesSelector = function(elem4, expr) {
      setDocument(elem4);
      if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
        try {
          return matches.call(elem4, expr);
        } catch (e) {
          nonnativeSelectorCache(expr, true);
        }
      }
      return find2(expr, document2, null, [elem4]).length > 0;
    };
    jQuery2.expr = {
      // Can be adjusted by the user
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      find: {
        ID: function(id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var elem4 = context.getElementById(id);
            return elem4 ? [elem4] : [];
          }
        },
        TAG: function(tag, context) {
          if (typeof context.getElementsByTagName !== "undefined") {
            return context.getElementsByTagName(tag);
          } else {
            return context.querySelectorAll(tag);
          }
        },
        CLASS: function(className, context) {
          if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
            return context.getElementsByClassName(className);
          }
        }
      },
      relative: {
        ">": { dir: "parentNode", first: true },
        " ": { dir: "parentNode" },
        "+": { dir: "previousSibling", first: true },
        "~": { dir: "previousSibling" }
      },
      preFilter,
      filter: {
        ID: function(id) {
          var attrId = unescapeSelector(id);
          return function(elem4) {
            return elem4.getAttribute("id") === attrId;
          };
        },
        TAG: function(nodeNameSelector) {
          var expectedNodeName = unescapeSelector(nodeNameSelector).toLowerCase();
          return nodeNameSelector === "*" ? function() {
            return true;
          } : function(elem4) {
            return nodeName(elem4, expectedNodeName);
          };
        },
        CLASS: function(className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem4) {
            return pattern.test(
              typeof elem4.className === "string" && elem4.className || typeof elem4.getAttribute !== "undefined" && elem4.getAttribute("class") || ""
            );
          });
        },
        ATTR: function(name, operator, check) {
          return function(elem4) {
            var result = jQuery2.attr(elem4, name);
            if (result == null) {
              return operator === "!=";
            }
            if (!operator) {
              return true;
            }
            result += "";
            if (operator === "=") {
              return result === check;
            }
            if (operator === "!=") {
              return result !== check;
            }
            if (operator === "^=") {
              return check && result.indexOf(check) === 0;
            }
            if (operator === "*=") {
              return check && result.indexOf(check) > -1;
            }
            if (operator === "$=") {
              return check && result.slice(-check.length) === check;
            }
            if (operator === "~=") {
              return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
            }
            if (operator === "|=") {
              return result === check || result.slice(0, check.length + 1) === check + "-";
            }
            return false;
          };
        },
        CHILD: function(type, what, _argument, first, last2) {
          var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
          return first === 1 && last2 === 0 ? (
            // Shortcut for :nth-*(n)
            function(elem4) {
              return !!elem4.parentNode;
            }
          ) : function(elem4, _context, xml) {
            var cache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem4.parentNode, name = ofType && elem4.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
            if (parent) {
              if (simple) {
                while (dir2) {
                  node = elem4;
                  while (node = node[dir2]) {
                    if (ofType ? nodeName(node, name) : node.nodeType === 1) {
                      return false;
                    }
                  }
                  start = dir2 = type === "only" && !start && "nextSibling";
                }
                return true;
              }
              start = [forward ? parent.firstChild : parent.lastChild];
              if (forward && useCache) {
                outerCache = parent[jQuery2.expando] || (parent[jQuery2.expando] = {});
                cache = outerCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];
                while (node = ++nodeIndex && node && node[dir2] || // Fallback to seeking `elem` from the start
                (diff = nodeIndex = 0) || start.pop()) {
                  if (node.nodeType === 1 && ++diff && node === elem4) {
                    outerCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else {
                if (useCache) {
                  outerCache = elem4[jQuery2.expando] || (elem4[jQuery2.expando] = {});
                  cache = outerCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex;
                }
                if (diff === false) {
                  while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                    if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                      if (useCache) {
                        outerCache = node[jQuery2.expando] || (node[jQuery2.expando] = {});
                        outerCache[type] = [dirruns, diff];
                      }
                      if (node === elem4) {
                        break;
                      }
                    }
                  }
                }
              }
              diff -= last2;
              return diff === first || diff % first === 0 && diff / first >= 0;
            }
          };
        },
        PSEUDO: function(pseudo, argument) {
          var fn = jQuery2.expr.pseudos[pseudo] || jQuery2.expr.setFilters[pseudo.toLowerCase()] || selectorError("unsupported pseudo: " + pseudo);
          if (fn[jQuery2.expando]) {
            return fn(argument);
          }
          return fn;
        }
      },
      pseudos: {
        // Potentially complex pseudos
        not: markFunction(function(selector) {
          var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
          return matcher[jQuery2.expando] ? markFunction(function(seed, matches2, _context, xml) {
            var elem4, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
            while (i2--) {
              if (elem4 = unmatched[i2]) {
                seed[i2] = !(matches2[i2] = elem4);
              }
            }
          }) : function(elem4, _context, xml) {
            input[0] = elem4;
            matcher(input, null, xml, results);
            input[0] = null;
            return !results.pop();
          };
        }),
        has: markFunction(function(selector) {
          return function(elem4) {
            return find2(selector, elem4).length > 0;
          };
        }),
        contains: markFunction(function(text) {
          text = unescapeSelector(text);
          return function(elem4) {
            return (elem4.textContent || jQuery2.text(elem4)).indexOf(text) > -1;
          };
        }),
        // "Whether an element is represented by a :lang() selector
        // is based solely on the element's language value
        // being equal to the identifier C,
        // or beginning with the identifier C immediately followed by "-".
        // The matching of C against the element's language value is performed case-insensitively.
        // The identifier C does not have to be a valid language name."
        // https://www.w3.org/TR/selectors/#lang-pseudo
        lang: markFunction(function(lang) {
          if (!ridentifier.test(lang || "")) {
            selectorError("unsupported lang: " + lang);
          }
          lang = unescapeSelector(lang).toLowerCase();
          return function(elem4) {
            var elemLang;
            do {
              if (elemLang = documentIsHTML ? elem4.lang : elem4.getAttribute("xml:lang") || elem4.getAttribute("lang")) {
                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
              }
            } while ((elem4 = elem4.parentNode) && elem4.nodeType === 1);
            return false;
          };
        }),
        // Miscellaneous
        target: function(elem4) {
          var hash = window2.location && window2.location.hash;
          return hash && hash.slice(1) === elem4.id;
        },
        root: function(elem4) {
          return elem4 === documentElement;
        },
        focus: function(elem4) {
          return elem4 === document2.activeElement && document2.hasFocus() && !!(elem4.type || elem4.href || ~elem4.tabIndex);
        },
        // Boolean properties
        enabled: createDisabledPseudo(false),
        disabled: createDisabledPseudo(true),
        checked: function(elem4) {
          return nodeName(elem4, "input") && !!elem4.checked || nodeName(elem4, "option") && !!elem4.selected;
        },
        selected: function(elem4) {
          if (isIE && elem4.parentNode) {
            elem4.parentNode.selectedIndex;
          }
          return elem4.selected === true;
        },
        // Contents
        empty: function(elem4) {
          for (elem4 = elem4.firstChild; elem4; elem4 = elem4.nextSibling) {
            if (elem4.nodeType < 6) {
              return false;
            }
          }
          return true;
        },
        parent: function(elem4) {
          return !jQuery2.expr.pseudos.empty(elem4);
        },
        // Element/input types
        header: function(elem4) {
          return rheader.test(elem4.nodeName);
        },
        input: function(elem4) {
          return rinputs.test(elem4.nodeName);
        },
        button: function(elem4) {
          return nodeName(elem4, "input") && elem4.type === "button" || nodeName(elem4, "button");
        },
        text: function(elem4) {
          return nodeName(elem4, "input") && elem4.type === "text";
        },
        // Position-in-collection
        first: createPositionalPseudo(function() {
          return [0];
        }),
        last: createPositionalPseudo(function(_matchIndexes, length4) {
          return [length4 - 1];
        }),
        eq: createPositionalPseudo(function(_matchIndexes, length4, argument) {
          return [argument < 0 ? argument + length4 : argument];
        }),
        even: createPositionalPseudo(function(matchIndexes, length4) {
          var i2 = 0;
          for (; i2 < length4; i2 += 2) {
            matchIndexes.push(i2);
          }
          return matchIndexes;
        }),
        odd: createPositionalPseudo(function(matchIndexes, length4) {
          var i2 = 1;
          for (; i2 < length4; i2 += 2) {
            matchIndexes.push(i2);
          }
          return matchIndexes;
        }),
        lt: createPositionalPseudo(function(matchIndexes, length4, argument) {
          var i2;
          if (argument < 0) {
            i2 = argument + length4;
          } else if (argument > length4) {
            i2 = length4;
          } else {
            i2 = argument;
          }
          for (; --i2 >= 0; ) {
            matchIndexes.push(i2);
          }
          return matchIndexes;
        }),
        gt: createPositionalPseudo(function(matchIndexes, length4, argument) {
          var i2 = argument < 0 ? argument + length4 : argument;
          for (; ++i2 < length4; ) {
            matchIndexes.push(i2);
          }
          return matchIndexes;
        })
      }
    };
    jQuery2.expr.pseudos.nth = jQuery2.expr.pseudos.eq;
    for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
      jQuery2.expr.pseudos[i] = createInputPseudo(i);
    }
    for (i in { submit: true, reset: true }) {
      jQuery2.expr.pseudos[i] = createButtonPseudo(i);
    }
    function setFilters() {
    }
    setFilters.prototype = jQuery2.expr.pseudos;
    jQuery2.expr.setFilters = new setFilters();
    function addCombinator(matcher, combinator, base) {
      var dir2 = combinator.dir, skip = combinator.next, key2 = skip || dir2, checkNonElements = base && key2 === "parentNode", doneName = done++;
      return combinator.first ? (
        // Check against closest ancestor/preceding element
        function(elem4, context, xml) {
          while (elem4 = elem4[dir2]) {
            if (elem4.nodeType === 1 || checkNonElements) {
              return matcher(elem4, context, xml);
            }
          }
          return false;
        }
      ) : (
        // Check against all ancestor/preceding elements
        function(elem4, context, xml) {
          var oldCache, outerCache, newCache = [dirruns, doneName];
          if (xml) {
            while (elem4 = elem4[dir2]) {
              if (elem4.nodeType === 1 || checkNonElements) {
                if (matcher(elem4, context, xml)) {
                  return true;
                }
              }
            }
          } else {
            while (elem4 = elem4[dir2]) {
              if (elem4.nodeType === 1 || checkNonElements) {
                outerCache = elem4[jQuery2.expando] || (elem4[jQuery2.expando] = {});
                if (skip && nodeName(elem4, skip)) {
                  elem4 = elem4[dir2] || elem4;
                } else if ((oldCache = outerCache[key2]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                  return newCache[2] = oldCache[2];
                } else {
                  outerCache[key2] = newCache;
                  if (newCache[2] = matcher(elem4, context, xml)) {
                    return true;
                  }
                }
              }
            }
          }
          return false;
        }
      );
    }
    function elementMatcher(matchers) {
      return matchers.length > 1 ? function(elem4, context, xml) {
        var i2 = matchers.length;
        while (i2--) {
          if (!matchers[i2](elem4, context, xml)) {
            return false;
          }
        }
        return true;
      } : matchers[0];
    }
    function multipleContexts(selector, contexts, results) {
      var i2 = 0, len = contexts.length;
      for (; i2 < len; i2++) {
        find2(selector, contexts[i2], results);
      }
      return results;
    }
    function condense(unmatched, map7, filter3, context, xml) {
      var elem4, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map7 != null;
      for (; i2 < len; i2++) {
        if (elem4 = unmatched[i2]) {
          if (!filter3 || filter3(elem4, context, xml)) {
            newUnmatched.push(elem4);
            if (mapped) {
              map7.push(i2);
            }
          }
        }
      }
      return newUnmatched;
    }
    function setMatcher(preFilter2, selector, matcher, postFilter, postFinder, postSelector) {
      if (postFilter && !postFilter[jQuery2.expando]) {
        postFilter = setMatcher(postFilter);
      }
      if (postFinder && !postFinder[jQuery2.expando]) {
        postFinder = setMatcher(postFinder, postSelector);
      }
      return markFunction(function(seed, results, context, xml) {
        var temp, i2, elem4, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
          selector || "*",
          context.nodeType ? [context] : context,
          []
        ), matcherIn = preFilter2 && (seed || !selector) ? condense(elems, preMap, preFilter2, context, xml) : elems;
        if (matcher) {
          matcherOut = postFinder || (seed ? preFilter2 : preexisting || postFilter) ? (
            // ...intermediate processing is necessary
            []
          ) : (
            // ...otherwise use results directly
            results
          );
          matcher(matcherIn, matcherOut, context, xml);
        } else {
          matcherOut = matcherIn;
        }
        if (postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml);
          i2 = temp.length;
          while (i2--) {
            if (elem4 = temp[i2]) {
              matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem4);
            }
          }
        }
        if (seed) {
          if (postFinder || preFilter2) {
            if (postFinder) {
              temp = [];
              i2 = matcherOut.length;
              while (i2--) {
                if (elem4 = matcherOut[i2]) {
                  temp.push(matcherIn[i2] = elem4);
                }
              }
              postFinder(null, matcherOut = [], temp, xml);
            }
            i2 = matcherOut.length;
            while (i2--) {
              if ((elem4 = matcherOut[i2]) && (temp = postFinder ? indexOf2.call(seed, elem4) : preMap[i2]) > -1) {
                seed[temp] = !(results[temp] = elem4);
              }
            }
          }
        } else {
          matcherOut = condense(
            matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
          );
          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push2.apply(results, matcherOut);
          }
        }
      });
    }
    function matcherFromTokens(tokens) {
      var checkContext, matcher, j, len = tokens.length, leadingRelative = jQuery2.expr.relative[tokens[0].type], implicitRelative = leadingRelative || jQuery2.expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem4) {
        return elem4 === checkContext;
      }, implicitRelative, true), matchAnyContext = addCombinator(function(elem4) {
        return indexOf2.call(checkContext, elem4) > -1;
      }, implicitRelative, true), matchers = [function(elem4, context, xml) {
        var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem4, context, xml) : matchAnyContext(elem4, context, xml));
        checkContext = null;
        return ret;
      }];
      for (; i2 < len; i2++) {
        if (matcher = jQuery2.expr.relative[tokens[i2].type]) {
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          matcher = jQuery2.expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
          if (matcher[jQuery2.expando]) {
            j = ++i2;
            for (; j < len; j++) {
              if (jQuery2.expr.relative[tokens[j].type]) {
                break;
              }
            }
            return setMatcher(
              i2 > 1 && elementMatcher(matchers),
              i2 > 1 && toSelector(
                // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })
              ).replace(rtrimCSS, "$1"),
              matcher,
              i2 < j && matcherFromTokens(tokens.slice(i2, j)),
              j < len && matcherFromTokens(tokens = tokens.slice(j)),
              j < len && toSelector(tokens)
            );
          }
          matchers.push(matcher);
        }
      }
      return elementMatcher(matchers);
    }
    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
        var elem4, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && jQuery2.expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1;
        if (outermost) {
          outermostContext = context == document2 || context || outermost;
        }
        for (; (elem4 = elems[i2]) != null; i2++) {
          if (byElement && elem4) {
            j = 0;
            if (!context && elem4.ownerDocument != document2) {
              setDocument(elem4);
              xml = !documentIsHTML;
            }
            while (matcher = elementMatchers[j++]) {
              if (matcher(elem4, context || document2, xml)) {
                push2.call(results, elem4);
                break;
              }
            }
            if (outermost) {
              dirruns = dirrunsUnique;
            }
          }
          if (bySet) {
            if (elem4 = !matcher && elem4) {
              matchedCount--;
            }
            if (seed) {
              unmatched.push(elem4);
            }
          }
        }
        matchedCount += i2;
        if (bySet && i2 !== matchedCount) {
          j = 0;
          while (matcher = setMatchers[j++]) {
            matcher(unmatched, setMatched, context, xml);
          }
          if (seed) {
            if (matchedCount > 0) {
              while (i2--) {
                if (!(unmatched[i2] || setMatched[i2])) {
                  setMatched[i2] = pop2.call(results);
                }
              }
            }
            setMatched = condense(setMatched);
          }
          push2.apply(results, setMatched);
          if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
            jQuery2.uniqueSort(results);
          }
        }
        if (outermost) {
          dirruns = dirrunsUnique;
          outermostContext = contextBackup;
        }
        return unmatched;
      };
      return bySet ? markFunction(superMatcher) : superMatcher;
    }
    function compile(selector, match) {
      var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
      if (!cached) {
        if (!match) {
          match = tokenize(selector);
        }
        i2 = match.length;
        while (i2--) {
          cached = matcherFromTokens(match[i2]);
          if (cached[jQuery2.expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        }
        cached = compilerCache(
          selector,
          matcherFromGroupMatchers(elementMatchers, setMatchers)
        );
        cached.selector = selector;
      }
      return cached;
    }
    function select2(selector, context, results, seed) {
      var i2, tokens, token, type, find3, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
      results = results || [];
      if (match.length === 1) {
        tokens = match[0] = match[0].slice(0);
        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && jQuery2.expr.relative[tokens[1].type]) {
          context = (jQuery2.expr.find.ID(
            unescapeSelector(token.matches[0]),
            context
          ) || [])[0];
          if (!context) {
            return results;
          } else if (compiled) {
            context = context.parentNode;
          }
          selector = selector.slice(tokens.shift().value.length);
        }
        i2 = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
        while (i2--) {
          token = tokens[i2];
          if (jQuery2.expr.relative[type = token.type]) {
            break;
          }
          if (find3 = jQuery2.expr.find[type]) {
            if (seed = find3(
              unescapeSelector(token.matches[0]),
              rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
            )) {
              tokens.splice(i2, 1);
              selector = seed.length && toSelector(tokens);
              if (!selector) {
                push2.apply(results, seed);
                return results;
              }
              break;
            }
          }
        }
      }
      (compiled || compile(selector, match))(
        seed,
        context,
        !documentIsHTML,
        results,
        !context || rsibling.test(selector) && testContext(context.parentNode) || context
      );
      return results;
    }
    setDocument();
    jQuery2.find = find2;
    find2.compile = compile;
    find2.select = select2;
    find2.setDocument = setDocument;
    find2.tokenize = tokenize;
    function dir(elem4, dir2, until) {
      var matched = [], truncate = until !== void 0;
      while ((elem4 = elem4[dir2]) && elem4.nodeType !== 9) {
        if (elem4.nodeType === 1) {
          if (truncate && jQuery2(elem4).is(until)) {
            break;
          }
          matched.push(elem4);
        }
      }
      return matched;
    }
    function siblings(n, elem4) {
      var matched = [];
      for (; n; n = n.nextSibling) {
        if (n.nodeType === 1 && n !== elem4) {
          matched.push(n);
        }
      }
      return matched;
    }
    var rneedsContext = jQuery2.expr.match.needsContext;
    var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function isObviousHtml(input) {
      return input[0] === "<" && input[input.length - 1] === ">" && input.length >= 3;
    }
    function winnow(elements, qualifier, not2) {
      if (typeof qualifier === "function") {
        return jQuery2.grep(elements, function(elem4, i2) {
          return !!qualifier.call(elem4, i2, elem4) !== not2;
        });
      }
      if (qualifier.nodeType) {
        return jQuery2.grep(elements, function(elem4) {
          return elem4 === qualifier !== not2;
        });
      }
      if (typeof qualifier !== "string") {
        return jQuery2.grep(elements, function(elem4) {
          return indexOf2.call(qualifier, elem4) > -1 !== not2;
        });
      }
      return jQuery2.filter(qualifier, elements, not2);
    }
    jQuery2.filter = function(expr, elems, not2) {
      var elem4 = elems[0];
      if (not2) {
        expr = ":not(" + expr + ")";
      }
      if (elems.length === 1 && elem4.nodeType === 1) {
        return jQuery2.find.matchesSelector(elem4, expr) ? [elem4] : [];
      }
      return jQuery2.find.matches(expr, jQuery2.grep(elems, function(elem5) {
        return elem5.nodeType === 1;
      }));
    };
    jQuery2.fn.extend({
      find: function(selector) {
        var i2, ret, len = this.length, self = this;
        if (typeof selector !== "string") {
          return this.pushStack(jQuery2(selector).filter(function() {
            for (i2 = 0; i2 < len; i2++) {
              if (jQuery2.contains(self[i2], this)) {
                return true;
              }
            }
          }));
        }
        ret = this.pushStack([]);
        for (i2 = 0; i2 < len; i2++) {
          jQuery2.find(selector, self[i2], ret);
        }
        return len > 1 ? jQuery2.uniqueSort(ret) : ret;
      },
      filter: function(selector) {
        return this.pushStack(winnow(this, selector || [], false));
      },
      not: function(selector) {
        return this.pushStack(winnow(this, selector || [], true));
      },
      is: function(selector) {
        return !!winnow(
          this,
          // If this is a positional/relative selector, check membership in the returned set
          // so $("p:first").is("p:last") won't return true for a doc with two "p".
          typeof selector === "string" && rneedsContext.test(selector) ? jQuery2(selector) : selector || [],
          false
        ).length;
      }
    });
    var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init2 = jQuery2.fn.init = function(selector, context) {
      var match, elem4;
      if (!selector) {
        return this;
      }
      if (selector.nodeType) {
        this[0] = selector;
        this.length = 1;
        return this;
      } else if (typeof selector === "function") {
        return rootjQuery.ready !== void 0 ? rootjQuery.ready(selector) : (
          // Execute immediately if ready is not present
          selector(jQuery2)
        );
      } else {
        match = selector + "";
        if (isObviousHtml(match)) {
          match = [null, selector, null];
        } else if (typeof selector === "string") {
          match = rquickExpr.exec(selector);
        } else {
          return jQuery2.makeArray(selector, this);
        }
        if (match && (match[1] || !context)) {
          if (match[1]) {
            context = context instanceof jQuery2 ? context[0] : context;
            jQuery2.merge(this, jQuery2.parseHTML(
              match[1],
              context && context.nodeType ? context.ownerDocument || context : document$1,
              true
            ));
            if (rsingleTag.test(match[1]) && jQuery2.isPlainObject(context)) {
              for (match in context) {
                if (typeof this[match] === "function") {
                  this[match](context[match]);
                } else {
                  this.attr(match, context[match]);
                }
              }
            }
            return this;
          } else {
            elem4 = document$1.getElementById(match[2]);
            if (elem4) {
              this[0] = elem4;
              this.length = 1;
            }
            return this;
          }
        } else if (!context || context.jquery) {
          return (context || rootjQuery).find(selector);
        } else {
          return this.constructor(context).find(selector);
        }
      }
    };
    init2.prototype = jQuery2.fn;
    rootjQuery = jQuery2(document$1);
    var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
      children: true,
      contents: true,
      next: true,
      prev: true
    };
    jQuery2.fn.extend({
      has: function(target) {
        var targets = jQuery2(target, this), l = targets.length;
        return this.filter(function() {
          var i2 = 0;
          for (; i2 < l; i2++) {
            if (jQuery2.contains(this, targets[i2])) {
              return true;
            }
          }
        });
      },
      closest: function(selectors, context) {
        var cur, i2 = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery2(selectors);
        if (!rneedsContext.test(selectors)) {
          for (; i2 < l; i2++) {
            for (cur = this[i2]; cur && cur !== context; cur = cur.parentNode) {
              if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : (
                // Don't pass non-elements to jQuery#find
                cur.nodeType === 1 && jQuery2.find.matchesSelector(cur, selectors)
              ))) {
                matched.push(cur);
                break;
              }
            }
          }
        }
        return this.pushStack(matched.length > 1 ? jQuery2.uniqueSort(matched) : matched);
      },
      // Determine the position of an element within the set
      index: function(elem4) {
        if (!elem4) {
          return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        }
        if (typeof elem4 === "string") {
          return indexOf2.call(jQuery2(elem4), this[0]);
        }
        return indexOf2.call(
          this,
          // If it receives a jQuery object, the first element is used
          elem4.jquery ? elem4[0] : elem4
        );
      },
      add: function(selector, context) {
        return this.pushStack(
          jQuery2.uniqueSort(
            jQuery2.merge(this.get(), jQuery2(selector, context))
          )
        );
      },
      addBack: function(selector) {
        return this.add(
          selector == null ? this.prevObject : this.prevObject.filter(selector)
        );
      }
    });
    function sibling(cur, dir2) {
      while ((cur = cur[dir2]) && cur.nodeType !== 1) {
      }
      return cur;
    }
    jQuery2.each({
      parent: function(elem4) {
        var parent = elem4.parentNode;
        return parent && parent.nodeType !== 11 ? parent : null;
      },
      parents: function(elem4) {
        return dir(elem4, "parentNode");
      },
      parentsUntil: function(elem4, _i, until) {
        return dir(elem4, "parentNode", until);
      },
      next: function(elem4) {
        return sibling(elem4, "nextSibling");
      },
      prev: function(elem4) {
        return sibling(elem4, "previousSibling");
      },
      nextAll: function(elem4) {
        return dir(elem4, "nextSibling");
      },
      prevAll: function(elem4) {
        return dir(elem4, "previousSibling");
      },
      nextUntil: function(elem4, _i, until) {
        return dir(elem4, "nextSibling", until);
      },
      prevUntil: function(elem4, _i, until) {
        return dir(elem4, "previousSibling", until);
      },
      siblings: function(elem4) {
        return siblings((elem4.parentNode || {}).firstChild, elem4);
      },
      children: function(elem4) {
        return siblings(elem4.firstChild);
      },
      contents: function(elem4) {
        if (elem4.contentDocument != null && // Support: IE 11+
        // <object> elements with no `data` attribute has an object
        // `contentDocument` with a `null` prototype.
        getProto(elem4.contentDocument)) {
          return elem4.contentDocument;
        }
        if (nodeName(elem4, "template")) {
          elem4 = elem4.content || elem4;
        }
        return jQuery2.merge([], elem4.childNodes);
      }
    }, function(name, fn) {
      jQuery2.fn[name] = function(until, selector) {
        var matched = jQuery2.map(this, fn, until);
        if (name.slice(-5) !== "Until") {
          selector = until;
        }
        if (selector && typeof selector === "string") {
          matched = jQuery2.filter(selector, matched);
        }
        if (this.length > 1) {
          if (!guaranteedUnique[name]) {
            jQuery2.uniqueSort(matched);
          }
          if (rparentsprev.test(name)) {
            matched.reverse();
          }
        }
        return this.pushStack(matched);
      };
    });
    function createOptions(options) {
      var object = {};
      jQuery2.each(options.match(rnothtmlwhite) || [], function(_, flag) {
        object[flag] = true;
      });
      return object;
    }
    jQuery2.Callbacks = function(options) {
      options = typeof options === "string" ? createOptions(options) : jQuery2.extend({}, options);
      var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
        locked = locked || options.once;
        fired = firing = true;
        for (; queue.length; firingIndex = -1) {
          memory = queue.shift();
          while (++firingIndex < list.length) {
            if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
              firingIndex = list.length;
              memory = false;
            }
          }
        }
        if (!options.memory) {
          memory = false;
        }
        firing = false;
        if (locked) {
          if (memory) {
            list = [];
          } else {
            list = "";
          }
        }
      }, self = {
        // Add a callback or a collection of callbacks to the list
        add: function() {
          if (list) {
            if (memory && !firing) {
              firingIndex = list.length - 1;
              queue.push(memory);
            }
            (function add4(args) {
              jQuery2.each(args, function(_, arg) {
                if (typeof arg === "function") {
                  if (!options.unique || !self.has(arg)) {
                    list.push(arg);
                  }
                } else if (arg && arg.length && toType(arg) !== "string") {
                  add4(arg);
                }
              });
            })(arguments);
            if (memory && !firing) {
              fire();
            }
          }
          return this;
        },
        // Remove a callback from the list
        remove: function() {
          jQuery2.each(arguments, function(_, arg) {
            var index2;
            while ((index2 = jQuery2.inArray(arg, list, index2)) > -1) {
              list.splice(index2, 1);
              if (index2 <= firingIndex) {
                firingIndex--;
              }
            }
          });
          return this;
        },
        // Check if a given callback is in the list.
        // If no argument is given, return whether or not list has callbacks attached.
        has: function(fn) {
          return fn ? jQuery2.inArray(fn, list) > -1 : list.length > 0;
        },
        // Remove all callbacks from the list
        empty: function() {
          if (list) {
            list = [];
          }
          return this;
        },
        // Disable .fire and .add
        // Abort any current/pending executions
        // Clear all callbacks and values
        disable: function() {
          locked = queue = [];
          list = memory = "";
          return this;
        },
        disabled: function() {
          return !list;
        },
        // Disable .fire
        // Also disable .add unless we have memory (since it would have no effect)
        // Abort any pending executions
        lock: function() {
          locked = queue = [];
          if (!memory && !firing) {
            list = memory = "";
          }
          return this;
        },
        locked: function() {
          return !!locked;
        },
        // Call all callbacks with the given context and arguments
        fireWith: function(context, args) {
          if (!locked) {
            args = args || [];
            args = [context, args.slice ? args.slice() : args];
            queue.push(args);
            if (!firing) {
              fire();
            }
          }
          return this;
        },
        // Call all the callbacks with the given arguments
        fire: function() {
          self.fireWith(this, arguments);
          return this;
        },
        // To know if the callbacks have already been called at least once
        fired: function() {
          return !!fired;
        }
      };
      return self;
    };
    function Identity2(v) {
      return v;
    }
    function Thrower(ex) {
      throw ex;
    }
    function adoptValue(value, resolve, reject, noValue) {
      var method;
      try {
        if (value && typeof (method = value.promise) === "function") {
          method.call(value).done(resolve).fail(reject);
        } else if (value && typeof (method = value.then) === "function") {
          method.call(value, resolve, reject);
        } else {
          resolve.apply(void 0, [value].slice(noValue));
        }
      } catch (value2) {
        reject(value2);
      }
    }
    jQuery2.extend({
      Deferred: function(func) {
        var tuples = [
          // action, add listener, callbacks,
          // ... .then handlers, argument index, [final state]
          [
            "notify",
            "progress",
            jQuery2.Callbacks("memory"),
            jQuery2.Callbacks("memory"),
            2
          ],
          [
            "resolve",
            "done",
            jQuery2.Callbacks("once memory"),
            jQuery2.Callbacks("once memory"),
            0,
            "resolved"
          ],
          [
            "reject",
            "fail",
            jQuery2.Callbacks("once memory"),
            jQuery2.Callbacks("once memory"),
            1,
            "rejected"
          ]
        ], state = "pending", promise = {
          state: function() {
            return state;
          },
          always: function() {
            deferred.done(arguments).fail(arguments);
            return this;
          },
          catch: function(fn) {
            return promise.then(null, fn);
          },
          // Keep pipe for back-compat
          pipe: function() {
            var fns = arguments;
            return jQuery2.Deferred(function(newDefer) {
              jQuery2.each(tuples, function(_i, tuple) {
                var fn = typeof fns[tuple[4]] === "function" && fns[tuple[4]];
                deferred[tuple[1]](function() {
                  var returned = fn && fn.apply(this, arguments);
                  if (returned && typeof returned.promise === "function") {
                    returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                  } else {
                    newDefer[tuple[0] + "With"](
                      this,
                      fn ? [returned] : arguments
                    );
                  }
                });
              });
              fns = null;
            }).promise();
          },
          then: function(onFulfilled, onRejected, onProgress) {
            var maxDepth = 0;
            function resolve(depth, deferred2, handler, special) {
              return function() {
                var that = this, args = arguments, mightThrow = function() {
                  var returned, then;
                  if (depth < maxDepth) {
                    return;
                  }
                  returned = handler.apply(that, args);
                  if (returned === deferred2.promise()) {
                    throw new TypeError("Thenable self-resolution");
                  }
                  then = returned && // Support: Promises/A+ section 2.3.4
                  // https://promisesaplus.com/#point-64
                  // Only check objects and functions for thenability
                  (typeof returned === "object" || typeof returned === "function") && returned.then;
                  if (typeof then === "function") {
                    if (special) {
                      then.call(
                        returned,
                        resolve(maxDepth, deferred2, Identity2, special),
                        resolve(maxDepth, deferred2, Thrower, special)
                      );
                    } else {
                      maxDepth++;
                      then.call(
                        returned,
                        resolve(maxDepth, deferred2, Identity2, special),
                        resolve(maxDepth, deferred2, Thrower, special),
                        resolve(
                          maxDepth,
                          deferred2,
                          Identity2,
                          deferred2.notifyWith
                        )
                      );
                    }
                  } else {
                    if (handler !== Identity2) {
                      that = void 0;
                      args = [returned];
                    }
                    (special || deferred2.resolveWith)(that, args);
                  }
                }, process = special ? mightThrow : function() {
                  try {
                    mightThrow();
                  } catch (e) {
                    if (jQuery2.Deferred.exceptionHook) {
                      jQuery2.Deferred.exceptionHook(
                        e,
                        process.error
                      );
                    }
                    if (depth + 1 >= maxDepth) {
                      if (handler !== Thrower) {
                        that = void 0;
                        args = [e];
                      }
                      deferred2.rejectWith(that, args);
                    }
                  }
                };
                if (depth) {
                  process();
                } else {
                  if (jQuery2.Deferred.getErrorHook) {
                    process.error = jQuery2.Deferred.getErrorHook();
                  }
                  window2.setTimeout(process);
                }
              };
            }
            return jQuery2.Deferred(function(newDefer) {
              tuples[0][3].add(
                resolve(
                  0,
                  newDefer,
                  typeof onProgress === "function" ? onProgress : Identity2,
                  newDefer.notifyWith
                )
              );
              tuples[1][3].add(
                resolve(
                  0,
                  newDefer,
                  typeof onFulfilled === "function" ? onFulfilled : Identity2
                )
              );
              tuples[2][3].add(
                resolve(
                  0,
                  newDefer,
                  typeof onRejected === "function" ? onRejected : Thrower
                )
              );
            }).promise();
          },
          // Get a promise for this deferred
          // If obj is provided, the promise aspect is added to the object
          promise: function(obj) {
            return obj != null ? jQuery2.extend(obj, promise) : promise;
          }
        }, deferred = {};
        jQuery2.each(tuples, function(i2, tuple) {
          var list = tuple[2], stateString = tuple[5];
          promise[tuple[1]] = list.add;
          if (stateString) {
            list.add(
              function() {
                state = stateString;
              },
              // rejected_callbacks.disable
              // fulfilled_callbacks.disable
              tuples[3 - i2][2].disable,
              // rejected_handlers.disable
              // fulfilled_handlers.disable
              tuples[3 - i2][3].disable,
              // progress_callbacks.lock
              tuples[0][2].lock,
              // progress_handlers.lock
              tuples[0][3].lock
            );
          }
          list.add(tuple[3].fire);
          deferred[tuple[0]] = function() {
            deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
            return this;
          };
          deferred[tuple[0] + "With"] = list.fireWith;
        });
        promise.promise(deferred);
        if (func) {
          func.call(deferred, deferred);
        }
        return deferred;
      },
      // Deferred helper
      when: function(singleValue) {
        var remaining = arguments.length, i2 = remaining, resolveContexts = Array(i2), resolveValues = slice3.call(arguments), primary = jQuery2.Deferred(), updateFunc = function(i3) {
          return function(value) {
            resolveContexts[i3] = this;
            resolveValues[i3] = arguments.length > 1 ? slice3.call(arguments) : value;
            if (!--remaining) {
              primary.resolveWith(resolveContexts, resolveValues);
            }
          };
        };
        if (remaining <= 1) {
          adoptValue(
            singleValue,
            primary.done(updateFunc(i2)).resolve,
            primary.reject,
            !remaining
          );
          if (primary.state() === "pending" || typeof (resolveValues[i2] && resolveValues[i2].then) === "function") {
            return primary.then();
          }
        }
        while (i2--) {
          adoptValue(resolveValues[i2], updateFunc(i2), primary.reject);
        }
        return primary.promise();
      }
    });
    var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    jQuery2.Deferred.exceptionHook = function(error, asyncError) {
      if (error && rerrorNames.test(error.name)) {
        window2.console.warn(
          "jQuery.Deferred exception",
          error,
          asyncError
        );
      }
    };
    jQuery2.readyException = function(error) {
      window2.setTimeout(function() {
        throw error;
      });
    };
    var readyList = jQuery2.Deferred();
    jQuery2.fn.ready = function(fn) {
      readyList.then(fn).catch(function(error) {
        jQuery2.readyException(error);
      });
      return this;
    };
    jQuery2.extend({
      // Is the DOM ready to be used? Set to true once it occurs.
      isReady: false,
      // A counter to track how many items to wait for before
      // the ready event fires. See trac-6781
      readyWait: 1,
      // Handle when the DOM is ready
      ready: function(wait) {
        if (wait === true ? --jQuery2.readyWait : jQuery2.isReady) {
          return;
        }
        jQuery2.isReady = true;
        if (wait !== true && --jQuery2.readyWait > 0) {
          return;
        }
        readyList.resolveWith(document$1, [jQuery2]);
      }
    });
    jQuery2.ready.then = readyList.then;
    function completed() {
      document$1.removeEventListener("DOMContentLoaded", completed);
      window2.removeEventListener("load", completed);
      jQuery2.ready();
    }
    if (document$1.readyState !== "loading") {
      window2.setTimeout(jQuery2.ready);
    } else {
      document$1.addEventListener("DOMContentLoaded", completed);
      window2.addEventListener("load", completed);
    }
    var rdashAlpha = /-([a-z])/g;
    function fcamelCase(_all, letter) {
      return letter.toUpperCase();
    }
    function camelCase(string) {
      return string.replace(rdashAlpha, fcamelCase);
    }
    function acceptData(owner) {
      return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
    }
    function Data() {
      this.expando = jQuery2.expando + Data.uid++;
    }
    Data.uid = 1;
    Data.prototype = {
      cache: function(owner) {
        var value = owner[this.expando];
        if (!value) {
          value = /* @__PURE__ */ Object.create(null);
          if (acceptData(owner)) {
            if (owner.nodeType) {
              owner[this.expando] = value;
            } else {
              Object.defineProperty(owner, this.expando, {
                value,
                configurable: true
              });
            }
          }
        }
        return value;
      },
      set: function(owner, data, value) {
        var prop, cache = this.cache(owner);
        if (typeof data === "string") {
          cache[camelCase(data)] = value;
        } else {
          for (prop in data) {
            cache[camelCase(prop)] = data[prop];
          }
        }
        return value;
      },
      get: function(owner, key2) {
        return key2 === void 0 ? this.cache(owner) : (
          // Always use camelCase key (gh-2257)
          owner[this.expando] && owner[this.expando][camelCase(key2)]
        );
      },
      access: function(owner, key2, value) {
        if (key2 === void 0 || key2 && typeof key2 === "string" && value === void 0) {
          return this.get(owner, key2);
        }
        this.set(owner, key2, value);
        return value !== void 0 ? value : key2;
      },
      remove: function(owner, key2) {
        var i2, cache = owner[this.expando];
        if (cache === void 0) {
          return;
        }
        if (key2 !== void 0) {
          if (Array.isArray(key2)) {
            key2 = key2.map(camelCase);
          } else {
            key2 = camelCase(key2);
            key2 = key2 in cache ? [key2] : key2.match(rnothtmlwhite) || [];
          }
          i2 = key2.length;
          while (i2--) {
            delete cache[key2[i2]];
          }
        }
        if (key2 === void 0 || jQuery2.isEmptyObject(cache)) {
          if (owner.nodeType) {
            owner[this.expando] = void 0;
          } else {
            delete owner[this.expando];
          }
        }
      },
      hasData: function(owner) {
        var cache = owner[this.expando];
        return cache !== void 0 && !jQuery2.isEmptyObject(cache);
      }
    };
    var dataPriv = new Data();
    var dataUser = new Data();
    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
    function getData(data) {
      if (data === "true") {
        return true;
      }
      if (data === "false") {
        return false;
      }
      if (data === "null") {
        return null;
      }
      if (data === +data + "") {
        return +data;
      }
      if (rbrace.test(data)) {
        return JSON.parse(data);
      }
      return data;
    }
    function dataAttr(elem4, key2, data) {
      var name;
      if (data === void 0 && elem4.nodeType === 1) {
        name = "data-" + key2.replace(rmultiDash, "-$&").toLowerCase();
        data = elem4.getAttribute(name);
        if (typeof data === "string") {
          try {
            data = getData(data);
          } catch (e) {
          }
          dataUser.set(elem4, key2, data);
        } else {
          data = void 0;
        }
      }
      return data;
    }
    jQuery2.extend({
      hasData: function(elem4) {
        return dataUser.hasData(elem4) || dataPriv.hasData(elem4);
      },
      data: function(elem4, name, data) {
        return dataUser.access(elem4, name, data);
      },
      removeData: function(elem4, name) {
        dataUser.remove(elem4, name);
      },
      // TODO: Now that all calls to _data and _removeData have been replaced
      // with direct calls to dataPriv methods, these can be deprecated.
      _data: function(elem4, name, data) {
        return dataPriv.access(elem4, name, data);
      },
      _removeData: function(elem4, name) {
        dataPriv.remove(elem4, name);
      }
    });
    jQuery2.fn.extend({
      data: function(key2, value) {
        var i2, name, data, elem4 = this[0], attrs = elem4 && elem4.attributes;
        if (key2 === void 0) {
          if (this.length) {
            data = dataUser.get(elem4);
            if (elem4.nodeType === 1 && !dataPriv.get(elem4, "hasDataAttrs")) {
              i2 = attrs.length;
              while (i2--) {
                if (attrs[i2]) {
                  name = attrs[i2].name;
                  if (name.indexOf("data-") === 0) {
                    name = camelCase(name.slice(5));
                    dataAttr(elem4, name, data[name]);
                  }
                }
              }
              dataPriv.set(elem4, "hasDataAttrs", true);
            }
          }
          return data;
        }
        if (typeof key2 === "object") {
          return this.each(function() {
            dataUser.set(this, key2);
          });
        }
        return access(this, function(value2) {
          var data2;
          if (elem4 && value2 === void 0) {
            data2 = dataUser.get(elem4, key2);
            if (data2 !== void 0) {
              return data2;
            }
            data2 = dataAttr(elem4, key2);
            if (data2 !== void 0) {
              return data2;
            }
            return;
          }
          this.each(function() {
            dataUser.set(this, key2, value2);
          });
        }, null, value, arguments.length > 1, null, true);
      },
      removeData: function(key2) {
        return this.each(function() {
          dataUser.remove(this, key2);
        });
      }
    });
    jQuery2.extend({
      queue: function(elem4, type, data) {
        var queue;
        if (elem4) {
          type = (type || "fx") + "queue";
          queue = dataPriv.get(elem4, type);
          if (data) {
            if (!queue || Array.isArray(data)) {
              queue = dataPriv.set(elem4, type, jQuery2.makeArray(data));
            } else {
              queue.push(data);
            }
          }
          return queue || [];
        }
      },
      dequeue: function(elem4, type) {
        type = type || "fx";
        var queue = jQuery2.queue(elem4, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery2._queueHooks(elem4, type), next = function() {
          jQuery2.dequeue(elem4, type);
        };
        if (fn === "inprogress") {
          fn = queue.shift();
          startLength--;
        }
        if (fn) {
          if (type === "fx") {
            queue.unshift("inprogress");
          }
          delete hooks.stop;
          fn.call(elem4, next, hooks);
        }
        if (!startLength && hooks) {
          hooks.empty.fire();
        }
      },
      // Not public - generate a queueHooks object, or return the current one
      _queueHooks: function(elem4, type) {
        var key2 = type + "queueHooks";
        return dataPriv.get(elem4, key2) || dataPriv.set(elem4, key2, {
          empty: jQuery2.Callbacks("once memory").add(function() {
            dataPriv.remove(elem4, [type + "queue", key2]);
          })
        });
      }
    });
    jQuery2.fn.extend({
      queue: function(type, data) {
        var setter = 2;
        if (typeof type !== "string") {
          data = type;
          type = "fx";
          setter--;
        }
        if (arguments.length < setter) {
          return jQuery2.queue(this[0], type);
        }
        return data === void 0 ? this : this.each(function() {
          var queue = jQuery2.queue(this, type, data);
          jQuery2._queueHooks(this, type);
          if (type === "fx" && queue[0] !== "inprogress") {
            jQuery2.dequeue(this, type);
          }
        });
      },
      dequeue: function(type) {
        return this.each(function() {
          jQuery2.dequeue(this, type);
        });
      },
      clearQueue: function(type) {
        return this.queue(type || "fx", []);
      },
      // Get a promise resolved when queues of a certain type
      // are emptied (fx is the type by default)
      promise: function(type, obj) {
        var tmp, count = 1, defer2 = jQuery2.Deferred(), elements = this, i2 = this.length, resolve = function() {
          if (!--count) {
            defer2.resolveWith(elements, [elements]);
          }
        };
        if (typeof type !== "string") {
          obj = type;
          type = void 0;
        }
        type = type || "fx";
        while (i2--) {
          tmp = dataPriv.get(elements[i2], type + "queueHooks");
          if (tmp && tmp.empty) {
            count++;
            tmp.empty.add(resolve);
          }
        }
        resolve();
        return defer2.promise(obj);
      }
    });
    var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
    var cssExpand = ["Top", "Right", "Bottom", "Left"];
    function isHiddenWithinTree(elem4, el) {
      elem4 = el || elem4;
      return elem4.style.display === "none" || elem4.style.display === "" && jQuery2.css(elem4, "display") === "none";
    }
    var ralphaStart = /^[a-z]/, rautoPx = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
    function isAutoPx(prop) {
      return ralphaStart.test(prop) && rautoPx.test(prop[0].toUpperCase() + prop.slice(1));
    }
    function adjustCSS(elem4, prop, valueParts, tween) {
      var adjusted, scale2, maxIterations = 20, currentValue = tween ? function() {
        return tween.cur();
      } : function() {
        return jQuery2.css(elem4, prop, "");
      }, initial = currentValue(), unit2 = valueParts && valueParts[3] || (isAutoPx(prop) ? "px" : ""), initialInUnit = elem4.nodeType && (!isAutoPx(prop) || unit2 !== "px" && +initial) && rcssNum.exec(jQuery2.css(elem4, prop));
      if (initialInUnit && initialInUnit[3] !== unit2) {
        initial = initial / 2;
        unit2 = unit2 || initialInUnit[3];
        initialInUnit = +initial || 1;
        while (maxIterations--) {
          jQuery2.style(elem4, prop, initialInUnit + unit2);
          if ((1 - scale2) * (1 - (scale2 = currentValue() / initial || 0.5)) <= 0) {
            maxIterations = 0;
          }
          initialInUnit = initialInUnit / scale2;
        }
        initialInUnit = initialInUnit * 2;
        jQuery2.style(elem4, prop, initialInUnit + unit2);
        valueParts = valueParts || [];
      }
      if (valueParts) {
        initialInUnit = +initialInUnit || +initial || 0;
        adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
        if (tween) {
          tween.unit = unit2;
          tween.start = initialInUnit;
          tween.end = adjusted;
        }
      }
      return adjusted;
    }
    var rmsPrefix = /^-ms-/;
    function cssCamelCase(string) {
      return camelCase(string.replace(rmsPrefix, "ms-"));
    }
    var defaultDisplayMap = {};
    function getDefaultDisplay(elem4) {
      var temp, doc = elem4.ownerDocument, nodeName2 = elem4.nodeName, display = defaultDisplayMap[nodeName2];
      if (display) {
        return display;
      }
      temp = doc.body.appendChild(doc.createElement(nodeName2));
      display = jQuery2.css(temp, "display");
      temp.parentNode.removeChild(temp);
      if (display === "none") {
        display = "block";
      }
      defaultDisplayMap[nodeName2] = display;
      return display;
    }
    function showHide(elements, show2) {
      var display, elem4, values2 = [], index2 = 0, length4 = elements.length;
      for (; index2 < length4; index2++) {
        elem4 = elements[index2];
        if (!elem4.style) {
          continue;
        }
        display = elem4.style.display;
        if (show2) {
          if (display === "none") {
            values2[index2] = dataPriv.get(elem4, "display") || null;
            if (!values2[index2]) {
              elem4.style.display = "";
            }
          }
          if (elem4.style.display === "" && isHiddenWithinTree(elem4)) {
            values2[index2] = getDefaultDisplay(elem4);
          }
        } else {
          if (display !== "none") {
            values2[index2] = "none";
            dataPriv.set(elem4, "display", display);
          }
        }
      }
      for (index2 = 0; index2 < length4; index2++) {
        if (values2[index2] != null) {
          elements[index2].style.display = values2[index2];
        }
      }
      return elements;
    }
    jQuery2.fn.extend({
      show: function() {
        return showHide(this, true);
      },
      hide: function() {
        return showHide(this);
      },
      toggle: function(state) {
        if (typeof state === "boolean") {
          return state ? this.show() : this.hide();
        }
        return this.each(function() {
          if (isHiddenWithinTree(this)) {
            jQuery2(this).show();
          } else {
            jQuery2(this).hide();
          }
        });
      }
    });
    var isAttached = function(elem4) {
      return jQuery2.contains(elem4.ownerDocument, elem4) || elem4.getRootNode(composed) === elem4.ownerDocument;
    }, composed = { composed: true };
    if (!documentElement$1.getRootNode) {
      isAttached = function(elem4) {
        return jQuery2.contains(elem4.ownerDocument, elem4);
      };
    }
    var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
    var wrapMap = {
      // Table parts need to be wrapped with `<table>` or they're
      // stripped to their contents when put in a div.
      // XHTML parsers do not magically insert elements in the
      // same way that tag soup parsers do, so we cannot shorten
      // this by omitting <tbody> or other required elements.
      thead: ["table"],
      col: ["colgroup", "table"],
      tr: ["tbody", "table"],
      td: ["tr", "tbody", "table"]
    };
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    function getAll(context, tag) {
      var ret;
      if (typeof context.getElementsByTagName !== "undefined") {
        ret = arr.slice.call(context.getElementsByTagName(tag || "*"));
      } else if (typeof context.querySelectorAll !== "undefined") {
        ret = context.querySelectorAll(tag || "*");
      } else {
        ret = [];
      }
      if (tag === void 0 || tag && nodeName(context, tag)) {
        return jQuery2.merge([context], ret);
      }
      return ret;
    }
    var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
    function setGlobalEval(elems, refElements) {
      var i2 = 0, l = elems.length;
      for (; i2 < l; i2++) {
        dataPriv.set(
          elems[i2],
          "globalEval",
          !refElements || dataPriv.get(refElements[i2], "globalEval")
        );
      }
    }
    var rhtml = /<|&#?\w+;/;
    function buildFragment(elems, context, scripts, selection, ignored) {
      var elem4, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i2 = 0, l = elems.length;
      for (; i2 < l; i2++) {
        elem4 = elems[i2];
        if (elem4 || elem4 === 0) {
          if (toType(elem4) === "object" && (elem4.nodeType || isArrayLike(elem4))) {
            jQuery2.merge(nodes, elem4.nodeType ? [elem4] : elem4);
          } else if (!rhtml.test(elem4)) {
            nodes.push(context.createTextNode(elem4));
          } else {
            tmp = tmp || fragment.appendChild(context.createElement("div"));
            tag = (rtagName.exec(elem4) || ["", ""])[1].toLowerCase();
            wrap = wrapMap[tag] || arr;
            j = wrap.length;
            while (--j > -1) {
              tmp = tmp.appendChild(context.createElement(wrap[j]));
            }
            tmp.innerHTML = jQuery2.htmlPrefilter(elem4);
            jQuery2.merge(nodes, tmp.childNodes);
            tmp = fragment.firstChild;
            tmp.textContent = "";
          }
        }
      }
      fragment.textContent = "";
      i2 = 0;
      while (elem4 = nodes[i2++]) {
        if (selection && jQuery2.inArray(elem4, selection) > -1) {
          if (ignored) {
            ignored.push(elem4);
          }
          continue;
        }
        attached = isAttached(elem4);
        tmp = getAll(fragment.appendChild(elem4), "script");
        if (attached) {
          setGlobalEval(tmp);
        }
        if (scripts) {
          j = 0;
          while (elem4 = tmp[j++]) {
            if (rscriptType.test(elem4.type || "")) {
              scripts.push(elem4);
            }
          }
        }
      }
      return fragment;
    }
    function disableScript(elem4) {
      elem4.type = (elem4.getAttribute("type") !== null) + "/" + elem4.type;
      return elem4;
    }
    function restoreScript(elem4) {
      if ((elem4.type || "").slice(0, 5) === "true/") {
        elem4.type = elem4.type.slice(5);
      } else {
        elem4.removeAttribute("type");
      }
      return elem4;
    }
    function domManip(collection, args, callback, ignored) {
      args = flat(args);
      var fragment, first, scripts, hasScripts, node, doc, i2 = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = typeof value === "function";
      if (valueIsFunction) {
        return collection.each(function(index2) {
          var self = collection.eq(index2);
          args[0] = value.call(this, index2, self.html());
          domManip(self, args, callback, ignored);
        });
      }
      if (l) {
        fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
        first = fragment.firstChild;
        if (fragment.childNodes.length === 1) {
          fragment = first;
        }
        if (first || ignored) {
          scripts = jQuery2.map(getAll(fragment, "script"), disableScript);
          hasScripts = scripts.length;
          for (; i2 < l; i2++) {
            node = fragment;
            if (i2 !== iNoClone) {
              node = jQuery2.clone(node, true, true);
              if (hasScripts) {
                jQuery2.merge(scripts, getAll(node, "script"));
              }
            }
            callback.call(collection[i2], node, i2);
          }
          if (hasScripts) {
            doc = scripts[scripts.length - 1].ownerDocument;
            jQuery2.map(scripts, restoreScript);
            for (i2 = 0; i2 < hasScripts; i2++) {
              node = scripts[i2];
              if (rscriptType.test(node.type || "") && !dataPriv.get(node, "globalEval") && jQuery2.contains(doc, node)) {
                if (node.src && (node.type || "").toLowerCase() !== "module") {
                  if (jQuery2._evalUrl && !node.noModule) {
                    jQuery2._evalUrl(node.src, {
                      nonce: node.nonce,
                      crossOrigin: node.crossOrigin
                    }, doc);
                  }
                } else {
                  DOMEval(node.textContent, node, doc);
                }
              }
            }
          }
        }
      }
      return collection;
    }
    var rcheckableType = /^(?:checkbox|radio)$/i;
    var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
    function returnTrue() {
      return true;
    }
    function returnFalse() {
      return false;
    }
    function on(elem4, types, selector, data, fn, one2) {
      var origFn, type;
      if (typeof types === "object") {
        if (typeof selector !== "string") {
          data = data || selector;
          selector = void 0;
        }
        for (type in types) {
          on(elem4, type, selector, data, types[type], one2);
        }
        return elem4;
      }
      if (data == null && fn == null) {
        fn = selector;
        data = selector = void 0;
      } else if (fn == null) {
        if (typeof selector === "string") {
          fn = data;
          data = void 0;
        } else {
          fn = data;
          data = selector;
          selector = void 0;
        }
      }
      if (fn === false) {
        fn = returnFalse;
      } else if (!fn) {
        return elem4;
      }
      if (one2 === 1) {
        origFn = fn;
        fn = function(event) {
          jQuery2().off(event);
          return origFn.apply(this, arguments);
        };
        fn.guid = origFn.guid || (origFn.guid = jQuery2.guid++);
      }
      return elem4.each(function() {
        jQuery2.event.add(this, types, fn, data, selector);
      });
    }
    jQuery2.event = {
      add: function(elem4, types, handler, data, selector) {
        var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem4);
        if (!acceptData(elem4)) {
          return;
        }
        if (handler.handler) {
          handleObjIn = handler;
          handler = handleObjIn.handler;
          selector = handleObjIn.selector;
        }
        if (selector) {
          jQuery2.find.matchesSelector(documentElement$1, selector);
        }
        if (!handler.guid) {
          handler.guid = jQuery2.guid++;
        }
        if (!(events = elemData.events)) {
          events = elemData.events = /* @__PURE__ */ Object.create(null);
        }
        if (!(eventHandle = elemData.handle)) {
          eventHandle = elemData.handle = function(e) {
            return typeof jQuery2 !== "undefined" && jQuery2.event.triggered !== e.type ? jQuery2.event.dispatch.apply(elem4, arguments) : void 0;
          };
        }
        types = (types || "").match(rnothtmlwhite) || [""];
        t = types.length;
        while (t--) {
          tmp = rtypenamespace.exec(types[t]) || [];
          type = origType = tmp[1];
          namespaces = (tmp[2] || "").split(".").sort();
          if (!type) {
            continue;
          }
          special = jQuery2.event.special[type] || {};
          type = (selector ? special.delegateType : special.bindType) || type;
          special = jQuery2.event.special[type] || {};
          handleObj = jQuery2.extend({
            type,
            origType,
            data,
            handler,
            guid: handler.guid,
            selector,
            needsContext: selector && jQuery2.expr.match.needsContext.test(selector),
            namespace: namespaces.join(".")
          }, handleObjIn);
          if (!(handlers = events[type])) {
            handlers = events[type] = [];
            handlers.delegateCount = 0;
            if (!special.setup || special.setup.call(elem4, data, namespaces, eventHandle) === false) {
              if (elem4.addEventListener) {
                elem4.addEventListener(type, eventHandle);
              }
            }
          }
          if (special.add) {
            special.add.call(elem4, handleObj);
            if (!handleObj.handler.guid) {
              handleObj.handler.guid = handler.guid;
            }
          }
          if (selector) {
            handlers.splice(handlers.delegateCount++, 0, handleObj);
          } else {
            handlers.push(handleObj);
          }
        }
      },
      // Detach an event or set of events from an element
      remove: function(elem4, types, handler, selector, mappedTypes) {
        var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem4) && dataPriv.get(elem4);
        if (!elemData || !(events = elemData.events)) {
          return;
        }
        types = (types || "").match(rnothtmlwhite) || [""];
        t = types.length;
        while (t--) {
          tmp = rtypenamespace.exec(types[t]) || [];
          type = origType = tmp[1];
          namespaces = (tmp[2] || "").split(".").sort();
          if (!type) {
            for (type in events) {
              jQuery2.event.remove(elem4, type + types[t], handler, selector, true);
            }
            continue;
          }
          special = jQuery2.event.special[type] || {};
          type = (selector ? special.delegateType : special.bindType) || type;
          handlers = events[type] || [];
          tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
          origCount = j = handlers.length;
          while (j--) {
            handleObj = handlers[j];
            if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
              handlers.splice(j, 1);
              if (handleObj.selector) {
                handlers.delegateCount--;
              }
              if (special.remove) {
                special.remove.call(elem4, handleObj);
              }
            }
          }
          if (origCount && !handlers.length) {
            if (!special.teardown || special.teardown.call(elem4, namespaces, elemData.handle) === false) {
              jQuery2.removeEvent(elem4, type, elemData.handle);
            }
            delete events[type];
          }
        }
        if (jQuery2.isEmptyObject(events)) {
          dataPriv.remove(elem4, "handle events");
        }
      },
      dispatch: function(nativeEvent) {
        var i2, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery2.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery2.event.special[event.type] || {};
        args[0] = event;
        for (i2 = 1; i2 < arguments.length; i2++) {
          args[i2] = arguments[i2];
        }
        event.delegateTarget = this;
        if (special.preDispatch && special.preDispatch.call(this, event) === false) {
          return;
        }
        handlerQueue = jQuery2.event.handlers.call(this, event, handlers);
        i2 = 0;
        while ((matched = handlerQueue[i2++]) && !event.isPropagationStopped()) {
          event.currentTarget = matched.elem;
          j = 0;
          while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
            if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
              event.handleObj = handleObj;
              event.data = handleObj.data;
              ret = ((jQuery2.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
              if (ret !== void 0) {
                if ((event.result = ret) === false) {
                  event.preventDefault();
                  event.stopPropagation();
                }
              }
            }
          }
        }
        if (special.postDispatch) {
          special.postDispatch.call(this, event);
        }
        return event.result;
      },
      handlers: function(event, handlers) {
        var i2, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
        if (delegateCount && // Support: Firefox <=42 - 66+
        // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
        // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
        // Support: IE 11+
        // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
        !(event.type === "click" && event.button >= 1)) {
          for (; cur !== this; cur = cur.parentNode || this) {
            if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
              matchedHandlers = [];
              matchedSelectors = {};
              for (i2 = 0; i2 < delegateCount; i2++) {
                handleObj = handlers[i2];
                sel = handleObj.selector + " ";
                if (matchedSelectors[sel] === void 0) {
                  matchedSelectors[sel] = handleObj.needsContext ? jQuery2(sel, this).index(cur) > -1 : jQuery2.find(sel, this, null, [cur]).length;
                }
                if (matchedSelectors[sel]) {
                  matchedHandlers.push(handleObj);
                }
              }
              if (matchedHandlers.length) {
                handlerQueue.push({ elem: cur, handlers: matchedHandlers });
              }
            }
          }
        }
        cur = this;
        if (delegateCount < handlers.length) {
          handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
        }
        return handlerQueue;
      },
      addProp: function(name, hook) {
        Object.defineProperty(jQuery2.Event.prototype, name, {
          enumerable: true,
          configurable: true,
          get: typeof hook === "function" ? function() {
            if (this.originalEvent) {
              return hook(this.originalEvent);
            }
          } : function() {
            if (this.originalEvent) {
              return this.originalEvent[name];
            }
          },
          set: function(value) {
            Object.defineProperty(this, name, {
              enumerable: true,
              configurable: true,
              writable: true,
              value
            });
          }
        });
      },
      fix: function(originalEvent) {
        return originalEvent[jQuery2.expando] ? originalEvent : new jQuery2.Event(originalEvent);
      },
      special: jQuery2.extend(/* @__PURE__ */ Object.create(null), {
        load: {
          // Prevent triggered image.load events from bubbling to window.load
          noBubble: true
        },
        click: {
          // Utilize native event to ensure correct state for checkable inputs
          setup: function(data) {
            var el = this || data;
            if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
              leverageNative(el, "click", true);
            }
            return false;
          },
          trigger: function(data) {
            var el = this || data;
            if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
              leverageNative(el, "click");
            }
            return true;
          },
          // For cross-browser consistency, suppress native .click() on links
          // Also prevent it if we're currently inside a leveraged native-event stack
          _default: function(event) {
            var target = event.target;
            return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
          }
        },
        beforeunload: {
          postDispatch: function(event) {
            if (event.result !== void 0) {
              event.preventDefault();
            }
          }
        }
      })
    };
    function leverageNative(el, type, isSetup) {
      if (!isSetup) {
        if (dataPriv.get(el, type) === void 0) {
          jQuery2.event.add(el, type, returnTrue);
        }
        return;
      }
      dataPriv.set(el, type, false);
      jQuery2.event.add(el, type, {
        namespace: false,
        handler: function(event) {
          var result, saved = dataPriv.get(this, type);
          if (event.isTrigger & 1 && this[type]) {
            if (!saved.length) {
              saved = slice3.call(arguments);
              dataPriv.set(this, type, saved);
              this[type]();
              result = dataPriv.get(this, type);
              dataPriv.set(this, type, false);
              if (saved !== result) {
                event.stopImmediatePropagation();
                event.preventDefault();
                return result && result.value;
              }
            } else if ((jQuery2.event.special[type] || {}).delegateType) {
              event.stopPropagation();
            }
          } else if (saved.length) {
            dataPriv.set(this, type, {
              value: jQuery2.event.trigger(
                saved[0],
                saved.slice(1),
                this
              )
            });
            event.stopPropagation();
            event.isImmediatePropagationStopped = returnTrue;
          }
        }
      });
    }
    jQuery2.removeEvent = function(elem4, type, handle) {
      if (elem4.removeEventListener) {
        elem4.removeEventListener(type, handle);
      }
    };
    jQuery2.Event = function(src, props) {
      if (!(this instanceof jQuery2.Event)) {
        return new jQuery2.Event(src, props);
      }
      if (src && src.type) {
        this.originalEvent = src;
        this.type = src.type;
        this.isDefaultPrevented = src.defaultPrevented ? returnTrue : returnFalse;
        this.target = src.target;
        this.currentTarget = src.currentTarget;
        this.relatedTarget = src.relatedTarget;
      } else {
        this.type = src;
      }
      if (props) {
        jQuery2.extend(this, props);
      }
      this.timeStamp = src && src.timeStamp || Date.now();
      this[jQuery2.expando] = true;
    };
    jQuery2.Event.prototype = {
      constructor: jQuery2.Event,
      isDefaultPrevented: returnFalse,
      isPropagationStopped: returnFalse,
      isImmediatePropagationStopped: returnFalse,
      isSimulated: false,
      preventDefault: function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = returnTrue;
        if (e && !this.isSimulated) {
          e.preventDefault();
        }
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        this.isPropagationStopped = returnTrue;
        if (e && !this.isSimulated) {
          e.stopPropagation();
        }
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = returnTrue;
        if (e && !this.isSimulated) {
          e.stopImmediatePropagation();
        }
        this.stopPropagation();
      }
    };
    jQuery2.each({
      altKey: true,
      bubbles: true,
      cancelable: true,
      changedTouches: true,
      ctrlKey: true,
      detail: true,
      eventPhase: true,
      metaKey: true,
      pageX: true,
      pageY: true,
      shiftKey: true,
      view: true,
      "char": true,
      code: true,
      charCode: true,
      key: true,
      keyCode: true,
      button: true,
      buttons: true,
      clientX: true,
      clientY: true,
      offsetX: true,
      offsetY: true,
      pointerId: true,
      pointerType: true,
      screenX: true,
      screenY: true,
      targetTouches: true,
      toElement: true,
      touches: true,
      which: true
    }, jQuery2.event.addProp);
    jQuery2.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
      function focusMappedHandler(nativeEvent) {
        var event = jQuery2.event.fix(nativeEvent);
        event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
        event.isSimulated = true;
        if (event.target === event.currentTarget) {
          dataPriv.get(this, "handle")(event);
        }
      }
      jQuery2.event.special[type] = {
        // Utilize native event if possible so blur/focus sequence is correct
        setup: function() {
          leverageNative(this, type, true);
          if (isIE) {
            this.addEventListener(delegateType, focusMappedHandler);
          } else {
            return false;
          }
        },
        trigger: function() {
          leverageNative(this, type);
          return true;
        },
        teardown: function() {
          if (isIE) {
            this.removeEventListener(delegateType, focusMappedHandler);
          } else {
            return false;
          }
        },
        // Suppress native focus or blur if we're currently inside
        // a leveraged native-event stack
        _default: function(event) {
          return dataPriv.get(event.target, type);
        },
        delegateType
      };
    });
    jQuery2.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(orig, fix) {
      jQuery2.event.special[orig] = {
        delegateType: fix,
        bindType: fix,
        handle: function(event) {
          var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
          if (!related || related !== target && !jQuery2.contains(target, related)) {
            event.type = handleObj.origType;
            ret = handleObj.handler.apply(this, arguments);
            event.type = fix;
          }
          return ret;
        }
      };
    });
    jQuery2.fn.extend({
      on: function(types, selector, data, fn) {
        return on(this, types, selector, data, fn);
      },
      one: function(types, selector, data, fn) {
        return on(this, types, selector, data, fn, 1);
      },
      off: function(types, selector, fn) {
        var handleObj, type;
        if (types && types.preventDefault && types.handleObj) {
          handleObj = types.handleObj;
          jQuery2(types.delegateTarget).off(
            handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
            handleObj.selector,
            handleObj.handler
          );
          return this;
        }
        if (typeof types === "object") {
          for (type in types) {
            this.off(type, selector, types[type]);
          }
          return this;
        }
        if (selector === false || typeof selector === "function") {
          fn = selector;
          selector = void 0;
        }
        if (fn === false) {
          fn = returnFalse;
        }
        return this.each(function() {
          jQuery2.event.remove(this, types, fn, selector);
        });
      }
    });
    var rnoInnerhtml = /<script|<style|<link/i;
    function manipulationTarget(elem4, content) {
      if (nodeName(elem4, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
        return jQuery2(elem4).children("tbody")[0] || elem4;
      }
      return elem4;
    }
    function cloneCopyEvent(src, dest) {
      var type, i2, l, events = dataPriv.get(src, "events");
      if (dest.nodeType !== 1) {
        return;
      }
      if (events) {
        dataPriv.remove(dest, "handle events");
        for (type in events) {
          for (i2 = 0, l = events[type].length; i2 < l; i2++) {
            jQuery2.event.add(dest, type, events[type][i2]);
          }
        }
      }
      if (dataUser.hasData(src)) {
        dataUser.set(dest, jQuery2.extend({}, dataUser.get(src)));
      }
    }
    function remove(elem4, selector, keepData) {
      var node, nodes = selector ? jQuery2.filter(selector, elem4) : elem4, i2 = 0;
      for (; (node = nodes[i2]) != null; i2++) {
        if (!keepData && node.nodeType === 1) {
          jQuery2.cleanData(getAll(node));
        }
        if (node.parentNode) {
          if (keepData && isAttached(node)) {
            setGlobalEval(getAll(node, "script"));
          }
          node.parentNode.removeChild(node);
        }
      }
      return elem4;
    }
    jQuery2.extend({
      htmlPrefilter: function(html) {
        return html;
      },
      clone: function(elem4, dataAndEvents, deepDataAndEvents) {
        var i2, l, srcElements, destElements, clone = elem4.cloneNode(true), inPage = isAttached(elem4);
        if (isIE && (elem4.nodeType === 1 || elem4.nodeType === 11) && !jQuery2.isXMLDoc(elem4)) {
          destElements = getAll(clone);
          srcElements = getAll(elem4);
          for (i2 = 0, l = srcElements.length; i2 < l; i2++) {
            if (nodeName(destElements[i2], "textarea")) {
              destElements[i2].defaultValue = srcElements[i2].defaultValue;
            }
          }
        }
        if (dataAndEvents) {
          if (deepDataAndEvents) {
            srcElements = srcElements || getAll(elem4);
            destElements = destElements || getAll(clone);
            for (i2 = 0, l = srcElements.length; i2 < l; i2++) {
              cloneCopyEvent(srcElements[i2], destElements[i2]);
            }
          } else {
            cloneCopyEvent(elem4, clone);
          }
        }
        destElements = getAll(clone, "script");
        if (destElements.length > 0) {
          setGlobalEval(destElements, !inPage && getAll(elem4, "script"));
        }
        return clone;
      },
      cleanData: function(elems) {
        var data, elem4, type, special = jQuery2.event.special, i2 = 0;
        for (; (elem4 = elems[i2]) !== void 0; i2++) {
          if (acceptData(elem4)) {
            if (data = elem4[dataPriv.expando]) {
              if (data.events) {
                for (type in data.events) {
                  if (special[type]) {
                    jQuery2.event.remove(elem4, type);
                  } else {
                    jQuery2.removeEvent(elem4, type, data.handle);
                  }
                }
              }
              elem4[dataPriv.expando] = void 0;
            }
            if (elem4[dataUser.expando]) {
              elem4[dataUser.expando] = void 0;
            }
          }
        }
      }
    });
    jQuery2.fn.extend({
      detach: function(selector) {
        return remove(this, selector, true);
      },
      remove: function(selector) {
        return remove(this, selector);
      },
      text: function(value) {
        return access(this, function(value2) {
          return value2 === void 0 ? jQuery2.text(this) : this.empty().each(function() {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              this.textContent = value2;
            }
          });
        }, null, value, arguments.length);
      },
      append: function() {
        return domManip(this, arguments, function(elem4) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var target = manipulationTarget(this, elem4);
            target.appendChild(elem4);
          }
        });
      },
      prepend: function() {
        return domManip(this, arguments, function(elem4) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var target = manipulationTarget(this, elem4);
            target.insertBefore(elem4, target.firstChild);
          }
        });
      },
      before: function() {
        return domManip(this, arguments, function(elem4) {
          if (this.parentNode) {
            this.parentNode.insertBefore(elem4, this);
          }
        });
      },
      after: function() {
        return domManip(this, arguments, function(elem4) {
          if (this.parentNode) {
            this.parentNode.insertBefore(elem4, this.nextSibling);
          }
        });
      },
      empty: function() {
        var elem4, i2 = 0;
        for (; (elem4 = this[i2]) != null; i2++) {
          if (elem4.nodeType === 1) {
            jQuery2.cleanData(getAll(elem4, false));
            elem4.textContent = "";
          }
        }
        return this;
      },
      clone: function(dataAndEvents, deepDataAndEvents) {
        dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
        deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
        return this.map(function() {
          return jQuery2.clone(this, dataAndEvents, deepDataAndEvents);
        });
      },
      html: function(value) {
        return access(this, function(value2) {
          var elem4 = this[0] || {}, i2 = 0, l = this.length;
          if (value2 === void 0 && elem4.nodeType === 1) {
            return elem4.innerHTML;
          }
          if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
            value2 = jQuery2.htmlPrefilter(value2);
            try {
              for (; i2 < l; i2++) {
                elem4 = this[i2] || {};
                if (elem4.nodeType === 1) {
                  jQuery2.cleanData(getAll(elem4, false));
                  elem4.innerHTML = value2;
                }
              }
              elem4 = 0;
            } catch (e) {
            }
          }
          if (elem4) {
            this.empty().append(value2);
          }
        }, null, value, arguments.length);
      },
      replaceWith: function() {
        var ignored = [];
        return domManip(this, arguments, function(elem4) {
          var parent = this.parentNode;
          if (jQuery2.inArray(this, ignored) < 0) {
            jQuery2.cleanData(getAll(this));
            if (parent) {
              parent.replaceChild(elem4, this);
            }
          }
        }, ignored);
      }
    });
    jQuery2.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(name, original) {
      jQuery2.fn[name] = function(selector) {
        var elems, ret = [], insert3 = jQuery2(selector), last2 = insert3.length - 1, i2 = 0;
        for (; i2 <= last2; i2++) {
          elems = i2 === last2 ? this : this.clone(true);
          jQuery2(insert3[i2])[original](elems);
          push2.apply(ret, elems);
        }
        return this.pushStack(ret);
      };
    });
    var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
    var rcustomProp = /^--/;
    function getStyles(elem4) {
      var view = elem4.ownerDocument.defaultView;
      if (!view) {
        view = window2;
      }
      return view.getComputedStyle(elem4);
    }
    function swap(elem4, options, callback) {
      var ret, name, old = {};
      for (name in options) {
        old[name] = elem4.style[name];
        elem4.style[name] = options[name];
      }
      ret = callback.call(elem4);
      for (name in options) {
        elem4.style[name] = old[name];
      }
      return ret;
    }
    function curCSS(elem4, name, computed) {
      var ret, isCustomProp = rcustomProp.test(name);
      computed = computed || getStyles(elem4);
      if (computed) {
        ret = computed.getPropertyValue(name) || computed[name];
        if (isCustomProp && ret) {
          ret = ret.replace(rtrimCSS, "$1") || void 0;
        }
        if (ret === "" && !isAttached(elem4)) {
          ret = jQuery2.style(elem4, name);
        }
      }
      return ret !== void 0 ? (
        // Support: IE <=9 - 11+
        // IE returns zIndex value as an integer.
        ret + ""
      ) : ret;
    }
    var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document$1.createElement("div").style;
    function vendorPropName(name) {
      var capName = name[0].toUpperCase() + name.slice(1), i2 = cssPrefixes.length;
      while (i2--) {
        name = cssPrefixes[i2] + capName;
        if (name in emptyStyle) {
          return name;
        }
      }
    }
    function finalPropName(name) {
      if (name in emptyStyle) {
        return name;
      }
      return vendorPropName(name) || name;
    }
    var reliableTrDimensionsVal, reliableColDimensionsVal, table = document$1.createElement("table");
    function computeTableStyleTests() {
      if (
        // This is a singleton, we need to execute it only once
        !table || // Finish early in limited (non-browser) environments
        !table.style
      ) {
        return;
      }
      var trStyle, col = document$1.createElement("col"), tr = document$1.createElement("tr"), td = document$1.createElement("td");
      table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate;border-spacing:0";
      tr.style.cssText = "box-sizing:content-box;border:1px solid;height:1px";
      td.style.cssText = "height:9px;width:9px;padding:0";
      col.span = 2;
      documentElement$1.appendChild(table).appendChild(col).parentNode.appendChild(tr).appendChild(td).parentNode.appendChild(td.cloneNode(true));
      if (table.offsetWidth === 0) {
        documentElement$1.removeChild(table);
        return;
      }
      trStyle = window2.getComputedStyle(tr);
      reliableColDimensionsVal = isIE || Math.round(
        parseFloat(
          window2.getComputedStyle(col).width
        )
      ) === 18;
      reliableTrDimensionsVal = Math.round(parseFloat(trStyle.height) + parseFloat(trStyle.borderTopWidth) + parseFloat(trStyle.borderBottomWidth)) === tr.offsetHeight;
      documentElement$1.removeChild(table);
      table = null;
    }
    jQuery2.extend(support, {
      reliableTrDimensions: function() {
        computeTableStyleTests();
        return reliableTrDimensionsVal;
      },
      reliableColDimensions: function() {
        computeTableStyleTests();
        return reliableColDimensionsVal;
      }
    });
    var cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
      letterSpacing: "0",
      fontWeight: "400"
    };
    function setPositiveNumber(_elem, value, subtract) {
      var matches2 = rcssNum.exec(value);
      return matches2 ? (
        // Guard against undefined "subtract", e.g., when used as in cssHooks
        Math.max(0, matches2[2] - (subtract || 0)) + (matches2[3] || "px")
      ) : value;
    }
    function boxModelAdjustment(elem4, dimension, box, isBorderBox, styles, computedVal) {
      var i2 = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
      if (box === (isBorderBox ? "border" : "content")) {
        return 0;
      }
      for (; i2 < 4; i2 += 2) {
        if (box === "margin") {
          marginDelta += jQuery2.css(elem4, box + cssExpand[i2], true, styles);
        }
        if (!isBorderBox) {
          delta += jQuery2.css(elem4, "padding" + cssExpand[i2], true, styles);
          if (box !== "padding") {
            delta += jQuery2.css(elem4, "border" + cssExpand[i2] + "Width", true, styles);
          } else {
            extra += jQuery2.css(elem4, "border" + cssExpand[i2] + "Width", true, styles);
          }
        } else {
          if (box === "content") {
            delta -= jQuery2.css(elem4, "padding" + cssExpand[i2], true, styles);
          }
          if (box !== "margin") {
            delta -= jQuery2.css(elem4, "border" + cssExpand[i2] + "Width", true, styles);
          }
        }
      }
      if (!isBorderBox && computedVal >= 0) {
        delta += Math.max(0, Math.ceil(
          elem4["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5
          // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
          // Use an explicit zero to avoid NaN (gh-3964)
        )) || 0;
      }
      return delta + marginDelta;
    }
    function getWidthOrHeight(elem4, dimension, extra) {
      var styles = getStyles(elem4), boxSizingNeeded = isIE || extra, isBorderBox = boxSizingNeeded && jQuery2.css(elem4, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem4, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
      if (rnumnonpx.test(val)) {
        if (!extra) {
          return val;
        }
        val = "auto";
      }
      if (
        // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        (val === "auto" || // Support: IE 9 - 11+
        // Use offsetWidth/offsetHeight for when box sizing is unreliable.
        // In those cases, the computed value can be trusted to be border-box.
        isIE && isBorderBox || !support.reliableColDimensions() && nodeName(elem4, "col") || !support.reliableTrDimensions() && nodeName(elem4, "tr")) && // Make sure the element is visible & connected
        elem4.getClientRects().length
      ) {
        isBorderBox = jQuery2.css(elem4, "boxSizing", false, styles) === "border-box";
        valueIsBorderBox = offsetProp in elem4;
        if (valueIsBorderBox) {
          val = elem4[offsetProp];
        }
      }
      val = parseFloat(val) || 0;
      return val + boxModelAdjustment(
        elem4,
        dimension,
        extra || (isBorderBox ? "border" : "content"),
        valueIsBorderBox,
        styles,
        // Provide the current computed size to request scroll gutter calculation (gh-3589)
        val
      ) + "px";
    }
    jQuery2.extend({
      // Add in style property hooks for overriding the default
      // behavior of getting and setting a style property
      cssHooks: {},
      // Get and set the style property on a DOM Node
      style: function(elem4, name, value, extra) {
        if (!elem4 || elem4.nodeType === 3 || elem4.nodeType === 8 || !elem4.style) {
          return;
        }
        var ret, type, hooks, origName = cssCamelCase(name), isCustomProp = rcustomProp.test(name), style = elem4.style;
        if (!isCustomProp) {
          name = finalPropName(origName);
        }
        hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
        if (value !== void 0) {
          type = typeof value;
          if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
            value = adjustCSS(elem4, name, ret);
            type = "number";
          }
          if (value == null || value !== value) {
            return;
          }
          if (type === "number") {
            value += ret && ret[3] || (isAutoPx(origName) ? "px" : "");
          }
          if (isIE && value === "" && name.indexOf("background") === 0) {
            style[name] = "inherit";
          }
          if (!hooks || !("set" in hooks) || (value = hooks.set(elem4, value, extra)) !== void 0) {
            if (isCustomProp) {
              style.setProperty(name, value);
            } else {
              style[name] = value;
            }
          }
        } else {
          if (hooks && "get" in hooks && (ret = hooks.get(elem4, false, extra)) !== void 0) {
            return ret;
          }
          return style[name];
        }
      },
      css: function(elem4, name, extra, styles) {
        var val, num, hooks, origName = cssCamelCase(name), isCustomProp = rcustomProp.test(name);
        if (!isCustomProp) {
          name = finalPropName(origName);
        }
        hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
        if (hooks && "get" in hooks) {
          val = hooks.get(elem4, true, extra);
        }
        if (val === void 0) {
          val = curCSS(elem4, name, styles);
        }
        if (val === "normal" && name in cssNormalTransform) {
          val = cssNormalTransform[name];
        }
        if (extra === "" || extra) {
          num = parseFloat(val);
          return extra === true || isFinite(num) ? num || 0 : val;
        }
        return val;
      }
    });
    jQuery2.each(["height", "width"], function(_i, dimension) {
      jQuery2.cssHooks[dimension] = {
        get: function(elem4, computed, extra) {
          if (computed) {
            return jQuery2.css(elem4, "display") === "none" ? swap(elem4, cssShow, function() {
              return getWidthOrHeight(elem4, dimension, extra);
            }) : getWidthOrHeight(elem4, dimension, extra);
          }
        },
        set: function(elem4, value, extra) {
          var matches2, styles = getStyles(elem4), isBorderBox = extra && jQuery2.css(elem4, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(
            elem4,
            dimension,
            extra,
            isBorderBox,
            styles
          ) : 0;
          if (subtract && (matches2 = rcssNum.exec(value)) && (matches2[3] || "px") !== "px") {
            elem4.style[dimension] = value;
            value = jQuery2.css(elem4, dimension);
          }
          return setPositiveNumber(elem4, value, subtract);
        }
      };
    });
    jQuery2.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(prefix, suffix) {
      jQuery2.cssHooks[prefix + suffix] = {
        expand: function(value) {
          var i2 = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
          for (; i2 < 4; i2++) {
            expanded[prefix + cssExpand[i2] + suffix] = parts[i2] || parts[i2 - 2] || parts[0];
          }
          return expanded;
        }
      };
      if (prefix !== "margin") {
        jQuery2.cssHooks[prefix + suffix].set = setPositiveNumber;
      }
    });
    jQuery2.fn.extend({
      css: function(name, value) {
        return access(this, function(elem4, name2, value2) {
          var styles, len, map7 = {}, i2 = 0;
          if (Array.isArray(name2)) {
            styles = getStyles(elem4);
            len = name2.length;
            for (; i2 < len; i2++) {
              map7[name2[i2]] = jQuery2.css(elem4, name2[i2], false, styles);
            }
            return map7;
          }
          return value2 !== void 0 ? jQuery2.style(elem4, name2, value2) : jQuery2.css(elem4, name2);
        }, name, value, arguments.length > 1);
      }
    });
    function Tween(elem4, options, prop, end, easing) {
      return new Tween.prototype.init(elem4, options, prop, end, easing);
    }
    jQuery2.Tween = Tween;
    Tween.prototype = {
      constructor: Tween,
      init: function(elem4, options, prop, end, easing, unit2) {
        this.elem = elem4;
        this.prop = prop;
        this.easing = easing || jQuery2.easing._default;
        this.options = options;
        this.start = this.now = this.cur();
        this.end = end;
        this.unit = unit2 || (isAutoPx(prop) ? "px" : "");
      },
      cur: function() {
        var hooks = Tween.propHooks[this.prop];
        return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
      },
      run: function(percent) {
        var eased, hooks = Tween.propHooks[this.prop];
        if (this.options.duration) {
          this.pos = eased = jQuery2.easing[this.easing](
            percent,
            this.options.duration * percent,
            0,
            1,
            this.options.duration
          );
        } else {
          this.pos = eased = percent;
        }
        this.now = (this.end - this.start) * eased + this.start;
        if (this.options.step) {
          this.options.step.call(this.elem, this.now, this);
        }
        if (hooks && hooks.set) {
          hooks.set(this);
        } else {
          Tween.propHooks._default.set(this);
        }
        return this;
      }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
      _default: {
        get: function(tween) {
          var result;
          if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
            return tween.elem[tween.prop];
          }
          result = jQuery2.css(tween.elem, tween.prop, "");
          return !result || result === "auto" ? 0 : result;
        },
        set: function(tween) {
          if (jQuery2.fx.step[tween.prop]) {
            jQuery2.fx.step[tween.prop](tween);
          } else if (tween.elem.nodeType === 1 && (jQuery2.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
            jQuery2.style(tween.elem, tween.prop, tween.now + tween.unit);
          } else {
            tween.elem[tween.prop] = tween.now;
          }
        }
      }
    };
    jQuery2.easing = {
      linear: function(p) {
        return p;
      },
      swing: function(p) {
        return 0.5 - Math.cos(p * Math.PI) / 2;
      },
      _default: "swing"
    };
    jQuery2.fx = Tween.prototype.init;
    jQuery2.fx.step = {};
    var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
    function schedule() {
      if (inProgress) {
        if (document$1.hidden === false && window2.requestAnimationFrame) {
          window2.requestAnimationFrame(schedule);
        } else {
          window2.setTimeout(schedule, 13);
        }
        jQuery2.fx.tick();
      }
    }
    function createFxNow() {
      window2.setTimeout(function() {
        fxNow = void 0;
      });
      return fxNow = Date.now();
    }
    function genFx(type, includeWidth) {
      var which, i2 = 0, attrs = { height: type };
      includeWidth = includeWidth ? 1 : 0;
      for (; i2 < 4; i2 += 2 - includeWidth) {
        which = cssExpand[i2];
        attrs["margin" + which] = attrs["padding" + which] = type;
      }
      if (includeWidth) {
        attrs.opacity = attrs.width = type;
      }
      return attrs;
    }
    function createTween(value, prop, animation) {
      var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index2 = 0, length4 = collection.length;
      for (; index2 < length4; index2++) {
        if (tween = collection[index2].call(animation, prop, value)) {
          return tween;
        }
      }
    }
    function defaultPrefilter(elem4, props, opts) {
      var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem4.style, hidden = elem4.nodeType && isHiddenWithinTree(elem4), dataShow = dataPriv.get(elem4, "fxshow");
      if (!opts.queue) {
        hooks = jQuery2._queueHooks(elem4, "fx");
        if (hooks.unqueued == null) {
          hooks.unqueued = 0;
          oldfire = hooks.empty.fire;
          hooks.empty.fire = function() {
            if (!hooks.unqueued) {
              oldfire();
            }
          };
        }
        hooks.unqueued++;
        anim.always(function() {
          anim.always(function() {
            hooks.unqueued--;
            if (!jQuery2.queue(elem4, "fx").length) {
              hooks.empty.fire();
            }
          });
        });
      }
      for (prop in props) {
        value = props[prop];
        if (rfxtypes.test(value)) {
          delete props[prop];
          toggle = toggle || value === "toggle";
          if (value === (hidden ? "hide" : "show")) {
            if (value === "show" && dataShow && dataShow[prop] !== void 0) {
              hidden = true;
            } else {
              continue;
            }
          }
          orig[prop] = dataShow && dataShow[prop] || jQuery2.style(elem4, prop);
        }
      }
      propTween = !jQuery2.isEmptyObject(props);
      if (!propTween && jQuery2.isEmptyObject(orig)) {
        return;
      }
      if (isBox && elem4.nodeType === 1) {
        opts.overflow = [style.overflow, style.overflowX, style.overflowY];
        restoreDisplay = dataShow && dataShow.display;
        if (restoreDisplay == null) {
          restoreDisplay = dataPriv.get(elem4, "display");
        }
        display = jQuery2.css(elem4, "display");
        if (display === "none") {
          if (restoreDisplay) {
            display = restoreDisplay;
          } else {
            showHide([elem4], true);
            restoreDisplay = elem4.style.display || restoreDisplay;
            display = jQuery2.css(elem4, "display");
            showHide([elem4]);
          }
        }
        if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
          if (jQuery2.css(elem4, "float") === "none") {
            if (!propTween) {
              anim.done(function() {
                style.display = restoreDisplay;
              });
              if (restoreDisplay == null) {
                display = style.display;
                restoreDisplay = display === "none" ? "" : display;
              }
            }
            style.display = "inline-block";
          }
        }
      }
      if (opts.overflow) {
        style.overflow = "hidden";
        anim.always(function() {
          style.overflow = opts.overflow[0];
          style.overflowX = opts.overflow[1];
          style.overflowY = opts.overflow[2];
        });
      }
      propTween = false;
      for (prop in orig) {
        if (!propTween) {
          if (dataShow) {
            if ("hidden" in dataShow) {
              hidden = dataShow.hidden;
            }
          } else {
            dataShow = dataPriv.set(elem4, "fxshow", { display: restoreDisplay });
          }
          if (toggle) {
            dataShow.hidden = !hidden;
          }
          if (hidden) {
            showHide([elem4], true);
          }
          anim.done(function() {
            if (!hidden) {
              showHide([elem4]);
            }
            dataPriv.remove(elem4, "fxshow");
            for (prop in orig) {
              jQuery2.style(elem4, prop, orig[prop]);
            }
          });
        }
        propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
        if (!(prop in dataShow)) {
          dataShow[prop] = propTween.start;
          if (hidden) {
            propTween.end = propTween.start;
            propTween.start = 0;
          }
        }
      }
    }
    function propFilter(props, specialEasing) {
      var index2, name, easing, value, hooks;
      for (index2 in props) {
        name = cssCamelCase(index2);
        easing = specialEasing[name];
        value = props[index2];
        if (Array.isArray(value)) {
          easing = value[1];
          value = props[index2] = value[0];
        }
        if (index2 !== name) {
          props[name] = value;
          delete props[index2];
        }
        hooks = jQuery2.cssHooks[name];
        if (hooks && "expand" in hooks) {
          value = hooks.expand(value);
          delete props[name];
          for (index2 in value) {
            if (!(index2 in props)) {
              props[index2] = value[index2];
              specialEasing[index2] = easing;
            }
          }
        } else {
          specialEasing[name] = easing;
        }
      }
    }
    function Animation(elem4, properties, options) {
      var result, stopped, index2 = 0, length4 = Animation.prefilters.length, deferred = jQuery2.Deferred().always(function() {
        delete tick.elem;
      }), tick = function() {
        if (stopped) {
          return false;
        }
        var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), percent = 1 - (remaining / animation.duration || 0), index3 = 0, length5 = animation.tweens.length;
        for (; index3 < length5; index3++) {
          animation.tweens[index3].run(percent);
        }
        deferred.notifyWith(elem4, [animation, percent, remaining]);
        if (percent < 1 && length5) {
          return remaining;
        }
        if (!length5) {
          deferred.notifyWith(elem4, [animation, 1, 0]);
        }
        deferred.resolveWith(elem4, [animation]);
        return false;
      }, animation = deferred.promise({
        elem: elem4,
        props: jQuery2.extend({}, properties),
        opts: jQuery2.extend(true, {
          specialEasing: {},
          easing: jQuery2.easing._default
        }, options),
        originalProperties: properties,
        originalOptions: options,
        startTime: fxNow || createFxNow(),
        duration: options.duration,
        tweens: [],
        createTween: function(prop, end) {
          var tween = jQuery2.Tween(
            elem4,
            animation.opts,
            prop,
            end,
            animation.opts.specialEasing[prop] || animation.opts.easing
          );
          animation.tweens.push(tween);
          return tween;
        },
        stop: function(gotoEnd) {
          var index3 = 0, length5 = gotoEnd ? animation.tweens.length : 0;
          if (stopped) {
            return this;
          }
          stopped = true;
          for (; index3 < length5; index3++) {
            animation.tweens[index3].run(1);
          }
          if (gotoEnd) {
            deferred.notifyWith(elem4, [animation, 1, 0]);
            deferred.resolveWith(elem4, [animation, gotoEnd]);
          } else {
            deferred.rejectWith(elem4, [animation, gotoEnd]);
          }
          return this;
        }
      }), props = animation.props;
      propFilter(props, animation.opts.specialEasing);
      for (; index2 < length4; index2++) {
        result = Animation.prefilters[index2].call(animation, elem4, props, animation.opts);
        if (result) {
          if (typeof result.stop === "function") {
            jQuery2._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
          }
          return result;
        }
      }
      jQuery2.map(props, createTween, animation);
      if (typeof animation.opts.start === "function") {
        animation.opts.start.call(elem4, animation);
      }
      animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
      jQuery2.fx.timer(
        jQuery2.extend(tick, {
          elem: elem4,
          anim: animation,
          queue: animation.opts.queue
        })
      );
      return animation;
    }
    jQuery2.Animation = jQuery2.extend(Animation, {
      tweeners: {
        "*": [function(prop, value) {
          var tween = this.createTween(prop, value);
          adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
          return tween;
        }]
      },
      tweener: function(props, callback) {
        if (typeof props === "function") {
          callback = props;
          props = ["*"];
        } else {
          props = props.match(rnothtmlwhite);
        }
        var prop, index2 = 0, length4 = props.length;
        for (; index2 < length4; index2++) {
          prop = props[index2];
          Animation.tweeners[prop] = Animation.tweeners[prop] || [];
          Animation.tweeners[prop].unshift(callback);
        }
      },
      prefilters: [defaultPrefilter],
      prefilter: function(callback, prepend) {
        if (prepend) {
          Animation.prefilters.unshift(callback);
        } else {
          Animation.prefilters.push(callback);
        }
      }
    });
    jQuery2.speed = function(speed, easing, fn) {
      var opt = speed && typeof speed === "object" ? jQuery2.extend({}, speed) : {
        complete: fn || easing || typeof speed === "function" && speed,
        duration: speed,
        easing: fn && easing || easing && typeof easing !== "function" && easing
      };
      if (jQuery2.fx.off) {
        opt.duration = 0;
      } else {
        if (typeof opt.duration !== "number") {
          if (opt.duration in jQuery2.fx.speeds) {
            opt.duration = jQuery2.fx.speeds[opt.duration];
          } else {
            opt.duration = jQuery2.fx.speeds._default;
          }
        }
      }
      if (opt.queue == null || opt.queue === true) {
        opt.queue = "fx";
      }
      opt.old = opt.complete;
      opt.complete = function() {
        if (typeof opt.old === "function") {
          opt.old.call(this);
        }
        if (opt.queue) {
          jQuery2.dequeue(this, opt.queue);
        }
      };
      return opt;
    };
    jQuery2.fn.extend({
      fadeTo: function(speed, to, easing, callback) {
        return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
      },
      animate: function(prop, speed, easing, callback) {
        var empty4 = jQuery2.isEmptyObject(prop), optall = jQuery2.speed(speed, easing, callback), doAnimation = function() {
          var anim = Animation(this, jQuery2.extend({}, prop), optall);
          if (empty4 || dataPriv.get(this, "finish")) {
            anim.stop(true);
          }
        };
        doAnimation.finish = doAnimation;
        return empty4 || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
      },
      stop: function(type, clearQueue, gotoEnd) {
        var stopQueue = function(hooks) {
          var stop = hooks.stop;
          delete hooks.stop;
          stop(gotoEnd);
        };
        if (typeof type !== "string") {
          gotoEnd = clearQueue;
          clearQueue = type;
          type = void 0;
        }
        if (clearQueue) {
          this.queue(type || "fx", []);
        }
        return this.each(function() {
          var dequeue = true, index2 = type != null && type + "queueHooks", timers = jQuery2.timers, data = dataPriv.get(this);
          if (index2) {
            if (data[index2] && data[index2].stop) {
              stopQueue(data[index2]);
            }
          } else {
            for (index2 in data) {
              if (data[index2] && data[index2].stop && rrun.test(index2)) {
                stopQueue(data[index2]);
              }
            }
          }
          for (index2 = timers.length; index2--; ) {
            if (timers[index2].elem === this && (type == null || timers[index2].queue === type)) {
              timers[index2].anim.stop(gotoEnd);
              dequeue = false;
              timers.splice(index2, 1);
            }
          }
          if (dequeue || !gotoEnd) {
            jQuery2.dequeue(this, type);
          }
        });
      },
      finish: function(type) {
        if (type !== false) {
          type = type || "fx";
        }
        return this.each(function() {
          var index2, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery2.timers, length4 = queue ? queue.length : 0;
          data.finish = true;
          jQuery2.queue(this, type, []);
          if (hooks && hooks.stop) {
            hooks.stop.call(this, true);
          }
          for (index2 = timers.length; index2--; ) {
            if (timers[index2].elem === this && timers[index2].queue === type) {
              timers[index2].anim.stop(true);
              timers.splice(index2, 1);
            }
          }
          for (index2 = 0; index2 < length4; index2++) {
            if (queue[index2] && queue[index2].finish) {
              queue[index2].finish.call(this);
            }
          }
          delete data.finish;
        });
      }
    });
    jQuery2.each(["toggle", "show", "hide"], function(_i, name) {
      var cssFn = jQuery2.fn[name];
      jQuery2.fn[name] = function(speed, easing, callback) {
        return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
      };
    });
    jQuery2.each({
      slideDown: genFx("show"),
      slideUp: genFx("hide"),
      slideToggle: genFx("toggle"),
      fadeIn: { opacity: "show" },
      fadeOut: { opacity: "hide" },
      fadeToggle: { opacity: "toggle" }
    }, function(name, props) {
      jQuery2.fn[name] = function(speed, easing, callback) {
        return this.animate(props, speed, easing, callback);
      };
    });
    jQuery2.timers = [];
    jQuery2.fx.tick = function() {
      var timer, i2 = 0, timers = jQuery2.timers;
      fxNow = Date.now();
      for (; i2 < timers.length; i2++) {
        timer = timers[i2];
        if (!timer() && timers[i2] === timer) {
          timers.splice(i2--, 1);
        }
      }
      if (!timers.length) {
        jQuery2.fx.stop();
      }
      fxNow = void 0;
    };
    jQuery2.fx.timer = function(timer) {
      jQuery2.timers.push(timer);
      jQuery2.fx.start();
    };
    jQuery2.fx.start = function() {
      if (inProgress) {
        return;
      }
      inProgress = true;
      schedule();
    };
    jQuery2.fx.stop = function() {
      inProgress = null;
    };
    jQuery2.fx.speeds = {
      slow: 600,
      fast: 200,
      // Default speed
      _default: 400
    };
    jQuery2.fn.delay = function(time, type) {
      time = jQuery2.fx ? jQuery2.fx.speeds[time] || time : time;
      type = type || "fx";
      return this.queue(type, function(next, hooks) {
        var timeout = window2.setTimeout(next, time);
        hooks.stop = function() {
          window2.clearTimeout(timeout);
        };
      });
    };
    var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
    jQuery2.fn.extend({
      prop: function(name, value) {
        return access(this, jQuery2.prop, name, value, arguments.length > 1);
      },
      removeProp: function(name) {
        return this.each(function() {
          delete this[jQuery2.propFix[name] || name];
        });
      }
    });
    jQuery2.extend({
      prop: function(elem4, name, value) {
        var ret, hooks, nType = elem4.nodeType;
        if (nType === 3 || nType === 8 || nType === 2) {
          return;
        }
        if (nType !== 1 || !jQuery2.isXMLDoc(elem4)) {
          name = jQuery2.propFix[name] || name;
          hooks = jQuery2.propHooks[name];
        }
        if (value !== void 0) {
          if (hooks && "set" in hooks && (ret = hooks.set(elem4, value, name)) !== void 0) {
            return ret;
          }
          return elem4[name] = value;
        }
        if (hooks && "get" in hooks && (ret = hooks.get(elem4, name)) !== null) {
          return ret;
        }
        return elem4[name];
      },
      propHooks: {
        tabIndex: {
          get: function(elem4) {
            var tabindex = elem4.getAttribute("tabindex");
            if (tabindex) {
              return parseInt(tabindex, 10);
            }
            if (rfocusable.test(elem4.nodeName) || // href-less anchor's `tabIndex` property value is `0` and
            // the `tabindex` attribute value: `null`. We want `-1`.
            rclickable.test(elem4.nodeName) && elem4.href) {
              return 0;
            }
            return -1;
          }
        }
      },
      propFix: {
        "for": "htmlFor",
        "class": "className"
      }
    });
    if (isIE) {
      jQuery2.propHooks.selected = {
        get: function(elem4) {
          var parent = elem4.parentNode;
          if (parent && parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
          return null;
        },
        set: function(elem4) {
          var parent = elem4.parentNode;
          if (parent) {
            parent.selectedIndex;
            if (parent.parentNode) {
              parent.parentNode.selectedIndex;
            }
          }
        }
      };
    }
    jQuery2.each([
      "tabIndex",
      "readOnly",
      "maxLength",
      "cellSpacing",
      "cellPadding",
      "rowSpan",
      "colSpan",
      "useMap",
      "frameBorder",
      "contentEditable"
    ], function() {
      jQuery2.propFix[this.toLowerCase()] = this;
    });
    function stripAndCollapse(value) {
      var tokens = value.match(rnothtmlwhite) || [];
      return tokens.join(" ");
    }
    function getClass(elem4) {
      return elem4.getAttribute && elem4.getAttribute("class") || "";
    }
    function classesToArray(value) {
      if (Array.isArray(value)) {
        return value;
      }
      if (typeof value === "string") {
        return value.match(rnothtmlwhite) || [];
      }
      return [];
    }
    jQuery2.fn.extend({
      addClass: function(value) {
        var classNames, cur, curValue, className, i2, finalValue;
        if (typeof value === "function") {
          return this.each(function(j) {
            jQuery2(this).addClass(value.call(this, j, getClass(this)));
          });
        }
        classNames = classesToArray(value);
        if (classNames.length) {
          return this.each(function() {
            curValue = getClass(this);
            cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
            if (cur) {
              for (i2 = 0; i2 < classNames.length; i2++) {
                className = classNames[i2];
                if (cur.indexOf(" " + className + " ") < 0) {
                  cur += className + " ";
                }
              }
              finalValue = stripAndCollapse(cur);
              if (curValue !== finalValue) {
                this.setAttribute("class", finalValue);
              }
            }
          });
        }
        return this;
      },
      removeClass: function(value) {
        var classNames, cur, curValue, className, i2, finalValue;
        if (typeof value === "function") {
          return this.each(function(j) {
            jQuery2(this).removeClass(value.call(this, j, getClass(this)));
          });
        }
        if (!arguments.length) {
          return this.attr("class", "");
        }
        classNames = classesToArray(value);
        if (classNames.length) {
          return this.each(function() {
            curValue = getClass(this);
            cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
            if (cur) {
              for (i2 = 0; i2 < classNames.length; i2++) {
                className = classNames[i2];
                while (cur.indexOf(" " + className + " ") > -1) {
                  cur = cur.replace(" " + className + " ", " ");
                }
              }
              finalValue = stripAndCollapse(cur);
              if (curValue !== finalValue) {
                this.setAttribute("class", finalValue);
              }
            }
          });
        }
        return this;
      },
      toggleClass: function(value, stateVal) {
        var classNames, className, i2, self;
        if (typeof value === "function") {
          return this.each(function(i3) {
            jQuery2(this).toggleClass(
              value.call(this, i3, getClass(this), stateVal),
              stateVal
            );
          });
        }
        if (typeof stateVal === "boolean") {
          return stateVal ? this.addClass(value) : this.removeClass(value);
        }
        classNames = classesToArray(value);
        if (classNames.length) {
          return this.each(function() {
            self = jQuery2(this);
            for (i2 = 0; i2 < classNames.length; i2++) {
              className = classNames[i2];
              if (self.hasClass(className)) {
                self.removeClass(className);
              } else {
                self.addClass(className);
              }
            }
          });
        }
        return this;
      },
      hasClass: function(selector) {
        var className, elem4, i2 = 0;
        className = " " + selector + " ";
        while (elem4 = this[i2++]) {
          if (elem4.nodeType === 1 && (" " + stripAndCollapse(getClass(elem4)) + " ").indexOf(className) > -1) {
            return true;
          }
        }
        return false;
      }
    });
    jQuery2.fn.extend({
      val: function(value) {
        var hooks, ret, valueIsFunction, elem4 = this[0];
        if (!arguments.length) {
          if (elem4) {
            hooks = jQuery2.valHooks[elem4.type] || jQuery2.valHooks[elem4.nodeName.toLowerCase()];
            if (hooks && "get" in hooks && (ret = hooks.get(elem4, "value")) !== void 0) {
              return ret;
            }
            ret = elem4.value;
            return ret == null ? "" : ret;
          }
          return;
        }
        valueIsFunction = typeof value === "function";
        return this.each(function(i2) {
          var val;
          if (this.nodeType !== 1) {
            return;
          }
          if (valueIsFunction) {
            val = value.call(this, i2, jQuery2(this).val());
          } else {
            val = value;
          }
          if (val == null) {
            val = "";
          } else if (typeof val === "number") {
            val += "";
          } else if (Array.isArray(val)) {
            val = jQuery2.map(val, function(value2) {
              return value2 == null ? "" : value2 + "";
            });
          }
          hooks = jQuery2.valHooks[this.type] || jQuery2.valHooks[this.nodeName.toLowerCase()];
          if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
            this.value = val;
          }
        });
      }
    });
    jQuery2.extend({
      valHooks: {
        select: {
          get: function(elem4) {
            var value, option, i2, options = elem4.options, index2 = elem4.selectedIndex, one2 = elem4.type === "select-one", values2 = one2 ? null : [], max3 = one2 ? index2 + 1 : options.length;
            if (index2 < 0) {
              i2 = max3;
            } else {
              i2 = one2 ? index2 : 0;
            }
            for (; i2 < max3; i2++) {
              option = options[i2];
              if (option.selected && // Don't return options that are disabled or in a disabled optgroup
              !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                value = jQuery2(option).val();
                if (one2) {
                  return value;
                }
                values2.push(value);
              }
            }
            return values2;
          },
          set: function(elem4, value) {
            var optionSet, option, options = elem4.options, values2 = jQuery2.makeArray(value), i2 = options.length;
            while (i2--) {
              option = options[i2];
              if (option.selected = jQuery2.inArray(jQuery2(option).val(), values2) > -1) {
                optionSet = true;
              }
            }
            if (!optionSet) {
              elem4.selectedIndex = -1;
            }
            return values2;
          }
        }
      }
    });
    if (isIE) {
      jQuery2.valHooks.option = {
        get: function(elem4) {
          var val = elem4.getAttribute("value");
          return val != null ? val : (
            // Support: IE <=10 - 11+
            // option.text throws exceptions (trac-14686, trac-14858)
            // Strip and collapse whitespace
            // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
            stripAndCollapse(jQuery2.text(elem4))
          );
        }
      };
    }
    jQuery2.each(["radio", "checkbox"], function() {
      jQuery2.valHooks[this] = {
        set: function(elem4, value) {
          if (Array.isArray(value)) {
            return elem4.checked = jQuery2.inArray(jQuery2(elem4).val(), value) > -1;
          }
        }
      };
    });
    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
      e.stopPropagation();
    };
    jQuery2.extend(jQuery2.event, {
      trigger: function(event, data, elem4, onlyHandlers) {
        var i2, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem4 || document$1], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
        cur = lastElement = tmp = elem4 = elem4 || document$1;
        if (elem4.nodeType === 3 || elem4.nodeType === 8) {
          return;
        }
        if (rfocusMorph.test(type + jQuery2.event.triggered)) {
          return;
        }
        if (type.indexOf(".") > -1) {
          namespaces = type.split(".");
          type = namespaces.shift();
          namespaces.sort();
        }
        ontype = type.indexOf(":") < 0 && "on" + type;
        event = event[jQuery2.expando] ? event : new jQuery2.Event(type, typeof event === "object" && event);
        event.isTrigger = onlyHandlers ? 2 : 3;
        event.namespace = namespaces.join(".");
        event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
        event.result = void 0;
        if (!event.target) {
          event.target = elem4;
        }
        data = data == null ? [event] : jQuery2.makeArray(data, [event]);
        special = jQuery2.event.special[type] || {};
        if (!onlyHandlers && special.trigger && special.trigger.apply(elem4, data) === false) {
          return;
        }
        if (!onlyHandlers && !special.noBubble && !isWindow(elem4)) {
          bubbleType = special.delegateType || type;
          if (!rfocusMorph.test(bubbleType + type)) {
            cur = cur.parentNode;
          }
          for (; cur; cur = cur.parentNode) {
            eventPath.push(cur);
            tmp = cur;
          }
          if (tmp === (elem4.ownerDocument || document$1)) {
            eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
          }
        }
        i2 = 0;
        while ((cur = eventPath[i2++]) && !event.isPropagationStopped()) {
          lastElement = cur;
          event.type = i2 > 1 ? bubbleType : special.bindType || type;
          handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
          if (handle) {
            handle.apply(cur, data);
          }
          handle = ontype && cur[ontype];
          if (handle && handle.apply && acceptData(cur)) {
            event.result = handle.apply(cur, data);
            if (event.result === false) {
              event.preventDefault();
            }
          }
        }
        event.type = type;
        if (!onlyHandlers && !event.isDefaultPrevented()) {
          if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem4)) {
            if (ontype && typeof elem4[type] === "function" && !isWindow(elem4)) {
              tmp = elem4[ontype];
              if (tmp) {
                elem4[ontype] = null;
              }
              jQuery2.event.triggered = type;
              if (event.isPropagationStopped()) {
                lastElement.addEventListener(type, stopPropagationCallback);
              }
              elem4[type]();
              if (event.isPropagationStopped()) {
                lastElement.removeEventListener(type, stopPropagationCallback);
              }
              jQuery2.event.triggered = void 0;
              if (tmp) {
                elem4[ontype] = tmp;
              }
            }
          }
        }
        return event.result;
      },
      // Piggyback on a donor event to simulate a different one
      // Used only for `focus(in | out)` events
      simulate: function(type, elem4, event) {
        var e = jQuery2.extend(
          new jQuery2.Event(),
          event,
          {
            type,
            isSimulated: true
          }
        );
        jQuery2.event.trigger(e, null, elem4);
      }
    });
    jQuery2.fn.extend({
      trigger: function(type, data) {
        return this.each(function() {
          jQuery2.event.trigger(type, data, this);
        });
      },
      triggerHandler: function(type, data) {
        var elem4 = this[0];
        if (elem4) {
          return jQuery2.event.trigger(type, data, elem4, true);
        }
      }
    });
    var location2 = window2.location;
    var nonce = { guid: Date.now() };
    var rquery = /\?/;
    jQuery2.parseXML = function(data) {
      var xml, parserErrorElem;
      if (!data || typeof data !== "string") {
        return null;
      }
      try {
        xml = new window2.DOMParser().parseFromString(data, "text/xml");
      } catch (e) {
      }
      parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
      if (!xml || parserErrorElem) {
        jQuery2.error("Invalid XML: " + (parserErrorElem ? jQuery2.map(parserErrorElem.childNodes, function(el) {
          return el.textContent;
        }).join("\n") : data));
      }
      return xml;
    };
    var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
    function buildParams(prefix, obj, traditional, add4) {
      var name;
      if (Array.isArray(obj)) {
        jQuery2.each(obj, function(i2, v) {
          if (traditional || rbracket.test(prefix)) {
            add4(prefix, v);
          } else {
            buildParams(
              prefix + "[" + (typeof v === "object" && v != null ? i2 : "") + "]",
              v,
              traditional,
              add4
            );
          }
        });
      } else if (!traditional && toType(obj) === "object") {
        for (name in obj) {
          buildParams(prefix + "[" + name + "]", obj[name], traditional, add4);
        }
      } else {
        add4(prefix, obj);
      }
    }
    jQuery2.param = function(a, traditional) {
      var prefix, s = [], add4 = function(key2, valueOrFunction) {
        var value = typeof valueOrFunction === "function" ? valueOrFunction() : valueOrFunction;
        s[s.length] = encodeURIComponent(key2) + "=" + encodeURIComponent(value == null ? "" : value);
      };
      if (a == null) {
        return "";
      }
      if (Array.isArray(a) || a.jquery && !jQuery2.isPlainObject(a)) {
        jQuery2.each(a, function() {
          add4(this.name, this.value);
        });
      } else {
        for (prefix in a) {
          buildParams(prefix, a[prefix], traditional, add4);
        }
      }
      return s.join("&");
    };
    jQuery2.fn.extend({
      serialize: function() {
        return jQuery2.param(this.serializeArray());
      },
      serializeArray: function() {
        return this.map(function() {
          var elements = jQuery2.prop(this, "elements");
          return elements ? jQuery2.makeArray(elements) : this;
        }).filter(function() {
          var type = this.type;
          return this.name && !jQuery2(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
        }).map(function(_i, elem4) {
          var val = jQuery2(this).val();
          if (val == null) {
            return null;
          }
          if (Array.isArray(val)) {
            return jQuery2.map(val, function(val2) {
              return { name: elem4.name, value: val2.replace(rCRLF, "\r\n") };
            });
          }
          return { name: elem4.name, value: val.replace(rCRLF, "\r\n") };
        }).get();
      }
    });
    var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document$1.createElement("a");
    originAnchor.href = location2.href;
    function addToPrefiltersOrTransports(structure) {
      return function(dataTypeExpression, func) {
        if (typeof dataTypeExpression !== "string") {
          func = dataTypeExpression;
          dataTypeExpression = "*";
        }
        var dataType, i2 = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
        if (typeof func === "function") {
          while (dataType = dataTypes[i2++]) {
            if (dataType[0] === "+") {
              dataType = dataType.slice(1) || "*";
              (structure[dataType] = structure[dataType] || []).unshift(func);
            } else {
              (structure[dataType] = structure[dataType] || []).push(func);
            }
          }
        }
      };
    }
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
      var inspected = {}, seekingTransport = structure === transports;
      function inspect(dataType) {
        var selected;
        inspected[dataType] = true;
        jQuery2.each(structure[dataType] || [], function(_, prefilterOrFactory) {
          var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
          if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
            options.dataTypes.unshift(dataTypeOrTransport);
            inspect(dataTypeOrTransport);
            return false;
          } else if (seekingTransport) {
            return !(selected = dataTypeOrTransport);
          }
        });
        return selected;
      }
      return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }
    function ajaxExtend(target, src) {
      var key2, deep, flatOptions = jQuery2.ajaxSettings.flatOptions || {};
      for (key2 in src) {
        if (src[key2] !== void 0) {
          (flatOptions[key2] ? target : deep || (deep = {}))[key2] = src[key2];
        }
      }
      if (deep) {
        jQuery2.extend(true, target, deep);
      }
      return target;
    }
    function ajaxHandleResponses(s, jqXHR, responses) {
      var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
      while (dataTypes[0] === "*") {
        dataTypes.shift();
        if (ct === void 0) {
          ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
        }
      }
      if (ct) {
        for (type in contents) {
          if (contents[type] && contents[type].test(ct)) {
            dataTypes.unshift(type);
            break;
          }
        }
      }
      if (dataTypes[0] in responses) {
        finalDataType = dataTypes[0];
      } else {
        for (type in responses) {
          if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
            finalDataType = type;
            break;
          }
          if (!firstDataType) {
            firstDataType = type;
          }
        }
        finalDataType = finalDataType || firstDataType;
      }
      if (finalDataType) {
        if (finalDataType !== dataTypes[0]) {
          dataTypes.unshift(finalDataType);
        }
        return responses[finalDataType];
      }
    }
    function ajaxConvert(s, response, jqXHR, isSuccess) {
      var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
      if (dataTypes[1]) {
        for (conv in s.converters) {
          converters[conv.toLowerCase()] = s.converters[conv];
        }
      }
      current = dataTypes.shift();
      while (current) {
        if (s.responseFields[current]) {
          jqXHR[s.responseFields[current]] = response;
        }
        if (!prev && isSuccess && s.dataFilter) {
          response = s.dataFilter(response, s.dataType);
        }
        prev = current;
        current = dataTypes.shift();
        if (current) {
          if (current === "*") {
            current = prev;
          } else if (prev !== "*" && prev !== current) {
            conv = converters[prev + " " + current] || converters["* " + current];
            if (!conv) {
              for (conv2 in converters) {
                tmp = conv2.split(" ");
                if (tmp[1] === current) {
                  conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                  if (conv) {
                    if (conv === true) {
                      conv = converters[conv2];
                    } else if (converters[conv2] !== true) {
                      current = tmp[0];
                      dataTypes.unshift(tmp[1]);
                    }
                    break;
                  }
                }
              }
            }
            if (conv !== true) {
              if (conv && s.throws) {
                response = conv(response);
              } else {
                try {
                  response = conv(response);
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: conv ? e : "No conversion from " + prev + " to " + current
                  };
                }
              }
            }
          }
        }
      }
      return { state: "success", data: response };
    }
    jQuery2.extend({
      // Counter for holding the number of active queries
      active: 0,
      // Last-Modified header cache for next request
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: location2.href,
        type: "GET",
        isLocal: rlocalProtocol.test(location2.protocol),
        global: true,
        processData: true,
        async: true,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        /*
        timeout: 0,
        data: null,
        dataType: null,
        username: null,
        password: null,
        cache: null,
        throws: false,
        traditional: false,
        headers: {},
        */
        accepts: {
          "*": allTypes,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        // Data converters
        // Keys separate source (or catchall "*") and destination types with a single space
        converters: {
          // Convert anything to text
          "* text": String,
          // Text to html (true = no transformation)
          "text html": true,
          // Evaluate text as a json expression
          "text json": JSON.parse,
          // Parse text as xml
          "text xml": jQuery2.parseXML
        },
        // For options that shouldn't be deep extended:
        // you can add your own custom options here if
        // and when you create one that shouldn't be
        // deep extended (see ajaxExtend)
        flatOptions: {
          url: true,
          context: true
        }
      },
      // Creates a full fledged settings object into target
      // with both ajaxSettings and settings fields.
      // If target is omitted, writes into ajaxSettings.
      ajaxSetup: function(target, settings) {
        return settings ? (
          // Building a settings object
          ajaxExtend(ajaxExtend(target, jQuery2.ajaxSettings), settings)
        ) : (
          // Extending ajaxSettings
          ajaxExtend(jQuery2.ajaxSettings, target)
        );
      },
      ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
      ajaxTransport: addToPrefiltersOrTransports(transports),
      // Main method
      ajax: function(url, options) {
        if (typeof url === "object") {
          options = url;
          url = void 0;
        }
        options = options || {};
        var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i2, uncached, s = jQuery2.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery2(callbackContext) : jQuery2.event, deferred = jQuery2.Deferred(), completeDeferred = jQuery2.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
          readyState: 0,
          // Builds headers hashtable if needed
          getResponseHeader: function(key2) {
            var match;
            if (completed2) {
              if (!responseHeaders) {
                responseHeaders = {};
                while (match = rheaders.exec(responseHeadersString)) {
                  responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                }
              }
              match = responseHeaders[key2.toLowerCase() + " "];
            }
            return match == null ? null : match.join(", ");
          },
          // Raw string
          getAllResponseHeaders: function() {
            return completed2 ? responseHeadersString : null;
          },
          // Caches the header
          setRequestHeader: function(name, value) {
            if (completed2 == null) {
              name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
              requestHeaders[name] = value;
            }
            return this;
          },
          // Overrides response content-type header
          overrideMimeType: function(type) {
            if (completed2 == null) {
              s.mimeType = type;
            }
            return this;
          },
          // Status-dependent callbacks
          statusCode: function(map7) {
            var code;
            if (map7) {
              if (completed2) {
                jqXHR.always(map7[jqXHR.status]);
              } else {
                for (code in map7) {
                  statusCode[code] = [statusCode[code], map7[code]];
                }
              }
            }
            return this;
          },
          // Cancel the request
          abort: function(statusText) {
            var finalText = statusText || strAbort;
            if (transport) {
              transport.abort(finalText);
            }
            done2(0, finalText);
            return this;
          }
        };
        deferred.promise(jqXHR);
        s.url = ((url || s.url || location2.href) + "").replace(rprotocol, location2.protocol + "//");
        s.type = options.method || options.type || s.method || s.type;
        s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
        if (s.crossDomain == null) {
          urlAnchor = document$1.createElement("a");
          try {
            urlAnchor.href = s.url;
            urlAnchor.href = urlAnchor.href;
            s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
          } catch (e) {
            s.crossDomain = true;
          }
        }
        inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
        if (s.data && s.processData && typeof s.data !== "string") {
          s.data = jQuery2.param(s.data, s.traditional);
        }
        if (completed2) {
          return jqXHR;
        }
        fireGlobals = jQuery2.event && s.global;
        if (fireGlobals && jQuery2.active++ === 0) {
          jQuery2.event.trigger("ajaxStart");
        }
        s.type = s.type.toUpperCase();
        s.hasContent = !rnoContent.test(s.type);
        cacheURL = s.url.replace(rhash, "");
        if (!s.hasContent) {
          uncached = s.url.slice(cacheURL.length);
          if (s.data && (s.processData || typeof s.data === "string")) {
            cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
            delete s.data;
          }
          if (s.cache === false) {
            cacheURL = cacheURL.replace(rantiCache, "$1");
            uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
          }
          s.url = cacheURL + uncached;
        } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
          s.data = s.data.replace(r20, "+");
        }
        if (s.ifModified) {
          if (jQuery2.lastModified[cacheURL]) {
            jqXHR.setRequestHeader("If-Modified-Since", jQuery2.lastModified[cacheURL]);
          }
          if (jQuery2.etag[cacheURL]) {
            jqXHR.setRequestHeader("If-None-Match", jQuery2.etag[cacheURL]);
          }
        }
        if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
          jqXHR.setRequestHeader("Content-Type", s.contentType);
        }
        jqXHR.setRequestHeader(
          "Accept",
          s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]
        );
        for (i2 in s.headers) {
          jqXHR.setRequestHeader(i2, s.headers[i2]);
        }
        if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
          return jqXHR.abort();
        }
        strAbort = "abort";
        completeDeferred.add(s.complete);
        jqXHR.done(s.success);
        jqXHR.fail(s.error);
        transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
        if (!transport) {
          done2(-1, "No Transport");
        } else {
          jqXHR.readyState = 1;
          if (fireGlobals) {
            globalEventContext.trigger("ajaxSend", [jqXHR, s]);
          }
          if (completed2) {
            return jqXHR;
          }
          if (s.async && s.timeout > 0) {
            timeoutTimer = window2.setTimeout(function() {
              jqXHR.abort("timeout");
            }, s.timeout);
          }
          try {
            completed2 = false;
            transport.send(requestHeaders, done2);
          } catch (e) {
            if (completed2) {
              throw e;
            }
            done2(-1, e);
          }
        }
        function done2(status, nativeStatusText, responses, headers) {
          var isSuccess, success, error, response, modified, statusText = nativeStatusText;
          if (completed2) {
            return;
          }
          completed2 = true;
          if (timeoutTimer) {
            window2.clearTimeout(timeoutTimer);
          }
          transport = void 0;
          responseHeadersString = headers || "";
          jqXHR.readyState = status > 0 ? 4 : 0;
          isSuccess = status >= 200 && status < 300 || status === 304;
          if (responses) {
            response = ajaxHandleResponses(s, jqXHR, responses);
          }
          if (!isSuccess && jQuery2.inArray("script", s.dataTypes) > -1 && jQuery2.inArray("json", s.dataTypes) < 0) {
            s.converters["text script"] = function() {
            };
          }
          response = ajaxConvert(s, response, jqXHR, isSuccess);
          if (isSuccess) {
            if (s.ifModified) {
              modified = jqXHR.getResponseHeader("Last-Modified");
              if (modified) {
                jQuery2.lastModified[cacheURL] = modified;
              }
              modified = jqXHR.getResponseHeader("etag");
              if (modified) {
                jQuery2.etag[cacheURL] = modified;
              }
            }
            if (status === 204 || s.type === "HEAD") {
              statusText = "nocontent";
            } else if (status === 304) {
              statusText = "notmodified";
            } else {
              statusText = response.state;
              success = response.data;
              error = response.error;
              isSuccess = !error;
            }
          } else {
            error = statusText;
            if (status || !statusText) {
              statusText = "error";
              if (status < 0) {
                status = 0;
              }
            }
          }
          jqXHR.status = status;
          jqXHR.statusText = (nativeStatusText || statusText) + "";
          if (isSuccess) {
            deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
          } else {
            deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
          }
          jqXHR.statusCode(statusCode);
          statusCode = void 0;
          if (fireGlobals) {
            globalEventContext.trigger(
              isSuccess ? "ajaxSuccess" : "ajaxError",
              [jqXHR, s, isSuccess ? success : error]
            );
          }
          completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
          if (fireGlobals) {
            globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
            if (!--jQuery2.active) {
              jQuery2.event.trigger("ajaxStop");
            }
          }
        }
        return jqXHR;
      },
      getJSON: function(url, data, callback) {
        return jQuery2.get(url, data, callback, "json");
      },
      getScript: function(url, callback) {
        return jQuery2.get(url, void 0, callback, "script");
      }
    });
    jQuery2.each(["get", "post"], function(_i, method) {
      jQuery2[method] = function(url, data, callback, type) {
        if (typeof data === "function" || data === null) {
          type = type || callback;
          callback = data;
          data = void 0;
        }
        return jQuery2.ajax(jQuery2.extend({
          url,
          type: method,
          dataType: type,
          data,
          success: callback
        }, jQuery2.isPlainObject(url) && url));
      };
    });
    jQuery2.ajaxPrefilter(function(s) {
      var i2;
      for (i2 in s.headers) {
        if (i2.toLowerCase() === "content-type") {
          s.contentType = s.headers[i2] || "";
        }
      }
    });
    jQuery2._evalUrl = function(url, options, doc) {
      return jQuery2.ajax({
        url,
        // Make this explicit, since user can override this through ajaxSetup (trac-11264)
        type: "GET",
        dataType: "script",
        cache: true,
        async: false,
        global: false,
        scriptAttrs: options.crossOrigin ? { "crossOrigin": options.crossOrigin } : void 0,
        // Only evaluate the response if it is successful (gh-4126)
        // dataFilter is not invoked for failure responses, so using it instead
        // of the default converter is kludgy but it works.
        converters: {
          "text script": function() {
          }
        },
        dataFilter: function(response) {
          jQuery2.globalEval(response, options, doc);
        }
      });
    };
    jQuery2.fn.extend({
      wrapAll: function(html) {
        var wrap;
        if (this[0]) {
          if (typeof html === "function") {
            html = html.call(this[0]);
          }
          wrap = jQuery2(html, this[0].ownerDocument).eq(0).clone(true);
          if (this[0].parentNode) {
            wrap.insertBefore(this[0]);
          }
          wrap.map(function() {
            var elem4 = this;
            while (elem4.firstElementChild) {
              elem4 = elem4.firstElementChild;
            }
            return elem4;
          }).append(this);
        }
        return this;
      },
      wrapInner: function(html) {
        if (typeof html === "function") {
          return this.each(function(i2) {
            jQuery2(this).wrapInner(html.call(this, i2));
          });
        }
        return this.each(function() {
          var self = jQuery2(this), contents = self.contents();
          if (contents.length) {
            contents.wrapAll(html);
          } else {
            self.append(html);
          }
        });
      },
      wrap: function(html) {
        var htmlIsFunction = typeof html === "function";
        return this.each(function(i2) {
          jQuery2(this).wrapAll(htmlIsFunction ? html.call(this, i2) : html);
        });
      },
      unwrap: function(selector) {
        this.parent(selector).not("body").each(function() {
          jQuery2(this).replaceWith(this.childNodes);
        });
        return this;
      }
    });
    jQuery2.expr.pseudos.hidden = function(elem4) {
      return !jQuery2.expr.pseudos.visible(elem4);
    };
    jQuery2.expr.pseudos.visible = function(elem4) {
      return !!(elem4.offsetWidth || elem4.offsetHeight || elem4.getClientRects().length);
    };
    jQuery2.ajaxSettings.xhr = function() {
      return new window2.XMLHttpRequest();
    };
    var xhrSuccessStatus = {
      // File protocol always yields status code 0, assume 200
      0: 200
    };
    jQuery2.ajaxTransport(function(options) {
      var callback;
      return {
        send: function(headers, complete) {
          var i2, xhr = options.xhr();
          xhr.open(
            options.type,
            options.url,
            options.async,
            options.username,
            options.password
          );
          if (options.xhrFields) {
            for (i2 in options.xhrFields) {
              xhr[i2] = options.xhrFields[i2];
            }
          }
          if (options.mimeType && xhr.overrideMimeType) {
            xhr.overrideMimeType(options.mimeType);
          }
          if (!options.crossDomain && !headers["X-Requested-With"]) {
            headers["X-Requested-With"] = "XMLHttpRequest";
          }
          for (i2 in headers) {
            xhr.setRequestHeader(i2, headers[i2]);
          }
          callback = function(type) {
            return function() {
              if (callback) {
                callback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = null;
                if (type === "abort") {
                  xhr.abort();
                } else if (type === "error") {
                  complete(
                    // File: protocol always yields status 0; see trac-8605, trac-14207
                    xhr.status,
                    xhr.statusText
                  );
                } else {
                  complete(
                    xhrSuccessStatus[xhr.status] || xhr.status,
                    xhr.statusText,
                    // For XHR2 non-text, let the caller handle it (gh-2498)
                    (xhr.responseType || "text") === "text" ? { text: xhr.responseText } : { binary: xhr.response },
                    xhr.getAllResponseHeaders()
                  );
                }
              }
            };
          };
          xhr.onload = callback();
          xhr.onabort = xhr.onerror = xhr.ontimeout = callback("error");
          callback = callback("abort");
          try {
            xhr.send(options.hasContent && options.data || null);
          } catch (e) {
            if (callback) {
              throw e;
            }
          }
        },
        abort: function() {
          if (callback) {
            callback();
          }
        }
      };
    });
    function canUseScriptTag(s) {
      return s.scriptAttrs || !s.headers && (s.crossDomain || // When dealing with JSONP (`s.dataTypes` include "json" then)
      // don't use a script tag so that error responses still may have
      // `responseJSON` set. Continue using a script tag for JSONP requests that:
      //   * are cross-domain as AJAX requests won't work without a CORS setup
      //   * have `scriptAttrs` set as that's a script-only functionality
      // Note that this means JSONP requests violate strict CSP script-src settings.
      // A proper solution is to migrate from using JSONP to a CORS setup.
      s.async && jQuery2.inArray("json", s.dataTypes) < 0);
    }
    jQuery2.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      converters: {
        "text script": function(text) {
          jQuery2.globalEval(text);
          return text;
        }
      }
    });
    jQuery2.ajaxPrefilter("script", function(s) {
      if (s.cache === void 0) {
        s.cache = false;
      }
      if (canUseScriptTag(s)) {
        s.type = "GET";
      }
    });
    jQuery2.ajaxTransport("script", function(s) {
      if (canUseScriptTag(s)) {
        var script, callback;
        return {
          send: function(_, complete) {
            script = jQuery2("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {
              script.remove();
              callback = null;
              if (evt) {
                complete(evt.type === "error" ? 404 : 200, evt.type);
              }
            });
            document$1.head.appendChild(script[0]);
          },
          abort: function() {
            if (callback) {
              callback();
            }
          }
        };
      }
    });
    var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery2.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var callback = oldCallbacks.pop() || jQuery2.expando + "_" + nonce.guid++;
        this[callback] = true;
        return callback;
      }
    });
    jQuery2.ajaxPrefilter("jsonp", function(s, originalSettings, jqXHR) {
      var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
      callbackName = s.jsonpCallback = typeof s.jsonpCallback === "function" ? s.jsonpCallback() : s.jsonpCallback;
      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
      } else if (s.jsonp !== false) {
        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
      }
      s.converters["script json"] = function() {
        if (!responseContainer) {
          jQuery2.error(callbackName + " was not called");
        }
        return responseContainer[0];
      };
      s.dataTypes[0] = "json";
      overwritten = window2[callbackName];
      window2[callbackName] = function() {
        responseContainer = arguments;
      };
      jqXHR.always(function() {
        if (overwritten === void 0) {
          jQuery2(window2).removeProp(callbackName);
        } else {
          window2[callbackName] = overwritten;
        }
        if (s[callbackName]) {
          s.jsonpCallback = originalSettings.jsonpCallback;
          oldCallbacks.push(callbackName);
        }
        if (responseContainer && typeof overwritten === "function") {
          overwritten(responseContainer[0]);
        }
        responseContainer = overwritten = void 0;
      });
      return "script";
    });
    jQuery2.ajaxPrefilter(function(s, origOptions) {
      if (typeof s.data !== "string" && !jQuery2.isPlainObject(s.data) && !Array.isArray(s.data) && // Don't disable data processing if explicitly set by the user.
      !("processData" in origOptions)) {
        s.processData = false;
      }
      if (s.data instanceof window2.FormData) {
        s.contentType = false;
      }
    });
    jQuery2.parseHTML = function(data, context, keepScripts) {
      if (typeof data !== "string" && !isObviousHtml(data + "")) {
        return [];
      }
      if (typeof context === "boolean") {
        keepScripts = context;
        context = false;
      }
      var parsed, scripts;
      if (!context) {
        context = new window2.DOMParser().parseFromString("", "text/html");
      }
      parsed = rsingleTag.exec(data);
      scripts = !keepScripts && [];
      if (parsed) {
        return [context.createElement(parsed[1])];
      }
      parsed = buildFragment([data], context, scripts);
      if (scripts && scripts.length) {
        jQuery2(scripts).remove();
      }
      return jQuery2.merge([], parsed.childNodes);
    };
    jQuery2.fn.load = function(url, params, callback) {
      var selector, type, response, self = this, off = url.indexOf(" ");
      if (off > -1) {
        selector = stripAndCollapse(url.slice(off));
        url = url.slice(0, off);
      }
      if (typeof params === "function") {
        callback = params;
        params = void 0;
      } else if (params && typeof params === "object") {
        type = "POST";
      }
      if (self.length > 0) {
        jQuery2.ajax({
          url,
          // If "type" variable is undefined, then "GET" method will be used.
          // Make value of this field explicit since
          // user can override it through ajaxSetup method
          type: type || "GET",
          dataType: "html",
          data: params
        }).done(function(responseText) {
          response = arguments;
          self.html(selector ? (
            // If a selector was specified, locate the right elements in a dummy div
            // Exclude scripts to avoid IE 'Permission Denied' errors
            jQuery2("<div>").append(jQuery2.parseHTML(responseText)).find(selector)
          ) : (
            // Otherwise use the full result
            responseText
          ));
        }).always(callback && function(jqXHR, status) {
          self.each(function() {
            callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
          });
        });
      }
      return this;
    };
    jQuery2.expr.pseudos.animated = function(elem4) {
      return jQuery2.grep(jQuery2.timers, function(fn) {
        return elem4 === fn.elem;
      }).length;
    };
    jQuery2.offset = {
      setOffset: function(elem4, options, i2) {
        var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery2.css(elem4, "position"), curElem = jQuery2(elem4), props = {};
        if (position === "static") {
          elem4.style.position = "relative";
        }
        curOffset = curElem.offset();
        curCSSTop = jQuery2.css(elem4, "top");
        curCSSLeft = jQuery2.css(elem4, "left");
        calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
        if (calculatePosition) {
          curPosition = curElem.position();
          curTop = curPosition.top;
          curLeft = curPosition.left;
        } else {
          curTop = parseFloat(curCSSTop) || 0;
          curLeft = parseFloat(curCSSLeft) || 0;
        }
        if (typeof options === "function") {
          options = options.call(elem4, i2, jQuery2.extend({}, curOffset));
        }
        if (options.top != null) {
          props.top = options.top - curOffset.top + curTop;
        }
        if (options.left != null) {
          props.left = options.left - curOffset.left + curLeft;
        }
        if ("using" in options) {
          options.using.call(elem4, props);
        } else {
          curElem.css(props);
        }
      }
    };
    jQuery2.fn.extend({
      // offset() relates an element's border box to the document origin
      offset: function(options) {
        if (arguments.length) {
          return options === void 0 ? this : this.each(function(i2) {
            jQuery2.offset.setOffset(this, options, i2);
          });
        }
        var rect, win, elem4 = this[0];
        if (!elem4) {
          return;
        }
        if (!elem4.getClientRects().length) {
          return { top: 0, left: 0 };
        }
        rect = elem4.getBoundingClientRect();
        win = elem4.ownerDocument.defaultView;
        return {
          top: rect.top + win.pageYOffset,
          left: rect.left + win.pageXOffset
        };
      },
      // position() relates an element's margin box to its offset parent's padding box
      // This corresponds to the behavior of CSS absolute positioning
      position: function() {
        if (!this[0]) {
          return;
        }
        var offsetParent, offset, doc, elem4 = this[0], parentOffset = { top: 0, left: 0 };
        if (jQuery2.css(elem4, "position") === "fixed") {
          offset = elem4.getBoundingClientRect();
        } else {
          offset = this.offset();
          doc = elem4.ownerDocument;
          offsetParent = elem4.offsetParent || doc.documentElement;
          while (offsetParent && offsetParent !== doc.documentElement && jQuery2.css(offsetParent, "position") === "static") {
            offsetParent = offsetParent.offsetParent || doc.documentElement;
          }
          if (offsetParent && offsetParent !== elem4 && offsetParent.nodeType === 1 && jQuery2.css(offsetParent, "position") !== "static") {
            parentOffset = jQuery2(offsetParent).offset();
            parentOffset.top += jQuery2.css(offsetParent, "borderTopWidth", true);
            parentOffset.left += jQuery2.css(offsetParent, "borderLeftWidth", true);
          }
        }
        return {
          top: offset.top - parentOffset.top - jQuery2.css(elem4, "marginTop", true),
          left: offset.left - parentOffset.left - jQuery2.css(elem4, "marginLeft", true)
        };
      },
      // This method will return documentElement in the following cases:
      // 1) For the element inside the iframe without offsetParent, this method will return
      //    documentElement of the parent window
      // 2) For the hidden or detached element
      // 3) For body or html element, i.e. in case of the html node - it will return itself
      //
      // but those exceptions were never presented as a real life use-cases
      // and might be considered as more preferable results.
      //
      // This logic, however, is not guaranteed and can change at any point in the future
      offsetParent: function() {
        return this.map(function() {
          var offsetParent = this.offsetParent;
          while (offsetParent && jQuery2.css(offsetParent, "position") === "static") {
            offsetParent = offsetParent.offsetParent;
          }
          return offsetParent || documentElement$1;
        });
      }
    });
    jQuery2.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
      var top3 = "pageYOffset" === prop;
      jQuery2.fn[method] = function(val) {
        return access(this, function(elem4, method2, val2) {
          var win;
          if (isWindow(elem4)) {
            win = elem4;
          } else if (elem4.nodeType === 9) {
            win = elem4.defaultView;
          }
          if (val2 === void 0) {
            return win ? win[prop] : elem4[method2];
          }
          if (win) {
            win.scrollTo(
              !top3 ? val2 : win.pageXOffset,
              top3 ? val2 : win.pageYOffset
            );
          } else {
            elem4[method2] = val2;
          }
        }, method, val, arguments.length);
      };
    });
    jQuery2.each({ Height: "height", Width: "width" }, function(name, type) {
      jQuery2.each({
        padding: "inner" + name,
        content: type,
        "": "outer" + name
      }, function(defaultExtra, funcName) {
        jQuery2.fn[funcName] = function(margin, value) {
          var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
          return access(this, function(elem4, type2, value2) {
            var doc;
            if (isWindow(elem4)) {
              return funcName.indexOf("outer") === 0 ? elem4["inner" + name] : elem4.document.documentElement["client" + name];
            }
            if (elem4.nodeType === 9) {
              doc = elem4.documentElement;
              return Math.max(
                elem4.body["scroll" + name],
                doc["scroll" + name],
                elem4.body["offset" + name],
                doc["offset" + name],
                doc["client" + name]
              );
            }
            return value2 === void 0 ? (
              // Get width or height on the element, requesting but not forcing parseFloat
              jQuery2.css(elem4, type2, extra)
            ) : (
              // Set width or height on the element
              jQuery2.style(elem4, type2, value2, extra)
            );
          }, type, chainable ? margin : void 0, chainable);
        };
      });
    });
    jQuery2.each([
      "ajaxStart",
      "ajaxStop",
      "ajaxComplete",
      "ajaxError",
      "ajaxSuccess",
      "ajaxSend"
    ], function(_i, type) {
      jQuery2.fn[type] = function(fn) {
        return this.on(type, fn);
      };
    });
    jQuery2.fn.extend({
      bind: function(types, data, fn) {
        return this.on(types, null, data, fn);
      },
      unbind: function(types, fn) {
        return this.off(types, null, fn);
      },
      delegate: function(selector, types, data, fn) {
        return this.on(types, selector, data, fn);
      },
      undelegate: function(selector, types, fn) {
        return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
      },
      hover: function(fnOver, fnOut) {
        return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
      }
    });
    jQuery2.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
      function(_i, name) {
        jQuery2.fn[name] = function(data, fn) {
          return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
      }
    );
    jQuery2.proxy = function(fn, context) {
      var tmp, args, proxy;
      if (typeof context === "string") {
        tmp = fn[context];
        context = fn;
        fn = tmp;
      }
      if (typeof fn !== "function") {
        return void 0;
      }
      args = slice3.call(arguments, 2);
      proxy = function() {
        return fn.apply(context || this, args.concat(slice3.call(arguments)));
      };
      proxy.guid = fn.guid = fn.guid || jQuery2.guid++;
      return proxy;
    };
    jQuery2.holdReady = function(hold) {
      if (hold) {
        jQuery2.readyWait++;
      } else {
        jQuery2.ready(true);
      }
    };
    jQuery2.expr[":"] = jQuery2.expr.filters = jQuery2.expr.pseudos;
    if (typeof define === "function" && define.amd) {
      define("jquery", [], function() {
        return jQuery2;
      });
    }
    var _jQuery = window2.jQuery, _$ = window2.$;
    jQuery2.noConflict = function(deep) {
      if (window2.$ === jQuery2) {
        window2.$ = _$;
      }
      if (deep && window2.jQuery === jQuery2) {
        window2.jQuery = _jQuery;
      }
      return jQuery2;
    };
    if (typeof noGlobal === "undefined") {
      window2.jQuery = window2.$ = jQuery2;
    }
    return jQuery2;
  }
  var jQuery = jQueryFactory(window, true);
  var jquery_module_default = jQuery;

  // output/Data.Array/foreign.js
  var replicateFill = function(count, value) {
    if (count < 1) {
      return [];
    }
    var result = new Array(count);
    return result.fill(value);
  };
  var replicatePolyfill = function(count, value) {
    var result = [];
    var n = 0;
    for (var i = 0; i < count; i++) {
      result[n++] = value;
    }
    return result;
  };
  var replicateImpl = typeof Array.prototype.fill === "function" ? replicateFill : replicatePolyfill;
  var fromFoldableImpl = /* @__PURE__ */ (function() {
    function Cons2(head2, tail2) {
      this.head = head2;
      this.tail = tail2;
    }
    var emptyList = {};
    function curryCons(head2) {
      return function(tail2) {
        return new Cons2(head2, tail2);
      };
    }
    function listToArray(list) {
      var result = [];
      var count = 0;
      var xs = list;
      while (xs !== emptyList) {
        result[count++] = xs.head;
        xs = xs.tail;
      }
      return result;
    }
    return function(foldr3, xs) {
      return listToArray(foldr3(curryCons)(emptyList)(xs));
    };
  })();
  var length = function(xs) {
    return xs.length;
  };
  var indexImpl = function(just, nothing, xs, i) {
    return i < 0 || i >= xs.length ? nothing : just(xs[i]);
  };
  var findIndexImpl = function(just, nothing, f, xs) {
    for (var i = 0, l = xs.length; i < l; i++) {
      if (f(xs[i])) return just(i);
    }
    return nothing;
  };
  var reverse = function(l) {
    return l.slice().reverse();
  };
  var concat = function(xss) {
    if (xss.length <= 1e4) {
      return Array.prototype.concat.apply([], xss);
    }
    var result = [];
    for (var i = 0, l = xss.length; i < l; i++) {
      var xs = xss[i];
      for (var j = 0, m = xs.length; j < m; j++) {
        result.push(xs[j]);
      }
    }
    return result;
  };
  var filterImpl = function(f, xs) {
    return xs.filter(f);
  };
  var sortByImpl = /* @__PURE__ */ (function() {
    function mergeFromTo(compare3, fromOrdering, xs1, xs2, from, to) {
      var mid;
      var i;
      var j;
      var k;
      var x;
      var y;
      var c;
      mid = from + (to - from >> 1);
      if (mid - from > 1) mergeFromTo(compare3, fromOrdering, xs2, xs1, from, mid);
      if (to - mid > 1) mergeFromTo(compare3, fromOrdering, xs2, xs1, mid, to);
      i = from;
      j = mid;
      k = from;
      while (i < mid && j < to) {
        x = xs2[i];
        y = xs2[j];
        c = fromOrdering(compare3(x)(y));
        if (c > 0) {
          xs1[k++] = y;
          ++j;
        } else {
          xs1[k++] = x;
          ++i;
        }
      }
      while (i < mid) {
        xs1[k++] = xs2[i++];
      }
      while (j < to) {
        xs1[k++] = xs2[j++];
      }
    }
    return function(compare3, fromOrdering, xs) {
      var out;
      if (xs.length < 2) return xs;
      out = xs.slice(0);
      mergeFromTo(compare3, fromOrdering, out, xs.slice(0), 0, xs.length);
      return out;
    };
  })();
  var sliceImpl = function(s, e, l) {
    return l.slice(s, e);
  };

  // output/Data.Functor/foreign.js
  var arrayMap = function(f) {
    return function(arr) {
      var l = arr.length;
      var result = new Array(l);
      for (var i = 0; i < l; i++) {
        result[i] = f(arr[i]);
      }
      return result;
    };
  };

  // output/Control.Semigroupoid/index.js
  var semigroupoidFn = {
    compose: function(f) {
      return function(g) {
        return function(x) {
          return f(g(x));
        };
      };
    }
  };

  // output/Control.Category/index.js
  var identity = function(dict) {
    return dict.identity;
  };
  var categoryFn = {
    identity: function(x) {
      return x;
    },
    Semigroupoid0: function() {
      return semigroupoidFn;
    }
  };

  // output/Data.Boolean/index.js
  var otherwise = true;

  // output/Data.Function/index.js
  var flip = function(f) {
    return function(b) {
      return function(a) {
        return f(a)(b);
      };
    };
  };
  var $$const = function(a) {
    return function(v) {
      return a;
    };
  };

  // output/Data.Unit/foreign.js
  var unit = void 0;

  // output/Data.Functor/index.js
  var map = function(dict) {
    return dict.map;
  };
  var $$void = function(dictFunctor) {
    return map(dictFunctor)($$const(unit));
  };
  var functorArray = {
    map: arrayMap
  };

  // output/Data.Semigroup/foreign.js
  var concatString = function(s1) {
    return function(s2) {
      return s1 + s2;
    };
  };
  var concatArray = function(xs) {
    return function(ys) {
      if (xs.length === 0) return ys;
      if (ys.length === 0) return xs;
      return xs.concat(ys);
    };
  };

  // output/Data.Semigroup/index.js
  var semigroupString = {
    append: concatString
  };
  var semigroupArray = {
    append: concatArray
  };
  var append = function(dict) {
    return dict.append;
  };

  // output/Control.Apply/index.js
  var apply = function(dict) {
    return dict.apply;
  };

  // output/Control.Bind/foreign.js
  var arrayBind = typeof Array.prototype.flatMap === "function" ? function(arr) {
    return function(f) {
      return arr.flatMap(f);
    };
  } : function(arr) {
    return function(f) {
      var result = [];
      var l = arr.length;
      for (var i = 0; i < l; i++) {
        var xs = f(arr[i]);
        var k = xs.length;
        for (var j = 0; j < k; j++) {
          result.push(xs[j]);
        }
      }
      return result;
    };
  };

  // output/Data.Bounded/foreign.js
  var topInt = 2147483647;
  var bottomInt = -2147483648;
  var topChar = String.fromCharCode(65535);
  var bottomChar = String.fromCharCode(0);
  var topNumber = Number.POSITIVE_INFINITY;
  var bottomNumber = Number.NEGATIVE_INFINITY;

  // output/Data.Ord/foreign.js
  var unsafeCompareImpl = function(lt) {
    return function(eq2) {
      return function(gt) {
        return function(x) {
          return function(y) {
            return x < y ? lt : x === y ? eq2 : gt;
          };
        };
      };
    };
  };
  var ordIntImpl = unsafeCompareImpl;
  var ordStringImpl = unsafeCompareImpl;
  var ordCharImpl = unsafeCompareImpl;

  // output/Data.Eq/foreign.js
  var refEq = function(r1) {
    return function(r2) {
      return r1 === r2;
    };
  };
  var eqIntImpl = refEq;
  var eqCharImpl = refEq;
  var eqStringImpl = refEq;

  // output/Data.Eq/index.js
  var eqString = {
    eq: eqStringImpl
  };
  var eqInt = {
    eq: eqIntImpl
  };
  var eqChar = {
    eq: eqCharImpl
  };
  var eq = function(dict) {
    return dict.eq;
  };

  // output/Data.Ordering/index.js
  var LT = /* @__PURE__ */ (function() {
    function LT2() {
    }
    ;
    LT2.value = new LT2();
    return LT2;
  })();
  var GT = /* @__PURE__ */ (function() {
    function GT2() {
    }
    ;
    GT2.value = new GT2();
    return GT2;
  })();
  var EQ = /* @__PURE__ */ (function() {
    function EQ2() {
    }
    ;
    EQ2.value = new EQ2();
    return EQ2;
  })();

  // output/Data.Semiring/foreign.js
  var intAdd = function(x) {
    return function(y) {
      return x + y | 0;
    };
  };
  var intMul = function(x) {
    return function(y) {
      return x * y | 0;
    };
  };
  var numAdd = function(n1) {
    return function(n2) {
      return n1 + n2;
    };
  };
  var numMul = function(n1) {
    return function(n2) {
      return n1 * n2;
    };
  };

  // output/Data.Semiring/index.js
  var semiringNumber = {
    add: numAdd,
    zero: 0,
    mul: numMul,
    one: 1
  };
  var semiringInt = {
    add: intAdd,
    zero: 0,
    mul: intMul,
    one: 1
  };
  var add = function(dict) {
    return dict.add;
  };

  // output/Data.Ord/index.js
  var ordString = /* @__PURE__ */ (function() {
    return {
      compare: ordStringImpl(LT.value)(EQ.value)(GT.value),
      Eq0: function() {
        return eqString;
      }
    };
  })();
  var ordInt = /* @__PURE__ */ (function() {
    return {
      compare: ordIntImpl(LT.value)(EQ.value)(GT.value),
      Eq0: function() {
        return eqInt;
      }
    };
  })();
  var ordChar = /* @__PURE__ */ (function() {
    return {
      compare: ordCharImpl(LT.value)(EQ.value)(GT.value),
      Eq0: function() {
        return eqChar;
      }
    };
  })();
  var compare = function(dict) {
    return dict.compare;
  };

  // output/Data.Bounded/index.js
  var top = function(dict) {
    return dict.top;
  };
  var boundedInt = {
    top: topInt,
    bottom: bottomInt,
    Ord0: function() {
      return ordInt;
    }
  };
  var boundedChar = {
    top: topChar,
    bottom: bottomChar,
    Ord0: function() {
      return ordChar;
    }
  };
  var bottom = function(dict) {
    return dict.bottom;
  };

  // output/Data.Show/foreign.js
  var showIntImpl = function(n) {
    return n.toString();
  };

  // output/Data.Show/index.js
  var showInt = {
    show: showIntImpl
  };
  var show = function(dict) {
    return dict.show;
  };

  // output/Data.Maybe/index.js
  var identity2 = /* @__PURE__ */ identity(categoryFn);
  var Nothing = /* @__PURE__ */ (function() {
    function Nothing2() {
    }
    ;
    Nothing2.value = new Nothing2();
    return Nothing2;
  })();
  var Just = /* @__PURE__ */ (function() {
    function Just2(value0) {
      this.value0 = value0;
    }
    ;
    Just2.create = function(value0) {
      return new Just2(value0);
    };
    return Just2;
  })();
  var maybe = function(v) {
    return function(v1) {
      return function(v2) {
        if (v2 instanceof Nothing) {
          return v;
        }
        ;
        if (v2 instanceof Just) {
          return v1(v2.value0);
        }
        ;
        throw new Error("Failed pattern match at Data.Maybe (line 237, column 1 - line 237, column 51): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
      };
    };
  };
  var isNothing = /* @__PURE__ */ maybe(true)(/* @__PURE__ */ $$const(false));
  var isJust = /* @__PURE__ */ maybe(false)(/* @__PURE__ */ $$const(true));
  var functorMaybe = {
    map: function(v) {
      return function(v1) {
        if (v1 instanceof Just) {
          return new Just(v(v1.value0));
        }
        ;
        return Nothing.value;
      };
    }
  };
  var map2 = /* @__PURE__ */ map(functorMaybe);
  var fromMaybe = function(a) {
    return maybe(a)(identity2);
  };
  var fromJust = function() {
    return function(v) {
      if (v instanceof Just) {
        return v.value0;
      }
      ;
      throw new Error("Failed pattern match at Data.Maybe (line 288, column 1 - line 288, column 46): " + [v.constructor.name]);
    };
  };
  var applyMaybe = {
    apply: function(v) {
      return function(v1) {
        if (v instanceof Just) {
          return map2(v.value0)(v1);
        }
        ;
        if (v instanceof Nothing) {
          return Nothing.value;
        }
        ;
        throw new Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): " + [v.constructor.name, v1.constructor.name]);
      };
    },
    Functor0: function() {
      return functorMaybe;
    }
  };

  // output/Data.Monoid/index.js
  var monoidString = {
    mempty: "",
    Semigroup0: function() {
      return semigroupString;
    }
  };
  var mempty = function(dict) {
    return dict.mempty;
  };

  // output/Data.Array.ST/foreign.js
  function unsafeFreezeThawImpl(xs) {
    return xs;
  }
  var unsafeFreezeImpl = unsafeFreezeThawImpl;
  function copyImpl(xs) {
    return xs.slice();
  }
  var thawImpl = copyImpl;
  var pushImpl = function(a, xs) {
    return xs.push(a);
  };

  // output/Control.Monad.ST.Uncurried/foreign.js
  var runSTFn1 = function runSTFn12(fn) {
    return function(a) {
      return function() {
        return fn(a);
      };
    };
  };
  var runSTFn2 = function runSTFn22(fn) {
    return function(a) {
      return function(b) {
        return function() {
          return fn(a, b);
        };
      };
    };
  };

  // output/Data.Array.ST/index.js
  var unsafeFreeze = /* @__PURE__ */ runSTFn1(unsafeFreezeImpl);
  var thaw = /* @__PURE__ */ runSTFn1(thawImpl);
  var withArray = function(f) {
    return function(xs) {
      return function __do() {
        var result = thaw(xs)();
        f(result)();
        return unsafeFreeze(result)();
      };
    };
  };
  var push = /* @__PURE__ */ runSTFn2(pushImpl);

  // output/Data.Foldable/foreign.js
  var foldrArray = function(f) {
    return function(init2) {
      return function(xs) {
        var acc = init2;
        var len = xs.length;
        for (var i = len - 1; i >= 0; i--) {
          acc = f(xs[i])(acc);
        }
        return acc;
      };
    };
  };
  var foldlArray = function(f) {
    return function(init2) {
      return function(xs) {
        var acc = init2;
        var len = xs.length;
        for (var i = 0; i < len; i++) {
          acc = f(acc)(xs[i]);
        }
        return acc;
      };
    };
  };

  // output/Data.Tuple/index.js
  var Tuple = /* @__PURE__ */ (function() {
    function Tuple2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Tuple2.create = function(value0) {
      return function(value1) {
        return new Tuple2(value0, value1);
      };
    };
    return Tuple2;
  })();
  var snd = function(v) {
    return v.value1;
  };
  var fst = function(v) {
    return v.value0;
  };

  // output/Unsafe.Coerce/foreign.js
  var unsafeCoerce2 = function(x) {
    return x;
  };

  // output/Safe.Coerce/index.js
  var coerce = function() {
    return unsafeCoerce2;
  };

  // output/Data.Foldable/index.js
  var identity3 = /* @__PURE__ */ identity(categoryFn);
  var foldr = function(dict) {
    return dict.foldr;
  };
  var foldl = function(dict) {
    return dict.foldl;
  };
  var foldMapDefaultR = function(dictFoldable) {
    var foldr22 = foldr(dictFoldable);
    return function(dictMonoid) {
      var append3 = append(dictMonoid.Semigroup0());
      var mempty2 = mempty(dictMonoid);
      return function(f) {
        return foldr22(function(x) {
          return function(acc) {
            return append3(f(x))(acc);
          };
        })(mempty2);
      };
    };
  };
  var foldableArray = {
    foldr: foldrArray,
    foldl: foldlArray,
    foldMap: function(dictMonoid) {
      return foldMapDefaultR(foldableArray)(dictMonoid);
    }
  };
  var foldMap = function(dict) {
    return dict.foldMap;
  };
  var fold = function(dictFoldable) {
    var foldMap22 = foldMap(dictFoldable);
    return function(dictMonoid) {
      return foldMap22(dictMonoid)(identity3);
    };
  };

  // output/Data.Function.Uncurried/foreign.js
  var runFn2 = function(fn) {
    return function(a) {
      return function(b) {
        return fn(a, b);
      };
    };
  };
  var runFn3 = function(fn) {
    return function(a) {
      return function(b) {
        return function(c) {
          return fn(a, b, c);
        };
      };
    };
  };
  var runFn4 = function(fn) {
    return function(a) {
      return function(b) {
        return function(c) {
          return function(d) {
            return fn(a, b, c, d);
          };
        };
      };
    };
  };

  // output/Data.Unfoldable/foreign.js
  var unfoldrArrayImpl = function(isNothing2) {
    return function(fromJust4) {
      return function(fst2) {
        return function(snd2) {
          return function(f) {
            return function(b) {
              var result = [];
              var value = b;
              while (true) {
                var maybe2 = f(value);
                if (isNothing2(maybe2)) return result;
                var tuple = fromJust4(maybe2);
                result.push(fst2(tuple));
                value = snd2(tuple);
              }
            };
          };
        };
      };
    };
  };

  // output/Data.Unfoldable1/foreign.js
  var unfoldr1ArrayImpl = function(isNothing2) {
    return function(fromJust4) {
      return function(fst2) {
        return function(snd2) {
          return function(f) {
            return function(b) {
              var result = [];
              var value = b;
              while (true) {
                var tuple = f(value);
                result.push(fst2(tuple));
                var maybe2 = snd2(tuple);
                if (isNothing2(maybe2)) return result;
                value = fromJust4(maybe2);
              }
            };
          };
        };
      };
    };
  };

  // output/Data.Unfoldable1/index.js
  var fromJust2 = /* @__PURE__ */ fromJust();
  var unfoldable1Array = {
    unfoldr1: /* @__PURE__ */ unfoldr1ArrayImpl(isNothing)(fromJust2)(fst)(snd)
  };

  // output/Data.Unfoldable/index.js
  var fromJust3 = /* @__PURE__ */ fromJust();
  var unfoldr = function(dict) {
    return dict.unfoldr;
  };
  var unfoldableArray = {
    unfoldr: /* @__PURE__ */ unfoldrArrayImpl(isNothing)(fromJust3)(fst)(snd),
    Unfoldable10: function() {
      return unfoldable1Array;
    }
  };

  // output/Data.Array/index.js
  var apply2 = /* @__PURE__ */ apply(applyMaybe);
  var map3 = /* @__PURE__ */ map(functorMaybe);
  var sortBy = function(comp) {
    return runFn3(sortByImpl)(comp)(function(v) {
      if (v instanceof GT) {
        return 1;
      }
      ;
      if (v instanceof EQ) {
        return 0;
      }
      ;
      if (v instanceof LT) {
        return -1 | 0;
      }
      ;
      throw new Error("Failed pattern match at Data.Array (line 897, column 38 - line 900, column 11): " + [v.constructor.name]);
    });
  };
  var snoc = function(xs) {
    return function(x) {
      return withArray(push(x))(xs)();
    };
  };
  var slice = /* @__PURE__ */ runFn3(sliceImpl);
  var replicate = /* @__PURE__ */ runFn2(replicateImpl);
  var $$null = function(xs) {
    return length(xs) === 0;
  };
  var init = function(xs) {
    if ($$null(xs)) {
      return Nothing.value;
    }
    ;
    if (otherwise) {
      return new Just(slice(0)(length(xs) - 1 | 0)(xs));
    }
    ;
    throw new Error("Failed pattern match at Data.Array (line 351, column 1 - line 351, column 45): " + [xs.constructor.name]);
  };
  var index = /* @__PURE__ */ (function() {
    return runFn4(indexImpl)(Just.create)(Nothing.value);
  })();
  var last = function(xs) {
    return index(xs)(length(xs) - 1 | 0);
  };
  var unsnoc = function(xs) {
    return apply2(map3(function(v) {
      return function(v1) {
        return {
          init: v,
          last: v1
        };
      };
    })(init(xs)))(last(xs));
  };
  var head = function(xs) {
    return index(xs)(0);
  };
  var fromFoldable = function(dictFoldable) {
    return runFn2(fromFoldableImpl)(foldr(dictFoldable));
  };
  var foldl2 = /* @__PURE__ */ foldl(foldableArray);
  var findIndex = /* @__PURE__ */ (function() {
    return runFn4(findIndexImpl)(Just.create)(Nothing.value);
  })();
  var filter = /* @__PURE__ */ runFn2(filterImpl);
  var elemIndex = function(dictEq) {
    var eq2 = eq(dictEq);
    return function(x) {
      return findIndex(function(v) {
        return eq2(v)(x);
      });
    };
  };
  var elem2 = function(dictEq) {
    var elemIndex1 = elemIndex(dictEq);
    return function(a) {
      return function(arr) {
        return isJust(elemIndex1(a)(arr));
      };
    };
  };
  var drop = function(n) {
    return function(xs) {
      var $173 = n < 1;
      if ($173) {
        return xs;
      }
      ;
      return slice(n)(length(xs))(xs);
    };
  };

  // output/Data.FoldableWithIndex/index.js
  var foldrWithIndex = function(dict) {
    return dict.foldrWithIndex;
  };

  // output/Data.List.Types/index.js
  var Nil = /* @__PURE__ */ (function() {
    function Nil2() {
    }
    ;
    Nil2.value = new Nil2();
    return Nil2;
  })();
  var Cons = /* @__PURE__ */ (function() {
    function Cons2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Cons2.create = function(value0) {
      return function(value1) {
        return new Cons2(value0, value1);
      };
    };
    return Cons2;
  })();
  var foldableList = {
    foldr: function(f) {
      return function(b) {
        var rev = (function() {
          var go = function($copy_v) {
            return function($copy_v1) {
              var $tco_var_v = $copy_v;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(v, v1) {
                if (v1 instanceof Nil) {
                  $tco_done = true;
                  return v;
                }
                ;
                if (v1 instanceof Cons) {
                  $tco_var_v = new Cons(v1.value0, v);
                  $copy_v1 = v1.value1;
                  return;
                }
                ;
                throw new Error("Failed pattern match at Data.List.Types (line 107, column 7 - line 107, column 23): " + [v.constructor.name, v1.constructor.name]);
              }
              ;
              while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_v, $copy_v1);
              }
              ;
              return $tco_result;
            };
          };
          return go(Nil.value);
        })();
        var $284 = foldl(foldableList)(flip(f))(b);
        return function($285) {
          return $284(rev($285));
        };
      };
    },
    foldl: function(f) {
      var go = function($copy_b) {
        return function($copy_v) {
          var $tco_var_b = $copy_b;
          var $tco_done1 = false;
          var $tco_result;
          function $tco_loop(b, v) {
            if (v instanceof Nil) {
              $tco_done1 = true;
              return b;
            }
            ;
            if (v instanceof Cons) {
              $tco_var_b = f(b)(v.value0);
              $copy_v = v.value1;
              return;
            }
            ;
            throw new Error("Failed pattern match at Data.List.Types (line 111, column 12 - line 113, column 30): " + [v.constructor.name]);
          }
          ;
          while (!$tco_done1) {
            $tco_result = $tco_loop($tco_var_b, $copy_v);
          }
          ;
          return $tco_result;
        };
      };
      return go;
    },
    foldMap: function(dictMonoid) {
      var append22 = append(dictMonoid.Semigroup0());
      var mempty2 = mempty(dictMonoid);
      return function(f) {
        return foldl(foldableList)(function(acc) {
          var $286 = append22(acc);
          return function($287) {
            return $286(f($287));
          };
        })(mempty2);
      };
    }
  };

  // output/Data.Map.Internal/index.js
  var $runtime_lazy = function(name, moduleName, init2) {
    var state = 0;
    var val;
    return function(lineNumber) {
      if (state === 2) return val;
      if (state === 1) throw new ReferenceError(name + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state = 1;
      val = init2();
      state = 2;
      return val;
    };
  };
  var Leaf = /* @__PURE__ */ (function() {
    function Leaf2() {
    }
    ;
    Leaf2.value = new Leaf2();
    return Leaf2;
  })();
  var Node = /* @__PURE__ */ (function() {
    function Node2(value0, value1, value2, value3, value4, value5) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value2;
      this.value3 = value3;
      this.value4 = value4;
      this.value5 = value5;
    }
    ;
    Node2.create = function(value0) {
      return function(value1) {
        return function(value2) {
          return function(value3) {
            return function(value4) {
              return function(value5) {
                return new Node2(value0, value1, value2, value3, value4, value5);
              };
            };
          };
        };
      };
    };
    return Node2;
  })();
  var Split = /* @__PURE__ */ (function() {
    function Split2(value0, value1, value2) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value2;
    }
    ;
    Split2.create = function(value0) {
      return function(value1) {
        return function(value2) {
          return new Split2(value0, value1, value2);
        };
      };
    };
    return Split2;
  })();
  var unsafeNode = function(k, v, l, r) {
    if (l instanceof Leaf) {
      if (r instanceof Leaf) {
        return new Node(1, 1, k, v, l, r);
      }
      ;
      if (r instanceof Node) {
        return new Node(1 + r.value0 | 0, 1 + r.value1 | 0, k, v, l, r);
      }
      ;
      throw new Error("Failed pattern match at Data.Map.Internal (line 702, column 5 - line 706, column 39): " + [r.constructor.name]);
    }
    ;
    if (l instanceof Node) {
      if (r instanceof Leaf) {
        return new Node(1 + l.value0 | 0, 1 + l.value1 | 0, k, v, l, r);
      }
      ;
      if (r instanceof Node) {
        return new Node(1 + (function() {
          var $280 = l.value0 > r.value0;
          if ($280) {
            return l.value0;
          }
          ;
          return r.value0;
        })() | 0, (1 + l.value1 | 0) + r.value1 | 0, k, v, l, r);
      }
      ;
      throw new Error("Failed pattern match at Data.Map.Internal (line 708, column 5 - line 712, column 68): " + [r.constructor.name]);
    }
    ;
    throw new Error("Failed pattern match at Data.Map.Internal (line 700, column 32 - line 712, column 68): " + [l.constructor.name]);
  };
  var singleton3 = function(k) {
    return function(v) {
      return new Node(1, 1, k, v, Leaf.value, Leaf.value);
    };
  };
  var unsafeBalancedNode = /* @__PURE__ */ (function() {
    var height2 = function(v) {
      if (v instanceof Leaf) {
        return 0;
      }
      ;
      if (v instanceof Node) {
        return v.value0;
      }
      ;
      throw new Error("Failed pattern match at Data.Map.Internal (line 757, column 12 - line 759, column 26): " + [v.constructor.name]);
    };
    var rotateLeft = function(k, v, l, rk, rv, rl, rr) {
      if (rl instanceof Node && rl.value0 > height2(rr)) {
        return unsafeNode(rl.value2, rl.value3, unsafeNode(k, v, l, rl.value4), unsafeNode(rk, rv, rl.value5, rr));
      }
      ;
      return unsafeNode(rk, rv, unsafeNode(k, v, l, rl), rr);
    };
    var rotateRight = function(k, v, lk, lv, ll, lr, r) {
      if (lr instanceof Node && height2(ll) <= lr.value0) {
        return unsafeNode(lr.value2, lr.value3, unsafeNode(lk, lv, ll, lr.value4), unsafeNode(k, v, lr.value5, r));
      }
      ;
      return unsafeNode(lk, lv, ll, unsafeNode(k, v, lr, r));
    };
    return function(k, v, l, r) {
      if (l instanceof Leaf) {
        if (r instanceof Leaf) {
          return singleton3(k)(v);
        }
        ;
        if (r instanceof Node && r.value0 > 1) {
          return rotateLeft(k, v, l, r.value2, r.value3, r.value4, r.value5);
        }
        ;
        return unsafeNode(k, v, l, r);
      }
      ;
      if (l instanceof Node) {
        if (r instanceof Node) {
          if (r.value0 > (l.value0 + 1 | 0)) {
            return rotateLeft(k, v, l, r.value2, r.value3, r.value4, r.value5);
          }
          ;
          if (l.value0 > (r.value0 + 1 | 0)) {
            return rotateRight(k, v, l.value2, l.value3, l.value4, l.value5, r);
          }
          ;
        }
        ;
        if (r instanceof Leaf && l.value0 > 1) {
          return rotateRight(k, v, l.value2, l.value3, l.value4, l.value5, r);
        }
        ;
        return unsafeNode(k, v, l, r);
      }
      ;
      throw new Error("Failed pattern match at Data.Map.Internal (line 717, column 40 - line 738, column 34): " + [l.constructor.name]);
    };
  })();
  var $lazy_unsafeSplit = /* @__PURE__ */ $runtime_lazy("unsafeSplit", "Data.Map.Internal", function() {
    return function(comp, k, m) {
      if (m instanceof Leaf) {
        return new Split(Nothing.value, Leaf.value, Leaf.value);
      }
      ;
      if (m instanceof Node) {
        var v = comp(k)(m.value2);
        if (v instanceof LT) {
          var v1 = $lazy_unsafeSplit(793)(comp, k, m.value4);
          return new Split(v1.value0, v1.value1, unsafeBalancedNode(m.value2, m.value3, v1.value2, m.value5));
        }
        ;
        if (v instanceof GT) {
          var v1 = $lazy_unsafeSplit(796)(comp, k, m.value5);
          return new Split(v1.value0, unsafeBalancedNode(m.value2, m.value3, m.value4, v1.value1), v1.value2);
        }
        ;
        if (v instanceof EQ) {
          return new Split(new Just(m.value3), m.value4, m.value5);
        }
        ;
        throw new Error("Failed pattern match at Data.Map.Internal (line 791, column 5 - line 799, column 30): " + [v.constructor.name]);
      }
      ;
      throw new Error("Failed pattern match at Data.Map.Internal (line 787, column 34 - line 799, column 30): " + [m.constructor.name]);
    };
  });
  var unsafeSplit = /* @__PURE__ */ $lazy_unsafeSplit(786);
  var $lazy_unsafeUnionWith = /* @__PURE__ */ $runtime_lazy("unsafeUnionWith", "Data.Map.Internal", function() {
    return function(comp, app, l, r) {
      if (l instanceof Leaf) {
        return r;
      }
      ;
      if (r instanceof Leaf) {
        return l;
      }
      ;
      if (r instanceof Node) {
        var v = unsafeSplit(comp, r.value2, l);
        var l$prime = $lazy_unsafeUnionWith(809)(comp, app, v.value1, r.value4);
        var r$prime = $lazy_unsafeUnionWith(810)(comp, app, v.value2, r.value5);
        if (v.value0 instanceof Just) {
          return unsafeBalancedNode(r.value2, app(v.value0.value0)(r.value3), l$prime, r$prime);
        }
        ;
        if (v.value0 instanceof Nothing) {
          return unsafeBalancedNode(r.value2, r.value3, l$prime, r$prime);
        }
        ;
        throw new Error("Failed pattern match at Data.Map.Internal (line 811, column 5 - line 815, column 46): " + [v.value0.constructor.name]);
      }
      ;
      throw new Error("Failed pattern match at Data.Map.Internal (line 804, column 42 - line 815, column 46): " + [l.constructor.name, r.constructor.name]);
    };
  });
  var unsafeUnionWith = /* @__PURE__ */ $lazy_unsafeUnionWith(803);
  var unionWith = function(dictOrd) {
    var compare3 = compare(dictOrd);
    return function(app) {
      return function(m1) {
        return function(m2) {
          return unsafeUnionWith(compare3, app, m1, m2);
        };
      };
    };
  };
  var member = function(dictOrd) {
    var compare3 = compare(dictOrd);
    return function(k) {
      var go = function($copy_v) {
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v) {
          if (v instanceof Leaf) {
            $tco_done = true;
            return false;
          }
          ;
          if (v instanceof Node) {
            var v1 = compare3(k)(v.value2);
            if (v1 instanceof LT) {
              $copy_v = v.value4;
              return;
            }
            ;
            if (v1 instanceof GT) {
              $copy_v = v.value5;
              return;
            }
            ;
            if (v1 instanceof EQ) {
              $tco_done = true;
              return true;
            }
            ;
            throw new Error("Failed pattern match at Data.Map.Internal (line 459, column 7 - line 462, column 19): " + [v1.constructor.name]);
          }
          ;
          throw new Error("Failed pattern match at Data.Map.Internal (line 456, column 8 - line 462, column 19): " + [v.constructor.name]);
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($copy_v);
        }
        ;
        return $tco_result;
      };
      return go;
    };
  };
  var lookup = function(dictOrd) {
    var compare3 = compare(dictOrd);
    return function(k) {
      var go = function($copy_v) {
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v) {
          if (v instanceof Leaf) {
            $tco_done = true;
            return Nothing.value;
          }
          ;
          if (v instanceof Node) {
            var v1 = compare3(k)(v.value2);
            if (v1 instanceof LT) {
              $copy_v = v.value4;
              return;
            }
            ;
            if (v1 instanceof GT) {
              $copy_v = v.value5;
              return;
            }
            ;
            if (v1 instanceof EQ) {
              $tco_done = true;
              return new Just(v.value3);
            }
            ;
            throw new Error("Failed pattern match at Data.Map.Internal (line 283, column 7 - line 286, column 22): " + [v1.constructor.name]);
          }
          ;
          throw new Error("Failed pattern match at Data.Map.Internal (line 280, column 8 - line 286, column 22): " + [v.constructor.name]);
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($copy_v);
        }
        ;
        return $tco_result;
      };
      return go;
    };
  };
  var insert = function(dictOrd) {
    var compare3 = compare(dictOrd);
    return function(k) {
      return function(v) {
        var go = function(v1) {
          if (v1 instanceof Leaf) {
            return singleton3(k)(v);
          }
          ;
          if (v1 instanceof Node) {
            var v2 = compare3(k)(v1.value2);
            if (v2 instanceof LT) {
              return unsafeBalancedNode(v1.value2, v1.value3, go(v1.value4), v1.value5);
            }
            ;
            if (v2 instanceof GT) {
              return unsafeBalancedNode(v1.value2, v1.value3, v1.value4, go(v1.value5));
            }
            ;
            if (v2 instanceof EQ) {
              return new Node(v1.value0, v1.value1, k, v, v1.value4, v1.value5);
            }
            ;
            throw new Error("Failed pattern match at Data.Map.Internal (line 471, column 7 - line 474, column 35): " + [v2.constructor.name]);
          }
          ;
          throw new Error("Failed pattern match at Data.Map.Internal (line 468, column 8 - line 474, column 35): " + [v1.constructor.name]);
        };
        return go;
      };
    };
  };
  var functorMap = {
    map: function(f) {
      var go = function(v) {
        if (v instanceof Leaf) {
          return Leaf.value;
        }
        ;
        if (v instanceof Node) {
          return new Node(v.value0, v.value1, v.value2, f(v.value3), go(v.value4), go(v.value5));
        }
        ;
        throw new Error("Failed pattern match at Data.Map.Internal (line 147, column 10 - line 150, column 39): " + [v.constructor.name]);
      };
      return go;
    }
  };
  var foldableMap = {
    foldr: function(f) {
      return function(z) {
        var $lazy_go = $runtime_lazy("go", "Data.Map.Internal", function() {
          return function(m$prime, z$prime) {
            if (m$prime instanceof Leaf) {
              return z$prime;
            }
            ;
            if (m$prime instanceof Node) {
              return $lazy_go(172)(m$prime.value4, f(m$prime.value3)($lazy_go(172)(m$prime.value5, z$prime)));
            }
            ;
            throw new Error("Failed pattern match at Data.Map.Internal (line 169, column 26 - line 172, column 43): " + [m$prime.constructor.name]);
          };
        });
        var go = $lazy_go(169);
        return function(m) {
          return go(m, z);
        };
      };
    },
    foldl: function(f) {
      return function(z) {
        var $lazy_go = $runtime_lazy("go", "Data.Map.Internal", function() {
          return function(z$prime, m$prime) {
            if (m$prime instanceof Leaf) {
              return z$prime;
            }
            ;
            if (m$prime instanceof Node) {
              return $lazy_go(178)(f($lazy_go(178)(z$prime, m$prime.value4))(m$prime.value3), m$prime.value5);
            }
            ;
            throw new Error("Failed pattern match at Data.Map.Internal (line 175, column 26 - line 178, column 43): " + [m$prime.constructor.name]);
          };
        });
        var go = $lazy_go(175);
        return function(m) {
          return go(z, m);
        };
      };
    },
    foldMap: function(dictMonoid) {
      var mempty2 = mempty(dictMonoid);
      var append12 = append(dictMonoid.Semigroup0());
      return function(f) {
        var go = function(v) {
          if (v instanceof Leaf) {
            return mempty2;
          }
          ;
          if (v instanceof Node) {
            return append12(go(v.value4))(append12(f(v.value3))(go(v.value5)));
          }
          ;
          throw new Error("Failed pattern match at Data.Map.Internal (line 181, column 10 - line 184, column 28): " + [v.constructor.name]);
        };
        return go;
      };
    }
  };
  var foldableWithIndexMap = {
    foldrWithIndex: function(f) {
      return function(z) {
        var $lazy_go = $runtime_lazy("go", "Data.Map.Internal", function() {
          return function(m$prime, z$prime) {
            if (m$prime instanceof Leaf) {
              return z$prime;
            }
            ;
            if (m$prime instanceof Node) {
              return $lazy_go(192)(m$prime.value4, f(m$prime.value2)(m$prime.value3)($lazy_go(192)(m$prime.value5, z$prime)));
            }
            ;
            throw new Error("Failed pattern match at Data.Map.Internal (line 189, column 26 - line 192, column 45): " + [m$prime.constructor.name]);
          };
        });
        var go = $lazy_go(189);
        return function(m) {
          return go(m, z);
        };
      };
    },
    foldlWithIndex: function(f) {
      return function(z) {
        var $lazy_go = $runtime_lazy("go", "Data.Map.Internal", function() {
          return function(z$prime, m$prime) {
            if (m$prime instanceof Leaf) {
              return z$prime;
            }
            ;
            if (m$prime instanceof Node) {
              return $lazy_go(198)(f(m$prime.value2)($lazy_go(198)(z$prime, m$prime.value4))(m$prime.value3), m$prime.value5);
            }
            ;
            throw new Error("Failed pattern match at Data.Map.Internal (line 195, column 26 - line 198, column 45): " + [m$prime.constructor.name]);
          };
        });
        var go = $lazy_go(195);
        return function(m) {
          return go(z, m);
        };
      };
    },
    foldMapWithIndex: function(dictMonoid) {
      var mempty2 = mempty(dictMonoid);
      var append12 = append(dictMonoid.Semigroup0());
      return function(f) {
        var go = function(v) {
          if (v instanceof Leaf) {
            return mempty2;
          }
          ;
          if (v instanceof Node) {
            return append12(go(v.value4))(append12(f(v.value2)(v.value3))(go(v.value5)));
          }
          ;
          throw new Error("Failed pattern match at Data.Map.Internal (line 201, column 10 - line 204, column 30): " + [v.constructor.name]);
        };
        return go;
      };
    },
    Foldable0: function() {
      return foldableMap;
    }
  };
  var keys = /* @__PURE__ */ (function() {
    return foldrWithIndex(foldableWithIndexMap)(function(k) {
      return function(v) {
        return function(acc) {
          return new Cons(k, acc);
        };
      };
    })(Nil.value);
  })();
  var empty2 = /* @__PURE__ */ (function() {
    return Leaf.value;
  })();

  // output/Data.Set/index.js
  var coerce2 = /* @__PURE__ */ coerce();
  var foldMap2 = /* @__PURE__ */ foldMap(foldableList);
  var foldl3 = /* @__PURE__ */ foldl(foldableList);
  var foldr2 = /* @__PURE__ */ foldr(foldableList);
  var $$Set = function(x) {
    return x;
  };
  var toList = function(v) {
    return keys(v);
  };
  var member2 = function(dictOrd) {
    return coerce2(member(dictOrd));
  };
  var insert2 = function(dictOrd) {
    var insert1 = insert(dictOrd);
    return function(a) {
      return function(v) {
        return insert1(a)(unit)(v);
      };
    };
  };
  var fromMap = $$Set;
  var foldableSet = {
    foldMap: function(dictMonoid) {
      var foldMap1 = foldMap2(dictMonoid);
      return function(f) {
        var $98 = foldMap1(f);
        return function($99) {
          return $98(toList($99));
        };
      };
    },
    foldl: function(f) {
      return function(x) {
        var $100 = foldl3(f)(x);
        return function($101) {
          return $100(toList($101));
        };
      };
    },
    foldr: function(f) {
      return function(x) {
        var $102 = foldr2(f)(x);
        return function($103) {
          return $102(toList($103));
        };
      };
    }
  };
  var empty3 = empty2;
  var fromFoldable2 = function(dictFoldable) {
    var foldl22 = foldl(dictFoldable);
    return function(dictOrd) {
      var insert1 = insert2(dictOrd);
      return foldl22(function(m) {
        return function(a) {
          return insert1(a)(m);
        };
      })(empty3);
    };
  };

  // output/Data.Map/index.js
  var keys2 = /* @__PURE__ */ (function() {
    var $38 = $$void(functorMap);
    return function($39) {
      return fromMap($38($39));
    };
  })();

  // output/Data.String.Common/foreign.js
  var split = function(sep) {
    return function(s) {
      return s.split(sep);
    };
  };
  var joinWith = function(s) {
    return function(xs) {
      return xs.join(s);
    };
  };

  // output/Autocategorise/index.js
  var member3 = /* @__PURE__ */ member2(ordString);
  var map4 = /* @__PURE__ */ map(functorArray);
  var lookup2 = /* @__PURE__ */ lookup(ordString);
  var unionWith2 = /* @__PURE__ */ unionWith(ordString);
  var add2 = /* @__PURE__ */ add(semiringInt);
  var compare2 = /* @__PURE__ */ compare(ordInt);
  var stopWords = /* @__PURE__ */ fromFoldable2(foldableArray)(ordString)(["this", "and", "the", "a", "to", "about", "of", "from", "with", "some", "my", "for", "mainly", "it", "on", "in"]);
  var tokenise = /* @__PURE__ */ (function() {
    var split3 = split(" ");
    var filter3 = filter(function(x) {
      return !member3(x)(stopWords);
    });
    return function($31) {
      return filter3(split3($31));
    };
  })();
  var semigroupStats = {
    append: function(v) {
      return function(v1) {
        return unionWith2(add2)(v)(v1);
      };
    }
  };
  var monoidStats = {
    mempty: empty2,
    Semigroup0: function() {
      return semigroupStats;
    }
  };
  var getStats = /* @__PURE__ */ (function() {
    var $32 = fold(foldableArray)(monoidStats);
    var $33 = map4(function(x) {
      return singleton3(x)(1);
    });
    return function($34) {
      return $32($33($34));
    };
  })();
  var compareFirstJust = function(v) {
    return function(v1) {
      if (v.value0 instanceof Just && v1.value0 instanceof Just) {
        return compare2(v1.value0.value0)(v.value0.value0);
      }
      ;
      return EQ.value;
    };
  };
  var mostFrequentTuples = function(v) {
    var sort = sortBy(compareFirstJust);
    var filter3 = filter(function($35) {
      return isJust(fst($35));
    });
    var enhance = function(x) {
      return new Tuple(lookup2(x)(v), x);
    };
    var $36 = map4(enhance);
    return function($37) {
      return sort(filter3($36($37)));
    };
  };
  var mostFrequent = function(s) {
    var $38 = map4(snd);
    var $39 = mostFrequentTuples(s);
    return function($40) {
      return $38($39($40));
    };
  };
  var classify = function(s) {
    var $41 = fromMaybe("~ empty ~");
    var $42 = mostFrequent(s);
    return function($43) {
      return $41(head($42($43)));
    };
  };
  var classifier = function(sentences) {
    var stats = getStats(concat(map4(tokenise)(sentences)));
    var $44 = classify(stats);
    return function($45) {
      return $44(tokenise($45));
    };
  };

  // output/Data.Int/foreign.js
  var fromNumberImpl = function(just) {
    return function(nothing) {
      return function(n) {
        return (n | 0) === n ? just(n) : nothing;
      };
    };
  };
  var toNumber = function(n) {
    return n;
  };

  // output/Data.Number/foreign.js
  var isFiniteImpl = isFinite;
  var round = Math.round;

  // output/Data.Int/index.js
  var top2 = /* @__PURE__ */ top(boundedInt);
  var bottom2 = /* @__PURE__ */ bottom(boundedInt);
  var fromNumber = /* @__PURE__ */ (function() {
    return fromNumberImpl(Just.create)(Nothing.value);
  })();
  var unsafeClamp = function(x) {
    if (!isFiniteImpl(x)) {
      return 0;
    }
    ;
    if (x >= toNumber(top2)) {
      return top2;
    }
    ;
    if (x <= toNumber(bottom2)) {
      return bottom2;
    }
    ;
    if (otherwise) {
      return fromMaybe(0)(fromNumber(x));
    }
    ;
    throw new Error("Failed pattern match at Data.Int (line 72, column 1 - line 72, column 29): " + [x.constructor.name]);
  };
  var round2 = function($37) {
    return unsafeClamp(round($37));
  };

  // output/Data.String.CodePoints/foreign.js
  var hasArrayFrom = typeof Array.from === "function";
  var hasStringIterator = typeof Symbol !== "undefined" && Symbol != null && typeof Symbol.iterator !== "undefined" && typeof String.prototype[Symbol.iterator] === "function";
  var hasFromCodePoint = typeof String.prototype.fromCodePoint === "function";
  var hasCodePointAt = typeof String.prototype.codePointAt === "function";
  var _unsafeCodePointAt0 = function(fallback) {
    return hasCodePointAt ? function(str) {
      return str.codePointAt(0);
    } : fallback;
  };
  var _toCodePointArray = function(fallback) {
    return function(unsafeCodePointAt02) {
      if (hasArrayFrom) {
        return function(str) {
          return Array.from(str, unsafeCodePointAt02);
        };
      }
      return fallback;
    };
  };

  // output/Data.Enum/foreign.js
  function toCharCode(c) {
    return c.charCodeAt(0);
  }
  function fromCharCode(c) {
    return String.fromCharCode(c);
  }

  // output/Data.Enum/index.js
  var bottom1 = /* @__PURE__ */ bottom(boundedChar);
  var top1 = /* @__PURE__ */ top(boundedChar);
  var fromEnum = function(dict) {
    return dict.fromEnum;
  };
  var defaultSucc = function(toEnum$prime) {
    return function(fromEnum$prime) {
      return function(a) {
        return toEnum$prime(fromEnum$prime(a) + 1 | 0);
      };
    };
  };
  var defaultPred = function(toEnum$prime) {
    return function(fromEnum$prime) {
      return function(a) {
        return toEnum$prime(fromEnum$prime(a) - 1 | 0);
      };
    };
  };
  var charToEnum = function(v) {
    if (v >= toCharCode(bottom1) && v <= toCharCode(top1)) {
      return new Just(fromCharCode(v));
    }
    ;
    return Nothing.value;
  };
  var enumChar = {
    succ: /* @__PURE__ */ defaultSucc(charToEnum)(toCharCode),
    pred: /* @__PURE__ */ defaultPred(charToEnum)(toCharCode),
    Ord0: function() {
      return ordChar;
    }
  };
  var boundedEnumChar = /* @__PURE__ */ (function() {
    return {
      cardinality: toCharCode(top1) - toCharCode(bottom1) | 0,
      toEnum: charToEnum,
      fromEnum: toCharCode,
      Bounded0: function() {
        return boundedChar;
      },
      Enum1: function() {
        return enumChar;
      }
    };
  })();

  // output/Data.String.CodeUnits/foreign.js
  var length2 = function(s) {
    return s.length;
  };
  var drop2 = function(n) {
    return function(s) {
      return s.substring(n);
    };
  };

  // output/Data.String.Unsafe/foreign.js
  var charAt = function(i) {
    return function(s) {
      if (i >= 0 && i < s.length) return s.charAt(i);
      throw new Error("Data.String.Unsafe.charAt: Invalid index.");
    };
  };

  // output/Data.String.CodePoints/index.js
  var fromEnum2 = /* @__PURE__ */ fromEnum(boundedEnumChar);
  var map5 = /* @__PURE__ */ map(functorMaybe);
  var unfoldr2 = /* @__PURE__ */ unfoldr(unfoldableArray);
  var unsurrogate = function(lead) {
    return function(trail) {
      return (((lead - 55296 | 0) * 1024 | 0) + (trail - 56320 | 0) | 0) + 65536 | 0;
    };
  };
  var isTrail = function(cu) {
    return 56320 <= cu && cu <= 57343;
  };
  var isLead = function(cu) {
    return 55296 <= cu && cu <= 56319;
  };
  var uncons = function(s) {
    var v = length2(s);
    if (v === 0) {
      return Nothing.value;
    }
    ;
    if (v === 1) {
      return new Just({
        head: fromEnum2(charAt(0)(s)),
        tail: ""
      });
    }
    ;
    var cu1 = fromEnum2(charAt(1)(s));
    var cu0 = fromEnum2(charAt(0)(s));
    var $43 = isLead(cu0) && isTrail(cu1);
    if ($43) {
      return new Just({
        head: unsurrogate(cu0)(cu1),
        tail: drop2(2)(s)
      });
    }
    ;
    return new Just({
      head: cu0,
      tail: drop2(1)(s)
    });
  };
  var unconsButWithTuple = function(s) {
    return map5(function(v) {
      return new Tuple(v.head, v.tail);
    })(uncons(s));
  };
  var toCodePointArrayFallback = function(s) {
    return unfoldr2(unconsButWithTuple)(s);
  };
  var unsafeCodePointAt0Fallback = function(s) {
    var cu0 = fromEnum2(charAt(0)(s));
    var $47 = isLead(cu0) && length2(s) > 1;
    if ($47) {
      var cu1 = fromEnum2(charAt(1)(s));
      var $48 = isTrail(cu1);
      if ($48) {
        return unsurrogate(cu0)(cu1);
      }
      ;
      return cu0;
    }
    ;
    return cu0;
  };
  var unsafeCodePointAt0 = /* @__PURE__ */ _unsafeCodePointAt0(unsafeCodePointAt0Fallback);
  var toCodePointArray = /* @__PURE__ */ _toCodePointArray(toCodePointArrayFallback)(unsafeCodePointAt0);
  var length3 = function($74) {
    return length(toCodePointArray($74));
  };

  // output/Main/index.js
  var append2 = /* @__PURE__ */ append(semigroupString);
  var unionWith3 = /* @__PURE__ */ unionWith(ordString);
  var add3 = /* @__PURE__ */ add(semiringNumber);
  var lookup3 = /* @__PURE__ */ lookup(ordString);
  var elem3 = /* @__PURE__ */ elem2(eqString);
  var map6 = /* @__PURE__ */ map(functorArray);
  var fromFoldable4 = /* @__PURE__ */ fromFoldable(foldableSet);
  var append1 = /* @__PURE__ */ append(semigroupArray);
  var fromFoldable1 = /* @__PURE__ */ fromFoldable(foldableArray);
  var add1 = /* @__PURE__ */ add(semiringInt);
  var show1 = /* @__PURE__ */ show(showInt);
  var Plain = /* @__PURE__ */ (function() {
    function Plain2(value0) {
      this.value0 = value0;
    }
    ;
    Plain2.create = function(value0) {
      return new Plain2(value0);
    };
    return Plain2;
  })();
  var Linked = /* @__PURE__ */ (function() {
    function Linked2(value0) {
      this.value0 = value0;
    }
    ;
    Linked2.create = function(value0) {
      return new Linked2(value0);
    };
    return Linked2;
  })();
  var words = /* @__PURE__ */ split(" ");
  var shorten = function(a) {
    var v = unsnoc(a);
    if (v instanceof Nothing) {
      return [];
    }
    ;
    if (v instanceof Just) {
      return v.value0.init;
    }
    ;
    throw new Error("Failed pattern match at Main (line 168, column 13 - line 170, column 41): " + [v.constructor.name]);
  };
  var semigroupChartStats = {
    append: function(v) {
      return function(v1) {
        return unionWith3(add3)(v)(v1);
      };
    }
  };
  var sectionLength = function(v) {
    if (v instanceof Plain) {
      return length3(v.value0);
    }
    ;
    if (v instanceof Linked) {
      return length3(v.value0);
    }
    ;
    throw new Error("Failed pattern match at Main (line 63, column 1 - line 63, column 43): " + [v.constructor.name]);
  };
  var renderFolder = function($copy_v) {
    return function($copy_v1) {
      var $tco_var_v = $copy_v;
      var $tco_done = false;
      var $tco_result;
      function $tco_loop(v, v1) {
        if (v1 === "") {
          $tco_var_v = v;
          $copy_v1 = "default";
          return;
        }
        ;
        $tco_done = true;
        return '<a href="' + (v + ("?" + (v1 + ('">' + (v1 + "</a>")))));
      }
      ;
      while (!$tco_done) {
        $tco_result = $tco_loop($tco_var_v, $copy_v1);
      }
      ;
      return $tco_result;
    };
  };
  var produceCrumbs = function(i) {
    return new Plain(foldl2(append2)("")(replicate(i)(".")));
  };
  var monoidChartStats = {
    mempty: empty2,
    Semigroup0: function() {
      return semigroupChartStats;
    }
  };
  var fold2 = /* @__PURE__ */ fold(foldableArray)(monoidChartStats);
  var markupDescriptionSection = function(v) {
    if (v instanceof Plain) {
      return "<span>" + (v.value0 + "</span> ");
    }
    ;
    if (v instanceof Linked) {
      return '<span class="category">' + (v.value0 + "</span> ");
    }
    ;
    throw new Error("Failed pattern match at Main (line 191, column 1 - line 191, column 57): " + [v.constructor.name]);
  };
  var markupDescriptionSections = /* @__PURE__ */ foldMap(foldableArray)(monoidString)(markupDescriptionSection);
  var lookupCharStats = function(k) {
    return function(v) {
      return lookup3(k)(v);
    };
  };
  var linkCategories = function(categories) {
    var toSection = function(word) {
      if (elem3(word)(categories)) {
        return new Linked(word);
      }
      ;
      if (otherwise) {
        return new Plain(word);
      }
      ;
      throw new Error("Failed pattern match at Main (line 151, column 9 - line 153, column 35): " + [word.constructor.name]);
    };
    var $107 = map6(toSection);
    return function($108) {
      return $107(words($108));
    };
  };
  var keysCharStats = function(v) {
    return fromFoldable4(keys2(v));
  };
  var initialState = {
    entries: []
  };
  var getEntries = function(s) {
    return s.entries;
  };
  var getDuration = function(v) {
    return v.duration;
  };
  var getChartData = function(s) {
    var entryDuration = function(v) {
      return v.duration;
    };
    var entryDescription = function(v) {
      return v.description;
    };
    var classify2 = classifier(map6(entryDescription)(s.entries));
    var makeSingleton = function(v) {
      return singleton3(classify2(v.description))(v.duration);
    };
    var allStats = map6(makeSingleton)(s.entries);
    var unifiedStats = fold2(allStats);
    var toValue = function(k) {
      return fromMaybe(0)(lookupCharStats(k)(unifiedStats));
    };
    var toData = function(k) {
      return {
        label: k,
        value: toValue(k)
      };
    };
    return fromFoldable1(map6(toData)(keysCharStats(unifiedStats)));
  };
  var fromEntryToMargin = function(v) {
    var hours2 = v.duration / toNumber(60);
    return {
      description: v.description,
      time: v.start,
      value: hours2
    };
  };
  var exportAsMarginFile = function(state) {
    return map6(fromEntryToMargin)(state.entries);
  };
  var descriptionSectionLength = function(v) {
    if (v instanceof Plain) {
      return length3(v.value0);
    }
    ;
    if (v instanceof Linked) {
      return length3(v.value0);
    }
    ;
    throw new Error("Failed pattern match at Main (line 55, column 1 - line 55, column 54): " + [v.constructor.name]);
  };
  var descriptionSectionArrayLength = /* @__PURE__ */ (function() {
    var f = function(b) {
      return function(a) {
        return b + descriptionSectionLength(a) | 0;
      };
    };
    return foldl(foldableArray)(f)(0);
  })();
  var takeSections = function($copy_v) {
    return function($copy_v1) {
      var $tco_var_v = $copy_v;
      var $tco_done = false;
      var $tco_result;
      function $tco_loop(v, v1) {
        if (v1.length === 0) {
          $tco_done = true;
          return [];
        }
        ;
        if (descriptionSectionArrayLength(shorten(v1)) >= v) {
          $tco_var_v = v;
          $copy_v1 = shorten(v1);
          return;
        }
        ;
        if (otherwise) {
          $tco_done = true;
          return v1;
        }
        ;
        throw new Error("Failed pattern match at Main (line 174, column 1 - line 174, column 76): " + [v.constructor.name, v1.constructor.name]);
      }
      ;
      while (!$tco_done) {
        $tco_result = $tco_loop($tco_var_v, $copy_v1);
      }
      ;
      return $tco_result;
    };
  };
  var dropSections = function(m) {
    return function(a) {
      var taken = takeSections(m)(a);
      return drop(length(taken))(a);
    };
  };
  var crumbify = function(minutes) {
    return function(sections) {
      var sum2 = foldl2(add1)(0);
      var f = function(delta) {
        if (delta > 1) {
          return append1(sections)([produceCrumbs(delta)]);
        }
        ;
        if (otherwise) {
          return sections;
        }
        ;
        throw new Error("Failed pattern match at Main (line 162, column 9 - line 164, column 33): " + [delta.constructor.name]);
      };
      return f(minutes - sum2(map6(sectionLength)(sections)) | 0);
    };
  };
  var processDescription = function(categories) {
    return function(description) {
      return function(minutes) {
        var sections = linkCategories(categories)(description);
        var solid = takeSections(minutes)(sections);
        var grey = dropSections(minutes)(sections);
        return {
          solid: crumbify(minutes)(solid),
          grey
        };
      };
    };
  };
  var renderEntry = function(classify2) {
    return function(v) {
      var dur = round2(v.duration);
      var cat = classify2(v.description);
      var processed = /* @__PURE__ */ (function(v1) {
        return v1;
      })(processDescription([cat])(v.description)(dur));
      return '<br><span class="time">' + (show1(dur) + ("</span>" + (markupDescriptionSections(processed.solid) + ('<span class="extra">' + (markupDescriptionSections(processed.grey) + "</span>")))));
    };
  };
  var renderEntries = function(s) {
    var classify2 = classifier(map6(function(v) {
      return v.description;
    })(s.entries));
    return joinWith(" ")(reverse(map6(renderEntry(classify2))(s.entries)));
  };
  var addEntry = function(du) {
    return function(de) {
      return function(st) {
        return function(state) {
          var newEntry = {
            duration: du,
            description: de,
            start: st
          };
          return {
            entries: snoc(state.entries)(newEntry)
          };
        };
      };
    };
  };

  // fun.js
  function format(minutes) {
    var a = hours(minutes);
    return a[0] + " hours, " + a[1] + " minutes";
  }
  function hours(minutes) {
    var reminder = minutes % 60, integer = minutes - reminder;
    return [integer / 60, reminder];
  }

  // chart.js
  var d3 = __toESM(require_d3());
  var svg2 = d3.select("#chart").append("svg").append("g");
  svg2.append("g").attr("class", "slices");
  svg2.append("g").attr("class", "labels");
  svg2.append("g").attr("class", "lines");
  var width = 650;
  var height = 450;
  var radius = Math.min(width, height) / 2;
  var pie = d3.layout.pie().sort(null).value(function(d) {
    return d.value;
  });
  var arc = d3.svg.arc().outerRadius(radius * 0.8).innerRadius(radius * 0.4);
  var outerArc = d3.svg.arc().innerRadius(radius * 0.9).outerRadius(radius * 0.9);
  svg2.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  var key = function(d) {
    return d.data.label;
  };
  var color = d3.scale.ordinal().domain(["Lorem ipsum", "dolor sit", "amet", "consectetur", "adipisicing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt"]).range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
  function randomData() {
    var labels = color.domain();
    return labels.map(function(label) {
      return { label, value: Math.random() };
    });
  }
  change(randomData());
  d3.select(".randomize").on("click", function() {
    change(randomData());
  });
  function change(data) {
    var slice3 = svg2.select(".slices").selectAll("path.slice").data(pie(data), key);
    slice3.enter().insert("path").style("fill", function(d) {
      return color(d.data.label);
    }).attr("class", "slice");
    slice3.transition().duration(1e3).attrTween("d", function(d) {
      this._current = this._current || d;
      var interpolate2 = d3.interpolate(this._current, d);
      this._current = interpolate2(0);
      return function(t) {
        return arc(interpolate2(t));
      };
    });
    slice3.exit().remove();
    var text = svg2.select(".labels").selectAll("text").data(pie(data), key);
    text.enter().append("text").attr("class", "background-stroke").attr("dy", ".35em").text(function(d) {
      return d.data.label;
    });
    function midAngle(d) {
      return d.startAngle + (d.endAngle - d.startAngle) / 2;
    }
    text.transition().duration(1e3).attrTween("transform", function(d) {
      this._current = this._current || d;
      var interpolate2 = d3.interpolate(this._current, d);
      this._current = interpolate2(0);
      return function(t) {
        var d2 = interpolate2(t);
        var pos = outerArc.centroid(d2);
        pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
        return "translate(" + pos + ")";
      };
    }).styleTween("text-anchor", function(d) {
      this._current = this._current || d;
      var interpolate2 = d3.interpolate(this._current, d);
      this._current = interpolate2(0);
      return function(t) {
        var d2 = interpolate2(t);
        return midAngle(d2) < Math.PI ? "start" : "end";
      };
    });
    text.exit().remove();
    var polyline = svg2.select(".lines").selectAll("polyline").data(pie(data), key);
    polyline.enter().append("polyline").attr("class", "connection");
    polyline.transition().duration(1e3).attrTween("points", function(d) {
      this._current = this._current || d;
      var interpolate2 = d3.interpolate(this._current, d);
      this._current = interpolate2(0);
      return function(t) {
        var d2 = interpolate2(t);
        var pos = outerArc.centroid(d2);
        pos[0] = radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
        return [arc.centroid(d2), outerArc.centroid(d2), pos];
      };
    });
    polyline.exit().remove();
  }

  // index.js
  var minute = 6e4;
  var before = Date.now();
  function getInput() {
    return jquery_module_default("input");
  }
  function Reporter() {
    var reporter = this;
    this.$node = false;
    this.update = function() {
      if (this.$node) {
        this.$node.text(format(this.counter));
      }
    };
    this.counter = 0;
    this.add = function(time) {
      this.counter += parseInt(time);
      this.update();
    };
    this.set = {
      node: function($node) {
        reporter.$node = $node;
        reporter.update();
      }
    };
    return this;
  }
  function set(n, reset2) {
    getInput().attr("size", n);
    if (reset2) {
      getInput().prop("value", "");
    }
  }
  function reset() {
    set(1, true);
  }
  function updateInput() {
    var now = Date.now();
    var dif = (now - before) / minute;
    dif = Math.round(dif);
    var num = Number(getInput().attr("size")) + dif;
    set(num);
    before = now;
  }
  setInterval(updateInput, minute);
  var reporters;
  function refresh() {
    function reportTime(entry) {
      var time = getDuration(entry);
      reporters.all.add(time);
    }
    var state = burrito.state;
    reporters = {
      all: new Reporter()
    };
    reporters.all.set.node(jquery_module_default(".all.reporter"));
    getEntries(state).map(reportTime);
    jquery_module_default(".report").empty();
    jquery_module_default(".report").prepend(renderEntries(state));
    jquery_module_default(".folders").empty();
    allKeys().map(renderFolder(location.href.split("?")[0])).map(function(e) {
      jquery_module_default(".folders").prepend(e);
    });
    change(getChartData(state));
  }
  function stateLabel() {
    return location.search.substr(1) || "default";
  }
  var burrito = {
    state: initialState,
    update: function(newState) {
      this.state = newState;
      this.save();
    },
    updateWith: function(f) {
      this.state = f(this.state);
      this.save();
    },
    save: function() {
      localStorage[stateLabel()] = JSON.stringify(this.state);
    },
    load: function() {
      var stored = localStorage.getItem(stateLabel());
      if (stored) {
        try {
          this.state = JSON.parse(stored);
        } catch (e) {
          console.log("error parsing " + stored);
        }
      } else {
        console.log("no state saved locally");
      }
    }
  };
  window.onload = function() {
    getInput().keyup(function(e) {
      if (e.which === 13) {
        var $i = getInput();
        updateInput();
        var minutes = $i.attr("size") - 1;
        var value = $i.prop("value");
        var d = /* @__PURE__ */ new Date();
        burrito.updateWith(addEntry(minutes)(value)(d));
        refresh();
        reset();
        jquery_module_default(".hour").text(d.getHours() + ":" + d.getMinutes());
      }
    });
    jquery_module_default("button#clear").click(function() {
      burrito.update(initialState);
      refresh();
    });
    var exportAnchor = "#export a";
    function toggleExport() {
      jquery_module_default("#export *").toggle();
    }
    jquery_module_default("#export button").click(function() {
      var s = JSON.stringify(exportAsMarginFile(burrito.state));
      var b = new Blob([s], { type: "application/json" });
      var u = URL.createObjectURL(b);
      var fileName = "crumbs-margin-export-" + (/* @__PURE__ */ new Date()).toISOString() + ".json";
      jquery_module_default(exportAnchor).attr({
        "href": u,
        "download": fileName
      });
      toggleExport();
    });
    jquery_module_default(exportAnchor).toggle().click(toggleExport);
    burrito.load();
    refresh();
    reset();
    getInput().focus();
    jquery_module_default(document).on("mouseenter mouseleave", ".report a", function(e) {
      var r = reporters["#" + jquery_module_default(e.target).attr("data-name")];
      jquery_module_default(".prompt").text(r.counter).toggle();
    });
  };
  window.onpageshow = function() {
    getInput().focus();
  };
  function allKeys(maybeN) {
    var n = maybeN || 0;
    var currentKey = localStorage.key(n);
    if (currentKey) {
      var otherKeys = allKeys(n + 1);
      otherKeys.push(currentKey);
      return otherKeys;
    } else {
      return [];
    }
  }
})();
/*! Bundled license information:

jquery/dist-module/jquery.module.js:
  (*!
   * jQuery JavaScript Library v4.0.0
   * https://jquery.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.com/license/
   *
   * Date: 2026-01-18T00:20Z
   *)
*/
