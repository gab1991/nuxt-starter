<template>
	<nav class="p-4 h-20 flex items-center justify-between gap-10 bg-orange-200">
		<span>Music of your dreams</span>
		<ul class="flex items-center gap-5">
			<li><NuxtLink class="font-bold hover:text-lg transition-all" to="/">Home</NuxtLink></li>
			<li><NuxtLink class="font-bold hover:text-lg transition-all" to="/about">About</NuxtLink></li>
		</ul>
	</nav>
	<main>
		<slot />
	</main>
</template>
