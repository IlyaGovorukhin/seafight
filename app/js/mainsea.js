window.onload = function() {
    var vies = {
        massage: function (msg) {
           var masseg = document.getElementById("massage");
           masseg.innerHTML = msg;
       },
        hit: function (nameID) {
         var hit = document.getElementById(nameID);
         hit.setAttribute("class", "hit spader_wrepper-box ship");
     },
        miss: function (nameID) {
         var hit = document.getElementById(nameID);
          hit.setAttribute("class", "miss spader_wrepper-box");
      },
        ship: function (nameID) {
            var  ship = document.getElementById(nameID);
            ship.setAttribute("class", "ship spader_wrepper-box1");
        }
    }

    var model = {
        borderSize: 9,
        numShip: 7,
        shipSank: 0,
        shipLength: 3,
        ofon: true,
        start: false,
        shipscol: 0,
        collection: [],
        pointd: [],
        stop: false,
        ships: [{location: [0, 0, 0], hits: ["", "", ""]},
                {location: [0, 0, 0], hits: ["", "", ""]},
                {location: [0, 0, 0], hits: ["", "", ""]},
                {location: [0, 0, 0], hits: ["", "", ""]},
                {location: [0, 0, 0], hits: ["", "", ""]},
                {location: [0, 0, 0], hits: ["", "", ""]},
                {location: [0, 0, 0], hits: ["", "", ""]}
        ],
        shipsmy: [{location: [0, 0, 0], hits: ["", "", ""]},
            {location: [0, 0, 0], hits: ["", "", ""]},
            {location: [0, 0, 0], hits: ["", "", ""]},
            {location: [0, 0, 0], hits: ["", "", ""]},
            {location: [0, 0, 0], hits: ["", "", ""]},
            {location: [0, 0, 0], hits: ["", "", ""]},
            {location: [0, 0, 0], hits: ["", "", ""]}
        ],
        rastsnovca: function(e){
            for (var i = 0; i < this.shipsmy.length; i++){
                var foo = this.shipsmy[i];
                for (var a = 0; a < foo.location.length; a++){
                    var uu = [];
                        for (var y = 0; y < this.shipLength; y++) {
                            var tt,
                                gg;
                            if(this.ofon){
                                tt = +e.charAt(3) + y
                                gg = "swp" + tt + e.charAt(4);
                            } else {
                                tt = +e.charAt(4) + y
                                gg = "swp" + e.charAt(3) + tt;
                            }

                            uu.push(gg);
                        }
                        this.fuck(uu);
                        return true;

                }

            }


        },

        fuck: function(e){

            for (var i = 0; i < this.shipsmy.length; i++) {
                var foo = this.shipsmy[i];
                if(foo.location[1] == 0 && this.what(e)){
                    foo.location = e;
                    for (var r = 0; r < this.shipLength; r++) {
                        vies.ship(e[r]);
                    }
                    this.shipscol++;
                    init();
                    return true;
                }

            }




        },

        what: function(e){
            for (var i = 0; i < this.shipsmy.length; i++) {
                var foo = this.shipsmy[i];
                for (var a = 0; a < e.length; a++) {
                    var index = foo.location.indexOf(e[a]);
                    if(index >= 0){
                        return false;
                    }
                    if(foo.location[a]!== 0) {
                        var po1 = +(e[0].charAt(3) + e[0].charAt(4)),
                            po2 = +(e[1].charAt(3) + +e[1].charAt(4)),
                            po3 = +(e[2].charAt(3) + +e[2].charAt(4)),
                            op1 = +(foo.location[a].charAt(3) + foo.location[a].charAt(4));
                        if (po1 == po2 - 1) {
                            if (op1 == po1 - 1 || op1 == po3 + 1) {
                                return false;
                            }
                            if (op1 == po1 - 10 || op1 == po3 + 10) {
                                return false;
                            }
                            if (op1 == po1 - 10 || op1 == po3 + 10 || op1 == po1 - 9 || op1 == po3 + 9 || op1 == po1 - 8 || op1 == po3 + 8) {
                                return false;
                            }
                        }
                        if (po1 == po2 - 10) {
                            if (op1 == po1 - 1 || op1 == po1 + 1 || op1 == po2 - 1 || op1 == po2 + 1 || op1 == po3 - 1 || op1 == po3 + 1) {
                                return false;
                            }
                            if (op1 == po1 - 10 || op1 == po3 + 10) {
                                return false;
                            }
                        }
                        ;
                    }
                    if(+e[2].charAt(3) > 8 || +e[2].charAt(4) > 8 || +e[1].charAt(3) > 8 || +e[1].charAt(4) > 8 ){
                        return false;
                    }



                    }
            }
            return true;

        },
        line: function(){
           if(this.ofon == true ){
               this.ofon = false;
           } else {
               this.ofon = true;
           }
        },

       myfire: function(){
           var row,
               col,
               rez;
           row = Math.floor(Math.random() * this.borderSize);
           col = Math.floor(Math.random() * this.borderSize);
           rez = 'swp' + row + col;
           this.control(rez);



       },
        control: function(rez){
            var poi = this.pointd.indexOf(rez);
            this.pointd.push(rez);
            for (var i = 0; i < this.numShip; i++) {
                var foo = this.shipsmy[i],
                    index = foo.location.indexOf(rez);
                if(poi < 0){
                    if(index >= 0){
                        foo.hits[index] = "hit";
                        vies.hit(rez);
                        output();
                        return true;
                    } else {
                        vies.miss(rez);
                    }
                } else  {
                    this.pointd.pop();
                    do{
                        this.myfire();
                    }while(poi < 0);

                    return true;
                }
            }
        },

        fire: function (znashenie) {
            for (var i = 0; i < this.numShip; i++) {
                var ship = this.ships[i];
                var index = ship.location.indexOf(znashenie);
                //for(var a = 0; a < loc.length; a++){
                //    if(loc[a] == znashenie ){
                //       return true;
                //   }
                // };
                if (index >= 0) {
                    ship.hits[index] = "hit";
                    vies.massage("Попал");
                    vies.hit(znashenie);
                    this.stop = true;
                    if (this.isSunk(ship)) {
                        this.shipSank++
                        vies.massage("Ты подбил корабль")
                    }
                    return true;
                };
            };
            this.stop =false;
            vies.miss(znashenie);
            vies.massage("Промах");
            return false;
        },
        isSunk: function (ship) {
            for (var i = 0; i < this.shipLength; i++) {
                if (ship.hits[i] !== "hit") {
                    return false;
                };
            };
            return true;
        },
        generetShipLocation: function () {
            var locat;
            for (var i = 0; i < this.ships.length; i++) {
                do {
                    locat = this.generetShip();
                } while (this.collision(locat));
                this.ships[i].location = locat;


            }
        },
        generetShip: function () {
            var direction = Math.floor(Math.random() * 2),
                row,
                col;
            if (direction === 1) {
                row = Math.floor(Math.random() * this.borderSize);
                col = Math.floor(Math.random() * (this.borderSize - this.shipLength));

            } else {
                row = Math.floor(Math.random() * (this.borderSize - this.shipLength));
                col = Math.floor(Math.random() * this.borderSize);


            }
            var newLocations = [];

            for (var i = 0; i < this.shipLength; i++) {
                if (direction === 1) {
                    newLocations.push("swb" + (row + "" + (col + i)))
                } else {
                    newLocations.push("swb" + ((row + i) + "" + col));
                }
            }

            return newLocations;
        },
        collision: function (lo) {
            for (var i = 0; i < this.numShip; i++) {
                var ship = model.ships[i];
                for (var a = 0; a < lo.length; a++) {
                    if (ship.location.indexOf(lo[a]) >= 0) {
                        return true;
                    }
                    if(ship.location[a]!== 0) {
                        var po1 = +(lo[0].charAt(3) + lo[0].charAt(4)),
                            po2 = +(lo[1].charAt(3) + +lo[1].charAt(4)),
                            po3 = +(lo[2].charAt(3) + +lo[2].charAt(4)),
                            op1 = +(ship.location[a].charAt(3) +ship.location[a].charAt(4));
                        if (po1 == po2 - 1) {
                            if(op1 == po1 - 1 || op1 == po3 + 1){
                                return true;
                            }
                            if(op1 == po1 - 10 || op1 == po3 + 10){
                                return true;
                            }
                            if(op1 == po1 - 10 || op1 == po3 + 10 || op1 == po1 - 9 || op1 == po3 + 9 || op1 == po1 - 8 || op1 == po3 + 8 ){
                                return true;
                            }
                            }
                        if (po1 == po2 -10){
                            if(op1 == po1 - 1 || op1 == po1 + 1 || op1 == po2 - 1 || op1 == po2 + 1 || op1 == po3 - 1 || op1 == po3 + 1){
                                return true;
                            }
                            if (op1 == po1 - 10 || op1 == po3 + 10)  {
                                return true;
                            }
                        }
                    };
                }
            }
            return false;
        }
    };
    var controller = {
        ColVistrel: 0,
        pereobrozovanieDanih: function (gueses) {
            var alfa = ["А", "Б", "В", "Г", "Д", "Е", "Ё","Ж","З"]
            if (gueses == null || gueses.length !== 2) {
                vies.massage("Вы ввели неправильные данные")
            }
            else {
                var firstCart = gueses.charAt(0),
                    row = alfa.indexOf(firstCart),
                    colum = gueses.charAt(1);

                if (isNaN(row) || isNaN(colum)) {
                    console.log("Вы ввели не правильные данные");
                } else if (row < 0 || row >= model.borderSize || colum < 0 ||
                    colum >= model.borderSize) {
                    console.log("Вы ввели не то число число");
                }
                else {
                    return row + colum;
                }

            }
            return null;

        },
        controller: function (g) {
            if (g.length == 2) {
                var foo = this.pereobrozovanieDanih(g);
                if (foo) {
                    var pop = "swb" + foo;
                    this.toronto(pop);
                }
                ;
            } else if (g.length == 4 || g.length == 5) {
                this.toronto(g);
            }
        },

        toronto: function (e) {
            this.ColVistrel++;
            var hit = model.fire(e);
            if (hit && model.shipSank === model.numShip) {
                vies.massage("Ты всех потопил");

            }
        },
        vremennii: function(e){
            model.rastsnovca(e);
        }
};

    function init() {
        gI = document.getElementById('sww');
        gI.onclick = function(){
            model.line();
        };
        var oppo =   document.getElementsByClassName('spader_wrepper-box1');
        if(model.shipscol == 7){
            model.start = true;
        }
        if(model.start){
        var gInput = document.getElementById('InputText'),
            fier = document.getElementById('ButtonFire'),
            goo = document.getElementsByClassName('spader_wrepper-box');


        gInput.onkeypress = function (e) {
            fier = document.getElementById('ButtonFire');
            if (e.keyCode === 13) {
                fier.click();
                return false;
            }
            ;
        };
        fier.onclick = function () {
            var gInput = document.getElementById('InputText'),
                getIn = gInput.value;
            li(getIn);
            gInput.value = "";

        }
        for(var i = 0; i < goo.length; i++ ){
             goo[i].onclick = function(e){
                 var iddiv = e.target,
                     name = iddiv.id;
                   li(name);



             }
        }
        function li(name){
            var ioi = model.collection.indexOf(name);
            model.collection.push(name);
            if(ioi < 0 && model.shipSank < 7){
                controller.controller(name);
                if(model.stop == false) {
                    output();
                }
            }
        }
        }



        for(var a = 0; a < oppo.length; a++ ){
            oppo[a].onclick = function(r){
                var isddiv = r.target,
                    names = isddiv.id;
                controller.vremennii(names);
            }
        }




        model.generetShipLocation();
    };
    function output(){
        setTimeout(function(){
            model.myfire();
        }, 500);

    }
    init();
    console.log(model.ships)
};






