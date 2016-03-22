# Running

## Without Node & NPM
- Run the executable in `build/QSRBeverages-win32-ia32/QSRBeverages.exe`
- **NOTE** Just opening the `public/index.html` will not work as Angular's $http will fail to load the `playlist.json` file because it does not allow cross-orgin requests.  That is why I have bundled the app in an [Electron](http://electron.atom.io/) shell.

## With Node & NPM
1. Run `npm install`
1. Run `npm run launch`
- ***OR***
1. Run `npm start`
1. Navigate to `http://localhost:8080`

# Structure

```
bin/                        - Npm start script, launches node server.js
build/
  QSRBeverages-win32-ia32   - Contains built Electron exe
public/
  dist/                     - Source files compiled to here js,json,etc
  images/                   - Static images linked from playlist.json
src/
  server.js                 - Simple node server to host application
  client/
    main/                   - Main application component
    menu/                   - Contains all menu related components
      playlist.json         - Data file where app grabs all info
    ui/                     - Contains all ui components
```

## Compiled assets

```
public/
  images/
  dist/
    fonts/
    images/
    json/
      playlist.json         - Data file, changes here will be auto updated in app
    app-[hash].js           - Compiled source files, hash is added for cache-busting
    vendor-[hash].js        - All required vendor libs i.e. Angular
  electron.js               - Electron index file
  package.json              - Package file required for Electron
  favicon.ico
  index.html                - Compiled by webpack
```

**NOTE** If the application exe is ran the `playlist.json` file is located in `QSRBeverages/resources/app/dist/json`

# Build & install from source

1. Run `npm install`
1. Run `npm run build`
1. Run `npm start`
1. Navigate to `http://localhost:8080`

## Standalone Electron shell
1. Run `npm install`
1. Run `npm run package`
1. Run the executeable in `./build/QSRBeverages-*/QSRBeverages.exe`

# Development
1. Run `npm install`
1. Run `npm run hook-install` to setup the precommit hook.
1. Then run `npm run dev` *or* `npm run dev-prod` for testing production mode.
1. Edit away, webpack will detect changes and rebuild, and then BrowserSync will reload.

## NPM Scripts
- `npm run lint`         - Run eslint on all javascript files in `src/`.
- `npm run start`        - Start the server by running `bin/server.js`.
- `npm run start-dev`    - Start server in development mode.
- `npm run build`        - Build all of the front-end javascript with webpack.
- `npm run build-dev`    - Build, and watch for changes.
- `npm run dev`          - Run server in development, and build & watch front end javascript.
- `npm run hook-install` - Install a precommit hook that will run the tasks in the `package.json`.
- `npm run hook-remove`  - Remove the precommit.
- `npm run launch`       - Launch app in the standalone Electron shell.
- `npm run package`      - Package the app `./public/` into an Electron package.