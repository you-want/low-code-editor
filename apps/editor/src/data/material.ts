import { IMaterial } from '@you-want/shared';

export const materialList: IMaterial[] = [
  {
    id: 1,
    type: 'component',
    category: {
      name: '基础组件',
    },
    version: '0.0.1',
    source: '/y-image.0.0.1.umd.js',
    name: 'y-image',
    title: 'mafeiba',
    thumbnail: '//puui.qpic.cn/media_img/0/null1514685319/0',
    data: [
      {
        version: '0.0.1',
        source: '/y-image.0.0.1.umd.js',
      },
    ],
  },
  {
    id: 1,
    type: 'component',
    category: {
      name: '基础组件',
    },
    version: '0.0.1',
    source: '/y-image.0.0.1.umd.js',
    name: 'y-image',
    title: 'mafeima',
    thumbnail: '//puui.qpic.cn/vstar_pic/0/name_1520400_688t1494499114.jpg/0',
    data: [
      {
        version: '0.0.1',
        source: '/y-image.0.0.1.umd.js',
      },
    ],
  },
];

export const materialMap: { [key: string]: IMaterial } = materialList.reduce(
  (pre, item) => {
    pre[item.id] = item;
    return pre;
  },
  {},
);

export function getMaterialEditorProps(material: IMaterial) {
  return (window as any)[material.name].editorProps;
}

export function getMaterialRenderFun(material: IMaterial) {
  return (window as any)[material.name].render;
}

export function getMaterialDefaultProps(material: IMaterial) {
  const props = getMaterialEditorProps(material);
  return Object.keys(props).reduce((pre, key) => {
    pre[key] = props[key].defaultValue;
    return pre;
  }, {});
}
