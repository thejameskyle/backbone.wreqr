(function(Backbone, _) {
  "use strict";

  var previousWreqr = Backbone.Wreqr;

  var Wreqr = Backbone.Wreqr = {};

  Backbone.Wreqr.VERSION = '<%= version %>';

  Backbone.Wreqr.noConflict = function () {
    Backbone.Wreqr = previousWreqr;
    return this;
  };

  // @include ../wreqr.handlers.js
  // @include ../wreqr.commandStorage.js
  // @include ../wreqr.commands.js
  // @include ../wreqr.requestresponse.js
  // @include ../wreqr.eventaggregator.js
  // @include ../wreqr.channel.js
  // @include ../wreqr.radio.js

})(Backbone, _);
