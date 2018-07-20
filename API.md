# VCWB Elements API


## What is element
Element is the independent part of the system which represents html based block with ability to output media and dynamic content.

## How does it work?
The editor works with elements as React components. Thess components must be built with webpack and enqueued by API.
Every element has preview, thumbnail, category and React-based component.

### Element containment 

Elements contains
- manifest.json - describes element data, preview, thumbnail, category and php files.
- package.json - npm install/update files for required node modules
- webpack.config files to build component with Webpack

Directory {tag} (must be renamed to src):
- index.js - main file, build with Webpack
- component.js - ReactJs component contains VCWB editor component. This component is used only in editor.
- settings.json - Describes element attributes
- *.php files - Required php files(must be described in ../manifest.json)
- editor.css - css files which will be used only in editor
- style.css - css files which will be used on frontend to display content.

### Requirements
- node > 8.0, recommended latest
- PHP > 5.4, recommended latest (7.2)

## Installation
- To work with element, each element is independent
- Run `npm install` in element directory
- Build via `npm run build`
- Once element is built it will appear in editor

### Commands
```
npm install // Install all the element dependencies (must be same as visualcomposer)
npm run build // Build development build
npm run watch // Watches & Build development version on file modification
npm run build-production // Builds the minified build
npx webpack --config=webpack.config.4x.babel.js // Same as npm run build
npx webpack --config=webpack.config.4x.babel.produciton.js -p // Same as npm run build-production
```

