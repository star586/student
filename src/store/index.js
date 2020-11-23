import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //学号/工号
        id: "",
        //权限
        list: 0,
        msgId: 0,
        url: "",
        //this.$store.state.code
    },
    mutations: {
        setId(state, data) {
            state.id = data.id;
            state.list = data.list;
            state.url = data.url;
        },
        clearId(state) {
            state.id = "";
            state.list = 0;
            state.msgId = 0;
            state.url = "";
        },
        setMsgId(state, data) {
            state.msgId = data;
        }
    },
    actions: {
        //共用的数据，不需多次请求  异步
        // this.$store.dispatch("name")
    },
    modules: {}
})