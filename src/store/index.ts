import Vue from 'vue'
import Vuex from 'vuex'
import Lang from '@/utils/lang'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        processing: false,
        langs: ['ru', 'en'],
        lang: new Lang().get()
    },
    mutations: {
        changeLang (state, lang: string): void {
            state.lang = lang
        },
        processing (state, status: boolean): void {
            state.processing = status
        }
    },
    actions: {},
    modules: {}
})
