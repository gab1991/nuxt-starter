<script setup lang="ts">
import HomeSvg from "~/assets/svg/Home.svg";
import UsersSvg from "~/assets/svg/UsersOutline.svg";
import MailSvg from "~/assets/svg/MailOutline.svg";
import BellSvg from "~/assets/svg/BellOutline.svg";
import AvatarBase from "./AvatarBase.vue";

const LINKS = [
  { name: "HOME", path: "/", icon: HomeSvg },
  { name: "FOLLOWING", path: "/following", icon: UsersSvg },
  { name: "MESSAGES", path: "/messages", icon: MailSvg },
  { name: "NOTIFICATIONS", path: "/notifications", icon: BellSvg },
] as const;
</script>

<template>
  <CardBase is="nav" class="flex flex-col gap-28">
    <div class="flex flex-col gap-3">
      <AvatarBase />
      <span class="text-lg">Roberto Carlos</span>
    </div>
    <nav class="flex flex-col gap-2">
      <NuxtLink
        v-for="link in LINKS"
        :key="link.path"
        class="flex w-full items-center gap-2 rounded-xl px-4 py-2 text-xl text-text transition-all duration-200 hover:bg-secondary-30"
        :to="link.path"
        :active-class="'bg-secondary-30'"
      >
        <component :is="link.icon" filled />
        {{ link.name }}
      </NuxtLink>
    </nav>
  </CardBase>
</template>
