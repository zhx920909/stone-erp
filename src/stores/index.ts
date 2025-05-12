import { createPinia } from 'pinia'

import type { App } from 'vue'

const pinia = createPinia()

export default pinia

export function setupStore(app: App) {
    app.use(pinia)
}
