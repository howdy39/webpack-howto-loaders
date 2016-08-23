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
