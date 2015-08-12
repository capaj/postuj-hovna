function normalizeOrientation(ctx, canvas, options) {
  //originalTransformCoordinates.call(loadImage, canvas, options);
  var width = canvas.width,
    height = canvas.height,
    orientation = options.orientation;
  if (!orientation || orientation > 8) {
    return;
  }
  if (orientation > 4) {
    canvas.width = height;
    canvas.height = width;
  }
  switch (orientation) {
    case 2:
      // horizontal flip
      ctx.translate(width, 0);
      ctx.scale(-1, 1);
      break;
    case 3:
      // 180° rotate left
      ctx.translate(width, height);
      ctx.rotate(Math.PI);
      break;
    case 4:
      // vertical flip
      ctx.translate(0, height);
      ctx.scale(1, -1);
      break;
    case 5:
      // vertical flip + 90 rotate right
      ctx.rotate(0.5 * Math.PI);
      ctx.scale(1, -1);
      break;
    case 6:
      // 90° rotate right
      ctx.rotate(0.5 * Math.PI);
      ctx.translate(0, -height);
      break;
    case 7:
      // horizontal flip + 90 rotate right
      ctx.rotate(0.5 * Math.PI);
      ctx.translate(width, -height);
      ctx.scale(-1, 1);
      break;
    case 8:
      // 90° rotate left
      ctx.rotate(-0.5 * Math.PI);
      ctx.translate(-width, 0);
      break;
  }
  options.orientation = 1;
}

/**
 *
 * @param {Object} opts
 * @param {Number} opts.orientation see http://stackoverflow.com/questions/20600800/js-client-side-exif-orientation-rotate-and-mirror-jpeg-images
 */
export default function downscaleImage(opts) {
  var img = opts.img;
  var type = opts.type;
  var quality = opts.quality;

  var tmp = new Image();
  var tmp2 = new Image();
  var canvas, context, cW, cH;

  type = type || 'image/jpeg';
  quality = quality || 0.92;

  if (opts.orientation <= 4) {
    cW = img.naturalWidth;
    cH = img.naturalHeight;
  } else {
    cW = img.naturalHeight;
    cH = img.naturalWidth;
  }
  tmp.src = img.src;
  tmp.onload = function() {

    canvas = document.createElement('canvas');

    cW /= 2;
    cH /= 2;

    canvas.width = cW;
    canvas.height = cH;
    context = canvas.getContext('2d');
    if (opts.orientation !== 1) {
      normalizeOrientation(context, canvas, opts);
    }
    context.drawImage(tmp, 0, 0, cW, cH);

    tmp2.src = canvas.toDataURL(type, quality);

    if (cW <= opts.maxWidth || cH <= opts.maxHeight) {
      opts.done(tmp2.src);
    } else {
      tmp.src = tmp2.src; //recursion
    }
  }
}