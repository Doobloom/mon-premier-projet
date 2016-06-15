$(".scott").animateSprite({
    fps: 12,
    animations: {
        walkRight: [0, 1, 2, 3, 4, 5, 6, 7],
        walkLeft: [15, 14, 13, 12, 11, 10, 9, 8]
    },
    loop: true,
    complete: function(){
        
        alert("animation End");
    }
});



$("body").keydown(function(e) {
        if(e.keyCode == 37) { 
            console.log('left');
        }
        else if(e.keyCode == 39){
            console.log('right');
        }
    });