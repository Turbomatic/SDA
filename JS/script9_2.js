function Shkolla (emri ,nrKlasave) {
    this.emri = emri ;
    this.nrKlasave = nrKlasave ;
    this.Mesatarja = function (mesatarjaKlasave){
             return mesatarjaKlasave/nrKlasave;
    }
}
function Klasa(emri , nrNxenesve) {
    this.emri=emri;
    this.nrNxenesve=nrNxenesve;
    this.MesatarjaKlases = function (mesatarjaNxenesva){
        return mesatarjaNxenesva/nrNxenesve;
    }
}
function Nxenes(emri , klasa , lendet , shkolla ,nota ){
    this.emri = emri ;
    this.klasa=klasa;
    this.lendet=lendet ;
    this.shkolla=shkolla ;
    this.nota=nota ;
    this.MesatarkaNxenes = function () {
        var sum =0 ;
        for ( var i = 0 ; i<nota.length ; i++){
            sum +=nota[i];
        }
          return sum/nota.length;
    }
}
function lendet (emri , klasa ) {
    this.emri=emri ;
    this.klasa = klasa ;
}
var shkolla  = new Shkolla("Servete Maci", 2);
var klasa1 = new Klasa("7B",3);
var klasa2 = new Klasa ("7C",2);
var lenda2 = new lendet("Dituri" , klasa1.emri);
var lenda1 = new lendet ("Vizatim",klasa1.emri);
var lenda3 = new lendet ("Fiskul" , klasa2.emri);
var lenda4 = new lendet ("Gjuhe Shqipe" , klasa2.emri);
var arrayLendet = [];
arrayLendet.push(lenda1);
arrayLendet.push(lenda2);
arrayLendet.push(lenda3);
arrayLendet.push(lenda4);
var nxenes1 = new Nxenes("Joan", klasa1.emri , arrayLendet ,shkolla.emri , [7,8] );
var nxenes2 = new Nxenes("Joan1", klasa1.emri , arrayLendet ,shkolla.emri , [4,8] );
var nxenes3 = new Nxenes("Joan2", klasa1.emri , arrayLendet ,shkolla.emri , [6,8] );
var nxenes4 = new Nxenes("Joan", klasa2.emri , arrayLendet ,shkolla.emri , [9,8] );
var nxenes5 = new Nxenes("Joan", klasa2.emri , arrayLendet ,shkolla.emri , [9,8] );
console.log(nxenes1.MesatarkaNxenes());
console.log(nxenes2.MesatarkaNxenes());
console.log(nxenes3.MesatarkaNxenes());
console.log(nxenes4.MesatarkaNxenes());
console.log(nxenes5.MesatarkaNxenes());
console.log(klasa1.MesatarjaKlases(nxenes1.MesatarkaNxenes()+nxenes2.MesatarkaNxenes()+nxenes3.MesatarkaNxenes()));
var meskl1=klasa1.MesatarjaKlases(nxenes1.MesatarkaNxenes()+nxenes2.MesatarkaNxenes()+nxenes3.MesatarkaNxenes());
var meskl2 = klasa2.MesatarjaKlases(nxenes4.MesatarkaNxenes()+nxenes5.MesatarkaNxenes());
console.log(klasa2.MesatarjaKlases(nxenes4.MesatarkaNxenes()+nxenes5.MesatarkaNxenes()));
console.log (shkolla.Mesatarja(meskl1+meskl2));