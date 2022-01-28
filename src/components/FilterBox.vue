<template>
    <div :class= " Filter + ' filter-item'" :style="`background-image:url(${uploadUrl})`" @click="fire"><slot></slot></div> 

</template>
<script>
export default {
    props:{
        uploadUrl:String,
        Filter : String
    },
    methods : {
        fire() {
            this.emitter.emit('msg', this.Filter)
        }
    }
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>