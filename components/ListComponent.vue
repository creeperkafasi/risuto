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
          <div class="w-1/6 text-2xl text-center mb-2 mt-2 relative">
            <div v-if="item.image">
              <img :src="item.image">
              <span v-if="item.emoji" class="absolute -bottom-1.5 -right-1.5 text-3xl">{{
                item.emoji
              }}</span>
            </div>
            <span v-else-if="item.emoji" class="text-3xl">{{
              item.emoji
            }}</span>
            <span v-else class="text-3xl">●</span>
            <div
              v-if="item.rating"
              class="on-im-hover bg-gray-50 bg-opacity-50 w-24 p-2 rounded-md"
            >
              {{ item.rating }} / 10
            </div>
          </div>
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
  transition: scale 0.2s ease-in-out;
}

.list-item:hover{
  scale: 1.02;
}

.list-item .on-im-hover {
  opacity: 0;
  height: 3rem;
  transition: opacity 0.2s ease-in-out;
  position: absolute;
  left: 70%;
  top: 80%;
}
.list-item div:hover > .on-im-hover {
  opacity: 1;
}
</style>
