var igUpload;

function preload(){
    igUpload = loadImage("rihanna.jpg")
}

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(0);
    image(igUpload,0,0);
    loadPixels();
    
   for(var row = 0; row<height; row++){
       for(var col = 0; col<width; col++){
           var index = (row * width + col) * 4;
           
           r = pixels[index];
           g = pixels[index + 1];
           b = pixels[index + 2];
           a = pixels[index + 3];
           
           if(keyIsPressed){
               if(key=="r"){
                   rainbow(index, col, row, g, a);
               }
               if(key=="1"){
                   hotdog(index,g);
               }
               if(key=="2"){
                   greenapple(index,g,a);
               }
               if(key=="3"){
                    candy(index, b, g, r, a);
               }
               if(key=="4"){
                    ronchelle(index, r, g, b, a);
               }
               if(key=="5"){
                   hello(index, r, g, b, a);
               }
               if(key=="6"){
                   chips(index, r, g, b, a);
               }
               if(key=="7"){
                   child(index, b, r, g, a,);
               }
               
           }
       }
   }
   
    updatePixels();
}

function rainbow(index, col, row, g, a){
    pixels[index] = col;
    pixels[index + 1] = g;
   pixels[index + 2] = row;
   pixels[index + 3] = a;
}

function hotdog(index, g){
    pixels[index] = g;
    pixels[index + 1] = g;
    pixels[index + 2] = g;
    pixels[index + 3] = a;
}

function greenapple(index,g,a){
    pixels[index] = 0;
    pixels[index + 1] = g;
    pixels[index + 2] = 0;
    pixels[index + 3] = a;
}

function candy(index, b, g, r, a){
    pixels[index] = r;
    pixels[index + 1] = b;
    pixels[index + 2] = g;
    pixels[index + 3] = a;
}

function ronchelle(index, r, g, b, a){
    pixels[index] = r/2;
    pixels[index + 1] = g/2;
    pixels[index + 2] = b/2;
    pixels[index + 3] = a;
}

function hello(index, r, g, b, a){
    pixels[index] = r*2;
    pixels[index + 1] = g*2;
    pixels[index + 2] = b*2;
    pixels[index + 3] = a;
}

function chips(index, r, g, b, a){
    pixels[index] = 255 - r;
    pixels[index +1] = 255 - g;
    pixels[index +2] = 255 - b;
    pixels[index +3] = a;
}

function child(index, b, r, g, a,){
    pixels[index] = b;
    pixels[index +1] = r;
    pixels[index +2] = g;
    pixels[index +3] = a;
}
