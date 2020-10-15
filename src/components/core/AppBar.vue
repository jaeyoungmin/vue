<template>
    <div class="app-bar">
      <v-app-bar color="white" fixed elevate-on-scroll>
     <v-icon color="red" large>mdi-pinterest</v-icon>
           <router-link to="/" name="Home"><v-btn rounded dark>Home</v-btn></router-link>
           <router-link to="/following"><v-btn rounded>Following</v-btn></router-link>

            <v-text-field
            prepend-inner-icon="mdi-magnify"
            placeholder="SEARCH"
            filled
            dense
            rounded
            style="top: 14px;padding: 0 20px;"
            v-model="search"
            @keyup="enter"
            >
        </v-text-field>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-chat-processing</v-icon>
      </v-btn>
      <v-btn icon>
          <v-avatar  size="35">
              <v-img src="https://jmagazine.joins.com/_data/photo/2019/04/2949993301_QGcF14Px_1.jpg">
              </v-img>
          </v-avatar>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </v-app-bar>

    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'AppBar',
        computed: { ...mapState(["images"]) },
        data(){
          return {
            search:'',
          }
        },
        methods:{
          enter(){
            this.$store.commit('setSearchText', this.search);
          }
        }

    }
</script>

<style lang="scss" scoped>
a{
  margin-left:15px;
}
</style>