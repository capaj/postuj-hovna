export default function downscaleImage(opts) {
  var img = opts.img;
  var type = opts.type;
  var quality = opts.quality;

  var tmp = new Image();
  var tmp2 = new Image();
  var canvas, context, cW, cH;

  type = type || 'image/jpeg';
  quality = quality || 0.92;

  cW = img.naturalWidth;
  cH = img.naturalHeight;

  tmp.src = img.src;
  tmp.onload = function() {

    canvas = document.createElement('canvas');

    cW /= 2;
    cH /= 2;

    canvas.width = cW;
    canvas.height = cH;
    context = canvas.getContext('2d');
    context.drawImage(tmp, 0, 0, cW, cH);

    tmp2.src = canvas.toDataURL(type, quality);

    if (cW <= opts.maxWidth || cH <= opts.maxHeight) {
      opts.done(tmp2.src);
    } else {
      tmp.src = tmp2.src; //recursion
    }
  }
}