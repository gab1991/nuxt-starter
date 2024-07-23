<script setup lang="ts">
interface Props {
  is: keyof HTMLElementTagNameMap;
}

const { is } = withDefaults(defineProps<Props>(), {
  is: "div",
});
</script>

<template>
  <component :is="is" class="pseudo">
    <slot />
  </component>
</template>

<style lang="css" scoped>
@property --gradient-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

.pseudo {
  --lower-background: #232323;
  background:
    linear-gradient(black, black) padding-box,
    var(--lower-background) border-box;
  border: 2px solid transparent;
  border-radius: 20px;
  padding: 20px;

  &:hover {
    --lower-background: conic-gradient(
      from var(--gradient-angle),
      #6857bb,
      #d6a19a,
      #6857bb
    );
  }

  animation: rotate 5s linear infinite;
}

@keyframes rotate {
  from {
    --gradient-angle: 0deg;
  }
  to {
    --gradient-angle: 360deg;
  }
}
</style>
