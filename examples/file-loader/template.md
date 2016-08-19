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
{{example.js}}
```

### webpack.config.js

```javascript:webpack.config.js
{{webpack.config.js}}
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