<template>
  <div class="image-card" @mouseover="mouseover" @mouseleave="mouseleave">
    <div class="image-wrapper" >
      <img :src="url" alt="image" class="shit">
      <transition name="fade" >
        <div class="cover" v-if="isShow">
            <v-text-field 
            v-model="cateogory"
            prepend-inner-icon="mdi-chevron-down"
            solo
            label="Regular"
            class="menu"
            @click="menuClick"
            ></v-text-field>           
            <div class="right-btn" @click="menuClick">저장</div>     
        <v-card width="200" class="list-card" v-if="isMenuShow">
          <v-list>
            <v-list-item v-for="(item, i) in items" :key="i" @click="menuClick">
              <v-list-item-title class="bot"> 
                {{item.title}}
              </v-list-item-title>
            </v-list-item>
          </v-list> 
        </v-card>
        <div class="under-wrapper">
          <v-btn icon dark><v-icon>mdi-upload</v-icon></v-btn>
          <v-btn icon dark><v-icon>mdi-dots-horizontal</v-icon></v-btn>
        </div>
        </div>
      </transition>      
    </div>    
    <p>{{author}}</p>
  </div>
</template>
<script>
export default {
  name: "ImageCard",
  props: ["url", "author"],
  data() {
    return {
      isShow: false,
      isMenuShow: false,
      cateogory: 'WHAT THE',
       items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      closeOnClick: true,
    }
  },
  methods: {
    mouseover() {
      this.isShow = true
    },
    mouseleave() {
      this.isShow = false
    },
    menuClick(){
      this.isMenuShow = !this.isMenuShow
    }
    } 
};
</script>

<style lang="scss" scoped>
.image-wrapper{
  position: relative;
}
.cover{
  opacity: 1;
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:7px;
  background:rgba($color: #222, $alpha:0.3);
  border-radius: 10px;
}
.menu{
  margin:20px 20px 0;
  border-radius: 10px;

}
.under-wrapper{
  position:absolute;
  right:10px;
  bottom:10px;
}
.right-btn{
  background-color:red;
  display:inline-block;
  width:20%;
  height:48px;
  border-radius: 0 10px 10px 0;
  position: absolute;
  right:20px;
  top:20px;
  color:white;
  text-align:center;
  line-height:3;
}
.list-card{
  position: absolute;
  top:73px;
  left:52px;
  border-radius: 5px;
}
.bot{
  border-bottom:1px solid #ddd;
}
img{
  border-radius: 10px;
}
p{
  font-weight: bold;
}
//animation
.fade-enter-active, .fade-leave-active{
  transition: opacity 0.3;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>