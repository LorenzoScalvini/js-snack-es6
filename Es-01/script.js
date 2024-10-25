// Creazione dell'array di oggetti bici
const bici = [
  { nome: "Trek Émonda SLR 9/Sram Red Etap AXS", peso: 8.5 },
  { nome: "Look 795 Blade RS", peso: 7 },
  { nome: "Scott Addict RC Ultimate", peso: 6.7 },
  { nome: "Giant Propel Advanced SL 0", peso: 6.9 },
];

// Inizializziamo la bici più leggera come la prima bici dell'array
let biciLeggera = bici[0];

// Cicliamo attraverso l'array per trovare la bici con il peso minore
for (let i = 1; i < bici.length; i++) {
  if (bici[i].peso < biciLeggera.peso) {
    biciLeggera = bici[i];
  }
}

// Stampa a schermo la bici con peso minore
console.log(
  `La bici più leggera è: ${biciLeggera.nome} con un peso di ${biciLeggera.peso} kg.`
);
