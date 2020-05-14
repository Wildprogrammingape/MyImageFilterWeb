//upload image

var image;   //global variable for uploading image

var imgcanvas;  //global variable for current canvas

function upload(){
  //get input from text input
  var fileinput = document.getElementById("finput");
  imgcanvas = document.getElementById("canv");
  
  //create the selected image
  image = new SimpleImage(fileinput);
  // show on the canvas
  image.drawTo(imgcanvas);
}

//make Grayscale

function makeGray(){
  for (var pixel of image.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  image.drawTo(imgcanvas);
}

//make Red
function makeRed(){
  for (var pixel of image.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128){
      pixel.setRed(2*avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else{
      pixel.setRed(255);
      pixel.setGreen(2*avg-255);
      pixel.setBlue(2*avg-255);
    }
  }
  image.drawTo(imgcanvas);
}

// make Rainbow
function makeRainbow(){
  for (var pixel of image.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    var width = image.getWidth();
    var height = image.getHeight();
    var X = pixel.getX();
    var Y = pixel.getY();
    
    if (Y < height/7){   //red
      if (avg < 128){
        pixel.setRed(2*avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      }
      else{
      pixel.setRed(255);
      pixel.setGreen(2*avg-255);
      pixel.setBlue(2*avg-255);
      }
    }
      
    
    if (Y > height/7 && Y < 2*height / 7){ //orange
      if (avg < 128){
        pixel.setRed(2*avg);
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0);
      }
      else{
        pixel.setRed(255);
        pixel.setGreen(1.2*avg-51);
        pixel.setBlue(2*avg-255);
      }
      
    }
    if (Y < 3*height/7 && Y > 2*height / 7){// yellow 
      if (avg < 128){
        pixel.setRed(2*avg);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      }
      else{
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg-255);
      }
      
    }
    if (Y < 4*height/7 && Y > 3*height / 7){//green
      if (avg < 128){
        pixel.setRed(0);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      }
      else{
        pixel.setRed(2*avg-255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg-255);
      }
      
    }
    if (Y < 5*height/7 && Y > 4*height / 7){//blue
      if (avg < 128){
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      }
      else{
        pixel.setRed(2*avg-255);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(255);
      }
      
    }
    if (Y < 6*height/7 && Y > 5*height / 7){ //indigo
      if (avg < 128){
        pixel.setRed(0.8*avg);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      }
      else{
        pixel.setRed(1.2*avg-51);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(255);
      }
      
    }
    if (Y > 6*height/7){ //violet
      if (avg < 128){
        pixel.setRed(1.6*avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6*avg);
      }
      else{
        pixel.setRed(0.4*avg+153);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(0.4*avg+153);
      }
    }
  }
  image.drawTo(imgcanvas);
}


//set pixel to black
function setBlack(p){       //set a pixel to black for addBoarder() to use
    p.setRed(0);
    p.setGreen(0);
    p.setBlue(0);
    return p;
}


//add boarder
function addBorder(image,thickness){  // add boarder to any image
    for (var pixel of image.values()){
        x = pixel.getX(); 
        y = pixel.getY();
        if (x<thickness || x > (image.getWidth()-thickness) || y<thickness || y>(image.getHeight()-thickness)){
          image.setPixel(x,y,setBlack(pixel));
        }
    }
    image.drawTo(imgcanvas);
}

//clear canvas
function doClear(canvas){
  var context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height);
}

//clear multiple canvases -- upload image over again
// function clearCanvas(){
//   doClear(imgcanvas);
// }