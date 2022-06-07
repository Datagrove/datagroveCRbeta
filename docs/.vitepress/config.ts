import { defineConfig } from 'vitepress'

export default defineConfig({
    description: 'Software That Does Good',
    title: 'Datagrove Costa Rica',
    base: '/',
    themeConfig: {
        // Type is `DefaultTheme.Config`
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About Us', link: '/about/' },
            { text: 'Internships', link: '/jobs/' },
        ],
        sidebar: [
        ],
        // logo: '/circle_logo.png',
    },
    head: [
        ['link', { rel: "icon", href: '../public/favicon.ico' }]
    ]
    // favicon: '/favicon.ico',
    // build: {
    //     rollupOptions: {
    //         external: []
    //     }
    // }

})