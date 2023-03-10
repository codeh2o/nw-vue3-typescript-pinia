[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# NW-Vue3-Typescript-Pinia
NW-Vue3-Typescript-Pinia is an open-source project based on NW.js, Vue 3, Typescript, and Pinia, designed to help developers quickly build applications on the NW.js platform.

This project is heavily derived from [nw-vue3-boilerplate.](https://github.com/nwutils/nw-vue3-boilerplate) 
## Installation
1. First, make sure you have installed Node.js and npm.
2. Clone this repository:
```bash
git clone git@github.com:codeh2o/nw-vue3-typescript-pinia.git
```

3. Navigate to the project directory and install the dependencies:
```bash
cd nw-vue3-typescript-pinia
npm install
```

## Usage
### Development
To run the development server for both web and desktop versions concurrently:
```bash
npm run dev
```

This command will start a web server using Vite on port 4175 and launch the desktop version of the app using NW.js after the web server is ready.

### Building
To build the app, run:
```
npm run build
```

This command will clean the `./dist-vue` and `./dist` directories, build the web version using Vite, and build the desktop versions for Windows, Linux, and macOS using NW.js. The built executables will be located in the `./dist` directory.

### Other Commands
- `npm run dev:web`: Runs the web version in development mode using Vite.
- `npm run dev:desktop`: Runs the desktop version in development mode using NW.js.
- `npm run build:web`: Builds the web version using Vite.
- `npm run build:clean`: Deletes the `./dist-vue` and `./dist` directories.
- `npm run build:nw`: Builds the desktop versions for Windows, Linux, and macOS using NW.js.
- `npm run build:win`: Builds the Windows desktop version using NW.js.
- `npm run build:lin`: Builds the Linux desktop version using NW.js.
- `npm run run:win`: Runs the built Windows desktop version.
- `npm run run:lin`: Runs the built Linux desktop version.
- `npm run preview:web`: Previews the web version using Vite.
- `npm run update:vue-devtools`: Updates the prebuilt NW.js Vue.js Devtools to the latest version.


## Technologies

This project uses the following technologies:

- [NW.js](https://nwjs.io/) - An open-source framework for building desktop applications with HTML, CSS, and JavaScript.
- [Vue 3](https://v3.vuejs.org/) - A progressive JavaScript framework for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.
- [Pinia](https://pinia.esm.dev/) - A state management library for Vue.

## Alternatives
* [nw-vue3-boilerplate.](https://github.com/nwutils/nw-vue3-boilerplate) A fully featured boilerplate, complete with Vite, Vitest, & Pinia integration and automated builds for web and desktop. Comes with Vue DevTools built in.
* [nw-vue-cli-example](https://github.com/nwutils/nw-vue-cli-example) - Uses Vue-CLI, has Vue 2 and Vue 3 branches.
* [nwjs-vue](https://github.com/elegantweb/nwjs-vue) - Uses Vue-CLI 2
* [vue-desktop-basic](https://github.com/TheJaredWilcurt/vue-desktop-basic) - Does not use a build system at all, all `.vue` files run directly in the browser context
## Contributing

We welcome and appreciate your contributions! If you would like to contribute code, please follow these steps:

1. Fork this repository to your GitHub account.
2. Clone your forked repository to your local machine.
3. Make your changes and test them locally.
4. Commit your changes.
5. Create a pull request and describe the changes and reasons for them.

We will review your pull request and communicate with you promptly.


## License
NW-Vue3-Typescript-Pinia is released under the MIT License. See the [License](https://opensource.org/licenses/MIT) file for details.
