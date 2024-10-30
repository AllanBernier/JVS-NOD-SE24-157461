const fs = require("fs")

fs.writeFile('./cat.txt', 'Je suis un fichier', (err) => {
  if (err) {
    console.log(err);
  }
});


fs.appendFile('./cat.txt', '\nJe suis la ligne 2', (err) => {
  if (err) {
    console.log(err);
  }
});



fs.readFile('./cat.txt', 'utf8', (err, data) => {
  console.log(data);
});


fs.writeFile('./nouveau-fichier.txt', 'Contenu initial du nouveau fichier', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Le fichier a été créé avec succès');
  }
});
