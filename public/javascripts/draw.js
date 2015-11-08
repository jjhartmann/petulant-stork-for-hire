/**
 * Created by Jeremy on 11/8/2015.
 */

$(function(){

    // Check to see if webrowser supports canvas
    if(!('getContext' in document.createElement('canvas'))){
        alert('Doesn\' look like your webbroswer supports canvas :(');
        return false;
    }

    var doc = $(document),
        win = $(window),
        canvas = $('#paper'),
        contex = canvas[0].getContext('2d'),
        introduction = $('#introductions');

    var draw = false;
    var previous = {};

    canvas.on('mousedown', function(e){
        e.preventDefault();
        previous.x = e.pageX;
        previous.y = e.pageY;

        introduction.fadeOut();
    });

    doc.bind('mouseup mouseleave', function () {
        draw = false;
    });

    doc.on('mousemove', function(e) {
        if (draw) {
            drawLine(previous.x, previous.y, e.pageX, e.pageY);
            previous.x = e.pageX;
            previous.y = e.pageY;
        }
    })


    function drawLine(fromx, fromy, tox, toy) {
        contex.moveTo(fromx, fromy);
        contex.lineTo(tox, toy);
        contex.stroke();
    }

});