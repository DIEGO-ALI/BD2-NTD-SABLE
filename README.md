# BD2-NTD-SABLE
Base de datos # 2 Nuevas tecnologías 2025-2

# Proyecto: API para Gestión de Artículos Científicos

## Descripción general

Este proyecto tiene como propósito desarrollar una API REST utilizando el framework Express y el servicio de base de datos **MongoDB Atlas**, con el fin de gestionar artículos científicos recopilados desde las bases de datos de la Universidad Konrad Lorenz. API permite realizar operaciones de creación, lectura, actualización y eliminación (CRUD) sobre los artículos, ofreciendo una estructura organizada y funcional para el almacenamiento y la consulta de información científica. Además, se realizaron pruebas con **Postman** para verificar su correcto funcionamiento.

---

## Los objetivos de la BASE DE DATOS #2 NTD

1. Desarrollar una API REST funcional que gestione artículos científicos.  
2. Implementar operaciones CRUD completas utilizando Express y MongoDB Atlas.  
3. Conectar correctamente la base de datos en la nube para un acceso remoto y seguro.  
4. Validar el funcionamiento de la API mediante pruebas en Postman.  
5. Documentar todo el proceso desde la búsqueda de los artículos hasta las pruebas finales.  

---

## Equipo de trabajo
 
   Integrante            Rol                                                     Responsabilidades 

 DIEGO LARES     Backend Developer                 Configuración del entorno, desarrollo de la API, creación de rutas y conexión con MongoDB Atlas. 

 JULIAN AVILA    Documentación y Pruebas           Redacción del README, registro del proceso, gestión de la colección en Postman y validación de endpoints. 
 
 SANTIAGO ROCHA  Coordinación y Presentación       Organización general del proyecto, recopilación de información y grabación del video explicativo. 





### Selección y recopilación de artículos del portal de base de datos de la universidad


recopilando la siguiente información:  
- Título  
- Autores  
- Año de publicación  
- Resumen  
- Cantidad de referencias  
- Base de datos consultada  
- Nombre de la revista o libro  
- Enlace de acceso desde el dominio de la Konrad Lorenz  
- Archivo PDF correspondiente  



### Diseño de la base de datos

Se diseñó la estructura de la base de datos en MongoDB Atlas, con el objetivo de almacenar de manera eficiente todos los datos obtenidos de los artículos.  


### Creación del servidor con Express

El siguiente paso fue la configuración de un servidor utilizando Express, un framework de Node.js ampliamente usado para construir aplicaciones web y APIs.  

Este servidor se encargó de recibir y procesar las solicitudes HTTP (GET, POST, PUT, DELETE), conectándose directamente con la base de datos de MongoDB Atlas para realizar las operaciones correspondientes.


### Implementación de las funcionalidades CRUD

La API implementa las cuatro operaciones principales de un sistema CRUD:  

- Crear (POST):      Permite registrar un nuevo artículo en la base de datos con toda su información relevante.  
- Leer (GET):        Permite consultar todos los artículos almacenados o uno específico mediante su ID.  
- Actualizar (PUT):  Modifica la información existente de un artículo determinado.  
- Eliminar (DELETE): Elimina permanentemente un registro de la base de datos.  



### Conexión y almacenamiento en MongoDB Atlas

La API se conectó a MongoDB Atlas mediante las credenciales generadas en la nube, asegurando una comunicación segura y eficiente entre el servidor y la base de datos.  

Cada operación realizada desde la API impacta directamente los registros almacenados, permitiendo visualizar los cambios en tiempo real y mantener la integridad de la información.


### Pruebas con Postman

Una vez construida la API, se realizaron pruebas exhaustivas en Postman, una herramienta que permite enviar solicitudes HTTP al servidor y verificar las respuestas.  

Durante las pruebas, se validaron los siguientes puntos:
- Creación de nuevos artículos.  
- Visualización de todos los artículos registrados.  
- Edición de la información de un artículo.  
- Eliminación.  

Todas las pruebas fueron documentadas y guardadas en una colección de Postman, que fueron exportadas en un archivo .JSON guardando así el funcionamiento de cada endpoint.



##Conclusiones

- Se logró crear una **API completamente funcional** capaz de gestionar artículos científicos de manera eficiente utilizando tecnologías modernas.  
- La integración con **MongoDB Atlas** permitió mantener una base de datos accesible y segura en la nube.  
- El uso de **Postman** facilitó la validación de los endpoints y garantizó el correcto flujo de información entre el cliente y el servidor.  
- El trabajo colaborativo entre los integrantes permitió una correcta distribución de tareas, logrando cumplir cada objetivo propuesto.  
- Este proyecto representa una base sólida para el desarrollo de futuras aplicaciones que requieran gestión de información académica o científica.