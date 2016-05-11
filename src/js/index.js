
(() => {
  let container = document.getElementById('container');
  let display = document.getElementById('display');

  let storedRawWidth = -1;

  let write = (scale) => {
    let clean = Math.round(scale * 10) * 10;
    display.innerHTML = `現在${clean}%表示です。`
  };

  // SWFから横幅が投げられるメソッド
  let onResizeSWF = (rawWidth) => {
    storedRawWidth = rawWidth;
    write(compute(rawWidth));
  }

  // ブラウザの拡大率変更時
  let onResize = (e) => {
    write(compute(storedRawWidth));
  };

  // SWFの横幅と、DOMの横幅を比較して拡大率を算出する
  let compute = (rawWidth) => {
    let zoomedWidth = container.clientWidth;
    return rawWidth / zoomedWidth;
  };

  window.addEventListener('resize', onResize);
  window.onResizeSWF = onResizeSWF;
})();
