<template>
  <h3>Tags:</h3>
  <div class="tag-cloud">
    <div v-for="tag in tags" :key="tag" class="tag">
      <router-link :to="{name: 'Tag', params:{tag: tag}}">
        #{{tag}}
      </router-link>
    </div>
  </div>
</template>

<script>
import useTags from '../composables/useTags'
export default {
  props: ['posts'],

  setup(props) {
    const { tags } = useTags(props.posts)

    return { tags }
  },
}
</script>

<style scoped>
.tag-cloud {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 1rem 10.5em;
}

.tag a {
  min-width: 12rem;
  background: green;
  text-align: center;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  color: #fff;
  display: inline-block;
}

.tag .router-link-active {
  background: red;
}
</style>

