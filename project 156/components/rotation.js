//Terrain Rotation
AFRAME.registerComponent("island", {
   schema: {
     speedOfRotation: { type: "number", default: 0 }
   },
   init: function () {
     window.addEventListener("keydown", (e) => {
       if (e.key === "ArrowRight") {
         if (this.data.speedOfRotation < 0.1) {
           this.data.speedOfRotation += 0.01;
         }
       }
       if (e.key === "ArrowLeft") {
         if (this.data.speedOfRotation > -0.1) {
           this.data.speedOfRotation -= 0.01;
         }
       }
     });
   },
   tick: function () {
     var islandRotation = this.el.getAttribute("rotation");
 
     islandRotation.y += this.data.speedOfRotation;
 
     this.el.setAttribute("rotation", {
       x: islandRotation.x,
       y: islandRotation.y,
       z: islandRotation.z
     });
   }
 });
 
 //Plane Rotation
 AFRAME.registerComponent("diver-rotation", {
   schema: {
     speedOfRotation: { type: "number", default: 0 },
     speedOfAscent: {type:"number",default:0}    
 
   },
   init: function () {
     window.addEventListener("keydown", (e) => {
       this.data.speedOfRotation = this.el.getAttribute("rotation");
       this.data.speedOfAscent = this.el.getAttribute("position");
 
       var diverRotation = this.data.speedOfRotation;
       var diverPosition = this.data.speedOfAscent;
 
       if (e.key === "ArrowRight") {
         if (diverRotation.y < 10) {
            diverRotation.y += 0.5;
           this.el.setAttribute("rotation",diverRotation);
         }
       }
       if (e.key === "ArrowLeft") {
         if (diverRotation.y > -10) {
            diverRotation.y -= 0.5;
           this.el.setAttribute("rotation",diverRotation);
         }
       }
       if (e.key === "ArrowUp") {
         if (diverRotation.z < 20) {
            diverRotation.z += 1;
           this.el.setAttribute("rotation",diverRotation);
         }
         if(diverPosition.y < 2){
            diverPosition.y = 0.01;
           this.el.setAttribute("position",diverPosition);
 
         }
       }
       if (e.key === "ArrowDown") {
         if (diverRotation.z > -20) {
           diverRotation.z -= 1;
           this.el.setAttribute("rotation",diverRotation);
 
         }
         if(diverPosition.y > -2){
           diverPosition.y = 0.01;
           this.el.setAttribute("position",diverPosition);
         }
       }
     });
 
   }
   });