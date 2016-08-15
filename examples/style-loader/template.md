## [style-loader](https://github.com/webpack/style-loader)
styleを読み込むためのLoader

css-loaderとセットで使う。

使い方が2パターンあり。
後者だとスタイル適用のオンオフを切り替えることが出来る。

1. style!を指定
1. style/useable!を指定

### インストール

```console
npm install --save-dev style-loader css-loader
```

### example.js

```javascript:example.js
{{example.js}}
```

### use.css

```css:use.css
{{use.css}}
```

### useable.css

```css:useable.css
{{useable.css}}
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

**初期状態**
![cap1](https://raw.githubusercontent.com/howdy39/webpack-howto-loaders/master/examples/style-loader/capture/cap1.png)

**スタイルを適用**
![cap2](https://raw.githubusercontent.com/howdy39/webpack-howto-loaders/master/examples/style-loader/capture/cap2.png)

**スタイルを外す**
![cap3](https://raw.githubusercontent.com/howdy39/webpack-howto-loaders/master/examples/style-loader/capture/cap3.png)