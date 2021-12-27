<template>
  <h1>create</h1>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input v-model="title" type="text" required>

      <label>Content:</label>
      <textarea v-model="body"></textarea>

      <label>Tags (hit enter to add a tag):</label>
      <input v-model="tag" type="text" @keydown.enter.prevent="handleKeydown">
      <div v-for="tag in tags" :key="tag" class="single-tag">#{{tag}}</div>

      <div class="submit">
        <button class="btn btn--top-margin btn--display-block">Add post</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { projectFirestore, timestamp } from '../firebase/config'
export default {
  setup() {
    const title = ref('')
    const body = ref('')
    const tag = ref('')
    const tags = ref([])

    const router = useRouter()

    const handleKeydown = function () {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/, '') // removes all whitespace
        tags.value.push(tag.value)
      }
      tag.value = ''
    }

    const handleSubmit = async function () {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value,
        createdAt: timestamp(),
      }

      const response = await projectFirestore.collection('posts').add(post)

      // send to home after creation
      router.push({ name: 'Home' })
    }

    //   return
    return { title, body, tag, handleKeydown, tags, handleSubmit }
  },
}
</script>

<style>
.single-tag {
  display: inline-block;
  background: #eee;
  padding: 1rem 2rem;
  border-radius: 50px;
  margin: 1rem 0.5rem 1rem 0;
}
</style>