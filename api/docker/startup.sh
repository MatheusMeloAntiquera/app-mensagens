#!/usr/bin/env bash

cd /app

echo "Atualizando pacotes necessários do container"
apt-get update && apt-get install -y netcat

echo "Instalando as dependências"
npm install

echo "Startando a aplicação"
npm start
