

        
//         var voiceList = document.querySelector('#voiceList');
       
//         var synth = window.speechSynthesis;
//         var voices = [];
        
        

//         function speech(){  
//         var toSpeak = new SpeechSynthesisUtterance("User Started using Application");
//             var selectedVoiceName = "Microsoft Zira - English (United States)";
//             voices.forEach((voice)=>{
//                 if(voice.name === selectedVoiceName){
//                     toSpeak.voice = voice;
//                 }
//             });
//             synth.speak(toSpeak);}

//          function speech1(){  
//         var toSpeak = new SpeechSynthesisUtterance("Orientation of Seating:" + "Proper Seating Mode");
//             var selectedVoiceName = "Microsoft Zira - English (United States)";
//             voices.forEach((voice)=>{
//                 if(voice.name === selectedVoiceName){
//                     toSpeak.voice = voice;
//                 }
//             });
//             synth.speak(toSpeak);}
//         function speech2(){  
//         var toSpeak = new SpeechSynthesisUtterance("Orientation of Seating:" + "Not Proper Seating Mode");
//             var selectedVoiceName = "Microsoft Zira - English (United States)";
//             voices.forEach((voice)=>{
//                 if(voice.name === selectedVoiceName){
//                     toSpeak.voice = voice;
//                 }
//             });
//             synth.speak(toSpeak);}

//         function speech3(){  
//         var toSpeak = new SpeechSynthesisUtterance("Thanks for using Smart Chair");
//             var selectedVoiceName = "Microsoft Zira - English (United States)";
//             voices.forEach((voice)=>{
//                 if(voice.name === selectedVoiceName){
//                     toSpeak.voice = voice;
//                 }
//             });
//             synth.speak(toSpeak);}
            
        
var lastImageNumber = 36;
var images = [];
for (var i = 1; i < lastImageNumber+1; i += 1) {
    images[i] = "http://www.jeep.com/assets/images/vehicles/2015/cherokee/vlp/mod-exterior-360/frame-" + i + ".jpg";
}

window.addEventListener("DOMContentLoaded", function() {
     for(var i in images) {
        var img = new Image();
          img.src = images[i];
          img.style.display = "none";
          img.addEventListener("load", function() {
               this.parentNode.removeChild(this);
          });
          document.body.appendChild(img);
     }
});
function round(v) {
    return (v >= 0 || -1) * Math.round(Math.abs(v));
}



function deviceOrientationListener(event) {
     var c=document.getElementById("myCanvas");
     var ctx=c.getContext("2d");
     ctx.clearRect(0,0, c.width, c.height);
     ctx.fillStyle="#00000";
     ctx.font="20px Verdana";
     ctx.fillText("Alpha:" + Math.round(event.alpha) ,10,40);
     ctx.fillText("Beta:" + Math.round(event.beta),10,80);
     ctx.fillText("Gamma:" + Math.round(event.gamma),10,120);
    
    if(Math.round(event.beta)<93 && (event.beta)>85    )
    {
        
                    ctx.fillText("Orientation of Seating:" + "Proper Seating Mode",10,240);
                        
               
    }
    if(Math.round(event.alpha)>0)
    {
        if(Math.round(event.beta)>0){
            if(Math.round(event.gamma)>0){
                ctx.fillText("User Started using Application",10,200); 
                

                    
                
            }
        }
    }
    
        if(Math.round(event.beta)<80){
            
                ctx.fillText("Orientation of Seating:" + "Not Proper Seating Mode",10,240);
                    
            
        }
    
        if(Math.round(event.gamma )<55 &&   Math.round(event.beta)<27   )
            {
                
                    
                        
                            ctx.fillText("Thanks for using Smart Chair",10,280);
                                
                        
                    
                
            }
        else{
               if(Math.round(event.alpha)==0)
                    {
                        if(Math.round(event.beta)==0){
                            if(Math.round(event.gamma)==0){
                                ctx.fillText("Thanks for using Smart Chair",10,280);
                                    
                            }
                        }
                    } 
        }

     var img = document.getElementById('cd');
     var GammaVal = round(event.gamma);
     var ForceInRange = Math.floor(GammaVal);
     if (GammaVal <= 36) {   img.src = images[36]; } // Constrain first image
      else if (GammaVal >= 1)  {  img.src = images[lastImageNumber]; } //Constrain last image
        else img.src = images[ForceInRange];
ctx.fillText("Using Image:" + img.src ,10,160);
}


// Orientation Check
var supportsOrientation = "No";
if (window.DeviceOrientationEvent) {
   window.addEventListener("deviceorientation", deviceOrientationListener);
   var supportsOrientation = "Yes";
   } else {   document.getElementById("dmEvent").innerHTML = "deviceorientation Not Supported!"}
//END Check to see if browser supports motion
