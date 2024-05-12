<script setup lang="ts">
useHead({
  title: "INDEX PAGE",
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    {
      name: "description",
      content: "The home page of our example app.",
    },
  ],
});

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

const onButtonClick = (payload: MouseEvent) => {
  console.log(payload.target, "button clicked");
};
</script>

<template>
  <div class="p-4" @click="onButtonClick">
    <div class="mb-4 max-w-sm overflow-hidden rounded shadow-lg">
      <img
        class="w-full"
        src="https://tailwindcss.com/img/card-top.jpg"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4 pb-2">
        <div class="mb-2 text-xl font-bold">The Coldest Sunset</div>
        <p class="text-base text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div class="px-6 py-4">
        <span class="badge mr-2">#photography</span>
        <span class="badge mr-2">#travel</span>
        <span class="badge">#winter</span>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.badge {
  @apply inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700;
  &:hover {
    @apply bg-gray-300;
  }
}
</style>
