## [postcss-loader]()
postcssを通すためのLoader

postcss-loaderはcssへの変換を行います。  
そのためcss-loaderとセットで使います。  

**使用例**  
`require('postcss!./example.css')`の形だとrequireできずにエラーになります。  
`require('style!css!postcss!./example.css')`の形で画面に適用させるか  
`require('css!postcss!./example.css')`の形で`extract-text-webpack-plugin`と併用してcssファイルを出力するかのいずれかになると思います。

### インストール

```console
npm install postcss-loader css-loader autoprefixer extract-text-webpack-plugin --save-dev
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

```css:styles.css
{{./dist/styles.css}}
```