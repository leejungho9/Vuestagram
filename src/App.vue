<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="step--">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">Save</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

   <Container :postDatas="postDatas" :step ="step" :uploadUrl= "uploadUrl" :selectFilter="selectFilter"/>


  <button class="moreBtn" @click="$store.dispatch('getData')" v-if="step == 0">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload"  type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>


import Container from './components/Container.vue'
import postData from './assets/data.js'
import axios from "axios";

export default {
  name: 'App',
  data() {
    return {
      postDatas : postData,
      step : 0,
      uploadUrl : '',
      selectFilter : '',
      counter : 0,
    }
  },
  mounted() {
    this.emitter.on('msg', (e) => {
      console.log(e)
      this.selectFilter = e
    })
  },
  components: {
    Container,
  },
  computed : {
    
  },
  methods : {
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.clickBtn}.json`)
        .then((result) => {
          console.log(result.data);
          this.postDatas.push(result.data);
        });
    },
    upload(e) {
      let file = e.target.files;
      this.uploadUrl =  URL.createObjectURL(file[0]);
      this.step++;
    },
    publish() {
      let write = document.querySelector('.write-box').value
  

      let myPost = {
      name: "Lee Jungho",
      userImage: "https://placeimg.com/100/100/arch",
      postImage: this.uploadUrl,
      likes: 36,
      date: "May 15",
      liked: false,
      content: write,
      filter: "perpetua"
    };
      this.postDatas.unshift(myPost)
      this.step = 0;
    },
  }
}
</script>

<style>

.moreBtn {
  display: block;
  margin: auto;
  width: 100px;
  height: 30px;

  border: 0;
  border-radius: 7px;
  color: #333;
  cursor: pointer;
}

body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: #333;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: #333;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
