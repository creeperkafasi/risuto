<template>
  <div class="bg-gray-900 text-gray-50 font-light text-lg flex flex-row justify-center">
    <NavBar />
    <ul class="main-content p-16 grid w-full" style="max-width: 1500px;">
      <li v-for="(listName, index) in lists" :key="index">
        <ListComponent :content="listName" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ListComponent from "./ListComponent.vue";

export default Vue.extend({
  components: { ListComponent },
  data: () => ({
    lists: [] as string[],
  }),
  async created() {
    const { listFiles } = (await this.$content("list-index").fetch<{
      listFiles: string[];
    }>()) as { listFiles: string[] };
    this.lists = listFiles;
  },
});
</script>

<style>
.main-content {
  min-height: 100vh;
  grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
}

.main-content li {
  width: 100%;
}

.main-content > li:nth-child(even) > * {
  justify-self: flex-end;
}
</style>
