<template>
  <img :src="src" class="image" />
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const { src } = defineProps<{
  src: string
}>()
</script>

