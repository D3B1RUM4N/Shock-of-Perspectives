import { setCookie } from '@/assets/js/utils/cookie.utils'

export class Session {
    code
    name
    character

    static KEY_NAME = 'session_code'

    constructor (code, name, character) {
        this.code      = code
        this.name      = name
        this.character = character
    }

    saveCookieSession () {
        setCookie(KEY_NAME, this.code, 72_000_000)
    }

    saveLocalStorageSession () {
        localStorage.setItem(KEY_NAME, this.code)
    }

    saveSessionCode (persistent = false) {
        if (persistent) this.saveLocalStorageSession()
        else this.saveCookieSession()
    }
}