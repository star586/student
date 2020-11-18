import Mock from 'mockjs' //引入mockjs，npm已安装
// import { Random, toJSONSchema } from 'mockjs' // 引入random对象,随机生成数据的对象，（与占位符@一样）
Mock.setup({
    timeout: 100 //设置请求延时时间
});
// Mock.mock( rurl, rtype, template )表示当拦截到rurl和rtype的ajax请求时，将根据数据模板template生成模拟数据，并作为响应数据返回。
// Mock.mock( rurl, rtype, function( options ) )记录用于生成响应数据的函数。当拦截到匹配 rurl 和 rtype 的 Ajax 请求时，函数 function(options) 将被执行，并把执行结果作为响应数据返回。

//登录
Mock.mock('/login', 'post', function(options) {
    // console.log(options.body);
    var reg = /username=([0-9]{10})&password=(.*)$/g;
    options.body.match(reg);
    // console.log(t)
    // console.log(RegExp.$1);
    // console.log(RegExp.$2);
    if (RegExp.$2 == "123456") {
        if (RegExp.$1 == "2018110103") {
            return {
                "msg": "登录成功",
                "success": true,
                "detail": {
                    "username": "2018110103",
                    "password": "123456",
                    "code": 3
                }
            }
        } else if (RegExp.$1 == "2018110102") {
            return {
                "msg": "登录成功",
                "success": true,
                "detail": {
                    "username": "2018110103",
                    "password": "123456",
                    "code": 2
                }
            }
        } else if (RegExp.$1 == "2018110101") {
            return {
                "msg": "登录成功",
                "success": true,
                "detail": {
                    "username": "2018110103",
                    "password": "123456",
                    "code": 1
                }
            }
        } else {
            return {
                "msg": "用户名或密码错误",
                "success": false,
                "detail": null
            }
        }
    } else {
        return {
            "msg": "用户名或密码错误",
            "success": false,
            "detail": null
        }
    }
});

//学号查找
Mock.mock('/fingid', 'post', function(options) {
    // console.log(options.body);
    var reg = /id=(.*)$/g;
    options.body.match(reg);
    // console.log(t)
    // console.log(RegExp.$1);
    // console.log(RegExp.$2);
    if (RegExp.$1 == "510111111111111111") {
        return {
            "msg": "查询成功",
            "success": true,
            "detail": {
                "id": "2018110103"
            }
        }
    } else {
        return {
            "msg": "该用户不存在",
            "success": false,
            "detail": null
        }
    }
});

//获取学生报道情况
Mock.mock('/manager/getnum', 'post', function(options) {
    var reg = /id=(.*)$/g;
    options.body.match(reg);
    if (RegExp.$1 == "2018110102") {
        return {
            "msg": "获取信息成功",
            "success": true,
            "detail": {
                "sum": 1300,
                "finished": 580
            }
        }
    } else {
        return {
            "msg": "获取信息失败",
            "success": false,
            "detail": null
        }
    }
});

//获取学生状态
Mock.mock('/manager/getstatus', 'post', function(options) {
    var reg = /id=(.*)$/g;
    options.body.match(reg);
    if (RegExp.$1 == "2018110102") {
        return {
            "msg": "获取信息成功",
            "success": true,
            "detail": {
                "sum": 1300,
                "infro": 1080,
                "reportinfro": 890,
                "reportnow": 760,
                "affair": 680,
                "pay": 555
            }
        }
    } else {
        return {
            "msg": "获取信息失败",
            "success": false,
            "detail": null
        }
    }
});
//获取现场报道
Mock.mock('/manager/getreport', 'post', function(options) {
    var reg = /id=(.*)$/g;
    options.body.match(reg);
    if (RegExp.$1 == "2018110102") {
        return {
            "msg": "获取信息成功",
            "success": true,
            "detail": [{
                    "school": "计算机科学学院",
                    "type": "软件工程",
                    "name": "ccx",
                    "id": "2018110111"
                },
                {
                    "school": "计算机科学学院",
                    "type": "软件工程",
                    "name": "li",
                    "id": "2018110112"
                },
                {
                    "school": "计算机科学学院",
                    "type": "软件工程",
                    "name": "wang",
                    "id": "2018110113"
                },
                {
                    "school": "计算机科学学院",
                    "type": "软件工程",
                    "name": "ds",
                    "id": "2018110114"
                }
            ]
        }
    } else {
        return {
            "msg": "获取信息失败",
            "success": false,
            "detail": null
        }
    }
});

//确认现场报道
Mock.mock('/manager/surereport', 'post', function(options) {
    var reg = /id=(.*)$/g;
    options.body.match(reg);
    if (RegExp.$1 == "2018110112" || RegExp.$1 == "2018110111" || RegExp.$1 == "2018110113" || RegExp.$1 == "2018110114") {
        return {
            "msg": "确认信息成功",
            "success": true,
            "detail": "success"
        }
    } else {
        return {
            "msg": "确认信息失败",
            "success": false,
            "detail": null
        }
    }
});

//查找现场报道信息
Mock.mock('/manager/getreportbyid', 'post', function(options) {
    var reg = /id=(.*)$/g;
    options.body.match(reg);
    if (RegExp.$1 == "") {
        return {
            "msg": "获取信息成功",
            "success": true,
            "detail": [{
                    "school": "计算机科学学院",
                    "type": "软件工程",
                    "name": "ccx",
                    "id": "2018110111"
                },
                {
                    "school": "计算机科学学院",
                    "type": "软件工程",
                    "name": "li",
                    "id": "2018110112"
                },
                {
                    "school": "计算机科学学院",
                    "type": "软件工程",
                    "name": "wang",
                    "id": "2018110113"
                },
                {
                    "school": "计算机科学学院",
                    "type": "软件工程",
                    "name": "ds",
                    "id": "2018110114"
                }
            ]
        }
    } else if (RegExp.$1 == "2018110111") {
        return {
            "msg": "获取信息成功",
            "success": true,
            "detail": [{
                "school": "计算机科学学院",
                "type": "软件工程",
                "name": "ccx",
                "id": "2018110111"
            }]
        }
    } else if (RegExp.$1 == "2018110112") {
        return {
            "msg": "获取信息成功",
            "success": true,
            "detail": [{
                "school": "计算机科学学院",
                "type": "软件工程",
                "name": "li",
                "id": "2018110112"
            }]
        }
    } else if (RegExp.$1 == "2018110113") {
        return {
            "msg": "获取信息成功",
            "success": true,
            "detail": [{
                "school": "计算机科学学院",
                "type": "软件工程",
                "name": "wang",
                "id": "2018110113"
            }]
        }
    } else if (RegExp.$1 == "2018110114") {
        return {
            "msg": "获取信息成功",
            "success": true,
            "detail": [{
                "school": "计算机科学学院",
                "type": "软件工程",
                "name": "ds",
                "id": "2018110114"
            }]
        }
    } else {
        return {
            "msg": "该学号不存在",
            "success": false,
            "detail": null
        }
    }
});