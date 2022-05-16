import App from './index.vue';
import './index.css';

export default {
	render: App,
	editorProps: {
		src: {
			type: 'string',
			defaultValue: '//puui.qpic.cn/media_img/0/null1514685319/0',
		},
	},
};
