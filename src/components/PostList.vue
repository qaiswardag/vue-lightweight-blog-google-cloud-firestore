<template>
  <div v-for="post in posts" :key="post.id" class="blog-post">
    <SinglePost :post="post"></SinglePost>
  </div>
</template>


<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'
import SinglePost from './SinglePost.vue'
export default {
  components: { SinglePost },
  props: ['posts'],
  setup(props) {
    onMounted(() => {
      //   console.log('component mounted')
    })
    onUnmounted(() => {
      //   console.log('component unmounted')
    })
    onUpdated(() => {
      //   console.log('component updated')
    })
    return {}
  },
}
</script>


<style>
.blog-post {
  border: 2px solid #000;
  padding: 3rem 2rem 3rem 2rem;
  margin: 4rem 2rem;
}
</style>