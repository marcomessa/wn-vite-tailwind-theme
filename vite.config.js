const Dotenv = require('dotenv')
import liveReload from 'vite-plugin-live-reload'

Dotenv.config();

const ASSET_URL = process.env.ASSET_URL || 'http://localhost:3000';
const VITE_INPUT = process.env.VITE_INPUT || 'resources/js/app.js';

export default ({command}) => {

    return {
        base: command === 'serve' ? '' : '/build/',
        /*base: `${ASSET_URL}`,*/
        publicDir: 'fake_dir_so_nothing_gets_copied',
        build: {
            manifest: true,
            outDir: 'build',
            rollupOptions: {
                input: `${VITE_INPUT}`
            },
        },
        server: {
            strictPort: true,
            port: 3000,
        },
        resolve: {
            extensions: ['.js','.mjs']
        },
        plugins: [
            liveReload('./**/*.htm'),
        ]
    }
};
