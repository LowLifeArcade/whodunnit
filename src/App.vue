<script setup lang="ts">
    import { ref } from 'vue';
    let input = ref(null);
    interface Obj {
        event: String,
        runTime: String
    }
    function obvuscate<T extends keyof Obj>(p1: T, p2: Number) {
        // do stuff
        return;
    };
    class SomeClass {
        private thing: String
    }
</script>

<template>
    <h1>Whodunnit</h1>
    <input v-model="input" type="text" />
    <br />
    <h2>
        {{ input }}
    </h2>
</template>

<style scoped></style>
