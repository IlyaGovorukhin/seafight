window.onload = function(){
    var babl = [34,56,78,98,12,11,45,67,89,34,67,98],
        hieh;

    function dfg(a) {
        var heiababl = 0,
            text;
        for (var i = 0; i < a.length; i++) {
            text = "Перечиляем все элементы массива " + i + "; " + babl[i];
            console.log(text);
            if(a[i] > heiababl) {
                heiababl = a[i];
            }
        };
        return heiababl;
    };


   function sd (x,y){

       var array = [];
       for(var i = 0; i < x.length; i++){
           if(x[i] == y){
               array.push(i);

               if(this.test(e)) {
               } else {
               vies.massage('клетка занята')
               return false;
           }



               for (var r = 0; r < this.shipLength; r++) {
                   vies.hit(uu[r]);
               }


               foo.location = uu;
               for (var r = 0; r < this.shipLength; r++) {
                   vies.hit(uu[r]);
               }
               console.log(foo.location);


               //what: function(e){
               //    console.log(e);
               //    for (var i = 0; i < this.shipsmy.length; i++) {
               //        var foo = this.shipsmy[i];
               //        for (var a = 0; a < e.length; a++) {
               //            if(foo.location[a] == e[a]){
               //                console.log('ppppp')
               //                return false;
               //            }
               //        }
               //    }
               //    console.log('fff');
               //    return true;
               //
               //},
               //





           }
       }
       return array;
   };
    hieh = dfg(babl);
    console.log("Длина массива: " + babl.length);
    console.log("Самое большое число элемента массива - " + hieh);


     console.log("Самые большие элементы массива находятся в " + sd(babl,hieh) + " ячейке");


}