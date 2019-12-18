var km = prompt("Inserire il chilometraggio desiderato:");
console.log(km);
var età = prompt("inserire l\'età:");
console.log(età);
var prezzoBase = km * 0.21;
var scontoMinorenni = (prezzoBase * 20) / 100;
var scontoOver65 = (prezzoBase * 45) / 100;
var prezzoMinorenni = prezzoBase - scontoMinorenni;
var prezzoOver65 = prezzoBase - scontoOver65;
var minorenni = prezzoMinorenni.toFixed(2);
var over65 = prezzoOver65.toFixed(2);
var base = prezzoBase.toFixed(2);

if (età < 18) {
  document.writeln("Sul biglietto richiesto si applica uno sconto minorenni pari ad Euro: ");
  document.writeln(scontoMinorenni);
  document.writeln("<p>Il prezzo del biglietto scontato corrisponde ad Euro: ");
  document.writeln(minorenni);
}
else if (età >= 65) {
  document.writeln("Per le persone over 65 anni, si applica sul biglietto  uno sconto pari ad Euro: ");
  document.writeln(scontoOver65);
  document.writeln("<p>Il prezzo del biglietto scontato corrisponde a Euro: ")
  document.writeln(over65);
}
else {
  document.writeln("Il prezzo del biglietto selezionato corrisponde ad Euro:")
  document.writeln(base);
}
document.writeln("<p>Il vostro treno è in ritardo di circa due ore, ci scusiamo per il disagio.")
