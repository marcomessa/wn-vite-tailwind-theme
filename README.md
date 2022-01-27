# Vite + TailwindCSS WinterCMS starter theme

![alt text](https://github.com/marcomessa/wn-vite-tailwind-theme/blob/main/vite-theme.jpg?raw=true)

Vite + TailwindCSS is a blank starter theme for WinterCMS powered by [Vite](https://vitejs.dev/) and [TailwindCSS](https://tailwindcss.com/). It includes a simple folder structure, postcss files already divided according to TailwindCSS directives and two npm scripts for development and production.

## Features
- use Vite for your frontend's assets
- TailwindCSS 3 ready
- crazy fast with a tiny node_modules folder
- browser autoreload with hot module replacement
- PostCSS ready with the following plugins:
    - postcss-import
    - tailwindcss-nesting
    - autoprefixer

## Requirements
In order to work, the theme needs its sister plugin [**Vite**](https://github.com/marcomessa/wn-vite-plugin): the theme layout file already includes the reference to the necessary components, and will not work without first installing it

## Installation
1. require the theme: `composer require marcomessa/wn-vite-tailwind-theme`
2. require the plugin: `composer require marcomessa/wn-vite-plugin`
3. be sure plugin is installed: `php artisan plugin:refresh Marcomessa.Vite`
4. navigate to theme's folder: `cd <project-root>/themes/vite-tailwind`
5. install dependencies: `npm install` or `yarn install`

## Npm scripts
- development: `npm run dev`
- production: `npm run production`

## License
The MIT License (MIT). Please see [License File](https://github.com/marcomessa/wintercms-vite-tailwind-theme/blob/master/LICENSE) for more information.
