// Canvas lib. Drawing classes and methods go here.

// Class definition
function Canvas(rawcanvas) {
  this.rawcanvas = rawcanvas;
  this.ctx = this.rawcanvas.getContext('2d')
}

// Function that draws a line.
Canvas.prototype.drawLine = function (x1,y1,x2,y2,color) {
  this.ctx.beginPath();
  this.ctx.moveTo(x1,y1);
  this.ctx.lineTo(x2,y2);
  this.ctx.strokeStyle = color;
  this.ctx.stroke();
};

// Function that fills a box
Canvas.prototype.fillArea = function (x1,y1,x2,y2,color) {
  this.ctx.fillStyle = color;
  this.ctx.fillRect(x1,y1,x2-x1,y2-y1);
};

// Function that draws an image. "image" argument must be an element.
// Use Canvas.loadImage(url) to obtain said element.
Canvas.prototype.drawImage = function (image,x,y) {
  this.ctx.drawImage(image,x,y);
};

// Loads and returns an image element.
// Stores the images in the hidden imageload div
Canvas.prototype.loadImage = function (url) {
  var added = $("#imageload").add("img");
  added.attr("src", url);
  return added;
};

/* Function that loads and returns an image element, setting an id.
   The id can be used to obtain the image element again without reloading it.
   Stores the images in the hidden imageload div */
Canvas.prototype.loadImage = function (url, id) {
  var added = $("#imageload").add("img");
  added.attr("src", url);
  added.attr("id", id);
  return added;
};

// Returns an image element that was previously loaded.
Canvas.prototype.getElement = function (id) {
  return $("#" + id);
};

// Draws an image using an element id.
Canvas.prototype.drawImageId = function (id,x,y) {
  this.ctx.drawImage($("#"+id),x,y);
};