document.getElementById("uploader").onchange = function(e) {
    var reader = new FileReader();
    reader.onload = function(e) {
      var image = new Image();
      image.src = e.target.result;
      image.onload = function() {
        var img = new fabric.Image(image);
        img.set({
          left: 100,
          top: 60,
        });
        img.scaleToHeight(400);
        canvas.add(img).centerObject(img).setActiveObject(img).renderAll();
      }
    }
    reader.readAsDataURL(e.target.files[0]);
  }

  document.getElementById("deleteBtn").addEventListener('click', e=> {
    //   canvas.remove(canvas.getActiveObject())
    canvas.clear()
  })