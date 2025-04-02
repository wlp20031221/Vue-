<template>
    <header>
        <slot name="headerSlot" :text="hello"></slot>
    </header>
    <main>
        <slot></slot>
    </main>
    <footer>
        <slot name="footerSlot"></slot>
    </footer>
</template>

<script setup>
import { ref } from 'vue'

const hello = ref('hello world')
</script>
