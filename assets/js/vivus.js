// SVGアニメーション
{
  window.onload = () => {
    new Vivus('ttl_anime', {
      type: 'scenario-sync',
      duration: 10,
      forceRender: false,
      animTimingFunction: Vivus.EASE,
      start: 'autostart'
    })
  }
}