# node-ts-generic

Generic Node | TypeScript template project

Steps to create templated Node | TypeScript project

1. Initiate Yarn

```
yarn init
```

2. Store Node version

```
node -v > .npmrc
```

3. Add TypeScript

```
yarn add -D typescript ts-node @types/node
npx tsc --init
```

4. Add ESLint

```
yarn add -D eslint
npx eslint --init
```

> To check syntax, find problems, and enforce code style
> JavaScript modules (import/export)
> None of these
> Yes
> X Browser | Y Node
> Use a popular style guide
> Airbnb
> JavaScript
> Yes
> yarn

5. Add Prettier

```
yarnd add -D prettier
```

6. ESLint + Prettier Config

```
yarn add -D eslint-plugin-prettier eslint-config-prettier
yarn add -D eslint-import-resolver-typescript tsconfig-paths
```

7. Add Nodemon

```
yarn add -D nodemon
```

8. Add Dotenv

```
yarn add dotenv-safe @types/dotenv-safe
```
