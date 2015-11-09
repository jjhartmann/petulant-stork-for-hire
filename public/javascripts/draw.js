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
        context = canvas[0].getContext('2d'),
        introduction = $('#introductions');

    var draw = false;
    var previous = {};

    canvas.on('mousedown', function(e){
        e.preventDefault();
        previous.x = e.pageX;
        previous.y = e.pageY;

        draw = true;
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
        context.moveTo(fromx, fromy);
        context.lineTo(tox, toy);
        context.stroke();
    }

});