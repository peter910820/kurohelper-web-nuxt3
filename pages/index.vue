<template>
  <v-container fluid class="fill-height d-flex align-center justify-center">
    <v-row class="d-flex align-center justify-center w-100">
      <v-col cols="12" sm="6" md="4">
        <v-text-field v-model="inputValue" label="請輸入文字" outlined dense hide-details @keyup.enter="submit">
          <template #append>
            <v-btn icon color="primary" rounded elevation="2" @click="submit">
              <v-icon>mdi-send</v-icon>
              <!-- 官方建議送出箭頭 -->
            </v-btn>
          </template>
        </v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const inputValue = ref('')

const submit = () => {
  if (!inputValue.value.trim()) return
  alert(`送出內容: ${inputValue.value}`)
  inputValue.value = ''
}
</script>
