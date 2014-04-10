// Main file. All code branches from here.

var canvas = null;
var world = null;
var toolbox = null;

$(document).ready(function () {
  $.getScript('js/pgGraphics.js');
  canvas = new Canvas($('#gamecanvas'));
  $.getScript('js/pgWorld.js');
  world = new World();
  $.getScript('js/pgTools.js');
  toolbox = new Toolbox();
});