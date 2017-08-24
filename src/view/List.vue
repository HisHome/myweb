<template>
    <div>
        {{msg}}
        <Table :columns="columns1" :data="data1"></Table>
    </div>
</template>
<script>
    export default {
        data (){
            return {
                msg:'这是目录list',
                 columns1: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    }
                ]
            }
        },
        created(){
            this.$http.post('/api/exerciseapi/monitordetail', {userName: 'ershenyuan',password:'123'}).then(response => {


            }, response => {
                // error callback
            });
            console.log('----444-----')
        }
    }
</script>