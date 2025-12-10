<template>
  <v-app-bar app color="primary" dark>
    <v-btn icon @click="drawer = !drawer">
      <v-icon>mdi-menu</v-icon>
    </v-btn>

    <v-toolbar-title>KuroHelper</v-toolbar-title>

    <v-spacer />

    <v-btn text @click="loginDialog = true">登入</v-btn>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app temporary color="surface">
    <v-list>
      <v-list-item link :to="{ name: 'index' }" @click="drawer = false">
        <v-list-item-title>首頁</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-dialog v-model="loginDialog" max-width="400">
    <v-card>
      <v-card-title class="text-h6">登入</v-card-title>
      <v-card-text>
        <v-text-field label="帳號" v-model="username" />
        <v-text-field label="密碼" type="password" v-model="password" />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn text @click="loginDialog = false">取消</v-btn>
        <v-btn color="primary" @click="handleLogin">登入</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const drawer = ref(false);
const loginDialog = ref(false);
const username = ref('');
const password = ref('');

function handleLogin() {
  loginDialog.value = false;
}
</script>
