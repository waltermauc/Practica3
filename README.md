
# Practica3
1.	Se pide diseñar una interfaz en HTML que permita ingresar los siguientes campos en un formulario: cedula, nombres, apellidos, dirección, teléfono, fecha de nacimiento, correo electrónico y contraseña.
![1](https://user-images.githubusercontent.com/56562004/69187442-a4b16100-0ae8-11ea-9c56-118eb534d0f0.jpg)
![2](https://user-images.githubusercontent.com/56562004/69187444-a4b16100-0ae8-11ea-9189-afaf003d8522.jpg)

Luego, usando funciones de JavaScript se pide validar que todos los campos han sido ingresados, además; que los valores ingresados en cada campo del formulario sean correctos teniendo en cuenta las siguientes condiciones:


a.	 Se debe validar qué, en el campo de la cedula, se ingrese sólo números y que la misma sea correcta, en base, al último dígito verificador.

![3](https://user-images.githubusercontent.com/56562004/69187445-a549f780-0ae8-11ea-99aa-fbb4509a8730.jpg)

b.	Se debe validar qué, en el campo del nombre, ingrese mínimo un nombre y que permita ingresar sólo letras

![4](https://user-images.githubusercontent.com/56562004/69187447-a549f780-0ae8-11ea-9f4b-01d1a0101213.jpg)

c.	Se debe validar qué, en el campo del apellido, ingrese mínimo un apellido y que permita ingresar sólo letras

En este campo se utiliza el mismo procedimiento que en el del campo nombre puesto que es similar.

d.	Se debe validar qué, en el campo del teléfono, permita ingresar sólo números y un máximo de 10

![5](https://user-images.githubusercontent.com/56562004/69187448-a549f780-0ae8-11ea-9a01-97e59f6131a7.jpg)

e.	Se debe validar que la fecha de nacimiento ingrese en el formato dd/mm/yyyy.

![6](https://user-images.githubusercontent.com/56562004/69187449-a549f780-0ae8-11ea-91ca-4841f2d85479.jpg)

f.	Se debe validar qué, en el campo correo electrónico, permita ingresar un correo válido. Se considera un correo válido, cuando comienza por tres o más valores alfanuméricos, luego un @, seguido por la extensión “ups.edu.ec” o “est.ups.edu.ec”.

![7](https://user-images.githubusercontent.com/56562004/69187451-a549f780-0ae8-11ea-952f-317cca9112fe.jpg)

g.	Se debe validar que la contraseña ingresada tenga mínimo 8 caracteres, además, debe incluir al menos: una letra mayúscula, una letra minúscula y un carácter especial (@, _, $) 

![8](https://user-images.githubusercontent.com/56562004/69187452-a5e28e00-0ae8-11ea-8c8b-eccb7f5f572b.jpg)

2.	Se pide diseñar una interfaz en html que tenga tres botones que diga “Anterior”, “Iniciar”, “Siguiente”, y una imagen.

![9](https://user-images.githubusercontent.com/56562004/69187453-a5e28e00-0ae8-11ea-858b-7d15f6e042fd.jpg)

 Luego, desde javascript se debe controlar para al hacer clic sobre uno de los botones realice una acción relacionada a una galería de imágenes
 
a.	Se debe tener, un arreglo con los nombres de diez imágenes, previamente descargadas y almacenadas en una carpeta llamada “images”. 

b.	 La galería de imágenes debe visualizar exclusivamente 5 imágenes.  

c.	Cada vez que se haga clic en le botón iniciar se deben escoger de manera aleatoria cinco imágenes de las diez que se mostrarán en la galería de imágenes. 

d.	Al hacer clic en el botón siguiente y haber llegado a la última imagen disponible, el botón siguiente deberá ser deshabilitado (sólo cuando se ha llegado a la última imagen el botón siguiente deberá estar deshabilitado)

e.	Al hacer clic en el botón anterior y haber llegado a la primera imagen disponible, el botón anterior deberá ser deshabilitado (sólo cuando se ha llegado a la última imagen y cuando se inicie la galería de imágenes el botón anterior deberá estar deshabilitado) 
![10](https://user-images.githubusercontent.com/56562004/69187454-a5e28e00-0ae8-11ea-893a-cc0c6900e538.jpg)
![11](https://user-images.githubusercontent.com/56562004/69187456-a5e28e00-0ae8-11ea-9e53-d669b27c55cf.jpg)

RESULTADO(S) OBTENIDO(S):
1.	Formulario
a.	Al darle click al botón aceptar sin llenar ningún campo se muestra el siguiente mensaje y los bordes de los textbox se muestran de color rojo
![12](https://user-images.githubusercontent.com/56562004/69187459-a67b2480-0ae8-11ea-99bb-3d1173424830.jpg)

b.	Rellenando los campos uno por uno.

![13](https://user-images.githubusercontent.com/56562004/69187461-a67b2480-0ae8-11ea-9ba5-ebcb37915cda.jpg)

Al comprobar que todos los campos están correctos se salta a una página php

![14](https://user-images.githubusercontent.com/56562004/69187462-a67b2480-0ae8-11ea-9d73-5fce589e9dc1.jpg)

2.	Galería de Fotos

![15](https://user-images.githubusercontent.com/56562004/69187464-a67b2480-0ae8-11ea-8b1c-3c12af540833.jpg)

Al darle click a incio

![16](https://user-images.githubusercontent.com/56562004/69187467-a67b2480-0ae8-11ea-8ad7-7fa7a55a41a7.jpg)

En la ultima foto mostrada se bloquea el botón siguiente
![17](https://user-images.githubusercontent.com/56562004/69187468-a713bb00-0ae8-11ea-9585-70b48126015d.jpg)
