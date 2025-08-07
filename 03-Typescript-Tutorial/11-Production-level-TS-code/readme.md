
<!-- How to make and run typescript project in production  -->

1. Create Folder 

```bash
mkdir my-ts-project
cd my-ts-project
npm init -y
```

2. Install TypeScript in developer mode

```bash
npm install --save-dev typescript
```

3. Initialize TypeScript Config

```bash
    npx tsc --init
```

but if we have initialised typescript globally then we dont need to use tsx, we can directly use tsc --init


4. Update the tsconfig.json file

Make sure we have key, values like below

```json
    "rootDir": "./src",
    "outDir": "./dist",
    "module": "esnext",
    "target": "esnext",
    "sourceMap": false,
    "declaration": false,
    "declarationMap": false,
```

5. We have 2 folder dist and src

in src folder we have all the tsx files on compilation gets converted to js file in dist folder

6. We compile the ts code using 

If we have not installed typescript globally and want to run in development mode then

```bash
    tsx tsc
```

But if we have installed globally then we can run using 

```bash
    tsc
```

7. Now to run the compiled code

Suppose we have index.html whose script code has type module and src='./dist/index.js'

```bash
node dist/index.js
```

8. Add Scripts to package.json

```json
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js"
}
```

Now we can:

```bash
npm run build     # Compile
npm start         # Run in production
```


---


# Interview Related qna

## 1. Create Project Folder

```bash
mkdir my-ts-project
cd my-ts-project
npm init -y
```

## 2. Install TypeScript as a Dev Dependency

```bash
npm install --save-dev typescript
```

> ✅ Best practice is to install TypeScript locally to ensure consistent versioning.

## 3. Initialize TypeScript Configuration

```bash
npx tsc --init
```

> ✅ If you have TypeScript installed globally, you can also use:
>
> ```bash
> tsc --init
> ```

> ❌ Do **not** use `tsx tsc`. `tsx` is a separate tool for running `.ts`/`.tsx` files directly and is **not** related to compiling with `tsc`.

## 4. Update `tsconfig.json`

Ensure the following compiler options are set:

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
    "module": "esnext",
    "target": "esnext",
    "sourceMap": false,
    "declaration": false,
    "declarationMap": false
  }
}
```

## 5. Create Folder Structure

```
my-ts-project/
├── src/
│   └── index.ts
├── dist/
├── index.html
├── tsconfig.json
└── package.json
```

> Put your `.ts` files in the `src/` folder. The compiled `.js` files will appear in the `dist/` folder.

## 6. Compile TypeScript Code

```bash
npx tsc
```

> ✅ If you installed TypeScript globally, you can simply use:

```bash
tsc
```

## 7. Run the Compiled Code

If you have an `index.html` that references your compiled JavaScript:

```html
<script type="module" src="./dist/index.js"></script>
```

To run the JS file directly (for backend or testing purposes):

```bash
node dist/index.js
```

## 8. Add Scripts to `package.json`

```json
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js"
}
```

## 9. Now You Can:

```bash
npm run build     # Compile TypeScript
npm start         # Run the compiled code in production
```















# TypeScript Interview Q&A (Project Setup & Basics)

---

### 2. **What's the purpose of `tsconfig.json`?**

`tsconfig.json` configures how the TypeScript compiler (`tsc`) behaves — for example, defining input/output directories, the module system, and the JavaScript version to target.

---

### 3. **What's the difference between `tsc` and `tsx`?**

- `tsc` is the official TypeScript compiler.
- `tsx` is a separate runtime tool that can execute `.ts` or `.tsx` files directly, like `ts-node`. It's mostly used in development.

---

### 4. **What's the role of `rootDir` and `outDir` in `tsconfig.json`?**

- `rootDir`: Specifies the folder containing TypeScript source files (e.g., `./src`).
- `outDir`: Specifies where the compiled JavaScript files should go (e.g., `./dist`).

---

### 5. **How do you compile TypeScript code?**

```bash
npx tsc
```

Or, if TypeScript is installed globally:

```bash
tsc
```

---

### 8. **What are some common compiler options for production?**

```json
{
  "target": "esnext",
  "module": "esnext",
  "sourceMap": false,
  "declaration": false
}
```

---

### 9. **Can you run `.ts` files directly without compiling?**

Yes, by using tools like `ts-node` or `tsx`. However, this is recommended only in development environments.

---

### 10. **What’s the benefit of TypeScript over JavaScript?**

- Static typing
- Better tooling (autocomplete, IntelliSense)
- Compile-time error detection
- Support for interfaces, enums, and advanced types

---