<h1>Download TypeScript</h1>
TypeScript can be installed through three installation routes depending on how you intend to use it: an npm module, a NuGet package or a Visual Studio Extension.

If you are using Node.js, you want the npm version. If you are using MSBuild in your project, you want the NuGet package or Visual Studio extension.

TypeScript in Your Project
Having TypeScript set up on a per-project basis lets you have many projects with many different versions of TypeScript, this keeps each project working consistently.

via npm
TypeScript is available as a package on the npm registry available as "typescript".

You will need a copy of Node.js as an environment to run the package. Then you use a dependency manager like npm, yarn or pnpm to download TypeScript into your project.

npm install typescript --save-dev

npm yarn pnpm
All of these dependency managers support lockfiles, ensuring that everyone on your team is using the same version of the language. You can then run the TypeScript compiler using one of the following commands:

npx tsc

<h1>Documentation</h1>
https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
https://www.typescriptlang.org/docs/

<h1>Compiler</h1>
1. Criar file tsconfig.json
2. Configuração:
{
    "compilerOptions": {
        "target": "ES6",
        "outDir": "dist/js"
    },
    "include": [
        "app/**/*"
    ]
}

>> A propriedade "target" indica para o compilator tsc (TypeScript Compiler) para qual versão do Javascript o código escrito em TypeScript deve ser compilado. Isso significa que o resultado final será arquivos JavaScript sem qualquer referência para a sintaxe do TypeScript.
>> O navegador só entende a linguagem JavaScript, desta maneira, todo código TypeScript precisa ser compilado para uma sintaxe compatível.
>> A propriedade "outDir" indica para onde os arquivos compilados indicados pela propriedade "include" serão salvos.
>> A propriedade "include" indica para o compilador onde estão os arquivos ".ts" que ele deve compilar.
