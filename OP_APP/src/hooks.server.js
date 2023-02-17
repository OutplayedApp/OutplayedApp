import PocketBase from 'pocketbase'
import {serializeNonPOJOs} from '$lib/utils'

export const handle = async ({event, resolve}) => {
    event.locals.pb = new PocketBase('http://localhost:8090')
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '')

    if (event.locals.pb.authStore.isValid) {
        event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model)
    }
}