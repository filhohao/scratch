#!/bin/bash

# Este script gera o programa executável para o projeto Tauri.
# Certifique-se de que você possui o Node.js e as dependências do Rust instaladas em seu ambiente.

echo "========================================="
echo "Iniciando a geração do executável..."
echo "========================================="

echo "\n1. Instalando as dependências do Node.js..."
npm install

echo "\n2. Compilando o aplicativo Tauri..."
# Isso irá baixar dependências do Rust (cargo) e construir a versão de lançamento (release)
npm run tauri build

echo "\n========================================="
echo "Compilação concluída!"
echo "Caso tenha ocorrido tudo bem, seu executável estará na pasta:"
echo "➡️  src-tauri/target/release/bundle/macos/ (se estiver em um Mac)"
echo "➡️  src-tauri/target/release/ (se for o executável padrão)"
echo "========================================="
