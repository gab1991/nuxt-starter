<script setup lang="ts">
import { ref, computed } from '#imports';

const count = ref(1);
const double = computed(() => count.value * 2);
</script>

<template>
	<div class="bg-orange-100 w-full h-screen"/>
</template>
