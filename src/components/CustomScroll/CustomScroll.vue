<script setup lang="ts">
import { ref } from 'vue'
import { type Sections } from '@/components/CustomScroll/interfaces'

const sections = defineProps<Sections>()

const activeIndex = ref<number | null>(null)

const showTooltip = (index: number) => {
  activeIndex.value = index
}

const scrollToSection = (index: number) => {
  const targetId = sections.sections[index].targetId
  const targetElement = document.getElementById(targetId)

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="sidebar">
    <div
      v-for="(section, index) in sections.sections"
      :key="index"
      class="circle"
      @mouseover="showTooltip(index)"
      @click="scrollToSection(index)"
    >
      <div class="tooltip" v-if="activeIndex === index">{{ section.name }}</div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.circle {
  width: 40px;
  height: 40px;
  background-color: #0074d9;
  border-radius: 50%;
  margin: 10px 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.tooltip {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #0074d9;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  display: none;
}

.circle:hover .tooltip {
  display: block;
}
</style>
