const { DrawingSymbol } = RxJsVisualizer;
const { draw } = RxJsVisualizer.operators;

window.onload = () => {
    RxJsVisualizer.init({
      canvasId: 'canvas',
      logDivId: 'logs'
    });

    RxJsVisualizer.prepareCanvas(['values']);
    RxJsVisualizer.startVisualize();
    RxJsVisualizer.createStreamFromArraySequence([10, 11, 12, 13, 14])
      .subscribe(RxJsVisualizer.observerForLine(0, 'value', true));
};
