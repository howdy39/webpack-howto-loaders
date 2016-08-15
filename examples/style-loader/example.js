// そのまま画面に適用するパターン
require('style!./use.css');

// スタイルの適用を切り替えるパターン（デフォルトはオフ）
var style = require('style/useable!./useable.css');
document.getElementById('use').addEventListener('click', function(e) {
  style.use();
});
document.getElementById('unuse').addEventListener('click', function(e) {
  style.unuse();
});

