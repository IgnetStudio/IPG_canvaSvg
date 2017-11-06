(function($) {
  var svgData = {
    building: {
      strokepath: [
        {
          path:
            "M220.6,409.3c0,0-8.8-324.8-9.2-361.4c-92.3,21-158.8,54-177.7,62.4c47.9,125,62.8,293.3,62.9,295   c0,0,1.3-187-58.2-308.1L36,92.7l4.8-2.3C41.7,90,103.4,60.7,215.8,36l7.4-1.6l0.1,6.6C223.3,43.1,226.4,247.9,220.6,409.3z",
          duration: 600
        },
        {
          path:
            "M44.6,434c0,0,133.7-37.9,288.5-2.1c0,0-105.9-36.9-286.6-9.3L44.6,434z",
          duration: 600
        },
        {
          path:
            "M258.5,409.5c0,0,20.2-230.3,52-295.6c-44-33.6-78.8-77-78.8-77s54.4,53,87.1,74.2c32.7,21.1-0.7,2.6-0.7,2.6   C317.5,115.6,264.7,300.7,258.5,409.5z",
          duration: 600
        }
      ],
      dimensions: {
        width: 370,
        height: 468
      }
    }
  };

  $(document).ready(function() {
    $("#building").lazylinepainter({
      svgData: svgData,
      strokeWidth: 7,
      strokeColor: "#E8DDCB",
      onComplete: function() {
        console.log(">> onComplete");
      },
      onStart: function() {
        console.log(">> onStart");
      }
    });

    var state = "paint";
    $("#building").lazylinepainter(state);

    $(window).on("click", function() {
      state = state === "erase" ? "paint" : "erase";
      $("#building").lazylinepainter(state);

      console.log(">> " + state);
    });
  });
})(jQuery);