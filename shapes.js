window.onload = appear();
var clicked;
var start;
var num=0;
var l = 1000;
function disappear() {
    document.getElementById('box').style.display="none";
    clicked = Date.now();
    var reaction = (clicked-start)/1000;
    var delay =((Math.random()*3) + 2) * 1000;
    document.getElementById('react').innerHTML="Reaction time : " + reaction + "s";
    num = num + 1;
    if(num !=0){
    document.getElementById('shapes').innerHTML="Number of shapes clicked : " + num;
   }
   else {
     document.getElementById('shapes').innerHTML="Number of shapes clicked : 0 ";
   }
   if(reaction < l ){
       l = reaction;
       document.getElementById('bestt').innerHTML="best timing : " + l + "s";
   }


    setTimeout(appear , delay);
}

function appear() {
  var randomtop = (Math.random())*425;
  var randomwidth = (Math.random())*150 + 10;
  var randomheight = (Math.random())*150 + 10;
  var randomleft = (Math.random())*1300;
  var randomcurve = (Math.random());
  var randomcolor = '#' + ((1<<24)*Math.random()|0).toString(16);
  if(randomcurve<0.5){
    document.getElementById('box').style.borderRadius= 50 + 'px';
  }
  else {
    document.getElementById('box').style.borderRadius=0 + 'px';
  }
    document.getElementById('box').style.backgroundColor=randomcolor;
    document.getElementById('box').style.top=randomtop + 'px';
    document.getElementById('box').style.width=randomwidth + 'px';
    document.getElementById('box').style.height=randomheight + 'px';
    document.getElementById('box').style.left=randomleft + 'px';
    document.getElementById('box').style.display="block";
    start = Date.now();
    document.getElementById('react').innerHTML="Reaction time : ";

}
