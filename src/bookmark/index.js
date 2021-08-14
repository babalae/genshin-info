import Main from './Main.vue'
import DateUtils from './../utils/DateUtils.js'
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
}

export default {
    install,
    Main
};

