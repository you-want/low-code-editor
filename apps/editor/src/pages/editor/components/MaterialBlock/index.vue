<template>
  <div class="material-block">
    {{ props.title }}
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import './index.less';

interface IMaterialBlock {
  title: string;
}

const props = defineProps<IMaterialBlock>();
</script>

