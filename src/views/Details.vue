<template>
  <div v-if="error">
    <h3>{{ error }}</h3>
  </div>
  <div v-if="post" class="post">
    <h1>{{post.title}}</h1>
    <p class="pre">{{post.body}}</p>
    <hr style="margin-top:10rem">
    <button @click="handleClick" class="btn">Delete</button>
  </div>
  <div v-else>
    <Spinner></Spinner>
  </div>
</template>

<script>
import getPost from '../composables/getPost'
import Spinner from '../components/Spinner.vue'
import { useRoute, useRouter } from 'vue-router'
import { projectFirestore } from '../firebase/config'
export default {
  props: ['id'],
  components: { Spinner },
  // composition api
  setup(props) {
    const route = useRoute()
    const router = useRouter()

    const { post, error, load } = getPost(route.params.id)
    load()

    const handleClick = async function () {
      await projectFirestore.collection('posts').doc(props.id).delete()
      router.push({ name: 'Home' })
    }

    return { post, error, handleClick }
  },
}
</script>

<style>
</style>