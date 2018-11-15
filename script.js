var array = ["Marini","Alessi","Rossi","Imola","Francesci"];

var cognome_utente = prompt("Ciao, inserisci il tuo cognome");

array.push(cognome_utente);

array.sort();

var i = 0;

var aggiunto= false;

while (!aggiunto && i < array.lenght) {

    if (array[i] == cognome_utente) {
      aggiunto = true;
    }

    i++;

}

document.writeln(array);

var posizione = array.indexOf(cognome_utente);
document.getElementById("utente").innerHTML=posizione;
