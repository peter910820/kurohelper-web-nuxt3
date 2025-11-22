<template>
  <v-app-bar app color="primary" dark>
    <!-- 左上 Hamburger -->
    <v-btn icon @click="drawer = !drawer">
      <v-icon>mdi-menu</v-icon>
    </v-btn>

    <v-toolbar-title>KuroHelper</v-toolbar-title>
  </v-app-bar>

  <!-- 左側 Drawer -->
  <v-navigation-drawer v-model="drawer" app temporary color="surface">
    <v-list>
      <!-- 使用 v-list-item 的 to 屬性做前端路由跳轉 -->
      <v-list-item link :to="{ name: 'index' }" @click="drawer = false">
        <v-list-item-title>首頁</v-list-item-title>
      </v-list-item>

      <!-- <v-list-item link :to="{ name: 'about' }" @click="drawer = false">
        <v-list-item-title>關於我們</v-list-item-title>
      </v-list-item>

      <v-list-item link :to="{ path: '/contact' }" @click="drawer = false">
        <v-list-item-title>聯絡我們</v-list-item-title>
      </v-list-item> -->
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)
</script>
