import Main from './Main.vue'
import DateUtils from './../utils/DateUtils.js'
import html2canvas from 'html2canvas';
// import Vue from "vue";

Main.install = function (Vue) {
    Vue.component(Main.name, Main);
}

const components = [
    Main
]
const install = function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
    Vue.use(DateUtils);
    Vue.use(html2canvas);
}

export default {
    install,
    Main
};

