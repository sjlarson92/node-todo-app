# Node-ToDo-App
- Create Node project
  1. Create empty project in IntelliJ with Javascript
  2. Run `npm init -y` (creates package.json with default setting)
  3. Install dependencies `npm i fastify fastify-swagger uuid` (or any other libraries wanted)
  4. Install dev dependencies `npm i -D nodemon` (this will continuously run server on changes automatically)
  5. Install typescript 
     - `npm i -D typescript @types/node ts-node` 
     - Create tsconfig.json file with default values from NPM and add `"extends": "@tsconfig/node22/tsconfig.json"`
       - https://www.npmjs.com/package/@tsconfig/node22 (change depending on node version)
     - Make sure module and moduleResolution match `"module": "NodeNext","moduleResolution": "nodenext",`
     - add build script to package.json `"build": "tsc -p tsconfig.json"`
     - Run build script `npm run build`
     - Run dev for live reloading with nodemon `npm run dev`
     - https://fastify.dev/docs/latest/Reference/TypeScript/

- Download dependencies `npm intstall`
- To run the app `npm run dev`
- Configure IDE to recognize Node and turn on "Coding assistance for Node.js"
  - https://www.jetbrains.com/help/idea/developing-node-js-applications.html#ws_node_create_express_app_choose_node
![img.png](img.png)
