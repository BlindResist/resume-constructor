import Vue from 'vue'
import router from '@/router'
import VueI18n from 'vue-i18n'
import importComponents from '@/utils/importComponents'

import '@/utils/filters'
import '@/utils/directives'
import Lang from '@/utils/lang'
import LocalesEN from '@/locales/en'
import LocalesRU from '@/locales/ru'

importComponents()

Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: new Lang().get()
})

i18n.setLocaleMessage('en', LocalesEN)
i18n.setLocaleMessage('ru', LocalesRU)

Object.defineProperty(Vue.prototype, '$bus', {
    get: () => this.$root.bus
})

window.vm = new Vue({
    el: '#app',
    i18n,
    router,
    data: {
        bus: new Vue({}),
        langs: ['ru', 'en'],
        lang: new Lang().get(),
        brand: {
            name: 'Fast!CV',
            url: 'fastcv.online'
        }
    }
})
