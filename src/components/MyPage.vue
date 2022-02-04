<template>
<div style="padding : 10px">
  <h4>팔로워</h4>
  <input class="search" placeholder="   검색" @input="search($event.target.value)"/>
  <div class="post-header" v-for="(followers, i) in follower" :key="i">
    <div class="profile" :style="{backgroundImage : `url(${followers.image})`}"></div>
    <span class="profile-name">{{followers.name}}</span>
  </div>

</div>
</template>

<script>
import {onMounted,ref} from 'vue';
import axios from 'axios';

export default {
    name : 'mypage',
    props : {

    },
    setup() {// setup(props, context) created 라이프사이클과 동일 (시작점)
        
        
        //데이터 생성, 조작, methods, computed, watch, hook 다 가능
        //데이터 생성 법 ref(데이터), reactive() 
        let follower = ref([]);
        let followerOriginal = ref([]);

        onMounted(()=>{
            axios.get('/follower.json').then((a)=>{
            follower.value = a.data 
            //데이터 수정시 .value 를 사용
            followerOriginal.value = [...a.data];
            })
        })

        function search(target){
            let newF = followerOriginal.value.filter((f) => {
                return f.name.indexOf(target) != -1
            });

            follower.value = [...newF]

        }


        return {follower, search}


        }     
      
}
</script>

<style>
input.search {
    background: #dfdfdf;
    border: 0px;
    border-radius: 5px;
    width: 400px;
    height: 25px;
    margin-left: 10px;
    margin-bottom: 10px;
}

</style>