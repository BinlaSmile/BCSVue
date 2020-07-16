<template>
    <div class="login">
         <Card class="from-wrap">
            <div slot="title">
                <h2>BellCatManagementSystem</h2>
                <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                    <FormItem class="from-item" prop="username">
                        <Input type="text" v-model="formInline.username" placeholder="用户名">
                            <Icon type="md-person" slot="prefix"/>
                        </Input>
                    </FormItem>
                    <FormItem class="from-item" prop="password">
                        <Input type="password" v-model="formInline.password" placeholder="密码">
                            <Icon type="md-lock" slot="prefix"/>
                        </Input>
                    </FormItem>
                    <FormItem class="from-item">
                        <Checkbox>下次自动登录</Checkbox>
                        <Button type="primary" long @click="handleSubmit('formInline')">登录</Button>
                    </FormItem>
                </Form>
            </div>
            <div>
                Copyright ©2020 Binla. All rights reserved.
            </div>
        </Card>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                formInline: {
                    username: '',
                    password: ''
                },
                ruleInline: {
                    username: [{ required: true, message: '请填写用户名', trigger: 'blur' }],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位！', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$ajax({
                            url: 'http://localhost:8088/login/auth',//请求的地址
                            method: 'post',//请求的方式
                            data: this.formInline//请求的表单数据
                        }).then(res => {
                            this.$router.push({path: '/'});
                        }).catch(err => {
                            console.info(err.retCode + err.message);
                        });
                    } else {
                        this.$Message.error('表单校验失败!');
                    }
                })
            }
        }
    }
</script>
<style>
html,body {
    width: 100%;
    height: 100%;
    background-color: #f8f8f9;
}
.login {
    width: 100%;
    height: 100%;
    position: relative;
}
.login .from-wrap{
    position: fixed;
    left: 50%;
    margin-left: -200px;
    top: 30%;
    margin-top: -150px;
    width: 400px;
    padding: 20px 30px;
}
.login h2 {
    text-align: center;
    margin-bottom: 40px;
}
.login .from-item {
    width: 100%;
    margin-bottom: 30px;
}
</style>
