# Lambda + Serverless

## Instalaciones necesarias

Asegurarse de tener instalado "pnpm", "serverless" y "docker" en su sistema.

## Levantar entorno local

#### Variables de entorno

Copiar archivo ".env.example" a ".env" y configurar las variables de entorno necesarias

#### Levantar base de datos local

    pnpm db:up

#### Levantar en desarrollo

    pnpm sls:dev

#### Instartar data ficticia en DB

    GET /seed

_Crea nuevos posts y autores en la base de datos_

## Eliminar base de datos local

    pnpm db:down
