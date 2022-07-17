const { DrawingSymbol } = RxJsVisualizer;
const { draw } = RxJsVisualizer.operators;

window.onload = () => {
    RxJsVisualizer.init({
      canvasId: 'canvas',
      logDivId: 'logs'
    });

    RxJsVisualizer.prepareCanvas(['seq']);
    RxJsVisualizer.startVisualize();
    RxJsVisualizer.createStreamFromArraySequence(['a', 'b', 'c'])
        .subscribe(RxJsVisualizer.observerForLine(0, 'seq'));
};
