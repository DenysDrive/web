<template>
  <q-page style="padding: 3rem 5rem; width: 50rem">
    <div class="flex">
      Welcome back, Username.
      <q-space/>
        <q-icon name="upload"/>
    </div>
    <div v-if="filesTable.length">
      <q-table
        :rows="filesTable"
        :columns="columns"
        :rows-per-page-options="[0]"
        :flat="true"
        :hide-bottom="true"
      >

        <template #body-cell-download="props">
          <q-td :props="props">
            <q-icon
              name="download"
              class="q-mr-sm"
              @click="() => {}"
            />
          </q-td>
        </template>
        <template #body-cell-remove="props">
          <q-td :props="props">
            <q-icon
              name="delete"
              class="q-mr-sm"
              color="negative"
              @click="() => {}"
            />
          </q-td>
        </template>
      </q-table>
    </div>
    <div v-else>
      Cannot load files
    </div>

  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { ls } from '../services/api'

export default defineComponent({
  name: 'Library',
  setup () {
    const filesTable = ref([])

    const columns = [
      {
        name: 'name',
        label: 'Name',
        field: 'name',
        align: 'left',
        classes: 'o-profile-column',
        required: true,
      },
      {
        name: 'download',
        label: '',
        field: 'name',
        align: 'left',
        classes: 'o-download-column',
        required: true,
      },
      {
        name: 'remove',
        label: '',
        field: 'name',
        align: 'left',
        classes: 'o-download-column',
        required: true,
      },
    ]

    onMounted(async () => {
      filesTable.value = await ls();
      console.log(`Loaded files : ${filesTable.value}`)
    })

    return {
      filesTable,
      columns
    }
  }
})
</script>

<style scoped lang="scss">
.q-icon {
  font-size: 1.7em;
  cursor: pointer;
}
</style>
