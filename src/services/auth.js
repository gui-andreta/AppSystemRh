export default function signIn() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'aenvblioaeujgbneigbnjeigbege9g',
                user: {
                    name: 'Guilherme',
                    email: `guilherme@hotmail.com`,
                },
            })
        }, 2000)
    })
}