<template>
  <nav
    class="flex h-full w-96 flex-col gap-2 rounded-3xl border-2 border-slate-400 bg-slate-500 py-10 transition-all duration-500 hover:border-slate-100"
  >
    <NuxtLink
      class="align-center flex h-10 w-full px-4 text-2xl transition-all duration-500 hover:translate-x-4"
      to="/"
    >
      Home
    </NuxtLink>
    <NuxtLink class="align-center flex h-10 w-full px-4 text-2xl" to="/about">
      About
    </NuxtLink>
  </nav>
</template>
