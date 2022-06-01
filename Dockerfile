# Imagen base alipine
FROM node:lts-alpine3.14

# Siguiente paso de instalacion de paquetes

# Se debe de copiar los archivos package.json y package-lock.json al directorio /app
# para poder instalar los paquetes
RUN mkdir /app
COPY package*.json /app

# Se debe de cambiar el directorio de trabajo al directorio /app
WORKDIR /app

# Instacion de dependencias o paquetes
RUN npm install

# Copiar el codigo fuente al directorio /app
COPY . .

# Poner el puerto 3012 en el contenedor
EXPOSE 3012

# Correr la aplicacion
CMD ["npm", "run", "dev2"]