/*document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/





var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ancient.jpg') {
      myImage.setAttribute ('src','images/an.jpg');
    }
    else if( mySrc === 'images/an.jpg' ) 
    {
    	myImage.setAttribute ('src','images/anc.jpg');
    }
    else{
      myImage.setAttribute ('src','images/ancient.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Ships are cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Ships are cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

