<template>
  <div class="basic-layout">
    <div class="basic-layout-header">
      <BasicHeader />
    </div>
    <div class="basic-layout-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import BasicHeader from '../BasicHeader/index.vue'
import './index.less'
</script>

