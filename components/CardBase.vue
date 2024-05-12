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
  position: relative;
  background-color: black;
}

/* .pseudo::after, */
.pseudo::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  z-index: -1;
  inset: -4px;
  background: conic-gradient(
    from var(--gradient-angle),
    #d6a19a,
    #6857bb,
    #d6a19a
  );
  animation: rotate 6s linear infinite;
}

/* .pseudo::after { */
/* filter: blur(20px); */
/* } */

@keyframes rotate {
  from {
    --gradient-angle: 0deg;
  }
  to {
    --gradient-angle: 360deg;
  }
}
</style>
