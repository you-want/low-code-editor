<template>
  <div class="editor-layout">
    <div class="editor-layout-left">
      <EditorLeft />
    </div>
    <div class="editor-layout-content">
      <EditorContent />
    </div>
    <div class="editor-layout-right">
      <EditorRight />
    </div>
  </div>
</template>

<script setup lang="ts">
import EditorLeft from '../EditorLeft/index.vue';
import EditorRight from '../EditorRight/index.vue';
import EditorContent from '../EditorContent/index.vue';
import './index.less';
</script>


