<template>
  <div class="home">
    <div v-if="error">
      <h2>{{ error }}</h2>
    </div>
    <div v-if="posts.length">
      <TagCloud :posts="posts"></TagCloud>
      <PostList :posts="posts"></PostList>
    </div>
    <div v-else>
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script>
// component imports
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'
import getPosts from '../composables/getPosts'
import Spinner from '../components/Spinner.vue'

export default {
  name: 'Home',
  components: { PostList, Spinner, TagCloud },
  setup() {
    const { posts, error, load } = getPosts()

    load()

    return { posts, error }
  },
}
</script>