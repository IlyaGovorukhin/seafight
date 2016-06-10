window.onload = function(){
var car = {
    year: 1955,
    model: 'volga',
    color: 'red',
    pas: 4,
    codishin: false,
    motor: false,
    fuel: 0,
    start: function(){
      if(this.fuel == 0) {
          alert("How you get engin? Bace is empty");
      } else {
          this.motor = true;
      }
    },
    stop: function(){
        this.motor = false;
    },
    drive: function() {
        if(this.motor){
            if(this.fuel > 0) {
                alert('zoom zoom');
                this.fuel = this.fuel - 1;
            } else {
                this.stop();
                alert("rem dim dim dim. Out of fuel");
            }
        } else {
            alert("You foggot start engin");
        }
    },
    addfuel: function(amount){
        this.fuel =  this.fuel + amount;
    }
}
    function objtavil(mashina) {
        if(mashina.year > 1955){
            return false;
        } else if(mashina.pas > 4){
            return false
        }
        return true
    };

    var prade = objtavil(car);
    if(prade) {
        console.log('Вы можте проехать дальше на ' + car.model)
    } else {
        console.log('Ваша калымага - ' + car.model + ' должна покинуть объектовиль')
    }
    car.start();
    car.drive();
    car.addfuel(2);
    car.start();
    car.drive();
    car.drive();
    car.drive();
    car.stop();


    for(var prop in car){
        console.log(prop + ':' + car[prop]);

    }

};