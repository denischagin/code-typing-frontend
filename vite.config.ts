import react from '@vitejs/plugin-react'
import path from 'path'
import {defineConfig} from 'vite'

export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: 3000,
    },
    resolve: {
        alias: {
            '@app': path.resolve(__dirname, './src/app'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@widgets': path.resolve(__dirname, './src/widgets'),
            '@features': path.resolve(__dirname, './src/features'),
            '@entities': path.resolve(__dirname, './src/entities'),
            '@shared': path.resolve(__dirname, './src/shared'),
        },
    },
    plugins: [react()],
    base: "/speed-typing-new/"
})
