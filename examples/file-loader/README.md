## [file-loader](https://github.com/webpack/file-loader)
fileファイルを読込&出力するためのLoader

nameクエリで出力ディレクトリやファイル名を変更可能です。  
内部的に[loader-utils](https://github.com/webpack/loader-utils)が使われているため、指定方法はそちらを参照。

### インストール

```console
npm install file-loader --save-dev
```

### example.js

```javascript:example.js
// デフォルトは[hash].[ext]の形
var file1 = require('file!./image/corgi.jpeg');
console.log(file1);

// nameで上書きが可能
var file2 = require('file?name=picture.png!./image/corgi.jpeg');
console.log(file2);

// ディレクトリを指定することも可
var file3 = require('file?name=image/[hash].[ext]!./image/corgi.jpeg');
console.log(file3);
```

### webpack.config.js

```javascript:webpack.config.js
module.exports = {
  entry: './example.js',
  output: {
    path: 'dist',
    filename: 'output.js',
    publicPath: './dist/'
  },
  module: {
    loaders: [
      // {test: /\.jpeg$/, loader: 'file'} // 検証のため直接requireの方に記載
    ]
  }
}
```

### 実行&実行結果

```console 
node dist/output.js
 
./dist/7bc819f9f86b5290e250ae925bb4056d.jpeg
./dist/picture.png
./dist/image/7bc819f9f86b5290e250ae925bb4056d.jpeg
```

### その他
デフォルトのハッシュ関数はMD5が使われています。

`corgi.jpeg`は`7bc819f9f86b5290e250ae925bb4056d`になりましたね。

```console:md5になっていることを確認
openssl md5 image/corgi.jpeg 

MD5(image/corgi.jpeg)= 7bc819f9f86b5290e250ae925bb4056d
```