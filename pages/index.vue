<template>
  <div class="relative min-h-screen bg-gray-950 text-white overflow-hidden font-sans">
    <!-- Particles Background -->
    <NuxtParticles id="tsparticles" :options="options" @load="onLoad" class="absolute inset-0 z-0 opacity-50" />

    <!-- Main Content -->
    <div class="relative z-10">
      <!-- Hero Section -->
      <section class="container mx-auto px-4 py-20 md:py-32 text-center">
        <img src="/images/avaa.png" alt="Avatar" class="mx-auto w-28 h-28 rounded-full mb-6 border-4 border-indigo-500 shadow-xl" />
        <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
          Hey, I'm <span class="text-indigo-400">Bakhtiyor</span>
        </h1>
        <h2 class="text-2xl md:text-3xl font-medium mb-6">
          <span id="element" ref="typingElement" class="border-r-2 border-indigo-400 pr-2 animate-pulse"></span>
        </h2>
        <div class="flex justify-center space-x-6">
          <a href="https://t.me/odilovicc" target="_blank" class="hover:scale-110 transition-transform duration-300">
            <AppIcon icon="telegram" class="w-8 h-8 text-indigo-300 hover:text-indigo-200" />
          </a>
          <a href="https://instagram.com/odilovicc__" target="_blank" class="hover:scale-110 transition-transform duration-300">
            <AppIcon icon="instagram" class="w-8 h-8 text-indigo-300 hover:text-indigo-200" />
          </a>
          <a href="https://github.com/odilovicc" target="_blank" class="hover:scale-110 transition-transform duration-300">
            <AppIcon icon="github" class="w-8 h-8 text-indigo-300 hover:text-indigo-200" />
          </a>
        </div>
        <a href="#contact" class="mt-8 inline-block bg-indigo-500 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-indigo-600 transition-colors">
          Hire Me
        </a>
      </section>

      <!-- Experience Section -->
      <section class="container mx-auto px-4 py-16 bg-gray-900/50">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-12">Experience</h2>
        <div class="max-w-3xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg">
          <h3 class="text-2xl font-semibold text-indigo-400 mb-2">Software Engineer</h3>
          <p class="text-gray-400 mb-4">2023 - Present | 2+ Years</p>
          <p class="text-gray-300">
            I craft high-performance web apps with <span class="text-indigo-400">Vue</span>, <span class="text-indigo-400">Nuxt</span>, and <span class="text-indigo-400">TypeScript</span>. 
            My focus is on building scalable, user-friendly interfaces that solve real-world problems. 
            From front-end to full-stack, I deliver clean code and seamless experiences.
          </p>
        </div>
      </section>

      <!-- Tech Stack Section -->
      <section class="container mx-auto px-4 py-16">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-12">Tech Stack</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div class="bg-gray-800 p-4 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vuedotjs.svg" alt="Vue" class="w-12 h-12 mx-auto mb-2 filter invert" />
            <p class="text-gray-300">Vue.js</p>
          </div>
          <div class="bg-gray-800 p-4 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nuxtdotjs.svg" alt="Nuxt" class="w-12 h-12 mx-auto mb-2 filter invert" />
            <p class="text-gray-300">Nuxt.js</p>
          </div>
          <div class="bg-gray-800 p-4 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/typescript.svg" alt="TypeScript" class="w-12 h-12 mx-auto mb-2 filter invert" />
            <p class="text-gray-300">TypeScript</p>
          </div>
          <div class="bg-gray-800 p-4 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg" alt="Tailwind" class="w-12 h-12 mx-auto mb-2 filter invert" />
            <p class="text-gray-300">Tailwind CSS</p>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section class="container mx-auto px-4 py-16 bg-gray-900/50">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-12">Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div class="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-semibold text-indigo-400 mb-2">Portfolio Website</h3>
            <p class="text-gray-400 mb-4">
              A sleek personal portfolio built with Nuxt and Tailwind CSS to showcase my skills and projects.
            </p>
            <a href="https://baxti.uz" target="_blank" class="text-indigo-400 hover:text-indigo-300 transition-colors">
              View Project →
            </a>
          </div>
          <div class="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-semibold text-indigo-400 mb-2">Task Management App</h3>
            <p class="text-gray-400 mb-4">
              A real-time task manager built with Vue and Firebase, designed for seamless team collaboration.
            </p>
            <a href="#" target="_blank" class="text-indigo-400 hover:text-indigo-300 transition-colors">
              View Project →
            </a>
          </div>
        </div>
      </section>

      <!-- Contact CTA -->
      <section id="contact" class="container mx-auto px-4 py-16 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Awesome</h2>
        <p class="text-gray-400 max-w-xl mx-auto mb-8">
          Got a project in mind? I'm ready to bring your ideas to life with clean code and cutting-edge tech.
        </p>
        <a href="mailto:your.email@example.com" class="inline-block bg-indigo-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-600 transition-colors">
          Contact Me
        </a>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Container } from '@tsparticles/engine'

const typed = useTypedJs()
const typingElement = ref()

const options = {
  background: {
    color: '#0A0F1E', // Deep dark blue for Dribbble-inspired vibe
  },
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: '#6366F1', // Indigo to match theme
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 0.5,
      random: true,
    },
    size: {
      value: 2,
      random: true,
    },
    links: {
      enable: true,
      distance: 100,
      color: '#6366F1',
      opacity: 0.3,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: 'none',
      random: false,
      straight: false,
      outModes: 'out',
      attract: {
        enable: false,
      },
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: 'grab',
      },
      onClick: {
        enable: true,
        mode: 'push',
      },
    },
    modes: {
      grab: {
        distance: 150,
        links: {
          opacity: 0.4,
        },
      },
      push: {
        quantity: 2,
      },
    },
  },
  detectRetina: true,
}

const onLoad = (container: Container) => {
  console.log('Particles loaded', container)
}

onMounted(() => {
  typed('#element', {
    strings: ['Software Engineer', 'Web Developer', 'Problem Solver'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  })

  // Add scroll animation for sections
  const sections = document.querySelectorAll('section')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
        }
      })
    },
    { threshold: 0.1 }
  )
  sections.forEach((section) => observer.observe(section))
})

useHead({
  title: 'Bakhtiyor | Software Engineer',
  link: [
    { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap' }
  ]
})
</script>

<style scoped>
/* Animation for sections */
section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.animate-fade-in {
  opacity: 1;
  transform: translateY(0);
}

/* Typing cursor animation */
@keyframes pulse {
  0%, 100% { border-color: transparent; }
  50% { border-color: #6366F1; }
}
</style>