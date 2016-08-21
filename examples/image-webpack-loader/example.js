var puppy1 = require('url?limit=80000&name=puppy1.png!image-webpack?!./image/puppy.png');
document.getElementById('puppy1').src = puppy1;

var puppy2 = require('url?limit=70000&name=puppy2.png!image-webpack!./image/puppy.png');
document.getElementById('puppy2').src = puppy2;

var puppy3 = require('file?name=puppy3.png!image-webpack!./image/puppy.png');
document.getElementById('puppy3').src = puppy3;

var puppy4 = require('file?name=puppy4.png!image-webpack?bypassOnDebug=true!./image/puppy.png');
document.getElementById('puppy4').src = puppy4;
