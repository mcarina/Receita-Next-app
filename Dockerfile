FROM node:lts-alpine

WORKDIR /app

# Instala dependências
COPY package.json yarn.lock* ./
RUN yarn install

# Copia o restante dos arquivos
COPY . .

# Define a variável de ambiente para desenvolvimento
ENV NODE_ENV development

# Exposição da porta para desenvolvimento
EXPOSE 3000

# Comando para rodar em desenvolvimento
CMD ["yarn", "dev"]
