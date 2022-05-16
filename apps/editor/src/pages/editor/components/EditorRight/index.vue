<template>
  <div class="editor-right">
    <input
      v-if="editorProps !== undefined"
      type="text"
      :value="elementProps && elementProps.src"
      @change="onPropsChange($event)"
    >
  </div>
</template>

<script setup lang="ts">
import { getMaterialEditorProps, materialMap } from '@/data';
import { useProjectStore } from '@/store';
import { computed } from 'vue';
import './index.less';

const projectStore = useProjectStore();

const editorProps = computed(() => {
  if (!projectStore.currentElement) {
    return null;
  }
  return getMaterialEditorProps(materialMap[projectStore.currentElement.mId]);
});

const elementProps = computed(() => {
  if (!projectStore.currentElement) {
    return null;
  }
  return projectStore.currentElement.props;
});
function onPropsChange(e: Event) {
  const target = e.target as HTMLInputElement;
  console.log(target.value);
  projectStore.changeElementProps({
    src: target.value,
  });
}
</script>

