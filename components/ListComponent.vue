<template>
  <div
    class="list-container bg-gray-400 text-black p-2 my-4 w-4/5 min-w-0 max-w-lg rounded-lg shadow-2xl"
  >
    <h1 class="font-normal text-xl mx-2 my-1">
      {{ listTitle }}
    </h1>
    <ul class="flex-1 align-center">
      <li
        v-for="(item, index) in listItems"
        :key="index"
        class="list-item border border-solid border-gray-600 w-11/12 mx-1 mb-2.5 rounded-md bg-gray-500 bg-opacity-50 px-3 pt-2 shadow-md"
      >
        <div class="flex">
          <div v-if="item.image" class="w-1/6 text-2xl mb-2 relative">
            <img :src="item.image">
            <span v-if="item.emoji" class="absolute -bottom-1.5 -right-1.5">{{
              item.emoji
            }}</span>
          </div>
          <span
            v-else-if="item.emoji"
            class="w-1/6 text-3xl text-center mb-2"
          >{{ item.emoji }}</span>
          <span v-else class="w-1/6 text-3xl text-center mb-2">●</span>
          <span class="w-4/6 ml-3">
            <h1 class="underline font-normal text-black">{{ item.title }}</h1>
            {{ item.text }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ListItem from "~/interfaces/ListItem";

export default Vue.extend({
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    listTitle: "",
    listItems: [] as ListItem[],
  }),
  async created() {
    const listData = (await this.$content(this.content).fetch<{
      title: string;
      items: ListItem[];
    }>()) as { title: string; items: ListItem[] };
    this.listTitle = listData.title;
    this.listItems = listData.items;
  },
});
</script>

<style>
.list-container {
  min-height: 8rem;
}
.list-item {
  min-height: 3rem;
}
</style>
