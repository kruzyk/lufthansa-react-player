
// https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow

interface AuthOptions {
    auth_url: string
    client_id: string
    response_type: 'token'
    redirect_uri: string
    scope?: string
    show_dialog?: string
}

export class AuthService {
    constructor(private options: AuthOptions) { }

    token: string | null = null

    init() {
        try {
            this.token = JSON.parse(sessionStorage.getItem('token')!)
        } catch (e) { }

        const p = new URLSearchParams(window.location.hash.slice(1))
        const access_token = p.get('access_token')
        if (access_token) {
            this.token = access_token
            sessionStorage.setItem('token', JSON.stringify(this.token))
            window.location.hash = ''
        }

        if (!this.token) {
            this.login()
        }
    }

    login() {
        const { client_id,
            redirect_uri,
            response_type,
            scope = '',
            show_dialog = 'false' } = this.options

        const params = new URLSearchParams({
            client_id,
            redirect_uri,
            response_type,
            scope,
            show_dialog
        })

        window.location.href = (`${this.options.auth_url}?${params}`)
    }

    logout() { }
}

