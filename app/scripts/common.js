var sliderValue = [1, 40, 99, 200];

$(document).ready(function() {
    $( "#slider" ).slider({
        value: 99,
        min: 1,
        max: 200,
        step: 1,
        animate: true,
        slide: function( event, ui ) {
            if( sliderValue.indexOf(ui.value)===-1 ) {
                return false;
            }
        }
    });
});
