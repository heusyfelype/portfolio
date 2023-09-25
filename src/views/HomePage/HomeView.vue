<script setup lang="ts">
import CustomScroll from '../../components/CustomScroll/CustomScroll.vue'
import type { Sections } from '@/components/CustomScroll/interfaces'
import ScrollableContainer from '@/components/ScrollabeContainer/ScrollabeContainer.vue'
import ContactSection from '@/components/Sections/ContactSection.vue'
import ProfileSection from '@/components/Sections/ProfileSection.vue'
import ProjectsSection from '@/components/Sections/ProjectsSection.vue'
import { ref } from 'vue'

const sections: Sections = [
  { name: 'Primeira seção', targetId: 'first-section' },
  { name: 'Segunda seção', targetId: 'second-section' },
  { name: 'Terceira seção', targetId: 'third-section' }
]

let activeSection = ref('')

const handleSectionIdentifier = (value: String) => {
  activeSection.value = new String(value).toString()
}
</script>

<template>
  <ScrollableContainer>
    <CustomScroll :sections="sections" :activeSection="activeSection" />
    <ProfileSection @section-identifier="handleSectionIdentifier"/>
    <ProjectsSection @section-identifier="handleSectionIdentifier" />
    <ContactSection @section-identifier="handleSectionIdentifier" />
  </ScrollableContainer>
</template>

<style>
section {
  height: 100vh;

  scroll-snap-align: start;
  scroll-snap-stop: always;
  text-decoration-color: aliceblue;
}

.first-section {
  padding-top: 25px;
  background-color: burlywood;
}

.second-section {
  background-color: aquamarine;
}

.third-section {
  background-color: rgba(229, 24, 65, 0.1);
}
</style>
