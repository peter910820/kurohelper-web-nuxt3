<template>
  <div class="section-wrapper">
    <div class="input-zone">
      <v-text-field
        v-model="text"
        :placeholder="placeholder"
        hide-details
        variant="outlined"
        density="comfortable"
        class="flex-grow-1"
      />

      <v-btn icon color="primary" variant="flat" size="small" class="ma-1" @click="onSubmit" rounded="circle">
        <v-icon>mdi-send</v-icon>
      </v-btn>
    </div>

    <div class="options-row">
      <v-select
        v-if="resourceOptions"
        v-model="selected"
        :items="items"
        label="選擇來源"
        hide-details
        variant="outlined"
        density="comfortable"
        class="select-box"
      />

      <!-- 右：Checkbox -->
      <v-checkbox v-if="listOptions" v-model="checked" label="列表搜尋" hide-details class="checkbox-box" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue';

// 狀態
const text = ref<string>('');
const checked = ref<boolean>(false);
const selected = ref<string | null>(null);

// props
interface Props {
  placeholder: string;
  resourceOptions: boolean;
  listOptions: boolean;
  type: string;
}

const props = defineProps<Props>();

const items = computed<string[]>(() => {
  // 下拉選項
  const gameSource: string[] = ['批評空間', 'VNDB'];
  const brandSource: string[] = ['批評空間', 'VNDB'];
  const characterSource: string[] = ['批評空間', 'VNDB', 'Bangumi'];
  const creatorSource: string[] = ['批評空間'];
  const musicSource: string[] = ['批評空間'];
  switch (props.type) {
    case 'game':
      return gameSource;
    case 'brand':
      return brandSource;
    case 'character':
      return characterSource;
    case 'creator':
      return creatorSource;
    case 'music':
      return musicSource;
  }
  return [];
});

// emits
const emits = defineEmits<{ (e: 'submit', value: string): void }>();

// 提交事件
function onSubmit(): void {
  emits('submit', text.value);
}
</script>

<style scoped>
.section-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-zone {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-top: 20vh;
}

.send-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.options-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-top: 24px;
}

.select-box {
  flex: 2;
  margin-right: 12px;
}

.checkbox-box {
  flex: 1;
}
</style>
