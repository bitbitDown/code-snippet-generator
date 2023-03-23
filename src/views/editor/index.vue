<script setup lang="ts">
import { ref, reactive, watch } from "vue";
import EpCopyDocument from "~icons/ep/copy-document";
import { ElMessage } from "element-plus";
import "element-plus/es/components/message/style/css";
import { removeMark, addPreBlanks, generateSample } from "/@/utils/generate.js";
const sampleText = ref("");
const outputText = ref("");
const form = reactive({
  name: "",
  scope: "",
  prefix: "",
  description: "",
});
watch([sampleText, form], ([textVal]) => {
  const baseInfo = { ...form, body: addPreBlanks(removeMark(textVal)) };
  outputText.value = generateSample(baseInfo);
});
function copyText() {
  navigator.clipboard.writeText(outputText.value);
  ElMessage("copy code snippets success.");
}
</script>

<template>
  <div>
    <div class="flex items-center">
      <span class="px-2">name:</span>
      <el-input v-model="form.name" class="w-40 px-2"></el-input>
      <span>scope:</span>
      <el-input v-model="form.scope" class="w-40 px-2"></el-input>
      <span>prefix:</span>
      <el-input v-model="form.prefix" class="w-40 px-2"></el-input>
      <span>description:</span>
      <el-input v-model="form.description" class="pl-2"></el-input>
    </div>
    <div class="flex my-4">
      <div class="flex flex-col w-1/2">
        <div>sampleText:</div>
        <el-input
          v-model="sampleText"
          type="textarea"
          :rows="24"
          placeholder="add your code here..."
        ></el-input>
      </div>
      <div class="flex flex-col w-1/2 pl-2">
        <div class="flex items-center">
          <span>outputText:</span>
          <div title="copy" class="ml-2 cursor-pointer" @click="copyText">
            <EpCopyDocument></EpCopyDocument>
          </div>
        </div>

        <el-input
          v-model="outputText"
          type="textarea"
          :rows="24"
          placeholder="result"
          :disabled="true"
        ></el-input>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
