<script setup lang="ts">
import { ref, watch, type PropType } from 'vue'
import type { Sections } from './interfaces'

const props = defineProps({
  sections: {
    type: Array as PropType<Sections>
  },
  activeSection: {
    type: String
  }
})

const activeIndex = ref<number | null>(null)

const showTooltip = (index: number) => {
  activeIndex.value = index
}

const scrollToSection = (tagetId: string) => {
  const targetElement = document.getElementById(tagetId)

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' })
  }
}

watch(() => props.activeSection, (newValue) => {
  const allCircles = document.querySelectorAll('.circle')
  allCircles.forEach(element => element.classList.remove('current-in-view'))
  const findedSection = props.sections?.find((value) => value.targetId == newValue)
  const element = document.querySelector(`#scroll-${findedSection?.targetId}`)
  element?.classList.add('current-in-view')
})

</script>

<template>
  <div class="sidebar">
    <div
      v-for="(section, index) in props.sections"
      :key="index"
      :id="`scroll-${section.targetId}`"
      class="circle"
      @mouseover="showTooltip(index)"
      @click="scrollToSection(section.targetId)"
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

.current-in-view {
  transform: scaleY(2);
}
</style>
