# Demo plugin with custom elements for Visual Composer Website Builder

This is a Demo (example) plugin for developers to showcase custom elements. It acts as a sandbox for developers. To see it in action download and install it on your WordPress instance along with the [Visual Composer Website Builder](https://github.com/VisualComposer/builder) plugin.

## What is an element?
An element is the independent part of the system which represents HTML based block with the ability to output media and dynamic content.

## How does it work?
The editor works with elements as [React components](https://reactjs.org/docs/react-component.html). These components must be built with [webpack](https://webpack.js.org/) and enqueued by API.
Every element has a preview image, thumbnail image, category and React-based component.

### Element content
Each element contains
- manifest.json - describes element data, preview image, thumbnail image, category and PHP files
- package.json - yarn install/update files for required node modules
- webpack.config files to build a component with webpack

Directory {tag} (must be renamed to the element tag name):
- cssMixins directory – cssMixin.pcss: POSTCSS file that holds mixin for custom generated style
- public directory – may contain custom CSS, JS, and images for public view
- index.js - the main file, build with webpack
- component.js - ReactJS component contains Visual Composer editor component. NOTE: This component is used only in the editor, not the View Page
- settings.json - Describes element attributes
- *.php files - Required PHP files(must be described in ../manifest.json)
- editor.css - CSS file which will be used only in the editor
- style.css - CSS file which will be used on the frontend to display content

### Requirements
- node > 8.0, recommended latest
- PHP > 5.4, recommended latest (7.2)

## Installation
- Clone this repository `git clone https://github.com/VisualComposer/vcwb-demo-element-example-plugin.git`
- Run `yarn install` in the element directory
- Build via `yarn build` in the element directory
- Once an element is built it will appear in the Visual Composer editor

### Commands
```
yarn install // Install all the element dependencies
yarn build // Builds development build
yarn watch // Watches & Builds development version on file modification
yarn build-production // Builds the minified build

lessc elementName/public/src/init.less elementName/styles.css // compile LESS source file to CSS output
../../node_modules/.bin/webpack --config=webpack.config.js -p // minify JS file for public use inside elementName/public folder
```

### Resources for Visual Composer API:
- [API Documentation](https://visualcomposer.com/help/api/)
- [Custom Element & Add-on Development](https://visualcomposer.com/blog/visual-composer-api-custom-elements-and-add-ons/)
- [Theme Integration](https://visualcomposer.com/blog/visual-composer-theme-integration/)
- [Staging Environment](https://visualcomposer.com/blog/visual-composer-on-staging/)
