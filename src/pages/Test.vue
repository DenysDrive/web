<template>
  <q-page class="flex flex-center column" style="font-family: 'Andale Mono';   padding-bottom: 4rem;">
    <span class="q-mb-sm"> Response: </span>
    <textarea readonly style="height: 50rem; width: 60rem;">{{ res }} </textarea>
    <q-btn @click="testConnection" :loading="loading" class="q-mt-md" style="width: 5rem;"> TEST</q-btn>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { test } from '../services/api'
export default defineComponent({
  name: 'Test',
  setup () {
    const res = ref('no response')
    const loading = ref(false)
    const testConnection = async () => {
      loading.value=true
      try {
        res.value = await test();
      } catch (e) {
        res.value = `web app error : ${e}`
      }
      loading.value=false
    }

    return {
      res,
      testConnection,
      loading
    };
  }
})
</script>

<style scoped lang="scss">
.q-btn {
  width: 5rem;
  background-color: black;
  color: white;
}
</style>
