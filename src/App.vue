<template>
    <div
        id="app"
        :class="{ loaded }"
        class="page-wrapper content"
    >
        <router-view />
        <app-preloader :active="processing" />
    </div>
</template>

<script lang="ts">
import verge from 'verge'
import AppPreloader from '@/components/AppPreloader/index.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
    components: {
        AppPreloader
    }
})

export default class App extends Vue {
    loaded: boolean
    viewportW: number

    constructor () {
        super()
        this.loaded = false
        this.viewportW = 0
    }

    mounted (): void {
        this.loaded = true
        this.viewportW = verge.viewportW()
    }

    get processing (): boolean {
        return this.$store.state.processing
    }
}
</script>

<style lang="scss">
html {
    font-size: 20px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;

    @include breakpoint(desktop) {
        font-size: 18px;
    }

    @include breakpoint(laptop) {
        font-size: 16px;
    }

    @include breakpoint(v-tablet) {
        font-size: 14px;
    }

    @include breakpoint(mobile) {
        font-size: 11px;
    }
}

::selection {
    color: $white;
    background: $black;
    text-shadow: none;
}

::-moz-selection {
    color: $white;
    background: $black;
    text-shadow: none;
}

body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-width: 20rem;
    width: 100%;
    color: $black;
    font-weight: 400;
    font-family: 'jb', Arial, Helvetica, sans-serif;
    background-color: $white;
}

h1, h2, h3, h4, h5, h6 {
    margin: 0;
}

a {
    color: $black;
    text-decoration: none;

    &:visited,
    &:focus,
    &:active {
        outline: 0 none;
        text-decoration: none;
    }
}

ul {
    padding: 0;
    margin: 0;
    list-style: none;
}

#app {
    display: flex;
    flex: 1 1 100%;
    opacity: 0;
    transition: opacity .5s 1s ease;

    &.loaded {
        opacity: 1;
    }
}

.page {
    width: 100%;

    &-wrapper {
        flex: 1 0 auto;
        overflow: hidden;
    }
}

.container {
    max-width: 77.5rem;
    min-height: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
    margin: auto;

    @include breakpoint(tablet) {
        max-width: none;
        width: 100%;
    }
}

.content {

    p {
        margin: 0;
        line-height: 1.5;
    }

    p+p {
        margin: 1rem 0 0;
    }

    .row {
        margin-top: -1.875rem;

        &+.row {
            margin-top: 0;
        }

        &>[class^="col"] {
            margin-top: 1.875rem;
        }
    }
}

.link {
    color: $black;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    transition: color .3s;

    &:hover {}
}

.ul-list {

    li {
        padding-left: 2rem;
        position: relative;
        line-height: 1.5;
        font-size: .875rem;

        @include breakpoint(tablet) {
            font-size: .75rem;
        }

        &:before {
            content: '// ';
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            font-weight: 700;
        }
    }

    li+li {
        margin: .5rem 0 0;
    }
}
</style>
