<template>
  <NuxtParticles id="tsparticles" :options="options" @load="onLoad" />
  <div class="dashboard-wrapper">
    <div class="dashboard-socials">
      <a href="https://t.me/odilovicc" target="_blank"><AppIcon icon="telegram"/></a>
      <a href="https://instagram.com/odilovicc__" target="_blank"><AppIcon icon="instagram"/></a>
      <a href="https://github.com/odilovicc" target="_blank"><AppIcon icon="github"/></a>
    </div>
    <div class="dashboard-title">
      <img src="/images/avaa.png"/>
      <h1>Hello. My name is <span class="dashboard-title-name">Bakhtiyor</span> and I am</h1>
      <div class="dashboard-typing">
        <h1 id="element"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Container } from '@tsparticles/engine'

const typed = useTypedJs()


const options = {
  background: {
    color: "#13293D", // Цвет фона
  },
  particles: {
    number: {
      value: 80, // Количество частиц
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff", // Цвет частиц
    },
    shape: {
      type: "circle", // Форма частиц
    },
    opacity: {
      value: 0.7,
      random: true,
    },
    size: {
      value: 3,
      random: true,
    },
    links: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.5,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      random: false,
      straight: false,
      outModes: "out",
      attract: {
        enable: false,
      },
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: ["grab", "repulse"], // Захват и отталкивание при наведении
      },
      onClick: {
        enable: true,
        mode: "push", // Добавление новых частиц при клике
      },
    },
    modes: {
      grab: {
        distance: 200,
        links: {
          opacity: 0.6,
        },
      },
      repulse: {
        distance: 120,
        duration: 0.4,
      },
      push: {
        quantity: 4,
      },
    },
  },
  detectRetina: true,
}

const onLoad = (container: Container) => {
  console.log("Particles loaded", container)
}

onMounted(() => {
  typed('#element', {
    strings: ['Software Engineer', 'Gamer', 'English learner'],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
  })
})
</script>

<style src="~/assets/stylus/pages/index.styl">

</style>