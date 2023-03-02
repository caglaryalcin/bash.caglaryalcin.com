/* eslint-disable import/no-anonymous-default-export */
export default {
    commands: {
        echo: {
            description: 'Prints the given text to the console',
            usage: 'echo <text>',
            fn: (...args) => args.join(" ")
        },
        about: {
            description: 'About Me.',
            usage: 'about',
            fn: () => {
                return "About Me.\n---\nsystemengineer\nsolodev\nlove writing scripts\ncoffeelover\n---\n"
            }
        },
        twitter: {
            description: 'Opens my Twitter Handle.',
            usage: 'twitter',
            fn: () => {
                window.open('https://twitter.com/alphalimaparis', '_blank')
                return "opening twitter handle..."
            }
        },
        github: {
            description: 'Opens my GitHub Profile.',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/caglaryalcin', '_blank')
                return "opening github account..."
            }
        },
        languages: {
            description: 'Languages I know.',
            usage: 'languages',
            fn: () => {
                return `
                    these are the languages I know.\n---\n
                    turkish          - %100
                    english          - 40%
                    python           - 10%
                    javascript       - 30%
                `
            }
        },
        skills: {
            description: 'Skills I have.',
            usage: 'skills',
            fn: () => {
                return `
                    these are the skills I have.\n---\n
                    scripter         - 100%
                    coding           - 50%
                    studying         - 10%
                    overthinking     - 100%\n---\n
                `
            }
        },
        editor: {
            description: 'Details about my current editor',
            usage: 'editor',
            fn: () => {
                return `
                    editor: visual studio code, notepad++\n
                    font  : consolas
                `
            }
        },
        repo: {
            description: "Opens this website's github repository.",
            usage: 'repo',
            fn: () => {
                window.open("https://github.com/caglaryalcin/bash", '_blank')
                return "opening repository..."
            }
        },
    },
    overwrites:{
        sudo: {
            description: 'super user "do"',
            usage: 'sudo',
        },
        help: {
            description: 'List all available commands',
            usage: 'help',
        },
        cd: {
            description: 'Change directory, not really, lol!',
            usage: 'cd <directory>',
        },
        ls: {
            description: 'List files in the current directory',
            usage: 'ls',
        },
        mkdir: {
            description: 'Make a directory',
            usage: 'mkdir <directory>',
        },
        clear: {
            description: 'Clears the terminal',
            usage: 'clear'
        },
        cat: {
            description: 'Get a cute cat image.',
            usage: 'cat',
        }
    }
}
