import Prismic from 'prismic-javascript'

/* Baixar a Biblioteca do Prismic */



export const apiEndpoint = '#' /* usar o seu Endpoint encontrado na sua conta do Prismic em API Segurança */
export const accessToken = '#' /* usar o seu Token encontrado na sua conta do Prismic em API Segurança */

export const Client = (req = null) => (
    Prismic.client(apiEndpoint, createClientOptions (req, accessToken))
)

const createClientOptions = (req = null, prismicAccessToken = null) => {
    const reqOption = req ? { req } : {}
    const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
    return {
        ...reqOption,
        ...accessTokenOption,
    } 
}