import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //学号/工号
        id: "",
        //权限
        code: 0,
        msgId: 0,
        //this.$store.state.code
    },
    mutations: {
        setId(state, data) {
            state.id = data.id;
            state.code = data.code;
        },
        clearId(state) {
            state.id = "";
            state.code = 0;
            state.msgId = 0;
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