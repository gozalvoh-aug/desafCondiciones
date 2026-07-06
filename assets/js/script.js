
/*Prueba 1*/

    // 1. Seleccionamos la imagen del DOM usando su id
    const imagen = document.getElementById("miImagen");

    // 2. Creamos una variable "bandera" (flag) que nos indica si el borde
    //    está activo o no. Empieza en false porque al cargar la página
    //    la imagen no tiene borde.
    let bordeActivo = false;

    // 3. Le agregamos un "escuchador de eventos" (event listener) a la imagen.
    //    Cada vez que el usuario haga click, se ejecutará la función indicada.
          imagen.addEventListener("click", function () {

      // 4. Usamos un condicional para revisar el estado actual de la variable
          if (bordeActivo === false) {
        // Si el borde NO está activo, se lo agregamos usando classList.add
          imagen.classList.add("borde-activo");

        // Y actualizamos la variable para indicar que ahora SÍ está activo
          bordeActivo = true;

      } else {
        // Si el borde YA está activo, lo quitamos con classList.remove
          imagen.classList.remove("borde-activo");

        // Y actualizamos la variable para indicar que ahora NO está activo
          bordeActivo = false;
      }

      // 5. Con cada click, este proceso se repite: revisa el estado
      //    actual (true o false) y hace lo contrario.
    });

/*Prueba 2*/

  function calcularStickers() {
  let s1 = parseInt(document.getElementById("sticker1").value) || 0;
  let s2 = parseInt(document.getElementById("sticker2").value) || 0;
  let s3 = parseInt(document.getElementById("sticker3").value) || 0;

  if (s1 < 0) s1 = 0;
  if (s2 < 0) s2 = 0;
  if (s3 < 0) s3 = 0;

  const total = s1 + s2 + s3;
  const resultado = document.getElementById("resultado");

  if (total <= 10) {
    resultado.textContent = "Llevas " + total + " stickers";
    resultado.classList.remove("error");
  } else {
    resultado.textContent = "Llevas demasiados stickers";
    resultado.classList.add("error");
  }
}

calcularStickers();


/*Prueba 3*/

     // Función para llenar cada select con dígitos del 1 al 9
    function llenarSelect(select) {
      for (let i = 1; i <= 9; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        select.appendChild(option);
      }
    }

    const select1 = document.getElementById("select1");
    const select2 = document.getElementById("select2");
    const select3 = document.getElementById("select3");

    llenarSelect(select1);
    llenarSelect(select2);
    llenarSelect(select3);

    // Evento del botón Ingresar
    document.getElementById("btnIngresar").addEventListener("click", function () {
      const password = select1.value + select2.value + select3.value;
      const resultado3 = document.getElementById("resultado3");
      

      if (password === "911") {
        resultado3.textContent = "Password 1 correcta ✔";
      } else if (password === "714") {
        resultado3.textContent = "Password 2 es correcta ✔";
      } else { 
        resultado3.textContent = "Password incorrecta ❌";
      }
    });



