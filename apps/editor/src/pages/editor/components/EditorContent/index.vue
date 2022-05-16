<template>
  <div class="editor-content">
    <div
      v-for="item in projectStore.currentPageElements"
      :key="item.id"
    >
      <component
        :is="materialMap[item.mId].name"
        v-bind="item.props"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProjectStore } from '@/store';
import { materialMap } from '@/data';
import { watchEffect } from 'vue';
import './index.less';

const projectStore = useProjectStore();

watchEffect(() => {
  console.log('projectStore.currentPageElements[0]', projectStore.currentPageElements[0]);
});
</script>


