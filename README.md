
# Prueba técnica BLU BEAR

Esta prueba consitía en realizar una pequeña aplicación que consitía en implementar un login y registro de usuarios, con verificación de correos electronicos.

Para el desarrollo se debía utilizar PHP Laravel y para el front end Vue.js, React.js (con Intertia.js) o Livewire (blade).

Para este proyecto se utilizó las tecnologias:
- MySQL
- Laravel
- Laravel Breeze
- React.js
- Inertia.js
- NextUI
- Tailwind CSS

Los requerimientos de la prueba son los siguientes:

1. Crear una vista de registro, pidiendo como datos el nombre, correo y contraseña. Validar el correo ingresado mediante un email de confirmación, no dejar iniciar sesión hasta validar el correo.
1. Crear una vista de inicio de sesión
1. Luego de iniciar sesión, crear una vista de grilla que muestre todos los digimons obtenidos del API, de preferencia usar paginado. Esta pantalla solo puede ser accedida con una sesión válida.
1. Al darle click a un digimon de la grilla, mostrar otra pantalla (o pop up) con la información detallada del digimon.
1. API a utilizar
```
https://digi-api.com/api/v1/digimon?pageSize=20

https://digi-api.com/api/v1/digimon/%7Bid%7D
```

## Ejecución del proyecto
Para la ejecución del proyecto se debe contar con unos pre requisitos para el correcto funcionamiendo.

### Requisitos
Para la ejecución de este proyecto es necesario tener:
- Instalado PHP v8.0 o superior
- Instalado gestor de paquetes composer
- Instalado Node.js v18.0 o superior
- Instalado gestor de paquetes npm
- Instalada un servidor de base de datos Mysql o MariaDB
- Habilitadas las extensiones necesarias en archivo php.ini para que funcione Laravel y composer

### Levantar ambiente de desarrollo

1. Abrir una consola en el directorio raiz del proyecto
1. Instalar las dependencias de Laravel
    ```bash
    composer install
    ```
1. Instalar las dependencias de Node.js
    ```bash
    npm install
    ```
1. Configurar el archivo `.env` que puede basase en el archivo `.env.example`.
    principalmente se debe configurar:
    - Configurar conexión de la base de datos

        `DB_CONNECTION`

        `DB_HOST`

        `DB_PORT`

        `DB_DATABASE`

        `DB_USERNAME`

        `DB_PASSWORD`

    - Configurar el servicio de email

        `MAIL_MAILER`

        `MAIL_HOST`

        `MAIL_PORT`

        `MAIL_USERNAME`

        `MAIL_PASSWORD`

        `MAIL_ENCRYPTION`

        `MAIL_FROM_ADDRESS`

        `MAIL_FROM_NAME`
    
1. Ejecutar las migraciones
    ```bash
    php artisan run migrate
    ```
1. Para levantar el servidor es necesario primero tener otra consola o dividir la consola y ejecutar el comando que permitirá escuchar los cambios realizados en el front end con react.js e inertia.js

    ```bash
    npm run dev
    ```
Y para levantar el servidor de PHP se debe ejecutar el sigueinte comando
```bash
php artisan serv
```

## Desplegar la aplicación
1. Subir los archivos al hosting que se tenga previsto utilizar
1. Ejecutar el comando para construir toda las vistas del fron end
    ```bash
    npm run build
    ```
1. Instalar las dependencias de Laravel
    ```bash
    composer install
    ```
1. Configurar redirecciones del servidor, esto dependerá de cada proveedor y si se tiene un servidor Apache o NGNIX

## Capturas de la Aplicación
Inicio de sesión
![Inicio de sesion](https://res.cloudinary.com/dzfg3crbt/image/upload/v1703090442/Proyectos/prueba%20bluebear/moixlvu7wzr6kpfdrrlw.png)

Registro
![Registro](https://res.cloudinary.com/dzfg3crbt/image/upload/v1703090524/Proyectos/prueba%20bluebear/b5mhnxjpietc9bd1jy8u.png)

Verificacion email
![Verificacion email](https://res.cloudinary.com/dzfg3crbt/image/upload/v1703090589/Proyectos/prueba%20bluebear/lhpzumebcil1xu4xdai7.png)

Inicio
![Inicio](https://res.cloudinary.com/dzfg3crbt/image/upload/v1703090619/Proyectos/prueba%20bluebear/gupcu26psqkqv0egefeb.png)

PopUp Digimon
![PopUp Digimon](https://res.cloudinary.com/dzfg3crbt/image/upload/v1703090641/Proyectos/prueba%20bluebear/plvgkeawjoweaei7xkfo.png)
