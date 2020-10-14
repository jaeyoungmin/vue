<template>
  <div class="gallery">
    <div 
     v-masonry=""
     transition-duration="0.3s"
     item-selector=".item"
     columm-width="100"
     gutter="10"
     fit-width="true"
     class="masonry-con"
    >
    <image-card 
    :url="image.download_url"
    :author="image.author"
    v-masonry-tile class="item"
    v-for="(image, i) in images"
    :key="i"
     />
    
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Gallery",
  components: {
     ImageCard: () => import("@/components/gallery/ImageCard.vue")
  },
  data() {
    return {};
  },
  
  methods: {
      },
  computed: { ...mapState(["images"]) },
  beforeMount() {   
      this.$http.get("https://picsum.photos/v2/list").then(images => {
         let parsedImage = images.data.map(el =>{
           let tmpArr = el.download_url.split('/')
           let deleted = tmpArr.splice(-2, 2)
           tmpArr.push(`300/${ Math.floor(deleted[1]/deleted[0] * 300)}.webp`)
           el.download_url = tmpArr.join('/')
           return el
        })
        this.$store.commit("setImage", parsedImage);
               });         
  }
  
};
</script>

<style lang="scss" scoped>
.gallery{
  padding:56px 0;
}
.masonry-con{
  margin:0 auto;
}

  </style>
