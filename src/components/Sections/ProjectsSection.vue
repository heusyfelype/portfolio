<script setup lang="ts">
import apis from '@/utils/apis'
import { onMounted } from 'vue'

const emit = defineEmits()
const dataFixed = { sectionIdentifier: 'second-section' }

const callBackOnScroll: IntersectionObserverCallback = (
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) Emmiter(dataFixed.sectionIdentifier)
  })
}

const Emmiter = (identifier: String) => {
  emit('section-identifier', dataFixed.sectionIdentifier)
}

onMounted(() => {
  const observer = new IntersectionObserver(
    callBackOnScroll,
    apis.getIntersectionObserverOptions(`#${dataFixed.sectionIdentifier}`)
  )
  observer.observe(document.querySelector(`#${dataFixed.sectionIdentifier}`) as Element)
})
</script>

<template>
  <section :id="dataFixed.sectionIdentifier" :class="dataFixed.sectionIdentifier">
    Segunda seção
  </section>
</template>

<style scoped></style>
