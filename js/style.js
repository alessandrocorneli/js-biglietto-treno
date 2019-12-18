var km = prompt("Inserire il chilometraggio desiderato:");
console.log(km);
var età = prompt("inserire l\'età:");
console.log(età);
var prezzoBase = km * 0.21;
var scontoMinorenni = (prezzoBase * 20) / 100;
var scontoOver65 = (prezzoBase * 45) / 100;
var prezzoMinorenni = prezzoBase - scontoMinorenni;
var prezzoOver65 = prezzoBase - scontoOver65;

document.writeln("Il prezzo del biglietto selezionato corrisponde ad Euro:")
if (età < 18) {
  document.writeln(prezzoMinorenni);
}
else if (età >= 65) {
  document.writeln(prezzoOver65);
}
else {
  document.writeln(prezzoBase);
}
