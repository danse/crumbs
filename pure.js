// Generated by psc-bundle 0.8.2.0
var PS = { };
(function(exports) {
  /* global exports */
  "use strict";

  exports.snoc = function (l) {
    return function (e) {
      var l1 = l.slice();
      l1.push(e);
      return l1;
    };
  };

  //------------------------------------------------------------------------------
  // Subarrays -------------------------------------------------------------------
  //------------------------------------------------------------------------------

  exports.slice = function (s) {
    return function (e) {
      return function (l) {
        return l.slice(s, e);
      };
    };
  };
 
})(PS["Data.Array"] = PS["Data.Array"] || {});
(function(exports) {
  // Generated by psc version 0.8.2.0
  "use strict";
  var $foreign = PS["Data.Array"];
  var Prelude = PS["Prelude"];
  var Control_Alt = PS["Control.Alt"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Lazy = PS["Control.Lazy"];
  var Control_MonadPlus = PS["Control.MonadPlus"];
  var Control_Plus = PS["Control.Plus"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Functor_Invariant = PS["Data.Functor.Invariant"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Traversable = PS["Data.Traversable"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Maybe_Unsafe = PS["Data.Maybe.Unsafe"];
  exports["snoc"] = $foreign.snoc;;
 
})(PS["Data.Array"] = PS["Data.Array"] || {});
(function(exports) {
  // Generated by psc version 0.8.2.0
  "use strict";
  var Prelude = PS["Prelude"];
  var Data_Array = PS["Data.Array"];     
  var initialState = {
      records: [  ]
  };
  var getRecords = function (s) {
      return s.records;
  };
  var getDuration = function (r) {
      return r.duration;
  };
  var getDescription = function (r) {
      return r.description;
  };
  var addEntry = function (dur) {
      return function (desc) {
          return function (state) {
              var $0 = {};
              for (var $1 in state) {
                  if (state.hasOwnProperty($1)) {
                      $0[$1] = state[$1];
                  };
              };
              $0.records = Data_Array.snoc(state.records)({
                  duration: dur, 
                  description: desc
              });
              return $0;
          };
      };
  };
  exports["getDescription"] = getDescription;
  exports["getDuration"] = getDuration;
  exports["getRecords"] = getRecords;
  exports["addEntry"] = addEntry;
  exports["initialState"] = initialState;;
 
})(PS["Main"] = PS["Main"] || {});
