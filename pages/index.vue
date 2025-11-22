<template>
  <v-container class="fill-height d-flex flex-column pa-4">
    <!-- Tabs 與內容統一容器 -->
    <div class="content-wrapper" style="margin: 0 auto; width: 100%">
      <!-- Tabs -->
      <v-tabs v-model="tab" grow class="mb-2">
        <v-tab value="game">查詢遊戲</v-tab>
        <v-tab value="brand">查詢公司品牌</v-tab>
        <v-tab value="character">查詢角色</v-tab>
        <v-tab value="creator">查詢創作者</v-tab>
        <v-tab value="music">查詢音樂</v-tab>
      </v-tabs>

      <!-- 內容區 -->
      <v-window v-model="tab">
        <v-window-item value="game">
          <SectionInput
            placeholder="請輸入關鍵字"
            type="game"
            :resourceOptions="true"
            :listOptions="true"
            @submit="handleSubmit('A', $event)"
          />
        </v-window-item>
        <v-window-item value="brand">
          <SectionInput
            placeholder="請輸入關鍵字"
            type="brand"
            :resourceOptions="true"
            :listOptions="true"
            @submit="handleSubmit('B', $event)"
          />
        </v-window-item>
        <v-window-item value="character">
          <SectionInput
            placeholder="請輸入關鍵字"
            type="character"
            :resourceOptions="true"
            :listOptions="true"
            @submit="handleSubmit('B', $event)"
          />
        </v-window-item>
        <v-window-item value="creator">
          <SectionInput
            placeholder="請輸入關鍵字"
            type="creator"
            :resourceOptions="true"
            :listOptions="true"
            @submit="handleSubmit('B', $event)"
          />
        </v-window-item>
        <v-window-item value="music">
          <SectionInput
            placeholder="請輸入關鍵字"
            type="music"
            :resourceOptions="true"
            :listOptions="true"
            @submit="handleSubmit('B', $event)"
          />
        </v-window-item>
      </v-window>
    </div>
  </v-container>
</template>

<script setup>
const tab = ref('game');

function handleSubmit(type, value) {
  alert(`模式 ${type}: ${value}`);
}
</script>
