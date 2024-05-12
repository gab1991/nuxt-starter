<template>
  <div
    class="flex h-screen flex-row content-center justify-center gap-4 overflow-clip py-10"
  >
    <NavBar />
    <main class="w-[800px] border-2 border-slate-400 bg-slate-500 py-10">
      <slot />
    </main>
  </div>
</template>
