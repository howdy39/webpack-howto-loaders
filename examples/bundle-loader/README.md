## [bundle-loader](https://github.com/webpack/bundle-loader)
ファイルを分割&動的にロードするためのLoader

lazyパラメータでロードタイミングの制御。  
nameパラメータで出力ファイル名の調整が可能。  

※bundle-loaderは内部的にはrequire.ensureを使っています。  
require.ensureについてはこちらの記事、[webpackのrequire.ensureでDynamic Loadingをして大規模アプリケーションを作る](http://qiita.com/RyotaSugawara/items/0effa7ce42adfcb66a35)を参考に。

### インストール

```console
npm install bundle-loader css-loader style-loader --save-dev
```

### example.js

```javascript:example.js
document.getElementById('applyStyle').addEventListener('click', function(e) {
  // lazyなし
  // requireを読んだ時点で1.output.jsをロードする
  var waitForChunkFirst = require('bundle!./first.css');
  waitForChunkFirst(function() {
    console.log("finished waitForChunkFirst");
  });

  setTimeout(function() {
    // lazyあり
    // requireを読んでも2.output.jsはロードされない。下の行のwaitForChunkSecond()を読んだ時点でロードする
    var waitForChunkSecond = require('bundle?lazy!./second.css');
    waitForChunkSecond(function() {
      console.log("finished waitForChunkSecond");
    });
  }, 3000);

  setTimeout(function() {
    // name指定で出力ファイル名を変更（webpack.config.js内のoutput.chunkFilenameの[name]に入る）
    var waitForChunkThird = require('bundle?name=third!./third.css');
    waitForChunkThird(function() {
      console.log("finished waitForChunkThird");
    });
  }, 6000);
});
```

### first.css

```css:first.css
body { background: lightblue; }
```

### second.css

```css:second.css
body { background: lightcoral; }
```

### third.css

```css:third.css
body { background: lightgreen; }
```

### example.html

```html:example.html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Sample Page</title>
  </head>
  <body>
    <button id="applyStyle">スタイルを適用</button>
    <script type="text/javascript" src="./dist/output.js"></script>
  </body>
</html>
```

### webpack.config.js

```javascript:webpack.config.js
module.exports = {
  entry: './example.js',
  output: {
    path: 'dist',
    filename: 'output.js',
    publicPath: './dist/',
    chunkFilename: '[name].output.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loaders: ['style', 'css']}
    ]
  }
}
```

### 実行&実行結果

![cap1](https://raw.githubusercontent.com/howdy39/webpack-howto-loaders/master/examples/bundle-loader/capture/cap1.png)
