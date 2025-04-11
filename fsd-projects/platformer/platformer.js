$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -300, canvas.width + 200, 20); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

     //TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(200,700, 100, 10, "black");
    createPlatform(400, 600, 100, 10, "orange");
    createPlatform(500, 400, 100, 10, "purple");
    createPlatform(500, 400, 100, 10, "black");
    createPlatform(700, 300, 100, 10, "red");
    createPlatform(300, 500, 100, 10, "blue");
    createPlatform(800, 400, 100, 10, "brown")
    createPlatform(1000, 300, 100, 10, "black")
    createPlatform(600, 500, 100, 10, "blue")


    // TODO 3 - Create Collectables
    createCollectable("steve", 600, 450);
    createCollectable("diamond", 400, 120, 0.8, 0.5);
    createCollectable("steve", 1000, 250);
   
    
    // TODO 4 - Create Cannons

    createCannon("top", 400, 800);
    createCannon("right", 500, 1000);
    createCannon("top", 900, 900);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
