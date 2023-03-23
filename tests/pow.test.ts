import { assert, expect, test } from "vitest";
import { removeMark, addPreBlanks, generateSample } from "/@/utils/generate.js";
const res = `
"1":{
  "scope":"1",
  "prefix":"1",
  "body":[
"<script setup lang='ts'></script>",
"<template>",
"  <div></div>",
"</template>",
"<style lang='scss' scoped></style>",
  ],
  "description":"1"
}
`;
const param = {
  name: "1",
  scope: "1",
  prefix: "1",
  description: "1",
  body: addPreBlanks(
    removeMark(
      `<script setup lang="ts"></script>

      <template>
        <div></div>
      </template>
      
      <style lang="scss" scoped></style>
      `
    )
  ),
};
test("generate code snippets", () => {
  // console.log("ssssss:", generateSample(param));
  expect(generateSample(param)).toBe(res);
});
