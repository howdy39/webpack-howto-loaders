var puppy1 = require('url!./image/puppy.jpg'); // インラインイメージ
document.getElementById('puppy1').src = puppy1;

var puppy2 = require('url?limit=1000!./image/puppy.jpg'); // 外部ファイル（ハッシュがファイル名）
document.getElementById('puppy2').src = puppy2;

var puppy3 = require('url?limit=1000&name=picture.png!./image/puppy.jpg'); // 外部ファイル（ファイル名を指定）
document.getElementById('puppy3').src = puppy3;