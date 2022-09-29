# API EASYBROKER

Api realizada con Nodejs para utilizar la API de [Easybroker](https://www.easybroker.com/mx)

## Requerimientos

- NodeJs

## Instalación

```bash
npm install
```

## Ejecución

- Crear un archivo ```.env```  y copiar lo del archivo ```.env.template``` y reemplazar los valores.

- Ejecutar el siguiente comando.
```bash
npm run dev
```

## Deploy

- Agregar las siguientes variables de entorno 
```bash
API_BASE_EASYBROKER = "https://api.easybroker.com/v1/"
API_KEY = "API_KEY_DE_EASYBROKER"
```

- Ejecutar los siguientes comandos
```bash
npm install && npm run start
```

## Documentación

Puede guiarse de la documentación de la [API de EasyBoker](https://api.easybroker.com/playground) y realizar pruebas con su respectiva API KEY.



