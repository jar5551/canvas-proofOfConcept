$(document).ready(function () {

    var GYROAPP = GYROAPP || {};

    GYROAPP.init = function () {
        window.addEventListener("deviceorientation", GYROAPP.handleOrientation, true);

    };

    GYROAPP.event = {
        addListener: function (el, type, fn) {
            el.on(type, fn);
        }
    };

    GYROAPP.Canvas = function (elementId) {
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

        _this.fillRect = function (posX, posY, width, height) {
            /*_this.ctx.rect(posX, posY, width, height);
            _this.ctx.stroke();*/
            _this.ctx.fillRect(posX, posY, width, height);
        };

        _this.rotate = function (degrees) {
            _this.ctx.rotate(degrees*Math.PI/180);
        };

        _this.move = function (moveX, moveY) {
            _this.ctx.translate(moveX, moveY);
        };
        
        _this.drawRotatedRectangle = function (posX, posY, width, height, degrees) {
            _this.clearRect();

            //_this.move(posX + width / 2, posY + height / 2);
            _this.rotate(degrees);
            _this.fillRect(-width / 2, -height / 2, width, height);
        }
    };

    GYROAPP.handleOrientation = function (event) {
        this.orientation = {
            absolute: event.absolute,
            alpha: event.alpha,
            beta: event.beta,
            gamma: event.gamma

        };

        console.log(this.orientation.alpha);
        poziomica.rotate(this.orientation.alpha);

        //gyroCanvas.drawRotatedRectangle(100, 50, 100, 200, this.orientation.alpha);

        //gyroCanvas.drawRotatedRectangle(100, 50, 100, 200, this.orientation.alpha);

    };

    GYROAPP.Levels = function (elementId) {
        var _this = this;

        _this.element = document.getElementById(elementId);

        _this.rotate = function (degree) {
          $(_this.element).css({
              '-webkit-transform': 'rotate(' + degree + 'deg)',
              '-moz-transform': 'rotate(' + degree + 'deg)',
              '-ms-transform': 'rotate(' + degree + 'deg)',
              '-o-transform': 'rotate(' + degree + 'deg)',
              'transform': 'rotate(' + degree + 'deg)'
          });
        };

    };

    //var gyroCanvas = new GYROAPP.Canvas('gyroCanvas');

    //gyroCanvas.setFont('28px Arial');
    //gyroCanvas.setText('0');
    //gyroCanvas.drawRotatedRectangle(100, 50, 100, 200, 0);

    var poziomica = new GYROAPP.Levels('level');

    console.log(poziomica);

    GYROAPP.init();
});

