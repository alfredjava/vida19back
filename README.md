**Cloudant - NodeJS APIs**
<br />
<br />
Este es un proyecto backend VIDA 19 web en JavaScript - NodeJS que consume la base de datos noSQL Cloudant.
<br />
Tiene dos rutas:
* La primera permite Insertar un nuevo documento dentro de la base de datos 'db-prueba'.
    * [POST] /insert
        * [OBJECT] {'intents': string, 'examples': string, 'text': int}
* La segunda permite Listar lo registrado.
    * [GET] /list

<br />
Despliegue local: <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Clonar este repositorio <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Ingresar a la ruta del proyecto <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.1. cd ibmcloud-cloudant-api <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Instalar las dependencias <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.1.npm install <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Desplegar la aplicación <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.1. npm start <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.2. En los logs de la aplicación aparecerá la URL y Puerto para que prueben las APIs. <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. Mediante un REST Client pueden probar las APIs. <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.1. http://localhost:PORT/API