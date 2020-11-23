<template>
    <div id="localpay">
        <div id="container">
            <div id="localpayment">
                <p id="p1">现场支付学费</p>
            </div>
            <div id="container-1">
                <div class="demo">
                    <p id="p2">(1)普通学生</p>
                    <p id="p3">请将你的单据拍下来，并在下方提交给管理员审核</p>
                    <div id="pic">
                            <input type="file" class="input_flie" name="form_data" ref="file" id="chooseImg" @change="reads($event)"/>
                            <div class="div_shuline" v-if="imgUrl==''"></div>
                            <div class="div_hengline" v-if="imgUrl==''"></div>    
                    </div>
                    <button  id="btn" @click="upload">上传</button>
                </div>
                <div class="demo">
                    <p id="p2">(2)绿色通道</p>
                    <p id="p3">绿色通道学生请将贷款凭据和学费支付凭据上传</p>
                    <div id="pic2">
                        <input type="file" class="input_flie" name="form_data" ref="file" id="chooseImg" @change="reads2($event)"/>
                        <div class="div_shuline" v-if="imgUrl2==''"></div>
                        <div class="div_hengline" v-if="imgUrl2==''"></div>
                    </div>
                    <button  id="btn" @click="upload">上传</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            imgUrl: "",
            imgUrl2: ""
        }
        
    },
    methods:{
        upload(){
            
        },
        reads(event) {
            // console.log(event.target.files);
            let file = event.target.files[0];
            // this.imgUrl = "data:image/png;base64," + file;
            this.imgUrl = URL.createObjectURL(file);
            // console.log(this.imgUrl)
            document.getElementById("pic").style.backgroundColor="transparent";
            document.getElementById("pic").style.opacity="1";
            document.getElementById("pic").style.backgroundImage="url(" + this.imgUrl+ ")";
            document.getElementById("pic").style.backgroundSize="100%";
        },
        reads2(event) {
            // console.log(event.target.files);
            let file = event.target.files[0];
            // this.imgUrl = "data:image/png;base64," + file;
            this.imgUrl2 = URL.createObjectURL(file);
            // console.log(this.imgUrl2)
            document.getElementById("pic2").style.backgroundColor="transparent";
            document.getElementById("pic2").style.opacity="1";
            document.getElementById("pic2").style.backgroundImage="url(" + this.imgUrl2+ ")";
            document.getElementById("pic2").style.backgroundSize="100%";
        }
    },


}
</script>
<style lang="scss" scoped>
#localpay{
    position: relative;
    width: 100%;
    // height: 700px;
}
#container{
    margin-top:50px;
    margin-bottom: 50px;
    // margin-left: 330px;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    
    height: 500px;
    border-width: 0.5px;
    background: rgba($color: #000000, $alpha: 0.3);
    color: white;
    #localpayment{
        margin-left: 0;
        margin-top: 0;
        min-height: 50px;
        border-width: 0.5px;
        background: rgba($color: #000000, $alpha: 0.2);
        display: flex;
        align-content: center;
        justify-content: center;
        }
    #container-1{
        margin-top:0 ;
        display: flex;
        justify-content: space-around;
        .demo{
            display: inline-block;
            width: 400px;
            div{
                height: 200px;
                width: 250px;
                background-color: white;
                opacity: 0.4;
                margin-left: 50px;
                margin-top: 20px;
                .input_flie {
                    display:block;
                    width:250px;
                    height:200px;
                    opacity:0;
                    z-index:100;
                    position:absolute;
                }
                .div_shuline {
                    position:absolute;
                    width:150px;
                    height:0.4px;
                    background-color:black;
                    margin-top:95px;
                    z-index:5;
                }
                .div_hengline {
                    position:absolute;
                    width:0.4px;
                    height:130px;
                    background-color:black;
                    margin-left:120px;
                    margin-top:30px;
                    z-index:5;
                }
            }
                button{
                    width: 200px;
                    height: 40px;
                    background-color: #169BD5;
                    color: white;
                    margin-top: 30px;
                    margin-left: 70px;
                    outline: none;
                    border: none;
                    border-radius: 0.5em;
                    cursor: pointer;
        }
        }
    }
}
#p1{
    font-size: 16px;
    margin-top: 15px;
}
#p2{
    margin-top: 25px;
    margin-left: 15px;
    font-size: 16px;
    font-weight:bold;
}
#p3{
    margin-top: 25px;
    margin-left: 25px;
    font-size: 14px;
    color:#ffff00;
}
</style>