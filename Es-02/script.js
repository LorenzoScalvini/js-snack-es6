// Funzione per generare un numero casuale
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Array di squadre di calcio
  const squadre = [
    { nome: "Sentinel", punti: 0, falliSubiti: 0 },
    { nome: "Cloud9", punti: 0, falliSubiti: 0 },
    { nome: "T1", punti: 0, falliSubiti: 0 },
    { nome: "100 Thieves", punti: 0, falliSubiti: 0 },
    { nome: "NRG", punti: 0, falliSubiti: 0 },
  ];
  
  // Aggiorniamo i punti e i falli subiti con numeri casuali
  for (let i = 0; i < squadre.length; i++) {
    squadre[i].punti = getRandomInt(0, 30);
    squadre[i].falliSubiti = getRandomInt(0, 30);
  }
  
  // Creiamo un nuovo array con solo nomi e falli subiti
  const risultato = [];
  for (let i = 0; i < squadre.length; i++) {
    risultato.push({
      nome: squadre[i].nome,
      falliSubiti: squadre[i].falliSubiti,
    });
  }
  
  // Stampa il risultato in console
  console.log(risultato);
  