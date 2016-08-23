## [bundle-loader](https://github.com/webpack/bundle-loader)
ファイルを分割&動的にロードするためのLoader

通常出力ファイルは1つになりますがbundle-loaderを使うことで分割することが可能です。
SPAでファイルが大きくなりすぎた時などに画面毎に出力するなどに利用できそうです。

**パラメータ**

- lazyでロードタイミングの制御。  
- nameで出力ファイル名の調整。 

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
