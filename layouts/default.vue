<template>
  <div class="flex h-screen flex-row justify-center">
    <nav class="flex h-full w-96 flex-col gap-2 bg-slate-500 py-10">
      <NuxtLink
        class="flex h-10 w-full px-4 text-2xl transition-all duration-500 hover:translate-x-4 align-center "
        to="/"
      >
        Home
      </NuxtLink>
      <NuxtLink
        class="align-center flex h-10 w-full px-4 text-2xl"
        to="/about"
      >
        About
      </NuxtLink>
    </nav>
    <main>
      <slot />
    </main>
  </div>
</template>
