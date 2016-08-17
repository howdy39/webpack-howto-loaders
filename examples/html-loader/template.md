## [html-loader](https://github.com/webpack/html-loader)
htmlファイルを読み込むためのLoader

テンプレートHTMLを別ファイルに定義する時とかに使うとよさげ。

### インストール

```console
npm install html-loader --save-dev 
```

### example.js

```javascript:example.js
{{example.js}}
```

### cats.html

```html:cats.html
{{cats.html}}
```

### webpack.config.js

```javascript:webpack.config.js
{{webpack.config.js}}
```

### 実行&実行結果

```console 
node output.js
<ul>
  <li>tama</li>
  <li>kuro</li>
  <li>tora</li>
</ul>
```
