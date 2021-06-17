
function drawImageProp(ctx, img, x, y, w, h, offsetX, offsetY) {

    if (arguments.length === 2) {
        x = y = 0;
        w = ctx.canvas.width;
        h = ctx.canvas.height;
    }

    // default offset is center
    offsetX = typeof offsetX === "number" ? offsetX : 0.5;
    offsetY = typeof offsetY === "number" ? offsetY : 0.5;

    // keep bounds [0.0, 1.0]
    if (offsetX < 0) offsetX = 0;
    if (offsetY < 0) offsetY = 0;
    if (offsetX > 1) offsetX = 1;
    if (offsetY > 1) offsetY = 1;

    var iw = img.width,
        ih = img.height,
        r = Math.min(w / iw, h / ih),
        nw = iw * r,   // new prop. width
        nh = ih * r,   // new prop. height
        cx, cy, cw, ch, ar = 1;

    // decide which gap to fill    
    if (nw < w) ar = w / nw;                             
    if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
    nw *= ar;
    nh *= ar;

    // calc source rectangle
    cw = iw / (nw / w);
    ch = ih / (nh / h);

    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;

    // make sure source rectangle is valid
    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cw > iw) cw = iw;
    if (ch > ih) ch = ih;

    // fill image in dest. rectangle
    ctx.drawImage(img, cx, cy, cw, ch,  x, y, w, h);
}



function wrapText(context, text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';

        for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = context.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            
        context.fillStyle = 'white';
        context.shadowBlur = 7;
        context.textAlign = "center";
        context.shadowColor = "#000000";
        context.shadowOffsetX = 0;
        context.shadowOffs = 10;  
        context.lineWidth=5;     
        context.strokeText(line, x, y);  
        context.shadowBlur = 20;        
        context.fillText(line, x, y);        
        
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
        }

        context.fillStyle = 'white';
        context.shadowBlur = 7;
        context.textAlign = "center";
        context.shadowColor = "#000000";
        context.shadowOffsetX = 0;
        context.shadowOffs = 10;  
        context.lineWidth=5;     
        context.strokeText(line, x, y);  
        context.shadowBlur = 20;        
        context.fillText(line, x, y);          
            
    
      }
      


var img = new Image();
img.crossOrigin = 'Anonymous';
var cv = document.getElementById('thecanvas');
img.src = $('#main').attr('src')
img.onload = function() {
    var ctx = cv.getContext('2d');
    //cv.style.width = img.width + 'px';
    //cv.style.height = img.height + 'px';
    
    cv.width = 1080;
    cv.height = 1920;
    var offsetX = -100;   // center x
        var offsetY = 0.5;   // center y
    ctx.fillStyle = $('#submit3').css( "background-color" );//"#54b8b5";
   ctx.fillRect(0, 0, cv.width, cv.height);
    drawImageProp(ctx, img, 0, 0, 1080, 1152, offsetX, offsetY);
    //ctx.drawImage(img, 0, 0);
    var text = "Wanted: People With Hearing Problems For High-Tech New Solutions"
    ctx.font = "120px Arial";
    // ctx.font = '80px Sans-serif';
    
   
   
ctx.textAlign = "center";

wrapText(ctx,text,cv.width/2, cv.height/1.45,1000,120)
    //ctx.strokeText("Hello World", 10, 50)
};


$('#submit3').on('click', function(){

console.log('submit 3 clicked')
console.log('wait 2 seconds')
 setTimeout(function () {
       


console.log('wait 2 seconds')
var newimg = $('#main').attr('src');
 //var newimg = $('#main').attr('src',newimg);
console.log(newimg)

var img = new Image();
img.crossOrigin = 'Anonymous';
var cv = document.getElementById('thecanvas');
img.src = newimg;
var text = $('#inp').val()

console.log(text)
if(typeof(text)== "undefined"){
    console.log('default')
    var text = "Wanted: People For Free Hearing Aid Trials"
}else if (text.length<2){
    console.log('default')
    var text = "Wanted: People For Free Hearing Aid Trials"
}

console.log('what is it?')
console.log(typeof(text))
console.log(text)
img.onload = function() {
    console.log('moree'+text)
    var ctx = cv.getContext('2d');
    //cv.style.width = img.width + 'px';
    //cv.style.height = img.height + 'px';
    
    cv.width = 1080;
    cv.height = 1920;
    var offsetX = -100;   // center x
    var offsetY = 0.5;   // center y
    ctx.fillStyle = $('#submit3').css( "background-color" );//"#54b8b5";
    ctx.fillRect(0, 0, cv.width, cv.height);
    drawImageProp(ctx, img, 0, 0, 1080, 1152, offsetX, offsetY);
    ctx.font = "120px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillStyle = 'white';
    ctx.shadowBlur = 20;
    ctx.textAlign = "center";
    ctx.shadowColor = "#000000";
    ctx.shadowOffsetX = 5
    ctx.shadowOffs = 10;  

    var heightModifier = 1.25 

     if(text.length>74 &&  text.length <200){
        heightModifier = 1.5
    }
    if(text.length>60 &&  text.length <75){
        heightModifier = 1.45
    }
    else if(text.length>44 &&  text.length <61){
        heightModifier = 1.4
    }
    else if (text.length>29 &&  text.length <45){
        heightModifier = 1.35
    }else if(text.length>15 &&  text.length <30){
        heightModifier = 1.3
    }
    

    wrapText(ctx,text,cv.width/2,  cv.height/heightModifier,1000,120)

};


    }, 500);



});


$('#submit4').on('click', function(){

console.log('submit 3 clicked')
console.log('wait 2 seconds')
 setTimeout(function () {
       


console.log('wait 2 seconds')
var newimg = $('#main').attr('src');
var newcol = $('#submit3').css( "background-color" );

console.log(newcol)

 //var newimg = $('#main').attr('src',newimg);
console.log(newimg)

var img = new Image();
img.crossOrigin = 'Anonymous';
var cv = document.getElementById('thecanvas');
img.src = newimg;
var text = $('#inp').val()

console.log(text)
if(typeof(text)== "undefined"){
    console.log('default')
    var text = "Wanted: People For Free Hearing Aid Trials"
}else if (text.length<2){
    console.log('default')
    var text = "Wanted: People For Free Hearing Aid Trials"
}

console.log('what is it?')
console.log(typeof(text))
console.log(text)
img.onload = function() {
    console.log('moree'+text)
    var ctx = cv.getContext('2d');
    //cv.style.width = img.width + 'px';
    //cv.style.height = img.height + 'px';
    
    cv.width = 1080;
    cv.height = 1920;
    var offsetX = -100;   // center x
    var offsetY = 0.5;   // center y
    ctx.fillStyle = newcol;
    ctx.fillRect(0, 0, cv.width, cv.height);
    drawImageProp(ctx, img, 0, 0, 1080, 1152, offsetX, offsetY);
    ctx.font = "120px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillStyle = 'white';
    ctx.shadowBlur = 20;
    ctx.textAlign = "center";
    ctx.shadowColor = "#000000";
    ctx.shadowOffsetX = 5
    ctx.shadowOffs = 10;  

    var heightModifier = 1.25 

     if(text.length>74 &&  text.length <200){
        heightModifier = 1.5
    }
    if(text.length>60 &&  text.length <75){
        heightModifier = 1.45
    }
    else if(text.length>44 &&  text.length <61){
        heightModifier = 1.4
    }
    else if (text.length>29 &&  text.length <45){
        heightModifier = 1.35
    }else if(text.length>15 &&  text.length <30){
        heightModifier = 1.3
    }
    

    wrapText(ctx,text,cv.width/2,  cv.height/heightModifier,1000,120)

};


    }, 0);



});


$('#submit2').on('click', function(){

 var newimg = $('#inp2').val();
 $('#main').attr('src',newimg);



var img = new Image();
img.crossOrigin = 'Anonymous';
var cv = document.getElementById('thecanvas');
img.src = newimg;
var text = $('#inp').val()




if(typeof(text)== "undefined"){
    console.log('default')
    var text = "Wanted: People For Free Hearing Aid Trials"
}

console.log(text)
img.onload = function() {
    console.log('moree'+text)
    var ctx = cv.getContext('2d');
    //cv.style.width = img.width + 'px';
    //cv.style.height = img.height + 'px';
    
    cv.width = 1080;
    cv.height = 1920;
    var offsetX = -100;   // center x
    var offsetY = 0.5;   // center y
    ctx.fillStyle = $('#submit3').css( "background-color" );;
    ctx.fillRect(0, 0, cv.width, cv.height);
    drawImageProp(ctx, img, 0, 0, 1080, 1152, offsetX, offsetY);
    ctx.font = "120px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillStyle = 'white';
    ctx.shadowBlur = 20;
    ctx.textAlign = "center";
    ctx.shadowColor = "#000000";
    ctx.shadowOffsetX = 5
    ctx.shadowOffs = 10;  

    var heightModifier = 1.25 

     if(text.length>74 &&  text.length <200){
        heightModifier = 1.5
    }
    if(text.length>60 &&  text.length <75){
        heightModifier = 1.45
    }
    else if(text.length>44 &&  text.length <61){
        heightModifier = 1.4
    }
    else if (text.length>29 &&  text.length <45){
        heightModifier = 1.35
    }else if(text.length>15 &&  text.length <30){
        heightModifier = 1.3
    }
    

    wrapText(ctx,text,cv.width/2,  cv.height/heightModifier,1000,120)

};

});


$('#inp').on('input', function(){
 
var img = new Image();
img.crossOrigin = 'Anonymous';
var cv = document.getElementById('thecanvas');
img.src = $('#main').attr('src');
var text = $('#inp').val()
console.log(text)
img.onload = function() {
    console.log('moree'+text)
    var ctx = cv.getContext('2d');
    //cv.style.width = img.width + 'px';
    //cv.style.height = img.height + 'px';
    
    cv.width = 1080;
    cv.height = 1920;
    var offsetX = -100;   // center x
    var offsetY = 0.5;   // center y
    ctx.fillStyle = $('#submit3').css( "background-color" );;
    ctx.fillRect(0, 0, cv.width, cv.height);
    drawImageProp(ctx, img, 0, 0, 1080, 1152, offsetX, offsetY);
    ctx.font = "120px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillStyle = 'white';
    ctx.shadowBlur = 20;
    ctx.textAlign = "center";
    ctx.shadowColor = "#000000";
    ctx.shadowOffsetX = 5
    ctx.shadowOffs = 10; 
    var heightModifier = 1.25 

    if(text.length>74 &&  text.length <200){
        heightModifier = 1.5
    }
    if(text.length>60 &&  text.length <75){
        heightModifier = 1.45
    }
    else if(text.length>44 &&  text.length <61){
        heightModifier = 1.4
    }
    else if (text.length>29 &&  text.length <45){
        heightModifier = 1.35
    }else if(text.length>15 &&  text.length <30){
        heightModifier = 1.3
    }
    



    wrapText(ctx,text,cv.width/2,  cv.height/heightModifier,1000,120)

    // ctx.font = '80px Sans-serif';
    
   
   

};


});