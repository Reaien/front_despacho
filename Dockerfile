#Usa una imagen de node como base
FROM node:20-alpine AS build
#Establece el directorio de trabajo dentro del contenedor
WORKDIR /app
#Copiar el archivo package.json package-lock.json
COPY package.json package-lock.json ./
#Instala las dependencias del proyecto
RUN npm install
#Copiar el resto del codigo del proyecto
COPY . .
#Compilar el proyecto
RUN npm run build
#Usar una imagen de nginx para servir el contenido estatico
FROM nginx:1.27.0-alpine
#Copiar los archivos de construccion desde la etapa anterior
COPY --from=build /app/dist/ /usr/share/nginx/html
#Copiar el archivo de configuracion de nginx
COPY nginx.conf /etc/nginx/nginx.conf
#Exponer el puerto que se usará para acceder a la aplicacion
EXPOSE 80
#Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off";]
