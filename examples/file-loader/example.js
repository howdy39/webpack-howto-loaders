// デフォルトは[hash].[ext]の形
var file1 = require('file!./image/corgi.jpeg');
console.log(file1);

// nameで上書きが可能
var file2 = require('file?name=picture.png!./image/corgi.jpeg');
console.log(file2);

// ディレクトリを指定することも可
var file3 = require('file?name=image/[hash].[ext]!./image/corgi.jpeg');
console.log(file3);
