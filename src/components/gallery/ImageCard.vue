<template>
  <div class="image-card">
    <div class="image-wrapper"  @mouseover="mouseover" @mouseleave="mouseleave">
      <img :src="url" alt="image" class="shit">
      <transition name="fade" >
        <div class="cover" v-if="isShow">
        <v-menu offeset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
            v-bind="attrs"
            v-on="on"
            v-model="cateogory"
            solo
            append-icon="mdi-chevron-down"
            label="Regular"
            class="menu"
          ></v-text-field>
            </template> 
            <v-list>
              <v-list-item v-for="(item, i) in items" :key="i">
                {{item.title}}
              </v-list-item>
            </v-list> 
        </v-menu>
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
      cateogory: 'cloth',
       items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }
  },
  methods: {
    mouseover() {
      this.isShow = true
    },
    mouseleave() {
      this.isShow = false
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
  width:80%;
  margin:20px;
  border-radius: 10px;
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