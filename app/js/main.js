window.onload = function() {

   var rl = Math.floor(Math.random() * 5),
       l1 = rl,
       l2 = l1 + 1,
       l3 = l2 + 1,
       hits = 0,
       guss = 0,
       inSunk = false;
    while ( inSunk == false ){
        gus = prompt("введите число от 1 до 6");
        if (gus < 0 || gus > 6) {
            alert("вы ввели не то число")

        } else {
            guss = guss + 1;
            console.log(guss);

        if (gus == l1 || gus == l2 || gus == l3 ) {
            hits = hits + 1;
            alert('попал в' + hits + 'клеток коробля' )
            if (hits == 3) {
                inSunk = true;
                alert('ship is doun');
            }
        } else {
            alert('промах')
        }
        }

    }
    var stat = "ты сделал" + guss + "выстрела"
    alert(stat);

    function lol(name,www){
        if(www > 20 ){
            console.log(name + 'say GAF GAF')
        } else {
            console.log(name + 'say taf taf')
        }
    }
    lol('lila', 23 );
    lol('bora', 13 );
    lol('ola', 53 );
    lol('casha', 17 );

    function doit(param) {
        param = 2;
        console.log(param)
    }

   var text = 1;
    doit(text);


    function clunk(time) {
        var num = time;
        while (num > 0) {
            display("clunk");
            num = num - 1;
        }
    }

    function thin(size) {
        var f = 1;
        CC = 0;
        if (size == 0 ){
            display('clunk');
        } else if (size == 1) {
            display('think')
        } else {
            while (size > 1) {
                f = f * size;
                size = size - 1;
            }
            clunk(f);
        }
    }
    function display(output) {
        console.log(output);
        CC = CC + 1;
    }



    var CC = 0;
    thin(3);
    console.log(CC);

}

