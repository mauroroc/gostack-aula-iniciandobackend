###Criando um novo projeto

1) yarn init -y
2) yarn add express
3) yarn add typescript -D
4) yarn tsc --init
5) Configurar no tsconfig.json
  "outDir": "./dist",
  "rootDir": "./src",
6) Clicar com o botao direito e gerar o .editorconfig
7) Configurar no .editorconfig
  trim_trailing_whitespace = true
  insert_final_newline = true
  end_of_line = lf
8) yarn add eslint -D
9) yarn eslint --init
  checar sintaxe, encontrar problemas e forcar padrao do codigo
  javascript import/export
  none of this
  Yes para Typescript
  Node (space para deselecionar e selecionar)
  Use a popular style guide
  Airbnb
  JSON
  Nao instalar com NPM
10) yarn add -D @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.21.2 @typescript-eslint/parser@latest (pegar os pacotes listados e tirar o eslint);
11) Instalar o ESLint dentro do VS Code (caso nao tenha)
12) Abrir open preferences json VS Code. Adicionar (caso nao tenha):
  "[javascript]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true,
        }
    },
    "[javascriptreact]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true,
        }
    },
    "[typescript]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true,
        }
    },
    "[typescriptreact]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true,
        }
    },
13) yarn add -D eslint-import-resolver-typescript
14) Adicionar no eslintrc.json:
    "rules": {
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "ts": "never"
        }
      ]
    },
    "settings": {
      "import/resolver": {
        "typescript": {}
      }
    }
15) yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
16) Alterar no eslintrc.json:
  "extends": [
          "airbnb-base",
          "plugin:@typescript-eslint/recommended",
          "prettier/@typescript-eslint",
          "plugin:prettier/recommended"
  ],
  "plugins": [
    "@typescript-eslint",
    "prettier"
  ],
  "rules": {
      "prettier/prettier": "error",
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "ts": "never"
        }
      ]
    },
17) Criar na raiz do projeto o arquivo prettier.config.js com:
  module.exports = {
    singleQuote: true,
    trailingComma: "all",
    arrowParens: "avoid",
  };
18) Criar na raiz do projeto o arquivo .eslintignore com:
  /*.js
  node_modules
  dist
19) No package.json, entre license e dependencies, colocar:
  "scripts": {
    "build": "tsc",
    "dev:server": "ts-node-dev --inspect --transpileOnly --ignore-watch node_modules src/server.ts"
  },
20) yarn add typeorm pg
21) Criando o ormconfig.json (TypeORM):
  {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "docker",
    "password": "docker",
    "database": "gostack_gobarber"
  }



