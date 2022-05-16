<template>
  <div class="editor-left">
    <div
      v-for="item in materialList"
      :key="item.id"
      class="material"
      @click="onClick($event, item)"
    >
      <MaterialBlock :title="item.title" />
    </div>
  </div>
</template>

<script setup lang="ts">
import MaterialBlock from '../MaterialBlock/index.vue';
import { getMaterialDefaultProps, materialList } from '@/data';
import { IMaterial, PageElement } from '@you-want/shared';
import { useProjectStore } from '@/store';
import './index.less';

const projectStore = useProjectStore();

function onClick(e: Event, m: IMaterial) {
  console.log('click', m);
  const ele = PageElement.create();
  ele.mId = m.id;
  ele.mVersion = m.version;
  ele.props = getMaterialDefaultProps(m);
  projectStore.addElement(ele);
}
</script>


