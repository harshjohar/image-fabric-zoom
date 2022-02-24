const c = document.getElementById("canvas");
var canvas = new fabric.Canvas(c);

var imgElement = document.getElementById("output");
var imgInstance = new fabric.Image(imgElement, {
    left: 100,
    top: 100,
    angle: 30,
    opacity: 0.85,
});
canvas.add(imgInstance);

// canvas.on("mouse:wheel", function (opt) {
//     var delta = opt.e.deltaY;
//     var pointer = canvas.getPointer(opt.e);
//     var zoom = canvas.getZoom();
//     zoom = zoom + delta / 200;
//     if (zoom > 20) zoom = 20;
//     if (zoom < 1) zoom = 1;
//     canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
//     opt.e.preventDefault();
//     opt.e.stopPropagation();
// });



canvas.on("mouse:wheel", function (opt) {
    var delta = opt.e.deltaY;
    var pointer = canvas.getPointer(opt.e);
    var zoom = canvas.getZoom();
    zoom = zoom + delta / 200;
    if (zoom > 20) zoom = 20;
    if (zoom < 1) zoom = 1;

    canvas.zoomToPoint(
        // new fabric.Point(opt.e.offsetX, opt.e.offsetY),
        { x: opt.e.offsetX, y: opt.e.offsetY },
        zoom
    );
    opt.e.preventDefault();
    opt.e.stopPropagation();
    canvas.renderAll();
});
canvas.setViewportTransform([1, 0, 0, 1, 0, 0]);
