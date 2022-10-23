// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../Cargo.toml":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__wbg_source_4018ee1baae2aca9 = exports.__wbg_show_d9a754802a4c4517 = exports.__wbg_setvaluemissing_3424ee62621656a1 = exports.__wbg_setvalue_e5b519cca37d82a7 = exports.__wbg_setvalue_df64bc6794c098f2 = exports.__wbg_setvaliditytransform_988c4024066dcb7e = exports.__wbg_setvalid_93fc2cb0fc080ccf = exports.__wbg_settypemismatch_849c1959c663ec3b = exports.__wbg_settooshort_fcb11543f1855835 = exports.__wbg_settoolong_bf4cbf4e06af1e8a = exports.__wbg_setrangeunderflow_083530a3d76c9240 = exports.__wbg_setrangeoverflow_c9c38dc044253650 = exports.__wbg_setpatternmismatch_01a269a30f4caf79 = exports.__wbg_setnodeValue_4077cafeefd0725e = exports.__wbg_setcustomerror_9e846cdcd76edacb = exports.__wbg_setchecked_f1e1f3e62cdca8e7 = exports.__wbg_setbadinput_ff732764da58c8ad = exports.__wbg_set_bf3f89b92d5a34bf = exports.__wbg_set_83db9690f9353e79 = exports.__wbg_setItem_9c469d634d0c321c = exports.__wbg_setAttribute_d8436c14a59ab1af = exports.__wbg_self_6d479506f72c6a71 = exports.__wbg_selected_55ed9ed5a939e1c1 = exports.__wbg_resolve_99fe17964f31ffc0 = exports.__wbg_removed_ec78ac7c35a1ad73 = exports.__wbg_removeEventListener_b10f1a66647f3aa0 = exports.__wbg_removeChild_6751e9ca5d9aaf00 = exports.__wbg_removeAttribute_beaed7727852af78 = exports.__wbg_querySelector_3628dc2c3319e7e0 = exports.__wbg_pushState_38917fb88b4add30 = exports.__wbg_preventDefault_3209279b490de583 = exports.__wbg_pathname_78a642e573bf8169 = exports.__wbg_pathname_4441d4d8fc4aba51 = exports.__wbg_parentElement_0cffb3ceb0f107bd = exports.__wbg_next_aaef7c8aa5e212ac = exports.__wbg_next_579e583d33566a86 = exports.__wbg_newwithstrandinit_05d7180788420c40 = exports.__wbg_newwithbyteoffsetandlength_d9aa266703cb98be = exports.__wbg_newnoargs_b5b063fc6c2f0376 = exports.__wbg_new_abda76e883ba8a5f = exports.__wbg_new_8c3f0052272a457a = exports.__wbg_new_7d95b89914e4d377 = exports.__wbg_new_2d0053ee81e4dd2a = exports.__wbg_new_0b9bfdd97583284e = exports.__wbg_namespaceURI_e19c7be2c60e5b5c = exports.__wbg_log_de258f66ad9eb784 = exports.__wbg_location_8cc8ccf27e342c0a = exports.__wbg_localStorage_753b6d15a844c3dc = exports.__wbg_length_9e1ae1900cb0fbd5 = exports.__wbg_lastChild_a2f5ed739809bb31 = exports.__wbg_iterator_6f9d4f28845f426c = exports.__wbg_is_40a66842732708e7 = exports.__wbg_instanceof_Window_acc97ff9f5d2c7b4 = exports.__wbg_instanceof_Set_7548e9530f14bce0 = exports.__wbg_instanceof_Response_eaa426220848a39e = exports.__wbg_instanceof_Element_33bd126d58f2021b = exports.__wbg_instanceof_CustomEvent_30678b3aca903ea9 = exports.__wbg_insertBefore_9f2d2defb9471006 = exports.__wbg_info_d60a960a4e955dc2 = exports.__wbg_index_ab024aace404298a = exports.__wbg_index_3f1ab014d1a02142 = exports.__wbg_index_30bbf9019e84d0f9 = exports.__wbg_href_90ff36b5040e3b76 = exports.__wbg_history_2a104346a1208269 = exports.__wbg_headers_fd64ad685cf22e5d = exports.__wbg_has_8359f114ce042f5a = exports.__wbg_global_ba75c50d1cf384f4 = exports.__wbg_globalThis_7f206bda628d5286 = exports.__wbg_get_765201544a2b6869 = exports.__wbg_getItem_845e475f85f593e4 = exports.__wbg_fetch_749a56934f95c96c = exports.__wbg_fetch_386f87a3ebf5003c = exports.__wbg_error_f851667af71bcfc6 = exports.__wbg_error_ef9a0be47931175f = exports.__wbg_error_00c5d571f754f629 = exports.__wbg_dummyloader_efe09c3b1e8f68d6 = exports.__wbg_dummyloader_89a252453c8b5195 = exports.__wbg_dummyloader_51f96d6d6c47545a = exports.__wbg_dummyloader_3d3e53cf3007377a = exports.__wbg_dummyloader_264a0f02d7399c3a = exports.__wbg_dummyloader_1b85b5b8595db7a9 = exports.__wbg_dummyloader_1a4492c6bfea70d9 = exports.__wbg_done_1b73b0672e15f234 = exports.__wbg_document_3ead31dbcad65886 = exports.__wbg_diff_24379af6784d4792 = exports.__wbg_detail_90df16fd4821c69c = exports.__wbg_debug_64711eb2fc6980ef = exports.__wbg_createTextNode_300f845fab76642f = exports.__wbg_createElement_976dbb84fe1661b5 = exports.__wbg_createElementNS_1561aca8ee3693c0 = exports.__wbg_cancelBubble_8c0bdf21c08f1717 = exports.__wbg_call_97ae9d8645dc388b = exports.__wbg_buffer_3f3d764d4747d564 = exports.__wbg_body_3cb4b4042b9a632b = exports.__wbg_arrayBuffer_4c27b6f00c530232 = exports.__wbg_append_de37df908812970d = exports.__wbg_appendChild_e513ef0e5098dfdd = exports.__wbg_added_a7892c6169161d7c = exports.__wbg_addEventListener_1fc744729ac6dc27 = exports.__wbg_action_92036701f377866a = void 0;
exports.run = exports.default = exports.__wbindgen_throw = exports.__wbindgen_string_new = exports.__wbindgen_string_get = exports.__wbindgen_object_drop_ref = exports.__wbindgen_object_clone_ref = exports.__wbindgen_number_new = exports.__wbindgen_number_get = exports.__wbindgen_memory = exports.__wbindgen_is_undefined = exports.__wbindgen_is_object = exports.__wbindgen_is_function = exports.__wbindgen_debug_string = exports.__wbindgen_closure_wrapper15540 = exports.__wbindgen_closure_wrapper15257 = exports.__wbindgen_closure_wrapper14545 = exports.__wbindgen_closure_wrapper10158 = exports.__wbindgen_cb_drop = exports.__wbg_window_f2557cc78490aceb = exports.__wbg_warn_be542501a57387a5 = exports.__wbg_warn_0b90a269a514ae1d = exports.__wbg_values_a47b21e7728c4958 = exports.__wbg_value_ccb32485ee1b3928 = exports.__wbg_value_b2a620d34c663701 = exports.__wbg_value_1ccc36bc03462d71 = exports.__wbg_valueOf_6b6effad03e5c546 = exports.__wbg_url_74285ddf2747cb3d = exports.__wbg_then_cedad20fbbd9418a = exports.__wbg_then_11f7a54d67b4bfad = exports.__wbg_target_bf704b7db7ad1387 = exports.__wbg_stringify_d6471d300ded9b68 = exports.__wbg_status_c4ef3dd591e63435 = exports.__wbg_stack_658279fe44541cf6 = void 0;

var _yew_app_bg = _interopRequireDefault(require("./pkg/yew_app_bg.wasm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _yew_app_bg.default;
exports.default = _default;
var run = _yew_app_bg.default.run;
exports.run = run;
var __wbindgen_string_new = _yew_app_bg.default.__wbindgen_string_new;
exports.__wbindgen_string_new = __wbindgen_string_new;
var __wbindgen_object_clone_ref = _yew_app_bg.default.__wbindgen_object_clone_ref;
exports.__wbindgen_object_clone_ref = __wbindgen_object_clone_ref;
var __wbindgen_cb_drop = _yew_app_bg.default.__wbindgen_cb_drop;
exports.__wbindgen_cb_drop = __wbindgen_cb_drop;
var __wbindgen_number_get = _yew_app_bg.default.__wbindgen_number_get;
exports.__wbindgen_number_get = __wbindgen_number_get;
var __wbindgen_string_get = _yew_app_bg.default.__wbindgen_string_get;
exports.__wbindgen_string_get = __wbindgen_string_get;
var __wbg_fetch_386f87a3ebf5003c = _yew_app_bg.default.__wbg_fetch_386f87a3ebf5003c;
exports.__wbg_fetch_386f87a3ebf5003c = __wbg_fetch_386f87a3ebf5003c;
var __wbg_dummyloader_1b85b5b8595db7a9 = _yew_app_bg.default.__wbg_dummyloader_1b85b5b8595db7a9;
exports.__wbg_dummyloader_1b85b5b8595db7a9 = __wbg_dummyloader_1b85b5b8595db7a9;
var __wbg_index_ab024aace404298a = _yew_app_bg.default.__wbg_index_ab024aace404298a;
exports.__wbg_index_ab024aace404298a = __wbg_index_ab024aace404298a;
var __wbg_setbadinput_ff732764da58c8ad = _yew_app_bg.default.__wbg_setbadinput_ff732764da58c8ad;
exports.__wbg_setbadinput_ff732764da58c8ad = __wbg_setbadinput_ff732764da58c8ad;
var __wbg_setcustomerror_9e846cdcd76edacb = _yew_app_bg.default.__wbg_setcustomerror_9e846cdcd76edacb;
exports.__wbg_setcustomerror_9e846cdcd76edacb = __wbg_setcustomerror_9e846cdcd76edacb;
var __wbg_setpatternmismatch_01a269a30f4caf79 = _yew_app_bg.default.__wbg_setpatternmismatch_01a269a30f4caf79;
exports.__wbg_setpatternmismatch_01a269a30f4caf79 = __wbg_setpatternmismatch_01a269a30f4caf79;
var __wbg_setrangeoverflow_c9c38dc044253650 = _yew_app_bg.default.__wbg_setrangeoverflow_c9c38dc044253650;
exports.__wbg_setrangeoverflow_c9c38dc044253650 = __wbg_setrangeoverflow_c9c38dc044253650;
var __wbg_setrangeunderflow_083530a3d76c9240 = _yew_app_bg.default.__wbg_setrangeunderflow_083530a3d76c9240;
exports.__wbg_setrangeunderflow_083530a3d76c9240 = __wbg_setrangeunderflow_083530a3d76c9240;
var __wbg_settoolong_bf4cbf4e06af1e8a = _yew_app_bg.default.__wbg_settoolong_bf4cbf4e06af1e8a;
exports.__wbg_settoolong_bf4cbf4e06af1e8a = __wbg_settoolong_bf4cbf4e06af1e8a;
var __wbg_settooshort_fcb11543f1855835 = _yew_app_bg.default.__wbg_settooshort_fcb11543f1855835;
exports.__wbg_settooshort_fcb11543f1855835 = __wbg_settooshort_fcb11543f1855835;
var __wbg_settypemismatch_849c1959c663ec3b = _yew_app_bg.default.__wbg_settypemismatch_849c1959c663ec3b;
exports.__wbg_settypemismatch_849c1959c663ec3b = __wbg_settypemismatch_849c1959c663ec3b;
var __wbg_setvalid_93fc2cb0fc080ccf = _yew_app_bg.default.__wbg_setvalid_93fc2cb0fc080ccf;
exports.__wbg_setvalid_93fc2cb0fc080ccf = __wbg_setvalid_93fc2cb0fc080ccf;
var __wbg_setvaluemissing_3424ee62621656a1 = _yew_app_bg.default.__wbg_setvaluemissing_3424ee62621656a1;
exports.__wbg_setvaluemissing_3424ee62621656a1 = __wbg_setvaluemissing_3424ee62621656a1;
var __wbg_dummyloader_efe09c3b1e8f68d6 = _yew_app_bg.default.__wbg_dummyloader_efe09c3b1e8f68d6;
exports.__wbg_dummyloader_efe09c3b1e8f68d6 = __wbg_dummyloader_efe09c3b1e8f68d6;
var __wbg_dummyloader_51f96d6d6c47545a = _yew_app_bg.default.__wbg_dummyloader_51f96d6d6c47545a;
exports.__wbg_dummyloader_51f96d6d6c47545a = __wbg_dummyloader_51f96d6d6c47545a;
var __wbg_dummyloader_89a252453c8b5195 = _yew_app_bg.default.__wbg_dummyloader_89a252453c8b5195;
exports.__wbg_dummyloader_89a252453c8b5195 = __wbg_dummyloader_89a252453c8b5195;
var __wbg_show_d9a754802a4c4517 = _yew_app_bg.default.__wbg_show_d9a754802a4c4517;
exports.__wbg_show_d9a754802a4c4517 = __wbg_show_d9a754802a4c4517;
var __wbg_action_92036701f377866a = _yew_app_bg.default.__wbg_action_92036701f377866a;
exports.__wbg_action_92036701f377866a = __wbg_action_92036701f377866a;
var __wbg_index_3f1ab014d1a02142 = _yew_app_bg.default.__wbg_index_3f1ab014d1a02142;
exports.__wbg_index_3f1ab014d1a02142 = __wbg_index_3f1ab014d1a02142;
var __wbg_dummyloader_1a4492c6bfea70d9 = _yew_app_bg.default.__wbg_dummyloader_1a4492c6bfea70d9;
exports.__wbg_dummyloader_1a4492c6bfea70d9 = __wbg_dummyloader_1a4492c6bfea70d9;
var __wbg_setvaliditytransform_988c4024066dcb7e = _yew_app_bg.default.__wbg_setvaliditytransform_988c4024066dcb7e;
exports.__wbg_setvaliditytransform_988c4024066dcb7e = __wbg_setvaliditytransform_988c4024066dcb7e;
var __wbindgen_is_undefined = _yew_app_bg.default.__wbindgen_is_undefined;
exports.__wbindgen_is_undefined = __wbindgen_is_undefined;
var __wbg_dummyloader_3d3e53cf3007377a = _yew_app_bg.default.__wbg_dummyloader_3d3e53cf3007377a;
exports.__wbg_dummyloader_3d3e53cf3007377a = __wbg_dummyloader_3d3e53cf3007377a;
var __wbg_dummyloader_264a0f02d7399c3a = _yew_app_bg.default.__wbg_dummyloader_264a0f02d7399c3a;
exports.__wbg_dummyloader_264a0f02d7399c3a = __wbg_dummyloader_264a0f02d7399c3a;
var __wbg_index_30bbf9019e84d0f9 = _yew_app_bg.default.__wbg_index_30bbf9019e84d0f9;
exports.__wbg_index_30bbf9019e84d0f9 = __wbg_index_30bbf9019e84d0f9;
var __wbg_diff_24379af6784d4792 = _yew_app_bg.default.__wbg_diff_24379af6784d4792;
exports.__wbg_diff_24379af6784d4792 = __wbg_diff_24379af6784d4792;
var __wbg_added_a7892c6169161d7c = _yew_app_bg.default.__wbg_added_a7892c6169161d7c;
exports.__wbg_added_a7892c6169161d7c = __wbg_added_a7892c6169161d7c;
var __wbg_removed_ec78ac7c35a1ad73 = _yew_app_bg.default.__wbg_removed_ec78ac7c35a1ad73;
exports.__wbg_removed_ec78ac7c35a1ad73 = __wbg_removed_ec78ac7c35a1ad73;
var __wbg_selected_55ed9ed5a939e1c1 = _yew_app_bg.default.__wbg_selected_55ed9ed5a939e1c1;
exports.__wbg_selected_55ed9ed5a939e1c1 = __wbg_selected_55ed9ed5a939e1c1;
var __wbg_source_4018ee1baae2aca9 = _yew_app_bg.default.__wbg_source_4018ee1baae2aca9;
exports.__wbg_source_4018ee1baae2aca9 = __wbg_source_4018ee1baae2aca9;
var __wbindgen_number_new = _yew_app_bg.default.__wbindgen_number_new;
exports.__wbindgen_number_new = __wbindgen_number_new;
var __wbindgen_is_object = _yew_app_bg.default.__wbindgen_is_object;
exports.__wbindgen_is_object = __wbindgen_is_object;
var __wbg_error_f851667af71bcfc6 = _yew_app_bg.default.__wbg_error_f851667af71bcfc6;
exports.__wbg_error_f851667af71bcfc6 = __wbg_error_f851667af71bcfc6;
var __wbg_new_abda76e883ba8a5f = _yew_app_bg.default.__wbg_new_abda76e883ba8a5f;
exports.__wbg_new_abda76e883ba8a5f = __wbg_new_abda76e883ba8a5f;
var __wbg_stack_658279fe44541cf6 = _yew_app_bg.default.__wbg_stack_658279fe44541cf6;
exports.__wbg_stack_658279fe44541cf6 = __wbg_stack_658279fe44541cf6;
var __wbindgen_object_drop_ref = _yew_app_bg.default.__wbindgen_object_drop_ref;
exports.__wbindgen_object_drop_ref = __wbindgen_object_drop_ref;
var __wbg_warn_0b90a269a514ae1d = _yew_app_bg.default.__wbg_warn_0b90a269a514ae1d;
exports.__wbg_warn_0b90a269a514ae1d = __wbg_warn_0b90a269a514ae1d;
var __wbg_instanceof_Window_acc97ff9f5d2c7b4 = _yew_app_bg.default.__wbg_instanceof_Window_acc97ff9f5d2c7b4;
exports.__wbg_instanceof_Window_acc97ff9f5d2c7b4 = __wbg_instanceof_Window_acc97ff9f5d2c7b4;
var __wbg_document_3ead31dbcad65886 = _yew_app_bg.default.__wbg_document_3ead31dbcad65886;
exports.__wbg_document_3ead31dbcad65886 = __wbg_document_3ead31dbcad65886;
var __wbg_location_8cc8ccf27e342c0a = _yew_app_bg.default.__wbg_location_8cc8ccf27e342c0a;
exports.__wbg_location_8cc8ccf27e342c0a = __wbg_location_8cc8ccf27e342c0a;
var __wbg_history_2a104346a1208269 = _yew_app_bg.default.__wbg_history_2a104346a1208269;
exports.__wbg_history_2a104346a1208269 = __wbg_history_2a104346a1208269;
var __wbg_localStorage_753b6d15a844c3dc = _yew_app_bg.default.__wbg_localStorage_753b6d15a844c3dc;
exports.__wbg_localStorage_753b6d15a844c3dc = __wbg_localStorage_753b6d15a844c3dc;
var __wbg_body_3cb4b4042b9a632b = _yew_app_bg.default.__wbg_body_3cb4b4042b9a632b;
exports.__wbg_body_3cb4b4042b9a632b = __wbg_body_3cb4b4042b9a632b;
var __wbg_createElement_976dbb84fe1661b5 = _yew_app_bg.default.__wbg_createElement_976dbb84fe1661b5;
exports.__wbg_createElement_976dbb84fe1661b5 = __wbg_createElement_976dbb84fe1661b5;
var __wbg_createElementNS_1561aca8ee3693c0 = _yew_app_bg.default.__wbg_createElementNS_1561aca8ee3693c0;
exports.__wbg_createElementNS_1561aca8ee3693c0 = __wbg_createElementNS_1561aca8ee3693c0;
var __wbg_createTextNode_300f845fab76642f = _yew_app_bg.default.__wbg_createTextNode_300f845fab76642f;
exports.__wbg_createTextNode_300f845fab76642f = __wbg_createTextNode_300f845fab76642f;
var __wbg_querySelector_3628dc2c3319e7e0 = _yew_app_bg.default.__wbg_querySelector_3628dc2c3319e7e0;
exports.__wbg_querySelector_3628dc2c3319e7e0 = __wbg_querySelector_3628dc2c3319e7e0;
var __wbg_pushState_38917fb88b4add30 = _yew_app_bg.default.__wbg_pushState_38917fb88b4add30;
exports.__wbg_pushState_38917fb88b4add30 = __wbg_pushState_38917fb88b4add30;
var __wbg_parentElement_0cffb3ceb0f107bd = _yew_app_bg.default.__wbg_parentElement_0cffb3ceb0f107bd;
exports.__wbg_parentElement_0cffb3ceb0f107bd = __wbg_parentElement_0cffb3ceb0f107bd;
var __wbg_lastChild_a2f5ed739809bb31 = _yew_app_bg.default.__wbg_lastChild_a2f5ed739809bb31;
exports.__wbg_lastChild_a2f5ed739809bb31 = __wbg_lastChild_a2f5ed739809bb31;
var __wbg_setnodeValue_4077cafeefd0725e = _yew_app_bg.default.__wbg_setnodeValue_4077cafeefd0725e;
exports.__wbg_setnodeValue_4077cafeefd0725e = __wbg_setnodeValue_4077cafeefd0725e;
var __wbg_appendChild_e513ef0e5098dfdd = _yew_app_bg.default.__wbg_appendChild_e513ef0e5098dfdd;
exports.__wbg_appendChild_e513ef0e5098dfdd = __wbg_appendChild_e513ef0e5098dfdd;
var __wbg_insertBefore_9f2d2defb9471006 = _yew_app_bg.default.__wbg_insertBefore_9f2d2defb9471006;
exports.__wbg_insertBefore_9f2d2defb9471006 = __wbg_insertBefore_9f2d2defb9471006;
var __wbg_removeChild_6751e9ca5d9aaf00 = _yew_app_bg.default.__wbg_removeChild_6751e9ca5d9aaf00;
exports.__wbg_removeChild_6751e9ca5d9aaf00 = __wbg_removeChild_6751e9ca5d9aaf00;
var __wbg_pathname_4441d4d8fc4aba51 = _yew_app_bg.default.__wbg_pathname_4441d4d8fc4aba51;
exports.__wbg_pathname_4441d4d8fc4aba51 = __wbg_pathname_4441d4d8fc4aba51;
var __wbg_getItem_845e475f85f593e4 = _yew_app_bg.default.__wbg_getItem_845e475f85f593e4;
exports.__wbg_getItem_845e475f85f593e4 = __wbg_getItem_845e475f85f593e4;
var __wbg_setItem_9c469d634d0c321c = _yew_app_bg.default.__wbg_setItem_9c469d634d0c321c;
exports.__wbg_setItem_9c469d634d0c321c = __wbg_setItem_9c469d634d0c321c;
var __wbg_new_2d0053ee81e4dd2a = _yew_app_bg.default.__wbg_new_2d0053ee81e4dd2a;
exports.__wbg_new_2d0053ee81e4dd2a = __wbg_new_2d0053ee81e4dd2a;
var __wbg_append_de37df908812970d = _yew_app_bg.default.__wbg_append_de37df908812970d;
exports.__wbg_append_de37df908812970d = __wbg_append_de37df908812970d;
var __wbg_instanceof_Response_eaa426220848a39e = _yew_app_bg.default.__wbg_instanceof_Response_eaa426220848a39e;
exports.__wbg_instanceof_Response_eaa426220848a39e = __wbg_instanceof_Response_eaa426220848a39e;
var __wbg_url_74285ddf2747cb3d = _yew_app_bg.default.__wbg_url_74285ddf2747cb3d;
exports.__wbg_url_74285ddf2747cb3d = __wbg_url_74285ddf2747cb3d;
var __wbg_status_c4ef3dd591e63435 = _yew_app_bg.default.__wbg_status_c4ef3dd591e63435;
exports.__wbg_status_c4ef3dd591e63435 = __wbg_status_c4ef3dd591e63435;
var __wbg_headers_fd64ad685cf22e5d = _yew_app_bg.default.__wbg_headers_fd64ad685cf22e5d;
exports.__wbg_headers_fd64ad685cf22e5d = __wbg_headers_fd64ad685cf22e5d;
var __wbg_arrayBuffer_4c27b6f00c530232 = _yew_app_bg.default.__wbg_arrayBuffer_4c27b6f00c530232;
exports.__wbg_arrayBuffer_4c27b6f00c530232 = __wbg_arrayBuffer_4c27b6f00c530232;
var __wbg_value_ccb32485ee1b3928 = _yew_app_bg.default.__wbg_value_ccb32485ee1b3928;
exports.__wbg_value_ccb32485ee1b3928 = __wbg_value_ccb32485ee1b3928;
var __wbg_setvalue_df64bc6794c098f2 = _yew_app_bg.default.__wbg_setvalue_df64bc6794c098f2;
exports.__wbg_setvalue_df64bc6794c098f2 = __wbg_setvalue_df64bc6794c098f2;
var __wbg_pathname_78a642e573bf8169 = _yew_app_bg.default.__wbg_pathname_78a642e573bf8169;
exports.__wbg_pathname_78a642e573bf8169 = __wbg_pathname_78a642e573bf8169;
var __wbg_new_7d95b89914e4d377 = _yew_app_bg.default.__wbg_new_7d95b89914e4d377;
exports.__wbg_new_7d95b89914e4d377 = __wbg_new_7d95b89914e4d377;
var __wbg_instanceof_Element_33bd126d58f2021b = _yew_app_bg.default.__wbg_instanceof_Element_33bd126d58f2021b;
exports.__wbg_instanceof_Element_33bd126d58f2021b = __wbg_instanceof_Element_33bd126d58f2021b;
var __wbg_namespaceURI_e19c7be2c60e5b5c = _yew_app_bg.default.__wbg_namespaceURI_e19c7be2c60e5b5c;
exports.__wbg_namespaceURI_e19c7be2c60e5b5c = __wbg_namespaceURI_e19c7be2c60e5b5c;
var __wbg_removeAttribute_beaed7727852af78 = _yew_app_bg.default.__wbg_removeAttribute_beaed7727852af78;
exports.__wbg_removeAttribute_beaed7727852af78 = __wbg_removeAttribute_beaed7727852af78;
var __wbg_setAttribute_d8436c14a59ab1af = _yew_app_bg.default.__wbg_setAttribute_d8436c14a59ab1af;
exports.__wbg_setAttribute_d8436c14a59ab1af = __wbg_setAttribute_d8436c14a59ab1af;
var __wbg_href_90ff36b5040e3b76 = _yew_app_bg.default.__wbg_href_90ff36b5040e3b76;
exports.__wbg_href_90ff36b5040e3b76 = __wbg_href_90ff36b5040e3b76;
var __wbg_setchecked_f1e1f3e62cdca8e7 = _yew_app_bg.default.__wbg_setchecked_f1e1f3e62cdca8e7;
exports.__wbg_setchecked_f1e1f3e62cdca8e7 = __wbg_setchecked_f1e1f3e62cdca8e7;
var __wbg_value_b2a620d34c663701 = _yew_app_bg.default.__wbg_value_b2a620d34c663701;
exports.__wbg_value_b2a620d34c663701 = __wbg_value_b2a620d34c663701;
var __wbg_setvalue_e5b519cca37d82a7 = _yew_app_bg.default.__wbg_setvalue_e5b519cca37d82a7;
exports.__wbg_setvalue_e5b519cca37d82a7 = __wbg_setvalue_e5b519cca37d82a7;
var __wbg_newwithstrandinit_05d7180788420c40 = _yew_app_bg.default.__wbg_newwithstrandinit_05d7180788420c40;
exports.__wbg_newwithstrandinit_05d7180788420c40 = __wbg_newwithstrandinit_05d7180788420c40;
var __wbg_debug_64711eb2fc6980ef = _yew_app_bg.default.__wbg_debug_64711eb2fc6980ef;
exports.__wbg_debug_64711eb2fc6980ef = __wbg_debug_64711eb2fc6980ef;
var __wbg_error_ef9a0be47931175f = _yew_app_bg.default.__wbg_error_ef9a0be47931175f;
exports.__wbg_error_ef9a0be47931175f = __wbg_error_ef9a0be47931175f;
var __wbg_error_00c5d571f754f629 = _yew_app_bg.default.__wbg_error_00c5d571f754f629;
exports.__wbg_error_00c5d571f754f629 = __wbg_error_00c5d571f754f629;
var __wbg_info_d60a960a4e955dc2 = _yew_app_bg.default.__wbg_info_d60a960a4e955dc2;
exports.__wbg_info_d60a960a4e955dc2 = __wbg_info_d60a960a4e955dc2;
var __wbg_log_de258f66ad9eb784 = _yew_app_bg.default.__wbg_log_de258f66ad9eb784;
exports.__wbg_log_de258f66ad9eb784 = __wbg_log_de258f66ad9eb784;
var __wbg_warn_be542501a57387a5 = _yew_app_bg.default.__wbg_warn_be542501a57387a5;
exports.__wbg_warn_be542501a57387a5 = __wbg_warn_be542501a57387a5;
var __wbg_target_bf704b7db7ad1387 = _yew_app_bg.default.__wbg_target_bf704b7db7ad1387;
exports.__wbg_target_bf704b7db7ad1387 = __wbg_target_bf704b7db7ad1387;
var __wbg_cancelBubble_8c0bdf21c08f1717 = _yew_app_bg.default.__wbg_cancelBubble_8c0bdf21c08f1717;
exports.__wbg_cancelBubble_8c0bdf21c08f1717 = __wbg_cancelBubble_8c0bdf21c08f1717;
var __wbg_preventDefault_3209279b490de583 = _yew_app_bg.default.__wbg_preventDefault_3209279b490de583;
exports.__wbg_preventDefault_3209279b490de583 = __wbg_preventDefault_3209279b490de583;
var __wbg_addEventListener_1fc744729ac6dc27 = _yew_app_bg.default.__wbg_addEventListener_1fc744729ac6dc27;
exports.__wbg_addEventListener_1fc744729ac6dc27 = __wbg_addEventListener_1fc744729ac6dc27;
var __wbg_removeEventListener_b10f1a66647f3aa0 = _yew_app_bg.default.__wbg_removeEventListener_b10f1a66647f3aa0;
exports.__wbg_removeEventListener_b10f1a66647f3aa0 = __wbg_removeEventListener_b10f1a66647f3aa0;
var __wbg_fetch_749a56934f95c96c = _yew_app_bg.default.__wbg_fetch_749a56934f95c96c;
exports.__wbg_fetch_749a56934f95c96c = __wbg_fetch_749a56934f95c96c;
var __wbg_instanceof_CustomEvent_30678b3aca903ea9 = _yew_app_bg.default.__wbg_instanceof_CustomEvent_30678b3aca903ea9;
exports.__wbg_instanceof_CustomEvent_30678b3aca903ea9 = __wbg_instanceof_CustomEvent_30678b3aca903ea9;
var __wbg_detail_90df16fd4821c69c = _yew_app_bg.default.__wbg_detail_90df16fd4821c69c;
exports.__wbg_detail_90df16fd4821c69c = __wbg_detail_90df16fd4821c69c;
var __wbg_newnoargs_b5b063fc6c2f0376 = _yew_app_bg.default.__wbg_newnoargs_b5b063fc6c2f0376;
exports.__wbg_newnoargs_b5b063fc6c2f0376 = __wbg_newnoargs_b5b063fc6c2f0376;
var __wbg_call_97ae9d8645dc388b = _yew_app_bg.default.__wbg_call_97ae9d8645dc388b;
exports.__wbg_call_97ae9d8645dc388b = __wbg_call_97ae9d8645dc388b;
var __wbg_next_aaef7c8aa5e212ac = _yew_app_bg.default.__wbg_next_aaef7c8aa5e212ac;
exports.__wbg_next_aaef7c8aa5e212ac = __wbg_next_aaef7c8aa5e212ac;
var __wbg_next_579e583d33566a86 = _yew_app_bg.default.__wbg_next_579e583d33566a86;
exports.__wbg_next_579e583d33566a86 = __wbg_next_579e583d33566a86;
var __wbg_done_1b73b0672e15f234 = _yew_app_bg.default.__wbg_done_1b73b0672e15f234;
exports.__wbg_done_1b73b0672e15f234 = __wbg_done_1b73b0672e15f234;
var __wbg_value_1ccc36bc03462d71 = _yew_app_bg.default.__wbg_value_1ccc36bc03462d71;
exports.__wbg_value_1ccc36bc03462d71 = __wbg_value_1ccc36bc03462d71;
var __wbg_valueOf_6b6effad03e5c546 = _yew_app_bg.default.__wbg_valueOf_6b6effad03e5c546;
exports.__wbg_valueOf_6b6effad03e5c546 = __wbg_valueOf_6b6effad03e5c546;
var __wbg_is_40a66842732708e7 = _yew_app_bg.default.__wbg_is_40a66842732708e7;
exports.__wbg_is_40a66842732708e7 = __wbg_is_40a66842732708e7;
var __wbg_new_0b9bfdd97583284e = _yew_app_bg.default.__wbg_new_0b9bfdd97583284e;
exports.__wbg_new_0b9bfdd97583284e = __wbg_new_0b9bfdd97583284e;
var __wbg_instanceof_Set_7548e9530f14bce0 = _yew_app_bg.default.__wbg_instanceof_Set_7548e9530f14bce0;
exports.__wbg_instanceof_Set_7548e9530f14bce0 = __wbg_instanceof_Set_7548e9530f14bce0;
var __wbg_values_a47b21e7728c4958 = _yew_app_bg.default.__wbg_values_a47b21e7728c4958;
exports.__wbg_values_a47b21e7728c4958 = __wbg_values_a47b21e7728c4958;
var __wbg_iterator_6f9d4f28845f426c = _yew_app_bg.default.__wbg_iterator_6f9d4f28845f426c;
exports.__wbg_iterator_6f9d4f28845f426c = __wbg_iterator_6f9d4f28845f426c;
var __wbg_resolve_99fe17964f31ffc0 = _yew_app_bg.default.__wbg_resolve_99fe17964f31ffc0;
exports.__wbg_resolve_99fe17964f31ffc0 = __wbg_resolve_99fe17964f31ffc0;
var __wbg_then_11f7a54d67b4bfad = _yew_app_bg.default.__wbg_then_11f7a54d67b4bfad;
exports.__wbg_then_11f7a54d67b4bfad = __wbg_then_11f7a54d67b4bfad;
var __wbg_then_cedad20fbbd9418a = _yew_app_bg.default.__wbg_then_cedad20fbbd9418a;
exports.__wbg_then_cedad20fbbd9418a = __wbg_then_cedad20fbbd9418a;
var __wbg_globalThis_7f206bda628d5286 = _yew_app_bg.default.__wbg_globalThis_7f206bda628d5286;
exports.__wbg_globalThis_7f206bda628d5286 = __wbg_globalThis_7f206bda628d5286;
var __wbg_self_6d479506f72c6a71 = _yew_app_bg.default.__wbg_self_6d479506f72c6a71;
exports.__wbg_self_6d479506f72c6a71 = __wbg_self_6d479506f72c6a71;
var __wbg_window_f2557cc78490aceb = _yew_app_bg.default.__wbg_window_f2557cc78490aceb;
exports.__wbg_window_f2557cc78490aceb = __wbg_window_f2557cc78490aceb;
var __wbg_global_ba75c50d1cf384f4 = _yew_app_bg.default.__wbg_global_ba75c50d1cf384f4;
exports.__wbg_global_ba75c50d1cf384f4 = __wbg_global_ba75c50d1cf384f4;
var __wbg_new_8c3f0052272a457a = _yew_app_bg.default.__wbg_new_8c3f0052272a457a;
exports.__wbg_new_8c3f0052272a457a = __wbg_new_8c3f0052272a457a;
var __wbg_newwithbyteoffsetandlength_d9aa266703cb98be = _yew_app_bg.default.__wbg_newwithbyteoffsetandlength_d9aa266703cb98be;
exports.__wbg_newwithbyteoffsetandlength_d9aa266703cb98be = __wbg_newwithbyteoffsetandlength_d9aa266703cb98be;
var __wbg_length_9e1ae1900cb0fbd5 = _yew_app_bg.default.__wbg_length_9e1ae1900cb0fbd5;
exports.__wbg_length_9e1ae1900cb0fbd5 = __wbg_length_9e1ae1900cb0fbd5;
var __wbg_set_83db9690f9353e79 = _yew_app_bg.default.__wbg_set_83db9690f9353e79;
exports.__wbg_set_83db9690f9353e79 = __wbg_set_83db9690f9353e79;
var __wbindgen_is_function = _yew_app_bg.default.__wbindgen_is_function;
exports.__wbindgen_is_function = __wbindgen_is_function;
var __wbg_stringify_d6471d300ded9b68 = _yew_app_bg.default.__wbg_stringify_d6471d300ded9b68;
exports.__wbg_stringify_d6471d300ded9b68 = __wbg_stringify_d6471d300ded9b68;
var __wbg_buffer_3f3d764d4747d564 = _yew_app_bg.default.__wbg_buffer_3f3d764d4747d564;
exports.__wbg_buffer_3f3d764d4747d564 = __wbg_buffer_3f3d764d4747d564;
var __wbg_get_765201544a2b6869 = _yew_app_bg.default.__wbg_get_765201544a2b6869;
exports.__wbg_get_765201544a2b6869 = __wbg_get_765201544a2b6869;
var __wbg_has_8359f114ce042f5a = _yew_app_bg.default.__wbg_has_8359f114ce042f5a;
exports.__wbg_has_8359f114ce042f5a = __wbg_has_8359f114ce042f5a;
var __wbg_set_bf3f89b92d5a34bf = _yew_app_bg.default.__wbg_set_bf3f89b92d5a34bf;
exports.__wbg_set_bf3f89b92d5a34bf = __wbg_set_bf3f89b92d5a34bf;
var __wbindgen_debug_string = _yew_app_bg.default.__wbindgen_debug_string;
exports.__wbindgen_debug_string = __wbindgen_debug_string;
var __wbindgen_throw = _yew_app_bg.default.__wbindgen_throw;
exports.__wbindgen_throw = __wbindgen_throw;
var __wbindgen_memory = _yew_app_bg.default.__wbindgen_memory;
exports.__wbindgen_memory = __wbindgen_memory;
var __wbindgen_closure_wrapper10158 = _yew_app_bg.default.__wbindgen_closure_wrapper10158;
exports.__wbindgen_closure_wrapper10158 = __wbindgen_closure_wrapper10158;
var __wbindgen_closure_wrapper14545 = _yew_app_bg.default.__wbindgen_closure_wrapper14545;
exports.__wbindgen_closure_wrapper14545 = __wbindgen_closure_wrapper14545;
var __wbindgen_closure_wrapper15257 = _yew_app_bg.default.__wbindgen_closure_wrapper15257;
exports.__wbindgen_closure_wrapper15257 = __wbindgen_closure_wrapper15257;
var __wbindgen_closure_wrapper15540 = _yew_app_bg.default.__wbindgen_closure_wrapper15540;
exports.__wbindgen_closure_wrapper15540 = __wbindgen_closure_wrapper15540;
},{"./pkg/yew_app_bg.wasm":"../pkg/yew_app_bg.wasm"}],"index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Cargo_toml_1 = require("../Cargo.toml");

Cargo_toml_1.run();
},{"../Cargo.toml":"../Cargo.toml"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "43813" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../pkg/snippets/material-yew-ff4853da911fc4ad/build/core.js":[function(require,module,exports) {
var define;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$ = void 0;
exports.A = mt;
exports.C = exports.B = void 0;
exports.D = ht;
exports.E = ye;
exports.H = exports.G = exports.F = void 0;
exports.I = We;
exports.N = exports.M = exports.L = exports.K = exports.J = void 0;
exports.O = Xe;
exports.U = exports.T = exports.S = exports.R = exports.Q = exports.P = void 0;
exports.V = Je;
exports.W = void 0;
exports.X = ni;
exports.Y = void 0;
exports.Z = ai;
exports._ = t;
exports.a = tt;
exports.a5 = exports.a4 = exports.a3 = exports.a2 = exports.a1 = exports.a0 = void 0;
exports.a6 = Be;
exports.d = exports.c = exports.b = exports.aj = exports.ai = exports.ah = exports.ag = exports.af = exports.ae = exports.ad = exports.ac = exports.ab = exports.aa = exports.a9 = exports.a8 = exports.a7 = void 0;
exports.e = rt;
exports.f = void 0;
exports.g = Jt;
exports.h = void 0;
exports.i = J;
exports.j = gt;
exports.m = exports.l = exports.k = void 0;
exports.n = ft;
exports.o = void 0;
exports.p = Q;
exports.q = Z;
exports.s = exports.r = void 0;
exports.t = re;
exports.z = exports.y = exports.x = exports.w = exports.v = exports.u = void 0;

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e29) { throw _e29; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e30) { didErr = true; err = _e30; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function t(t, e, i, r) {
  var n,
      o = arguments.length,
      a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
  if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, r);else for (var d = t.length - 1; d >= 0; d--) {
    (n = t[d]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
  }
  return o > 3 && a && Object.defineProperty(e, i, a), a;
}

var e = "undefined" != typeof window && null != window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback,
    i = function i(t, e) {
  var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  for (; e !== i;) {
    var _i2 = e.nextSibling;
    t.removeChild(e), e = _i2;
  }
},
    r = "{{lit-".concat(String(Math.random()).slice(2), "}}"),
    n = "<!--".concat(r, "-->"),
    o = new RegExp("".concat(r, "|").concat(n));

var a = /*#__PURE__*/_createClass(function a(t, e) {
  _classCallCheck(this, a);

  this.parts = [], this.element = e;

  var i = [],
      n = [],
      _a = document.createTreeWalker(e.content, 133, null, !1);

  var s = 0,
      p = -1,
      h = 0;
  var m = t.strings,
      u = t.values.length;

  for (; h < u;) {
    var _t2 = _a.nextNode();

    if (null !== _t2) {
      if (p++, 1 === _t2.nodeType) {
        if (_t2.hasAttributes()) {
          var _e2 = _t2.attributes,
              _i3 = _e2.length;
          var _r = 0;

          for (var _t3 = 0; _t3 < _i3; _t3++) {
            d(_e2[_t3].name, "$lit$") && _r++;
          }

          for (; _r-- > 0;) {
            var _e3 = m[h],
                _i4 = c.exec(_e3)[2],
                _r2 = _i4.toLowerCase() + "$lit$",
                _n = _t2.getAttribute(_r2);

            _t2.removeAttribute(_r2);

            var _a4 = _n.split(o);

            this.parts.push({
              type: "attribute",
              index: p,
              name: _i4,
              strings: _a4
            }), h += _a4.length - 1;
          }
        }

        "TEMPLATE" === _t2.tagName && (n.push(_t2), _a.currentNode = _t2.content);
      } else if (3 === _t2.nodeType) {
        var _e4 = _t2.data;

        if (_e4.indexOf(r) >= 0) {
          var _r3 = _t2.parentNode,
              _n2 = _e4.split(o),
              _a5 = _n2.length - 1;

          for (var _e5 = 0; _e5 < _a5; _e5++) {
            var _i5 = void 0,
                _o = _n2[_e5];

            if ("" === _o) _i5 = l();else {
              var _t4 = c.exec(_o);

              null !== _t4 && d(_t4[2], "$lit$") && (_o = _o.slice(0, _t4.index) + _t4[1] + _t4[2].slice(0, -"$lit$".length) + _t4[3]), _i5 = document.createTextNode(_o);
            }
            _r3.insertBefore(_i5, _t2), this.parts.push({
              type: "node",
              index: ++p
            });
          }

          "" === _n2[_a5] ? (_r3.insertBefore(l(), _t2), i.push(_t2)) : _t2.data = _n2[_a5], h += _a5;
        }
      } else if (8 === _t2.nodeType) if (_t2.data === r) {
        var _e6 = _t2.parentNode;
        null !== _t2.previousSibling && p !== s || (p++, _e6.insertBefore(l(), _t2)), s = p, this.parts.push({
          type: "node",
          index: p
        }), null === _t2.nextSibling ? _t2.data = "" : (i.push(_t2), p--), h++;
      } else {
        var _e7 = -1;

        for (; -1 !== (_e7 = _t2.data.indexOf(r, _e7 + 1));) {
          this.parts.push({
            type: "node",
            index: -1
          }), h++;
        }
      }
    } else _a.currentNode = n.pop();
  }

  for (var _i7 = 0, _i6 = i; _i7 < _i6.length; _i7++) {
    var _t5 = _i6[_i7];

    _t5.parentNode.removeChild(_t5);
  }
});

var d = function d(t, e) {
  var i = t.length - e.length;
  return i >= 0 && t.slice(i) === e;
},
    s = function s(t) {
  return -1 !== t.index;
},
    l = function l() {
  return document.createComment("");
},
    c = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

function p(t, e) {
  var i = t.element.content,
      r = t.parts,
      n = document.createTreeWalker(i, 133, null, !1);
  var o = m(r),
      a = r[o],
      d = -1,
      s = 0;
  var l = [];
  var c = null;

  for (; n.nextNode();) {
    d++;
    var _t6 = n.currentNode;

    for (_t6.previousSibling === c && (c = null), e.has(_t6) && (l.push(_t6), null === c && (c = _t6)), null !== c && s++; void 0 !== a && a.index === d;) {
      a.index = null !== c ? -1 : a.index - s, o = m(r, o), a = r[o];
    }
  }

  l.forEach(function (t) {
    return t.parentNode.removeChild(t);
  });
}

var h = function h(t) {
  var e = 11 === t.nodeType ? 0 : 1;
  var i = document.createTreeWalker(t, 133, null, !1);

  for (; i.nextNode();) {
    e++;
  }

  return e;
},
    m = function m(t) {
  var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

  for (var _i8 = e + 1; _i8 < t.length; _i8++) {
    var _e8 = t[_i8];
    if (s(_e8)) return _i8;
  }

  return -1;
};

var u = new WeakMap(),
    f = function f(t) {
  return function () {
    var i = t.apply(void 0, arguments);
    return u.set(i, !0), i;
  };
},
    g = function g(t) {
  return "function" == typeof t && u.has(t);
},
    _ = {},
    b = {};

exports.a9 = b;
exports.a0 = f;

var x = /*#__PURE__*/function () {
  function x(t, e, i) {
    _classCallCheck(this, x);

    this.__parts = [], this.template = t, this.processor = e, this.options = i;
  }

  _createClass(x, [{
    key: "update",
    value: function update(t) {
      var e = 0;

      var _iterator = _createForOfIteratorHelper(this.__parts),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _i9 = _step.value;
          void 0 !== _i9 && _i9.setValue(t[e]), e++;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(this.__parts),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _t7 = _step2.value;
          void 0 !== _t7 && _t7.commit();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "_clone",
    value: function _clone() {
      var t = e ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0),
          i = [],
          r = this.template.parts,
          n = document.createTreeWalker(t, 133, null, !1);
      var o,
          a = 0,
          d = 0,
          l = n.nextNode();

      for (; a < r.length;) {
        if (o = r[a], s(o)) {
          var _this$__parts;

          for (; d < o.index;) {
            d++, "TEMPLATE" === l.nodeName && (i.push(l), n.currentNode = l.content), null === (l = n.nextNode()) && (n.currentNode = i.pop(), l = n.nextNode());
          }

          if ("node" === o.type) {
            var _t8 = this.processor.handleTextExpression(this.options);

            _t8.insertAfterNode(l.previousSibling), this.__parts.push(_t8);
          } else (_this$__parts = this.__parts).push.apply(_this$__parts, _toConsumableArray(this.processor.handleAttributeExpressions(l, o.name, o.strings, this.options)));

          a++;
        } else this.__parts.push(void 0), a++;
      }

      return e && (document.adoptNode(t), customElements.upgrade(t)), t;
    }
  }]);

  return x;
}();

var v = window.trustedTypes && trustedTypes.createPolicy("lit-html", {
  createHTML: function createHTML(t) {
    return t;
  }
}),
    y = " ".concat(r, " ");

var E = /*#__PURE__*/function () {
  function E(t, e, i, r) {
    _classCallCheck(this, E);

    this.strings = t, this.values = e, this.type = i, this.processor = r;
  }

  _createClass(E, [{
    key: "getHTML",
    value: function getHTML() {
      var t = this.strings.length - 1;
      var e = "",
          i = !1;

      for (var _o2 = 0; _o2 < t; _o2++) {
        var _t9 = this.strings[_o2],
            _a6 = _t9.lastIndexOf("\x3c!--");

        i = (_a6 > -1 || i) && -1 === _t9.indexOf("--\x3e", _a6 + 1);

        var _d = c.exec(_t9);

        e += null === _d ? _t9 + (i ? y : n) : _t9.substr(0, _d.index) + _d[1] + _d[2] + "$lit$" + _d[3] + r;
      }

      return e += this.strings[t], e;
    }
  }, {
    key: "getTemplateElement",
    value: function getTemplateElement() {
      var t = document.createElement("template");
      var e = this.getHTML();
      return void 0 !== v && (e = v.createHTML(e)), t.innerHTML = e, t;
    }
  }]);

  return E;
}();

var w = function w(t) {
  return null === t || !("object" == _typeof(t) || "function" == typeof t);
},
    T = function T(t) {
  return Array.isArray(t) || !(!t || !t[Symbol.iterator]);
};

var I = /*#__PURE__*/function () {
  function I(t, e, i) {
    _classCallCheck(this, I);

    this.dirty = !0, this.element = t, this.name = e, this.strings = i, this.parts = [];

    for (var _t10 = 0; _t10 < i.length - 1; _t10++) {
      this.parts[_t10] = this._createPart();
    }
  }

  _createClass(I, [{
    key: "_createPart",
    value: function _createPart() {
      return new S(this);
    }
  }, {
    key: "_getValue",
    value: function _getValue() {
      var t = this.strings,
          e = t.length - 1,
          i = this.parts;

      if (1 === e && "" === t[0] && "" === t[1]) {
        var _t11 = i[0].value;
        if ("symbol" == _typeof(_t11)) return String(_t11);
        if ("string" == typeof _t11 || !T(_t11)) return _t11;
      }

      var r = "";

      for (var _n3 = 0; _n3 < e; _n3++) {
        r += t[_n3];
        var _e9 = i[_n3];

        if (void 0 !== _e9) {
          var _t12 = _e9.value;
          if (w(_t12) || !T(_t12)) r += "string" == typeof _t12 ? _t12 : String(_t12);else {
            var _iterator3 = _createForOfIteratorHelper(_t12),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _e10 = _step3.value;
                r += "string" == typeof _e10 ? _e10 : String(_e10);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }
      }

      return r += t[e], r;
    }
  }, {
    key: "commit",
    value: function commit() {
      this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
    }
  }]);

  return I;
}();

var S = /*#__PURE__*/function () {
  function S(t) {
    _classCallCheck(this, S);

    this.value = void 0, this.committer = t;
  }

  _createClass(S, [{
    key: "setValue",
    value: function setValue(t) {
      t === _ || w(t) && t === this.value || (this.value = t, g(t) || (this.committer.dirty = !0));
    }
  }, {
    key: "commit",
    value: function commit() {
      for (; g(this.value);) {
        var _t13 = this.value;
        this.value = _, _t13(this);
      }

      this.value !== _ && this.committer.commit();
    }
  }]);

  return S;
}();

var A = /*#__PURE__*/function () {
  function A(t) {
    _classCallCheck(this, A);

    this.value = void 0, this.__pendingValue = void 0, this.options = t;
  }

  _createClass(A, [{
    key: "appendInto",
    value: function appendInto(t) {
      this.startNode = t.appendChild(l()), this.endNode = t.appendChild(l());
    }
  }, {
    key: "insertAfterNode",
    value: function insertAfterNode(t) {
      this.startNode = t, this.endNode = t.nextSibling;
    }
  }, {
    key: "appendIntoPart",
    value: function appendIntoPart(t) {
      t.__insert(this.startNode = l()), t.__insert(this.endNode = l());
    }
  }, {
    key: "insertAfterPart",
    value: function insertAfterPart(t) {
      t.__insert(this.startNode = l()), this.endNode = t.endNode, t.endNode = this.startNode;
    }
  }, {
    key: "setValue",
    value: function setValue(t) {
      this.__pendingValue = t;
    }
  }, {
    key: "commit",
    value: function commit() {
      if (null === this.startNode.parentNode) return;

      for (; g(this.__pendingValue);) {
        var _t14 = this.__pendingValue;
        this.__pendingValue = _, _t14(this);
      }

      var t = this.__pendingValue;
      t !== _ && (w(t) ? t !== this.value && this.__commitText(t) : t instanceof E ? this.__commitTemplateResult(t) : t instanceof Node ? this.__commitNode(t) : T(t) ? this.__commitIterable(t) : t === b ? (this.value = b, this.clear()) : this.__commitText(t));
    }
  }, {
    key: "__insert",
    value: function __insert(t) {
      this.endNode.parentNode.insertBefore(t, this.endNode);
    }
  }, {
    key: "__commitNode",
    value: function __commitNode(t) {
      this.value !== t && (this.clear(), this.__insert(t), this.value = t);
    }
  }, {
    key: "__commitText",
    value: function __commitText(t) {
      var e = this.startNode.nextSibling,
          i = "string" == typeof (t = null == t ? "" : t) ? t : String(t);
      e === this.endNode.previousSibling && 3 === e.nodeType ? e.data = i : this.__commitNode(document.createTextNode(i)), this.value = t;
    }
  }, {
    key: "__commitTemplateResult",
    value: function __commitTemplateResult(t) {
      var e = this.options.templateFactory(t);
      if (this.value instanceof x && this.value.template === e) this.value.update(t.values);else {
        var _i10 = new x(e, t.processor, this.options),
            _r4 = _i10._clone();

        _i10.update(t.values), this.__commitNode(_r4), this.value = _i10;
      }
    }
  }, {
    key: "__commitIterable",
    value: function __commitIterable(t) {
      Array.isArray(this.value) || (this.value = [], this.clear());
      var e = this.value;
      var i,
          r = 0;

      var _iterator4 = _createForOfIteratorHelper(t),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _n4 = _step4.value;
          i = e[r], void 0 === i && (i = new A(this.options), e.push(i), 0 === r ? i.appendIntoPart(this) : i.insertAfterPart(e[r - 1])), i.setValue(_n4), i.commit(), r++;
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      r < e.length && (e.length = r, this.clear(i && i.endNode));
    }
  }, {
    key: "clear",
    value: function clear() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;
      i(this.startNode.parentNode, t.nextSibling, this.endNode);
    }
  }]);

  return A;
}();

var O = /*#__PURE__*/function () {
  function O(t, e, i) {
    _classCallCheck(this, O);

    if (this.value = void 0, this.__pendingValue = void 0, 2 !== i.length || "" !== i[0] || "" !== i[1]) throw new Error("Boolean attributes can only contain a single expression");
    this.element = t, this.name = e, this.strings = i;
  }

  _createClass(O, [{
    key: "setValue",
    value: function setValue(t) {
      this.__pendingValue = t;
    }
  }, {
    key: "commit",
    value: function commit() {
      for (; g(this.__pendingValue);) {
        var _t15 = this.__pendingValue;
        this.__pendingValue = _, _t15(this);
      }

      if (this.__pendingValue === _) return;
      var t = !!this.__pendingValue;
      this.value !== t && (t ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = t), this.__pendingValue = _;
    }
  }]);

  return O;
}();

var C = /*#__PURE__*/function (_I) {
  _inherits(C, _I);

  var _super = _createSuper(C);

  function C(t, e, i) {
    var _this;

    _classCallCheck(this, C);

    _this = _super.call(this, t, e, i), _this.single = 2 === i.length && "" === i[0] && "" === i[1];
    return _this;
  }

  _createClass(C, [{
    key: "_createPart",
    value: function _createPart() {
      return new N(this);
    }
  }, {
    key: "_getValue",
    value: function _getValue() {
      return this.single ? this.parts[0].value : _get(_getPrototypeOf(C.prototype), "_getValue", this).call(this);
    }
  }, {
    key: "commit",
    value: function commit() {
      this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
    }
  }]);

  return C;
}(I);

var N = /*#__PURE__*/function (_S) {
  _inherits(N, _S);

  var _super2 = _createSuper(N);

  function N() {
    _classCallCheck(this, N);

    return _super2.apply(this, arguments);
  }

  return _createClass(N);
}(S);

var R = !1;

(function () {
  try {
    var _t16 = {
      get capture() {
        return R = !0, !1;
      }

    };
    window.addEventListener("test", _t16, _t16), window.removeEventListener("test", _t16, _t16);
  } catch (t) {}
})();

var L = /*#__PURE__*/function () {
  function L(t, e, i) {
    var _this2 = this;

    _classCallCheck(this, L);

    this.value = void 0, this.__pendingValue = void 0, this.element = t, this.eventName = e, this.eventContext = i, this.__boundHandleEvent = function (t) {
      return _this2.handleEvent(t);
    };
  }

  _createClass(L, [{
    key: "setValue",
    value: function setValue(t) {
      this.__pendingValue = t;
    }
  }, {
    key: "commit",
    value: function commit() {
      for (; g(this.__pendingValue);) {
        var _t17 = this.__pendingValue;
        this.__pendingValue = _, _t17(this);
      }

      if (this.__pendingValue === _) return;
      var t = this.__pendingValue,
          e = this.value,
          i = null == t || null != e && (t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive),
          r = null != t && (null == e || i);
      i && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), r && (this.__options = k(t), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = t, this.__pendingValue = _;
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(t) {
      "function" == typeof this.value ? this.value.call(this.eventContext || this.element, t) : this.value.handleEvent(t);
    }
  }]);

  return L;
}();

var k = function k(t) {
  return t && (R ? {
    capture: t.capture,
    passive: t.passive,
    once: t.once
  } : t.capture);
};

function P(t) {
  var e = F.get(t.type);
  void 0 === e && (e = {
    stringsArray: new WeakMap(),
    keyString: new Map()
  }, F.set(t.type, e));
  var i = e.stringsArray.get(t.strings);
  if (void 0 !== i) return i;
  var n = t.strings.join(r);
  return i = e.keyString.get(n), void 0 === i && (i = new a(t, t.getTemplateElement()), e.keyString.set(n, i)), e.stringsArray.set(t.strings, i), i;
}

var F = new Map(),
    D = new WeakMap();
var M = new ( /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "handleAttributeExpressions",
    value: function handleAttributeExpressions(t, e, i, r) {
      var n = e[0];

      if ("." === n) {
        return new C(t, e.slice(1), i).parts;
      }

      if ("@" === n) return [new L(t, e.slice(1), r.eventContext)];
      if ("?" === n) return [new O(t, e.slice(1), i)];
      return new I(t, e, i).parts;
    }
  }, {
    key: "handleTextExpression",
    value: function handleTextExpression(t) {
      return new A(t);
    }
  }]);

  return _class;
}())();
"undefined" != typeof window && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.3.0");

var z = function z(t) {
  for (var _len = arguments.length, e = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    e[_key - 1] = arguments[_key];
  }

  return new E(t, e, "html", M);
},
    H = function H(t, e) {
  return "".concat(t, "--").concat(e);
};

exports.h = z;
var V = !0;
void 0 === window.ShadyCSS ? V = !1 : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), V = !1);

var B = function B(t) {
  return function (e) {
    var i = H(e.type, t);
    var n = F.get(i);
    void 0 === n && (n = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    }, F.set(i, n));
    var o = n.stringsArray.get(e.strings);
    if (void 0 !== o) return o;
    var d = e.strings.join(r);

    if (o = n.keyString.get(d), void 0 === o) {
      var _i11 = e.getTemplateElement();

      V && window.ShadyCSS.prepareTemplateDom(_i11, t), o = new a(e, _i11), n.keyString.set(d, o);
    }

    return n.stringsArray.set(e.strings, o), o;
  };
},
    U = ["html", "svg"],
    j = new Set(),
    G = function G(t, e, i) {
  j.add(t);
  var r = i ? i.element : document.createElement("template"),
      n = e.querySelectorAll("style"),
      o = n.length;
  if (0 === o) return void window.ShadyCSS.prepareTemplateStyles(r, t);
  var a = document.createElement("style");

  for (var _t18 = 0; _t18 < o; _t18++) {
    var _e11 = n[_t18];
    _e11.parentNode.removeChild(_e11), a.textContent += _e11.textContent;
  }

  (function (t) {
    U.forEach(function (e) {
      var i = F.get(H(e, t));
      void 0 !== i && i.keyString.forEach(function (t) {
        var e = t.element.content,
            i = new Set();
        Array.from(e.querySelectorAll("style")).forEach(function (t) {
          i.add(t);
        }), p(t, i);
      });
    });
  })(t);

  var d = r.content;
  i ? function (t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var r = t.element.content,
        n = t.parts;
    if (null == i) return void r.appendChild(e);
    var o = document.createTreeWalker(r, 133, null, !1);
    var a = m(n),
        d = 0,
        s = -1;

    for (; o.nextNode();) {
      for (s++, o.currentNode === i && (d = h(e), i.parentNode.insertBefore(e, i)); -1 !== a && n[a].index === s;) {
        if (d > 0) {
          for (; -1 !== a;) {
            n[a].index += d, a = m(n, a);
          }

          return;
        }

        a = m(n, a);
      }
    }
  }(i, a, d.firstChild) : d.insertBefore(a, d.firstChild), window.ShadyCSS.prepareTemplateStyles(r, t);
  var s = d.querySelector("style");
  if (window.ShadyCSS.nativeShadow && null !== s) e.insertBefore(s.cloneNode(!0), e.firstChild);else if (i) {
    d.insertBefore(a, d.firstChild);

    var _t19 = new Set();

    _t19.add(a), p(i, _t19);
  }
};

window.JSCompiler_renameProperty = function (t, e) {
  return t;
};

var $ = {
  toAttribute: function toAttribute(t, e) {
    switch (e) {
      case Boolean:
        return t ? "" : null;

      case Object:
      case Array:
        return null == t ? t : JSON.stringify(t);
    }

    return t;
  },
  fromAttribute: function fromAttribute(t, e) {
    switch (e) {
      case Boolean:
        return null !== t;

      case Number:
        return null === t ? null : Number(t);

      case Object:
      case Array:
        return JSON.parse(t);
    }

    return t;
  }
},
    W = function W(t, e) {
  return e !== t && (e == e || t == t);
},
    X = {
  attribute: !0,
  type: String,
  converter: $,
  reflect: !1,
  hasChanged: W
};

var q = /*#__PURE__*/function (_HTMLElement) {
  _inherits(q, _HTMLElement);

  var _super3 = _createSuper(q);

  function q() {
    var _this3;

    _classCallCheck(this, q);

    _this3 = _super3.call(this), _this3.initialize();
    return _this3;
  }

  _createClass(q, [{
    key: "initialize",
    value: function initialize() {
      var _this4 = this;

      this._updateState = 0, this._updatePromise = new Promise(function (t) {
        return _this4._enableUpdatingResolver = t;
      }), this._changedProperties = new Map(), this._saveInstanceProperties(), this.requestUpdateInternal();
    }
  }, {
    key: "_saveInstanceProperties",
    value: function _saveInstanceProperties() {
      var _this5 = this;

      this.constructor._classProperties.forEach(function (t, e) {
        if (_this5.hasOwnProperty(e)) {
          var _t20 = _this5[e];
          delete _this5[e], _this5._instanceProperties || (_this5._instanceProperties = new Map()), _this5._instanceProperties.set(e, _t20);
        }
      });
    }
  }, {
    key: "_applyInstanceProperties",
    value: function _applyInstanceProperties() {
      var _this6 = this;

      this._instanceProperties.forEach(function (t, e) {
        return _this6[e] = t;
      }), this._instanceProperties = void 0;
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.enableUpdating();
    }
  }, {
    key: "enableUpdating",
    value: function enableUpdating() {
      void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {}
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(t, e, i) {
      e !== i && this._attributeToProperty(t, i);
    }
  }, {
    key: "_propertyToAttribute",
    value: function _propertyToAttribute(t, e) {
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : X;

      var r = this.constructor,
          n = r._attributeNameForProperty(t, i);

      if (void 0 !== n) {
        var _t21 = r._propertyValueToAttribute(e, i);

        if (void 0 === _t21) return;
        this._updateState = 8 | this._updateState, null == _t21 ? this.removeAttribute(n) : this.setAttribute(n, _t21), this._updateState = -9 & this._updateState;
      }
    }
  }, {
    key: "_attributeToProperty",
    value: function _attributeToProperty(t, e) {
      if (8 & this._updateState) return;

      var i = this.constructor,
          r = i._attributeToPropertyMap.get(t);

      if (void 0 !== r) {
        var _t22 = i.getPropertyOptions(r);

        this._updateState = 16 | this._updateState, this[r] = i._propertyValueFromAttribute(e, _t22), this._updateState = -17 & this._updateState;
      }
    }
  }, {
    key: "requestUpdateInternal",
    value: function requestUpdateInternal(t, e, i) {
      var r = !0;

      if (void 0 !== t) {
        var _n5 = this.constructor;
        i = i || _n5.getPropertyOptions(t), _n5._valueHasChanged(this[t], e, i.hasChanged) ? (this._changedProperties.has(t) || this._changedProperties.set(t, e), !0 !== i.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map()), this._reflectingProperties.set(t, i))) : r = !1;
      }

      !this._hasRequestedUpdate && r && (this._updatePromise = this._enqueueUpdate());
    }
  }, {
    key: "requestUpdate",
    value: function requestUpdate(t, e) {
      return this.requestUpdateInternal(t, e), this.updateComplete;
    }
  }, {
    key: "_enqueueUpdate",
    value: function () {
      var _enqueueUpdate2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var t;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this._updateState = 4 | this._updateState;
                _context.prev = 1;
                _context.next = 4;
                return this._updatePromise;

              case 4:
                _context.next = 8;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](1);

              case 8:
                t = this.performUpdate();
                _context.t1 = null != t;

                if (!_context.t1) {
                  _context.next = 13;
                  break;
                }

                _context.next = 13;
                return t;

              case 13:
                return _context.abrupt("return", !this._hasRequestedUpdate);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 6]]);
      }));

      function _enqueueUpdate() {
        return _enqueueUpdate2.apply(this, arguments);
      }

      return _enqueueUpdate;
    }()
  }, {
    key: "_hasRequestedUpdate",
    get: function get() {
      return 4 & this._updateState;
    }
  }, {
    key: "hasUpdated",
    get: function get() {
      return 1 & this._updateState;
    }
  }, {
    key: "performUpdate",
    value: function performUpdate() {
      if (!this._hasRequestedUpdate) return;
      this._instanceProperties && this._applyInstanceProperties();
      var t = !1;
      var e = this._changedProperties;

      try {
        t = this.shouldUpdate(e), t ? this.update(e) : this._markUpdated();
      } catch (e) {
        throw t = !1, this._markUpdated(), e;
      }

      t && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(e)), this.updated(e));
    }
  }, {
    key: "_markUpdated",
    value: function _markUpdated() {
      this._changedProperties = new Map(), this._updateState = -5 & this._updateState;
    }
  }, {
    key: "updateComplete",
    get: function get() {
      return this._getUpdateComplete();
    }
  }, {
    key: "_getUpdateComplete",
    value: function _getUpdateComplete() {
      return this._updatePromise;
    }
  }, {
    key: "shouldUpdate",
    value: function shouldUpdate(t) {
      return !0;
    }
  }, {
    key: "update",
    value: function update(t) {
      var _this7 = this;

      void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach(function (t, e) {
        return _this7._propertyToAttribute(e, _this7[e], t);
      }), this._reflectingProperties = void 0), this._markUpdated();
    }
  }, {
    key: "updated",
    value: function updated(t) {}
  }, {
    key: "firstUpdated",
    value: function firstUpdated(t) {}
  }], [{
    key: "observedAttributes",
    get: function get() {
      var _this8 = this;

      this.finalize();
      var t = [];
      return this._classProperties.forEach(function (e, i) {
        var r = _this8._attributeNameForProperty(i, e);

        void 0 !== r && (_this8._attributeToPropertyMap.set(r, i), t.push(r));
      }), t;
    }
  }, {
    key: "_ensureClassProperties",
    value: function _ensureClassProperties() {
      var _this9 = this;

      if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
        this._classProperties = new Map();

        var _t23 = Object.getPrototypeOf(this)._classProperties;

        void 0 !== _t23 && _t23.forEach(function (t, e) {
          return _this9._classProperties.set(e, t);
        });
      }
    }
  }, {
    key: "createProperty",
    value: function createProperty(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : X;
      if (this._ensureClassProperties(), this._classProperties.set(t, e), e.noAccessor || this.prototype.hasOwnProperty(t)) return;
      var i = "symbol" == _typeof(t) ? Symbol() : "__" + t,
          r = this.getPropertyDescriptor(t, i, e);
      void 0 !== r && Object.defineProperty(this.prototype, t, r);
    }
  }, {
    key: "getPropertyDescriptor",
    value: function getPropertyDescriptor(t, e, i) {
      return {
        get: function get() {
          return this[e];
        },
        set: function set(r) {
          var n = this[t];
          this[e] = r, this.requestUpdateInternal(t, n, i);
        },
        configurable: !0,
        enumerable: !0
      };
    }
  }, {
    key: "getPropertyOptions",
    value: function getPropertyOptions(t) {
      return this._classProperties && this._classProperties.get(t) || X;
    }
  }, {
    key: "finalize",
    value: function finalize() {
      var t = Object.getPrototypeOf(this);

      if (t.hasOwnProperty("finalized") || t.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
        var _t24 = this.properties,
            _e12 = [].concat(_toConsumableArray(Object.getOwnPropertyNames(_t24)), _toConsumableArray("function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(_t24) : []));

        var _iterator5 = _createForOfIteratorHelper(_e12),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _i12 = _step5.value;
            this.createProperty(_i12, _t24[_i12]);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
    }
  }, {
    key: "_attributeNameForProperty",
    value: function _attributeNameForProperty(t, e) {
      var i = e.attribute;
      return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
  }, {
    key: "_valueHasChanged",
    value: function _valueHasChanged(t, e) {
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : W;
      return i(t, e);
    }
  }, {
    key: "_propertyValueFromAttribute",
    value: function _propertyValueFromAttribute(t, e) {
      var i = e.type,
          r = e.converter || $,
          n = "function" == typeof r ? r : r.fromAttribute;
      return n ? n(t, i) : t;
    }
  }, {
    key: "_propertyValueToAttribute",
    value: function _propertyValueToAttribute(t, e) {
      if (void 0 === e.reflect) return;
      var i = e.type,
          r = e.converter;
      return (r && r.toAttribute || $.toAttribute)(t, i);
    }
  }]);

  return q;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

q.finalized = !0;

var Y = function Y(t) {
  return function (e) {
    return "function" == typeof e ? function (t, e) {
      return window.customElements.define(t, e), e;
    }(t, e) : function (t, e) {
      var i = e.kind,
          r = e.elements;
      return {
        kind: i,
        elements: r,
        finisher: function finisher(e) {
          window.customElements.define(t, e);
        }
      };
    }(t, e);
  };
},
    K = function K(t, e) {
  return "method" === e.kind && e.descriptor && !("value" in e.descriptor) ? Object.assign(Object.assign({}, e), {
    finisher: function finisher(i) {
      i.createProperty(e.key, t);
    }
  }) : {
    kind: "field",
    key: Symbol(),
    placement: "own",
    descriptor: {},
    initializer: function initializer() {
      "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this));
    },
    finisher: function finisher(i) {
      i.createProperty(e.key, t);
    }
  };
};

exports.d = Y;

function Q(t) {
  return function (e, i) {
    return void 0 !== i ? function (t, e, i) {
      e.constructor.createProperty(i, t);
    }(t, e, i) : K(t, e);
  };
}

function J(t) {
  return Q({
    attribute: !1,
    hasChanged: null == t ? void 0 : t.hasChanged
  });
}

function Z(t, e) {
  return function (i, r) {
    var n = {
      get: function get() {
        return this.renderRoot.querySelector(t);
      },
      enumerable: !0,
      configurable: !0
    };

    if (e) {
      var _e13 = "symbol" == _typeof(r) ? Symbol() : "__" + r;

      n.get = function () {
        return void 0 === this[_e13] && (this[_e13] = this.renderRoot.querySelector(t)), this[_e13];
      };
    }

    return void 0 !== r ? et(n, i, r) : it(n, i);
  };
}

function tt(t) {
  return function (e, i) {
    var r = {
      get: function get() {
        var _this10 = this;

        return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return _this10.updateComplete;

                case 2:
                  return _context2.abrupt("return", _this10.renderRoot.querySelector(t));

                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }))();
      },
      enumerable: !0,
      configurable: !0
    };
    return void 0 !== i ? et(r, e, i) : it(r, e);
  };
}

var et = function et(t, e, i) {
  Object.defineProperty(e, i, t);
},
    it = function it(t, e) {
  return {
    kind: "method",
    placement: "prototype",
    key: e.key,
    descriptor: t
  };
};

function rt(t) {
  return function (e, i) {
    return void 0 !== i ? function (t, e, i) {
      Object.assign(e[i], t);
    }(t, e, i) : function (t, e) {
      return Object.assign(Object.assign({}, e), {
        finisher: function finisher(i) {
          Object.assign(i.prototype[e.key], t);
        }
      });
    }(t, e);
  };
}

var nt = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
    ot = Symbol();

var at = /*#__PURE__*/function () {
  function at(t, e) {
    _classCallCheck(this, at);

    if (e !== ot) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t;
  }

  _createClass(at, [{
    key: "styleSheet",
    get: function get() {
      return void 0 === this._styleSheet && (nt ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.cssText;
    }
  }]);

  return at;
}();

var dt = function dt(t) {
  for (var _len2 = arguments.length, e = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    e[_key2 - 1] = arguments[_key2];
  }

  var i = e.reduce(function (e, i, r) {
    return e + function (t) {
      if (t instanceof at) return t.cssText;
      if ("number" == typeof t) return t;
      throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(t, ". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."));
    }(i) + t[r + 1];
  }, t[0]);
  return new at(i, ot);
};

exports.b = dt;
(window.litElementVersions || (window.litElementVersions = [])).push("2.4.0");
var st = {};

var lt = /*#__PURE__*/function (_q) {
  _inherits(lt, _q);

  var _super4 = _createSuper(lt);

  function lt() {
    _classCallCheck(this, lt);

    return _super4.apply(this, arguments);
  }

  _createClass(lt, [{
    key: "initialize",
    value: function initialize() {
      _get(_getPrototypeOf(lt.prototype), "initialize", this).call(this), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles();
    }
  }, {
    key: "createRenderRoot",
    value: function createRenderRoot() {
      return this.attachShadow({
        mode: "open"
      });
    }
  }, {
    key: "adoptStyles",
    value: function adoptStyles() {
      var t = this.constructor._styles;
      0 !== t.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? nt ? this.renderRoot.adoptedStyleSheets = t.map(function (t) {
        return t instanceof CSSStyleSheet ? t : t.styleSheet;
      }) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(function (t) {
        return t.cssText;
      }), this.localName));
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(lt.prototype), "connectedCallback", this).call(this), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this);
    }
  }, {
    key: "update",
    value: function update(t) {
      var _this11 = this;

      var e = this.render();
      _get(_getPrototypeOf(lt.prototype), "update", this).call(this, t), e !== st && this.constructor.render(e, this.renderRoot, {
        scopeName: this.localName,
        eventContext: this
      }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach(function (t) {
        var e = document.createElement("style");
        e.textContent = t.cssText, _this11.renderRoot.appendChild(e);
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return st;
    }
  }], [{
    key: "getStyles",
    value: function getStyles() {
      return this.styles;
    }
  }, {
    key: "_getUniqueStyles",
    value: function _getUniqueStyles() {
      if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;
      var t = this.getStyles();

      if (Array.isArray(t)) {
        var _e14 = function _e14(t, i) {
          return t.reduceRight(function (t, i) {
            return Array.isArray(i) ? _e14(i, t) : (t.add(i), t);
          }, i);
        },
            _i13 = _e14(t, new Set()),
            _r5 = [];

        _i13.forEach(function (t) {
          return _r5.unshift(t);
        }), this._styles = _r5;
      } else this._styles = void 0 === t ? [] : [t];

      this._styles = this._styles.map(function (t) {
        if (t instanceof CSSStyleSheet && !nt) {
          var _e15 = Array.prototype.slice.call(t.cssRules).reduce(function (t, e) {
            return t + e.cssText;
          }, "");

          return new at(String(_e15), ot);
        }

        return t;
      });
    }
  }]);

  return lt;
}(q);

exports.L = lt;
lt.finalized = !0, lt.render = function (t, e, r) {
  if (!r || "object" != _typeof(r) || !r.scopeName) throw new Error("The `scopeName` option is required.");
  var n = r.scopeName,
      o = D.has(e),
      a = V && 11 === e.nodeType && !!e.host,
      d = a && !j.has(n),
      s = d ? document.createDocumentFragment() : e;

  if (function (t, e, r) {
    var n = D.get(e);
    void 0 === n && (i(e, e.firstChild), D.set(e, n = new A(Object.assign({
      templateFactory: P
    }, r))), n.appendInto(e)), n.setValue(t), n.commit();
  }(t, s, Object.assign({
    templateFactory: B(n)
  }, r)), d) {
    var _t25 = D.get(s);

    D.delete(s);

    var _r6 = _t25.value instanceof x ? _t25.value.template : void 0;

    G(n, s, _r6), i(e, e.firstChild), e.appendChild(s), D.set(e, _t25);
  }

  !o && a && window.ShadyCSS.styleElement(e.host);
};
var ct = dt(_templateObject || (_templateObject = _taggedTemplateLiteral([":host{font-family:var(--mdc-icon-font, \"Material Icons\");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:\"liga\"}"])));

var pt = /*#__PURE__*/function (_lt) {
  _inherits(pt, _lt);

  var _super5 = _createSuper(pt);

  function pt() {
    _classCallCheck(this, pt);

    return _super5.apply(this, arguments);
  }

  _createClass(pt, [{
    key: "render",
    value: function render() {
      return z(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<slot></slot>"])));
    }
  }]);

  return pt;
}(lt);

exports.aj = pt;

function ht(t, e) {
  if (t.closest) return t.closest(e);

  for (var i = t; i;) {
    if (mt(i, e)) return i;
    i = i.parentElement;
  }

  return null;
}

function mt(t, e) {
  return (t.matches || t.webkitMatchesSelector || t.msMatchesSelector).call(t, e);
}

pt.styles = ct, exports.aj = pt = t([Y("mwc-icon")], pt);

var ut = function ut(t) {
  return t.nodeType === Node.ELEMENT_NODE;
};

exports.H = ut;

function ft(t, e) {
  var _iterator6 = _createForOfIteratorHelper(t.assignedNodes({
    flatten: !0
  })),
      _step6;

  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var _i14 = _step6.value;

      if (ut(_i14)) {
        var _t26 = _i14;
        if (mt(_t26, e)) return _t26;
      }
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }

  return null;
}

function gt(t) {
  return {
    addClass: function addClass(e) {
      t.classList.add(e);
    },
    removeClass: function removeClass(e) {
      t.classList.remove(e);
    },
    hasClass: function hasClass(e) {
      return t.classList.contains(e);
    }
  };
}

var _t = !1;

var bt = function bt() {},
    xt = {
  get passive() {
    return _t = !0, !1;
  }

};

document.addEventListener("x", bt, xt), document.removeEventListener("x", bt);

var vt = _t,
    yt = function yt() {
  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.document;
  var e = t.activeElement;
  var i = [];
  if (!e) return i;

  for (; e && (i.push(e), e.shadowRoot);) {
    e = e.shadowRoot.activeElement;
  }

  return i;
},
    Et = function Et(t) {
  var e = yt();
  if (!e.length) return !1;
  var i = e[e.length - 1],
      r = new Event("check-if-focused", {
    bubbles: !0,
    composed: !0
  });
  var n = [];

  var o = function o(t) {
    n = t.composedPath();
  };

  return document.body.addEventListener("check-if-focused", o), i.dispatchEvent(r), document.body.removeEventListener("check-if-focused", o), -1 !== n.indexOf(t);
};

exports.J = Et;
exports.K = yt;

var wt = /*#__PURE__*/function (_lt2) {
  _inherits(wt, _lt2);

  var _super6 = _createSuper(wt);

  function wt() {
    _classCallCheck(this, wt);

    return _super6.apply(this, arguments);
  }

  _createClass(wt, [{
    key: "click",
    value: function click() {
      if (this.mdcRoot) return this.mdcRoot.focus(), void this.mdcRoot.click();

      _get(_getPrototypeOf(wt.prototype), "click", this).call(this);
    }
  }, {
    key: "createFoundation",
    value: function createFoundation() {
      void 0 !== this.mdcFoundation && this.mdcFoundation.destroy(), this.mdcFoundationClass && (this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter()), this.mdcFoundation.init());
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      this.createFoundation();
    }
  }]);

  return wt;
}(lt);

exports.B = wt;

var _Tt = function Tt(t, e) {
  return (_Tt = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (t, e) {
    t.__proto__ = e;
  } || function (t, e) {
    for (var i in e) {
      e.hasOwnProperty(i) && (t[i] = e[i]);
    }
  })(t, e);
};

var _It = function It() {
  return (_It = Object.assign || function (t) {
    for (var e, i = 1, r = arguments.length; i < r; i++) {
      for (var n in e = arguments[i]) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    }

    return t;
  }).apply(this, arguments);
},
    St = function () {
  function t(t) {
    void 0 === t && (t = {}), this.adapter = t;
  }

  return Object.defineProperty(t, "cssClasses", {
    get: function get() {
      return {};
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(t, "strings", {
    get: function get() {
      return {};
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(t, "numbers", {
    get: function get() {
      return {};
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(t, "defaultAdapter", {
    get: function get() {
      return {};
    },
    enumerable: !0,
    configurable: !0
  }), t.prototype.init = function () {}, t.prototype.destroy = function () {}, t;
}(),
    At = {
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
},
    Ot = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
},
    Ct = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: .6,
  PADDING: 10,
  TAP_DELAY_MS: 300
};

exports.m = St;

var Nt = ["touchstart", "pointerdown", "mousedown", "keydown"],
    Rt = ["touchend", "pointerup", "mouseup", "contextmenu"],
    Lt = [],
    kt = function (t) {
  function e(i) {
    var r = t.call(this, _It(_It({}, e.defaultAdapter), i)) || this;
    return r.activationAnimationHasEnded_ = !1, r.activationTimer_ = 0, r.fgDeactivationRemovalTimer_ = 0, r.fgScale_ = "0", r.frame_ = {
      width: 0,
      height: 0
    }, r.initialSize_ = 0, r.layoutFrame_ = 0, r.maxRadius_ = 0, r.unboundedCoords_ = {
      left: 0,
      top: 0
    }, r.activationState_ = r.defaultActivationState_(), r.activationTimerCallback_ = function () {
      r.activationAnimationHasEnded_ = !0, r.runDeactivationUXLogicIfReady_();
    }, r.activateHandler_ = function (t) {
      return r.activate_(t);
    }, r.deactivateHandler_ = function () {
      return r.deactivate_();
    }, r.focusHandler_ = function () {
      return r.handleFocus();
    }, r.blurHandler_ = function () {
      return r.handleBlur();
    }, r.resizeHandler_ = function () {
      return r.layout();
    }, r;
  }

  return function (t, e) {
    function i() {
      this.constructor = t;
    }

    _Tt(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
  }(e, t), Object.defineProperty(e, "cssClasses", {
    get: function get() {
      return At;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "strings", {
    get: function get() {
      return Ot;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "numbers", {
    get: function get() {
      return Ct;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "defaultAdapter", {
    get: function get() {
      return {
        addClass: function addClass() {},
        browserSupportsCssVars: function browserSupportsCssVars() {
          return !0;
        },
        computeBoundingRect: function computeBoundingRect() {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
          };
        },
        containsEventTarget: function containsEventTarget() {
          return !0;
        },
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() {},
        deregisterInteractionHandler: function deregisterInteractionHandler() {},
        deregisterResizeHandler: function deregisterResizeHandler() {},
        getWindowPageOffset: function getWindowPageOffset() {
          return {
            x: 0,
            y: 0
          };
        },
        isSurfaceActive: function isSurfaceActive() {
          return !0;
        },
        isSurfaceDisabled: function isSurfaceDisabled() {
          return !0;
        },
        isUnbounded: function isUnbounded() {
          return !0;
        },
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler() {},
        registerInteractionHandler: function registerInteractionHandler() {},
        registerResizeHandler: function registerResizeHandler() {},
        removeClass: function removeClass() {},
        updateCssVariable: function updateCssVariable() {}
      };
    },
    enumerable: !0,
    configurable: !0
  }), e.prototype.init = function () {
    var t = this,
        i = this.supportsPressRipple_();

    if (this.registerRootHandlers_(i), i) {
      var r = e.cssClasses,
          n = r.ROOT,
          o = r.UNBOUNDED;
      requestAnimationFrame(function () {
        t.adapter.addClass(n), t.adapter.isUnbounded() && (t.adapter.addClass(o), t.layoutInternal_());
      });
    }
  }, e.prototype.destroy = function () {
    var t = this;

    if (this.supportsPressRipple_()) {
      this.activationTimer_ && (clearTimeout(this.activationTimer_), this.activationTimer_ = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer_ && (clearTimeout(this.fgDeactivationRemovalTimer_), this.fgDeactivationRemovalTimer_ = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
      var i = e.cssClasses,
          r = i.ROOT,
          n = i.UNBOUNDED;
      requestAnimationFrame(function () {
        t.adapter.removeClass(r), t.adapter.removeClass(n), t.removeCssVars_();
      });
    }

    this.deregisterRootHandlers_(), this.deregisterDeactivationHandlers_();
  }, e.prototype.activate = function (t) {
    this.activate_(t);
  }, e.prototype.deactivate = function () {
    this.deactivate_();
  }, e.prototype.layout = function () {
    var t = this;
    this.layoutFrame_ && cancelAnimationFrame(this.layoutFrame_), this.layoutFrame_ = requestAnimationFrame(function () {
      t.layoutInternal_(), t.layoutFrame_ = 0;
    });
  }, e.prototype.setUnbounded = function (t) {
    var i = e.cssClasses.UNBOUNDED;
    t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
  }, e.prototype.handleFocus = function () {
    var t = this;
    requestAnimationFrame(function () {
      return t.adapter.addClass(e.cssClasses.BG_FOCUSED);
    });
  }, e.prototype.handleBlur = function () {
    var t = this;
    requestAnimationFrame(function () {
      return t.adapter.removeClass(e.cssClasses.BG_FOCUSED);
    });
  }, e.prototype.supportsPressRipple_ = function () {
    return this.adapter.browserSupportsCssVars();
  }, e.prototype.defaultActivationState_ = function () {
    return {
      activationEvent: void 0,
      hasDeactivationUXRun: !1,
      isActivated: !1,
      isProgrammatic: !1,
      wasActivatedByPointer: !1,
      wasElementMadeActive: !1
    };
  }, e.prototype.registerRootHandlers_ = function (t) {
    var e = this;
    t && (Nt.forEach(function (t) {
      e.adapter.registerInteractionHandler(t, e.activateHandler_);
    }), this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler_)), this.adapter.registerInteractionHandler("focus", this.focusHandler_), this.adapter.registerInteractionHandler("blur", this.blurHandler_);
  }, e.prototype.registerDeactivationHandlers_ = function (t) {
    var e = this;
    "keydown" === t.type ? this.adapter.registerInteractionHandler("keyup", this.deactivateHandler_) : Rt.forEach(function (t) {
      e.adapter.registerDocumentInteractionHandler(t, e.deactivateHandler_);
    });
  }, e.prototype.deregisterRootHandlers_ = function () {
    var t = this;
    Nt.forEach(function (e) {
      t.adapter.deregisterInteractionHandler(e, t.activateHandler_);
    }), this.adapter.deregisterInteractionHandler("focus", this.focusHandler_), this.adapter.deregisterInteractionHandler("blur", this.blurHandler_), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler_);
  }, e.prototype.deregisterDeactivationHandlers_ = function () {
    var t = this;
    this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler_), Rt.forEach(function (e) {
      t.adapter.deregisterDocumentInteractionHandler(e, t.deactivateHandler_);
    });
  }, e.prototype.removeCssVars_ = function () {
    var t = this,
        i = e.strings;
    Object.keys(i).forEach(function (e) {
      0 === e.indexOf("VAR_") && t.adapter.updateCssVariable(i[e], null);
    });
  }, e.prototype.activate_ = function (t) {
    var e = this;

    if (!this.adapter.isSurfaceDisabled()) {
      var i = this.activationState_;

      if (!i.isActivated) {
        var r = this.previousActivationEvent_;
        if (!(r && void 0 !== t && r.type !== t.type)) i.isActivated = !0, i.isProgrammatic = void 0 === t, i.activationEvent = t, i.wasActivatedByPointer = !i.isProgrammatic && void 0 !== t && ("mousedown" === t.type || "touchstart" === t.type || "pointerdown" === t.type), void 0 !== t && Lt.length > 0 && Lt.some(function (t) {
          return e.adapter.containsEventTarget(t);
        }) ? this.resetActivationState_() : (void 0 !== t && (Lt.push(t.target), this.registerDeactivationHandlers_(t)), i.wasElementMadeActive = this.checkElementMadeActive_(t), i.wasElementMadeActive && this.animateActivation_(), requestAnimationFrame(function () {
          Lt = [], i.wasElementMadeActive || void 0 === t || " " !== t.key && 32 !== t.keyCode || (i.wasElementMadeActive = e.checkElementMadeActive_(t), i.wasElementMadeActive && e.animateActivation_()), i.wasElementMadeActive || (e.activationState_ = e.defaultActivationState_());
        }));
      }
    }
  }, e.prototype.checkElementMadeActive_ = function (t) {
    return void 0 === t || "keydown" !== t.type || this.adapter.isSurfaceActive();
  }, e.prototype.animateActivation_ = function () {
    var t = this,
        i = e.strings,
        r = i.VAR_FG_TRANSLATE_START,
        n = i.VAR_FG_TRANSLATE_END,
        o = e.cssClasses,
        a = o.FG_DEACTIVATION,
        d = o.FG_ACTIVATION,
        s = e.numbers.DEACTIVATION_TIMEOUT_MS;
    this.layoutInternal_();
    var l = "",
        c = "";

    if (!this.adapter.isUnbounded()) {
      var p = this.getFgTranslationCoordinates_(),
          h = p.startPoint,
          m = p.endPoint;
      l = h.x + "px, " + h.y + "px", c = m.x + "px, " + m.y + "px";
    }

    this.adapter.updateCssVariable(r, l), this.adapter.updateCssVariable(n, c), clearTimeout(this.activationTimer_), clearTimeout(this.fgDeactivationRemovalTimer_), this.rmBoundedActivationClasses_(), this.adapter.removeClass(a), this.adapter.computeBoundingRect(), this.adapter.addClass(d), this.activationTimer_ = setTimeout(function () {
      return t.activationTimerCallback_();
    }, s);
  }, e.prototype.getFgTranslationCoordinates_ = function () {
    var t,
        e = this.activationState_,
        i = e.activationEvent;
    return {
      startPoint: t = {
        x: (t = e.wasActivatedByPointer ? function (t, e, i) {
          if (!t) return {
            x: 0,
            y: 0
          };
          var r,
              n,
              o = e.x,
              a = e.y,
              d = o + i.left,
              s = a + i.top;

          if ("touchstart" === t.type) {
            var l = t;
            r = l.changedTouches[0].pageX - d, n = l.changedTouches[0].pageY - s;
          } else {
            var c = t;
            r = c.pageX - d, n = c.pageY - s;
          }

          return {
            x: r,
            y: n
          };
        }(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : {
          x: this.frame_.width / 2,
          y: this.frame_.height / 2
        }).x - this.initialSize_ / 2,
        y: t.y - this.initialSize_ / 2
      },
      endPoint: {
        x: this.frame_.width / 2 - this.initialSize_ / 2,
        y: this.frame_.height / 2 - this.initialSize_ / 2
      }
    };
  }, e.prototype.runDeactivationUXLogicIfReady_ = function () {
    var t = this,
        i = e.cssClasses.FG_DEACTIVATION,
        r = this.activationState_,
        n = r.hasDeactivationUXRun,
        o = r.isActivated;
    (n || !o) && this.activationAnimationHasEnded_ && (this.rmBoundedActivationClasses_(), this.adapter.addClass(i), this.fgDeactivationRemovalTimer_ = setTimeout(function () {
      t.adapter.removeClass(i);
    }, Ct.FG_DEACTIVATION_MS));
  }, e.prototype.rmBoundedActivationClasses_ = function () {
    var t = e.cssClasses.FG_ACTIVATION;
    this.adapter.removeClass(t), this.activationAnimationHasEnded_ = !1, this.adapter.computeBoundingRect();
  }, e.prototype.resetActivationState_ = function () {
    var t = this;
    this.previousActivationEvent_ = this.activationState_.activationEvent, this.activationState_ = this.defaultActivationState_(), setTimeout(function () {
      return t.previousActivationEvent_ = void 0;
    }, e.numbers.TAP_DELAY_MS);
  }, e.prototype.deactivate_ = function () {
    var t = this,
        e = this.activationState_;

    if (e.isActivated) {
      var i = _It({}, e);

      e.isProgrammatic ? (requestAnimationFrame(function () {
        return t.animateDeactivation_(i);
      }), this.resetActivationState_()) : (this.deregisterDeactivationHandlers_(), requestAnimationFrame(function () {
        t.activationState_.hasDeactivationUXRun = !0, t.animateDeactivation_(i), t.resetActivationState_();
      }));
    }
  }, e.prototype.animateDeactivation_ = function (t) {
    var e = t.wasActivatedByPointer,
        i = t.wasElementMadeActive;
    (e || i) && this.runDeactivationUXLogicIfReady_();
  }, e.prototype.layoutInternal_ = function () {
    var t = this;
    this.frame_ = this.adapter.computeBoundingRect();
    var i = Math.max(this.frame_.height, this.frame_.width);
    this.maxRadius_ = this.adapter.isUnbounded() ? i : Math.sqrt(Math.pow(t.frame_.width, 2) + Math.pow(t.frame_.height, 2)) + e.numbers.PADDING;
    var r = Math.floor(i * e.numbers.INITIAL_ORIGIN_SCALE);
    this.adapter.isUnbounded() && r % 2 != 0 ? this.initialSize_ = r - 1 : this.initialSize_ = r, this.fgScale_ = "" + this.maxRadius_ / this.initialSize_, this.updateLayoutCssVars_();
  }, e.prototype.updateLayoutCssVars_ = function () {
    var t = e.strings,
        i = t.VAR_FG_SIZE,
        r = t.VAR_LEFT,
        n = t.VAR_TOP,
        o = t.VAR_FG_SCALE;
    this.adapter.updateCssVariable(i, this.initialSize_ + "px"), this.adapter.updateCssVariable(o, this.fgScale_), this.adapter.isUnbounded() && (this.unboundedCoords_ = {
      left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
      top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
    }, this.adapter.updateCssVariable(r, this.unboundedCoords_.left + "px"), this.adapter.updateCssVariable(n, this.unboundedCoords_.top + "px"));
  }, e;
}(St);

var Pt = /*#__PURE__*/function () {
  function Pt(t) {
    _classCallCheck(this, Pt);

    this.classes = new Set(), this.changed = !1, this.element = t;
    var e = (t.getAttribute("class") || "").split(/\s+/);

    var _iterator7 = _createForOfIteratorHelper(e),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var _t27 = _step7.value;
        this.classes.add(_t27);
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
  }

  _createClass(Pt, [{
    key: "add",
    value: function add(t) {
      this.classes.add(t), this.changed = !0;
    }
  }, {
    key: "remove",
    value: function remove(t) {
      this.classes.delete(t), this.changed = !0;
    }
  }, {
    key: "commit",
    value: function commit() {
      if (this.changed) {
        var _t28 = "";
        this.classes.forEach(function (e) {
          return _t28 += e + " ";
        }), this.element.setAttribute("class", _t28);
      }
    }
  }]);

  return Pt;
}();

var Ft = new WeakMap(),
    Dt = f(function (t) {
  return function (e) {
    if (!(e instanceof S) || e instanceof N || "class" !== e.committer.name || e.committer.parts.length > 1) throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
    var i = e.committer,
        r = i.element;
    var n = Ft.get(e);
    void 0 === n && (r.setAttribute("class", i.strings.join(" ")), Ft.set(e, n = new Set()));
    var o = r.classList || new Pt(r);
    n.forEach(function (e) {
      e in t || (o.remove(e), n.delete(e));
    });

    for (var _e16 in t) {
      var _i15 = t[_e16];
      _i15 != n.has(_e16) && (_i15 ? (o.add(_e16), n.add(_e16)) : (o.remove(_e16), n.delete(_e16)));
    }

    "function" == typeof o.commit && o.commit();
  };
}),
    Mt = new WeakMap(),
    zt = f(function (t) {
  return function (e) {
    if (!(e instanceof S) || e instanceof N || "style" !== e.committer.name || e.committer.parts.length > 1) throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
    var i = e.committer,
        r = i.element.style;
    var n = Mt.get(e);
    void 0 === n && (r.cssText = i.strings.join(" "), Mt.set(e, n = new Set())), n.forEach(function (e) {
      e in t || (n.delete(e), -1 === e.indexOf("-") ? r[e] = null : r.removeProperty(e));
    });

    for (var _e17 in t) {
      n.add(_e17), -1 === _e17.indexOf("-") ? r[_e17] = t[_e17] : r.setProperty(_e17, t[_e17]);
    }
  };
});
exports.r = zt;
exports.c = Dt;

var Ht = /*#__PURE__*/function (_wt) {
  _inherits(Ht, _wt);

  var _super7 = _createSuper(Ht);

  function Ht() {
    var _this12;

    _classCallCheck(this, Ht);

    _this12 = _super7.apply(this, arguments), _this12.primary = !1, _this12.accent = !1, _this12.unbounded = !1, _this12.disabled = !1, _this12.activated = !1, _this12.selected = !1, _this12.hovering = !1, _this12.bgFocused = !1, _this12.fgActivation = !1, _this12.fgDeactivation = !1, _this12.fgScale = "", _this12.fgSize = "", _this12.translateStart = "", _this12.translateEnd = "", _this12.leftPos = "", _this12.topPos = "", _this12.mdcFoundationClass = kt;
    return _this12;
  }

  _createClass(Ht, [{
    key: "isActive",
    get: function get() {
      return (this.parentElement || this).matches(":active");
    }
  }, {
    key: "createAdapter",
    value: function createAdapter() {
      var _this13 = this;

      return {
        browserSupportsCssVars: function browserSupportsCssVars() {
          return !0;
        },
        isUnbounded: function isUnbounded() {
          return _this13.unbounded;
        },
        isSurfaceActive: function isSurfaceActive() {
          return _this13.isActive;
        },
        isSurfaceDisabled: function isSurfaceDisabled() {
          return _this13.disabled;
        },
        addClass: function addClass(t) {
          switch (t) {
            case "mdc-ripple-upgraded--background-focused":
              _this13.bgFocused = !0;
              break;

            case "mdc-ripple-upgraded--foreground-activation":
              _this13.fgActivation = !0;
              break;

            case "mdc-ripple-upgraded--foreground-deactivation":
              _this13.fgDeactivation = !0;
          }
        },
        removeClass: function removeClass(t) {
          switch (t) {
            case "mdc-ripple-upgraded--background-focused":
              _this13.bgFocused = !1;
              break;

            case "mdc-ripple-upgraded--foreground-activation":
              _this13.fgActivation = !1;
              break;

            case "mdc-ripple-upgraded--foreground-deactivation":
              _this13.fgDeactivation = !1;
          }
        },
        containsEventTarget: function containsEventTarget() {
          return !0;
        },
        registerInteractionHandler: function registerInteractionHandler() {},
        deregisterInteractionHandler: function deregisterInteractionHandler() {},
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler() {},
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() {},
        registerResizeHandler: function registerResizeHandler() {},
        deregisterResizeHandler: function deregisterResizeHandler() {},
        updateCssVariable: function updateCssVariable(t, e) {
          switch (t) {
            case "--mdc-ripple-fg-scale":
              _this13.fgScale = e;
              break;

            case "--mdc-ripple-fg-size":
              _this13.fgSize = e;
              break;

            case "--mdc-ripple-fg-translate-end":
              _this13.translateEnd = e;
              break;

            case "--mdc-ripple-fg-translate-start":
              _this13.translateStart = e;
              break;

            case "--mdc-ripple-left":
              _this13.leftPos = e;
              break;

            case "--mdc-ripple-top":
              _this13.topPos = e;
          }
        },
        computeBoundingRect: function computeBoundingRect() {
          return (_this13.parentElement || _this13).getBoundingClientRect();
        },
        getWindowPageOffset: function getWindowPageOffset() {
          return {
            x: window.pageXOffset,
            y: window.pageYOffset
          };
        }
      };
    }
  }, {
    key: "startPress",
    value: function startPress(t) {
      var _this14 = this;

      this.waitForFoundation(function () {
        _this14.mdcFoundation.activate(t);
      });
    }
  }, {
    key: "endPress",
    value: function endPress() {
      var _this15 = this;

      this.waitForFoundation(function () {
        _this15.mdcFoundation.deactivate();
      });
    }
  }, {
    key: "startFocus",
    value: function startFocus() {
      var _this16 = this;

      this.waitForFoundation(function () {
        _this16.mdcFoundation.handleFocus();
      });
    }
  }, {
    key: "endFocus",
    value: function endFocus() {
      var _this17 = this;

      this.waitForFoundation(function () {
        _this17.mdcFoundation.handleBlur();
      });
    }
  }, {
    key: "startHover",
    value: function startHover() {
      this.hovering = !0;
    }
  }, {
    key: "endHover",
    value: function endHover() {
      this.hovering = !1;
    }
  }, {
    key: "waitForFoundation",
    value: function waitForFoundation(t) {
      this.mdcFoundation ? t() : this.updateComplete.then(t);
    }
  }, {
    key: "render",
    value: function render() {
      var t = this.activated && (this.primary || !this.accent),
          e = this.selected && (this.primary || !this.accent),
          i = {
        "mdc-ripple-surface--accent": this.accent,
        "mdc-ripple-surface--primary--activated": t,
        "mdc-ripple-surface--accent--activated": this.accent && this.activated,
        "mdc-ripple-surface--primary--selected": e,
        "mdc-ripple-surface--accent--selected": this.accent && this.selected,
        "mdc-ripple-surface--disabled": this.disabled,
        "mdc-ripple-surface--hover": this.hovering,
        "mdc-ripple-surface--primary": this.primary,
        "mdc-ripple-surface--selected": this.selected,
        "mdc-ripple-upgraded--background-focused": this.bgFocused,
        "mdc-ripple-upgraded--foreground-activation": this.fgActivation,
        "mdc-ripple-upgraded--foreground-deactivation": this.fgDeactivation,
        "mdc-ripple-upgraded--unbounded": this.unbounded
      };
      return z(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        <div class=\"mdc-ripple-surface mdc-ripple-upgraded ", "\"\n          style=\"", "\"></div>"])), Dt(i), zt({
        "--mdc-ripple-fg-scale": this.fgScale,
        "--mdc-ripple-fg-size": this.fgSize,
        "--mdc-ripple-fg-translate-end": this.translateEnd,
        "--mdc-ripple-fg-translate-start": this.translateStart,
        "--mdc-ripple-left": this.leftPos,
        "--mdc-ripple-top": this.topPos
      }));
    }
  }]);

  return Ht;
}(wt);

t([Z(".mdc-ripple-surface")], Ht.prototype, "mdcRoot", void 0), t([Q({
  type: Boolean
})], Ht.prototype, "primary", void 0), t([Q({
  type: Boolean
})], Ht.prototype, "accent", void 0), t([Q({
  type: Boolean
})], Ht.prototype, "unbounded", void 0), t([Q({
  type: Boolean
})], Ht.prototype, "disabled", void 0), t([Q({
  type: Boolean
})], Ht.prototype, "activated", void 0), t([Q({
  type: Boolean
})], Ht.prototype, "selected", void 0), t([J()], Ht.prototype, "hovering", void 0), t([J()], Ht.prototype, "bgFocused", void 0), t([J()], Ht.prototype, "fgActivation", void 0), t([J()], Ht.prototype, "fgDeactivation", void 0), t([J()], Ht.prototype, "fgScale", void 0), t([J()], Ht.prototype, "fgSize", void 0), t([J()], Ht.prototype, "translateStart", void 0), t([J()], Ht.prototype, "translateEnd", void 0), t([J()], Ht.prototype, "leftPos", void 0), t([J()], Ht.prototype, "topPos", void 0);
var Vt = dt(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([".mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}"])));

var Bt = /*#__PURE__*/function (_Ht) {
  _inherits(Bt, _Ht);

  var _super8 = _createSuper(Bt);

  function Bt() {
    _classCallCheck(this, Bt);

    return _super8.apply(this, arguments);
  }

  return _createClass(Bt);
}(Ht);

Bt.styles = Vt, Bt = t([Y("mwc-ripple")], Bt);

var Ut = /*#__PURE__*/_createClass(function Ut(t) {
  _classCallCheck(this, Ut);

  this.startPress = function (e) {
    t().then(function (t) {
      t && t.startPress(e);
    });
  }, this.endPress = function () {
    t().then(function (t) {
      t && t.endPress();
    });
  }, this.startFocus = function () {
    t().then(function (t) {
      t && t.startFocus();
    });
  }, this.endFocus = function () {
    t().then(function (t) {
      t && t.endFocus();
    });
  }, this.startHover = function () {
    t().then(function (t) {
      t && t.startHover();
    });
  }, this.endHover = function () {
    t().then(function (t) {
      t && t.endHover();
    });
  };
});

exports.R = Ut;
var jt = new WeakMap(),
    Gt = f(function (t) {
  return function (e) {
    var i = jt.get(e);

    if (void 0 === t && e instanceof S) {
      if (void 0 !== i || !jt.has(e)) {
        var _t29 = e.committer.name;
        e.committer.element.removeAttribute(_t29);
      }
    } else t !== i && e.setValue(t);

    jt.set(e, t);
  };
});
exports.f = Gt;

var $t = /*#__PURE__*/function (_lt3) {
  _inherits($t, _lt3);

  var _super9 = _createSuper($t);

  function $t() {
    var _this18;

    _classCallCheck(this, $t);

    _this18 = _super9.apply(this, arguments), _this18.indeterminate = !1, _this18.progress = 0, _this18.density = 0, _this18.closed = !1, _this18.ariaLabel = "";
    return _this18;
  }

  _createClass($t, [{
    key: "open",
    value: function open() {
      this.closed = !1;
    }
  }, {
    key: "close",
    value: function close() {
      this.closed = !0;
    }
  }, {
    key: "render",
    value: function render() {
      var t = {
        "mdc-circular-progress--closed": this.closed,
        "mdc-circular-progress--indeterminate": this.indeterminate
      },
          e = 48 + 4 * this.density,
          i = {
        width: e + "px",
        height: e + "px"
      };
      return z(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      <div\n        class=\"mdc-circular-progress ", "\"\n        style=\"", "\"\n        role=\"progressbar\"\n        aria-label=\"", "\"\n        aria-valuemin=\"0\"\n        aria-valuemax=\"1\"\n        aria-valuenow=\"", "\">\n        ", "\n        ", "\n      </div>"])), Dt(t), zt(i), this.ariaLabel, Gt(this.indeterminate ? void 0 : this.progress), this.renderDeterminateContainer(), this.renderIndeterminateContainer());
    }
  }, {
    key: "renderDeterminateContainer",
    value: function renderDeterminateContainer() {
      var t = 48 + 4 * this.density,
          e = t / 2,
          i = this.density >= -3 ? 18 + 11 * this.density / 6 : 12.5 + 5 * (this.density + 3) / 4,
          r = 6.2831852 * i,
          n = (1 - this.progress) * r,
          o = this.density >= -3 ? 4 + this.density * (1 / 3) : 3 + (this.density + 3) * (1 / 6);
      return z(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      <div class=\"mdc-circular-progress__determinate-container\">\n        <svg class=\"mdc-circular-progress__determinate-circle-graphic\"\n             viewBox=\"0 0 ", " ", "\">\n          <circle class=\"mdc-circular-progress__determinate-track\"\n                  cx=\"", "\" cy=\"", "\" r=\"", "\"\n                  stroke-width=\"", "\"></circle>\n          <circle class=\"mdc-circular-progress__determinate-circle\"\n                  cx=\"", "\" cy=\"", "\" r=\"", "\"\n                  stroke-dasharray=\"", "\"\n                  stroke-dashoffset=\"", "\"\n                  stroke-width=\"", "\"></circle>\n        </svg>\n      </div>"])), t, t, e, e, i, o, e, e, i, 6.2831852 * i, n, o);
    }
  }, {
    key: "renderIndeterminateContainer",
    value: function renderIndeterminateContainer() {
      return z(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      <div class=\"mdc-circular-progress__indeterminate-container\">\n        <div class=\"mdc-circular-progress__spinner-layer\">\n          ", "\n        </div>\n      </div>"])), this.renderIndeterminateSpinnerLayer());
    }
  }, {
    key: "renderIndeterminateSpinnerLayer",
    value: function renderIndeterminateSpinnerLayer() {
      var t = 48 + 4 * this.density,
          e = t / 2,
          i = this.density >= -3 ? 18 + 11 * this.density / 6 : 12.5 + 5 * (this.density + 3) / 4,
          r = 6.2831852 * i,
          n = .5 * r,
          o = this.density >= -3 ? 4 + this.density * (1 / 3) : 3 + (this.density + 3) * (1 / 6);
      return z(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        <div class=\"mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left\">\n          <svg class=\"mdc-circular-progress__indeterminate-circle-graphic\"\n               viewBox=\"0 0 ", " ", "\">\n            <circle cx=\"", "\" cy=\"", "\" r=\"", "\"\n                    stroke-dasharray=\"", "\"\n                    stroke-dashoffset=\"", "\"\n                    stroke-width=\"", "\"></circle>\n          </svg>\n        </div>\n        <div class=\"mdc-circular-progress__gap-patch\">\n          <svg class=\"mdc-circular-progress__indeterminate-circle-graphic\"\n               viewBox=\"0 0 ", " ", "\">\n            <circle cx=\"", "\" cy=\"", "\" r=\"", "\"\n                    stroke-dasharray=\"", "\"\n                    stroke-dashoffset=\"", "\"\n                    stroke-width=\"", "\"></circle>\n          </svg>\n        </div>\n        <div class=\"mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right\">\n          <svg class=\"mdc-circular-progress__indeterminate-circle-graphic\"\n               viewBox=\"0 0 ", " ", "\">\n            <circle cx=\"", "\" cy=\"", "\" r=\"", "\"\n                    stroke-dasharray=\"", "\"\n                    stroke-dashoffset=\"", "\"\n                    stroke-width=\"", "\"></circle>\n          </svg>\n        </div>"])), t, t, e, e, i, r, n, o, t, t, e, e, i, r, n, .8 * o, t, t, e, e, i, r, n, o);
    }
  }, {
    key: "update",
    value: function update(t) {
      _get(_getPrototypeOf($t.prototype), "update", this).call(this, t), t.has("progress") && (this.progress > 1 && (this.progress = 1), this.progress < 0 && (this.progress = 0));
    }
  }]);

  return $t;
}(lt);

exports.C = $t;
t([Q({
  type: Boolean,
  reflect: !0
})], $t.prototype, "indeterminate", void 0), t([Q({
  type: Number,
  reflect: !0
})], $t.prototype, "progress", void 0), t([Q({
  type: Number,
  reflect: !0
})], $t.prototype, "density", void 0), t([Q({
  type: Boolean,
  reflect: !0
})], $t.prototype, "closed", void 0), t([Q({
  type: String
})], $t.prototype, "ariaLabel", void 0);

var Wt = /*#__PURE__*/function (_wt2) {
  _inherits(Wt, _wt2);

  var _super10 = _createSuper(Wt);

  function Wt() {
    _classCallCheck(this, Wt);

    return _super10.apply(this, arguments);
  }

  _createClass(Wt, [{
    key: "createRenderRoot",
    value: function createRenderRoot() {
      return this.attachShadow({
        mode: "open",
        delegatesFocus: !0
      });
    }
  }, {
    key: "click",
    value: function click() {
      this.formElement && (this.formElement.focus(), this.formElement.click());
    }
  }, {
    key: "setAriaLabel",
    value: function setAriaLabel(t) {
      this.formElement && this.formElement.setAttribute("aria-label", t);
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      var _this19 = this;

      _get(_getPrototypeOf(Wt.prototype), "firstUpdated", this).call(this), this.mdcRoot.addEventListener("change", function (t) {
        _this19.dispatchEvent(new Event("change", t));
      });
    }
  }]);

  return Wt;
}(wt);

exports.F = Wt;

(function () {
  var t, e, i;
  var r = Symbol(),
      n = Symbol(),
      o = Symbol(),
      a = Symbol(),
      d = Symbol(),
      s = Symbol(),
      l = Symbol(),
      c = Symbol(),
      p = Symbol(),
      h = Symbol(),
      m = Symbol(),
      u = Symbol(),
      f = Symbol();

  var g = /*#__PURE__*/function (_ref) {
    function g() {
      _classCallCheck(this, g);

      this[t] = [], this[e] = [], this[i] = new Set();
    }

    _createClass(g, [{
      key: "destructor",
      value: function destructor() {
        this[p](this[o]);
        var t = this;
        t[r] = null, t[o] = null, t[n] = null;
      }
    }, {
      key: "top",
      get: function get() {
        var t = this[r];
        return t[t.length - 1] || null;
      }
    }, {
      key: "push",
      value: function push(t) {
        t && t !== this.top && (this.remove(t), this[s](t), this[r].push(t));
      }
    }, {
      key: "remove",
      value: function remove(t) {
        var e = this[r].indexOf(t);
        return -1 !== e && (this[r].splice(e, 1), e === this[r].length && this[s](this.top), !0);
      }
    }, {
      key: "pop",
      value: function pop() {
        var t = this.top;
        return t && this.remove(t), t;
      }
    }, {
      key: "has",
      value: function has(t) {
        return -1 !== this[r].indexOf(t);
      }
    }, {
      key: _ref,
      value: function value(t) {
        var e = this[n],
            i = this[o];
        if (!t) return this[p](i), e.clear(), void (this[o] = []);
        var r = this[h](t);
        if (r[r.length - 1].parentNode !== document.body) throw Error("Non-connected element cannot be a blocking element");
        this[o] = r;
        var a = this[m](t);
        if (!i.length) return void this[c](r, a, e);
        var d = i.length - 1,
            s = r.length - 1;

        for (; d > 0 && s > 0 && i[d] === r[s];) {
          d--, s--;
        }

        i[d] !== r[s] && this[l](i[d], r[s]), d > 0 && this[p](i.slice(0, d)), s > 0 && this[c](r.slice(0, s), a, null);
      }
    }, {
      key: l,
      value: function value(t, e) {
        var i = t[a];
        this[u](t) && !t.inert && (t.inert = !0, i.add(t)), i.has(e) && (e.inert = !1, i.delete(e)), e[d] = t[d], e[a] = i, t[d] = void 0, t[a] = void 0;
      }
    }, {
      key: p,
      value: function value(t) {
        var _iterator8 = _createForOfIteratorHelper(t),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _e18 = _step8.value;
            _e18[d].disconnect(), _e18[d] = void 0;
            var _t30 = _e18[a];

            var _iterator9 = _createForOfIteratorHelper(_t30),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var _e19 = _step9.value;
                _e19.inert = !1;
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }

            _e18[a] = void 0;
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      }
    }, {
      key: c,
      value: function value(t, e, i) {
        var _iterator10 = _createForOfIteratorHelper(t),
            _step10;

        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var _r7 = _step10.value;

            var _t31 = _r7.parentNode,
                _n6 = _t31.children,
                _o3 = new Set();

            for (var _t32 = 0; _t32 < _n6.length; _t32++) {
              var _a7 = _n6[_t32];
              _a7 === _r7 || !this[u](_a7) || e && e.has(_a7) || (i && _a7.inert ? i.add(_a7) : (_a7.inert = !0, _o3.add(_a7)));
            }

            _r7[a] = _o3;

            var _s = new MutationObserver(this[f].bind(this));

            _r7[d] = _s;
            var _l = _t31;
            var _c = _l;
            _c.__shady && _c.host && (_l = _c.host), _s.observe(_l, {
              childList: !0
            });
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
      }
    }, {
      key: f,
      value: function value(t) {
        var e = this[o],
            i = this[n];

        var _iterator11 = _createForOfIteratorHelper(t),
            _step11;

        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var _r8 = _step11.value;

            var _t33 = _r8.target.host || _r8.target,
                _n7 = _t33 === document.body ? e.length : e.indexOf(_t33),
                _o4 = e[_n7 - 1],
                _d2 = _o4[a];

            for (var _t34 = 0; _t34 < _r8.removedNodes.length; _t34++) {
              var _e20 = _r8.removedNodes[_t34];
              if (_e20 === _o4) return console.info("Detected removal of the top Blocking Element."), void this.pop();
              _d2.has(_e20) && (_e20.inert = !1, _d2.delete(_e20));
            }

            for (var _t35 = 0; _t35 < _r8.addedNodes.length; _t35++) {
              var _e21 = _r8.addedNodes[_t35];
              this[u](_e21) && (i && _e21.inert ? i.add(_e21) : (_e21.inert = !0, _d2.add(_e21)));
            }
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }
      }
    }, {
      key: u,
      value: function value(t) {
        return !1 === /^(style|template|script)$/.test(t.localName);
      }
    }, {
      key: h,
      value: function value(t) {
        var e = [];
        var i = t;

        for (; i && i !== document.body;) {
          if (i.nodeType === Node.ELEMENT_NODE && e.push(i), i.assignedSlot) {
            for (; i = i.assignedSlot;) {
              e.push(i);
            }

            i = e.pop();
          } else i = i.parentNode || i.host;
        }

        return e;
      }
    }, {
      key: m,
      value: function value(t) {
        var e = t.shadowRoot;
        if (!e) return null;
        var i = new Set();
        var r, n, o;
        var a = e.querySelectorAll("slot");
        if (a.length && a[0].assignedNodes) for (r = 0; r < a.length; r++) {
          for (o = a[r].assignedNodes({
            flatten: !0
          }), n = 0; n < o.length; n++) {
            o[n].nodeType === Node.ELEMENT_NODE && i.add(o[n]);
          }
        }
        return i;
      }
    }]);

    return g;
  }((t = r, e = o, i = n, s));

  document.$blockingElements = new g();
})();

var Xt = function () {
  function t(t, e) {
    for (var i = 0; i < e.length; i++) {
      var r = e[i];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
    }
  }

  return function (e, i, r) {
    return i && t(e.prototype, i), r && t(e, r), e;
  };
}();

function qt(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

!function () {
  if ("undefined" != typeof window) {
    var t = Array.prototype.slice,
        e = Element.prototype.matches || Element.prototype.msMatchesSelector,
        i = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "details", "summary", "iframe", "object", "embed", "[contenteditable]"].join(","),
        r = function () {
      function r(t, e) {
        qt(this, r), this._inertManager = e, this._rootElement = t, this._managedNodes = new Set(), this._rootElement.hasAttribute("aria-hidden") ? this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden") : this._savedAriaHidden = null, this._rootElement.setAttribute("aria-hidden", "true"), this._makeSubtreeUnfocusable(this._rootElement), this._observer = new MutationObserver(this._onMutation.bind(this)), this._observer.observe(this._rootElement, {
          attributes: !0,
          childList: !0,
          subtree: !0
        });
      }

      return Xt(r, [{
        key: "destructor",
        value: function value() {
          this._observer.disconnect(), this._rootElement && (null !== this._savedAriaHidden ? this._rootElement.setAttribute("aria-hidden", this._savedAriaHidden) : this._rootElement.removeAttribute("aria-hidden")), this._managedNodes.forEach(function (t) {
            this._unmanageNode(t.node);
          }, this), this._observer = null, this._rootElement = null, this._managedNodes = null, this._inertManager = null;
        }
      }, {
        key: "_makeSubtreeUnfocusable",
        value: function value(t) {
          var e = this;
          a(t, function (t) {
            return e._visitNode(t);
          });
          var i = document.activeElement;

          if (!document.body.contains(t)) {
            for (var r = t, n = void 0; r;) {
              if (r.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                n = r;
                break;
              }

              r = r.parentNode;
            }

            n && (i = n.activeElement);
          }

          t.contains(i) && (i.blur(), i === document.activeElement && document.body.focus());
        }
      }, {
        key: "_visitNode",
        value: function value(t) {
          if (t.nodeType === Node.ELEMENT_NODE) {
            var r = t;
            r !== this._rootElement && r.hasAttribute("inert") && this._adoptInertRoot(r), (e.call(r, i) || r.hasAttribute("tabindex")) && this._manageNode(r);
          }
        }
      }, {
        key: "_manageNode",
        value: function value(t) {
          var e = this._inertManager.register(t, this);

          this._managedNodes.add(e);
        }
      }, {
        key: "_unmanageNode",
        value: function value(t) {
          var e = this._inertManager.deregister(t, this);

          e && this._managedNodes.delete(e);
        }
      }, {
        key: "_unmanageSubtree",
        value: function value(t) {
          var e = this;
          a(t, function (t) {
            return e._unmanageNode(t);
          });
        }
      }, {
        key: "_adoptInertRoot",
        value: function value(t) {
          var e = this._inertManager.getInertRoot(t);

          e || (this._inertManager.setInert(t, !0), e = this._inertManager.getInertRoot(t)), e.managedNodes.forEach(function (t) {
            this._manageNode(t.node);
          }, this);
        }
      }, {
        key: "_onMutation",
        value: function value(e, i) {
          e.forEach(function (e) {
            var i = e.target;
            if ("childList" === e.type) t.call(e.addedNodes).forEach(function (t) {
              this._makeSubtreeUnfocusable(t);
            }, this), t.call(e.removedNodes).forEach(function (t) {
              this._unmanageSubtree(t);
            }, this);else if ("attributes" === e.type) if ("tabindex" === e.attributeName) this._manageNode(i);else if (i !== this._rootElement && "inert" === e.attributeName && i.hasAttribute("inert")) {
              this._adoptInertRoot(i);

              var r = this._inertManager.getInertRoot(i);

              this._managedNodes.forEach(function (t) {
                i.contains(t.node) && r._manageNode(t.node);
              });
            }
          }, this);
        }
      }, {
        key: "managedNodes",
        get: function get() {
          return new Set(this._managedNodes);
        }
      }, {
        key: "hasSavedAriaHidden",
        get: function get() {
          return null !== this._savedAriaHidden;
        }
      }, {
        key: "savedAriaHidden",
        set: function set(t) {
          this._savedAriaHidden = t;
        },
        get: function get() {
          return this._savedAriaHidden;
        }
      }]), r;
    }(),
        n = function () {
      function t(e, i) {
        qt(this, t), this._node = e, this._overrodeFocusMethod = !1, this._inertRoots = new Set([i]), this._savedTabIndex = null, this._destroyed = !1, this.ensureUntabbable();
      }

      return Xt(t, [{
        key: "destructor",
        value: function value() {
          if (this._throwIfDestroyed(), this._node && this._node.nodeType === Node.ELEMENT_NODE) {
            var t = this._node;
            null !== this._savedTabIndex ? t.setAttribute("tabindex", this._savedTabIndex) : t.removeAttribute("tabindex"), this._overrodeFocusMethod && delete t.focus;
          }

          this._node = null, this._inertRoots = null, this._destroyed = !0;
        }
      }, {
        key: "_throwIfDestroyed",
        value: function value() {
          if (this.destroyed) throw new Error("Trying to access destroyed InertNode");
        }
      }, {
        key: "ensureUntabbable",
        value: function value() {
          if (this.node.nodeType === Node.ELEMENT_NODE) {
            var t = this.node;

            if (e.call(t, i)) {
              if (-1 === t.tabIndex && this.hasSavedTabIndex) return;
              t.hasAttribute("tabindex") && (this._savedTabIndex = t.tabIndex), t.setAttribute("tabindex", "-1"), t.nodeType === Node.ELEMENT_NODE && (t.focus = function () {}, this._overrodeFocusMethod = !0);
            } else t.hasAttribute("tabindex") && (this._savedTabIndex = t.tabIndex, t.removeAttribute("tabindex"));
          }
        }
      }, {
        key: "addInertRoot",
        value: function value(t) {
          this._throwIfDestroyed(), this._inertRoots.add(t);
        }
      }, {
        key: "removeInertRoot",
        value: function value(t) {
          this._throwIfDestroyed(), this._inertRoots.delete(t), 0 === this._inertRoots.size && this.destructor();
        }
      }, {
        key: "destroyed",
        get: function get() {
          return this._destroyed;
        }
      }, {
        key: "hasSavedTabIndex",
        get: function get() {
          return null !== this._savedTabIndex;
        }
      }, {
        key: "node",
        get: function get() {
          return this._throwIfDestroyed(), this._node;
        }
      }, {
        key: "savedTabIndex",
        set: function set(t) {
          this._throwIfDestroyed(), this._savedTabIndex = t;
        },
        get: function get() {
          return this._throwIfDestroyed(), this._savedTabIndex;
        }
      }]), t;
    }(),
        o = new (function () {
      function i(t) {
        if (qt(this, i), !t) throw new Error("Missing required argument; InertManager needs to wrap a document.");
        this._document = t, this._managedNodes = new Map(), this._inertRoots = new Map(), this._observer = new MutationObserver(this._watchForInert.bind(this)), d(t.head || t.body || t.documentElement), "loading" === t.readyState ? t.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this)) : this._onDocumentLoaded();
      }

      return Xt(i, [{
        key: "setInert",
        value: function value(t, e) {
          if (e) {
            if (this._inertRoots.has(t)) return;
            var i = new r(t, this);
            if (t.setAttribute("inert", ""), this._inertRoots.set(t, i), !this._document.body.contains(t)) for (var n = t.parentNode; n;) {
              11 === n.nodeType && d(n), n = n.parentNode;
            }
          } else {
            if (!this._inertRoots.has(t)) return;
            this._inertRoots.get(t).destructor(), this._inertRoots.delete(t), t.removeAttribute("inert");
          }
        }
      }, {
        key: "getInertRoot",
        value: function value(t) {
          return this._inertRoots.get(t);
        }
      }, {
        key: "register",
        value: function value(t, e) {
          var i = this._managedNodes.get(t);

          return void 0 !== i ? i.addInertRoot(e) : i = new n(t, e), this._managedNodes.set(t, i), i;
        }
      }, {
        key: "deregister",
        value: function value(t, e) {
          var i = this._managedNodes.get(t);

          return i ? (i.removeInertRoot(e), i.destroyed && this._managedNodes.delete(t), i) : null;
        }
      }, {
        key: "_onDocumentLoaded",
        value: function value() {
          t.call(this._document.querySelectorAll("[inert]")).forEach(function (t) {
            this.setInert(t, !0);
          }, this), this._observer.observe(this._document.body || this._document.documentElement, {
            attributes: !0,
            subtree: !0,
            childList: !0
          });
        }
      }, {
        key: "_watchForInert",
        value: function value(i, r) {
          var n = this;
          i.forEach(function (i) {
            switch (i.type) {
              case "childList":
                t.call(i.addedNodes).forEach(function (i) {
                  if (i.nodeType === Node.ELEMENT_NODE) {
                    var r = t.call(i.querySelectorAll("[inert]"));
                    e.call(i, "[inert]") && r.unshift(i), r.forEach(function (t) {
                      this.setInert(t, !0);
                    }, n);
                  }
                }, n);
                break;

              case "attributes":
                if ("inert" !== i.attributeName) return;
                var r = i.target,
                    o = r.hasAttribute("inert");
                n.setInert(r, o);
            }
          }, this);
        }
      }]), i;
    }())(document);

    Element.prototype.hasOwnProperty("inert") || Object.defineProperty(Element.prototype, "inert", {
      enumerable: !0,
      get: function get() {
        return this.hasAttribute("inert");
      },
      set: function set(t) {
        o.setInert(this, t);
      }
    });
  }

  function a(t, e, i) {
    if (t.nodeType == Node.ELEMENT_NODE) {
      var r = t;
      e && e(r);
      var n = r.shadowRoot;
      if (n) return void a(n, e);

      if ("content" == r.localName) {
        for (var o = r, d = o.getDistributedNodes ? o.getDistributedNodes() : [], s = 0; s < d.length; s++) {
          a(d[s], e);
        }

        return;
      }

      if ("slot" == r.localName) {
        for (var l = r, c = l.assignedNodes ? l.assignedNodes({
          flatten: !0
        }) : [], p = 0; p < c.length; p++) {
          a(c[p], e);
        }

        return;
      }
    }

    for (var h = t.firstChild; null != h;) {
      a(h, e), h = h.nextSibling;
    }
  }

  function d(t) {
    if (!t.querySelector("style#inert-style, link#inert-style")) {
      var e = document.createElement("style");
      e.setAttribute("id", "inert-style"), e.textContent = "\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n", t.appendChild(e);
    }
  }
}();

var Yt = {
  ANIMATE: "mdc-drawer--animate",
  CLOSING: "mdc-drawer--closing",
  DISMISSIBLE: "mdc-drawer--dismissible",
  MODAL: "mdc-drawer--modal",
  OPEN: "mdc-drawer--open",
  OPENING: "mdc-drawer--opening",
  ROOT: "mdc-drawer"
},
    Kt = {
  APP_CONTENT_SELECTOR: ".mdc-drawer-app-content",
  CLOSE_EVENT: "MDCDrawer:closed",
  OPEN_EVENT: "MDCDrawer:opened",
  SCRIM_SELECTOR: ".mdc-drawer-scrim"
},
    _Qt = function Qt(t, e) {
  return (_Qt = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (t, e) {
    t.__proto__ = e;
  } || function (t, e) {
    for (var i in e) {
      e.hasOwnProperty(i) && (t[i] = e[i]);
    }
  })(t, e);
};

exports.s = Kt;

function Jt(t, e) {
  function i() {
    this.constructor = t;
  }

  _Qt(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}

var _Zt = function Zt() {
  return (_Zt = Object.assign || function (t) {
    for (var e, i = 1, r = arguments.length; i < r; i++) {
      for (var n in e = arguments[i]) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    }

    return t;
  }).apply(this, arguments);
},
    te = function (t) {
  function e(i) {
    var r = t.call(this, _Zt(_Zt({}, e.defaultAdapter), i)) || this;
    return r.animationFrame_ = 0, r.animationTimer_ = 0, r;
  }

  return Jt(e, t), Object.defineProperty(e, "strings", {
    get: function get() {
      return Kt;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "cssClasses", {
    get: function get() {
      return Yt;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "defaultAdapter", {
    get: function get() {
      return {
        addClass: function addClass() {},
        removeClass: function removeClass() {},
        hasClass: function hasClass() {
          return !1;
        },
        elementHasClass: function elementHasClass() {
          return !1;
        },
        notifyClose: function notifyClose() {},
        notifyOpen: function notifyOpen() {},
        saveFocus: function saveFocus() {},
        restoreFocus: function restoreFocus() {},
        focusActiveNavigationItem: function focusActiveNavigationItem() {},
        trapFocus: function trapFocus() {},
        releaseFocus: function releaseFocus() {}
      };
    },
    enumerable: !0,
    configurable: !0
  }), e.prototype.destroy = function () {
    this.animationFrame_ && cancelAnimationFrame(this.animationFrame_), this.animationTimer_ && clearTimeout(this.animationTimer_);
  }, e.prototype.open = function () {
    var t = this;
    this.isOpen() || this.isOpening() || this.isClosing() || (this.adapter.addClass(Yt.OPEN), this.adapter.addClass(Yt.ANIMATE), this.runNextAnimationFrame_(function () {
      t.adapter.addClass(Yt.OPENING);
    }), this.adapter.saveFocus());
  }, e.prototype.close = function () {
    !this.isOpen() || this.isOpening() || this.isClosing() || this.adapter.addClass(Yt.CLOSING);
  }, e.prototype.isOpen = function () {
    return this.adapter.hasClass(Yt.OPEN);
  }, e.prototype.isOpening = function () {
    return this.adapter.hasClass(Yt.OPENING) || this.adapter.hasClass(Yt.ANIMATE);
  }, e.prototype.isClosing = function () {
    return this.adapter.hasClass(Yt.CLOSING);
  }, e.prototype.handleKeydown = function (t) {
    var e = t.keyCode;
    ("Escape" === t.key || 27 === e) && this.close();
  }, e.prototype.handleTransitionEnd = function (t) {
    var e = Yt.OPENING,
        i = Yt.CLOSING,
        r = Yt.OPEN,
        n = Yt.ANIMATE,
        o = Yt.ROOT;
    this.isElement_(t.target) && this.adapter.elementHasClass(t.target, o) && (this.isClosing() ? (this.adapter.removeClass(r), this.closed_(), this.adapter.restoreFocus(), this.adapter.notifyClose()) : (this.adapter.focusActiveNavigationItem(), this.opened_(), this.adapter.notifyOpen()), this.adapter.removeClass(n), this.adapter.removeClass(e), this.adapter.removeClass(i));
  }, e.prototype.opened_ = function () {}, e.prototype.closed_ = function () {}, e.prototype.runNextAnimationFrame_ = function (t) {
    var e = this;
    cancelAnimationFrame(this.animationFrame_), this.animationFrame_ = requestAnimationFrame(function () {
      e.animationFrame_ = 0, clearTimeout(e.animationTimer_), e.animationTimer_ = setTimeout(t, 0);
    });
  }, e.prototype.isElement_ = function (t) {
    return Boolean(t.classList);
  }, e;
}(St);

exports.M = te;

var ee = function ee(t) {
  return function (e, i) {
    if (e.constructor._observers) {
      if (!e.constructor.hasOwnProperty("_observers")) {
        var _t36 = e.constructor._observers;
        e.constructor._observers = new Map(), _t36.forEach(function (t, i) {
          return e.constructor._observers.set(i, t);
        });
      }
    } else {
      e.constructor._observers = new Map();
      var _t37 = e.updated;

      e.updated = function (e) {
        var _this20 = this;

        _t37.call(this, e), e.forEach(function (t, e) {
          var i = _this20.constructor._observers.get(e);

          void 0 !== i && i.call(_this20, _this20[e], t);
        });
      };
    }

    e.constructor._observers.set(i, t);
  };
};

exports.o = ee;

var _ie = function ie(t, e) {
  return (_ie = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (t, e) {
    t.__proto__ = e;
  } || function (t, e) {
    for (var i in e) {
      e.hasOwnProperty(i) && (t[i] = e[i]);
    }
  })(t, e);
};

function re(t, e) {
  function i() {
    this.constructor = t;
  }

  _ie(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}

var _ne = function ne() {
  return (_ne = Object.assign || function (t) {
    for (var e, i = 1, r = arguments.length; i < r; i++) {
      for (var n in e = arguments[i]) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    }

    return t;
  }).apply(this, arguments);
},
    oe = {
  FIXED_CLASS: "mdc-top-app-bar--fixed",
  FIXED_SCROLLED_CLASS: "mdc-top-app-bar--fixed-scrolled",
  SHORT_CLASS: "mdc-top-app-bar--short",
  SHORT_COLLAPSED_CLASS: "mdc-top-app-bar--short-collapsed",
  SHORT_HAS_ACTION_ITEM_CLASS: "mdc-top-app-bar--short-has-action-item"
},
    ae = {
  DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
  MAX_TOP_APP_BAR_HEIGHT: 128
},
    de = {
  ACTION_ITEM_SELECTOR: ".mdc-top-app-bar__action-item",
  NAVIGATION_EVENT: "MDCTopAppBar:nav",
  NAVIGATION_ICON_SELECTOR: ".mdc-top-app-bar__navigation-icon",
  ROOT_SELECTOR: ".mdc-top-app-bar",
  TITLE_SELECTOR: ".mdc-top-app-bar__title"
},
    se = function (t) {
  function e(i) {
    return t.call(this, _ne(_ne({}, e.defaultAdapter), i)) || this;
  }

  return re(e, t), Object.defineProperty(e, "strings", {
    get: function get() {
      return de;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "cssClasses", {
    get: function get() {
      return oe;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "numbers", {
    get: function get() {
      return ae;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "defaultAdapter", {
    get: function get() {
      return {
        addClass: function addClass() {},
        removeClass: function removeClass() {},
        hasClass: function hasClass() {
          return !1;
        },
        setStyle: function setStyle() {},
        getTopAppBarHeight: function getTopAppBarHeight() {
          return 0;
        },
        notifyNavigationIconClicked: function notifyNavigationIconClicked() {},
        getViewportScrollY: function getViewportScrollY() {
          return 0;
        },
        getTotalActionItems: function getTotalActionItems() {
          return 0;
        }
      };
    },
    enumerable: !0,
    configurable: !0
  }), e.prototype.handleTargetScroll = function () {}, e.prototype.handleWindowResize = function () {}, e.prototype.handleNavigationClick = function () {
    this.adapter.notifyNavigationIconClicked();
  }, e;
}(St),
    le = function (t) {
  function e(e) {
    var i = t.call(this, e) || this;
    return i.wasDocked_ = !0, i.isDockedShowing_ = !0, i.currentAppBarOffsetTop_ = 0, i.isCurrentlyBeingResized_ = !1, i.resizeThrottleId_ = 0, i.resizeDebounceId_ = 0, i.lastScrollPosition_ = i.adapter.getViewportScrollY(), i.topAppBarHeight_ = i.adapter.getTopAppBarHeight(), i;
  }

  return re(e, t), e.prototype.destroy = function () {
    t.prototype.destroy.call(this), this.adapter.setStyle("top", "");
  }, e.prototype.handleTargetScroll = function () {
    var t = Math.max(this.adapter.getViewportScrollY(), 0),
        e = t - this.lastScrollPosition_;
    this.lastScrollPosition_ = t, this.isCurrentlyBeingResized_ || (this.currentAppBarOffsetTop_ -= e, this.currentAppBarOffsetTop_ > 0 ? this.currentAppBarOffsetTop_ = 0 : Math.abs(this.currentAppBarOffsetTop_) > this.topAppBarHeight_ && (this.currentAppBarOffsetTop_ = -this.topAppBarHeight_), this.moveTopAppBar_());
  }, e.prototype.handleWindowResize = function () {
    var t = this;
    this.resizeThrottleId_ || (this.resizeThrottleId_ = setTimeout(function () {
      t.resizeThrottleId_ = 0, t.throttledResizeHandler_();
    }, ae.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)), this.isCurrentlyBeingResized_ = !0, this.resizeDebounceId_ && clearTimeout(this.resizeDebounceId_), this.resizeDebounceId_ = setTimeout(function () {
      t.handleTargetScroll(), t.isCurrentlyBeingResized_ = !1, t.resizeDebounceId_ = 0;
    }, ae.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
  }, e.prototype.checkForUpdate_ = function () {
    var t = -this.topAppBarHeight_,
        e = this.currentAppBarOffsetTop_ < 0,
        i = this.currentAppBarOffsetTop_ > t,
        r = e && i;
    if (r) this.wasDocked_ = !1;else {
      if (!this.wasDocked_) return this.wasDocked_ = !0, !0;
      if (this.isDockedShowing_ !== i) return this.isDockedShowing_ = i, !0;
    }
    return r;
  }, e.prototype.moveTopAppBar_ = function () {
    if (this.checkForUpdate_()) {
      var t = this.currentAppBarOffsetTop_;
      Math.abs(t) >= this.topAppBarHeight_ && (t = -ae.MAX_TOP_APP_BAR_HEIGHT), this.adapter.setStyle("top", t + "px");
    }
  }, e.prototype.throttledResizeHandler_ = function () {
    var t = this.adapter.getTopAppBarHeight();
    this.topAppBarHeight_ !== t && (this.wasDocked_ = !1, this.currentAppBarOffsetTop_ -= this.topAppBarHeight_ - t, this.topAppBarHeight_ = t), this.handleTargetScroll();
  }, e;
}(se);

exports.v = le;
exports.u = oe;
var ce = vt ? {
  passive: !0
} : void 0;
exports.w = ce;

var pe = /*#__PURE__*/function (_wt3) {
  _inherits(pe, _wt3);

  var _super11 = _createSuper(pe);

  function pe() {
    var _this21;

    _classCallCheck(this, pe);

    _this21 = _super11.apply(this, arguments), _this21.mdcFoundationClass = se, _this21.centerTitle = !1, _this21.handleTargetScroll = function () {
      _this21.mdcFoundation.handleTargetScroll();
    }, _this21.handleNavigationClick = function () {
      _this21.mdcFoundation.handleNavigationClick();
    };
    return _this21;
  }

  _createClass(pe, [{
    key: "scrollTarget",
    get: function get() {
      return this._scrollTarget || window;
    },
    set: function set(t) {
      this.unregisterScrollListener();
      var e = this.scrollTarget;
      this._scrollTarget = t, this.updateRootPosition(), this.requestUpdate("scrollTarget", e), this.registerScrollListener();
    }
  }, {
    key: "updateRootPosition",
    value: function updateRootPosition() {
      if (this.mdcRoot) {
        var _t38 = this.scrollTarget === window;

        this.mdcRoot.style.position = _t38 ? "" : "absolute";
      }
    }
  }, {
    key: "render",
    value: function render() {
      var t = z(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["<span class=\"mdc-top-app-bar__title\"><slot name=\"title\"></slot></span>"])));
      return this.centerTitle && (t = z(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["<section class=\"mdc-top-app-bar__section mdc-top-app-bar__section--align-center\">", "</section>"])), t)), z(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      <header class=\"mdc-top-app-bar ", "\">\n      <div class=\"mdc-top-app-bar__row\">\n        <section class=\"mdc-top-app-bar__section mdc-top-app-bar__section--align-start\" id=\"navigation\">\n          <slot name=\"navigationIcon\"\n            @click=", "></slot>\n          ", "\n        </section>\n        ", "\n        <section class=\"mdc-top-app-bar__section mdc-top-app-bar__section--align-end\" id=\"actions\" role=\"toolbar\">\n          <slot name=\"actionItems\"></slot>\n        </section>\n      </div>\n    </header>\n    <div class=\"", "\">\n      <slot></slot>\n    </div>\n    "])), Dt(this.barClasses()), this.handleNavigationClick, this.centerTitle ? null : t, this.centerTitle ? t : null, Dt(this.contentClasses()));
    }
  }, {
    key: "createAdapter",
    value: function createAdapter() {
      var _this22 = this;

      return Object.assign(Object.assign({}, gt(this.mdcRoot)), {
        setStyle: function setStyle(t, e) {
          return _this22.mdcRoot.style.setProperty(t, e);
        },
        getTopAppBarHeight: function getTopAppBarHeight() {
          return _this22.mdcRoot.clientHeight;
        },
        notifyNavigationIconClicked: function notifyNavigationIconClicked() {
          _this22.dispatchEvent(new Event(de.NAVIGATION_EVENT, {
            bubbles: !0,
            cancelable: !0
          }));
        },
        getViewportScrollY: function getViewportScrollY() {
          return _this22.scrollTarget instanceof Window ? _this22.scrollTarget.pageYOffset : _this22.scrollTarget.scrollTop;
        },
        getTotalActionItems: function getTotalActionItems() {
          return _this22._actionItemsSlot.assignedNodes({
            flatten: !0
          }).length;
        }
      });
    }
  }, {
    key: "registerListeners",
    value: function registerListeners() {
      this.registerScrollListener();
    }
  }, {
    key: "unregisterListeners",
    value: function unregisterListeners() {
      this.unregisterScrollListener();
    }
  }, {
    key: "registerScrollListener",
    value: function registerScrollListener() {
      this.scrollTarget.addEventListener("scroll", this.handleTargetScroll, ce);
    }
  }, {
    key: "unregisterScrollListener",
    value: function unregisterScrollListener() {
      this.scrollTarget.removeEventListener("scroll", this.handleTargetScroll);
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      _get(_getPrototypeOf(pe.prototype), "firstUpdated", this).call(this), this.updateRootPosition(), this.registerListeners();
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(pe.prototype), "disconnectedCallback", this).call(this), this.unregisterListeners();
    }
  }]);

  return pe;
}(wt);

t([Z(".mdc-top-app-bar")], pe.prototype, "mdcRoot", void 0), t([Z('slot[name="actionItems"]')], pe.prototype, "_actionItemsSlot", void 0), t([Q({
  type: Boolean
})], pe.prototype, "centerTitle", void 0), t([Q()], pe.prototype, "scrollTarget", null);

var he = /*#__PURE__*/function (_pe) {
  _inherits(he, _pe);

  var _super12 = _createSuper(he);

  function he() {
    var _this23;

    _classCallCheck(this, he);

    _this23 = _super12.apply(this, arguments), _this23.mdcFoundationClass = le, _this23.prominent = !1, _this23.dense = !1, _this23.handleResize = function () {
      _this23.mdcFoundation.handleWindowResize();
    };
    return _this23;
  }

  _createClass(he, [{
    key: "barClasses",
    value: function barClasses() {
      return {
        "mdc-top-app-bar--dense": this.dense,
        "mdc-top-app-bar--prominent": this.prominent,
        "center-title": this.centerTitle
      };
    }
  }, {
    key: "contentClasses",
    value: function contentClasses() {
      return {
        "mdc-top-app-bar--fixed-adjust": !this.dense && !this.prominent,
        "mdc-top-app-bar--dense-fixed-adjust": this.dense && !this.prominent,
        "mdc-top-app-bar--prominent-fixed-adjust": !this.dense && this.prominent,
        "mdc-top-app-bar--dense-prominent-fixed-adjust": this.dense && this.prominent
      };
    }
  }, {
    key: "registerListeners",
    value: function registerListeners() {
      _get(_getPrototypeOf(he.prototype), "registerListeners", this).call(this), window.addEventListener("resize", this.handleResize, ce);
    }
  }, {
    key: "unregisterListeners",
    value: function unregisterListeners() {
      _get(_getPrototypeOf(he.prototype), "unregisterListeners", this).call(this), window.removeEventListener("resize", this.handleResize);
    }
  }]);

  return he;
}(pe);

exports.T = he;
t([Q({
  type: Boolean,
  reflect: !0
})], he.prototype, "prominent", void 0), t([Q({
  type: Boolean,
  reflect: !0
})], he.prototype, "dense", void 0);
var me = dt(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral([".mdc-top-app-bar{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);color:white;display:flex;position:fixed;flex-direction:column;justify-content:space-between;box-sizing:border-box;width:100%;z-index:4}.mdc-top-app-bar .mdc-top-app-bar__action-item,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item::before,.mdc-top-app-bar .mdc-top-app-bar__action-item::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after{background-color:#fff;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-primary, #fff))}.mdc-top-app-bar .mdc-top-app-bar__action-item:hover::before,.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-surface--hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-surface--hover::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded)::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24)}.mdc-top-app-bar__row{display:flex;position:relative;box-sizing:border-box;width:100%;height:64px}.mdc-top-app-bar__section{display:inline-flex;flex:1 1 auto;align-items:center;min-width:0;padding:8px 12px;z-index:1}.mdc-top-app-bar__section--align-start{justify-content:flex-start;order:-1}.mdc-top-app-bar__section--align-end{justify-content:flex-end;order:1}.mdc-top-app-bar__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);padding-left:20px;padding-right:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:1}[dir=rtl] .mdc-top-app-bar__title,.mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--short-collapsed{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:24px;border-bottom-left-radius:0}[dir=rtl] .mdc-top-app-bar--short-collapsed,.mdc-top-app-bar--short-collapsed[dir=rtl]{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:24px}.mdc-top-app-bar--short{top:0;right:auto;left:0;width:100%;transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-top-app-bar--short,.mdc-top-app-bar--short[dir=rtl]{right:0;left:auto}.mdc-top-app-bar--short .mdc-top-app-bar__row{height:56px}.mdc-top-app-bar--short .mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short .mdc-top-app-bar__title{transition:opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.mdc-top-app-bar--short-collapsed{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);width:56px;transition:width 300ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title{display:none}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item{transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item{width:112px}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--dense .mdc-top-app-bar__row{height:48px}.mdc-top-app-bar--dense .mdc-top-app-bar__section{padding:0 4px}.mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:12px;padding-right:0}[dir=rtl] .mdc-top-app-bar--dense .mdc-top-app-bar__title,.mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:12px}.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:128px}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{align-self:flex-end;padding-bottom:2px}.mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,.mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon{align-self:flex-start}.mdc-top-app-bar--fixed{transition:box-shadow 200ms linear}.mdc-top-app-bar--fixed-scrolled{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);transition:box-shadow 200ms linear}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:96px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section{padding:0 12px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:20px;padding-right:0;padding-bottom:9px}[dir=rtl] .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title,.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--fixed-adjust{padding-top:64px}.mdc-top-app-bar--dense-fixed-adjust{padding-top:48px}.mdc-top-app-bar--short-fixed-adjust{padding-top:56px}.mdc-top-app-bar--prominent-fixed-adjust{padding-top:128px}.mdc-top-app-bar--dense-prominent-fixed-adjust{padding-top:96px}@media(max-width: 599px){.mdc-top-app-bar__row{height:56px}.mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short{transition:width 200ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed{transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-bottom:6px}.mdc-top-app-bar--fixed-adjust{padding-top:56px}}:host{display:block}.mdc-top-app-bar{color:#fff;color:var(--mdc-theme-on-primary, #fff);width:100%;width:var(--mdc-top-app-bar-width, 100%)}.mdc-top-app-bar--prominent #navigation ::slotted(*),.mdc-top-app-bar--prominent #actions ::slotted(*){align-self:flex-start}#navigation ::slotted(*),#actions ::slotted(*){--mdc-icon-button-ripple-opacity: 0.24}.mdc-top-app-bar--short-collapsed #actions ::slotted(*){transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar__section--align-center{justify-content:center}.mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}.center-title .mdc-top-app-bar__section--align-start,.center-title .mdc-top-app-bar__section--align-end{flex-basis:0}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}.mdc-top-app-bar--fixed-scrolled{box-shadow:var(--mdc-top-app-bar-fixed-box-shadow, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}"]))),
    ue = dt(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral([".material-icons{font-family:var(--mdc-icon-font, \"Material Icons\");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:\"liga\"}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;font-size:24px;text-decoration:none;cursor:pointer;user-select:none;width:48px;height:48px;padding:12px}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}:host{display:inline-block;outline:none;--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host([disabled]){pointer-events:none}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button>i{position:absolute;top:0;padding-top:inherit}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}"]))),
    fe = Symbol("selection controller");
exports.l = ue;
exports.k = me;

var ge = /*#__PURE__*/_createClass(function ge() {
  _classCallCheck(this, ge);

  this.selected = null, this.ordered = null, this.set = new Set();
});

var _e = /*#__PURE__*/function () {
  function _e(t) {
    var _this24 = this;

    _classCallCheck(this, _e);

    this.sets = {}, this.focusedSet = null, this.mouseIsDown = !1, this.updating = !1, t.addEventListener("keydown", function (t) {
      _this24.keyDownHandler(t);
    }), t.addEventListener("mousedown", function () {
      _this24.mousedownHandler();
    }), t.addEventListener("mouseup", function () {
      _this24.mouseupHandler();
    });
  }

  _createClass(_e, [{
    key: "keyDownHandler",
    value: function keyDownHandler(t) {
      var e = t.target;
      "checked" in e && this.has(e) && ("ArrowRight" == t.key || "ArrowDown" == t.key ? this.selectNext(e) : "ArrowLeft" != t.key && "ArrowUp" != t.key || this.selectPrevious(e));
    }
  }, {
    key: "mousedownHandler",
    value: function mousedownHandler() {
      this.mouseIsDown = !0;
    }
  }, {
    key: "mouseupHandler",
    value: function mouseupHandler() {
      this.mouseIsDown = !1;
    }
  }, {
    key: "has",
    value: function has(t) {
      return this.getSet(t.name).set.has(t);
    }
  }, {
    key: "selectPrevious",
    value: function selectPrevious(t) {
      var e = this.getOrdered(t),
          i = e.indexOf(t),
          r = e[i - 1] || e[e.length - 1];
      return this.select(r), r;
    }
  }, {
    key: "selectNext",
    value: function selectNext(t) {
      var e = this.getOrdered(t),
          i = e.indexOf(t),
          r = e[i + 1] || e[0];
      return this.select(r), r;
    }
  }, {
    key: "select",
    value: function select(t) {
      t.click();
    }
  }, {
    key: "focus",
    value: function focus(t) {
      if (this.mouseIsDown) return;
      var e = this.getSet(t.name),
          i = this.focusedSet;
      this.focusedSet = e, i != e && e.selected && e.selected != t && e.selected.focus();
    }
  }, {
    key: "isAnySelected",
    value: function isAnySelected(t) {
      var e = this.getSet(t.name);

      var _iterator12 = _createForOfIteratorHelper(e.set),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var _t39 = _step12.value;
          if (_t39.checked) return !0;
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }

      return !1;
    }
  }, {
    key: "getOrdered",
    value: function getOrdered(t) {
      var e = this.getSet(t.name);
      return e.ordered || (e.ordered = Array.from(e.set), e.ordered.sort(function (t, e) {
        return t.compareDocumentPosition(e) == Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
      })), e.ordered;
    }
  }, {
    key: "getSet",
    value: function getSet(t) {
      return this.sets[t] || (this.sets[t] = new ge()), this.sets[t];
    }
  }, {
    key: "register",
    value: function register(t) {
      var e = t.name || t.getAttribute("name") || "",
          i = this.getSet(e);
      i.set.add(t), i.ordered = null;
    }
  }, {
    key: "unregister",
    value: function unregister(t) {
      var e = this.getSet(t.name);
      e.set.delete(t), e.ordered = null, e.selected == t && (e.selected = null);
    }
  }, {
    key: "update",
    value: function update(t) {
      if (this.updating) return;
      this.updating = !0;
      var e = this.getSet(t.name);

      if (t.checked) {
        var _iterator13 = _createForOfIteratorHelper(e.set),
            _step13;

        try {
          for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
            var _i16 = _step13.value;
            _i16 != t && (_i16.checked = !1);
          }
        } catch (err) {
          _iterator13.e(err);
        } finally {
          _iterator13.f();
        }

        e.selected = t;
      }

      if (this.isAnySelected(t)) {
        var _iterator14 = _createForOfIteratorHelper(e.set),
            _step14;

        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var _t40 = _step14.value;
            if (void 0 === _t40.formElementTabIndex) break;
            _t40.formElementTabIndex = _t40.checked ? 0 : -1;
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }
      }

      this.updating = !1;
    }
  }], [{
    key: "getController",
    value: function getController(t) {
      var e = !("global" in t) || "global" in t && t.global ? document : t.getRootNode();
      var i = e[fe];
      return void 0 === i && (i = new _e(e), e[fe] = i), i;
    }
  }]);

  return _e;
}();

exports.S = _e;
var be = {
  CLOSING: "mdc-dialog--closing",
  OPEN: "mdc-dialog--open",
  OPENING: "mdc-dialog--opening",
  SCROLLABLE: "mdc-dialog--scrollable",
  SCROLL_LOCK: "mdc-dialog-scroll-lock",
  STACKED: "mdc-dialog--stacked"
},
    xe = {
  ACTION_ATTRIBUTE: "data-mdc-dialog-action",
  BUTTON_DEFAULT_ATTRIBUTE: "data-mdc-dialog-button-default",
  BUTTON_SELECTOR: ".mdc-dialog__button",
  CLOSED_EVENT: "MDCDialog:closed",
  CLOSE_ACTION: "close",
  CLOSING_EVENT: "MDCDialog:closing",
  CONTAINER_SELECTOR: ".mdc-dialog__container",
  CONTENT_SELECTOR: ".mdc-dialog__content",
  DESTROY_ACTION: "destroy",
  INITIAL_FOCUS_ATTRIBUTE: "data-mdc-dialog-initial-focus",
  OPENED_EVENT: "MDCDialog:opened",
  OPENING_EVENT: "MDCDialog:opening",
  SCRIM_SELECTOR: ".mdc-dialog__scrim",
  SUPPRESS_DEFAULT_PRESS_SELECTOR: ["textarea", ".mdc-menu .mdc-list-item"].join(", "),
  SURFACE_SELECTOR: ".mdc-dialog__surface"
},
    ve = {
  DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
  DIALOG_ANIMATION_OPEN_TIME_MS: 150
};
exports.z = ve;
exports.y = xe;
exports.x = be;

function ye(t) {
  return void 0 === t && (t = window), !!function (t) {
    void 0 === t && (t = window);
    var e = !1;

    try {
      var i = {
        get passive() {
          return e = !0, !1;
        }

      },
          r = function r() {};

      t.document.addEventListener("test", r, i), t.document.removeEventListener("test", r, i);
    } catch (t) {
      e = !1;
    }

    return e;
  }(t) && {
    passive: !0
  };
}

var Ee = /*#__PURE__*/function (_lt4) {
  _inherits(Ee, _lt4);

  var _super13 = _createSuper(Ee);

  function Ee() {
    var _this25;

    _classCallCheck(this, Ee);

    _this25 = _super13.apply(this, arguments), _this25.value = "", _this25.group = null, _this25.tabindex = -1, _this25.disabled = !1, _this25.twoline = !1, _this25.activated = !1, _this25.graphic = null, _this25.multipleGraphics = !1, _this25.hasMeta = !1, _this25.noninteractive = !1, _this25.selected = !1, _this25.shouldRenderRipple = !1, _this25._managingList = null, _this25.boundOnClick = _this25.onClick.bind(_assertThisInitialized(_this25)), _this25._firstChanged = !0, _this25._skipPropRequest = !1, _this25.rippleHandlers = new Ut(function () {
      return _this25.shouldRenderRipple = !0, _this25.ripple;
    }), _this25.listeners = [{
      target: _assertThisInitialized(_this25),
      eventNames: ["click"],
      cb: function cb() {
        _this25.onClick();
      }
    }, {
      target: _assertThisInitialized(_this25),
      eventNames: ["mouseenter"],
      cb: _this25.rippleHandlers.startHover
    }, {
      target: _assertThisInitialized(_this25),
      eventNames: ["mouseleave"],
      cb: _this25.rippleHandlers.endHover
    }, {
      target: _assertThisInitialized(_this25),
      eventNames: ["focus"],
      cb: _this25.rippleHandlers.startFocus
    }, {
      target: _assertThisInitialized(_this25),
      eventNames: ["blur"],
      cb: _this25.rippleHandlers.endFocus
    }, {
      target: _assertThisInitialized(_this25),
      eventNames: ["mousedown", "touchstart"],
      cb: function cb(t) {
        var e = t.type;

        _this25.onDown("mousedown" === e ? "mouseup" : "touchend", t);
      }
    }];
    return _this25;
  }

  _createClass(Ee, [{
    key: "text",
    get: function get() {
      var t = this.textContent;
      return t ? t.trim() : "";
    }
  }, {
    key: "render",
    value: function render() {
      var t = this.renderText(),
          e = this.graphic ? this.renderGraphic() : z(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral([""]))),
          i = this.hasMeta ? this.renderMeta() : z(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral([""])));
      return z(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      ", "\n      ", "\n      ", "\n      ", ""])), this.renderRipple(), e, t, i);
    }
  }, {
    key: "renderRipple",
    value: function renderRipple() {
      return this.shouldRenderRipple ? z(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      <mwc-ripple\n        .activated=", ">\n      </mwc-ripple>"])), this.activated) : this.activated ? z(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["<div class=\"fake-activated-ripple\"></div>"]))) : "";
    }
  }, {
    key: "renderGraphic",
    value: function renderGraphic() {
      var t = {
        multi: this.multipleGraphics
      };
      return z(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n      <span class=\"mdc-list-item__graphic material-icons ", "\">\n        <slot name=\"graphic\"></slot>\n      </span>"])), Dt(t));
    }
  }, {
    key: "renderMeta",
    value: function renderMeta() {
      return z(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n      <span class=\"mdc-list-item__meta material-icons\">\n        <slot name=\"meta\"></slot>\n      </span>"])));
    }
  }, {
    key: "renderText",
    value: function renderText() {
      var t = this.twoline ? this.renderTwoline() : this.renderSingleLine();
      return z(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n      <span class=\"mdc-list-item__text\">\n        ", "\n      </span>"])), t);
    }
  }, {
    key: "renderSingleLine",
    value: function renderSingleLine() {
      return z(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["<slot></slot>"])));
    }
  }, {
    key: "renderTwoline",
    value: function renderTwoline() {
      return z(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n      <span class=\"mdc-list-item__primary-text\">\n        <slot></slot>\n      </span>\n      <span class=\"mdc-list-item__secondary-text\">\n        <slot name=\"secondary\"></slot>\n      </span>\n    "])));
    }
  }, {
    key: "onClick",
    value: function onClick() {
      this.fireRequestSelected(!this.selected, "interaction");
    }
  }, {
    key: "onDown",
    value: function onDown(t, e) {
      var _this26 = this;

      var i = function i() {
        window.removeEventListener(t, i), _this26.rippleHandlers.endPress();
      };

      window.addEventListener(t, i), this.rippleHandlers.startPress(e);
    }
  }, {
    key: "fireRequestSelected",
    value: function fireRequestSelected(t, e) {
      if (this.noninteractive) return;
      var i = new CustomEvent("request-selected", {
        bubbles: !0,
        composed: !0,
        detail: {
          source: e,
          selected: t
        }
      });
      this.dispatchEvent(i);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(Ee.prototype), "connectedCallback", this).call(this), this.noninteractive || this.setAttribute("mwc-list-item", "");

      var _iterator15 = _createForOfIteratorHelper(this.listeners),
          _step15;

      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var _t41 = _step15.value;

          var _iterator16 = _createForOfIteratorHelper(_t41.eventNames),
              _step16;

          try {
            for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
              var _e22 = _step16.value;

              _t41.target.addEventListener(_e22, _t41.cb, {
                passive: !0
              });
            }
          } catch (err) {
            _iterator16.e(err);
          } finally {
            _iterator16.f();
          }
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(Ee.prototype), "disconnectedCallback", this).call(this);

      var _iterator17 = _createForOfIteratorHelper(this.listeners),
          _step17;

      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          var _t42 = _step17.value;

          var _iterator18 = _createForOfIteratorHelper(_t42.eventNames),
              _step18;

          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              var _e23 = _step18.value;

              _t42.target.removeEventListener(_e23, _t42.cb);
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }

      this._managingList && (this._managingList.debouncedLayout ? this._managingList.debouncedLayout(!0) : this._managingList.layout(!0));
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      var t = new Event("list-item-rendered", {
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(t);
    }
  }]);

  return Ee;
}(lt);

exports.P = Ee;
t([Z("slot")], Ee.prototype, "slotElement", void 0), t([tt("mwc-ripple")], Ee.prototype, "ripple", void 0), t([Q({
  type: String
})], Ee.prototype, "value", void 0), t([Q({
  type: String,
  reflect: !0
})], Ee.prototype, "group", void 0), t([Q({
  type: Number,
  reflect: !0
})], Ee.prototype, "tabindex", void 0), t([Q({
  type: Boolean,
  reflect: !0
}), ee(function (t) {
  t ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
})], Ee.prototype, "disabled", void 0), t([Q({
  type: Boolean,
  reflect: !0
})], Ee.prototype, "twoline", void 0), t([Q({
  type: Boolean,
  reflect: !0
})], Ee.prototype, "activated", void 0), t([Q({
  type: String,
  reflect: !0
})], Ee.prototype, "graphic", void 0), t([Q({
  type: Boolean
})], Ee.prototype, "multipleGraphics", void 0), t([Q({
  type: Boolean
})], Ee.prototype, "hasMeta", void 0), t([Q({
  type: Boolean,
  reflect: !0
}), ee(function (t) {
  t ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
})], Ee.prototype, "noninteractive", void 0), t([Q({
  type: Boolean,
  reflect: !0
}), ee(function (t) {
  var e = this.getAttribute("role"),
      i = "gridcell" === e || "option" === e || "row" === e || "tab" === e;
  i && t ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged ? this._firstChanged = !1 : this._skipPropRequest || this.fireRequestSelected(t, "property");
})], Ee.prototype, "selected", void 0), t([J()], Ee.prototype, "shouldRenderRipple", void 0), t([J()], Ee.prototype, "_managingList", void 0);
var we = dt(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral([":host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var(--mdc-theme-primary, #6200ee)}:host([activated]) .mdc-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:\"\";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-list-item__meta.multi{width:auto}.mdc-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-list-item__meta ::slotted(.material-icons),.mdc-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}:host[dir=rtl] .mdc-list-item__meta,[dir=rtl] :host .mdc-list-item__meta{margin-left:0;margin-right:auto}.mdc-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-list-item__text ::slotted([for]),.mdc-list-item__text[for]{pointer-events:none}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:\"\";vertical-align:0}.mdc-list--dense .mdc-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-list-item__text ::slotted(*),:host([disabled]) .mdc-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}:host[dir=rtl] :host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic,[dir=rtl] :host :host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}:host[dir=rtl] :host([graphic=icon]) .mdc-list-item__graphic,[dir=rtl] :host :host([graphic=icon]) .mdc-list-item__graphic{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-list-item__graphic,:host([graphic=large]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-list-item__graphic.multi,:host([graphic=large]) .mdc-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}"])));
exports.Q = we;
var Te = {
  UNKNOWN: "Unknown",
  BACKSPACE: "Backspace",
  ENTER: "Enter",
  SPACEBAR: "Spacebar",
  PAGE_UP: "PageUp",
  PAGE_DOWN: "PageDown",
  END: "End",
  HOME: "Home",
  ARROW_LEFT: "ArrowLeft",
  ARROW_UP: "ArrowUp",
  ARROW_RIGHT: "ArrowRight",
  ARROW_DOWN: "ArrowDown",
  DELETE: "Delete",
  ESCAPE: "Escape"
},
    Ie = new Set();
exports.a7 = Te;
Ie.add(Te.BACKSPACE), Ie.add(Te.ENTER), Ie.add(Te.SPACEBAR), Ie.add(Te.PAGE_UP), Ie.add(Te.PAGE_DOWN), Ie.add(Te.END), Ie.add(Te.HOME), Ie.add(Te.ARROW_LEFT), Ie.add(Te.ARROW_UP), Ie.add(Te.ARROW_RIGHT), Ie.add(Te.ARROW_DOWN), Ie.add(Te.DELETE), Ie.add(Te.ESCAPE);
var Se = 8,
    Ae = 13,
    Oe = 32,
    Ce = 33,
    Ne = 34,
    Re = 35,
    Le = 36,
    ke = 37,
    Pe = 38,
    Fe = 39,
    De = 40,
    Me = 46,
    ze = 27,
    He = new Map();
He.set(Se, Te.BACKSPACE), He.set(Ae, Te.ENTER), He.set(Oe, Te.SPACEBAR), He.set(Ce, Te.PAGE_UP), He.set(Ne, Te.PAGE_DOWN), He.set(Re, Te.END), He.set(Le, Te.HOME), He.set(ke, Te.ARROW_LEFT), He.set(Pe, Te.ARROW_UP), He.set(Fe, Te.ARROW_RIGHT), He.set(De, Te.ARROW_DOWN), He.set(Me, Te.DELETE), He.set(ze, Te.ESCAPE);
var Ve = new Set();

function Be(t) {
  var e = t.key;
  if (Ie.has(e)) return e;
  var i = He.get(t.keyCode);
  return i || Te.UNKNOWN;
}

Ve.add(Te.PAGE_UP), Ve.add(Te.PAGE_DOWN), Ve.add(Te.END), Ve.add(Te.HOME), Ve.add(Te.ARROW_LEFT), Ve.add(Te.ARROW_UP), Ve.add(Te.ARROW_RIGHT), Ve.add(Te.ARROW_DOWN);
var Ue = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
},
    je = {
  ACTION_EVENT: "MDCList:action",
  ARIA_CHECKED: "aria-checked",
  ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
  ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
  ARIA_CURRENT: "aria-current",
  ARIA_DISABLED: "aria-disabled",
  ARIA_ORIENTATION: "aria-orientation",
  ARIA_ORIENTATION_HORIZONTAL: "horizontal",
  ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
  ARIA_SELECTED: "aria-selected",
  CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + Ue.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + Ue.LIST_ITEM_CLASS + " a\n  ",
  FOCUSABLE_CHILD_ELEMENTS: "\n    ." + Ue.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + Ue.LIST_ITEM_CLASS + " a,\n    ." + Ue.LIST_ITEM_CLASS + ' input[type="radio"]:not(:disabled),\n    .' + Ue.LIST_ITEM_CLASS + ' input[type="checkbox"]:not(:disabled)\n  ',
  RADIO_SELECTOR: 'input[type="radio"]'
},
    Ge = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
exports.a5 = Ge;
exports.ai = Ue;
var $e = ["input", "button", "textarea", "select"];

function We(t) {
  return t instanceof Set;
}

function Xe(t) {
  return We(t.detail.index);
}

var qe = function qe(t) {
  var e = t === Ge.UNSET_INDEX ? new Set() : t;
  return We(e) ? new Set(e) : new Set([e]);
};

exports.N = qe;

var Ye = /*#__PURE__*/function (_St) {
  _inherits(Ye, _St);

  var _super14 = _createSuper(Ye);

  function Ye(t) {
    var _this27;

    _classCallCheck(this, Ye);

    _this27 = _super14.call(this, Object.assign(Object.assign({}, Ye.defaultAdapter), t)), _this27.isMulti_ = !1, _this27.wrapFocus_ = !1, _this27.isVertical_ = !0, _this27.selectedIndex_ = Ge.UNSET_INDEX, _this27.focusedItemIndex_ = Ge.UNSET_INDEX, _this27.useActivatedClass_ = !1, _this27.ariaCurrentAttrValue_ = null;
    return _this27;
  }

  _createClass(Ye, [{
    key: "setWrapFocus",
    value: function setWrapFocus(t) {
      this.wrapFocus_ = t;
    }
  }, {
    key: "setMulti",
    value: function setMulti(t) {
      this.isMulti_ = t;
      var e = this.selectedIndex_;

      if (t) {
        if (!We(e)) {
          var _t43 = e === Ge.UNSET_INDEX;

          this.selectedIndex_ = _t43 ? new Set() : new Set([e]);
        }
      } else if (We(e)) if (e.size) {
        var _t44 = Array.from(e).sort();

        this.selectedIndex_ = _t44[0];
      } else this.selectedIndex_ = Ge.UNSET_INDEX;
    }
  }, {
    key: "setVerticalOrientation",
    value: function setVerticalOrientation(t) {
      this.isVertical_ = t;
    }
  }, {
    key: "setUseActivatedClass",
    value: function setUseActivatedClass(t) {
      this.useActivatedClass_ = t;
    }
  }, {
    key: "getSelectedIndex",
    value: function getSelectedIndex() {
      return this.selectedIndex_;
    }
  }, {
    key: "setSelectedIndex",
    value: function setSelectedIndex(t) {
      this.isIndexValid_(t) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(qe(t)) : this.setSingleSelectionAtIndex_(t));
    }
  }, {
    key: "handleFocusIn",
    value: function handleFocusIn(t, e) {
      e >= 0 && this.adapter.setTabIndexForElementIndex(e, 0);
    }
  }, {
    key: "handleFocusOut",
    value: function handleFocusOut(t, e) {
      var _this28 = this;

      e >= 0 && this.adapter.setTabIndexForElementIndex(e, -1), setTimeout(function () {
        _this28.adapter.isFocusInsideList() || _this28.setTabindexToFirstSelectedItem_();
      }, 0);
    }
  }, {
    key: "handleKeydown",
    value: function handleKeydown(t, e, i) {
      var r = "ArrowLeft" === Be(t),
          n = "ArrowUp" === Be(t),
          o = "ArrowRight" === Be(t),
          a = "ArrowDown" === Be(t),
          d = "Home" === Be(t),
          s = "End" === Be(t),
          l = "Enter" === Be(t),
          c = "Spacebar" === Be(t);
      if (this.adapter.isRootFocused()) return void (n || s ? (t.preventDefault(), this.focusLastElement()) : (a || d) && (t.preventDefault(), this.focusFirstElement()));
      var p,
          h = this.adapter.getFocusedElementIndex();

      if (!(-1 === h && (h = i, h < 0))) {
        if (this.isVertical_ && a || !this.isVertical_ && o) this.preventDefaultEvent(t), p = this.focusNextElement(h);else if (this.isVertical_ && n || !this.isVertical_ && r) this.preventDefaultEvent(t), p = this.focusPrevElement(h);else if (d) this.preventDefaultEvent(t), p = this.focusFirstElement();else if (s) this.preventDefaultEvent(t), p = this.focusLastElement();else if ((l || c) && e) {
          var _e24 = t.target;
          if (_e24 && "A" === _e24.tagName && l) return;
          this.preventDefaultEvent(t), this.setSelectedIndexOnAction_(h, !0);
        }
        this.focusedItemIndex_ = h, void 0 !== p && (this.setTabindexAtIndex_(p), this.focusedItemIndex_ = p);
      }
    }
  }, {
    key: "handleSingleSelection",
    value: function handleSingleSelection(t, e, i) {
      t !== Ge.UNSET_INDEX && (this.setSelectedIndexOnAction_(t, e, i), this.setTabindexAtIndex_(t), this.focusedItemIndex_ = t);
    }
  }, {
    key: "focusNextElement",
    value: function focusNextElement(t) {
      var e = t + 1;

      if (e >= this.adapter.getListItemCount()) {
        if (!this.wrapFocus_) return t;
        e = 0;
      }

      return this.adapter.focusItemAtIndex(e), e;
    }
  }, {
    key: "focusPrevElement",
    value: function focusPrevElement(t) {
      var e = t - 1;

      if (e < 0) {
        if (!this.wrapFocus_) return t;
        e = this.adapter.getListItemCount() - 1;
      }

      return this.adapter.focusItemAtIndex(e), e;
    }
  }, {
    key: "focusFirstElement",
    value: function focusFirstElement() {
      return this.adapter.focusItemAtIndex(0), 0;
    }
  }, {
    key: "focusLastElement",
    value: function focusLastElement() {
      var t = this.adapter.getListItemCount() - 1;
      return this.adapter.focusItemAtIndex(t), t;
    }
  }, {
    key: "setEnabled",
    value: function setEnabled(t, e) {
      this.isIndexValid_(t) && this.adapter.setDisabledStateForElementIndex(t, !e);
    }
  }, {
    key: "preventDefaultEvent",
    value: function preventDefaultEvent(t) {
      var e = ("" + t.target.tagName).toLowerCase();
      -1 === $e.indexOf(e) && t.preventDefault();
    }
  }, {
    key: "setSingleSelectionAtIndex_",
    value: function setSingleSelectionAtIndex_(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      this.selectedIndex_ !== t && (this.selectedIndex_ !== Ge.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), e && this.adapter.setSelectedStateForElementIndex(t, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(t, !0), this.setAriaForSingleSelectionAtIndex_(t), this.selectedIndex_ = t, this.adapter.notifySelected(t));
    }
  }, {
    key: "setMultiSelectionAtIndex_",
    value: function setMultiSelectionAtIndex_(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;

      var i = function (t, e) {
        var i = Array.from(t),
            r = Array.from(e),
            n = {
          added: [],
          removed: []
        },
            o = i.sort(),
            a = r.sort();
        var d = 0,
            s = 0;

        for (; d < o.length || s < a.length;) {
          var _t45 = o[d],
              _e25 = a[s];
          _t45 !== _e25 ? void 0 !== _t45 && (void 0 === _e25 || _t45 < _e25) ? (n.removed.push(_t45), d++) : void 0 !== _e25 && (void 0 === _t45 || _e25 < _t45) && (n.added.push(_e25), s++) : (d++, s++);
        }

        return n;
      }(qe(this.selectedIndex_), t);

      if (i.removed.length || i.added.length) {
        var _iterator19 = _createForOfIteratorHelper(i.removed),
            _step19;

        try {
          for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
            var _t46 = _step19.value;
            e && this.adapter.setSelectedStateForElementIndex(_t46, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(_t46, !1);
          }
        } catch (err) {
          _iterator19.e(err);
        } finally {
          _iterator19.f();
        }

        var _iterator20 = _createForOfIteratorHelper(i.added),
            _step20;

        try {
          for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
            var _t47 = _step20.value;
            e && this.adapter.setSelectedStateForElementIndex(_t47, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(_t47, !0);
          }
        } catch (err) {
          _iterator20.e(err);
        } finally {
          _iterator20.f();
        }

        this.selectedIndex_ = t, this.adapter.notifySelected(t, i);
      }
    }
  }, {
    key: "setAriaForSingleSelectionAtIndex_",
    value: function setAriaForSingleSelectionAtIndex_(t) {
      this.selectedIndex_ === Ge.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(t, je.ARIA_CURRENT));
      var e = null !== this.ariaCurrentAttrValue_,
          i = e ? je.ARIA_CURRENT : je.ARIA_SELECTED;
      this.selectedIndex_ !== Ge.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, i, "false");
      var r = e ? this.ariaCurrentAttrValue_ : "true";
      this.adapter.setAttributeForElementIndex(t, i, r);
    }
  }, {
    key: "setTabindexAtIndex_",
    value: function setTabindexAtIndex_(t) {
      this.focusedItemIndex_ === Ge.UNSET_INDEX && 0 !== t ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== t && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(t, 0);
    }
  }, {
    key: "setTabindexToFirstSelectedItem_",
    value: function setTabindexToFirstSelectedItem_() {
      var t = 0;
      "number" == typeof this.selectedIndex_ && this.selectedIndex_ !== Ge.UNSET_INDEX ? t = this.selectedIndex_ : We(this.selectedIndex_) && this.selectedIndex_.size > 0 && (t = Math.min.apply(Math, _toConsumableArray(this.selectedIndex_))), this.setTabindexAtIndex_(t);
    }
  }, {
    key: "isIndexValid_",
    value: function isIndexValid_(t) {
      if (t instanceof Set) {
        if (!this.isMulti_) throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
        if (0 === t.size) return !0;
        {
          var _e26 = !1;

          var _iterator21 = _createForOfIteratorHelper(t),
              _step21;

          try {
            for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
              var _i17 = _step21.value;
              if (_e26 = this.isIndexInRange_(_i17), _e26) break;
            }
          } catch (err) {
            _iterator21.e(err);
          } finally {
            _iterator21.f();
          }

          return _e26;
        }
      }

      if ("number" == typeof t) {
        if (this.isMulti_) throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + t);
        return t === Ge.UNSET_INDEX || this.isIndexInRange_(t);
      }

      return !1;
    }
  }, {
    key: "isIndexInRange_",
    value: function isIndexInRange_(t) {
      var e = this.adapter.getListItemCount();
      return t >= 0 && t < e;
    }
  }, {
    key: "setSelectedIndexOnAction_",
    value: function setSelectedIndexOnAction_(t, e, i) {
      if (this.adapter.getDisabledStateForElementIndex(t)) return;
      var r = t;

      if (this.isMulti_ && (r = new Set([t])), this.isIndexValid_(r)) {
        if (this.isMulti_) this.toggleMultiAtIndex(t, i, e);else if (e || i) this.setSingleSelectionAtIndex_(t, e);else {
          this.selectedIndex_ === t && this.setSingleSelectionAtIndex_(Ge.UNSET_INDEX);
        }
        e && this.adapter.notifyAction(t);
      }
    }
  }, {
    key: "toggleMultiAtIndex",
    value: function toggleMultiAtIndex(t, e) {
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
      var r = !1;
      r = void 0 === e ? !this.adapter.getSelectedStateForElementIndex(t) : e;
      var n = qe(this.selectedIndex_);
      r ? n.add(t) : n.delete(t), this.setMultiSelectionAtIndex_(n, i);
    }
  }], [{
    key: "strings",
    get: function get() {
      return je;
    }
  }, {
    key: "numbers",
    get: function get() {
      return Ge;
    }
  }, {
    key: "defaultAdapter",
    get: function get() {
      return {
        focusItemAtIndex: function focusItemAtIndex() {},
        getFocusedElementIndex: function getFocusedElementIndex() {
          return 0;
        },
        getListItemCount: function getListItemCount() {
          return 0;
        },
        isFocusInsideList: function isFocusInsideList() {
          return !1;
        },
        isRootFocused: function isRootFocused() {
          return !1;
        },
        notifyAction: function notifyAction() {},
        notifySelected: function notifySelected() {},
        getSelectedStateForElementIndex: function getSelectedStateForElementIndex() {
          return !1;
        },
        setDisabledStateForElementIndex: function setDisabledStateForElementIndex() {},
        getDisabledStateForElementIndex: function getDisabledStateForElementIndex() {
          return !1;
        },
        setSelectedStateForElementIndex: function setSelectedStateForElementIndex() {},
        setActivatedStateForElementIndex: function setActivatedStateForElementIndex() {},
        setTabIndexForElementIndex: function setTabIndexForElementIndex() {},
        setAttributeForElementIndex: function setAttributeForElementIndex() {},
        getAttributeForElementIndex: function getAttributeForElementIndex() {
          return null;
        }
      };
    }
  }]);

  return Ye;
}(St);

exports.G = Ye;
var Ke = dt(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral([":host(:not([twoline])){height:56px}:host(:not([left])) .mdc-list-item__meta{height:40px;width:40px}"])));
exports.U = Ke;

var _Qe = function Qe(t, e) {
  return (_Qe = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (t, e) {
    t.__proto__ = e;
  } || function (t, e) {
    for (var i in e) {
      e.hasOwnProperty(i) && (t[i] = e[i]);
    }
  })(t, e);
};

function Je(t, e) {
  function i() {
    this.constructor = t;
  }

  _Qe(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}

var _Ze = function Ze() {
  return (_Ze = Object.assign || function (t) {
    for (var e, i = 1, r = arguments.length; i < r; i++) {
      for (var n in e = arguments[i]) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    }

    return t;
  }).apply(this, arguments);
},
    ti = {
  ACTIVE: "mdc-tab-indicator--active",
  FADE: "mdc-tab-indicator--fade",
  NO_TRANSITION: "mdc-tab-indicator--no-transition"
},
    ei = {
  CONTENT_SELECTOR: ".mdc-tab-indicator__content"
},
    ii = function (t) {
  function e(i) {
    return t.call(this, _Ze(_Ze({}, e.defaultAdapter), i)) || this;
  }

  return Je(e, t), Object.defineProperty(e, "cssClasses", {
    get: function get() {
      return ti;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "strings", {
    get: function get() {
      return ei;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "defaultAdapter", {
    get: function get() {
      return {
        addClass: function addClass() {},
        removeClass: function removeClass() {},
        computeContentClientRect: function computeContentClientRect() {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
          };
        },
        setContentStyleProperty: function setContentStyleProperty() {}
      };
    },
    enumerable: !0,
    configurable: !0
  }), e.prototype.computeContentClientRect = function () {
    return this.adapter.computeContentClientRect();
  }, e;
}(St),
    _ri = function ri(t, e) {
  return (_ri = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (t, e) {
    t.__proto__ = e;
  } || function (t, e) {
    for (var i in e) {
      e.hasOwnProperty(i) && (t[i] = e[i]);
    }
  })(t, e);
};

exports.W = ii;

function ni(t, e) {
  function i() {
    this.constructor = t;
  }

  _ri(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}

var _oi = function oi() {
  return (exports.$ = _oi = Object.assign || function (t) {
    for (var e, i = 1, r = arguments.length; i < r; i++) {
      for (var n in e = arguments[i]) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    }

    return t;
  }).apply(this, arguments);
};

exports.$ = _oi;

function ai(t, e) {
  var i = "function" == typeof Symbol && t[Symbol.iterator];
  if (!i) return t;
  var r,
      n,
      o = i.call(t),
      a = [];

  try {
    for (; (void 0 === e || e-- > 0) && !(r = o.next()).done;) {
      a.push(r.value);
    }
  } catch (t) {
    n = {
      error: t
    };
  } finally {
    try {
      r && !r.done && (i = o.return) && i.call(o);
    } finally {
      if (n) throw n.error;
    }
  }

  return a;
}

var di = function di(t) {
  this.adapter = t;
},
    _si = function si(t, e) {
  return (_si = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (t, e) {
    t.__proto__ = e;
  } || function (t, e) {
    for (var i in e) {
      e.hasOwnProperty(i) && (t[i] = e[i]);
    }
  })(t, e);
};

exports.Y = di;

var _li = function li() {
  return (_li = Object.assign || function (t) {
    for (var e, i = 1, r = arguments.length; i < r; i++) {
      for (var n in e = arguments[i]) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    }

    return t;
  }).apply(this, arguments);
},
    ci = {
  CLOSING: "mdc-snackbar--closing",
  OPEN: "mdc-snackbar--open",
  OPENING: "mdc-snackbar--opening"
},
    pi = {
  ACTION_SELECTOR: ".mdc-snackbar__action",
  ARIA_LIVE_LABEL_TEXT_ATTR: "data-mdc-snackbar-label-text",
  CLOSED_EVENT: "MDCSnackbar:closed",
  CLOSING_EVENT: "MDCSnackbar:closing",
  DISMISS_SELECTOR: ".mdc-snackbar__dismiss",
  LABEL_SELECTOR: ".mdc-snackbar__label",
  OPENED_EVENT: "MDCSnackbar:opened",
  OPENING_EVENT: "MDCSnackbar:opening",
  REASON_ACTION: "action",
  REASON_DISMISS: "dismiss",
  SURFACE_SELECTOR: ".mdc-snackbar__surface"
},
    hi = {
  DEFAULT_AUTO_DISMISS_TIMEOUT_MS: 5e3,
  INDETERMINATE: -1,
  MAX_AUTO_DISMISS_TIMEOUT_MS: 1e4,
  MIN_AUTO_DISMISS_TIMEOUT_MS: 4e3,
  SNACKBAR_ANIMATION_CLOSE_TIME_MS: 75,
  SNACKBAR_ANIMATION_OPEN_TIME_MS: 150,
  ARIA_LIVE_DELAY_MS: 1e3
},
    mi = ci.OPENING,
    ui = ci.OPEN,
    fi = ci.CLOSING,
    gi = pi.REASON_ACTION,
    _i = pi.REASON_DISMISS,
    bi = function (t) {
  function e(i) {
    var r = t.call(this, _li(_li({}, e.defaultAdapter), i)) || this;
    return r.isOpen_ = !1, r.animationFrame_ = 0, r.animationTimer_ = 0, r.autoDismissTimer_ = 0, r.autoDismissTimeoutMs_ = hi.DEFAULT_AUTO_DISMISS_TIMEOUT_MS, r.closeOnEscape_ = !0, r;
  }

  return function (t, e) {
    function i() {
      this.constructor = t;
    }

    _si(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
  }(e, t), Object.defineProperty(e, "cssClasses", {
    get: function get() {
      return ci;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "strings", {
    get: function get() {
      return pi;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "numbers", {
    get: function get() {
      return hi;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "defaultAdapter", {
    get: function get() {
      return {
        addClass: function addClass() {},
        announce: function announce() {},
        notifyClosed: function notifyClosed() {},
        notifyClosing: function notifyClosing() {},
        notifyOpened: function notifyOpened() {},
        notifyOpening: function notifyOpening() {},
        removeClass: function removeClass() {}
      };
    },
    enumerable: !0,
    configurable: !0
  }), e.prototype.destroy = function () {
    this.clearAutoDismissTimer_(), cancelAnimationFrame(this.animationFrame_), this.animationFrame_ = 0, clearTimeout(this.animationTimer_), this.animationTimer_ = 0, this.adapter.removeClass(mi), this.adapter.removeClass(ui), this.adapter.removeClass(fi);
  }, e.prototype.open = function () {
    var t = this;
    this.clearAutoDismissTimer_(), this.isOpen_ = !0, this.adapter.notifyOpening(), this.adapter.removeClass(fi), this.adapter.addClass(mi), this.adapter.announce(), this.runNextAnimationFrame_(function () {
      t.adapter.addClass(ui), t.animationTimer_ = setTimeout(function () {
        var e = t.getTimeoutMs();
        t.handleAnimationTimerEnd_(), t.adapter.notifyOpened(), e !== hi.INDETERMINATE && (t.autoDismissTimer_ = setTimeout(function () {
          t.close(_i);
        }, e));
      }, hi.SNACKBAR_ANIMATION_OPEN_TIME_MS);
    });
  }, e.prototype.close = function (t) {
    var e = this;
    void 0 === t && (t = ""), this.isOpen_ && (cancelAnimationFrame(this.animationFrame_), this.animationFrame_ = 0, this.clearAutoDismissTimer_(), this.isOpen_ = !1, this.adapter.notifyClosing(t), this.adapter.addClass(ci.CLOSING), this.adapter.removeClass(ci.OPEN), this.adapter.removeClass(ci.OPENING), clearTimeout(this.animationTimer_), this.animationTimer_ = setTimeout(function () {
      e.handleAnimationTimerEnd_(), e.adapter.notifyClosed(t);
    }, hi.SNACKBAR_ANIMATION_CLOSE_TIME_MS));
  }, e.prototype.isOpen = function () {
    return this.isOpen_;
  }, e.prototype.getTimeoutMs = function () {
    return this.autoDismissTimeoutMs_;
  }, e.prototype.setTimeoutMs = function (t) {
    var e = hi.MIN_AUTO_DISMISS_TIMEOUT_MS,
        i = hi.MAX_AUTO_DISMISS_TIMEOUT_MS;
    if (!(t === hi.INDETERMINATE || t <= i && t >= e)) throw new Error("\n        timeoutMs must be an integer in the range " + e + "–" + i + "\n        (or " + hi.INDETERMINATE + " to disable), but got '" + t + "'");
    this.autoDismissTimeoutMs_ = t;
  }, e.prototype.getCloseOnEscape = function () {
    return this.closeOnEscape_;
  }, e.prototype.setCloseOnEscape = function (t) {
    this.closeOnEscape_ = t;
  }, e.prototype.handleKeyDown = function (t) {
    ("Escape" === t.key || 27 === t.keyCode) && this.getCloseOnEscape() && this.close(_i);
  }, e.prototype.handleActionButtonClick = function (t) {
    this.close(gi);
  }, e.prototype.handleActionIconClick = function (t) {
    this.close(_i);
  }, e.prototype.clearAutoDismissTimer_ = function () {
    clearTimeout(this.autoDismissTimer_), this.autoDismissTimer_ = 0;
  }, e.prototype.handleAnimationTimerEnd_ = function () {
    this.animationTimer_ = 0, this.adapter.removeClass(ci.OPENING), this.adapter.removeClass(ci.CLOSING);
  }, e.prototype.runNextAnimationFrame_ = function (t) {
    var e = this;
    cancelAnimationFrame(this.animationFrame_), this.animationFrame_ = requestAnimationFrame(function () {
      e.animationFrame_ = 0, clearTimeout(e.animationTimer_), e.animationTimer_ = setTimeout(t, 0);
    });
  }, e;
}(St),
    _xi = function xi(t, e) {
  return (_xi = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (t, e) {
    t.__proto__ = e;
  } || function (t, e) {
    for (var i in e) {
      e.hasOwnProperty(i) && (t[i] = e[i]);
    }
  })(t, e);
};

exports.a1 = bi;

var _vi = function vi() {
  return (_vi = Object.assign || function (t) {
    for (var e, i = 1, r = arguments.length; i < r; i++) {
      for (var n in e = arguments[i]) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    }

    return t;
  }).apply(this, arguments);
},
    yi = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
},
    Ei = {
  NOTCH_ELEMENT_PADDING: 8
},
    wi = {
  NO_LABEL: "mdc-notched-outline--no-label",
  OUTLINE_NOTCHED: "mdc-notched-outline--notched",
  OUTLINE_UPGRADED: "mdc-notched-outline--upgraded"
},
    Ti = function (t) {
  function e(i) {
    return t.call(this, _vi(_vi({}, e.defaultAdapter), i)) || this;
  }

  return function (t, e) {
    function i() {
      this.constructor = t;
    }

    _xi(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
  }(e, t), Object.defineProperty(e, "strings", {
    get: function get() {
      return yi;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "cssClasses", {
    get: function get() {
      return wi;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "numbers", {
    get: function get() {
      return Ei;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "defaultAdapter", {
    get: function get() {
      return {
        addClass: function addClass() {},
        removeClass: function removeClass() {},
        setNotchWidthProperty: function setNotchWidthProperty() {},
        removeNotchWidthProperty: function removeNotchWidthProperty() {}
      };
    },
    enumerable: !0,
    configurable: !0
  }), e.prototype.notch = function (t) {
    var i = e.cssClasses.OUTLINE_NOTCHED;
    t > 0 && (t += Ei.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(i);
  }, e.prototype.closeNotch = function () {
    var t = e.cssClasses.OUTLINE_NOTCHED;
    this.adapter.removeClass(t), this.adapter.removeNotchWidthProperty();
  }, e;
}(St);

var Ii = /*#__PURE__*/function (_wt4) {
  _inherits(Ii, _wt4);

  var _super15 = _createSuper(Ii);

  function Ii() {
    var _this29;

    _classCallCheck(this, Ii);

    _this29 = _super15.apply(this, arguments), _this29.mdcFoundationClass = Ti, _this29.width = 0, _this29.open = !1, _this29.lastOpen = _this29.open;
    return _this29;
  }

  _createClass(Ii, [{
    key: "createAdapter",
    value: function createAdapter() {
      var _this30 = this;

      return {
        addClass: function addClass(t) {
          return _this30.mdcRoot.classList.add(t);
        },
        removeClass: function removeClass(t) {
          return _this30.mdcRoot.classList.remove(t);
        },
        setNotchWidthProperty: function setNotchWidthProperty(t) {
          return _this30.notchElement.style.setProperty("width", t + "px");
        },
        removeNotchWidthProperty: function removeNotchWidthProperty() {
          return _this30.notchElement.style.removeProperty("width");
        }
      };
    }
  }, {
    key: "openOrClose",
    value: function openOrClose(t, e) {
      this.mdcFoundation && (t && void 0 !== e ? this.mdcFoundation.notch(e) : this.mdcFoundation.closeNotch());
    }
  }, {
    key: "render",
    value: function render() {
      this.openOrClose(this.open, this.width);
      var t = Dt({
        "mdc-notched-outline--notched": this.open
      });
      return z(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n      <span class=\"mdc-notched-outline ", "\">\n        <span class=\"mdc-notched-outline__leading\"></span>\n        <span class=\"mdc-notched-outline__notch\">\n          <slot></slot>\n        </span>\n        <span class=\"mdc-notched-outline__trailing\"></span>\n      </span>"])), t);
    }
  }]);

  return Ii;
}(wt);

t([Z(".mdc-notched-outline")], Ii.prototype, "mdcRoot", void 0), t([Q({
  type: Number
})], Ii.prototype, "width", void 0), t([Q({
  type: Boolean,
  reflect: !0
})], Ii.prototype, "open", void 0), t([Z(".mdc-notched-outline__notch")], Ii.prototype, "notchElement", void 0);
var Si = dt(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral([".mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host[dir=rtl]{text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / .75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}"])));

var Ai = /*#__PURE__*/function (_Ii) {
  _inherits(Ai, _Ii);

  var _super16 = _createSuper(Ai);

  function Ai() {
    _classCallCheck(this, Ai);

    return _super16.apply(this, arguments);
  }

  return _createClass(Ai);
}(Ii);

Ai.styles = Si, Ai = t([Y("mwc-notched-outline")], Ai);

var _Oi = function Oi(t, e) {
  return (_Oi = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (t, e) {
    t.__proto__ = e;
  } || function (t, e) {
    for (var i in e) {
      e.hasOwnProperty(i) && (t[i] = e[i]);
    }
  })(t, e);
};

var _Ci = function Ci() {
  return (_Ci = Object.assign || function (t) {
    for (var e, i = 1, r = arguments.length; i < r; i++) {
      for (var n in e = arguments[i]) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    }

    return t;
  }).apply(this, arguments);
},
    Ni = {
  LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
  LABEL_REQUIRED: "mdc-floating-label--required",
  LABEL_SHAKE: "mdc-floating-label--shake",
  ROOT: "mdc-floating-label"
},
    Ri = function (t) {
  function e(i) {
    var r = t.call(this, _Ci(_Ci({}, e.defaultAdapter), i)) || this;
    return r.shakeAnimationEndHandler_ = function () {
      return r.handleShakeAnimationEnd_();
    }, r;
  }

  return function (t, e) {
    function i() {
      this.constructor = t;
    }

    _Oi(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
  }(e, t), Object.defineProperty(e, "cssClasses", {
    get: function get() {
      return Ni;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "defaultAdapter", {
    get: function get() {
      return {
        addClass: function addClass() {},
        removeClass: function removeClass() {},
        getWidth: function getWidth() {
          return 0;
        },
        registerInteractionHandler: function registerInteractionHandler() {},
        deregisterInteractionHandler: function deregisterInteractionHandler() {}
      };
    },
    enumerable: !0,
    configurable: !0
  }), e.prototype.init = function () {
    this.adapter.registerInteractionHandler("animationend", this.shakeAnimationEndHandler_);
  }, e.prototype.destroy = function () {
    this.adapter.deregisterInteractionHandler("animationend", this.shakeAnimationEndHandler_);
  }, e.prototype.getWidth = function () {
    return this.adapter.getWidth();
  }, e.prototype.shake = function (t) {
    var i = e.cssClasses.LABEL_SHAKE;
    t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
  }, e.prototype.float = function (t) {
    var i = e.cssClasses,
        r = i.LABEL_FLOAT_ABOVE,
        n = i.LABEL_SHAKE;
    t ? this.adapter.addClass(r) : (this.adapter.removeClass(r), this.adapter.removeClass(n));
  }, e.prototype.setRequired = function (t) {
    var i = e.cssClasses.LABEL_REQUIRED;
    t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
  }, e.prototype.handleShakeAnimationEnd_ = function () {
    var t = e.cssClasses.LABEL_SHAKE;
    this.adapter.removeClass(t);
  }, e;
}(St);

var Li = new WeakMap(),
    ki = f(function (t) {
  return function (e) {
    if (!Li.get(e)) {
      var _i18 = e.committer.element;

      _i18.classList.add("mdc-floating-label");

      var _r9 = function (t) {
        return {
          addClass: function addClass(e) {
            return t.classList.add(e);
          },
          removeClass: function removeClass(e) {
            return t.classList.remove(e);
          },
          getWidth: function getWidth() {
            return t.scrollWidth;
          },
          registerInteractionHandler: function registerInteractionHandler(e, i) {
            t.addEventListener(e, i);
          },
          deregisterInteractionHandler: function deregisterInteractionHandler(e, i) {
            t.removeEventListener(e, i);
          }
        };
      }(_i18),
          _n8 = new Ri(_r9);

      _n8.init(), e.setValue(_n8), Li.set(e, {
        label: t,
        foundation: _n8
      });
    }
  };
});
exports.aa = ki;

var _Pi = function Pi(t, e) {
  return (_Pi = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (t, e) {
    t.__proto__ = e;
  } || function (t, e) {
    for (var i in e) {
      e.hasOwnProperty(i) && (t[i] = e[i]);
    }
  })(t, e);
};

var _Fi = function Fi() {
  return (_Fi = Object.assign || function (t) {
    for (var e, i = 1, r = arguments.length; i < r; i++) {
      for (var n in e = arguments[i]) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    }

    return t;
  }).apply(this, arguments);
},
    Di = {
  LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active",
  LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating"
},
    Mi = function (t) {
  function e(i) {
    var r = t.call(this, _Fi(_Fi({}, e.defaultAdapter), i)) || this;
    return r.transitionEndHandler_ = function (t) {
      return r.handleTransitionEnd(t);
    }, r;
  }

  return function (t, e) {
    function i() {
      this.constructor = t;
    }

    _Pi(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
  }(e, t), Object.defineProperty(e, "cssClasses", {
    get: function get() {
      return Di;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "defaultAdapter", {
    get: function get() {
      return {
        addClass: function addClass() {},
        removeClass: function removeClass() {},
        hasClass: function hasClass() {
          return !1;
        },
        setStyle: function setStyle() {},
        registerEventHandler: function registerEventHandler() {},
        deregisterEventHandler: function deregisterEventHandler() {}
      };
    },
    enumerable: !0,
    configurable: !0
  }), e.prototype.init = function () {
    this.adapter.registerEventHandler("transitionend", this.transitionEndHandler_);
  }, e.prototype.destroy = function () {
    this.adapter.deregisterEventHandler("transitionend", this.transitionEndHandler_);
  }, e.prototype.activate = function () {
    this.adapter.removeClass(Di.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(Di.LINE_RIPPLE_ACTIVE);
  }, e.prototype.setRippleCenter = function (t) {
    this.adapter.setStyle("transform-origin", t + "px center");
  }, e.prototype.deactivate = function () {
    this.adapter.addClass(Di.LINE_RIPPLE_DEACTIVATING);
  }, e.prototype.handleTransitionEnd = function (t) {
    var e = this.adapter.hasClass(Di.LINE_RIPPLE_DEACTIVATING);
    "opacity" === t.propertyName && e && (this.adapter.removeClass(Di.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(Di.LINE_RIPPLE_DEACTIVATING));
  }, e;
}(St);

var zi = new WeakMap(),
    Hi = f(function () {
  return function (t) {
    if (!zi.get(t)) {
      var _e27 = t.committer.element;

      _e27.classList.add("mdc-line-ripple");

      var _i19 = function (t) {
        return {
          addClass: function addClass(e) {
            return t.classList.add(e);
          },
          removeClass: function removeClass(e) {
            return t.classList.remove(e);
          },
          hasClass: function hasClass(e) {
            return t.classList.contains(e);
          },
          setStyle: function setStyle(e, i) {
            return t.style.setProperty(e, i);
          },
          registerEventHandler: function registerEventHandler(e, i) {
            t.addEventListener(e, i);
          },
          deregisterEventHandler: function deregisterEventHandler(e, i) {
            t.removeEventListener(e, i);
          }
        };
      }(_e27),
          _r10 = new Mi(_i19);

      _r10.init(), t.setValue(_r10), zi.set(t, _r10);
    }
  };
});
exports.ab = Hi;

var _Vi = function Vi(t, e) {
  return (_Vi = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (t, e) {
    t.__proto__ = e;
  } || function (t, e) {
    for (var i in e) {
      e.hasOwnProperty(i) && (t[i] = e[i]);
    }
  })(t, e);
};

var _Bi = function Bi() {
  return (_Bi = Object.assign || function (t) {
    for (var e, i = 1, r = arguments.length; i < r; i++) {
      for (var n in e = arguments[i]) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    }

    return t;
  }).apply(this, arguments);
},
    Ui = {
  ARIA_CONTROLS: "aria-controls",
  ARIA_DESCRIBEDBY: "aria-describedby",
  INPUT_SELECTOR: ".mdc-text-field__input",
  LABEL_SELECTOR: ".mdc-floating-label",
  LEADING_ICON_SELECTOR: ".mdc-text-field__icon--leading",
  LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
  OUTLINE_SELECTOR: ".mdc-notched-outline",
  PREFIX_SELECTOR: ".mdc-text-field__affix--prefix",
  SUFFIX_SELECTOR: ".mdc-text-field__affix--suffix",
  TRAILING_ICON_SELECTOR: ".mdc-text-field__icon--trailing"
},
    ji = {
  DISABLED: "mdc-text-field--disabled",
  FOCUSED: "mdc-text-field--focused",
  HELPER_LINE: "mdc-text-field-helper-line",
  INVALID: "mdc-text-field--invalid",
  LABEL_FLOATING: "mdc-text-field--label-floating",
  NO_LABEL: "mdc-text-field--no-label",
  OUTLINED: "mdc-text-field--outlined",
  ROOT: "mdc-text-field",
  TEXTAREA: "mdc-text-field--textarea",
  WITH_LEADING_ICON: "mdc-text-field--with-leading-icon",
  WITH_TRAILING_ICON: "mdc-text-field--with-trailing-icon"
},
    Gi = {
  LABEL_SCALE: .75
},
    $i = ["pattern", "min", "max", "required", "step", "minlength", "maxlength"],
    Wi = ["color", "date", "datetime-local", "month", "range", "time", "week"],
    Xi = ["mousedown", "touchstart"],
    qi = ["click", "keydown"],
    Yi = function (t) {
  function e(i, r) {
    void 0 === r && (r = {});
    var n = t.call(this, _Bi(_Bi({}, e.defaultAdapter), i)) || this;
    return n.isFocused_ = !1, n.receivedUserInput_ = !1, n.isValid_ = !0, n.useNativeValidation_ = !0, n.validateOnValueChange_ = !0, n.helperText_ = r.helperText, n.characterCounter_ = r.characterCounter, n.leadingIcon_ = r.leadingIcon, n.trailingIcon_ = r.trailingIcon, n.inputFocusHandler_ = function () {
      return n.activateFocus();
    }, n.inputBlurHandler_ = function () {
      return n.deactivateFocus();
    }, n.inputInputHandler_ = function () {
      return n.handleInput();
    }, n.setPointerXOffset_ = function (t) {
      return n.setTransformOrigin(t);
    }, n.textFieldInteractionHandler_ = function () {
      return n.handleTextFieldInteraction();
    }, n.validationAttributeChangeHandler_ = function (t) {
      return n.handleValidationAttributeChange(t);
    }, n;
  }

  return function (t, e) {
    function i() {
      this.constructor = t;
    }

    _Vi(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
  }(e, t), Object.defineProperty(e, "cssClasses", {
    get: function get() {
      return ji;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "strings", {
    get: function get() {
      return Ui;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "numbers", {
    get: function get() {
      return Gi;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e.prototype, "shouldAlwaysFloat_", {
    get: function get() {
      var t = this.getNativeInput_().type;
      return Wi.indexOf(t) >= 0;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e.prototype, "shouldFloat", {
    get: function get() {
      return this.shouldAlwaysFloat_ || this.isFocused_ || !!this.getValue() || this.isBadInput_();
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e.prototype, "shouldShake", {
    get: function get() {
      return !this.isFocused_ && !this.isValid() && !!this.getValue();
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "defaultAdapter", {
    get: function get() {
      return {
        addClass: function addClass() {},
        removeClass: function removeClass() {},
        hasClass: function hasClass() {
          return !0;
        },
        setInputAttr: function setInputAttr() {},
        removeInputAttr: function removeInputAttr() {},
        registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler() {},
        deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler() {},
        registerInputInteractionHandler: function registerInputInteractionHandler() {},
        deregisterInputInteractionHandler: function deregisterInputInteractionHandler() {},
        registerValidationAttributeChangeHandler: function registerValidationAttributeChangeHandler() {
          return new MutationObserver(function () {});
        },
        deregisterValidationAttributeChangeHandler: function deregisterValidationAttributeChangeHandler() {},
        getNativeInput: function getNativeInput() {
          return null;
        },
        isFocused: function isFocused() {
          return !1;
        },
        activateLineRipple: function activateLineRipple() {},
        deactivateLineRipple: function deactivateLineRipple() {},
        setLineRippleTransformOrigin: function setLineRippleTransformOrigin() {},
        shakeLabel: function shakeLabel() {},
        floatLabel: function floatLabel() {},
        setLabelRequired: function setLabelRequired() {},
        hasLabel: function hasLabel() {
          return !1;
        },
        getLabelWidth: function getLabelWidth() {
          return 0;
        },
        hasOutline: function hasOutline() {
          return !1;
        },
        notchOutline: function notchOutline() {},
        closeOutline: function closeOutline() {}
      };
    },
    enumerable: !0,
    configurable: !0
  }), e.prototype.init = function () {
    var t = this;
    this.adapter.hasLabel() && this.getNativeInput_().required && this.adapter.setLabelRequired(!0), this.adapter.isFocused() ? this.inputFocusHandler_() : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter.floatLabel(!0), this.styleFloating_(!0)), this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler_), this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler_), this.adapter.registerInputInteractionHandler("input", this.inputInputHandler_), Xi.forEach(function (e) {
      t.adapter.registerInputInteractionHandler(e, t.setPointerXOffset_);
    }), qi.forEach(function (e) {
      t.adapter.registerTextFieldInteractionHandler(e, t.textFieldInteractionHandler_);
    }), this.validationObserver_ = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_), this.setCharacterCounter_(this.getValue().length);
  }, e.prototype.destroy = function () {
    var t = this;
    this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler_), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler_), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler_), Xi.forEach(function (e) {
      t.adapter.deregisterInputInteractionHandler(e, t.setPointerXOffset_);
    }), qi.forEach(function (e) {
      t.adapter.deregisterTextFieldInteractionHandler(e, t.textFieldInteractionHandler_);
    }), this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver_);
  }, e.prototype.handleTextFieldInteraction = function () {
    var t = this.adapter.getNativeInput();
    t && t.disabled || (this.receivedUserInput_ = !0);
  }, e.prototype.handleValidationAttributeChange = function (t) {
    var e = this;
    t.some(function (t) {
      return $i.indexOf(t) > -1 && (e.styleValidity_(!0), e.adapter.setLabelRequired(e.getNativeInput_().required), !0);
    }), t.indexOf("maxlength") > -1 && this.setCharacterCounter_(this.getValue().length);
  }, e.prototype.notchOutline = function (t) {
    if (this.adapter.hasOutline() && this.adapter.hasLabel()) if (t) {
      var e = this.adapter.getLabelWidth() * Gi.LABEL_SCALE;
      this.adapter.notchOutline(e);
    } else this.adapter.closeOutline();
  }, e.prototype.activateFocus = function () {
    this.isFocused_ = !0, this.styleFocused_(this.isFocused_), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating_(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), !this.helperText_ || !this.helperText_.isPersistent() && this.helperText_.isValidation() && this.isValid_ || this.helperText_.showToScreenReader();
  }, e.prototype.setTransformOrigin = function (t) {
    if (!this.isDisabled() && !this.adapter.hasOutline()) {
      var e = t.touches,
          i = e ? e[0] : t,
          r = i.target.getBoundingClientRect(),
          n = i.clientX - r.left;
      this.adapter.setLineRippleTransformOrigin(n);
    }
  }, e.prototype.handleInput = function () {
    this.autoCompleteFocus(), this.setCharacterCounter_(this.getValue().length);
  }, e.prototype.autoCompleteFocus = function () {
    this.receivedUserInput_ || this.activateFocus();
  }, e.prototype.deactivateFocus = function () {
    this.isFocused_ = !1, this.adapter.deactivateLineRipple();
    var t = this.isValid();
    this.styleValidity_(t), this.styleFocused_(this.isFocused_), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating_(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.shouldFloat || (this.receivedUserInput_ = !1);
  }, e.prototype.getValue = function () {
    return this.getNativeInput_().value;
  }, e.prototype.setValue = function (t) {
    if (this.getValue() !== t && (this.getNativeInput_().value = t), this.setCharacterCounter_(t.length), this.validateOnValueChange_) {
      var e = this.isValid();
      this.styleValidity_(e);
    }

    this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating_(this.shouldFloat), this.validateOnValueChange_ && this.adapter.shakeLabel(this.shouldShake));
  }, e.prototype.isValid = function () {
    return this.useNativeValidation_ ? this.isNativeInputValid_() : this.isValid_;
  }, e.prototype.setValid = function (t) {
    this.isValid_ = t, this.styleValidity_(t);
    var e = !t && !this.isFocused_ && !!this.getValue();
    this.adapter.hasLabel() && this.adapter.shakeLabel(e);
  }, e.prototype.setValidateOnValueChange = function (t) {
    this.validateOnValueChange_ = t;
  }, e.prototype.getValidateOnValueChange = function () {
    return this.validateOnValueChange_;
  }, e.prototype.setUseNativeValidation = function (t) {
    this.useNativeValidation_ = t;
  }, e.prototype.isDisabled = function () {
    return this.getNativeInput_().disabled;
  }, e.prototype.setDisabled = function (t) {
    this.getNativeInput_().disabled = t, this.styleDisabled_(t);
  }, e.prototype.setHelperTextContent = function (t) {
    this.helperText_ && this.helperText_.setContent(t);
  }, e.prototype.setLeadingIconAriaLabel = function (t) {
    this.leadingIcon_ && this.leadingIcon_.setAriaLabel(t);
  }, e.prototype.setLeadingIconContent = function (t) {
    this.leadingIcon_ && this.leadingIcon_.setContent(t);
  }, e.prototype.setTrailingIconAriaLabel = function (t) {
    this.trailingIcon_ && this.trailingIcon_.setAriaLabel(t);
  }, e.prototype.setTrailingIconContent = function (t) {
    this.trailingIcon_ && this.trailingIcon_.setContent(t);
  }, e.prototype.setCharacterCounter_ = function (t) {
    if (this.characterCounter_) {
      var e = this.getNativeInput_().maxLength;
      if (-1 === e) throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
      this.characterCounter_.setCounterValue(t, e);
    }
  }, e.prototype.isBadInput_ = function () {
    return this.getNativeInput_().validity.badInput || !1;
  }, e.prototype.isNativeInputValid_ = function () {
    return this.getNativeInput_().validity.valid;
  }, e.prototype.styleValidity_ = function (t) {
    var i = e.cssClasses.INVALID;

    if (t ? this.adapter.removeClass(i) : this.adapter.addClass(i), this.helperText_) {
      if (this.helperText_.setValidity(t), !this.helperText_.isValidation()) return;
      var r = this.helperText_.isVisible(),
          n = this.helperText_.getId();
      r && n ? this.adapter.setInputAttr(Ui.ARIA_DESCRIBEDBY, n) : this.adapter.removeInputAttr(Ui.ARIA_DESCRIBEDBY);
    }
  }, e.prototype.styleFocused_ = function (t) {
    var i = e.cssClasses.FOCUSED;
    t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
  }, e.prototype.styleDisabled_ = function (t) {
    var i = e.cssClasses,
        r = i.DISABLED,
        n = i.INVALID;
    t ? (this.adapter.addClass(r), this.adapter.removeClass(n)) : this.adapter.removeClass(r), this.leadingIcon_ && this.leadingIcon_.setDisabled(t), this.trailingIcon_ && this.trailingIcon_.setDisabled(t);
  }, e.prototype.styleFloating_ = function (t) {
    var i = e.cssClasses.LABEL_FLOATING;
    t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
  }, e.prototype.getNativeInput_ = function () {
    return (this.adapter ? this.adapter.getNativeInput() : null) || {
      disabled: !1,
      maxLength: -1,
      required: !1,
      type: "input",
      validity: {
        badInput: !1,
        valid: !0
      },
      value: ""
    };
  }, e;
}(St);

var Ki = f(function (t) {
  return function (e) {
    var i;
    if (e instanceof L || e instanceof A) throw new Error("The `live` directive is not allowed on text or event bindings");
    if (e instanceof O) Qi(e.strings), i = e.element.hasAttribute(e.name), e.value = i;else {
      var _e$committer = e.committer,
          _r11 = _e$committer.element,
          _n9 = _e$committer.name,
          _o5 = _e$committer.strings;

      if (Qi(_o5), e instanceof N) {
        if (i = _r11[_n9], i === t) return;
      } else e instanceof S && (i = _r11.getAttribute(_n9));

      if (i === String(t)) return;
    }
    e.setValue(t);
  };
}),
    Qi = function Qi(t) {
  if (2 !== t.length || "" !== t[0] || "" !== t[1]) throw new Error("`live` bindings can only contain a single expression");
},
    Ji = ["touchstart", "touchmove", "scroll", "mousewheel"],
    Zi = function Zi() {
  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var e = {};

  for (var _i20 in t) {
    e[_i20] = t[_i20];
  }

  return Object.assign({
    badInput: !1,
    customError: !1,
    patternMismatch: !1,
    rangeOverflow: !1,
    rangeUnderflow: !1,
    stepMismatch: !1,
    tooLong: !1,
    tooShort: !1,
    typeMismatch: !1,
    valid: !0,
    valueMissing: !1
  }, e);
};

exports.a4 = Ki;

var tr = /*#__PURE__*/function (_Wt) {
  _inherits(tr, _Wt);

  var _super17 = _createSuper(tr);

  function tr() {
    var _this31;

    _classCallCheck(this, tr);

    _this31 = _super17.apply(this, arguments), _this31.mdcFoundationClass = Yi, _this31.value = "", _this31.type = "text", _this31.placeholder = "", _this31.label = "", _this31.icon = "", _this31.iconTrailing = "", _this31.disabled = !1, _this31.required = !1, _this31.minLength = -1, _this31.maxLength = -1, _this31.outlined = !1, _this31.helper = "", _this31.validateOnInitialRender = !1, _this31.validationMessage = "", _this31.autoValidate = !1, _this31.pattern = "", _this31.min = "", _this31.max = "", _this31.step = null, _this31.size = null, _this31.helperPersistent = !1, _this31.charCounter = !1, _this31.endAligned = !1, _this31.prefix = "", _this31.suffix = "", _this31.name = "", _this31.readOnly = !1, _this31.autocapitalize = "", _this31.outlineOpen = !1, _this31.outlineWidth = 0, _this31.isUiValid = !0, _this31.focused = !1, _this31._validity = Zi(), _this31._outlineUpdateComplete = null, _this31.validityTransform = null;
    return _this31;
  }

  _createClass(tr, [{
    key: "validity",
    get: function get() {
      return this._checkValidity(this.value), this._validity;
    }
  }, {
    key: "willValidate",
    get: function get() {
      return this.formElement.willValidate;
    }
  }, {
    key: "selectionStart",
    get: function get() {
      return this.formElement.selectionStart;
    }
  }, {
    key: "selectionEnd",
    get: function get() {
      return this.formElement.selectionEnd;
    }
  }, {
    key: "focus",
    value: function focus() {
      var t = new CustomEvent("focus");
      this.formElement.dispatchEvent(t), this.formElement.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      var t = new CustomEvent("blur");
      this.formElement.dispatchEvent(t), this.formElement.blur();
    }
  }, {
    key: "select",
    value: function select() {
      this.formElement.select();
    }
  }, {
    key: "setSelectionRange",
    value: function setSelectionRange(t, e, i) {
      this.formElement.setSelectionRange(t, e, i);
    }
  }, {
    key: "update",
    value: function update(t) {
      t.has("autoValidate") && this.mdcFoundation && this.mdcFoundation.setValidateOnValueChange(this.autoValidate), t.has("value") && "string" != typeof this.value && (this.value = "" + this.value), _get(_getPrototypeOf(tr.prototype), "update", this).call(this, t);
    }
  }, {
    key: "render",
    value: function render() {
      var t = this.charCounter && -1 !== this.maxLength,
          e = !!this.helper || !!this.validationMessage || t,
          i = {
        "mdc-text-field--disabled": this.disabled,
        "mdc-text-field--no-label": !this.label,
        "mdc-text-field--filled": !this.outlined,
        "mdc-text-field--outlined": this.outlined,
        "mdc-text-field--with-leading-icon": this.icon,
        "mdc-text-field--with-trailing-icon": this.iconTrailing,
        "mdc-text-field--end-aligned": this.endAligned
      };
      return z(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n      <label class=\"mdc-text-field ", "\">\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n      </label>\n      ", "\n    "])), Dt(i), this.renderRipple(), this.outlined ? this.renderOutline() : this.renderLabel(), this.renderLeadingIcon(), this.renderPrefix(), this.renderInput(e), this.renderSuffix(), this.renderTrailingIcon(), this.renderLineRipple(), this.renderHelperText(e, t));
    }
  }, {
    key: "updated",
    value: function updated(t) {
      t.has("value") && void 0 !== t.get("value") && (this.mdcFoundation.setValue(this.value), this.autoValidate && this.reportValidity());
    }
  }, {
    key: "renderRipple",
    value: function renderRipple() {
      return this.outlined ? "" : z(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n      <span class=\"mdc-text-field__ripple\"></span>\n    "])));
    }
  }, {
    key: "renderOutline",
    value: function renderOutline() {
      return this.outlined ? z(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n      <mwc-notched-outline\n          .width=", "\n          .open=", "\n          class=\"mdc-notched-outline\">\n        ", "\n      </mwc-notched-outline>"])), this.outlineWidth, this.outlineOpen, this.renderLabel()) : "";
    }
  }, {
    key: "renderLabel",
    value: function renderLabel() {
      return this.label ? z(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n      <span\n          .floatingLabelFoundation=", "\n          id=\"label\">", "</span>\n    "])), ki(this.label), this.label) : "";
    }
  }, {
    key: "renderLeadingIcon",
    value: function renderLeadingIcon() {
      return this.icon ? this.renderIcon(this.icon) : "";
    }
  }, {
    key: "renderTrailingIcon",
    value: function renderTrailingIcon() {
      return this.iconTrailing ? this.renderIcon(this.iconTrailing, !0) : "";
    }
  }, {
    key: "renderIcon",
    value: function renderIcon(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      return z(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["<i class=\"material-icons mdc-text-field__icon ", "\">", "</i>"])), Dt({
        "mdc-text-field__icon--leading": !e,
        "mdc-text-field__icon--trailing": e
      }), t);
    }
  }, {
    key: "renderPrefix",
    value: function renderPrefix() {
      return this.prefix ? this.renderAffix(this.prefix) : "";
    }
  }, {
    key: "renderSuffix",
    value: function renderSuffix() {
      return this.suffix ? this.renderAffix(this.suffix, !0) : "";
    }
  }, {
    key: "renderAffix",
    value: function renderAffix(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      return z(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["<span class=\"mdc-text-field__affix ", "\">\n        ", "</span>"])), Dt({
        "mdc-text-field__affix--prefix": !e,
        "mdc-text-field__affix--suffix": e
      }), t);
    }
  }, {
    key: "renderInput",
    value: function renderInput(t) {
      var e = -1 === this.minLength ? void 0 : this.minLength,
          i = -1 === this.maxLength ? void 0 : this.maxLength,
          r = this.autocapitalize ? this.autocapitalize : void 0,
          n = this.validationMessage && !this.isUiValid,
          o = t ? "helper-text" : void 0,
          a = this.focused || this.helperPersistent || n ? "helper-text" : void 0,
          d = n ? "helper-text" : void 0;
      return z(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n      <input\n          aria-labelledby=\"label\"\n          aria-controls=\"", "\"\n          aria-describedby=\"", "\"\n          aria-errortext=\"", "\"\n          class=\"mdc-text-field__input\"\n          type=\"", "\"\n          .value=\"", "\"\n          ?disabled=\"", "\"\n          placeholder=\"", "\"\n          ?required=\"", "\"\n          ?readonly=\"", "\"\n          minlength=\"", "\"\n          maxlength=\"", "\"\n          pattern=\"", "\"\n          min=\"", "\"\n          max=\"", "\"\n          step=\"", "\"\n          size=\"", "\"\n          name=\"", "\"\n          inputmode=\"", "\"\n          autocapitalize=\"", "\"\n          @input=\"", "\"\n          @focus=\"", "\"\n          @blur=\"", "\">"])), Gt(o), Gt(a), Gt(d), this.type, Ki(this.value), this.disabled, this.placeholder, this.required, this.readOnly, Gt(e), Gt(i), Gt(this.pattern ? this.pattern : void 0), Gt("" === this.min ? void 0 : this.min), Gt("" === this.max ? void 0 : this.max), Gt(null === this.step ? void 0 : this.step), Gt(null === this.size ? void 0 : this.size), Gt("" === this.name ? void 0 : this.name), Gt(this.inputMode), Gt(r), this.handleInputChange, this.onInputFocus, this.onInputBlur);
    }
  }, {
    key: "renderLineRipple",
    value: function renderLineRipple() {
      return this.outlined ? "" : z(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n      <span .lineRippleFoundation=", "></span>\n    "])), Hi());
    }
  }, {
    key: "renderHelperText",
    value: function renderHelperText(t, e) {
      var i = this.validationMessage && !this.isUiValid,
          r = {
        "mdc-text-field-helper-text--persistent": this.helperPersistent,
        "mdc-text-field-helper-text--validation-msg": i
      },
          n = this.focused || this.helperPersistent || i ? void 0 : "true",
          o = i ? this.validationMessage : this.helper;
      return t ? z(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n      <div class=\"mdc-text-field-helper-line\">\n        <div id=\"helper-text\"\n             aria-hidden=\"", "\"\n             class=\"mdc-text-field-helper-text ", "\"\n             >", "</div>\n        ", "\n      </div>"])), Gt(n), Dt(r), o, this.renderCharCounter(e)) : "";
    }
  }, {
    key: "renderCharCounter",
    value: function renderCharCounter(t) {
      var e = Math.min(this.value.length, this.maxLength);
      return t ? z(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n      <span class=\"mdc-text-field-character-counter\"\n            >", " / ", "</span>"])), e, this.maxLength) : "";
    }
  }, {
    key: "onInputFocus",
    value: function onInputFocus() {
      this.focused = !0;
    }
  }, {
    key: "onInputBlur",
    value: function onInputBlur() {
      this.focused = !1, this.reportValidity();
    }
  }, {
    key: "checkValidity",
    value: function checkValidity() {
      var t = this._checkValidity(this.value);

      if (!t) {
        var _t48 = new Event("invalid", {
          bubbles: !1,
          cancelable: !0
        });

        this.dispatchEvent(_t48);
      }

      return t;
    }
  }, {
    key: "reportValidity",
    value: function reportValidity() {
      var t = this.checkValidity();
      return this.mdcFoundation.setValid(t), this.isUiValid = t, t;
    }
  }, {
    key: "_checkValidity",
    value: function _checkValidity(t) {
      var e = this.formElement.validity;
      var i = Zi(e);

      if (this.validityTransform) {
        var _e28 = this.validityTransform(t, i);

        i = Object.assign(Object.assign({}, i), _e28), this.mdcFoundation.setUseNativeValidation(!1);
      } else this.mdcFoundation.setUseNativeValidation(!0);

      return this._validity = i, this._validity.valid;
    }
  }, {
    key: "setCustomValidity",
    value: function setCustomValidity(t) {
      this.validationMessage = t, this.formElement.setCustomValidity(t);
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange() {
      this.value = this.formElement.value;
    }
  }, {
    key: "createFoundation",
    value: function createFoundation() {
      void 0 !== this.mdcFoundation && this.mdcFoundation.destroy(), this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter()), this.mdcFoundation.init();
    }
  }, {
    key: "createAdapter",
    value: function createAdapter() {
      return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, this.getRootAdapterMethods()), this.getInputAdapterMethods()), this.getLabelAdapterMethods()), this.getLineRippleAdapterMethods()), this.getOutlineAdapterMethods());
    }
  }, {
    key: "getRootAdapterMethods",
    value: function getRootAdapterMethods() {
      var _this32 = this;

      return Object.assign({
        registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler(t, e) {
          return _this32.addEventListener(t, e);
        },
        deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler(t, e) {
          return _this32.removeEventListener(t, e);
        },
        registerValidationAttributeChangeHandler: function registerValidationAttributeChangeHandler(t) {
          var e = new MutationObserver(function (e) {
            t(function (t) {
              return t.map(function (t) {
                return t.attributeName;
              }).filter(function (t) {
                return t;
              });
            }(e));
          });
          return e.observe(_this32.formElement, {
            attributes: !0
          }), e;
        },
        deregisterValidationAttributeChangeHandler: function deregisterValidationAttributeChangeHandler(t) {
          return t.disconnect();
        }
      }, gt(this.mdcRoot));
    }
  }, {
    key: "getInputAdapterMethods",
    value: function getInputAdapterMethods() {
      var _this33 = this;

      return {
        getNativeInput: function getNativeInput() {
          return _this33.formElement;
        },
        setInputAttr: function setInputAttr() {},
        removeInputAttr: function removeInputAttr() {},
        isFocused: function isFocused() {
          return !!_this33.shadowRoot && _this33.shadowRoot.activeElement === _this33.formElement;
        },
        registerInputInteractionHandler: function registerInputInteractionHandler(t, e) {
          return _this33.formElement.addEventListener(t, e, {
            passive: t in Ji
          });
        },
        deregisterInputInteractionHandler: function deregisterInputInteractionHandler(t, e) {
          return _this33.formElement.removeEventListener(t, e);
        }
      };
    }
  }, {
    key: "getLabelAdapterMethods",
    value: function getLabelAdapterMethods() {
      var _this34 = this;

      return {
        floatLabel: function floatLabel(t) {
          return _this34.labelElement && _this34.labelElement.floatingLabelFoundation.float(t);
        },
        getLabelWidth: function getLabelWidth() {
          return _this34.labelElement ? _this34.labelElement.floatingLabelFoundation.getWidth() : 0;
        },
        hasLabel: function hasLabel() {
          return Boolean(_this34.labelElement);
        },
        shakeLabel: function shakeLabel(t) {
          return _this34.labelElement && _this34.labelElement.floatingLabelFoundation.shake(t);
        },
        setLabelRequired: function setLabelRequired(t) {
          _this34.labelElement && _this34.labelElement.floatingLabelFoundation.setRequired(t);
        }
      };
    }
  }, {
    key: "getLineRippleAdapterMethods",
    value: function getLineRippleAdapterMethods() {
      var _this35 = this;

      return {
        activateLineRipple: function activateLineRipple() {
          _this35.lineRippleElement && _this35.lineRippleElement.lineRippleFoundation.activate();
        },
        deactivateLineRipple: function deactivateLineRipple() {
          _this35.lineRippleElement && _this35.lineRippleElement.lineRippleFoundation.deactivate();
        },
        setLineRippleTransformOrigin: function setLineRippleTransformOrigin(t) {
          _this35.lineRippleElement && _this35.lineRippleElement.lineRippleFoundation.setRippleCenter(t);
        }
      };
    }
  }, {
    key: "_getUpdateComplete",
    value: function () {
      var _getUpdateComplete2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _get(_getPrototypeOf(tr.prototype), "_getUpdateComplete", this).call(this);

              case 2:
                _context3.next = 4;
                return this._outlineUpdateComplete;

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _getUpdateComplete() {
        return _getUpdateComplete2.apply(this, arguments);
      }

      return _getUpdateComplete;
    }()
  }, {
    key: "firstUpdated",
    value: function () {
      var _firstUpdated = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var t;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                t = this.outlineElement;
                _context4.t0 = t;

                if (!_context4.t0) {
                  _context4.next = 6;
                  break;
                }

                this._outlineUpdateComplete = t.updateComplete;
                _context4.next = 6;
                return this._outlineUpdateComplete;

              case 6:
                _get(_getPrototypeOf(tr.prototype), "firstUpdated", this).call(this);

                this.mdcFoundation.setValidateOnValueChange(this.autoValidate);
                this.validateOnInitialRender && this.reportValidity();

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function firstUpdated() {
        return _firstUpdated.apply(this, arguments);
      }

      return firstUpdated;
    }()
  }, {
    key: "getOutlineAdapterMethods",
    value: function getOutlineAdapterMethods() {
      var _this36 = this;

      return {
        closeOutline: function closeOutline() {
          return _this36.outlineElement && (_this36.outlineOpen = !1);
        },
        hasOutline: function hasOutline() {
          return Boolean(_this36.outlineElement);
        },
        notchOutline: function notchOutline(t) {
          _this36.outlineElement && !_this36.outlineOpen && (_this36.outlineWidth = t, _this36.outlineOpen = !0);
        }
      };
    }
  }, {
    key: "layout",
    value: function () {
      var _layout = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var t, e, i;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.updateComplete;

              case 2:
                t = this.labelElement;

                if (t) {
                  _context5.next = 5;
                  break;
                }

                return _context5.abrupt("return", void (this.outlineOpen = !1));

              case 5:
                e = !!this.label && !!this.value;

                if (!(t.floatingLabelFoundation.float(e), !this.outlined)) {
                  _context5.next = 8;
                  break;
                }

                return _context5.abrupt("return");

              case 8:
                this.outlineOpen = e;
                _context5.next = 11;
                return this.updateComplete;

              case 11:
                i = t.floatingLabelFoundation.getWidth();
                this.outlineOpen && (this.outlineWidth = i);

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function layout() {
        return _layout.apply(this, arguments);
      }

      return layout;
    }()
  }]);

  return tr;
}(Wt);

exports.a2 = tr;
t([Z(".mdc-text-field")], tr.prototype, "mdcRoot", void 0), t([Z("input")], tr.prototype, "formElement", void 0), t([Z(".mdc-floating-label")], tr.prototype, "labelElement", void 0), t([Z(".mdc-line-ripple")], tr.prototype, "lineRippleElement", void 0), t([Z("mwc-notched-outline")], tr.prototype, "outlineElement", void 0), t([Z(".mdc-notched-outline__notch")], tr.prototype, "notchElement", void 0), t([Q({
  type: String
})], tr.prototype, "value", void 0), t([Q({
  type: String
})], tr.prototype, "type", void 0), t([Q({
  type: String
})], tr.prototype, "placeholder", void 0), t([Q({
  type: String
}), ee(function (t, e) {
  void 0 !== e && this.label !== e && this.layout();
})], tr.prototype, "label", void 0), t([Q({
  type: String
})], tr.prototype, "icon", void 0), t([Q({
  type: String
})], tr.prototype, "iconTrailing", void 0), t([Q({
  type: Boolean,
  reflect: !0
})], tr.prototype, "disabled", void 0), t([Q({
  type: Boolean
})], tr.prototype, "required", void 0), t([Q({
  type: Number
})], tr.prototype, "minLength", void 0), t([Q({
  type: Number
})], tr.prototype, "maxLength", void 0), t([Q({
  type: Boolean,
  reflect: !0
}), ee(function (t, e) {
  void 0 !== e && this.outlined !== e && this.layout();
})], tr.prototype, "outlined", void 0), t([Q({
  type: String
})], tr.prototype, "helper", void 0), t([Q({
  type: Boolean
})], tr.prototype, "validateOnInitialRender", void 0), t([Q({
  type: String
})], tr.prototype, "validationMessage", void 0), t([Q({
  type: Boolean
})], tr.prototype, "autoValidate", void 0), t([Q({
  type: String
})], tr.prototype, "pattern", void 0), t([Q({
  type: String
})], tr.prototype, "min", void 0), t([Q({
  type: String
})], tr.prototype, "max", void 0), t([Q({
  type: Number
})], tr.prototype, "step", void 0), t([Q({
  type: Number
})], tr.prototype, "size", void 0), t([Q({
  type: Boolean
})], tr.prototype, "helperPersistent", void 0), t([Q({
  type: Boolean
})], tr.prototype, "charCounter", void 0), t([Q({
  type: Boolean
})], tr.prototype, "endAligned", void 0), t([Q({
  type: String
})], tr.prototype, "prefix", void 0), t([Q({
  type: String
})], tr.prototype, "suffix", void 0), t([Q({
  type: String
})], tr.prototype, "name", void 0), t([Q({
  type: String
})], tr.prototype, "inputMode", void 0), t([Q({
  type: Boolean
})], tr.prototype, "readOnly", void 0), t([Q({
  type: String
})], tr.prototype, "autocapitalize", void 0), t([Q({
  type: Boolean
})], tr.prototype, "outlineOpen", void 0), t([Q({
  type: Number
})], tr.prototype, "outlineWidth", void 0), t([Q({
  type: Boolean
})], tr.prototype, "isUiValid", void 0), t([J()], tr.prototype, "focused", void 0), t([rt({
  passive: !0
})], tr.prototype, "handleInputChange", null);
var er = dt(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral([".mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:\"*\"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:\"\"}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-text-field--filled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-text-field--filled .mdc-text-field__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-text-field--filled .mdc-text-field__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0, 0, 0, 0.87)}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.54)}}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.54)}}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}.mdc-text-field__affix{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-text-field--filled:hover .mdc-text-field__ripple::before,.mdc-text-field--filled.mdc-ripple-surface--hover .mdc-text-field__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:\"\";vertical-align:0}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:whitesmoke}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px, var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-text-field__ripple::before,.mdc-text-field--outlined .mdc-text-field__ripple::after{content:none}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:transparent}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0;transition:none}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px;line-height:1.5rem}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:\"\";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0, 0, 0, 0.38)}@media all{.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.38)}}@media all{.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.38)}}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-floating-label{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--leading{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:GrayText}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled{background-color:#fafafa}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-text-field-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;opacity:0;will-change:opacity;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-text-field-helper-text::before{display:inline-block;width:0;height:16px;content:\"\";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field-character-counter{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter::before{display:inline-block;width:0;height:16px;content:\"\";vertical-align:0}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field__icon{align-self:center;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex=\"-1\"]{cursor:default;pointer-events:none}.mdc-text-field__icon svg{display:block}.mdc-text-field__icon--leading{margin-left:16px;margin-right:8px}[dir=rtl] .mdc-text-field__icon--leading,.mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-text-field__icon--trailing{padding:12px;margin-left:0px;margin-right:0px}[dir=rtl] .mdc-text-field__icon--trailing,.mdc-text-field__icon--trailing[dir=rtl]{margin-left:0px;margin-right:0px}.material-icons{font-family:var(--mdc-icon-font, \"Material Icons\");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:\"liga\"}:host{display:inline-flex;flex-direction:column;outline:none}.mdc-text-field{width:100%}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-text-field-idle-line-color, rgba(0, 0, 0, 0.42))}.mdc-text-field:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-text-field-hover-line-color, rgba(0, 0, 0, 0.87))}.mdc-text-field.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06);border-bottom-color:var(--mdc-text-field-disabled-line-color, rgba(0, 0, 0, 0.06))}.mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-outlined-idle-border-color, rgba(0, 0, 0, 0.38))}:host(:not([disabled]):hover) :not(.mdc-text-field--invalid):not(.mdc-text-field--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-outlined-hover-border-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-character-counter,:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid .mdc-text-field__icon{color:var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input{color:var(--mdc-text-field-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg),:host(:not([disabled])) .mdc-text-field-helper-line:not(.mdc-text-field--invalid) .mdc-text-field-character-counter{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-text-field.mdc-text-field--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-outlined-disabled-border-color, rgba(0, 0, 0, 0.06))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field .mdc-text-field__input,:host([disabled]) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-helper-text,:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-character-counter{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}"])));
exports.a3 = er;
var ir,
    rr,
    nr = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
},
    or = {
  CLOSED_EVENT: "MDCMenuSurface:closed",
  OPENED_EVENT: "MDCMenuSurface:opened",
  FOCUSABLE_ELEMENTS: ["button:not(:disabled)", '[href]:not([aria-disabled="true"])', "input:not(:disabled)", "select:not(:disabled)", "textarea:not(:disabled)", '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")
},
    ar = {
  TRANSITION_OPEN_DURATION: 120,
  TRANSITION_CLOSE_DURATION: 75,
  MARGIN_TO_EDGE: 32,
  ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: .67
};
exports.a8 = rr;
exports.ac = ir;
!function (t) {
  t[t.BOTTOM = 1] = "BOTTOM", t[t.CENTER = 2] = "CENTER", t[t.RIGHT = 4] = "RIGHT", t[t.FLIP_RTL = 8] = "FLIP_RTL";
}(ir || (exports.ac = ir = {})), function (t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 4] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", t[t.TOP_START = 8] = "TOP_START", t[t.TOP_END = 12] = "TOP_END", t[t.BOTTOM_START = 9] = "BOTTOM_START", t[t.BOTTOM_END = 13] = "BOTTOM_END";
}(rr || (exports.a8 = rr = {}));

var _dr = function dr(t, e) {
  return (_dr = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (t, e) {
    t.__proto__ = e;
  } || function (t, e) {
    for (var i in e) {
      e.hasOwnProperty(i) && (t[i] = e[i]);
    }
  })(t, e);
};

var _sr = function sr() {
  return (_sr = Object.assign || function (t) {
    for (var e, i = 1, r = arguments.length; i < r; i++) {
      for (var n in e = arguments[i]) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    }

    return t;
  }).apply(this, arguments);
};

var lr,
    cr = function (t) {
  function e(i) {
    var r = t.call(this, _sr(_sr({}, e.defaultAdapter), i)) || this;
    return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = rr.TOP_START, r.originCorner = rr.TOP_START, r.anchorMargin = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, r.position = {
      x: 0,
      y: 0
    }, r;
  }

  return function (t, e) {
    function i() {
      this.constructor = t;
    }

    _dr(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
  }(e, t), Object.defineProperty(e, "cssClasses", {
    get: function get() {
      return nr;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "strings", {
    get: function get() {
      return or;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "numbers", {
    get: function get() {
      return ar;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "Corner", {
    get: function get() {
      return rr;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "defaultAdapter", {
    get: function get() {
      return {
        addClass: function addClass() {},
        removeClass: function removeClass() {},
        hasClass: function hasClass() {
          return !1;
        },
        hasAnchor: function hasAnchor() {
          return !1;
        },
        isElementInContainer: function isElementInContainer() {
          return !1;
        },
        isFocused: function isFocused() {
          return !1;
        },
        isRtl: function isRtl() {
          return !1;
        },
        getInnerDimensions: function getInnerDimensions() {
          return {
            height: 0,
            width: 0
          };
        },
        getAnchorDimensions: function getAnchorDimensions() {
          return null;
        },
        getWindowDimensions: function getWindowDimensions() {
          return {
            height: 0,
            width: 0
          };
        },
        getBodyDimensions: function getBodyDimensions() {
          return {
            height: 0,
            width: 0
          };
        },
        getWindowScroll: function getWindowScroll() {
          return {
            x: 0,
            y: 0
          };
        },
        setPosition: function setPosition() {},
        setMaxHeight: function setMaxHeight() {},
        setTransformOrigin: function setTransformOrigin() {},
        saveFocus: function saveFocus() {},
        restoreFocus: function restoreFocus() {},
        notifyClose: function notifyClose() {},
        notifyOpen: function notifyOpen() {}
      };
    },
    enumerable: !0,
    configurable: !0
  }), e.prototype.init = function () {
    var t = e.cssClasses,
        i = t.ROOT,
        r = t.OPEN;
    if (!this.adapter.hasClass(i)) throw new Error(i + " class required in root element.");
    this.adapter.hasClass(r) && (this.isSurfaceOpen = !0);
  }, e.prototype.destroy = function () {
    clearTimeout(this.openAnimationEndTimerId), clearTimeout(this.closeAnimationEndTimerId), cancelAnimationFrame(this.animationRequestId);
  }, e.prototype.setAnchorCorner = function (t) {
    this.anchorCorner = t;
  }, e.prototype.flipCornerHorizontally = function () {
    this.originCorner = this.originCorner ^ ir.RIGHT;
  }, e.prototype.setAnchorMargin = function (t) {
    this.anchorMargin.top = t.top || 0, this.anchorMargin.right = t.right || 0, this.anchorMargin.bottom = t.bottom || 0, this.anchorMargin.left = t.left || 0;
  }, e.prototype.setIsHoisted = function (t) {
    this.isHoistedElement = t;
  }, e.prototype.setFixedPosition = function (t) {
    this.isFixedPosition = t;
  }, e.prototype.setAbsolutePosition = function (t, e) {
    this.position.x = this.isFinite(t) ? t : 0, this.position.y = this.isFinite(e) ? e : 0;
  }, e.prototype.setQuickOpen = function (t) {
    this.isQuickOpen = t;
  }, e.prototype.isOpen = function () {
    return this.isSurfaceOpen;
  }, e.prototype.open = function () {
    var t = this;
    this.isSurfaceOpen || (this.adapter.saveFocus(), this.isQuickOpen ? (this.isSurfaceOpen = !0, this.adapter.addClass(e.cssClasses.OPEN), this.dimensions = this.adapter.getInnerDimensions(), this.autoposition(), this.adapter.notifyOpen()) : (this.adapter.addClass(e.cssClasses.ANIMATING_OPEN), this.animationRequestId = requestAnimationFrame(function () {
      t.adapter.addClass(e.cssClasses.OPEN), t.dimensions = t.adapter.getInnerDimensions(), t.autoposition(), t.openAnimationEndTimerId = setTimeout(function () {
        t.openAnimationEndTimerId = 0, t.adapter.removeClass(e.cssClasses.ANIMATING_OPEN), t.adapter.notifyOpen();
      }, ar.TRANSITION_OPEN_DURATION);
    }), this.isSurfaceOpen = !0));
  }, e.prototype.close = function (t) {
    var i = this;
    void 0 === t && (t = !1), this.isSurfaceOpen && (this.isQuickOpen ? (this.isSurfaceOpen = !1, t || this.maybeRestoreFocus(), this.adapter.removeClass(e.cssClasses.OPEN), this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), this.adapter.notifyClose()) : (this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED), requestAnimationFrame(function () {
      i.adapter.removeClass(e.cssClasses.OPEN), i.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), i.closeAnimationEndTimerId = setTimeout(function () {
        i.closeAnimationEndTimerId = 0, i.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED), i.adapter.notifyClose();
      }, ar.TRANSITION_CLOSE_DURATION);
    }), this.isSurfaceOpen = !1, t || this.maybeRestoreFocus()));
  }, e.prototype.handleBodyClick = function (t) {
    var e = t.target;
    this.adapter.isElementInContainer(e) || this.close();
  }, e.prototype.handleKeydown = function (t) {
    var e = t.keyCode;
    ("Escape" === t.key || 27 === e) && this.close();
  }, e.prototype.autoposition = function () {
    var t;
    this.measurements = this.getAutoLayoutmeasurements();
    var i = this.getoriginCorner(),
        r = this.getMenuSurfaceMaxHeight(i),
        n = this.hasBit(i, ir.BOTTOM) ? "bottom" : "top",
        o = this.hasBit(i, ir.RIGHT) ? "right" : "left",
        a = this.getHorizontalOriginOffset(i),
        d = this.getVerticalOriginOffset(i),
        s = this.measurements,
        l = s.anchorSize,
        c = s.surfaceSize,
        p = ((t = {})[o] = a, t[n] = d, t);
    l.width / c.width > ar.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (o = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(p), this.adapter.setTransformOrigin(o + " " + n), this.adapter.setPosition(p), this.adapter.setMaxHeight(r ? r + "px" : ""), this.hasBit(i, ir.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
  }, e.prototype.getAutoLayoutmeasurements = function () {
    var t = this.adapter.getAnchorDimensions(),
        e = this.adapter.getBodyDimensions(),
        i = this.adapter.getWindowDimensions(),
        r = this.adapter.getWindowScroll();
    return t || (t = {
      top: this.position.y,
      right: this.position.x,
      bottom: this.position.y,
      left: this.position.x,
      width: 0,
      height: 0
    }), {
      anchorSize: t,
      bodySize: e,
      surfaceSize: this.dimensions,
      viewportDistance: {
        top: t.top,
        right: i.width - t.right,
        bottom: i.height - t.bottom,
        left: t.left
      },
      viewportSize: i,
      windowScroll: r
    };
  }, e.prototype.getoriginCorner = function () {
    var t,
        i,
        r = this.originCorner,
        n = this.measurements,
        o = n.viewportDistance,
        a = n.anchorSize,
        d = n.surfaceSize,
        s = e.numbers.MARGIN_TO_EDGE;
    this.hasBit(this.anchorCorner, ir.BOTTOM) ? (t = o.top - s + a.height + this.anchorMargin.bottom, i = o.bottom - s - this.anchorMargin.bottom) : (t = o.top - s + this.anchorMargin.top, i = o.bottom - s + a.height - this.anchorMargin.top), !(i - d.height > 0) && t >= i && (r = this.setBit(r, ir.BOTTOM));
    var l,
        c,
        p = this.adapter.isRtl(),
        h = this.hasBit(this.anchorCorner, ir.FLIP_RTL),
        m = this.hasBit(this.anchorCorner, ir.RIGHT) || this.hasBit(r, ir.RIGHT),
        u = !1;
    (u = p && h ? !m : m) ? (l = o.left + a.width + this.anchorMargin.right, c = o.right - this.anchorMargin.right) : (l = o.left + this.anchorMargin.left, c = o.right + a.width - this.anchorMargin.left);

    var f = l - d.width > 0,
        g = c - d.width > 0,
        _ = this.hasBit(r, ir.FLIP_RTL) && this.hasBit(r, ir.RIGHT);

    return g && _ && p || !f && _ ? r = this.unsetBit(r, ir.RIGHT) : (f && u && p || f && !u && m || !g && l >= c) && (r = this.setBit(r, ir.RIGHT)), r;
  }, e.prototype.getMenuSurfaceMaxHeight = function (t) {
    var i = this.measurements.viewportDistance,
        r = 0,
        n = this.hasBit(t, ir.BOTTOM),
        o = this.hasBit(this.anchorCorner, ir.BOTTOM),
        a = e.numbers.MARGIN_TO_EDGE;
    return n ? (r = i.top + this.anchorMargin.top - a, o || (r += this.measurements.anchorSize.height)) : (r = i.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - a, o && (r -= this.measurements.anchorSize.height)), r;
  }, e.prototype.getHorizontalOriginOffset = function (t) {
    var e = this.measurements.anchorSize,
        i = this.hasBit(t, ir.RIGHT),
        r = this.hasBit(this.anchorCorner, ir.RIGHT);

    if (i) {
      var n = r ? e.width - this.anchorMargin.left : this.anchorMargin.right;
      return this.isHoistedElement || this.isFixedPosition ? n - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : n;
    }

    return r ? e.width - this.anchorMargin.right : this.anchorMargin.left;
  }, e.prototype.getVerticalOriginOffset = function (t) {
    var e = this.measurements.anchorSize,
        i = this.hasBit(t, ir.BOTTOM),
        r = this.hasBit(this.anchorCorner, ir.BOTTOM);
    return i ? r ? e.height - this.anchorMargin.top : -this.anchorMargin.bottom : r ? e.height + this.anchorMargin.bottom : this.anchorMargin.top;
  }, e.prototype.adjustPositionForHoistedElement = function (t) {
    var e,
        i,
        r = this.measurements,
        n = r.windowScroll,
        o = r.viewportDistance,
        a = Object.keys(t);

    try {
      for (var d = function (t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
            i = e && t[e],
            r = 0;
        if (i) return i.call(t);
        if (t && "number" == typeof t.length) return {
          next: function next() {
            return t && r >= t.length && (t = void 0), {
              value: t && t[r++],
              done: !t
            };
          }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }(a), s = d.next(); !s.done; s = d.next()) {
        var l = s.value,
            c = t[l] || 0;
        c += o[l], this.isFixedPosition || ("top" === l ? c += n.y : "bottom" === l ? c -= n.y : "left" === l ? c += n.x : c -= n.x), t[l] = c;
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        s && !s.done && (i = d.return) && i.call(d);
      } finally {
        if (e) throw e.error;
      }
    }
  }, e.prototype.maybeRestoreFocus = function () {
    var t = this.adapter.isFocused(),
        e = document.activeElement && this.adapter.isElementInContainer(document.activeElement);
    (t || e) && this.adapter.restoreFocus();
  }, e.prototype.hasBit = function (t, e) {
    return Boolean(t & e);
  }, e.prototype.setBit = function (t, e) {
    return t | e;
  }, e.prototype.unsetBit = function (t, e) {
    return t ^ e;
  }, e.prototype.isFinite = function (t) {
    return "number" == typeof t && isFinite(t);
  }, e;
}(St),
    pr = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
},
    hr = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list",
  SELECTED_EVENT: "MDCMenu:selected"
},
    mr = {
  FOCUS_ROOT_INDEX: -1
};

exports.ag = mr;
exports.af = hr;
exports.ae = pr;
exports.ad = cr;
exports.ah = lr;
!function (t) {
  t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM";
}(lr || (exports.ah = lr = {}));
},{}],"../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-button.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _core = require("./core.js");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var b = /*#__PURE__*/function (_r) {
  _inherits(b, _r);

  var _super = _createSuper(b);

  function b() {
    var _this;

    _classCallCheck(this, b);

    _this = _super.apply(this, arguments), _this.raised = !1, _this.unelevated = !1, _this.outlined = !1, _this.dense = !1, _this.disabled = !1, _this.trailingIcon = !1, _this.fullwidth = !1, _this.icon = "", _this.label = "", _this.expandContent = !1, _this.shouldRenderRipple = !1, _this.rippleHandlers = new _core.R(function () {
      return _this.shouldRenderRipple = !0, _this.ripple;
    });
    return _this;
  }

  _createClass(b, [{
    key: "renderOverlay",
    value: function renderOverlay() {
      return (0, _core.h)(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
    }
  }, {
    key: "renderRipple",
    value: function renderRipple() {
      var t = this.raised || this.unelevated;
      return this.shouldRenderRipple ? (0, _core.h)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<mwc-ripple class=\"ripple\" .primary=\"", "\" .disabled=\"", "\"></mwc-ripple>"])), !t, this.disabled) : "";
    }
  }, {
    key: "createRenderRoot",
    value: function createRenderRoot() {
      return this.attachShadow({
        mode: "open",
        delegatesFocus: !0
      });
    }
  }, {
    key: "focus",
    value: function focus() {
      var t = this.buttonElement;
      t && (this.rippleHandlers.startFocus(), t.focus());
    }
  }, {
    key: "blur",
    value: function blur() {
      var t = this.buttonElement;
      t && (this.rippleHandlers.endFocus(), t.blur());
    }
  }, {
    key: "getRenderClasses",
    value: function getRenderClasses() {
      return (0, _core.c)({
        "mdc-button--raised": this.raised,
        "mdc-button--unelevated": this.unelevated,
        "mdc-button--outlined": this.outlined,
        "mdc-button--dense": this.dense
      });
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _core.h)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      <button\n          id=\"button\"\n          class=\"mdc-button ", "\"\n          ?disabled=\"", "\"\n          aria-label=\"", "\"\n          @focus=\"", "\"\n          @blur=\"", "\"\n          @mousedown=\"", "\"\n          @mouseenter=\"", "\"\n          @mouseleave=\"", "\"\n          @touchstart=\"", "\"\n          @touchend=\"", "\"\n          @touchcancel=\"", "\">\n        ", "\n        ", "\n        <span class=\"leading-icon\">\n          <slot name=\"icon\">\n            ", "\n          </slot>\n        </span>\n        <span class=\"mdc-button__label\">", "</span>\n        <span class=\"slot-container ", "\">\n          <slot></slot>\n        </span>\n        <span class=\"trailing-icon\">\n          <slot name=\"trailingIcon\">\n            ", "\n          </slot>\n        </span>\n      </button>"])), this.getRenderClasses(), this.disabled, this.label || this.icon, this.handleRippleFocus, this.handleRippleBlur, this.handleRippleActivate, this.handleRippleMouseEnter, this.handleRippleMouseLeave, this.handleRippleActivate, this.handleRippleDeactivate, this.handleRippleDeactivate, this.renderOverlay(), this.renderRipple(), this.icon && !this.trailingIcon ? this.renderIcon() : "", this.label, (0, _core.c)({
        flex: this.expandContent
      }), this.icon && this.trailingIcon ? this.renderIcon() : "");
    }
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      return (0, _core.h)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    <mwc-icon class=\"mdc-button__icon\">\n      ", "\n    </mwc-icon>"])), this.icon);
    }
  }, {
    key: "handleRippleActivate",
    value: function handleRippleActivate(t) {
      var _this2 = this;

      var o = function o() {
        window.removeEventListener("mouseup", o), _this2.handleRippleDeactivate();
      };

      window.addEventListener("mouseup", o), this.rippleHandlers.startPress(t);
    }
  }, {
    key: "handleRippleDeactivate",
    value: function handleRippleDeactivate() {
      this.rippleHandlers.endPress();
    }
  }, {
    key: "handleRippleMouseEnter",
    value: function handleRippleMouseEnter() {
      this.rippleHandlers.startHover();
    }
  }, {
    key: "handleRippleMouseLeave",
    value: function handleRippleMouseLeave() {
      this.rippleHandlers.endHover();
    }
  }, {
    key: "handleRippleFocus",
    value: function handleRippleFocus() {
      this.rippleHandlers.startFocus();
    }
  }, {
    key: "handleRippleBlur",
    value: function handleRippleBlur() {
      this.rippleHandlers.endFocus();
    }
  }]);

  return b;
}(_core.L);

(0, _core._)([(0, _core.p)({
  type: Boolean,
  reflect: !0
})], b.prototype, "raised", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean,
  reflect: !0
})], b.prototype, "unelevated", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean,
  reflect: !0
})], b.prototype, "outlined", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean
})], b.prototype, "dense", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean,
  reflect: !0
})], b.prototype, "disabled", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean,
  attribute: "trailingicon"
})], b.prototype, "trailingIcon", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean,
  reflect: !0
})], b.prototype, "fullwidth", void 0), (0, _core._)([(0, _core.p)({
  type: String
})], b.prototype, "icon", void 0), (0, _core._)([(0, _core.p)({
  type: String
})], b.prototype, "label", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean
})], b.prototype, "expandContent", void 0), (0, _core._)([(0, _core.q)("#button")], b.prototype, "buttonElement", void 0), (0, _core._)([(0, _core.a)("mwc-ripple")], b.prototype, "ripple", void 0), (0, _core._)([(0, _core.i)()], b.prototype, "shouldRenderRipple", void 0), (0, _core._)([(0, _core.e)({
  passive: !0
})], b.prototype, "handleRippleActivate", null);
var u = (0, _core.b)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([".mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);padding:0 8px 0 8px;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);height:36px}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button:not(:disabled){background-color:transparent}.mdc-button:disabled{background-color:transparent}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__touch{position:absolute;top:50%;right:0;height:48px;left:0;transform:translateY(-50%)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}.mdc-button--outlined{padding:0 15px 0 15px;border-width:1px;border-style:solid}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button--outlined .mdc-button__touch{left:-1px;width:calc(100% + 2 * 1px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--touch{margin-top:6px;margin-bottom:6px}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color: #fff;--mdc-ripple-focus-opacity: 0.24;--mdc-ripple-hover-opacity: 0.08;--mdc-ripple-press-opacity: 0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .trailing-icon ::slotted(*),.trailing-icon ::slotted(*)[dir=rtl],[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon .mdc-button__icon[dir=rtl],[dir=rtl] .leading-icon ::slotted(*),.leading-icon ::slotted(*)[dir=rtl],[dir=rtl] .leading-icon .mdc-button__icon,.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),.trailing-icon ::slotted(*)[dir=rtl],[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{display:none}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}"])));

var x = /*#__PURE__*/function (_b) {
  _inherits(x, _b);

  var _super2 = _createSuper(x);

  function x() {
    _classCallCheck(this, x);

    return _super2.apply(this, arguments);
  }

  return _createClass(x);
}(b);

exports.Button = x;
x.styles = u, exports.Button = x = (0, _core._)([(0, _core.d)("mwc-button")], x);
},{"./core.js":"../pkg/snippets/material-yew-ff4853da911fc4ad/build/core.js"}],"../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-circular-progress.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CircularProgress = void 0;

var _core = require("./core.js");

var _templateObject;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var t = (0, _core.b)(_templateObject || (_templateObject = _taggedTemplateLiteral([".mdc-circular-progress__determinate-circle,.mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-theme-primary, #6200ee)}.mdc-circular-progress__determinate-track{stroke:transparent}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:transparent}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}:host{display:inline-flex}.mdc-circular-progress__determinate-track{stroke:transparent;stroke:var(--mdc-circular-progress-track-color, transparent)}"])));

var a = /*#__PURE__*/function (_e) {
  _inherits(a, _e);

  var _super = _createSuper(a);

  function a() {
    _classCallCheck(this, a);

    return _super.apply(this, arguments);
  }

  return _createClass(a);
}(_core.C);

exports.CircularProgress = a;
a.styles = t, exports.CircularProgress = a = (0, _core._)([(0, _core.d)("mwc-circular-progress")], a);
},{"./core.js":"../pkg/snippets/material-yew-ff4853da911fc4ad/build/core.js"}],"../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-dialog.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dialog = void 0;

var _core = require("./core.js");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _y = function y(t, i) {
  return (_y = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (t, i) {
    t.__proto__ = i;
  } || function (t, i) {
    for (var o in i) {
      i.hasOwnProperty(o) && (t[o] = i[o]);
    }
  })(t, i);
};

var _2 = function _() {
  return (_2 = Object.assign || function (t) {
    for (var i, o = 1, e = arguments.length; o < e; o++) {
      for (var n in i = arguments[o]) {
        Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
      }
    }

    return t;
  }).apply(this, arguments);
},
    b = function (e) {
  function n(t) {
    var o = e.call(this, _2(_2({}, n.defaultAdapter), t)) || this;
    return o.isOpen_ = !1, o.animationFrame_ = 0, o.animationTimer_ = 0, o.layoutFrame_ = 0, o.escapeKeyAction_ = _core.y.CLOSE_ACTION, o.scrimClickAction_ = _core.y.CLOSE_ACTION, o.autoStackButtons_ = !0, o.areButtonsStacked_ = !1, o.suppressDefaultPressSelector = _core.y.SUPPRESS_DEFAULT_PRESS_SELECTOR, o;
  }

  return function (t, i) {
    function o() {
      this.constructor = t;
    }

    _y(t, i), t.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o());
  }(n, e), Object.defineProperty(n, "cssClasses", {
    get: function get() {
      return _core.x;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(n, "strings", {
    get: function get() {
      return _core.y;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(n, "numbers", {
    get: function get() {
      return _core.z;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(n, "defaultAdapter", {
    get: function get() {
      return {
        addBodyClass: function addBodyClass() {},
        addClass: function addClass() {},
        areButtonsStacked: function areButtonsStacked() {
          return !1;
        },
        clickDefaultButton: function clickDefaultButton() {},
        eventTargetMatches: function eventTargetMatches() {
          return !1;
        },
        getActionFromEvent: function getActionFromEvent() {
          return "";
        },
        getInitialFocusEl: function getInitialFocusEl() {
          return null;
        },
        hasClass: function hasClass() {
          return !1;
        },
        isContentScrollable: function isContentScrollable() {
          return !1;
        },
        notifyClosed: function notifyClosed() {},
        notifyClosing: function notifyClosing() {},
        notifyOpened: function notifyOpened() {},
        notifyOpening: function notifyOpening() {},
        releaseFocus: function releaseFocus() {},
        removeBodyClass: function removeBodyClass() {},
        removeClass: function removeClass() {},
        reverseButtons: function reverseButtons() {},
        trapFocus: function trapFocus() {}
      };
    },
    enumerable: !0,
    configurable: !0
  }), n.prototype.init = function () {
    this.adapter.hasClass(_core.x.STACKED) && this.setAutoStackButtons(!1);
  }, n.prototype.destroy = function () {
    this.isOpen_ && this.close(_core.y.DESTROY_ACTION), this.animationTimer_ && (clearTimeout(this.animationTimer_), this.handleAnimationTimerEnd_()), this.layoutFrame_ && (cancelAnimationFrame(this.layoutFrame_), this.layoutFrame_ = 0);
  }, n.prototype.open = function () {
    var i = this;
    this.isOpen_ = !0, this.adapter.notifyOpening(), this.adapter.addClass(_core.x.OPENING), this.runNextAnimationFrame_(function () {
      i.adapter.addClass(_core.x.OPEN), i.adapter.addBodyClass(_core.x.SCROLL_LOCK), i.layout(), i.animationTimer_ = setTimeout(function () {
        i.handleAnimationTimerEnd_(), i.adapter.trapFocus(i.adapter.getInitialFocusEl()), i.adapter.notifyOpened();
      }, _core.z.DIALOG_ANIMATION_OPEN_TIME_MS);
    });
  }, n.prototype.close = function (i) {
    var e = this;
    void 0 === i && (i = ""), this.isOpen_ && (this.isOpen_ = !1, this.adapter.notifyClosing(i), this.adapter.addClass(_core.x.CLOSING), this.adapter.removeClass(_core.x.OPEN), this.adapter.removeBodyClass(_core.x.SCROLL_LOCK), cancelAnimationFrame(this.animationFrame_), this.animationFrame_ = 0, clearTimeout(this.animationTimer_), this.animationTimer_ = setTimeout(function () {
      e.adapter.releaseFocus(), e.handleAnimationTimerEnd_(), e.adapter.notifyClosed(i);
    }, _core.z.DIALOG_ANIMATION_CLOSE_TIME_MS));
  }, n.prototype.isOpen = function () {
    return this.isOpen_;
  }, n.prototype.getEscapeKeyAction = function () {
    return this.escapeKeyAction_;
  }, n.prototype.setEscapeKeyAction = function (t) {
    this.escapeKeyAction_ = t;
  }, n.prototype.getScrimClickAction = function () {
    return this.scrimClickAction_;
  }, n.prototype.setScrimClickAction = function (t) {
    this.scrimClickAction_ = t;
  }, n.prototype.getAutoStackButtons = function () {
    return this.autoStackButtons_;
  }, n.prototype.setAutoStackButtons = function (t) {
    this.autoStackButtons_ = t;
  }, n.prototype.getSuppressDefaultPressSelector = function () {
    return this.suppressDefaultPressSelector;
  }, n.prototype.setSuppressDefaultPressSelector = function (t) {
    this.suppressDefaultPressSelector = t;
  }, n.prototype.layout = function () {
    var t = this;
    this.layoutFrame_ && cancelAnimationFrame(this.layoutFrame_), this.layoutFrame_ = requestAnimationFrame(function () {
      t.layoutInternal_(), t.layoutFrame_ = 0;
    });
  }, n.prototype.handleClick = function (t) {
    if (this.adapter.eventTargetMatches(t.target, _core.y.SCRIM_SELECTOR) && "" !== this.scrimClickAction_) this.close(this.scrimClickAction_);else {
      var o = this.adapter.getActionFromEvent(t);
      o && this.close(o);
    }
  }, n.prototype.handleKeydown = function (t) {
    var i = "Enter" === t.key || 13 === t.keyCode;

    if (i && !this.adapter.getActionFromEvent(t)) {
      var o = t.composedPath ? t.composedPath()[0] : t.target,
          e = !this.adapter.eventTargetMatches(o, this.suppressDefaultPressSelector);
      i && e && this.adapter.clickDefaultButton();
    }
  }, n.prototype.handleDocumentKeydown = function (t) {
    ("Escape" === t.key || 27 === t.keyCode) && "" !== this.escapeKeyAction_ && this.close(this.escapeKeyAction_);
  }, n.prototype.layoutInternal_ = function () {
    this.autoStackButtons_ && this.detectStackedButtons_(), this.detectScrollableContent_();
  }, n.prototype.handleAnimationTimerEnd_ = function () {
    this.animationTimer_ = 0, this.adapter.removeClass(_core.x.OPENING), this.adapter.removeClass(_core.x.CLOSING);
  }, n.prototype.runNextAnimationFrame_ = function (t) {
    var i = this;
    cancelAnimationFrame(this.animationFrame_), this.animationFrame_ = requestAnimationFrame(function () {
      i.animationFrame_ = 0, clearTimeout(i.animationTimer_), i.animationTimer_ = setTimeout(t, 0);
    });
  }, n.prototype.detectStackedButtons_ = function () {
    this.adapter.removeClass(_core.x.STACKED);
    var i = this.adapter.areButtonsStacked();
    i && this.adapter.addClass(_core.x.STACKED), i !== this.areButtonsStacked_ && (this.adapter.reverseButtons(), this.areButtonsStacked_ = i);
  }, n.prototype.detectScrollableContent_ = function () {
    this.adapter.removeClass(_core.x.SCROLLABLE), this.adapter.isContentScrollable() && this.adapter.addClass(_core.x.SCROLLABLE);
  }, n;
}(_core.m);

var v = document.$blockingElements;

var x = /*#__PURE__*/function (_s) {
  _inherits(x, _s);

  var _super = _createSuper(x);

  function x() {
    var _this;

    _classCallCheck(this, x);

    _this = _super.apply(this, arguments), _this.hideActions = !1, _this.stacked = !1, _this.heading = "", _this.scrimClickAction = "close", _this.escapeKeyAction = "close", _this.open = !1, _this.defaultAction = "close", _this.actionAttribute = "dialogAction", _this.initialFocusAttribute = "dialogInitialFocus", _this.mdcFoundationClass = b, _this.boundLayout = null, _this.boundHandleClick = null, _this.boundHandleKeydown = null, _this.boundHandleDocumentKeydown = null;
    return _this;
  }

  _createClass(x, [{
    key: "primaryButton",
    get: function get() {
      var t = this.primarySlot.assignedNodes();
      t = t.filter(function (t) {
        return t instanceof HTMLElement;
      });
      var i = t[0];
      return i || null;
    }
  }, {
    key: "emitNotification",
    value: function emitNotification(t, i) {
      var o = new CustomEvent(t, {
        detail: i ? {
          action: i
        } : {}
      });
      this.dispatchEvent(o);
    }
  }, {
    key: "getInitialFocusEl",
    value: function getInitialFocusEl() {
      var t = "[".concat(this.initialFocusAttribute, "]"),
          i = this.querySelector(t);
      if (i) return i;
      var o = this.primarySlot.assignedNodes({
        flatten: !0
      }),
          e = this.searchNodeTreesForAttribute(o, this.initialFocusAttribute);
      if (e) return e;
      var n = this.secondarySlot.assignedNodes({
        flatten: !0
      }),
          a = this.searchNodeTreesForAttribute(n, this.initialFocusAttribute);
      if (a) return a;
      var r = this.contentSlot.assignedNodes({
        flatten: !0
      });
      return this.searchNodeTreesForAttribute(r, this.initialFocusAttribute);
    }
  }, {
    key: "searchNodeTreesForAttribute",
    value: function searchNodeTreesForAttribute(t, i) {
      var _iterator = _createForOfIteratorHelper(t),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _o = _step.value;

          if (_o instanceof HTMLElement) {
            if (_o.hasAttribute(i)) return _o;
            {
              var _t = _o.querySelector("[".concat(i, "]"));

              if (_t) return _t;
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return null;
    }
  }, {
    key: "createAdapter",
    value: function createAdapter() {
      var _this2 = this;

      return Object.assign(Object.assign({}, (0, _core.j)(this.mdcRoot)), {
        addBodyClass: function addBodyClass() {
          return document.body.style.overflow = "hidden";
        },
        removeBodyClass: function removeBodyClass() {
          return document.body.style.overflow = "";
        },
        areButtonsStacked: function areButtonsStacked() {
          return _this2.stacked;
        },
        clickDefaultButton: function clickDefaultButton() {
          var t = _this2.primaryButton;
          t && t.click();
        },
        eventTargetMatches: function eventTargetMatches(t, i) {
          return !!t && (0, _core.A)(t, i);
        },
        getActionFromEvent: function getActionFromEvent(t) {
          if (!t.target) return "";
          var i = (0, _core.D)(t.target, "[".concat(_this2.actionAttribute, "]"));
          return i && i.getAttribute(_this2.actionAttribute);
        },
        getInitialFocusEl: function getInitialFocusEl() {
          return _this2.getInitialFocusEl();
        },
        isContentScrollable: function isContentScrollable() {
          var t = _this2.contentElement;
          return !!t && t.scrollHeight > t.offsetHeight;
        },
        notifyClosed: function notifyClosed(t) {
          return _this2.emitNotification("closed", t);
        },
        notifyClosing: function notifyClosing(t) {
          _this2.closingDueToDisconnect || (_this2.open = !1), _this2.emitNotification("closing", t);
        },
        notifyOpened: function notifyOpened() {
          return _this2.emitNotification("opened");
        },
        notifyOpening: function notifyOpening() {
          _this2.open = !0, _this2.emitNotification("opening");
        },
        reverseButtons: function reverseButtons() {},
        releaseFocus: function releaseFocus() {
          v.remove(_this2);
        },
        trapFocus: function trapFocus(t) {
          v.push(_this2), t && t.focus();
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var i = _defineProperty({}, _core.x.STACKED, this.stacked);

      var o = (0, _core.h)(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
      this.heading && (o = this.renderHeading());
      var e = {
        "mdc-dialog__actions": !this.hideActions
      };
      return (0, _core.h)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    <div class=\"mdc-dialog ", "\"\n        role=\"alertdialog\"\n        aria-modal=\"true\"\n        aria-labelledby=\"title\"\n        aria-describedby=\"content\">\n      <div class=\"mdc-dialog__container\">\n        <div class=\"mdc-dialog__surface\">\n          ", "\n          <div id=\"content\" class=\"mdc-dialog__content\">\n            <slot id=\"contentSlot\"></slot>\n          </div>\n          <footer\n              id=\"actions\"\n              class=\"", "\">\n            <span>\n              <slot name=\"secondaryAction\"></slot>\n            </span>\n            <span>\n             <slot name=\"primaryAction\"></slot>\n            </span>\n          </footer>\n        </div>\n      </div>\n      <div class=\"mdc-dialog__scrim\"></div>\n    </div>"])), (0, _core.c)(i), o, (0, _core.c)(e));
    }
  }, {
    key: "renderHeading",
    value: function renderHeading() {
      return (0, _core.h)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      <h2 id=\"title\" class=\"mdc-dialog__title\">", "</h2>"])), this.heading);
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      _get(_getPrototypeOf(x.prototype), "firstUpdated", this).call(this), this.mdcFoundation.setAutoStackButtons(!0);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(x.prototype), "connectedCallback", this).call(this), this.open && this.mdcFoundation && !this.mdcFoundation.isOpen() && (this.setEventListeners(), this.mdcFoundation.open());
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(x.prototype), "disconnectedCallback", this).call(this), this.open && this.mdcFoundation && (this.removeEventListeners(), this.closingDueToDisconnect = !0, this.mdcFoundation.close(this.currentAction || this.defaultAction), this.closingDueToDisconnect = !1, this.currentAction = void 0, v.remove(this));
    }
  }, {
    key: "forceLayout",
    value: function forceLayout() {
      this.mdcFoundation.layout();
    }
  }, {
    key: "focus",
    value: function focus() {
      var t = this.getInitialFocusEl();
      t && t.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      if (!this.shadowRoot) return;
      var t = this.shadowRoot.activeElement;
      if (t) t instanceof HTMLElement && t.blur();else {
        var _t2 = this.getRootNode(),
            _i2 = _t2 instanceof Document ? _t2.activeElement : null;

        _i2 instanceof HTMLElement && _i2.blur();
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this3 = this;

      this.boundHandleClick = this.mdcFoundation.handleClick.bind(this.mdcFoundation), this.boundLayout = function () {
        _this3.open && _this3.mdcFoundation.layout.bind(_this3.mdcFoundation);
      }, this.boundHandleKeydown = this.mdcFoundation.handleKeydown.bind(this.mdcFoundation), this.boundHandleDocumentKeydown = this.mdcFoundation.handleDocumentKeydown.bind(this.mdcFoundation), this.mdcRoot.addEventListener("click", this.boundHandleClick), window.addEventListener("resize", this.boundLayout, (0, _core.E)()), window.addEventListener("orientationchange", this.boundLayout, (0, _core.E)()), this.mdcRoot.addEventListener("keydown", this.boundHandleKeydown, (0, _core.E)()), document.addEventListener("keydown", this.boundHandleDocumentKeydown, (0, _core.E)());
    }
  }, {
    key: "removeEventListeners",
    value: function removeEventListeners() {
      this.boundHandleClick && this.mdcRoot.removeEventListener("click", this.boundHandleClick), this.boundLayout && (window.removeEventListener("resize", this.boundLayout), window.removeEventListener("orientationchange", this.boundLayout)), this.boundHandleKeydown && this.mdcRoot.removeEventListener("keydown", this.boundHandleKeydown), this.boundHandleDocumentKeydown && this.mdcRoot.removeEventListener("keydown", this.boundHandleDocumentKeydown);
    }
  }, {
    key: "close",
    value: function close() {
      this.open = !1;
    }
  }, {
    key: "show",
    value: function show() {
      this.open = !0;
    }
  }]);

  return x;
}(_core.B);

(0, _core._)([(0, _core.q)(".mdc-dialog")], x.prototype, "mdcRoot", void 0), (0, _core._)([(0, _core.q)('slot[name="primaryAction"]')], x.prototype, "primarySlot", void 0), (0, _core._)([(0, _core.q)('slot[name="secondaryAction"]')], x.prototype, "secondarySlot", void 0), (0, _core._)([(0, _core.q)("#contentSlot")], x.prototype, "contentSlot", void 0), (0, _core._)([(0, _core.q)(".mdc-dialog__content")], x.prototype, "contentElement", void 0), (0, _core._)([(0, _core.q)(".mdc-container")], x.prototype, "conatinerElement", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean
})], x.prototype, "hideActions", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean
}), (0, _core.o)(function () {
  this.forceLayout();
})], x.prototype, "stacked", void 0), (0, _core._)([(0, _core.p)({
  type: String
})], x.prototype, "heading", void 0), (0, _core._)([(0, _core.p)({
  type: String
}), (0, _core.o)(function (t) {
  this.mdcFoundation.setScrimClickAction(t);
})], x.prototype, "scrimClickAction", void 0), (0, _core._)([(0, _core.p)({
  type: String
}), (0, _core.o)(function (t) {
  this.mdcFoundation.setEscapeKeyAction(t);
})], x.prototype, "escapeKeyAction", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean,
  reflect: !0
}), (0, _core.o)(function (t) {
  this.mdcFoundation && this.isConnected && (t ? (this.setEventListeners(), this.mdcFoundation.open()) : (this.removeEventListeners(), this.mdcFoundation.close(this.currentAction || this.defaultAction), this.currentAction = void 0));
})], x.prototype, "open", void 0), (0, _core._)([(0, _core.p)()], x.prototype, "defaultAction", void 0), (0, _core._)([(0, _core.p)()], x.prototype, "actionAttribute", void 0), (0, _core._)([(0, _core.p)()], x.prototype, "initialFocusAttribute", void 0);
var A = (0, _core.b)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([".mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7}.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__title{color:rgba(0,0,0,.87)}.mdc-dialog .mdc-dialog__content{color:rgba(0,0,0,.6)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0,0,0,.12)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog .mdc-dialog__surface{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px)}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0,0,0,.12);display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-dialog[dir=rtl] .mdc-dialog__surface,[dir=rtl] .mdc-dialog .mdc-dialog__surface{text-align:right}.mdc-dialog__title{display:block;margin-top:0;line-height:normal;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);position:relative;flex-shrink:0;box-sizing:border-box;margin:0;padding:0 24px 9px;border-bottom:1px solid transparent}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:\"\";vertical-align:0}.mdc-dialog[dir=rtl] .mdc-dialog__title,[dir=rtl] .mdc-dialog .mdc-dialog__title{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{padding-bottom:15px}.mdc-dialog__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:0.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, 0.03125em);text-decoration:inherit;text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit);flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;-webkit-overflow-scrolling:touch}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid transparent}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-dialog[dir=rtl] .mdc-dialog__button,[dir=rtl] .mdc-dialog .mdc-dialog__button{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog-scroll-lock{overflow:hidden}#actions:not(.mdc-dialog__actions){display:none}.mdc-dialog__surface{box-shadow:var(--mdc-dialog-box-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}@media(min-width: 560px){.mdc-dialog .mdc-dialog__surface{max-width:560px;max-width:var(--mdc-dialog-max-width, 560px)}}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0, 0, 0, 0.32);background-color:var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.32))}.mdc-dialog .mdc-dialog__title{color:rgba(0, 0, 0, 0.87);color:var(--mdc-dialog-heading-ink-color, rgba(0, 0, 0, 0.87))}.mdc-dialog .mdc-dialog__content{color:rgba(0, 0, 0, 0.6);color:var(--mdc-dialog-content-ink-color, rgba(0, 0, 0, 0.6))}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12))}.mdc-dialog .mdc-dialog__surface{min-width:280px;min-width:var(--mdc-dialog-min-width, 280px)}.mdc-dialog .mdc-dialog__surface{max-height:var(--mdc-dialog-max-height, calc(100% - 32px))}#actions ::slotted(*){margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*)[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog[dir=rtl] #actions ::slotted(*),[dir=rtl] .mdc-dialog #actions ::slotted(*){text-align:left}.mdc-dialog--stacked #actions{flex-direction:column-reverse}.mdc-dialog--stacked #actions *:not(:last-child) ::slotted(*){flex-basis:1e-9px;margin-top:12px}"])));

var C = /*#__PURE__*/function (_x) {
  _inherits(C, _x);

  var _super2 = _createSuper(C);

  function C() {
    _classCallCheck(this, C);

    return _super2.apply(this, arguments);
  }

  return _createClass(C);
}(x);

exports.Dialog = C;
C.styles = A, exports.Dialog = C = (0, _core._)([(0, _core.d)("mwc-dialog")], C);
},{"./core.js":"../pkg/snippets/material-yew-ff4853da911fc4ad/build/core.js"}],"../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-list-item.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = void 0;

var _core = require("./core.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var l = /*#__PURE__*/function (_s) {
  _inherits(l, _s);

  var _super = _createSuper(l);

  function l() {
    _classCallCheck(this, l);

    return _super.apply(this, arguments);
  }

  return _createClass(l);
}(_core.P);

exports.ListItem = l;
l.styles = _core.Q, exports.ListItem = l = (0, _core._)([(0, _core.d)("mwc-list-item")], l);
},{"./core.js":"../pkg/snippets/material-yew-ff4853da911fc4ad/build/core.js"}],"../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-list.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = void 0;
Object.defineProperty(exports, "createSetFromIndex", {
  enumerable: true,
  get: function () {
    return _core.N;
  }
});
Object.defineProperty(exports, "isEventMulti", {
  enumerable: true,
  get: function () {
    return _core.O;
  }
});
Object.defineProperty(exports, "isIndexSet", {
  enumerable: true,
  get: function () {
    return _core.I;
  }
});

var _core = require("./core.js");

require("./mwc-list-item.js");

var _templateObject, _templateObject2, _templateObject3;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e6) { throw _e6; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e7) { didErr = true; err = _e7; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var g = function g(t) {
  return t.hasAttribute("mwc-list-item");
};

function f() {
  var _this = this;

  var t = this.itemsReadyResolver;
  this.itemsReady = new Promise(function (t) {
    return _this.itemsReadyResolver = t;
  }), t();
}

var b = /*#__PURE__*/function (_n) {
  _inherits(b, _n);

  var _super = _createSuper(b);

  function b() {
    var _this2;

    _classCallCheck(this, b);

    _this2 = _super.call(this), _this2.mdcAdapter = null, _this2.mdcFoundationClass = _core.G, _this2.activatable = !1, _this2.multi = !1, _this2.wrapFocus = !1, _this2.itemRoles = null, _this2.innerRole = null, _this2.innerAriaLabel = null, _this2.rootTabbable = !1, _this2.previousTabindex = null, _this2.noninteractive = !1, _this2.itemsReadyResolver = function () {}, _this2.itemsReady = Promise.resolve([]), _this2.items_ = [];

    var t = function (t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
      var i;
      return function () {
        var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
        clearTimeout(i), i = setTimeout(function () {
          t(s);
        }, e);
      };
    }(_this2.layout.bind(_assertThisInitialized(_this2)));

    _this2.debouncedLayout = function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
      f.call(_assertThisInitialized(_this2)), t(e);
    };

    return _this2;
  }

  _createClass(b, [{
    key: "_getUpdateComplete",
    value: function () {
      var _getUpdateComplete2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _get(_getPrototypeOf(b.prototype), "_getUpdateComplete", this).call(this);

              case 2:
                _context.next = 4;
                return this.itemsReady;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _getUpdateComplete() {
        return _getUpdateComplete2.apply(this, arguments);
      }

      return _getUpdateComplete;
    }()
  }, {
    key: "assignedElements",
    get: function get() {
      var t = this.slotElement;
      return t ? t.assignedNodes({
        flatten: !0
      }).filter(_core.H) : [];
    }
  }, {
    key: "items",
    get: function get() {
      return this.items_;
    }
  }, {
    key: "updateItems",
    value: function updateItems() {
      var _this3 = this;

      var t = this.assignedElements,
          e = [];

      var _iterator = _createForOfIteratorHelper(t),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _i = _step.value;
          g(_i) && (e.push(_i), _i._managingList = this), _i.hasAttribute("divider") && !_i.hasAttribute("role") && _i.setAttribute("role", "separator");
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.items_ = e;
      var i = new Set();
      if (this.items_.forEach(function (t, e) {
        _this3.itemRoles ? t.setAttribute("role", _this3.itemRoles) : t.removeAttribute("role"), t.selected && i.add(e);
      }), this.multi) this.select(i);else {
        var _t = i.size ? i.entries().next().value[1] : -1;

        this.select(_t);
      }
      var s = new Event("items-updated", {
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(s);
    }
  }, {
    key: "selected",
    get: function get() {
      var t = this.index;
      if (!(0, _core.I)(t)) return -1 === t ? null : this.items[t];
      var e = [];

      var _iterator2 = _createForOfIteratorHelper(t),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _i2 = _step2.value;
          e.push(this.items[_i2]);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return e;
    }
  }, {
    key: "index",
    get: function get() {
      return this.mdcFoundation ? this.mdcFoundation.getSelectedIndex() : -1;
    }
  }, {
    key: "render",
    value: function render() {
      var t = null === this.innerRole ? void 0 : this.innerRole,
          e = null === this.innerAriaLabel ? void 0 : this.innerAriaLabel,
          i = this.rootTabbable ? "0" : "-1";
      return (0, _core.h)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <!-- @ts-ignore -->\n      <ul\n          tabindex=", "\n          role=\"", "\"\n          aria-label=\"", "\"\n          class=\"mdc-list\"\n          @keydown=", "\n          @focusin=", "\n          @focusout=", "\n          @request-selected=", "\n          @list-item-rendered=", ">\n        <slot></slot>\n        ", "\n      </ul>\n    "])), i, (0, _core.f)(t), (0, _core.f)(e), this.onKeydown, this.onFocusIn, this.onFocusOut, this.onRequestSelected, this.onListItemConnected, this.renderPlaceholder());
    }
  }, {
    key: "renderPlaceholder",
    value: function renderPlaceholder() {
      return void 0 !== this.emptyMessage && 0 === this.assignedElements.length ? (0, _core.h)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        <mwc-list-item noninteractive>", "</mwc-list-item>\n      "])), this.emptyMessage) : null;
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      _get(_getPrototypeOf(b.prototype), "firstUpdated", this).call(this), this.items.length || (this.mdcFoundation.setMulti(this.multi), this.layout());
    }
  }, {
    key: "onFocusIn",
    value: function onFocusIn(t) {
      if (this.mdcFoundation && this.mdcRoot) {
        var _e = this.getIndexOfTarget(t);

        this.mdcFoundation.handleFocusIn(t, _e);
      }
    }
  }, {
    key: "onFocusOut",
    value: function onFocusOut(t) {
      if (this.mdcFoundation && this.mdcRoot) {
        var _e2 = this.getIndexOfTarget(t);

        this.mdcFoundation.handleFocusOut(t, _e2);
      }
    }
  }, {
    key: "onKeydown",
    value: function onKeydown(t) {
      if (this.mdcFoundation && this.mdcRoot) {
        var _e3 = this.getIndexOfTarget(t),
            _i3 = t.target,
            _s = g(_i3);

        this.mdcFoundation.handleKeydown(t, _s, _e3);
      }
    }
  }, {
    key: "onRequestSelected",
    value: function onRequestSelected(t) {
      if (this.mdcFoundation) {
        var _e4 = this.getIndexOfTarget(t);

        if (-1 === _e4 && (this.layout(), _e4 = this.getIndexOfTarget(t), -1 === _e4)) return;
        if (this.items[_e4].disabled) return;
        var _i4 = t.detail.selected,
            _s2 = t.detail.source;
        this.mdcFoundation.handleSingleSelection(_e4, "interaction" === _s2, _i4), t.stopPropagation();
      }
    }
  }, {
    key: "getIndexOfTarget",
    value: function getIndexOfTarget(t) {
      var e = this.items,
          i = t.composedPath();

      var _iterator3 = _createForOfIteratorHelper(i),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _t2 = _step3.value;

          var _i5 = -1;

          if ((0, _core.H)(_t2) && g(_t2) && (_i5 = e.indexOf(_t2)), -1 !== _i5) return _i5;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return -1;
    }
  }, {
    key: "createAdapter",
    value: function createAdapter() {
      var _this4 = this;

      return this.mdcAdapter = {
        getListItemCount: function getListItemCount() {
          return _this4.mdcRoot ? _this4.items.length : 0;
        },
        getFocusedElementIndex: this.getFocusedItemIndex,
        getAttributeForElementIndex: function getAttributeForElementIndex(t, e) {
          if (!_this4.mdcRoot) return "";
          var i = _this4.items[t];
          return i ? i.getAttribute(e) : "";
        },
        setAttributeForElementIndex: function setAttributeForElementIndex(t, e, i) {
          if (!_this4.mdcRoot) return;
          var s = _this4.items[t];
          s && s.setAttribute(e, i);
        },
        focusItemAtIndex: function focusItemAtIndex(t) {
          var e = _this4.items[t];
          e && e.focus();
        },
        setTabIndexForElementIndex: function setTabIndexForElementIndex(t, e) {
          var i = _this4.items[t];
          i && (i.tabindex = e);
        },
        notifyAction: function notifyAction(t) {
          var e = {
            bubbles: !0,
            composed: !0
          };
          e.detail = {
            index: t
          };
          var i = new CustomEvent("action", e);

          _this4.dispatchEvent(i);
        },
        notifySelected: function notifySelected(t, e) {
          var i = {
            bubbles: !0,
            composed: !0
          };
          i.detail = {
            index: t,
            diff: e
          };
          var s = new CustomEvent("selected", i);

          _this4.dispatchEvent(s);
        },
        isFocusInsideList: function isFocusInsideList() {
          return (0, _core.J)(_this4);
        },
        isRootFocused: function isRootFocused() {
          var t = _this4.mdcRoot;
          return t.getRootNode().activeElement === t;
        },
        setDisabledStateForElementIndex: function setDisabledStateForElementIndex(t, e) {
          var i = _this4.items[t];
          i && (i.disabled = e);
        },
        getDisabledStateForElementIndex: function getDisabledStateForElementIndex(t) {
          var e = _this4.items[t];
          return !!e && e.disabled;
        },
        setSelectedStateForElementIndex: function setSelectedStateForElementIndex(t, e) {
          var i = _this4.items[t];
          i && (i.selected = e);
        },
        getSelectedStateForElementIndex: function getSelectedStateForElementIndex(t) {
          var e = _this4.items[t];
          return !!e && e.selected;
        },
        setActivatedStateForElementIndex: function setActivatedStateForElementIndex(t, e) {
          var i = _this4.items[t];
          i && (i.activated = e);
        }
      }, this.mdcAdapter;
    }
  }, {
    key: "selectUi",
    value: function selectUi(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      var i = this.items[t];
      i && (i.selected = !0, i.activated = e);
    }
  }, {
    key: "deselectUi",
    value: function deselectUi(t) {
      var e = this.items[t];
      e && (e.selected = !1, e.activated = !1);
    }
  }, {
    key: "select",
    value: function select(t) {
      this.mdcFoundation && this.mdcFoundation.setSelectedIndex(t);
    }
  }, {
    key: "toggle",
    value: function toggle(t, e) {
      this.multi && this.mdcFoundation.toggleMultiAtIndex(t, e);
    }
  }, {
    key: "onListItemConnected",
    value: function onListItemConnected(t) {
      var e = t.target;
      this.layout(-1 === this.items.indexOf(e));
    }
  }, {
    key: "layout",
    value: function layout() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
      t && this.updateItems();
      var e = this.items[0];

      var _iterator4 = _createForOfIteratorHelper(this.items),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _t3 = _step4.value;
          _t3.tabindex = -1;
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      e && (this.noninteractive ? this.previousTabindex || (this.previousTabindex = e) : e.tabindex = 0), this.itemsReadyResolver();
    }
  }, {
    key: "getFocusedItemIndex",
    value: function getFocusedItemIndex() {
      if (!this.mdcRoot) return -1;
      if (!this.items.length) return -1;
      var t = (0, _core.K)();
      if (!t.length) return -1;

      for (var _e5 = t.length - 1; _e5 >= 0; _e5--) {
        var _i6 = t[_e5];
        if (g(_i6)) return this.items.indexOf(_i6);
      }

      return -1;
    }
  }, {
    key: "focusItemAtIndex",
    value: function focusItemAtIndex(t) {
      var _iterator5 = _createForOfIteratorHelper(this.items),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _t4 = _step5.value;

          if (0 === _t4.tabindex) {
            _t4.tabindex = -1;
            break;
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      this.items[t].tabindex = 0, this.items[t].focus();
    }
  }, {
    key: "focus",
    value: function focus() {
      var t = this.mdcRoot;
      t && t.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      var t = this.mdcRoot;
      t && t.blur();
    }
  }]);

  return b;
}(_core.B);

(0, _core._)([(0, _core.p)({
  type: String
})], b.prototype, "emptyMessage", void 0), (0, _core._)([(0, _core.q)(".mdc-list")], b.prototype, "mdcRoot", void 0), (0, _core._)([(0, _core.q)("slot")], b.prototype, "slotElement", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean
}), (0, _core.o)(function (t) {
  this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(t);
})], b.prototype, "activatable", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean
}), (0, _core.o)(function (t, e) {
  this.mdcFoundation && this.mdcFoundation.setMulti(t), void 0 !== e && this.layout();
})], b.prototype, "multi", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean
}), (0, _core.o)(function (t) {
  this.mdcFoundation && this.mdcFoundation.setWrapFocus(t);
})], b.prototype, "wrapFocus", void 0), (0, _core._)([(0, _core.p)({
  type: String
}), (0, _core.o)(function (t, e) {
  void 0 !== e && this.updateItems();
})], b.prototype, "itemRoles", void 0), (0, _core._)([(0, _core.p)({
  type: String
})], b.prototype, "innerRole", void 0), (0, _core._)([(0, _core.p)({
  type: String
})], b.prototype, "innerAriaLabel", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean
})], b.prototype, "rootTabbable", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean,
  reflect: !0
}), (0, _core.o)(function (t) {
  var e = this.slotElement;

  if (t && e) {
    var _t5 = (0, _core.n)(e, '[tabindex="0"]');

    this.previousTabindex = _t5, _t5 && _t5.setAttribute("tabindex", "-1");
  } else !t && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
})], b.prototype, "noninteractive", void 0);
var y = (0, _core.b)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-list:focus{outline:none}.mdc-list-item{height:48px}.mdc-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc(100% - var(--mdc-list-inset-margin, 72px))}.mdc-list-group[dir=rtl] .mdc-list ::slotted([divider][inset]),[dir=rtl] .mdc-list-group .mdc-list ::slotted([divider][inset]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-list ::slotted([divider][inset][padded]){width:calc(100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px))}.mdc-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-list--two-line.mdc-list--dense ::slotted([mwc-list-item]),.mdc-list--avatar-list.mdc-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-list--avatar-list.mdc-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-list--dense ::slotted(.mdc-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list--dense ::slotted(.mdc-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:\"\";vertical-align:0}.mdc-list--dense ::slotted(.mdc-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}"])));

var x = /*#__PURE__*/function (_b) {
  _inherits(x, _b);

  var _super2 = _createSuper(x);

  function x() {
    _classCallCheck(this, x);

    return _super2.apply(this, arguments);
  }

  return _createClass(x);
}(b);

exports.List = x;
x.styles = y, exports.List = x = (0, _core._)([(0, _core.d)("mwc-list")], x);
},{"./core.js":"../pkg/snippets/material-yew-ff4853da911fc4ad/build/core.js","./mwc-list-item.js":"../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-list-item.js"}],"../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-menu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = void 0;
Object.defineProperty(exports, "createSetFromIndex", {
  enumerable: true,
  get: function () {
    return _core.N;
  }
});
Object.defineProperty(exports, "isEventMulti", {
  enumerable: true,
  get: function () {
    return _core.O;
  }
});
Object.defineProperty(exports, "isIndexSet", {
  enumerable: true,
  get: function () {
    return _core.I;
  }
});

var _core = require("./core.js");

require("./mwc-list-item.js");

require("./mwc-list.js");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var A = {
  TOP_LEFT: _core.a8.TOP_LEFT,
  TOP_RIGHT: _core.a8.TOP_RIGHT,
  BOTTOM_LEFT: _core.a8.BOTTOM_LEFT,
  BOTTOM_RIGHT: _core.a8.BOTTOM_RIGHT,
  TOP_START: _core.a8.TOP_START,
  TOP_END: _core.a8.TOP_END,
  BOTTOM_START: _core.a8.BOTTOM_START,
  BOTTOM_END: _core.a8.BOTTOM_END
};

var w = /*#__PURE__*/function (_d) {
  _inherits(w, _d);

  var _super = _createSuper(w);

  function w() {
    var _this;

    _classCallCheck(this, w);

    _this = _super.apply(this, arguments), _this.mdcFoundationClass = _core.ad, _this.absolute = !1, _this.fullwidth = !1, _this.fixed = !1, _this.x = null, _this.y = null, _this.quick = !1, _this.open = !1, _this.bitwiseCorner = _core.a8.TOP_START, _this.previousMenuCorner = null, _this.menuCorner = "START", _this.corner = "TOP_START", _this.styleTop = "", _this.styleLeft = "", _this.styleRight = "", _this.styleBottom = "", _this.styleMaxHeight = "", _this.styleTransformOrigin = "", _this.anchor = null, _this.previouslyFocused = null, _this.previousAnchor = null, _this.onBodyClickBound = function () {};
    return _this;
  }

  _createClass(w, [{
    key: "render",
    value: function render() {
      var t = {
        "mdc-menu-surface--fixed": this.fixed,
        "mdc-menu-surface--fullwidth": this.fullwidth
      },
          e = {
        top: this.styleTop,
        left: this.styleLeft,
        right: this.styleRight,
        bottom: this.styleBottom,
        "max-height": this.styleMaxHeight,
        "transform-origin": this.styleTransformOrigin
      };
      return (0, _core.h)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <div\n          class=\"mdc-menu-surface ", "\"\n          style=\"", "\"\n          @keydown=", "\n          @opened=", "\n          @closed=", ">\n        <slot></slot>\n      </div>"])), (0, _core.c)(t), (0, _core.r)(e), this.onKeydown, this.registerBodyClick, this.deregisterBodyClick);
    }
  }, {
    key: "createAdapter",
    value: function createAdapter() {
      var _this2 = this;

      return Object.assign(Object.assign({}, (0, _core.j)(this.mdcRoot)), {
        hasAnchor: function hasAnchor() {
          return !!_this2.anchor;
        },
        notifyClose: function notifyClose() {
          var t = new CustomEvent("closed", {
            bubbles: !0,
            composed: !0
          });
          _this2.open = !1, _this2.mdcRoot.dispatchEvent(t);
        },
        notifyOpen: function notifyOpen() {
          var t = new CustomEvent("opened", {
            bubbles: !0,
            composed: !0
          });
          _this2.open = !0, _this2.mdcRoot.dispatchEvent(t);
        },
        isElementInContainer: function isElementInContainer() {
          return !1;
        },
        isRtl: function isRtl() {
          return !!_this2.mdcRoot && "rtl" === getComputedStyle(_this2.mdcRoot).direction;
        },
        setTransformOrigin: function setTransformOrigin(t) {
          _this2.mdcRoot && (_this2.styleTransformOrigin = t);
        },
        isFocused: function isFocused() {
          return (0, _core.J)(_this2);
        },
        saveFocus: function saveFocus() {
          var t = (0, _core.K)(),
              e = t.length;
          e || (_this2.previouslyFocused = null), _this2.previouslyFocused = t[e - 1];
        },
        restoreFocus: function restoreFocus() {
          _this2.previouslyFocused && "focus" in _this2.previouslyFocused && _this2.previouslyFocused.focus();
        },
        getInnerDimensions: function getInnerDimensions() {
          var t = _this2.mdcRoot;
          return t ? {
            width: t.offsetWidth,
            height: t.offsetHeight
          } : {
            width: 0,
            height: 0
          };
        },
        getAnchorDimensions: function getAnchorDimensions() {
          var t = _this2.anchor;
          return t ? t.getBoundingClientRect() : null;
        },
        getBodyDimensions: function getBodyDimensions() {
          return {
            width: document.body.clientWidth,
            height: document.body.clientHeight
          };
        },
        getWindowDimensions: function getWindowDimensions() {
          return {
            width: window.innerWidth,
            height: window.innerHeight
          };
        },
        getWindowScroll: function getWindowScroll() {
          return {
            x: window.pageXOffset,
            y: window.pageYOffset
          };
        },
        setPosition: function setPosition(t) {
          _this2.mdcRoot && (_this2.styleLeft = "left" in t ? t.left + "px" : "", _this2.styleRight = "right" in t ? t.right + "px" : "", _this2.styleTop = "top" in t ? t.top + "px" : "", _this2.styleBottom = "bottom" in t ? t.bottom + "px" : "");
        },
        setMaxHeight: function () {
          var _setMaxHeight = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(t) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.t0 = _this2.mdcRoot;

                    if (!_context.t0) {
                      _context.next = 6;
                      break;
                    }

                    _this2.styleMaxHeight = t;
                    _context.next = 5;
                    return _this2.updateComplete;

                  case 5:
                    _this2.styleMaxHeight = "var(--mdc-menu-max-height, ".concat(t, ")");

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function setMaxHeight(_x) {
            return _setMaxHeight.apply(this, arguments);
          }

          return setMaxHeight;
        }()
      });
    }
  }, {
    key: "onKeydown",
    value: function onKeydown(t) {
      this.mdcFoundation && this.mdcFoundation.handleKeydown(t);
    }
  }, {
    key: "onBodyClick",
    value: function onBodyClick(t) {
      -1 === t.composedPath().indexOf(this) && this.close();
    }
  }, {
    key: "registerBodyClick",
    value: function registerBodyClick() {
      this.onBodyClickBound = this.onBodyClick.bind(this), document.body.addEventListener("click", this.onBodyClickBound, {
        passive: !0,
        capture: !0
      });
    }
  }, {
    key: "deregisterBodyClick",
    value: function deregisterBodyClick() {
      document.body.removeEventListener("click", this.onBodyClickBound, {
        capture: !0
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.open = !1;
    }
  }, {
    key: "show",
    value: function show() {
      this.open = !0;
    }
  }]);

  return w;
}(_core.B);

(0, _core._)([(0, _core.q)(".mdc-menu-surface")], w.prototype, "mdcRoot", void 0), (0, _core._)([(0, _core.q)("slot")], w.prototype, "slotElement", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean
}), (0, _core.o)(function (t) {
  this.mdcFoundation && !this.fixed && this.mdcFoundation.setIsHoisted(t);
})], w.prototype, "absolute", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean
})], w.prototype, "fullwidth", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean
}), (0, _core.o)(function (t) {
  this.mdcFoundation && !this.absolute && this.mdcFoundation.setIsHoisted(t);
})], w.prototype, "fixed", void 0), (0, _core._)([(0, _core.p)({
  type: Number
}), (0, _core.o)(function (t) {
  this.mdcFoundation && null !== this.y && null !== t && (this.mdcFoundation.setAbsolutePosition(t, this.y), this.mdcFoundation.setAnchorMargin({
    left: t,
    top: this.y,
    right: -t,
    bottom: this.y
  }));
})], w.prototype, "x", void 0), (0, _core._)([(0, _core.p)({
  type: Number
}), (0, _core.o)(function (t) {
  this.mdcFoundation && null !== this.x && null !== t && (this.mdcFoundation.setAbsolutePosition(this.x, t), this.mdcFoundation.setAnchorMargin({
    left: this.x,
    top: t,
    right: -this.x,
    bottom: t
  }));
})], w.prototype, "y", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean
}), (0, _core.o)(function (t) {
  this.mdcFoundation && this.mdcFoundation.setQuickOpen(t);
})], w.prototype, "quick", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean,
  reflect: !0
}), (0, _core.o)(function (t, e) {
  this.mdcFoundation && (t ? this.mdcFoundation.open() : void 0 !== e && this.mdcFoundation.close());
})], w.prototype, "open", void 0), (0, _core._)([(0, _core.i)(), (0, _core.o)(function (t) {
  this.mdcFoundation && this.mdcFoundation.setAnchorCorner(t);
})], w.prototype, "bitwiseCorner", void 0), (0, _core._)([(0, _core.p)({
  type: String
}), (0, _core.o)(function (t) {
  if (this.mdcFoundation) {
    var _e = "START" === t || "END" === t,
        _o = null === this.previousMenuCorner,
        _i = !_o && t !== this.previousMenuCorner,
        _n = _o && "END" === t;

    _e && (_i || _n) && (this.bitwiseCorner = this.bitwiseCorner ^ _core.ac.RIGHT, this.mdcFoundation.flipCornerHorizontally(), this.previousMenuCorner = t);
  }
})], w.prototype, "menuCorner", void 0), (0, _core._)([(0, _core.p)({
  type: String
}), (0, _core.o)(function (t) {
  if (this.mdcFoundation && t) {
    var _e2 = A[t];
    "END" === this.menuCorner && (_e2 ^= _core.ac.RIGHT), this.bitwiseCorner = _e2;
  }
})], w.prototype, "corner", void 0), (0, _core._)([(0, _core.i)()], w.prototype, "styleTop", void 0), (0, _core._)([(0, _core.i)()], w.prototype, "styleLeft", void 0), (0, _core._)([(0, _core.i)()], w.prototype, "styleRight", void 0), (0, _core._)([(0, _core.i)()], w.prototype, "styleBottom", void 0), (0, _core._)([(0, _core.i)()], w.prototype, "styleMaxHeight", void 0), (0, _core._)([(0, _core.i)()], w.prototype, "styleTransformOrigin", void 0);
var C = (0, _core.b)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([".mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1),height 250ms cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{z-index:8;z-index:var(--mdc-menu-z-index, 8);max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px))}"])));

var _ = /*#__PURE__*/function (_w) {
  _inherits(_, _w);

  var _super2 = _createSuper(_);

  function _() {
    _classCallCheck(this, _);

    return _super2.apply(this, arguments);
  }

  return _createClass(_);
}(w);

_.styles = C, _ = (0, _core._)([(0, _core.d)("mwc-menu-surface")], _);

var _S = function S(t, e) {
  return (_S = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (t, e) {
    t.__proto__ = e;
  } || function (t, e) {
    for (var o in e) {
      e.hasOwnProperty(o) && (t[o] = e[o]);
    }
  })(t, e);
};

var _F = function F() {
  return (_F = Object.assign || function (t) {
    for (var e, o = 1, i = arguments.length; o < i; o++) {
      for (var n in e = arguments[o]) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    }

    return t;
  }).apply(this, arguments);
},
    R = function (t) {
  function e(o) {
    var i = t.call(this, _F(_F({}, e.defaultAdapter), o)) || this;
    return i.closeAnimationEndTimerId_ = 0, i.defaultFocusState_ = _core.ah.LIST_ROOT, i;
  }

  return function (t, e) {
    function o() {
      this.constructor = t;
    }

    _S(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
  }(e, t), Object.defineProperty(e, "cssClasses", {
    get: function get() {
      return _core.ae;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "strings", {
    get: function get() {
      return _core.af;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "numbers", {
    get: function get() {
      return _core.ag;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "defaultAdapter", {
    get: function get() {
      return {
        addClassToElementAtIndex: function addClassToElementAtIndex() {},
        removeClassFromElementAtIndex: function removeClassFromElementAtIndex() {},
        addAttributeToElementAtIndex: function addAttributeToElementAtIndex() {},
        removeAttributeFromElementAtIndex: function removeAttributeFromElementAtIndex() {},
        elementContainsClass: function elementContainsClass() {
          return !1;
        },
        closeSurface: function closeSurface() {},
        getElementIndex: function getElementIndex() {
          return -1;
        },
        notifySelected: function notifySelected() {},
        getMenuItemCount: function getMenuItemCount() {
          return 0;
        },
        focusItemAtIndex: function focusItemAtIndex() {},
        focusListRoot: function focusListRoot() {},
        getSelectedSiblingOfItemAtIndex: function getSelectedSiblingOfItemAtIndex() {
          return -1;
        },
        isSelectableItemAtIndex: function isSelectableItemAtIndex() {
          return !1;
        }
      };
    },
    enumerable: !0,
    configurable: !0
  }), e.prototype.destroy = function () {
    this.closeAnimationEndTimerId_ && clearTimeout(this.closeAnimationEndTimerId_), this.adapter.closeSurface();
  }, e.prototype.handleKeydown = function (t) {
    var e = t.key,
        o = t.keyCode;
    ("Tab" === e || 9 === o) && this.adapter.closeSurface(!0);
  }, e.prototype.handleItemAction = function (t) {
    var e = this,
        o = this.adapter.getElementIndex(t);
    o < 0 || (this.adapter.notifySelected({
      index: o
    }), this.adapter.closeSurface(), this.closeAnimationEndTimerId_ = setTimeout(function () {
      var o = e.adapter.getElementIndex(t);
      o >= 0 && e.adapter.isSelectableItemAtIndex(o) && e.setSelectedIndex(o);
    }, _core.ad.numbers.TRANSITION_CLOSE_DURATION));
  }, e.prototype.handleMenuSurfaceOpened = function () {
    switch (this.defaultFocusState_) {
      case _core.ah.FIRST_ITEM:
        this.adapter.focusItemAtIndex(0);
        break;

      case _core.ah.LAST_ITEM:
        this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
        break;

      case _core.ah.NONE:
        break;

      default:
        this.adapter.focusListRoot();
    }
  }, e.prototype.setDefaultFocusState = function (t) {
    this.defaultFocusState_ = t;
  }, e.prototype.setSelectedIndex = function (t) {
    if (this.validatedIndex_(t), !this.adapter.isSelectableItemAtIndex(t)) throw new Error("MDCMenuFoundation: No selection group at specified index.");
    var e = this.adapter.getSelectedSiblingOfItemAtIndex(t);
    e >= 0 && (this.adapter.removeAttributeFromElementAtIndex(e, _core.af.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(e, _core.ae.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(t, _core.ae.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(t, _core.af.ARIA_CHECKED_ATTR, "true");
  }, e.prototype.setEnabled = function (t, e) {
    this.validatedIndex_(t), e ? (this.adapter.removeClassFromElementAtIndex(t, _core.ai.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, _core.af.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(t, _core.ai.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, _core.af.ARIA_DISABLED_ATTR, "true"));
  }, e.prototype.validatedIndex_ = function (t) {
    var e = this.adapter.getMenuItemCount();
    if (!(t >= 0 && t < e)) throw new Error("MDCMenuFoundation: No list item at specified index.");
  }, e;
}(_core.m);

var B = /*#__PURE__*/function (_d2) {
  _inherits(B, _d2);

  var _super3 = _createSuper(B);

  function B() {
    var _this3;

    _classCallCheck(this, B);

    _this3 = _super3.apply(this, arguments), _this3.mdcFoundationClass = R, _this3.listElement_ = null, _this3.anchor = null, _this3.open = !1, _this3.quick = !1, _this3.wrapFocus = !1, _this3.innerRole = "menu", _this3.corner = "TOP_START", _this3.x = null, _this3.y = null, _this3.absolute = !1, _this3.multi = !1, _this3.activatable = !1, _this3.fixed = !1, _this3.forceGroupSelection = !1, _this3.fullwidth = !1, _this3.menuCorner = "START", _this3.defaultFocus = "LIST_ROOT", _this3._listUpdateComplete = null;
    return _this3;
  }

  _createClass(B, [{
    key: "listElement",
    get: function get() {
      return this.listElement_ || (this.listElement_ = this.renderRoot.querySelector("mwc-list")), this.listElement_;
    }
  }, {
    key: "items",
    get: function get() {
      var t = this.listElement;
      return t ? t.items : [];
    }
  }, {
    key: "index",
    get: function get() {
      var t = this.listElement;
      return t ? t.index : -1;
    }
  }, {
    key: "selected",
    get: function get() {
      var t = this.listElement;
      return t ? t.selected : null;
    }
  }, {
    key: "render",
    value: function render() {
      var t = "menu" === this.innerRole ? "menuitem" : "option";
      return (0, _core.h)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      <mwc-menu-surface\n          ?hidden=", "\n          .anchor=", "\n          .open=", "\n          .quick=", "\n          .corner=", "\n          .x=", "\n          .y=", "\n          .absolute=", "\n          .fixed=", "\n          .fullwidth=", "\n          .menuCorner=", "\n          class=\"mdc-menu mdc-menu-surface\"\n          @closed=", "\n          @opened=", "\n          @keydown=", ">\n        <mwc-list\n          rootTabbable\n          .innerRole=", "\n          .multi=", "\n          class=\"mdc-list\"\n          .itemRoles=", "\n          .wrapFocus=", "\n          .activatable=", "\n          @action=", ">\n        <slot></slot>\n      </mwc-list>\n    </mwc-menu-surface>"])), !this.open, this.anchor, this.open, this.quick, this.corner, this.x, this.y, this.absolute, this.fixed, this.fullwidth, this.menuCorner, this.onClosed, this.onOpened, this.onKeydown, this.innerRole, this.multi, t, this.wrapFocus, this.activatable, this.onAction);
    }
  }, {
    key: "createAdapter",
    value: function createAdapter() {
      var _this4 = this;

      return {
        addClassToElementAtIndex: function addClassToElementAtIndex(t, e) {
          var o = _this4.listElement;
          if (!o) return;
          var i = o.items[t];
          i && ("mdc-menu-item--selected" === e ? _this4.forceGroupSelection && !i.selected && o.toggle(t, !0) : i.classList.add(e));
        },
        removeClassFromElementAtIndex: function removeClassFromElementAtIndex(t, e) {
          var o = _this4.listElement;
          if (!o) return;
          var i = o.items[t];
          i && ("mdc-menu-item--selected" === e ? i.selected && o.toggle(t, !1) : i.classList.remove(e));
        },
        addAttributeToElementAtIndex: function addAttributeToElementAtIndex(t, e, o) {
          var i = _this4.listElement;
          if (!i) return;
          var n = i.items[t];
          n && n.setAttribute(e, o);
        },
        removeAttributeFromElementAtIndex: function removeAttributeFromElementAtIndex(t, e) {
          var o = _this4.listElement;
          if (!o) return;
          var i = o.items[t];
          i && i.removeAttribute(e);
        },
        elementContainsClass: function elementContainsClass(t, e) {
          return t.classList.contains(e);
        },
        closeSurface: function closeSurface() {
          _this4.open = !1;
        },
        getElementIndex: function getElementIndex(t) {
          var e = _this4.listElement;
          return e ? e.items.indexOf(t) : -1;
        },
        notifySelected: function notifySelected() {},
        getMenuItemCount: function getMenuItemCount() {
          var t = _this4.listElement;
          return t ? t.items.length : 0;
        },
        focusItemAtIndex: function focusItemAtIndex(t) {
          var e = _this4.listElement;
          if (!e) return;
          var o = e.items[t];
          o && o.focus();
        },
        focusListRoot: function focusListRoot() {
          _this4.listElement && _this4.listElement.focus();
        },
        getSelectedSiblingOfItemAtIndex: function getSelectedSiblingOfItemAtIndex(t) {
          var e = _this4.listElement;
          if (!e) return -1;
          var o = e.items[t];
          if (!o || !o.group) return -1;

          for (var _i2 = 0; _i2 < e.items.length; _i2++) {
            if (_i2 === t) continue;
            var _n2 = e.items[_i2];
            if (_n2.selected && _n2.group === o.group) return _i2;
          }

          return -1;
        },
        isSelectableItemAtIndex: function isSelectableItemAtIndex(t) {
          var e = _this4.listElement;
          if (!e) return !1;
          var o = e.items[t];
          return !!o && o.hasAttribute("group");
        }
      };
    }
  }, {
    key: "onKeydown",
    value: function onKeydown(t) {
      this.mdcFoundation && this.mdcFoundation.handleKeydown(t);
    }
  }, {
    key: "onAction",
    value: function onAction(t) {
      var e = this.listElement;

      if (this.mdcFoundation && e) {
        var _o2 = t.detail.index,
            _i3 = e.items[_o2];
        _i3 && this.mdcFoundation.handleItemAction(_i3);
      }
    }
  }, {
    key: "onOpened",
    value: function onOpened() {
      this.open = !0, this.mdcFoundation && this.mdcFoundation.handleMenuSurfaceOpened();
    }
  }, {
    key: "onClosed",
    value: function onClosed() {
      this.open = !1;
    }
  }, {
    key: "_getUpdateComplete",
    value: function () {
      var _getUpdateComplete2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._listUpdateComplete;

              case 2:
                _context2.next = 4;
                return _get(_getPrototypeOf(B.prototype), "_getUpdateComplete", this).call(this);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _getUpdateComplete() {
        return _getUpdateComplete2.apply(this, arguments);
      }

      return _getUpdateComplete;
    }()
  }, {
    key: "firstUpdated",
    value: function () {
      var _firstUpdated = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var t;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _get(_getPrototypeOf(B.prototype), "firstUpdated", this).call(this);

                t = this.listElement;
                _context3.t0 = t;

                if (!_context3.t0) {
                  _context3.next = 7;
                  break;
                }

                this._listUpdateComplete = t.updateComplete;
                _context3.next = 7;
                return this._listUpdateComplete;

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function firstUpdated() {
        return _firstUpdated.apply(this, arguments);
      }

      return firstUpdated;
    }()
  }, {
    key: "select",
    value: function select(t) {
      var e = this.listElement;
      e && e.select(t);
    }
  }, {
    key: "close",
    value: function close() {
      this.open = !1;
    }
  }, {
    key: "show",
    value: function show() {
      this.open = !0;
    }
  }, {
    key: "getFocusedItemIndex",
    value: function getFocusedItemIndex() {
      var t = this.listElement;
      return t ? t.getFocusedItemIndex() : -1;
    }
  }, {
    key: "focusItemAtIndex",
    value: function focusItemAtIndex(t) {
      var e = this.listElement;
      e && e.focusItemAtIndex(t);
    }
  }, {
    key: "layout",
    value: function layout() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
      var e = this.listElement;
      e && e.layout(t);
    }
  }]);

  return B;
}(_core.B);

(0, _core._)([(0, _core.q)(".mdc-menu")], B.prototype, "mdcRoot", void 0), (0, _core._)([(0, _core.q)("slot")], B.prototype, "slotElement", void 0), (0, _core._)([(0, _core.p)({
  type: Object
})], B.prototype, "anchor", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean,
  reflect: !0
})], B.prototype, "open", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean
})], B.prototype, "quick", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean
})], B.prototype, "wrapFocus", void 0), (0, _core._)([(0, _core.p)({
  type: String
})], B.prototype, "innerRole", void 0), (0, _core._)([(0, _core.p)({
  type: String
})], B.prototype, "corner", void 0), (0, _core._)([(0, _core.p)({
  type: Number
})], B.prototype, "x", void 0), (0, _core._)([(0, _core.p)({
  type: Number
})], B.prototype, "y", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean
})], B.prototype, "absolute", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean
})], B.prototype, "multi", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean
})], B.prototype, "activatable", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean
})], B.prototype, "fixed", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean
})], B.prototype, "forceGroupSelection", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean
})], B.prototype, "fullwidth", void 0), (0, _core._)([(0, _core.p)({
  type: String
})], B.prototype, "menuCorner", void 0), (0, _core._)([(0, _core.p)({
  type: String
}), (0, _core.o)(function (t) {
  this.mdcFoundation && this.mdcFoundation.setDefaultFocusState(_core.ah[t]);
})], B.prototype, "defaultFocus", void 0);
var M = (0, _core.b)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["mwc-list ::slotted([mwc-list-item]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}mwc-list{max-width:var(--mdc-menu-max-width, auto);min-width:var(--mdc-menu-min-width, auto)}"])));

var L = /*#__PURE__*/function (_B) {
  _inherits(L, _B);

  var _super4 = _createSuper(L);

  function L() {
    _classCallCheck(this, L);

    return _super4.apply(this, arguments);
  }

  return _createClass(L);
}(B);

exports.Menu = L;
L.styles = M, exports.Menu = L = (0, _core._)([(0, _core.d)("mwc-menu")], L);
},{"./core.js":"../pkg/snippets/material-yew-ff4853da911fc4ad/build/core.js","./mwc-list-item.js":"../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-list-item.js","./mwc-list.js":"../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-list.js"}],"../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-select.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;

var _core = require("./core.js");

require("./mwc-list-item.js");

require("./mwc-list.js");

require("./mwc-menu.js");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e4) { throw _e4; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e5) { didErr = true; err = _e5; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var y = ["input", "button", "textarea", "select"],
    w = function w(e) {
  var t = e.target;

  if (t) {
    var l = ("" + t.tagName).toLowerCase();
    -1 === y.indexOf(l) && e.preventDefault();
  }
};

function I(e, t) {
  for (var l = new Map(), i = 0; i < e; i++) {
    var c = t(i).trim();

    if (c) {
      var d = c[0].toLowerCase();
      l.has(d) || l.set(d, []), l.get(d).push({
        text: c.toLowerCase(),
        index: i
      });
    }
  }

  return l.forEach(function (e) {
    e.sort(function (e, t) {
      return e.index - t.index;
    });
  }), l;
}

function E(t, l) {
  var i,
      c = t.nextChar,
      d = t.focusItemAtIndex,
      o = t.sortedIndexByFirstChar,
      n = t.focusedItemIndex,
      a = t.skipFocus,
      s = t.isItemAtIndexDisabled;
  return clearTimeout(l.bufferClearTimeout), l.bufferClearTimeout = setTimeout(function () {
    !function (e) {
      e.typeaheadBuffer = "";
    }(l);
  }, _core.a5.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), l.typeaheadBuffer = l.typeaheadBuffer + c, -1 === (i = 1 === l.typeaheadBuffer.length ? function (e, t, l, i) {
    var c = i.typeaheadBuffer[0],
        d = e.get(c);
    if (!d) return -1;

    if (c === i.currentFirstChar && d[i.sortedIndexCursor].index === t) {
      i.sortedIndexCursor = (i.sortedIndexCursor + 1) % d.length;
      var o = d[i.sortedIndexCursor].index;
      if (!l(o)) return o;
    }

    i.currentFirstChar = c;
    var n,
        a = -1;

    for (n = 0; n < d.length; n++) {
      if (!l(d[n].index)) {
        a = n;
        break;
      }
    }

    for (; n < d.length; n++) {
      if (d[n].index > t && !l(d[n].index)) {
        a = n;
        break;
      }
    }

    if (-1 !== a) return i.sortedIndexCursor = a, d[i.sortedIndexCursor].index;
    return -1;
  }(o, n, s, l) : function (e, t, l) {
    var i = l.typeaheadBuffer[0],
        c = e.get(i);
    if (!c) return -1;
    var d = c[l.sortedIndexCursor];
    if (0 === d.text.lastIndexOf(l.typeaheadBuffer, 0) && !t(d.index)) return d.index;
    var o = (l.sortedIndexCursor + 1) % c.length,
        n = -1;

    for (; o !== l.sortedIndexCursor;) {
      var a = c[o],
          s = 0 === a.text.lastIndexOf(l.typeaheadBuffer, 0),
          r = !t(a.index);

      if (s && r) {
        n = o;
        break;
      }

      o = (o + 1) % c.length;
    }

    if (-1 !== n) return l.sortedIndexCursor = n, c[l.sortedIndexCursor].index;
    return -1;
  }(o, s, l)) || a || d(i), i;
}

function C(e) {
  return e.typeaheadBuffer.length > 0;
}

var _A = function A(e, t) {
  return (_A = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t;
  } || function (e, t) {
    for (var l in t) {
      t.hasOwnProperty(l) && (e[l] = t[l]);
    }
  })(e, t);
};

var _S = function S() {
  return (_S = Object.assign || function (e) {
    for (var t, l = 1, i = arguments.length; l < i; l++) {
      for (var c in t = arguments[l]) {
        Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
      }
    }

    return e;
  }).apply(this, arguments);
},
    T = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
},
    k = {
  ARIA_CONTROLS: "aria-controls",
  ARIA_DESCRIBEDBY: "aria-describedby",
  ARIA_SELECTED_ATTR: "aria-selected",
  CHANGE_EVENT: "MDCSelect:change",
  HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
  LABEL_SELECTOR: ".mdc-floating-label",
  LEADING_ICON_SELECTOR: ".mdc-select__icon",
  LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
  MENU_SELECTOR: ".mdc-select__menu",
  OUTLINE_SELECTOR: ".mdc-notched-outline",
  SELECTED_TEXT_SELECTOR: ".mdc-select__selected-text",
  SELECT_ANCHOR_SELECTOR: ".mdc-select__anchor",
  VALUE_ATTR: "data-value"
},
    O = {
  LABEL_SCALE: .75,
  UNSET_INDEX: -1,
  CLICK_DEBOUNCE_TIMEOUT_MS: 330
},
    R = function (e) {
  function c(t, l) {
    void 0 === l && (l = {});
    var i = e.call(this, _S(_S({}, c.defaultAdapter), t)) || this;
    return i.disabled = !1, i.isMenuOpen = !1, i.useDefaultValidation = !0, i.customValidity = !0, i.lastSelectedIndex = O.UNSET_INDEX, i.clickDebounceTimeout = 0, i.recentlyClicked = !1, i.leadingIcon = l.leadingIcon, i.helperText = l.helperText, i;
  }

  return function (e, t) {
    function l() {
      this.constructor = e;
    }

    _A(e, t), e.prototype = null === t ? Object.create(t) : (l.prototype = t.prototype, new l());
  }(c, e), Object.defineProperty(c, "cssClasses", {
    get: function get() {
      return T;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(c, "numbers", {
    get: function get() {
      return O;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(c, "strings", {
    get: function get() {
      return k;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(c, "defaultAdapter", {
    get: function get() {
      return {
        addClass: function addClass() {},
        removeClass: function removeClass() {},
        hasClass: function hasClass() {
          return !1;
        },
        activateBottomLine: function activateBottomLine() {},
        deactivateBottomLine: function deactivateBottomLine() {},
        getSelectedIndex: function getSelectedIndex() {
          return -1;
        },
        setSelectedIndex: function setSelectedIndex() {},
        hasLabel: function hasLabel() {
          return !1;
        },
        floatLabel: function floatLabel() {},
        getLabelWidth: function getLabelWidth() {
          return 0;
        },
        setLabelRequired: function setLabelRequired() {},
        hasOutline: function hasOutline() {
          return !1;
        },
        notchOutline: function notchOutline() {},
        closeOutline: function closeOutline() {},
        setRippleCenter: function setRippleCenter() {},
        notifyChange: function notifyChange() {},
        setSelectedText: function setSelectedText() {},
        isSelectAnchorFocused: function isSelectAnchorFocused() {
          return !1;
        },
        getSelectAnchorAttr: function getSelectAnchorAttr() {
          return "";
        },
        setSelectAnchorAttr: function setSelectAnchorAttr() {},
        removeSelectAnchorAttr: function removeSelectAnchorAttr() {},
        addMenuClass: function addMenuClass() {},
        removeMenuClass: function removeMenuClass() {},
        openMenu: function openMenu() {},
        closeMenu: function closeMenu() {},
        getAnchorElement: function getAnchorElement() {
          return null;
        },
        setMenuAnchorElement: function setMenuAnchorElement() {},
        setMenuAnchorCorner: function setMenuAnchorCorner() {},
        setMenuWrapFocus: function setMenuWrapFocus() {},
        focusMenuItemAtIndex: function focusMenuItemAtIndex() {},
        getMenuItemCount: function getMenuItemCount() {
          return 0;
        },
        getMenuItemValues: function getMenuItemValues() {
          return [];
        },
        getMenuItemTextAtIndex: function getMenuItemTextAtIndex() {
          return "";
        },
        isTypeaheadInProgress: function isTypeaheadInProgress() {
          return !1;
        },
        typeaheadMatchItem: function typeaheadMatchItem() {
          return -1;
        }
      };
    },
    enumerable: !0,
    configurable: !0
  }), c.prototype.getSelectedIndex = function () {
    return this.adapter.getSelectedIndex();
  }, c.prototype.setSelectedIndex = function (e, t, l) {
    void 0 === t && (t = !1), void 0 === l && (l = !1), e >= this.adapter.getMenuItemCount() || (e === O.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(e).trim()), this.adapter.setSelectedIndex(e), t && this.adapter.closeMenu(), l || this.lastSelectedIndex === e || this.handleChange(), this.lastSelectedIndex = e);
  }, c.prototype.setValue = function (e, t) {
    void 0 === t && (t = !1);
    var l = this.adapter.getMenuItemValues().indexOf(e);
    this.setSelectedIndex(l, !1, t);
  }, c.prototype.getValue = function () {
    var e = this.adapter.getSelectedIndex(),
        t = this.adapter.getMenuItemValues();
    return e !== O.UNSET_INDEX ? t[e] : "";
  }, c.prototype.getDisabled = function () {
    return this.disabled;
  }, c.prototype.setDisabled = function (e) {
    this.disabled = e, this.disabled ? (this.adapter.addClass(T.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(T.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
  }, c.prototype.openMenu = function () {
    this.adapter.addClass(T.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
  }, c.prototype.setHelperTextContent = function (e) {
    this.helperText && this.helperText.setContent(e);
  }, c.prototype.layout = function () {
    if (this.adapter.hasLabel()) {
      var e = this.getValue().length > 0,
          t = this.adapter.hasClass(T.FOCUSED),
          l = e || t,
          i = this.adapter.hasClass(T.REQUIRED);
      this.notchOutline(l), this.adapter.floatLabel(l), this.adapter.setLabelRequired(i);
    }
  }, c.prototype.layoutOptions = function () {
    var e = this.adapter.getMenuItemValues().indexOf(this.getValue());
    this.setSelectedIndex(e, !1, !0);
  }, c.prototype.handleMenuOpened = function () {
    if (0 !== this.adapter.getMenuItemValues().length) {
      var e = this.getSelectedIndex(),
          t = e >= 0 ? e : 0;
      this.adapter.focusMenuItemAtIndex(t);
    }
  }, c.prototype.handleMenuClosed = function () {
    this.adapter.removeClass(T.ACTIVATED), this.isMenuOpen = !1, this.adapter.setSelectAnchorAttr("aria-expanded", "false"), this.adapter.isSelectAnchorFocused() || this.blur();
  }, c.prototype.handleChange = function () {
    this.layout(), this.adapter.notifyChange(this.getValue()), this.adapter.hasClass(T.REQUIRED) && this.useDefaultValidation && this.setValid(this.isValid());
  }, c.prototype.handleMenuItemAction = function (e) {
    this.setSelectedIndex(e, !0);
  }, c.prototype.handleFocus = function () {
    this.adapter.addClass(T.FOCUSED), this.layout(), this.adapter.activateBottomLine();
  }, c.prototype.handleBlur = function () {
    this.isMenuOpen || this.blur();
  }, c.prototype.handleClick = function (e) {
    this.disabled || this.recentlyClicked || (this.setClickDebounceTimeout(), this.isMenuOpen ? this.adapter.closeMenu() : (this.adapter.setRippleCenter(e), this.openMenu()));
  }, c.prototype.handleKeydown = function (e) {
    if (!this.isMenuOpen && this.adapter.hasClass(T.FOCUSED)) {
      var i = (0, _core.a6)(e) === _core.a7.ENTER,
          c = (0, _core.a6)(e) === _core.a7.SPACEBAR,
          d = (0, _core.a6)(e) === _core.a7.ARROW_UP,
          o = (0, _core.a6)(e) === _core.a7.ARROW_DOWN;

      if (!c && e.key && 1 === e.key.length || c && this.adapter.isTypeaheadInProgress()) {
        var n = c ? " " : e.key,
            a = this.adapter.typeaheadMatchItem(n, this.getSelectedIndex());
        return a >= 0 && this.setSelectedIndex(a), void e.preventDefault();
      }

      (i || c || d || o) && (d && this.getSelectedIndex() > 0 ? this.setSelectedIndex(this.getSelectedIndex() - 1) : o && this.getSelectedIndex() < this.adapter.getMenuItemCount() - 1 && this.setSelectedIndex(this.getSelectedIndex() + 1), this.openMenu(), e.preventDefault());
    }
  }, c.prototype.notchOutline = function (e) {
    if (this.adapter.hasOutline()) {
      var t = this.adapter.hasClass(T.FOCUSED);

      if (e) {
        var l = O.LABEL_SCALE,
            i = this.adapter.getLabelWidth() * l;
        this.adapter.notchOutline(i);
      } else t || this.adapter.closeOutline();
    }
  }, c.prototype.setLeadingIconAriaLabel = function (e) {
    this.leadingIcon && this.leadingIcon.setAriaLabel(e);
  }, c.prototype.setLeadingIconContent = function (e) {
    this.leadingIcon && this.leadingIcon.setContent(e);
  }, c.prototype.setUseDefaultValidation = function (e) {
    this.useDefaultValidation = e;
  }, c.prototype.setValid = function (e) {
    this.useDefaultValidation || (this.customValidity = e), this.adapter.setSelectAnchorAttr("aria-invalid", (!e).toString()), e ? (this.adapter.removeClass(T.INVALID), this.adapter.removeMenuClass(T.MENU_INVALID)) : (this.adapter.addClass(T.INVALID), this.adapter.addMenuClass(T.MENU_INVALID)), this.syncHelperTextValidity(e);
  }, c.prototype.isValid = function () {
    return this.useDefaultValidation && this.adapter.hasClass(T.REQUIRED) && !this.adapter.hasClass(T.DISABLED) ? this.getSelectedIndex() !== O.UNSET_INDEX && (0 !== this.getSelectedIndex() || Boolean(this.getValue())) : this.customValidity;
  }, c.prototype.setRequired = function (e) {
    e ? this.adapter.addClass(T.REQUIRED) : this.adapter.removeClass(T.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", e.toString()), this.adapter.setLabelRequired(e);
  }, c.prototype.getRequired = function () {
    return "true" === this.adapter.getSelectAnchorAttr("aria-required");
  }, c.prototype.init = function () {
    var e = this.adapter.getAnchorElement();
    e && (this.adapter.setMenuAnchorElement(e), this.adapter.setMenuAnchorCorner(_core.a8.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(T.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(T.INVALID)), this.layout(), this.layoutOptions();
  }, c.prototype.blur = function () {
    this.adapter.removeClass(T.FOCUSED), this.layout(), this.adapter.deactivateBottomLine(), this.adapter.hasClass(T.REQUIRED) && this.useDefaultValidation && this.setValid(this.isValid());
  }, c.prototype.syncHelperTextValidity = function (e) {
    if (this.helperText) {
      this.helperText.setValidity(e);
      var t = this.helperText.isVisible(),
          l = this.helperText.getId();
      t && l ? this.adapter.setSelectAnchorAttr(k.ARIA_DESCRIBEDBY, l) : this.adapter.removeSelectAnchorAttr(k.ARIA_DESCRIBEDBY);
    }
  }, c.prototype.setClickDebounceTimeout = function () {
    var e = this;
    clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function () {
      e.recentlyClicked = !1;
    }, O.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
  }, c;
}(_core.m);

var D = function D() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var t = {};

  for (var _l in e) {
    t[_l] = e[_l];
  }

  return Object.assign({
    badInput: !1,
    customError: !1,
    patternMismatch: !1,
    rangeOverflow: !1,
    rangeUnderflow: !1,
    stepMismatch: !1,
    tooLong: !1,
    tooShort: !1,
    typeMismatch: !1,
    valid: !0,
    valueMissing: !1
  }, t);
};

var L = /*#__PURE__*/function (_r) {
  _inherits(L, _r);

  var _super = _createSuper(L);

  function L() {
    var _this;

    _classCallCheck(this, L);

    _this = _super.apply(this, arguments), _this.mdcFoundationClass = R, _this.disabled = !1, _this.outlined = !1, _this.label = "", _this.outlineOpen = !1, _this.outlineWidth = 0, _this.value = "", _this.selectedText = "", _this.icon = "", _this.menuOpen = !1, _this.helper = "", _this.validateOnInitialRender = !1, _this.validationMessage = "", _this.required = !1, _this.naturalMenuWidth = !1, _this.isUiValid = !0, _this.typeaheadState = {
      bufferClearTimeout: 0,
      currentFirstChar: "",
      sortedIndexCursor: 0,
      typeaheadBuffer: ""
    }, _this.sortedIndexByFirstChar = new Map(), _this.menuElement_ = null, _this.listeners = [], _this.onBodyClickBound = function () {}, _this._menuUpdateComplete = null, _this.renderReady = !1, _this.valueSetDirectly = !1, _this.validityTransform = null, _this._validity = D();
    return _this;
  }

  _createClass(L, [{
    key: "items",
    get: function get() {
      return this.menuElement_ || (this.menuElement_ = this.menuElement), this.menuElement_ ? this.menuElement_.items : [];
    }
  }, {
    key: "selected",
    get: function get() {
      var e = this.menuElement;
      return e ? e.selected : null;
    }
  }, {
    key: "index",
    get: function get() {
      var e = this.menuElement;
      return e ? e.index : -1;
    }
  }, {
    key: "shouldRenderHelperText",
    get: function get() {
      return !!this.helper || !!this.validationMessage;
    }
  }, {
    key: "validity",
    get: function get() {
      return this._checkValidity(this.value), this._validity;
    }
  }, {
    key: "render",
    value: function render() {
      var e = {
        "mdc-select--disabled": this.disabled,
        "mdc-select--no-label": !this.label,
        "mdc-select--filled": !this.outlined,
        "mdc-select--outlined": this.outlined,
        "mdc-select--with-leading-icon": !!this.icon,
        "mdc-select--required": this.required,
        "mdc-select--invalid": !this.isUiValid
      },
          t = {
        "mdc-select__menu--invalid": !this.isUiValid
      },
          l = this.shouldRenderHelperText ? "helper-text" : void 0;
      return (0, _core.h)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <div\n          class=\"mdc-select ", "\">\n        <input\n            class=\"formElement\"\n            .value=", "\n            hidden\n            ?required=", ">\n        <!-- @ts-ignore -->\n        <div class=\"mdc-select__anchor\"\n            aria-autocomplete=\"none\"\n            role=\"combobox\"\n            aria-expanded=", "\n            aria-invalid=", "\n            aria-haspopup=\"listbox\"\n            aria-labelledby=\"label\"\n            aria-required=", "\n            aria-describedby=", "\n            @click=", "\n            @focus=", "\n            @blur=", "\n            @keydown=", ">\n          ", "\n          ", "\n          ", "\n          <span class=\"mdc-select__selected-text-container\">\n            <span class=\"mdc-select__selected-text\">", "</span>\n          </span>\n          <span class=\"mdc-select__dropdown-icon\">\n            <svg\n                class=\"mdc-select__dropdown-icon-graphic\"\n                viewBox=\"7 10 10 5\"\n                focusable=\"false\">\n              <polygon\n                  class=\"mdc-select__dropdown-icon-inactive\"\n                  stroke=\"none\"\n                  fill-rule=\"evenodd\"\n                  points=\"7 10 12 15 17 10\">\n              </polygon>\n              <polygon\n                  class=\"mdc-select__dropdown-icon-active\"\n                  stroke=\"none\"\n                  fill-rule=\"evenodd\"\n                  points=\"7 15 12 10 17 15\">\n              </polygon>\n            </svg>\n          </span>\n          ", "\n        </div>\n        <mwc-menu\n            innerRole=\"listbox\"\n            wrapFocus\n            class=\"mdc-select__menu mdc-menu mdc-menu-surface ", "\"\n            activatable\n            .fullwidth=", "\n            .open=", "\n            .anchor=", "\n            @selected=", "\n            @opened=", "\n            @closed=", "\n            @items-updated=", "\n            @keydown=", ">\n          <slot></slot>\n        </mwc-menu>\n      </div>\n      ", ""])), (0, _core.c)(e), this.value, this.required, this.menuOpen, !this.isUiValid, this.required, (0, _core.f)(l), this.onClick, this.onFocus, this.onBlur, this.onKeydown, this.renderRipple(), this.outlined ? this.renderOutline() : this.renderLabel(), this.renderLeadingIcon(), this.selectedText, this.renderLineRipple(), (0, _core.c)(t), !this.naturalMenuWidth, this.menuOpen, this.anchorElement, this.onSelected, this.onOpened, this.onClosed, this.onItemsUpdated, this.handleTypeahead, this.renderHelperText());
    }
  }, {
    key: "renderRipple",
    value: function renderRipple() {
      return this.outlined ? _core.a9 : (0, _core.h)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      <span class=\"mdc-select__ripple\"></span>\n    "])));
    }
  }, {
    key: "renderOutline",
    value: function renderOutline() {
      return this.outlined ? (0, _core.h)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      <mwc-notched-outline\n          .width=", "\n          .open=", "\n          class=\"mdc-notched-outline\">\n        ", "\n      </mwc-notched-outline>"])), this.outlineWidth, this.outlineOpen, this.renderLabel()) : _core.a9;
    }
  }, {
    key: "renderLabel",
    value: function renderLabel() {
      return this.label ? (0, _core.h)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      <span\n          .floatingLabelFoundation=", "\n          id=\"label\">", "</span>\n    "])), (0, _core.aa)(this.label), this.label) : _core.a9;
    }
  }, {
    key: "renderLeadingIcon",
    value: function renderLeadingIcon() {
      return this.icon ? (0, _core.h)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["<mwc-icon class=\"mdc-select__icon\"><div>", "</div></mwc-icon>"])), this.icon) : _core.a9;
    }
  }, {
    key: "renderLineRipple",
    value: function renderLineRipple() {
      return this.outlined ? _core.a9 : (0, _core.h)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      <span .lineRippleFoundation=", "></span>\n    "])), (0, _core.ab)());
    }
  }, {
    key: "renderHelperText",
    value: function renderHelperText() {
      if (!this.shouldRenderHelperText) return _core.a9;
      var e = this.validationMessage && !this.isUiValid;
      return (0, _core.h)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        <p\n          class=\"mdc-select-helper-text ", "\"\n          id=\"helper-text\">", "</p>"])), (0, _core.c)({
        "mdc-select-helper-text--validation-msg": e
      }), e ? this.validationMessage : this.helper);
    }
  }, {
    key: "createAdapter",
    value: function createAdapter() {
      var _this2 = this;

      return Object.assign(Object.assign({}, (0, _core.j)(this.mdcRoot)), {
        activateBottomLine: function activateBottomLine() {
          _this2.lineRippleElement && _this2.lineRippleElement.lineRippleFoundation.activate();
        },
        deactivateBottomLine: function deactivateBottomLine() {
          _this2.lineRippleElement && _this2.lineRippleElement.lineRippleFoundation.deactivate();
        },
        hasLabel: function hasLabel() {
          return !!_this2.label;
        },
        floatLabel: function floatLabel(e) {
          _this2.labelElement && _this2.labelElement.floatingLabelFoundation.float(e);
        },
        getLabelWidth: function getLabelWidth() {
          return _this2.labelElement ? _this2.labelElement.floatingLabelFoundation.getWidth() : 0;
        },
        setLabelRequired: function setLabelRequired(e) {
          _this2.labelElement && _this2.labelElement.floatingLabelFoundation.setRequired(e);
        },
        hasOutline: function hasOutline() {
          return _this2.outlined;
        },
        notchOutline: function notchOutline(e) {
          _this2.outlineElement && !_this2.outlineOpen && (_this2.outlineWidth = e, _this2.outlineOpen = !0);
        },
        closeOutline: function closeOutline() {
          _this2.outlineElement && (_this2.outlineOpen = !1);
        },
        setRippleCenter: function setRippleCenter(e) {
          if (_this2.lineRippleElement) {
            _this2.lineRippleElement.lineRippleFoundation.setRippleCenter(e);
          }
        },
        notifyChange: function () {
          var _notifyChange = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
            var t;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(!_this2.valueSetDirectly && e === _this2.value)) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt("return");

                  case 2:
                    _this2.valueSetDirectly = !1;
                    _this2.value = e;
                    _context.next = 6;
                    return _this2.updateComplete;

                  case 6:
                    t = new Event("change", {
                      bubbles: !0
                    });

                    _this2.dispatchEvent(t);

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function notifyChange(_x) {
            return _notifyChange.apply(this, arguments);
          }

          return notifyChange;
        }(),
        setSelectedText: function setSelectedText(e) {
          return _this2.selectedText = e;
        },
        isSelectAnchorFocused: function isSelectAnchorFocused() {
          var e = _this2.anchorElement;
          if (!e) return !1;
          return e.getRootNode().activeElement === e;
        },
        getSelectAnchorAttr: function getSelectAnchorAttr(e) {
          var t = _this2.anchorElement;
          return t ? t.getAttribute(e) : null;
        },
        setSelectAnchorAttr: function setSelectAnchorAttr(e, t) {
          var l = _this2.anchorElement;
          l && l.setAttribute(e, t);
        },
        removeSelectAnchorAttr: function removeSelectAnchorAttr(e) {
          var t = _this2.anchorElement;
          t && t.removeAttribute(e);
        },
        openMenu: function openMenu() {
          _this2.menuOpen = !0;
        },
        closeMenu: function closeMenu() {
          _this2.menuOpen = !1;
        },
        addMenuClass: function addMenuClass() {},
        removeMenuClass: function removeMenuClass() {},
        getAnchorElement: function getAnchorElement() {
          return _this2.anchorElement;
        },
        setMenuAnchorElement: function setMenuAnchorElement() {},
        setMenuAnchorCorner: function setMenuAnchorCorner() {
          var e = _this2.menuElement;
          e && (e.corner = "BOTTOM_START");
        },
        setMenuWrapFocus: function setMenuWrapFocus(e) {
          var t = _this2.menuElement;
          t && (t.wrapFocus = e);
        },
        focusMenuItemAtIndex: function focusMenuItemAtIndex(e) {
          var t = _this2.menuElement;
          if (!t) return;
          var l = t.items[e];
          l && l.focus();
        },
        getMenuItemCount: function getMenuItemCount() {
          var e = _this2.menuElement;
          return e ? e.items.length : 0;
        },
        getMenuItemValues: function getMenuItemValues() {
          var e = _this2.menuElement;
          if (!e) return [];
          return e.items.map(function (e) {
            return e.value;
          });
        },
        getMenuItemTextAtIndex: function getMenuItemTextAtIndex(e) {
          var t = _this2.menuElement;
          if (!t) return "";
          var l = t.items[e];
          return l ? l.text : "";
        },
        getSelectedIndex: function getSelectedIndex() {
          return _this2.index;
        },
        setSelectedIndex: function setSelectedIndex() {},
        isTypeaheadInProgress: function isTypeaheadInProgress() {
          return C(_this2.typeaheadState);
        },
        typeaheadMatchItem: function typeaheadMatchItem(e, t) {
          if (!_this2.menuElement) return -1;
          var l = E({
            focusItemAtIndex: function focusItemAtIndex(e) {
              _this2.menuElement.focusItemAtIndex(e);
            },
            focusedItemIndex: t || _this2.menuElement.getFocusedItemIndex(),
            nextChar: e,
            sortedIndexByFirstChar: _this2.sortedIndexByFirstChar,
            skipFocus: !1,
            isItemAtIndexDisabled: function isItemAtIndexDisabled(e) {
              return _this2.items[e].disabled;
            }
          }, _this2.typeaheadState);
          return -1 !== l && _this2.select(l), l;
        }
      });
    }
  }, {
    key: "checkValidity",
    value: function checkValidity() {
      var e = this._checkValidity(this.value);

      if (!e) {
        var _e = new Event("invalid", {
          bubbles: !1,
          cancelable: !0
        });

        this.dispatchEvent(_e);
      }

      return e;
    }
  }, {
    key: "reportValidity",
    value: function reportValidity() {
      var e = this.checkValidity();
      return this.isUiValid = e, e;
    }
  }, {
    key: "_checkValidity",
    value: function _checkValidity(e) {
      var t = this.formElement.validity;
      var l = D(t);

      if (this.validityTransform) {
        var _t = this.validityTransform(e, l);

        l = Object.assign(Object.assign({}, l), _t);
      }

      return this._validity = l, this._validity.valid;
    }
  }, {
    key: "setCustomValidity",
    value: function setCustomValidity(e) {
      this.validationMessage = e, this.formElement.setCustomValidity(e);
    }
  }, {
    key: "_getUpdateComplete",
    value: function () {
      var _getUpdateComplete2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._menuUpdateComplete;

              case 2:
                _context2.next = 4;
                return _get(_getPrototypeOf(L.prototype), "_getUpdateComplete", this).call(this);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _getUpdateComplete() {
        return _getUpdateComplete2.apply(this, arguments);
      }

      return _getUpdateComplete;
    }()
  }, {
    key: "firstUpdated",
    value: function () {
      var _firstUpdated = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _this3 = this;

        var e, _e2;

        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                e = this.menuElement;
                _context3.t0 = e;

                if (!_context3.t0) {
                  _context3.next = 6;
                  break;
                }

                this._menuUpdateComplete = e.updateComplete;
                _context3.next = 6;
                return this._menuUpdateComplete;

              case 6:
                _get(_getPrototypeOf(L.prototype), "firstUpdated", this).call(this);

                this.mdcFoundation.isValid = function () {
                  return !0;
                };

                this.mdcFoundation.setValid = function () {};

                this.mdcFoundation.setDisabled(this.disabled);
                this.validateOnInitialRender && this.reportValidity();

                if (this.selected) {
                  _context3.next = 22;
                  break;
                }

                _context3.t1 = !this.items.length && this.slotElement && this.slotElement.assignedNodes({
                  flatten: !0
                }).length;

                if (!_context3.t1) {
                  _context3.next = 18;
                  break;
                }

                _context3.next = 16;
                return new Promise(function (e) {
                  return requestAnimationFrame(e);
                });

              case 16:
                _context3.next = 18;
                return this.layout();

              case 18:
                _e2 = this.items.length && "" === this.items[0].value;

                if (!(!this.value && _e2)) {
                  _context3.next = 21;
                  break;
                }

                return _context3.abrupt("return", void this.select(0));

              case 21:
                this.selectByValue(this.value);

              case 22:
                this.sortedIndexByFirstChar = I(this.items.length, function (e) {
                  return _this3.items[e].text;
                }), this.renderReady = !0;

              case 23:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function firstUpdated() {
        return _firstUpdated.apply(this, arguments);
      }

      return firstUpdated;
    }()
  }, {
    key: "onItemsUpdated",
    value: function onItemsUpdated() {
      var _this4 = this;

      this.sortedIndexByFirstChar = I(this.items.length, function (e) {
        return _this4.items[e].text;
      });
    }
  }, {
    key: "select",
    value: function select(e) {
      var t = this.menuElement;
      t && t.select(e);
    }
  }, {
    key: "selectByValue",
    value: function selectByValue(e) {
      var t = -1;

      for (var _l2 = 0; _l2 < this.items.length; _l2++) {
        if (this.items[_l2].value === e) {
          t = _l2;
          break;
        }
      }

      this.valueSetDirectly = !0, this.select(t), this.mdcFoundation.handleChange();
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(L.prototype), "disconnectedCallback", this).call(this);

      var _iterator = _createForOfIteratorHelper(this.listeners),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _e3 = _step.value;

          _e3.target.removeEventListener(_e3.name, _e3.cb);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      var e = new CustomEvent("focus"),
          t = this.anchorElement;
      t && (t.dispatchEvent(e), t.focus());
    }
  }, {
    key: "blur",
    value: function blur() {
      var e = new CustomEvent("blur"),
          t = this.anchorElement;
      t && (t.dispatchEvent(e), t.blur());
    }
  }, {
    key: "onFocus",
    value: function onFocus() {
      this.mdcFoundation && this.mdcFoundation.handleFocus();
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      this.mdcFoundation && this.mdcFoundation.handleBlur();
      var e = this.menuElement;
      e && !e.open && this.reportValidity();
    }
  }, {
    key: "onClick",
    value: function onClick(e) {
      if (this.mdcFoundation) {
        this.focus();

        var _t2 = e.target.getBoundingClientRect();

        var _l3 = 0;
        _l3 = "touches" in e ? e.touches[0].clientX : e.clientX;

        var _i = _l3 - _t2.left;

        this.mdcFoundation.handleClick(_i);
      }
    }
  }, {
    key: "onKeydown",
    value: function onKeydown(e) {
      var i = (0, _core.a6)(e) === _core.a7.ARROW_UP,
          c = (0, _core.a6)(e) === _core.a7.ARROW_DOWN;

      if (c || i) {
        var _t3 = i && this.index > 0,
            _l4 = c && this.index < this.items.length - 1;

        return _t3 ? this.select(this.index - 1) : _l4 && this.select(this.index + 1), e.preventDefault(), void this.mdcFoundation.openMenu();
      }

      this.mdcFoundation.handleKeydown(e);
    }
  }, {
    key: "handleTypeahead",
    value: function handleTypeahead(e) {
      var _this5 = this;

      if (!this.menuElement) return;
      var l = this.menuElement.getFocusedItemIndex(),
          i = (0, _core.H)(e.target) ? e.target : null;
      !function (e, l) {
        var i = e.event,
            c = e.isTargetListItem,
            d = e.focusedItemIndex,
            o = e.focusItemAtIndex,
            n = e.sortedIndexByFirstChar,
            a = e.isItemAtIndexDisabled,
            s = "ArrowLeft" === (0, _core.a6)(i),
            r = "ArrowUp" === (0, _core.a6)(i),
            m = "ArrowRight" === (0, _core.a6)(i),
            h = "ArrowDown" === (0, _core.a6)(i),
            p = "Home" === (0, _core.a6)(i),
            u = "End" === (0, _core.a6)(i),
            f = "Enter" === (0, _core.a6)(i),
            b = "Spacebar" === (0, _core.a6)(i);
        s || r || m || h || p || u || f || (b || 1 !== i.key.length ? b && (c && w(i), c && C(l) && E({
          focusItemAtIndex: o,
          focusedItemIndex: d,
          nextChar: " ",
          sortedIndexByFirstChar: n,
          skipFocus: !1,
          isItemAtIndexDisabled: a
        }, l)) : (w(i), E({
          focusItemAtIndex: o,
          focusedItemIndex: d,
          nextChar: i.key.toLowerCase(),
          sortedIndexByFirstChar: n,
          skipFocus: !1,
          isItemAtIndexDisabled: a
        }, l)));
      }({
        event: e,
        focusItemAtIndex: function focusItemAtIndex(e) {
          _this5.menuElement.focusItemAtIndex(e);
        },
        focusedItemIndex: l,
        isTargetListItem: !!i && i.hasAttribute("mwc-list-item"),
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        isItemAtIndexDisabled: function isItemAtIndexDisabled(e) {
          return _this5.items[e].disabled;
        }
      }, this.typeaheadState);
    }
  }, {
    key: "onSelected",
    value: function () {
      var _onSelected = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(e) {
        var t;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.t0 = this.mdcFoundation;

                if (_context4.t0) {
                  _context4.next = 4;
                  break;
                }

                _context4.next = 4;
                return this.updateComplete;

              case 4:
                this.mdcFoundation.handleMenuItemAction(e.detail.index);
                t = this.items[e.detail.index];
                t && (this.value = t.value);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onSelected(_x2) {
        return _onSelected.apply(this, arguments);
      }

      return onSelected;
    }()
  }, {
    key: "onOpened",
    value: function onOpened() {
      this.mdcFoundation && (this.menuOpen = !0, this.mdcFoundation.handleMenuOpened());
    }
  }, {
    key: "onClosed",
    value: function onClosed() {
      this.mdcFoundation && (this.menuOpen = !1, this.mdcFoundation.handleMenuClosed());
    }
  }, {
    key: "layout",
    value: function () {
      var _layout = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var e,
            t,
            l,
            i,
            c,
            _args5 = arguments;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                e = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : !0;
                this.mdcFoundation && this.mdcFoundation.layout();
                _context5.next = 4;
                return this.updateComplete;

              case 4:
                t = this.menuElement;
                t && t.layout(e);
                l = this.labelElement;

                if (l) {
                  _context5.next = 9;
                  break;
                }

                return _context5.abrupt("return", void (this.outlineOpen = !1));

              case 9:
                i = !!this.label && !!this.value;

                if (!(l.floatingLabelFoundation.float(i), !this.outlined)) {
                  _context5.next = 12;
                  break;
                }

                return _context5.abrupt("return");

              case 12:
                this.outlineOpen = i;
                _context5.next = 15;
                return this.updateComplete;

              case 15:
                c = l.floatingLabelFoundation.getWidth();
                this.outlineOpen && (this.outlineWidth = c);

              case 17:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function layout() {
        return _layout.apply(this, arguments);
      }

      return layout;
    }()
  }]);

  return L;
}(_core.F);

(0, _core._)([(0, _core.q)(".mdc-select")], L.prototype, "mdcRoot", void 0), (0, _core._)([(0, _core.q)(".formElement")], L.prototype, "formElement", void 0), (0, _core._)([(0, _core.q)("slot")], L.prototype, "slotElement", void 0), (0, _core._)([(0, _core.q)("select")], L.prototype, "nativeSelectElement", void 0), (0, _core._)([(0, _core.q)("input")], L.prototype, "nativeInputElement", void 0), (0, _core._)([(0, _core.q)(".mdc-line-ripple")], L.prototype, "lineRippleElement", void 0), (0, _core._)([(0, _core.q)(".mdc-floating-label")], L.prototype, "labelElement", void 0), (0, _core._)([(0, _core.q)("mwc-notched-outline")], L.prototype, "outlineElement", void 0), (0, _core._)([(0, _core.q)(".mdc-menu")], L.prototype, "menuElement", void 0), (0, _core._)([(0, _core.q)(".mdc-select__anchor")], L.prototype, "anchorElement", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean,
  attribute: "disabled",
  reflect: !0
}), (0, _core.o)(function (e) {
  this.renderReady && this.mdcFoundation.setDisabled(e);
})], L.prototype, "disabled", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean
}), (0, _core.o)(function (e, t) {
  void 0 !== t && this.outlined !== t && this.layout(!1);
})], L.prototype, "outlined", void 0), (0, _core._)([(0, _core.p)({
  type: String
}), (0, _core.o)(function (e, t) {
  void 0 !== t && this.label !== t && this.layout(!1);
})], L.prototype, "label", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean
})], L.prototype, "outlineOpen", void 0), (0, _core._)([(0, _core.p)({
  type: Number
})], L.prototype, "outlineWidth", void 0), (0, _core._)([(0, _core.p)({
  type: String
}), (0, _core.o)(function (e) {
  if (this.mdcFoundation) {
    var _t4 = null === this.selected && !!e,
        _l5 = this.selected && this.selected.value !== e;

    (_t4 || _l5) && this.selectByValue(e), this.reportValidity();
  }
})], L.prototype, "value", void 0), (0, _core._)([(0, _core.p)({
  type: String
})], L.prototype, "selectedText", void 0), (0, _core._)([(0, _core.p)({
  type: String
})], L.prototype, "icon", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean
})], L.prototype, "menuOpen", void 0), (0, _core._)([(0, _core.p)({
  type: String
})], L.prototype, "helper", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean
})], L.prototype, "validateOnInitialRender", void 0), (0, _core._)([(0, _core.p)({
  type: String
})], L.prototype, "validationMessage", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean
})], L.prototype, "required", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean
})], L.prototype, "naturalMenuWidth", void 0), (0, _core._)([(0, _core.p)({
  type: Boolean
})], L.prototype, "isUiValid", void 0), (0, _core._)([(0, _core.e)({
  capture: !0
})], L.prototype, "handleTypeahead", null);
var M = (0, _core.b)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral([".mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:\"*\"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:\"\"}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-select{display:inline-flex;position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87)}.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-select.mdc-select--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#6200ee;fill:var(--mdc-theme-primary, #6200ee)}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled)+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:rgba(0, 0, 0, 0.54)}.mdc-select.mdc-select--disabled .mdc-select__icon{color:rgba(0, 0, 0, 0.38)}@media screen and (-ms-high-contrast: active){.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:red}.mdc-select.mdc-select--disabled .mdc-floating-label{color:GrayText}.mdc-select.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}.mdc-select.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select.mdc-select--disabled .mdc-notched-outline__trailing{border-color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__icon{color:GrayText}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:GrayText}}.mdc-select .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-select .mdc-select__anchor{padding-left:16px;padding-right:0}[dir=rtl] .mdc-select .mdc-select__anchor,.mdc-select .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:16px}.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor{padding-left:0;padding-right:0}[dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-select__anchor,.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:0}.mdc-select .mdc-select__icon{width:24px;height:24px;font-size:24px}.mdc-select .mdc-select__dropdown-icon{width:24px;height:24px}.mdc-select .mdc-select__menu .mdc-list-item{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-list-item,.mdc-select .mdc-select__menu .mdc-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select .mdc-select__menu .mdc-list-item__graphic{margin-left:0;margin-right:12px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-list-item__graphic,.mdc-select .mdc-select__menu .mdc-list-item__graphic[dir=rtl]{margin-left:12px;margin-right:0}.mdc-select__dropdown-icon{margin-left:12px;margin-right:12px;display:inline-flex;position:relative;align-self:center;align-items:center;justify-content:center;flex-shrink:0;pointer-events:none}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active,.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{position:absolute;top:0;left:0}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-graphic{width:41.6666666667%;height:20.8333333333%}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:1;transition:opacity 75ms linear 75ms}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:0;transition:opacity 75ms linear}[dir=rtl] .mdc-select__dropdown-icon,.mdc-select__dropdown-icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:0;transition:opacity 49.5ms linear}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:1;transition:opacity 100.5ms linear 49.5ms}.mdc-select__anchor{width:200px;min-width:0;flex:1 1 auto;position:relative;box-sizing:border-box;overflow:hidden;outline:none;cursor:pointer}.mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-select__selected-text-container{display:flex;appearance:none;pointer-events:none;box-sizing:border-box;width:auto;min-width:0;flex-grow:1;height:28px;border:none;outline:none;padding:0;background-color:transparent;color:inherit}.mdc-select__selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;width:100%;text-align:left}[dir=rtl] .mdc-select__selected-text,.mdc-select__selected-text[dir=rtl]{text-align:right}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid+.mdc-select-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--disabled{cursor:default;pointer-events:none}.mdc-select--with-leading-icon .mdc-select__menu .mdc-list-item{padding-left:12px;padding-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__menu .mdc-list-item,.mdc-select--with-leading-icon .mdc-select__menu .mdc-list-item[dir=rtl]{padding-left:12px;padding-right:12px}.mdc-select__menu .mdc-list .mdc-select__icon{margin-left:0;margin-right:0}[dir=rtl] .mdc-select__menu .mdc-list .mdc-select__icon,.mdc-select__menu .mdc-list .mdc-select__icon[dir=rtl]{margin-left:0;margin-right:0}.mdc-select__menu .mdc-list .mdc-list-item--selected,.mdc-select__menu .mdc-list .mdc-list-item--activated{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-list .mdc-list-item--selected .mdc-list-item__graphic,.mdc-select__menu .mdc-list .mdc-list-item--activated .mdc-list-item__graphic{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select--filled .mdc-select__anchor{height:56px;display:flex;align-items:baseline}.mdc-select--filled .mdc-select__anchor::before{display:inline-block;width:0;height:40px;content:\"\";vertical-align:0}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text::before{content:\"\u200B\"}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor::before{display:none}.mdc-select--filled .mdc-select__anchor{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-select--filled:not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke}.mdc-select--filled.mdc-select--disabled .mdc-select__anchor{background-color:#fafafa}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-select--filled:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--filled.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-select--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-select--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-select--filled .mdc-menu-surface--is-open-below{border-top-left-radius:0px;border-top-right-radius:0px}.mdc-select--filled.mdc-select--focused.mdc-line-ripple::after{transform:scale(1, 2);opacity:1}.mdc-select--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-select--filled .mdc-floating-label,.mdc-select--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir=rtl] .mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined{border:none}.mdc-select--outlined .mdc-select__anchor{height:56px}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-56px{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-select--outlined .mdc-select__anchor{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-select--outlined+.mdc-select-helper-text{margin-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined.mdc-select--disabled .mdc-select__anchor{background-color:transparent}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-select--outlined .mdc-select__anchor{display:flex;align-items:baseline;overflow:visible}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined 250ms 1}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text::before{content:\"\u200B\"}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--outlined .mdc-select__anchor::before{display:none}.mdc-select--outlined .mdc-select__selected-text-container{display:flex;border:none;z-index:1;background-color:transparent}.mdc-select--outlined .mdc-select__icon{z-index:2}.mdc-select--outlined .mdc-floating-label{line-height:1.15rem;left:4px;right:initial}[dir=rtl] .mdc-select--outlined .mdc-floating-label,.mdc-select--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-select--outlined.mdc-select--focused .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake,.mdc-select--outlined.mdc-select--with-leading-icon[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 96px)}.mdc-select--outlined .mdc-menu-surface{margin-bottom:8px}.mdc-select--outlined.mdc-select--no-label .mdc-menu-surface,.mdc-select--outlined .mdc-menu-surface--is-open-below{margin-bottom:0}.mdc-select__anchor{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-select__anchor .mdc-select__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-select__anchor .mdc-select__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-select__anchor.mdc-ripple-upgraded--unbounded .mdc-select__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-select__anchor.mdc-ripple-upgraded--foreground-activation .mdc-select__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select__anchor.mdc-ripple-upgraded--foreground-deactivation .mdc-select__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-select__anchor:hover .mdc-select__ripple::before,.mdc-select__anchor.mdc-ripple-surface--hover .mdc-select__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__anchor.mdc-ripple-upgraded--background-focused .mdc-select__ripple::before,.mdc-select__anchor:not(.mdc-ripple-upgraded):focus .mdc-select__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__anchor .mdc-select__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-select__menu .mdc-list .mdc-list-item--selected .mdc-list-item__ripple::before,.mdc-select__menu .mdc-list .mdc-list-item--selected .mdc-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-list .mdc-list-item--selected:hover .mdc-list-item__ripple::before,.mdc-select__menu .mdc-list .mdc-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-list .mdc-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,.mdc-select__menu .mdc-list .mdc-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-list .mdc-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-list .mdc-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-list .mdc-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-select-helper-text{margin:0;margin-left:16px;margin-right:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal}[dir=rtl] .mdc-select-helper-text,.mdc-select-helper-text[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-select-helper-text::before{display:inline-block;width:0;height:16px;content:\"\";vertical-align:0}.mdc-select-helper-text--validation-msg{opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-select--invalid+.mdc-select-helper-text--validation-msg,.mdc-select-helper-text--validation-msg-persistent{opacity:1}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;box-sizing:border-box;border:none;text-decoration:none;cursor:pointer;user-select:none;flex-shrink:0;align-self:center;background-color:transparent;fill:currentColor}.mdc-select--with-leading-icon .mdc-select__icon{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon,.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex=\"-1\"]{cursor:default;pointer-events:none}.material-icons{font-family:var(--mdc-icon-font, \"Material Icons\");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:\"liga\"}:host{display:inline-block;vertical-align:top;outline:none}.mdc-select{width:100%}[hidden]{display:none}.mdc-select__icon{z-index:2}.mdc-select--with-leading-icon{--mdc-list-item-graphic-margin: calc(48px - var(--mdc-list-item-graphic-size, 24px) - var(--mdc-list-side-padding, 16px))}.mdc-select .mdc-select__anchor .mdc-select__selected-text{overflow:hidden}.mdc-select .mdc-select__anchor *{display:inline-flex}.mdc-select .mdc-select__anchor .mdc-floating-label{display:inline-block}mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-outlined-idle-border-color, rgba(0, 0, 0, 0.38));--mdc-notched-outline-notch-offset: 1px}:host(:not([disabled]):hover) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-outlined-hover-border-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87);color:var(--mdc-select-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-select-idle-line-color, rgba(0, 0, 0, 0.42))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-select-hover-line-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--outlined):not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke;background-color:var(--mdc-select-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-select__dropdown-icon{fill:var(--mdc-select-error-dropdown-icon-color, var(--mdc-select-error-color, var(--mdc-theme-error, #b00020)))}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label,:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label::after{color:var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select.mdc-select--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}.mdc-select__menu--invalid{--mdc-theme-primary: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.6);color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54);fill:var(--mdc-select-dropdown-icon-color, rgba(0, 0, 0, 0.54))}:host(:not([disabled])) .mdc-select.mdc-select--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px;--mdc-notched-outline-notch-offset: 2px}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-select__dropdown-icon{fill:rgba(98,0,238,.87);fill:var(--mdc-select-focused-dropdown-icon-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label::after{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select-helper-text:not(.mdc-select-helper-text--validation-msg){color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-select:not(.mdc-select--outlined).mdc-select--disabled .mdc-select__anchor{background-color:#fafafa;background-color:var(--mdc-select-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-select.mdc-select--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-outlined-disabled-border-color, rgba(0, 0, 0, 0.06))}:host([disabled]) .mdc-select .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38);fill:var(--mdc-select-disabled-dropdown-icon-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select-helper-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}"])));

var F = /*#__PURE__*/function (_L) {
  _inherits(F, _L);

  var _super2 = _createSuper(F);

  function F() {
    _classCallCheck(this, F);

    return _super2.apply(this, arguments);
  }

  return _createClass(F);
}(L);

exports.Select = F;
F.styles = M, exports.Select = F = (0, _core._)([(0, _core.d)("mwc-select")], F);
},{"./core.js":"../pkg/snippets/material-yew-ff4853da911fc4ad/build/core.js","./mwc-list-item.js":"../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-list-item.js","./mwc-list.js":"../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-list.js","./mwc-menu.js":"../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-menu.js"}],"../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-top-app-bar-fixed.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TopAppBarFixed = void 0;

var _core = require("./core.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var n = function (t) {
  function r() {
    var s = null !== t && t.apply(this, arguments) || this;
    return s.wasScrolled_ = !1, s;
  }

  return (0, _core.t)(r, t), r.prototype.handleTargetScroll = function () {
    this.adapter.getViewportScrollY() <= 0 ? this.wasScrolled_ && (this.adapter.removeClass(_core.u.FIXED_SCROLLED_CLASS), this.wasScrolled_ = !1) : this.wasScrolled_ || (this.adapter.addClass(_core.u.FIXED_SCROLLED_CLASS), this.wasScrolled_ = !0);
  }, r;
}(_core.v);

var c = /*#__PURE__*/function (_r) {
  _inherits(c, _r);

  var _super = _createSuper(c);

  function c() {
    var _this;

    _classCallCheck(this, c);

    _this = _super.apply(this, arguments), _this.mdcFoundationClass = n;
    return _this;
  }

  _createClass(c, [{
    key: "barClasses",
    value: function barClasses() {
      return Object.assign(Object.assign({}, _get(_getPrototypeOf(c.prototype), "barClasses", this).call(this)), {
        "mdc-top-app-bar--fixed": !0
      });
    }
  }, {
    key: "registerListeners",
    value: function registerListeners() {
      this.scrollTarget.addEventListener("scroll", this.handleTargetScroll, _core.w);
    }
  }, {
    key: "unregisterListeners",
    value: function unregisterListeners() {
      this.scrollTarget.removeEventListener("scroll", this.handleTargetScroll);
    }
  }]);

  return c;
}(_core.T);

var d = /*#__PURE__*/function (_c) {
  _inherits(d, _c);

  var _super2 = _createSuper(d);

  function d() {
    _classCallCheck(this, d);

    return _super2.apply(this, arguments);
  }

  return _createClass(d);
}(c);

exports.TopAppBarFixed = d;
d.styles = _core.k, exports.TopAppBarFixed = d = (0, _core._)([(0, _core.d)("mwc-top-app-bar-fixed")], d);
},{"./core.js":"../pkg/snippets/material-yew-ff4853da911fc4ad/build/core.js"}],"../node_modules/parcel-bundler/src/builtins/_empty.js":[function(require,module,exports) {

},{}],"../node_modules/parcel-plugin-wasm.rs/wasm-loader.js":[function(require,module,exports) {
var global = arguments[3];
var __dirname = "/home/starwort/Documents/web/gear-miner/node_modules/parcel-plugin-wasm.rs";
"use strict";

var _mwcButton = require("../../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-button.js");

var _mwcCircularProgress = require("../../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-circular-progress.js");

var _mwcDialog = require("../../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-dialog.js");

var _mwcListItem = require("../../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-list-item.js");

var _mwcList = require("../../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-list.js");

var _mwcSelect = require("../../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-select.js");

var _mwcTopAppBarFixed = require("../../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-top-app-bar-fixed.js");

var wasm;
const __exports = {};
const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;
let cachedTextDecoder = new lTextDecoder('utf-8', {
  ignoreBOM: true,
  fatal: true
});
cachedTextDecoder.decode();
let cachedUint8Memory0 = new Uint8Array();

function getUint8Memory0() {
  if (cachedUint8Memory0.byteLength === 0) {
    cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
  }

  return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

const heap = new Array(32).fill(undefined);
heap.push(undefined, null, true, false);
let heap_next = heap.length;

function addHeapObject(obj) {
  if (heap_next === heap.length) heap.push(heap.length + 1);
  const idx = heap_next;
  heap_next = heap[idx];
  if (typeof heap_next !== 'number') throw new Error('corrupt heap');
  heap[idx] = obj;
  return idx;
}

function getObject(idx) {
  return heap[idx];
}

function dropObject(idx) {
  if (idx < 36) return;
  heap[idx] = heap_next;
  heap_next = idx;
}

function takeObject(idx) {
  const ret = getObject(idx);
  dropObject(idx);
  return ret;
}

function _assertBoolean(n) {
  if (typeof n !== 'boolean') {
    throw new Error('expected a boolean argument');
  }
}

function isLikeNone(x) {
  return x === undefined || x === null;
}

function _assertNum(n) {
  if (typeof n !== 'number') throw new Error('expected a number argument');
}

let cachedFloat64Memory0 = new Float64Array();

function getFloat64Memory0() {
  if (cachedFloat64Memory0.byteLength === 0) {
    cachedFloat64Memory0 = new Float64Array(wasm.memory.buffer);
  }

  return cachedFloat64Memory0;
}

let cachedInt32Memory0 = new Int32Array();

function getInt32Memory0() {
  if (cachedInt32Memory0.byteLength === 0) {
    cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
  }

  return cachedInt32Memory0;
}

let WASM_VECTOR_LEN = 0;
const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;
let cachedTextEncoder = new lTextEncoder('utf-8');
const encodeString = typeof cachedTextEncoder.encodeInto === 'function' ? function (arg, view) {
  return cachedTextEncoder.encodeInto(arg, view);
} : function (arg, view) {
  const buf = cachedTextEncoder.encode(arg);
  view.set(buf);
  return {
    read: arg.length,
    written: buf.length
  };
};

function passStringToWasm0(arg, malloc, realloc) {
  if (typeof arg !== 'string') throw new Error('expected a string argument');

  if (realloc === undefined) {
    const buf = cachedTextEncoder.encode(arg);
    const ptr = malloc(buf.length);
    getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return ptr;
  }

  let len = arg.length;
  let ptr = malloc(len);
  const mem = getUint8Memory0();
  let offset = 0;

  for (; offset < len; offset++) {
    const code = arg.charCodeAt(offset);
    if (code > 0x7F) break;
    mem[ptr + offset] = code;
  }

  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }

    ptr = realloc(ptr, len, len = offset + arg.length * 3);
    const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
    const ret = encodeString(arg, view);
    if (ret.read !== arg.length) throw new Error('failed to pass whole string');
    offset += ret.written;
  }

  WASM_VECTOR_LEN = offset;
  return ptr;
}

function debugString(val) {
  // primitive types
  const type = typeof val;

  if (type == 'number' || type == 'boolean' || val == null) {
    return `${val}`;
  }

  if (type == 'string') {
    return `"${val}"`;
  }

  if (type == 'symbol') {
    const description = val.description;

    if (description == null) {
      return 'Symbol';
    } else {
      return `Symbol(${description})`;
    }
  }

  if (type == 'function') {
    const name = val.name;

    if (typeof name == 'string' && name.length > 0) {
      return `Function(${name})`;
    } else {
      return 'Function';
    }
  } // objects


  if (Array.isArray(val)) {
    const length = val.length;
    let debug = '[';

    if (length > 0) {
      debug += debugString(val[0]);
    }

    for (let i = 1; i < length; i++) {
      debug += ', ' + debugString(val[i]);
    }

    debug += ']';
    return debug;
  } // Test for built-in


  const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
  let className;

  if (builtInMatches.length > 1) {
    className = builtInMatches[1];
  } else {
    // Failed to match the standard '[object ClassName]'
    return toString.call(val);
  }

  if (className == 'Object') {
    // we're a user defined class or Object
    // JSON.stringify avoids problems with cycles, and is generally much
    // easier than looping through ownProperties of `val`.
    try {
      return 'Object(' + JSON.stringify(val) + ')';
    } catch (_) {
      return 'Object';
    }
  } // errors


  if (val instanceof Error) {
    return `${val.name}: ${val.message}\n${val.stack}`;
  } // TODO we could test for more things here, like `Set`s and `Map`s.


  return className;
}

function makeClosure(arg0, arg1, dtor, f) {
  const state = {
    a: arg0,
    b: arg1,
    cnt: 1,
    dtor
  };

  const real = (...args) => {
    // First up with a closure we increment the internal reference
    // count. This ensures that the Rust closure environment won't
    // be deallocated while we're invoking it.
    state.cnt++;

    try {
      return f(state.a, state.b, ...args);
    } finally {
      if (--state.cnt === 0) {
        wasm.__wbindgen_export_2.get(state.dtor)(state.a, state.b);

        state.a = 0;
      }
    }
  };

  real.original = state;
  return real;
}

function logError(f, args) {
  try {
    return f.apply(this, args);
  } catch (e) {
    let error = function () {
      try {
        return e instanceof Error ? `${e.message}\n\nStack:\n${e.stack}` : e.toString();
      } catch (_) {
        return "<failed to stringify thrown value>";
      }
    }();

    console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", error);
    throw e;
  }
}

function __wbg_adapter_28(arg0, arg1, arg2, arg3) {
  _assertNum(arg0);

  _assertNum(arg1);

  const ptr0 = passStringToWasm0(arg2, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len0 = WASM_VECTOR_LEN;

  const ret = wasm._dyn_core__ops__function__Fn__A_B___Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h97dd4f88127babbc(arg0, arg1, ptr0, len0, addHeapObject(arg3));

  return takeObject(ret);
}

function __wbg_adapter_31(arg0, arg1, arg2) {
  _assertNum(arg0);

  _assertNum(arg1);

  wasm._dyn_core__ops__function__Fn__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hcaa851c14a2cb21a(arg0, arg1, addHeapObject(arg2));
}

function makeMutClosure(arg0, arg1, dtor, f) {
  const state = {
    a: arg0,
    b: arg1,
    cnt: 1,
    dtor
  };

  const real = (...args) => {
    // First up with a closure we increment the internal reference
    // count. This ensures that the Rust closure environment won't
    // be deallocated while we're invoking it.
    state.cnt++;
    const a = state.a;
    state.a = 0;

    try {
      return f(a, state.b, ...args);
    } finally {
      if (--state.cnt === 0) {
        wasm.__wbindgen_export_2.get(state.dtor)(a, state.b);
      } else {
        state.a = a;
      }
    }
  };

  real.original = state;
  return real;
}

let stack_pointer = 32;

function addBorrowedObject(obj) {
  if (stack_pointer == 1) throw new Error('out of js stack');
  heap[--stack_pointer] = obj;
  return stack_pointer;
}

function __wbg_adapter_34(arg0, arg1, arg2) {
  try {
    _assertNum(arg0);

    _assertNum(arg1);

    wasm._dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h7aff3b8d65be2a8b(arg0, arg1, addBorrowedObject(arg2));
  } finally {
    heap[stack_pointer++] = undefined;
  }
}

function __wbg_adapter_37(arg0, arg1, arg2) {
  _assertNum(arg0);

  _assertNum(arg1);

  wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h8be83d8d1a75dafd(arg0, arg1, addHeapObject(arg2));
}
/**
*/


__exports.run = function () {
  wasm.run();
};

let cachedUint32Memory0 = new Uint32Array();

function getUint32Memory0() {
  if (cachedUint32Memory0.byteLength === 0) {
    cachedUint32Memory0 = new Uint32Array(wasm.memory.buffer);
  }

  return cachedUint32Memory0;
}

function passArray32ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 4);
  getUint32Memory0().set(arg, ptr / 4);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}

function getArrayJsValueFromWasm0(ptr, len) {
  const mem = getUint32Memory0();
  const slice = mem.subarray(ptr / 4, ptr / 4 + len);
  const result = [];

  for (let i = 0; i < slice.length; i++) {
    result.push(takeObject(slice[i]));
  }

  return result;
}

function handleError(f, args) {
  try {
    return f.apply(this, args);
  } catch (e) {
    wasm.__wbindgen_exn_store(addHeapObject(e));
  }
}

__exports.__wbindgen_string_new = function (arg0, arg1) {
  const ret = getStringFromWasm0(arg0, arg1);
  return addHeapObject(ret);
};

__exports.__wbindgen_object_clone_ref = function (arg0) {
  const ret = getObject(arg0);
  return addHeapObject(ret);
};

__exports.__wbindgen_cb_drop = function (arg0) {
  const obj = takeObject(arg0).original;

  if (obj.cnt-- == 1) {
    obj.a = 0;
    return true;
  }

  const ret = false;

  _assertBoolean(ret);

  return ret;
};

__exports.__wbindgen_number_get = function (arg0, arg1) {
  const obj = getObject(arg1);
  const ret = typeof obj === 'number' ? obj : undefined;

  if (!isLikeNone(ret)) {
    _assertNum(ret);
  }

  getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
  getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
};

__exports.__wbindgen_string_get = function (arg0, arg1) {
  const obj = getObject(arg1);
  const ret = typeof obj === 'string' ? obj : undefined;
  var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  var len0 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len0;
  getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

__exports.__wbg_fetch_386f87a3ebf5003c = function () {
  return logError(function (arg0) {
    const ret = fetch(getObject(arg0));
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_dummyloader_1b85b5b8595db7a9 = function () {
  return logError(function () {
    const ret = _mwcList.List._dummy_loader;
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_index_ab024aace404298a = function () {
  return logError(function (arg0) {
    const ret = getObject(arg0).index;
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_setbadinput_ff732764da58c8ad = function () {
  return logError(function (arg0, arg1) {
    getObject(arg0).badInput = arg1 !== 0;
  }, arguments);
};

__exports.__wbg_setcustomerror_9e846cdcd76edacb = function () {
  return logError(function (arg0, arg1) {
    getObject(arg0).customError = arg1 !== 0;
  }, arguments);
};

__exports.__wbg_setpatternmismatch_01a269a30f4caf79 = function () {
  return logError(function (arg0, arg1) {
    getObject(arg0).patternMismatch = arg1 !== 0;
  }, arguments);
};

__exports.__wbg_setrangeoverflow_c9c38dc044253650 = function () {
  return logError(function (arg0, arg1) {
    getObject(arg0).rangeOverflow = arg1 !== 0;
  }, arguments);
};

__exports.__wbg_setrangeunderflow_083530a3d76c9240 = function () {
  return logError(function (arg0, arg1) {
    getObject(arg0).rangeUnderflow = arg1 !== 0;
  }, arguments);
};

__exports.__wbg_settoolong_bf4cbf4e06af1e8a = function () {
  return logError(function (arg0, arg1) {
    getObject(arg0).too_long = arg1 !== 0;
  }, arguments);
};

__exports.__wbg_settooshort_fcb11543f1855835 = function () {
  return logError(function (arg0, arg1) {
    getObject(arg0).tooShort = arg1 !== 0;
  }, arguments);
};

__exports.__wbg_settypemismatch_849c1959c663ec3b = function () {
  return logError(function (arg0, arg1) {
    getObject(arg0).type_mismatch = arg1 !== 0;
  }, arguments);
};

__exports.__wbg_setvalid_93fc2cb0fc080ccf = function () {
  return logError(function (arg0, arg1) {
    getObject(arg0).valid = arg1 !== 0;
  }, arguments);
};

__exports.__wbg_setvaluemissing_3424ee62621656a1 = function () {
  return logError(function (arg0, arg1) {
    getObject(arg0).valueMissing = arg1 !== 0;
  }, arguments);
};

__exports.__wbg_dummyloader_efe09c3b1e8f68d6 = function () {
  return logError(function () {
    const ret = _mwcListItem.ListItem._dummy_loader;
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_dummyloader_51f96d6d6c47545a = function () {
  return logError(function () {
    const ret = _mwcCircularProgress.CircularProgress._dummy_loader;
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_dummyloader_89a252453c8b5195 = function () {
  return logError(function () {
    const ret = _mwcDialog.Dialog._dummy_loader;
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_show_d9a754802a4c4517 = function () {
  return logError(function (arg0) {
    getObject(arg0).show();
  }, arguments);
};

__exports.__wbg_action_92036701f377866a = function () {
  return logError(function (arg0, arg1) {
    const ret = getObject(arg1).action;
    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
  }, arguments);
};

__exports.__wbg_index_3f1ab014d1a02142 = function () {
  return logError(function (arg0) {
    const ret = getObject(arg0).index;
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_dummyloader_1a4492c6bfea70d9 = function () {
  return logError(function () {
    const ret = _mwcSelect.Select._dummy_loader;
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_setvaliditytransform_988c4024066dcb7e = function () {
  return logError(function (arg0, arg1) {
    getObject(arg0).validityTransform = getObject(arg1);
  }, arguments);
};

__exports.__wbindgen_is_undefined = function (arg0) {
  const ret = getObject(arg0) === undefined;

  _assertBoolean(ret);

  return ret;
};

__exports.__wbg_dummyloader_3d3e53cf3007377a = function () {
  return logError(function () {
    const ret = _mwcButton.Button._dummy_loader;
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_dummyloader_264a0f02d7399c3a = function () {
  return logError(function () {
    const ret = _mwcTopAppBarFixed.TopAppBarFixed._dummy_loader;
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_index_30bbf9019e84d0f9 = function () {
  return logError(function (arg0) {
    const ret = getObject(arg0).index;
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_diff_24379af6784d4792 = function () {
  return logError(function (arg0) {
    const ret = getObject(arg0).diff;
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_added_a7892c6169161d7c = function () {
  return logError(function (arg0, arg1) {
    const ret = getObject(arg1).added;
    const ptr0 = passArray32ToWasm0(ret, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
  }, arguments);
};

__exports.__wbg_removed_ec78ac7c35a1ad73 = function () {
  return logError(function (arg0, arg1) {
    const ret = getObject(arg1).removed;
    const ptr0 = passArray32ToWasm0(ret, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
  }, arguments);
};

__exports.__wbg_selected_55ed9ed5a939e1c1 = function () {
  return logError(function (arg0) {
    const ret = getObject(arg0).selected;

    _assertBoolean(ret);

    return ret;
  }, arguments);
};

__exports.__wbg_source_4018ee1baae2aca9 = function () {
  return logError(function (arg0, arg1) {
    const ret = getObject(arg1).source;
    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
  }, arguments);
};

__exports.__wbindgen_number_new = function (arg0) {
  const ret = arg0;
  return addHeapObject(ret);
};

__exports.__wbindgen_is_object = function (arg0) {
  const val = getObject(arg0);
  const ret = typeof val === 'object' && val !== null;

  _assertBoolean(ret);

  return ret;
};

__exports.__wbg_error_f851667af71bcfc6 = function () {
  return logError(function (arg0, arg1) {
    try {
      console.error(getStringFromWasm0(arg0, arg1));
    } finally {
      wasm.__wbindgen_free(arg0, arg1);
    }
  }, arguments);
};

__exports.__wbg_new_abda76e883ba8a5f = function () {
  return logError(function () {
    const ret = new Error();
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_stack_658279fe44541cf6 = function () {
  return logError(function (arg0, arg1) {
    const ret = getObject(arg1).stack;
    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
  }, arguments);
};

__exports.__wbindgen_object_drop_ref = function (arg0) {
  takeObject(arg0);
};

__exports.__wbg_warn_0b90a269a514ae1d = function () {
  return logError(function (arg0, arg1) {
    var v0 = getArrayJsValueFromWasm0(arg0, arg1).slice();

    wasm.__wbindgen_free(arg0, arg1 * 4);

    console.warn(...v0);
  }, arguments);
};

__exports.__wbg_instanceof_Window_acc97ff9f5d2c7b4 = function () {
  return logError(function (arg0) {
    let result;

    try {
      result = getObject(arg0) instanceof Window;
    } catch {
      result = false;
    }

    const ret = result;

    _assertBoolean(ret);

    return ret;
  }, arguments);
};

__exports.__wbg_document_3ead31dbcad65886 = function () {
  return logError(function (arg0) {
    const ret = getObject(arg0).document;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_location_8cc8ccf27e342c0a = function () {
  return logError(function (arg0) {
    const ret = getObject(arg0).location;
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_history_2a104346a1208269 = function () {
  return handleError(function (arg0) {
    const ret = getObject(arg0).history;
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_localStorage_753b6d15a844c3dc = function () {
  return handleError(function (arg0) {
    const ret = getObject(arg0).localStorage;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_body_3cb4b4042b9a632b = function () {
  return logError(function (arg0) {
    const ret = getObject(arg0).body;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_createElement_976dbb84fe1661b5 = function () {
  return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).createElement(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_createElementNS_1561aca8ee3693c0 = function () {
  return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    const ret = getObject(arg0).createElementNS(arg1 === 0 ? undefined : getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_createTextNode_300f845fab76642f = function () {
  return logError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).createTextNode(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_querySelector_3628dc2c3319e7e0 = function () {
  return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).querySelector(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_pushState_38917fb88b4add30 = function () {
  return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).pushState(getObject(arg1), getStringFromWasm0(arg2, arg3), arg4 === 0 ? undefined : getStringFromWasm0(arg4, arg5));
  }, arguments);
};

__exports.__wbg_parentElement_0cffb3ceb0f107bd = function () {
  return logError(function (arg0) {
    const ret = getObject(arg0).parentElement;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_lastChild_a2f5ed739809bb31 = function () {
  return logError(function (arg0) {
    const ret = getObject(arg0).lastChild;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_setnodeValue_4077cafeefd0725e = function () {
  return logError(function (arg0, arg1, arg2) {
    getObject(arg0).nodeValue = arg1 === 0 ? undefined : getStringFromWasm0(arg1, arg2);
  }, arguments);
};

__exports.__wbg_appendChild_e513ef0e5098dfdd = function () {
  return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).appendChild(getObject(arg1));
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_insertBefore_9f2d2defb9471006 = function () {
  return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).insertBefore(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_removeChild_6751e9ca5d9aaf00 = function () {
  return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).removeChild(getObject(arg1));
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_pathname_4441d4d8fc4aba51 = function () {
  return handleError(function (arg0, arg1) {
    const ret = getObject(arg1).pathname;
    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
  }, arguments);
};

__exports.__wbg_getItem_845e475f85f593e4 = function () {
  return handleError(function (arg0, arg1, arg2, arg3) {
    const ret = getObject(arg1).getItem(getStringFromWasm0(arg2, arg3));
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
  }, arguments);
};

__exports.__wbg_setItem_9c469d634d0c321c = function () {
  return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).setItem(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
  }, arguments);
};

__exports.__wbg_new_2d0053ee81e4dd2a = function () {
  return handleError(function () {
    const ret = new Headers();
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_append_de37df908812970d = function () {
  return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).append(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
  }, arguments);
};

__exports.__wbg_instanceof_Response_eaa426220848a39e = function () {
  return logError(function (arg0) {
    let result;

    try {
      result = getObject(arg0) instanceof Response;
    } catch {
      result = false;
    }

    const ret = result;

    _assertBoolean(ret);

    return ret;
  }, arguments);
};

__exports.__wbg_url_74285ddf2747cb3d = function () {
  return logError(function (arg0, arg1) {
    const ret = getObject(arg1).url;
    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
  }, arguments);
};

__exports.__wbg_status_c4ef3dd591e63435 = function () {
  return logError(function (arg0) {
    const ret = getObject(arg0).status;

    _assertNum(ret);

    return ret;
  }, arguments);
};

__exports.__wbg_headers_fd64ad685cf22e5d = function () {
  return logError(function (arg0) {
    const ret = getObject(arg0).headers;
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_arrayBuffer_4c27b6f00c530232 = function () {
  return handleError(function (arg0) {
    const ret = getObject(arg0).arrayBuffer();
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_value_ccb32485ee1b3928 = function () {
  return logError(function (arg0, arg1) {
    const ret = getObject(arg1).value;
    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
  }, arguments);
};

__exports.__wbg_setvalue_df64bc6794c098f2 = function () {
  return logError(function (arg0, arg1, arg2) {
    getObject(arg0).value = getStringFromWasm0(arg1, arg2);
  }, arguments);
};

__exports.__wbg_pathname_78a642e573bf8169 = function () {
  return logError(function (arg0, arg1) {
    const ret = getObject(arg1).pathname;
    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
  }, arguments);
};

__exports.__wbg_new_7d95b89914e4d377 = function () {
  return handleError(function (arg0, arg1) {
    const ret = new URL(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_instanceof_Element_33bd126d58f2021b = function () {
  return logError(function (arg0) {
    let result;

    try {
      result = getObject(arg0) instanceof Element;
    } catch {
      result = false;
    }

    const ret = result;

    _assertBoolean(ret);

    return ret;
  }, arguments);
};

__exports.__wbg_namespaceURI_e19c7be2c60e5b5c = function () {
  return logError(function (arg0, arg1) {
    const ret = getObject(arg1).namespaceURI;
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
  }, arguments);
};

__exports.__wbg_removeAttribute_beaed7727852af78 = function () {
  return handleError(function (arg0, arg1, arg2) {
    getObject(arg0).removeAttribute(getStringFromWasm0(arg1, arg2));
  }, arguments);
};

__exports.__wbg_setAttribute_d8436c14a59ab1af = function () {
  return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).setAttribute(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
  }, arguments);
};

__exports.__wbg_href_90ff36b5040e3b76 = function () {
  return logError(function (arg0, arg1) {
    const ret = getObject(arg1).href;
    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
  }, arguments);
};

__exports.__wbg_setchecked_f1e1f3e62cdca8e7 = function () {
  return logError(function (arg0, arg1) {
    getObject(arg0).checked = arg1 !== 0;
  }, arguments);
};

__exports.__wbg_value_b2a620d34c663701 = function () {
  return logError(function (arg0, arg1) {
    const ret = getObject(arg1).value;
    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
  }, arguments);
};

__exports.__wbg_setvalue_e5b519cca37d82a7 = function () {
  return logError(function (arg0, arg1, arg2) {
    getObject(arg0).value = getStringFromWasm0(arg1, arg2);
  }, arguments);
};

__exports.__wbg_newwithstrandinit_05d7180788420c40 = function () {
  return handleError(function (arg0, arg1, arg2) {
    const ret = new Request(getStringFromWasm0(arg0, arg1), getObject(arg2));
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_debug_64711eb2fc6980ef = function () {
  return logError(function (arg0, arg1, arg2, arg3) {
    console.debug(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
  }, arguments);
};

__exports.__wbg_error_ef9a0be47931175f = function () {
  return logError(function (arg0) {
    console.error(getObject(arg0));
  }, arguments);
};

__exports.__wbg_error_00c5d571f754f629 = function () {
  return logError(function (arg0, arg1, arg2, arg3) {
    console.error(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
  }, arguments);
};

__exports.__wbg_info_d60a960a4e955dc2 = function () {
  return logError(function (arg0, arg1, arg2, arg3) {
    console.info(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
  }, arguments);
};

__exports.__wbg_log_de258f66ad9eb784 = function () {
  return logError(function (arg0, arg1, arg2, arg3) {
    console.log(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
  }, arguments);
};

__exports.__wbg_warn_be542501a57387a5 = function () {
  return logError(function (arg0, arg1, arg2, arg3) {
    console.warn(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
  }, arguments);
};

__exports.__wbg_target_bf704b7db7ad1387 = function () {
  return logError(function (arg0) {
    const ret = getObject(arg0).target;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_cancelBubble_8c0bdf21c08f1717 = function () {
  return logError(function (arg0) {
    const ret = getObject(arg0).cancelBubble;

    _assertBoolean(ret);

    return ret;
  }, arguments);
};

__exports.__wbg_preventDefault_3209279b490de583 = function () {
  return logError(function (arg0) {
    getObject(arg0).preventDefault();
  }, arguments);
};

__exports.__wbg_addEventListener_1fc744729ac6dc27 = function () {
  return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).addEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3), getObject(arg4));
  }, arguments);
};

__exports.__wbg_removeEventListener_b10f1a66647f3aa0 = function () {
  return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).removeEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3), arg4 !== 0);
  }, arguments);
};

__exports.__wbg_fetch_749a56934f95c96c = function () {
  return logError(function (arg0, arg1) {
    const ret = getObject(arg0).fetch(getObject(arg1));
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_instanceof_CustomEvent_30678b3aca903ea9 = function () {
  return logError(function (arg0) {
    let result;

    try {
      result = getObject(arg0) instanceof CustomEvent;
    } catch {
      result = false;
    }

    const ret = result;

    _assertBoolean(ret);

    return ret;
  }, arguments);
};

__exports.__wbg_detail_90df16fd4821c69c = function () {
  return logError(function (arg0) {
    const ret = getObject(arg0).detail;
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_newnoargs_b5b063fc6c2f0376 = function () {
  return logError(function (arg0, arg1) {
    const ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_call_97ae9d8645dc388b = function () {
  return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).call(getObject(arg1));
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_next_aaef7c8aa5e212ac = function () {
  return handleError(function (arg0) {
    const ret = getObject(arg0).next();
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_next_579e583d33566a86 = function () {
  return logError(function (arg0) {
    const ret = getObject(arg0).next;
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_done_1b73b0672e15f234 = function () {
  return logError(function (arg0) {
    const ret = getObject(arg0).done;

    _assertBoolean(ret);

    return ret;
  }, arguments);
};

__exports.__wbg_value_1ccc36bc03462d71 = function () {
  return logError(function (arg0) {
    const ret = getObject(arg0).value;
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_valueOf_6b6effad03e5c546 = function () {
  return logError(function (arg0) {
    const ret = getObject(arg0).valueOf();
    return ret;
  }, arguments);
};

__exports.__wbg_is_40a66842732708e7 = function () {
  return logError(function (arg0, arg1) {
    const ret = Object.is(getObject(arg0), getObject(arg1));

    _assertBoolean(ret);

    return ret;
  }, arguments);
};

__exports.__wbg_new_0b9bfdd97583284e = function () {
  return logError(function () {
    const ret = new Object();
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_instanceof_Set_7548e9530f14bce0 = function () {
  return logError(function (arg0) {
    let result;

    try {
      result = getObject(arg0) instanceof Set;
    } catch {
      result = false;
    }

    const ret = result;

    _assertBoolean(ret);

    return ret;
  }, arguments);
};

__exports.__wbg_values_a47b21e7728c4958 = function () {
  return logError(function (arg0) {
    const ret = getObject(arg0).values();
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_iterator_6f9d4f28845f426c = function () {
  return logError(function () {
    const ret = Symbol.iterator;
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_resolve_99fe17964f31ffc0 = function () {
  return logError(function (arg0) {
    const ret = Promise.resolve(getObject(arg0));
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_then_11f7a54d67b4bfad = function () {
  return logError(function (arg0, arg1) {
    const ret = getObject(arg0).then(getObject(arg1));
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_then_cedad20fbbd9418a = function () {
  return logError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_globalThis_7f206bda628d5286 = function () {
  return handleError(function () {
    const ret = globalThis.globalThis;
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_self_6d479506f72c6a71 = function () {
  return handleError(function () {
    const ret = self.self;
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_window_f2557cc78490aceb = function () {
  return handleError(function () {
    const ret = window.window;
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_global_ba75c50d1cf384f4 = function () {
  return handleError(function () {
    const ret = global.global;
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_new_8c3f0052272a457a = function () {
  return logError(function (arg0) {
    const ret = new Uint8Array(getObject(arg0));
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_newwithbyteoffsetandlength_d9aa266703cb98be = function () {
  return logError(function (arg0, arg1, arg2) {
    const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_length_9e1ae1900cb0fbd5 = function () {
  return logError(function (arg0) {
    const ret = getObject(arg0).length;

    _assertNum(ret);

    return ret;
  }, arguments);
};

__exports.__wbg_set_83db9690f9353e79 = function () {
  return logError(function (arg0, arg1, arg2) {
    getObject(arg0).set(getObject(arg1), arg2 >>> 0);
  }, arguments);
};

__exports.__wbindgen_is_function = function (arg0) {
  const ret = typeof getObject(arg0) === 'function';

  _assertBoolean(ret);

  return ret;
};

__exports.__wbg_stringify_d6471d300ded9b68 = function () {
  return handleError(function (arg0) {
    const ret = JSON.stringify(getObject(arg0));
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_buffer_3f3d764d4747d564 = function () {
  return logError(function (arg0) {
    const ret = getObject(arg0).buffer;
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_get_765201544a2b6869 = function () {
  return handleError(function (arg0, arg1) {
    const ret = Reflect.get(getObject(arg0), getObject(arg1));
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbg_has_8359f114ce042f5a = function () {
  return handleError(function (arg0, arg1) {
    const ret = Reflect.has(getObject(arg0), getObject(arg1));

    _assertBoolean(ret);

    return ret;
  }, arguments);
};

__exports.__wbg_set_bf3f89b92d5a34bf = function () {
  return handleError(function (arg0, arg1, arg2) {
    const ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));

    _assertBoolean(ret);

    return ret;
  }, arguments);
};

__exports.__wbindgen_debug_string = function (arg0, arg1) {
  const ret = debugString(getObject(arg1));
  const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len0 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len0;
  getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

__exports.__wbindgen_throw = function (arg0, arg1) {
  throw new Error(getStringFromWasm0(arg0, arg1));
};

__exports.__wbindgen_memory = function () {
  const ret = wasm.memory;
  return addHeapObject(ret);
};

__exports.__wbindgen_closure_wrapper10158 = function () {
  return logError(function (arg0, arg1, arg2) {
    const ret = makeClosure(arg0, arg1, 864, __wbg_adapter_28);
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbindgen_closure_wrapper14545 = function () {
  return logError(function (arg0, arg1, arg2) {
    const ret = makeClosure(arg0, arg1, 1127, __wbg_adapter_31);
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbindgen_closure_wrapper15257 = function () {
  return logError(function (arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 1189, __wbg_adapter_34);
    return addHeapObject(ret);
  }, arguments);
};

__exports.__wbindgen_closure_wrapper15540 = function () {
  return logError(function (arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 1201, __wbg_adapter_37);
    return addHeapObject(ret);
  }, arguments);
};

function init(wasm_path) {
  const fetchPromise = fetch(wasm_path);
  let resultPromise;

  if (typeof WebAssembly.instantiateStreaming === 'function') {
    resultPromise = WebAssembly.instantiateStreaming(fetchPromise, {
      './yew_app_bg.js': __exports
    });
  } else {
    resultPromise = fetchPromise.then(response => response.arrayBuffer()).then(buffer => WebAssembly.instantiate(buffer, {
      './yew_app_bg.js': __exports
    }));
  }

  return resultPromise.then(({
    instance
  }) => {
    wasm = init.wasm = instance.exports;
    __exports.wasm = wasm;
    return;
  });
}

;

function init_node(wasm_path) {
  const fs = require('fs');

  return new Promise(function (resolve, reject) {
    fs.readFile(__dirname + wasm_path, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data.buffer);
      }
    });
  }).then(data => WebAssembly.instantiate(data, {
    './yew_app_bg': __exports
  })).then(({
    instance
  }) => {
    wasm = init.wasm = instance.exports;
    __exports.wasm = wasm;
    return;
  });
}

const wasm_bindgen = Object.assign(false ? init_node : init, __exports);

module.exports = function loadWASMBundle(bundle) {
  return wasm_bindgen(bundle).then(() => __exports);
};
},{"../../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-button.js":"../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-button.js","../../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-circular-progress.js":"../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-circular-progress.js","../../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-dialog.js":"../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-dialog.js","../../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-list-item.js":"../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-list-item.js","../../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-list.js":"../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-list.js","../../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-select.js":"../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-select.js","../../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-top-app-bar-fixed.js":"../pkg/snippets/material-yew-ff4853da911fc4ad/build/mwc-top-app-bar-fixed.js","fs":"../node_modules/parcel-bundler/src/builtins/_empty.js"}],0:[function(require,module,exports) {
var b=require("../node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("wasm",require("../node_modules/parcel-plugin-wasm.rs/wasm-loader.js"));b.load([["yew_app_bg.a31f2430.wasm","../pkg/yew_app_bg.wasm"]]).then(function(){require("index.ts");});
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/static.77de5100.js.map