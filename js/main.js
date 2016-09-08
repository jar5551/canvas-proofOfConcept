$(document).ready(function () {

    var MYAPP = MYAPP || {};

    MYAPP.calculatePct = function (val, maxVal) {
        return (val * 100) / maxVal;
    };

    MYAPP.event = {
        addListener: function (el, type, fn) {
            el.on(type, fn);
        }
    };

    MYAPP.Canvas = function (elementId) {
        var _this = this;

        _this.options = {
            text: {
                posX: 10,
                posY: 50
            }
        };

        _this.c = document.getElementById(elementId);
        _this.ctx = _this.c.getContext('2d');

        _this.setOptions = function (options) {
            //TODO rzeczy aby moc konfigutowac defaultowe wartosci
        };

        _this.fillText = function (text, posX, posY) {
            _this.ctx.fillText(text, posX, posY);
        };

        _this.setFont = function (font) {
            _this.ctx.font = font;
        };

        _this.clearRect = function () {
            _this.ctx.clearRect(0, 0, _this.c.width, _this.c.height);
        };

        _this.setText = function (text) {
            _this.clearRect();
            _this.fillText(text, 10, 50);
        };
    };

    var customCanvas = new MYAPP.Canvas('myCanvas');

    MYAPP.event.addListener($(document), 'scroll', function () {
        var _this = this;

        _this.heights = {
            windowHeight: $(window).height(),
            documentHeight: $(document).height(),
            scrollTop: $(window).scrollTop(),
            scrollPct: 0
        };

        //console.log(MYAPP.calculatePct(_this.heights.scrollTop, _this.heights.documentHeight - _this.heights.windowHeight));
        _this.pct = MYAPP.calculatePct(_this.heights.scrollTop, _this.heights.documentHeight - _this.heights.windowHeight);
        customCanvas.setText('scrolled: ' + _this.pct.toFixed(0) + '%');

    });

    customCanvas.setFont('28px Arial');
    customCanvas.setText('0');

});

