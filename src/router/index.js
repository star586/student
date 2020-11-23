import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store'
const Message = () =>
    import ('../views/Message.vue')
const Login = () =>
    import ('../components/Login.vue')
const Log = () =>
    import ('../views/Login/Log.vue')
const FindId = () =>
    import ('../views/Login/FindId.vue')
const FindPassword = () =>
    import ('../views/Login/FindPassword.vue')

const Home = () =>
    import ('../views/Student/Home.vue')
const Affair = () =>
    import ('../views/Student/Affair.vue')
const Information = () =>
    import ('../views/Student/Information.vue')
const Report = () =>
    import ('../views/Student/Report.vue')
const Strategy = () =>
    import ('../views/Student/Strategy.vue')
const Tuition = () =>
    import ('../views/Student/Tuition.vue')
const Modify_info = () =>
    import ('../views/Student/Modify_info.vue')
const Check_info = () =>
    import ('../views/Student/Check_info.vue')
const Localpay = () =>
    import ('../views/Student/localpay.vue')


const UpdatePssword = () =>
    import ('../components/UpdatePwd.vue')

const SMHome = () =>
    import ('../views/SManager/Home.vue')
const InformM = () =>
    import ('../views/SManager/InformM.vue')
const ManagerM = () =>
    import ('../views/SManager/ManagerM.vue')
const UserM = () =>
    import ('../views/SManager/UserM.vue')
const Builduser = () =>
    import ('../views/SManager/Builduser.vue')
const Buildadmin = () =>
    import ('../views/SManager/Buildadmin.vue')
const Muser = () =>
    import ('../views/SManager/Muser.vue')
const Madmin = () =>
    import ('../views/SManager/Madmin.vue')
const BasicUser = () =>
    import ('../views/SManager/BasicUser.vue')
const BasicAdmin = () =>
    import ('../views/SManager/BasicAdmin.vue')
const Caogao = () =>
    import ('../views/SManager/caogao.vue')

const MHome = () =>
    import ('../views/Manager/Home.vue')
const Pay = () =>
    import ('../views/Manager/Pay.vue')
const MReport = () =>
    import ('../views/Manager/Report.vue')
const Status = () =>
    import ('../views/Manager/Status.vue')
const FindById = () =>
    import ('../views/Manager/FindById.vue')

const SSHome = () =>
    import ('../components/Home.vue')

Vue.use(VueRouter)

const routes = [{
        path: '',
        component: Login,
        children: [{
                path: '',
                component: Log,
            }, {
                path: '/login/findId',
                component: FindId,
            },
            {
                path: '/login/log',
                component: Log,
            },
            {
                path: '/login/findPassword',
                component: FindPassword,
            }
        ]
    },
    {
        path: '/message',
        component: Message
    },
    {
        path: '/home',
        component: SSHome,
        children: [{
                path: '/smanager/home',
                component: SMHome,
            },
            {
                path: '/smanager/informm',
                component: InformM,
            },
            {
                path: '/smanager/managerm',
                component: ManagerM,
            },
            {
                path: '/smanager/userm',
                component: UserM,
            },
            {
                path: '/smanager/builduser',
                component: Builduser,
            },
            {
                path: '/smanager/buildadmin',
                component: Buildadmin,
            },
            {
                path: '/smanager/muser',
                component: Muser,
            },
            {
                path: '/smanager/madmin',
                component: Madmin,
            },
            {
                path: '/smanager/basicuser',
                component: BasicUser
            },
            {
                path: '/smanager/basicadmin',
                component: BasicAdmin
            },
            {
                path: '/smanager/caogao',
                component: Caogao
            },
            {
                path: '/manager/home',
                component: MHome,
            },
            {
                path: '/manager/pay',
                component: Pay,
            },
            {
                path: '/manager/report',
                component: MReport,
            },
            {
                path: '/manager/status',
                component: Status,
            },
            {
                path: '/manager/findbyid',
                component: FindById,
            },
            {
                path: '/student/home',
                component: Home,
            },
            { //事务处理
                path: '/student/affair',
                component: Affair,
            },
            {
                path: '/student/information',
                component: Information,
            },
            {
                path: '/student/report',
                component: Report,
            },
            { //校园攻略
                path: '/student/strategy',
                component: Strategy,
            },
            {
                path: '/student/tuition',
                component: Tuition,
            },
            {
                path: '/student/modify_info',
                component: Modify_info,
            },
            {
                path: '/student/check_info',
                component: Check_info,
            },
            {
                path: '/student/localpay',
                component: Localpay,
            },
        ]
    },
    {
        path: '/updatepassword',
        component: UpdatePssword
    },
    {
        path: '/login',
        component: Login,
        children: [{
                path: '',
                component: Log,
            }, {
                path: '/login/findId',
                component: FindId,
            },
            {
                path: '/login/log',
                component: Log,
            },
            {
                path: '/login/findPassword',
                component: FindPassword,
            }
        ]
    },

]

const router = new VueRouter({
    routes
})

// //全局守卫(局部守卫在vue中)
// router.beforeEach((to, from, next) => {
//     if (to.path == '/login' || to.path == '/message' || to.path == '/login/log' || to.path == '/login/findId' || to.path == '/login/findPassword') {
//         next();
//     } else {
//         if (store.state.id != "") {
//             next();
//         } else {
//             alert('请先登录');
//             next('/login');
//         }

//     }
// });
//     if (to.path === '/login' || to.path === '/') {
//         store.commit("clearId");
//         next();
//     } else if (to.path === '/message') {
//         if (store.state.msgId == 0) {
//             next('/login');
//         } else {
//             next();
//         }
//     } else {
//         if (store.state.code == 0) {
//             if (to.path === '/login/findId') {
//                 next();
//             } else if (to.path === '/login/findPassword') {
//                 next();
//             } else if (to.path === '/login/log') {
//                 next();
//             } else {
//                 alert("请先登录");
//                 next('/login');
//             }
//         } else {
//             if (to.path === '/student') {
//                 if (store.state.code === 3) {
//                     next();
//                 } else {
//                     alert("请先登录");
//                     next('/login');
//                 }
//             } else if (to.path === '/manager') {
//                 if (store.state.code === 2) {
//                     next();
//                 } else {
//                     alert("请先登录");
//                     next('/login');
//                 }
//             } else if (to.path === '/smanager') {
//                 if (store.state.code === 1) {
//                     next();
//                 } else {
//                     alert("请先登录");
//                     next('/login');
//                 }
//             } else {
//                 next();
//             }
//         }

//     }
// })



export default router