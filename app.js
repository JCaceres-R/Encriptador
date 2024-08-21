function accionEncriptar() {

    const Texto = document.getElementById("Texto").value;
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
  }

function accionDesencriptar() {
  const Texto = document.getElementById("Texto").value;
  
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


