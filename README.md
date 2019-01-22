# VCWB Elements API


## What is an element?
An element is the independent part of the system which represents HTML based block with the ability to output media and dynamic content.

## How does it work?
The editor works with elements as React components. These components must be built with webpack and enqueued by API.
Every element has a preview image, thumbnail image, category and React-based component.

### Element containment

Element contains
- manifest.json - describes element data, preview image, thumbnail image, category and PHP files
- package.json - npm install/update files for required node modules
- webpack.config files to build a component with webpack

Directory {tag} (must be renamed to the element tag name):
- cssMixins directory – cssMixin.pcss: POSTCSS file that holds mixin for custom generated style
- public directory – may contain custom CSS, JS, and images for public view
- index.js - the main file, build with webpack
- component.js - ReactJs component contains VCWB editor component. This component is used only in the editor
- settings.json - Describes element attributes
- *.php files - Required PHP files(must be described in ../manifest.json)
- editor.css - CSS file which will be used only in the editor
- style.css - CSS file which will be used on the frontend to display content

### Requirements
- node > 8.0, recommended latest
- PHP > 5.4, recommended latest (7.2)

## Installation
- To work with an element, each element is independent
- Run `yarn install` in the element directory
- Build via `yarn build`
- Once an element is built it will appear in the editor

### Commands
```
yarn install // Install all the element dependencies (must be same as visualcomposer)
yarn build // Builds development build
yarn watch // Watches & Builds development version on file modification
yarn build-production // Builds the minified build
```
