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
{{example.js}}
```

### first.css

```css:first.css
{{first.css}}
```

### second.css

```css:second.css
{{second.css}}
```

### third.css

```css:third.css
{{third.css}}
```

### example.html

```html:example.html
{{example.html}}
```

### webpack.config.js

```javascript:webpack.config.js
{{webpack.config.js}}
```

### 実行&実行結果

![cap1](https://raw.githubusercontent.com/howdy39/webpack-howto-loaders/master/examples/bundle-loader/capture/cap1.png)
