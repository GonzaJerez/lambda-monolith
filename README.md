# Lambda + Serverless

## Instalaciones necesarias

Asegurarse de tener instalado en su sistema:

- pnpm -> `pnpm i -g pnpm`
- serverless -> `pnpm i -g serverless`
- docker -> https://docs.docker.com/engine/install/

## Levantar entorno local

#### Variables de entorno

Copiar archivo ".env.example" a ".env" y configurar las variables de entorno _en caso de ser necesario_

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

1. Levantar base de datos RDS (MySQL) en AWS
2. Ejecutar el comando `pnpm sls:deploy`
3. Conectar lambda con RDS en "Configuración" -> "Conectar con RDS" en la pantalla de la lambda
