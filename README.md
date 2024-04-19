# App monolitica

## Instalaciones necesarias

Asegurarse de tener instalado en su sistema:

- **pnpm** -> `npm i -g pnpm`
- **serverless** -> `npm i -g serverless`
- **docker** -> https://docs.docker.com/engine/install/

## Levantar entorno local

#### Variables de entorno

Copiar archivo ".env.example" a ".env" y configurar las variables de entorno

#### Levantar base de datos local

    pnpm db:up

#### Levantar servidor http en desarrollo

    pnpm start:dev

#### Levantar serverless en desarrollo

    pnpm sls:dev

#### Instartar data ficticia en DB

    GET /seed

_El seed crea nuevos posts y autores en la base de datos para iniciar con algo de información_

## Eliminar base de datos local

    pnpm db:down

## Despliegue a produccion (AWS)

> Asegurarse de tener instalado el cli de AWS, si no lo tiene instalado descarguelo y configure un usuario para usar el CLI local

1. Crear archivo ".env.prod" para cargar las variables de entorno necesarias (solamente las de produccion)
2. Levantar base de datos RDS (MySQL) en AWS
3. Ejecutar el comando `pnpm sls:deploy`
4. Conectar lambda con RDS en "Configuración" -> "Conectar con RDS" en la pantalla de la lambda

Al desplegar con "serverless framework" nos va a crear lo necesario para que nuestra lambda funcione, en este caso nos crea el stack de CloudFormation, un bucket en S3 para alojar el codigo, y un grupo de CloudWatch para monitorizacion.

## Eliminar Lambda de AWS

    pnpm sls:remove

Esto lo que va a hacer es eliminar la lambda y todo lo que fue creado en el despliegue (stack de CloudFormation, bucket de S3 y grupo de CloudWatch)
