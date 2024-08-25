document.getElementById('textoingreso').addEventListener('input', function (e) {
  const invalidChars = /[^a-z\s]/g;

  if (invalidChars.test(e.target.value)) {
      alert("Por favor, solo escribe letras minúsculas y espacios.");
      e.target.value = e.target.value.replace(invalidChars, '');
  }
});


function accionEncriptar() {

    const Texto = document.getElementById("textoingreso").value;
    let Arreglo = Texto.split("");

    Arreglo.forEach( (letra,index) => {
      switch (letra){
        case "a":
          Arreglo[index] = "ai";
          break

        case "e":
          Arreglo[index] = "enter";
          break   

        case "i":
          Arreglo[index] = "imes";
          break

        case "o":
          Arreglo[index] = "ober";
          break

        case "u":
          Arreglo[index] = "ufat";
          break

        }

    });
    console.log(Arreglo)
    document.getElementById("resultado").innerHTML = Arreglo.join("");
    console.log(Arreglo.join(""))
  }




  
function accionDesencriptar() {
  const Texto = document.getElementById("textoingreso").value;
  
  let banco = {
    "ai":"a",
    "enter":"e",
    "imes":"i",
    "ober":"o",
    "ufat":"u"
  };

  let TextoDesencriptado = Texto.replace(/(ai|enter|imes|ober|ufat)/g, function(i) {return banco[i]});
  document.getElementById("resultado").innerHTML = TextoDesencriptado;

}




function copiarContenido() {
  let texto = document.getElementById('resultado').innerHTML;
    navigator.clipboard.writeText(texto);
}

function pegarContenido() {
  navigator.clipboard.readText().then(texto => {
      document.getElementById("textoingreso").value = texto;
  }).catch(err => {
      console.error('Error al leer el portapapeles: ', err);
  });
}


function borrar(tex){
  console.log(tex.value);
  document.getElementById(tex).innerHTML="";
  if (tex == "textoingreso"){
    document.getElementById(tex).value="";
  }
  console.log(tex.value);
}
