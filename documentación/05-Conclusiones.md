# CONCLUSIONES

## COSAS QUE MEJORAR

El cambio principal que me gustaría mejorar sería el funcionamiento de las reservas, ya que me gustaría añadir diferentes perfiles como pueden ser administrador y dueño, cada uno con sus diferentes funciones:

-	Administrador: el es dios de la aplicación, este tiene los permisos para hacer todas las acciones de la aplicación y acceder a todas las páginas. Este podría acceder a las reservas para hacerlas o gestionarlas, ya que al añadir un perfil de dueño del bar surgiría la opción de aceptar o no la reserva, esto lo comentaré a continuación. Además, podría añadir bares o eliminar, al igual que con las reservas y con los usuarios.
-	Dueño: este perfil tendría las opciones de añadir bar, ya que si te registras como dueño significa que quieres dar de alta a tu bar o bares. También, tendría la opción de aceptar o no las reservas de su bar que van haciendo los clientes.

En consecuencia, a esto, el perfil del usuario quedaría simplificado a ver el listado de los bares y hacer una reserva, esperando a la respuesta del dueño. Por otro lado, la opción de enviar un correo podría saltarse ya que la respuesta sería por parte del perfil de dueño, aunque se podría quedar como aviso a este.
Por otro lado, sería interesante integrar una búsqueda por filtros, esto ayudaría en el listado a filtrar los bares según su nombre o dirección. Esto ayudaría al perfil de usuario al ser una búsqueda más exhaustiva de lo que necesita.

Por último, me gustaría refactorizar algunas partes del código, como es el *AuthProvider* del frontend, para que cumplan su función correctamente y que la aplicación sea más efectiva y, de cierta manera, más segura.


## PROBLEMAS ENCONTRADOS

En el camino me he encontrado diferentes problemas, que comento a continuación:
- Spring: 
    - En la parte de configuración he tenido diferentes problemas debido a factores como el logeo en ***Spring***, además de problemas del navegador como es el protocolo CORS, esto lo he ido solucionando con la clase de configuración, donde implemento el código necesario para esto.
- Docker:
    - Con Docker el único problema que he tenido ha sido al levantar los contenedores, ya que el contenedor principal no llegaba a levantarse debido a un problema con el archivo *.sql*, el problema venía debido a los permios que tenía sobre este archivo, esto lo solución utilizando el comando: 
    ```sh
        chmod 644 setup.sql
    ```
- Frontend:
    - En este he tenido problemas en la creación de las reservas, que no he llegado a solucionar, ya que al crearlas nos pide el id del bar y del usuario, el funcionamiento sería que no lo pidiese en el formulario ya que tendría que obtener el id del usuario logeado y el id del bar seleccionado, ya que al crear una reserva se debe estar en el detalle de un bar, es decir, se debe de hacer click en un bar para ir al detalle y así hacer la reserva en ese bar

