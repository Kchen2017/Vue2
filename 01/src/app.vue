<template>
	<div>
		jjjjjjjjjjjjjjjjjjjjjj
		{{text}}
            <input type="text" name="" v-model="text">


        <ul>
            <li v-for="stu in stus" :key="stu.id">
                {{stu.name}}
                {{stu.age}}
            </li>
        </ul>

        <button @click="changeStu">点击更换学生</button>

	</div>
</template>

<script>
	 export default {
        //独立构建的时候,这个data在new Vue 的时候是对象
        data(){
            return {
                //数据 Model
                text:'哈哈',
                stus:[{
                    id:1,
                    name:'jack',
                    age:'18'
                },{
                    id:2,
                    name:'rose',
                    age:'19'
                },{
                    id:3,
                    name:'mick',
                    age:'19'
                }], //声明初始值是为了表示其数据类型
            }
        },
        methods:{
            changeStu(){
                //如何操作data函数返回的stus
                this.stus = [{
                    id:1,
                    name:'蓝精灵',
                    age:'18'
                },{
                    id:2,
                    name:'葫芦娃',
                    age:'19'
                },{
                    id:3,
                    name:'爷爷',
                    age:'19'
                }]
            }
        }
    }

</script>

<style>

</style>