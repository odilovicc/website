<template>
  <div class="relative min-h-screen bg-gray-950 text-white overflow-hidden font-sans">
    <!-- Particles Background -->
    <NuxtParticles id="tsparticles" :options="options" @load="onLoad" class="absolute inset-0 z-0 opacity-50" />

    <!-- Main Content -->
    <div class="relative z-10">
      <!-- Hero Section -->
      <section class="container mx-auto px-4 py-20 md:py-32 text-center">
        <img src="/images/avaa.png" alt="Avatar"
          class="mx-auto w-28 h-28 rounded-full mb-6 border-4 border-indigo-500 shadow-xl" />
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
          <a href="https://instagram.com/odilovicc__" target="_blank"
            class="hover:scale-110 transition-transform duration-300">
            <AppIcon icon="instagram" class="w-8 h-8 text-indigo-300 hover:text-indigo-200" />
          </a>
          <a href="https://github.com/odilovicc" target="_blank"
            class="hover:scale-110 transition-transform duration-300">
            <AppIcon icon="github" class="w-8 h-8 text-indigo-300 hover:text-indigo-200" />
          </a>
        </div>
        <a href="#contact"
          class="mt-8 inline-block bg-indigo-500 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-indigo-600 transition-colors">
          Hire Me
        </a>
      </section>

      <!-- Resume Section -->
      <section id="portfolio-request" class="container mx-auto px-4 py-16 bg-gray-900/60 rounded-2xl shadow-xl my-12 max-w-4xl">
        <div class="flex flex-col md:flex-row items-center md:items-start gap-8">
          <img src="/images/avaa.png" alt="Baxtiyor Odilbekovich"
            class="w-28 h-28 rounded-full border-4 border-indigo-500 shadow-lg mb-4 md:mb-0" />
          <div class="flex-1">
            <h2 class="text-3xl md:text-4xl font-bold mb-2">Baxtiyor Odilbekovich</h2>
            <p class="text-indigo-400 text-lg font-semibold mb-1">Frontend Developer (Vue / Nuxt / TypeScript)</p>
            <p class="text-gray-400 mb-2">Tashkent, Uzbekistan</p>
            <div class="flex flex-wrap items-center gap-4 mb-4">
              <a href="mailto:baxtiyor.dev@mail.ru" class="flex items-center gap-2 text-gray-300 hover:text-indigo-400">
                <AppIcon icon="mail" class="w-5 h-5" /> baxtiyor.dev@mail.ru
              </a>
              <a href="tel:+998889008577" class="flex items-center gap-2 text-gray-300 hover:text-indigo-400">
                <AppIcon icon="phone" class="w-5 h-5" /> +998 88 900 85 77
              </a>
              <a href="https://baxti.uz" target="_blank" class="flex items-center gap-2 text-gray-300 hover:text-indigo-400">
                <AppIcon icon="link" class="w-5 h-5" /> baxti.uz
              </a>
              <a href="https://github.com/odilovicc" target="_blank" class="flex items-center gap-2 text-gray-300 hover:text-indigo-400">
                <AppIcon icon="github" class="w-5 h-5" /> github.com/odilovicc
              </a>
            </div>
            <div class="flex flex-col md:flex-row gap-4 mb-4">
              <a href="#portfolio-request"
                class="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold text-base transition-colors">
                Request portfolio
              </a>
              <a href="/Resume.pdf" download
                class="bg-gray-800 hover:bg-gray-700 text-indigo-300 px-6 py-2 rounded-full font-semibold text-base border border-indigo-500 transition-colors">
                Download CV
              </a>
            </div>
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-8 mt-8">
          <!-- About Me -->
          <div>
            <h3 class="text-xl font-bold mb-2 flex items-center gap-2">
              <AppIcon icon="user" class="w-5 h-5 text-indigo-400" /> About Me
            </h3>
            <p class="text-gray-300 mb-2">
              Frontend developer with 2+ years of commercial experience. I specialize in building responsive and productive web apps using Vue/Nuxt, TypeScript, and SCSS. Clean modular code, CI/CD, REST API, SSR, VPS deploy.
            </p>
            <div class="flex flex-wrap gap-2 text-sm text-gray-400">
              <span>Russian (native)</span>
              <span>• English (C1)</span>
              <span>• Uzbek (native)</span>
            </div>
          </div>
          <!-- Tech Stack -->
          <div>
            <h3 class="text-xl font-bold mb-2 flex items-center gap-2">
              <AppIcon icon="code" class="w-5 h-5 text-indigo-400" /> Tech Stack
            </h3>
            <div class="flex flex-wrap gap-2">
              <span class="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm">TypeScript</span>
              <span class="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm">Vue 3</span>
              <span class="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm">Nuxt 3</span>
              <span class="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm">TailwindCSS</span>
              <span class="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm">SCSS</span>
              <span class="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm">Pinia</span>
              <span class="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm">Vite</span>
              <span class="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm">Git</span>
              <span class="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm">REST API</span>
              <span class="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm">SSR</span>
              <span class="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm">SEO</span>
              <span class="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm">CI/CD</span>
              <span class="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm">Vercel</span>
              <span class="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm">Nginx</span>
            </div>
          </div>
          <!-- Services -->
          <div>
            <h3 class="text-xl font-bold mb-2 flex items-center gap-2">
              <AppIcon icon="briefcase" class="w-5 h-5 text-indigo-400" /> Services
            </h3>
            <ul class="text-gray-300 list-disc list-inside mb-2">
              <li>Freelancer & self-employed: custom websites, CRM, ERP systems, landing pages</li>
              <li>REST API integration, authentication, error handling, form validation</li>
              <li>SEO optimization, SSR, deploy to Vercel & VPS</li>
              <li>Project examples — on request</li>
            </ul>
          </div>
          <!-- Contact -->
          <div>
            <h3 class="text-xl font-bold mb-2 flex items-center gap-2">
              <AppIcon icon="mail" class="w-5 h-5 text-indigo-400" /> Contact
            </h3>
            <p class="text-gray-300 mb-2">Open for new projects and collaborations.</p>
            <a href="mailto:baxtiyor.dev@mail.ru"
              class="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-full font-semibold text-base transition-colors">
              Contact me
            </a>
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <section class="container mx-auto px-4 py-16 bg-gray-900/50">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-12">Experience</h2>
        <div class="max-w-3xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg">
          <h3 class="text-2xl font-semibold text-indigo-400 mb-2">Software Engineer</h3>
          <p class="text-gray-400 mb-4">2023 - Present | 2 Years and 2 month</p>
          <p class="text-gray-300">
            I craft high-performance web apps with <span class="text-indigo-400">Vue</span>, <span
              class="text-indigo-400">Nuxt</span>, and <span class="text-indigo-400">TypeScript</span>.
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
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vuedotjs.svg" alt="Vue"
              class="w-12 h-12 mx-auto mb-2 filter invert" />
            <p class="text-gray-300">Vue.js</p>
          </div>
          <div class="bg-gray-800 p-4 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nuxtdotjs.svg" alt="Nuxt"
              class="w-12 h-12 mx-auto mb-2 filter invert" />
            <p class="text-gray-300">Nuxt.js</p>
          </div>
          <div class="bg-gray-800 p-4 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/typescript.svg" alt="TypeScript"
              class="w-12 h-12 mx-auto mb-2 filter invert" />
            <p class="text-gray-300">TypeScript</p>
          </div>
          <div class="bg-gray-800 p-4 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg" alt="Tailwind"
              class="w-12 h-12 mx-auto mb-2 filter invert" />
            <p class="text-gray-300">Tailwind CSS</p>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section class="container mx-auto px-4 py-16 bg-gray-900/50">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-12">Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div class="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-semibold text-indigo-400 mb-2">IELTS Preperation</h3>
            <p class="text-gray-400 mb-4">
              A comprehensive platform for IELTS preparation, featuring practice tests, study materials, and progress
              tracking.
            </p>
            <div class="flex items-center gap-2">
              <a href="https://ielts.baxti.uz" target="_blank"
                class="text-indigo-400 hover:text-indigo-300 transition-colors">
                View Project →
              </a>
              <a href="https://github.com/odilovicc/ielts-prepare-v2" target="_blank"
                class="text-indigo-400 hover:text-indigo-300 transition-colors">
                View Github Project →
              </a>
            </div>
          </div>
          <div class="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-semibold text-indigo-400 mb-2">Check CV with AI</h3>
            <p class="text-gray-400 mb-4">
              An AI-powered tool that analyzes CVs and provides feedback to help users improve their resumes and
              increase their chances of landing a job.
            </p>
            <div class="flex items-center gap-2">
              <a href="https://check-cv.baxti.uz" target="_blank"
                class="text-indigo-400 hover:text-indigo-300 transition-colors">
                View Project →
              </a>
              <a href="https://github.com/odilovicc/ai-vibe-coding" target="_blank"
                class="text-indigo-400 hover:text-indigo-300 transition-colors">
                View Github Project →
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact CTA -->
      <section id="contact" class="container mx-auto px-4 py-16 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Awesome</h2>
        <p class="text-gray-400 max-w-xl mx-auto mb-8">
          Got a project in mind? I'm ready to bring your ideas to life with clean code and cutting-edge tech.
        </p>
        <a href="mailto:your.email@example.com"
          class="inline-block bg-indigo-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-600 transition-colors">
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

  0%,
  100% {
    border-color: transparent;
  }

  50% {
    border-color: #6366F1;
  }
}
</style>