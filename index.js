const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const inputText = document.querySelector(".input-text");

btnEncriptar.addEventListener("click", function (e) {
  e.preventDefault();

  let texto = document.querySelector(".input-text").value.toLowerCase();

  let txtCifrado = texto.replace(/e/gim, "enter");
  txtCifrado = txtCifrado.replace(/o/gim, "ober");
  txtCifrado = txtCifrado.replace(/i/gim, "imes");
  txtCifrado = txtCifrado.replace(/a/gim, "ai");
  txtCifrado = txtCifrado.replace(/u/gim, "ufat");

  document.querySelector(".resultado").innerHTML = txtCifrado;

});

btnDesencriptar.addEventListener("click", function (e) {
  e.preventDefault();

  let texto = document.querySelector(".input-text").value.toLowerCase();

  let txtCifrado = texto.replace(/enter/gim, "e");
  txtCifrado = txtCifrado.replace(/ober/gim, "o");
  txtCifrado = txtCifrado.replace(/imes/gim, "i");
  txtCifrado = txtCifrado.replace(/ai/gim, "a");
  txtCifrado = txtCifrado.replace(/ufat/gim, "u");

  document.querySelector(".resultado").innerHTML = txtCifrado;
});

