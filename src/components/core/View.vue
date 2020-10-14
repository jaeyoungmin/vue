<template>
    <div>
        <transition name="component-fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.component-fade-enter-active,
.component-fade-leave-active{
    transition: all 0.3s ease-in;

}
.component-fade-enter, .component-fade-leave-to{
    /*component-fade-leave-active-belong-version*/
    opacity: 0;
    transform:translateX(400px);
}
</style>