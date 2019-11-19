function validarCedula() {
    var cad = document.getElementById("cedula").value;
    var total = 0;
    var longitud = cad.length;
    if (cad !== "" && longitud === 10) {
      for (i = 0; i < longitud - 1; i++) {
        if (i % 2 === 0) {
          var aux = cad.charAt(i) * 2;
          if (aux > 9) aux -= 9;
          total += aux;
        } else {
          total += parseInt(cad.charAt(i));
        }
      }
      total = total % 10 ? 10 - total % 10 : 0;
      var aux = cad.charAt(9);
      if (cad.charAt(9) == total) {
        document.getElementById("mensajeCedula").innerText = 'La cedula es correcta';
        cedula.style.borderColor = "blue";
      } else {
        document.getElementById("mensajeCedula").innerHTML = 'La cedula es incorrecta';
        cedula.style.borderColor = "red";
      }
  
    } 
  }
  
  function soloNumeros(e, c) {
    var key = window.Event ? e.which : e.keyCode
    return ((key >= 48) && (key <= 57) && (c.length + 1 <= 10) || (key == 8))
  }
  
  function soloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = "8-37-39-46";
  
    tecla_especial = false
    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }
    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
  }
  
  function unNombre(txt, id) {
    palabras = txt.split(' ');
    if (palabras.length >= 1) {
      p1 = palabras[0].trim();
      if (p1 != '') {
        document.getElementById(id).innerHTML = ('');
        nombres.style.borderColor = "blue";
        apellidos.style.borderColor = "blue";
      } else {
        document.getElementById(id).innerHTML = ('Campos Obligatorios');
        nombres.style.borderColor = "red";
        apellidos.style.borderColor = "red";
      }
    } else {
      document.getElementById(id).innerHTML = ('Campos Obligatorios');
      nombres.style.borderColor = "red";
      apellidos.style.borderColor = "red";
    }
  }
  
  function validarTelefono(e) {
    var keynum = window.event ? window.event.keyCode : e.which;
    if ((keynum < 48) || (keynum > 57)) {
      document.getElementById("mensajeTelefono").innerHTML = ("Ingrese solo numeros ");
      telefono.style.borderColor = "red";
      return true;
    } else {
      Mensaje = 'Telefono';
      document.getElementById('mensajeTelefono').innerText = 'Correcto';
      telefono.style.borderColor = "blue";
    }
  }

  
  function validarFecha() {
    var Fecha = document.getElementById('fechaNacimiento').value;
    var Mensaje = '';
    document.getElementById('mensajeFecha').className = '';
    if (Fecha.length == 10) {
      fe = Fecha.split('/');
      var Anio = fe[2];
      var Mes = fe[1] - 1;
      var Dia = fe[0];
      var VFecha = new Date(Anio, Mes, Dia);
      if ((VFecha.getFullYear() == Anio) && (VFecha.getMonth() == Mes) && (VFecha.getDate() == Dia)) {
        Mensaje = 'Fecha correcta';
        document.getElementById('mensajeFecha').innerHTML = 'Fecha correcta';
        fechaNacimiento.style.borderColor = "blue";
      }
      else {
        Mensaje = 'Fecha incorrecta';
        document.getElementById('mensajeFecha').innerText = 'Incorrecto';
        fechaNacimiento.style.borderColor = "red";
      }
    }
    document.getElementById('mensajeFecha').innerHTML = Mensaje;
  }
  
  function validarCorreo(txt) {
    f = txt.split('@');
    if (f.length >= 2) {
      if (f[0].length >= 1) {
        if (f[1] == 'ups.edu.ec' || f[1] == 'est.ups.edu.ec') {
          document.getElementById("mensajeCorreo").innerHTML = 'Correo correcto';
          correo.style.borderColor = "blue";
        } else {
          document.getElementById("mensajeCorreo").innerHTML = 'Incorrecto';
          correo.style.borderColor = "red";
        }
      } else {
        document.getElementById("mensajeCorreo").innerHTML = 'Incorrecto';
        correo.style.borderColor = "red";
      }
    } else {
      document.getElementById("mensajeCorreo").innerHTML = 'Incorrecto';
      correo.style.borderColor = "red";
    }
  }

  function validarpassword(pass)	{
			if(pass.length >= 8)
			{		
				var mayuscula = false;
				var minuscula = false;
				var numero = false;
				var caracteresp = false;
				
				for(var i = 0;i<pass.length;i++)
				{
					if(pass.charCodeAt(i) >= 65 && pass.charCodeAt(i) <= 90)
					{
						mayuscula = true;
					}
					else if(pass.charCodeAt(i) >= 97 && pass.charCodeAt(i) <= 122)
					{
						minuscula = true;
					}
					else if(pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) <= 57)
					{
						numero = true;
					}
					else
					{
						caracteresp = true;
					}
				}
				if(mayuscula == true && minuscula == true && caracteresp == true && numero == true)
				{
          document.getElementById("mensajepassword").innerHTML = 'Password Seguro';
          password.style.borderColor = "blue";
          return true;
				}
			}
			document.getElementById("mensajepassword").innerHTML = 'Incorrecto';
      password.style.borderColor = "red";
      return false;
    }
    
  function validarCamposObligatorios() {
    var bandera = true
    for (var i = 0; i < document.forms[0].elements.length; i++) {
      var elemento = document.forms[0].elements[i]
      if (elemento.value == '' && elemento.type == 'text') {
        if (elemento.id == 'cedula') {
          document.getElementById('mensajeCedula').innerHTML = '<br> Campo obligatorio'
        }
        elemento.style.border = '1px red solid'
        bandera = false
      }
    }
    if (!bandera) {
      alert('Datos Incorrectos reviselos')
    }
    return bandera
  }
 

     
  