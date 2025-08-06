<template>
  <UApp>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-4">
            <img src="/logo.png" alt="Inspirilab" class="h-8 w-auto" />
          </div>
          <div class="hidden md:flex items-center space-x-8">
            <a href="#home" class="text-gray-300 hover:text-[#23b573] transition-colors">Home</a>
            <a href="#about" class="text-gray-300 hover:text-[#23b573] transition-colors">About</a>
            <a href="#technologies" class="text-gray-300 hover:text-[#23b573] transition-colors">Technologies</a>
          </div>
          <UButton color="primary" variant="solid" class="bg-[#23b573] hover:bg-[#1ea065]">
            Get Started
          </UButton>
        </div>
      </div>
    </nav>

    <!-- Hero Section with Parallax -->
    <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Parallax Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-[#23b573]/10 to-white"></div>
      <div class="absolute inset-0 opacity-50" style="background-image: radial-gradient(circle at 30px 30px, #23b573 2px, transparent 2px); background-size: 60px 60px;"></div>
      
      <!-- Floating Elements -->
      <div class="absolute top-20 left-20 w-32 h-32 bg-[#23b573]/20 rounded-full blur-xl animate-pulse"></div>
      <div class="absolute bottom-20 right-20 w-48 h-48 bg-[#23b573]/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div class="absolute top-1/2 left-1/4 w-24 h-24 bg-[#23b573]/15 rounded-full blur-lg animate-bounce"></div>
      
      <!-- Main Content -->
      <div class="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div class="mb-8">
          <img src="/logo.png" alt="Inspirilab" class="h-24 w-auto mx-auto mb-8 animate-fade-in" />
        </div>
        <h1 class="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Welcome to
          <span class="text-[#23b573] block">Inspirilab</span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Where innovation meets inspiration. We create cutting-edge solutions that transform ideas into reality.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <UButton size="lg" color="primary" variant="solid" class="bg-[#23b573] hover:bg-[#1ea065] text-lg px-8 py-4">
            Explore Our Work
          </UButton>
          <UButton size="lg" variant="outline" class="border-[#23b573] text-[#23b573] hover:bg-[#23b573] hover:text-white text-lg px-8 py-4">
            Learn More
          </UButton>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="w-6 h-10 border-2 border-[#23b573] rounded-full flex justify-center">
          <div class="w-1 h-3 bg-[#23b573] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-gray-50 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span class="text-[#23b573]">Inspirilab</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a team of passionate innovators dedicated to creating solutions that inspire and transform.
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <UCard class="text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-16 h-16 bg-[#23b573]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <UIcon name="i-heroicons-light-bulb" class="w-8 h-8 text-[#23b573]" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
            <p class="text-gray-600">Pushing boundaries and exploring new possibilities in every project we undertake.</p>
          </UCard>
          
          <UCard class="text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-16 h-16 bg-[#23b573]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <UIcon name="i-heroicons-cog-6-tooth" class="w-8 h-8 text-[#23b573]" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Technology</h3>
            <p class="text-gray-600">Leveraging cutting-edge technology to create solutions that make a difference.</p>
          </UCard>
          
          <UCard class="text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-16 h-16 bg-[#23b573]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <UIcon name="i-heroicons-heart" class="w-8 h-8 text-[#23b573]" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Passion</h3>
            <p class="text-gray-600">Driven by passion and commitment to excellence in everything we do.</p>
          </UCard>
        </div>
      </div>
    </section>

    <!-- Technologies Section -->
    <section id="technologies" class="py-20 bg-gray-50 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span class="text-[#23b573]">Technologies</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Exploring cutting-edge technologies that drive innovation and transformation.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <UCard class="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-12 h-12 bg-[#23b573]/10 rounded-lg flex items-center justify-center mb-4">
              <UIcon name="i-heroicons-cpu-chip" class="w-6 h-6 text-[#23b573]" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">AI</h3>
            <p class="text-gray-600 text-sm">Artificial Intelligence - Machine learning and neural networks that enable computers to learn, reason, and make decisions like humans.</p>
          </UCard>
          
          <UCard class="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-12 h-12 bg-[#23b573]/10 rounded-lg flex items-center justify-center mb-4">
              <UIcon name="i-heroicons-shield-check" class="w-6 h-6 text-[#23b573]" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">DeAI</h3>
            <p class="text-gray-600 text-sm">Decentralized AI - AI systems distributed across blockchain networks, ensuring transparency and eliminating single points of failure.</p>
          </UCard>
          
          <UCard class="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-12 h-12 bg-[#23b573]/10 rounded-lg flex items-center justify-center mb-4">
              <UIcon name="i-heroicons-cube" class="w-6 h-6 text-[#23b573]" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Blockchain</h3>
            <p class="text-gray-600 text-sm">Distributed ledger technology that creates secure, transparent, and immutable records of transactions across a network.</p>
          </UCard>
          
          <UCard class="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-12 h-12 bg-[#23b573]/10 rounded-lg flex items-center justify-center mb-4">
              <UIcon name="i-heroicons-currency-dollar" class="w-6 h-6 text-[#23b573]" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">DeFi</h3>
            <p class="text-gray-600 text-sm">Decentralized Finance - Financial services built on blockchain technology, eliminating intermediaries and enabling peer-to-peer transactions.</p>
          </UCard>
          
          <UCard class="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-12 h-12 bg-[#23b573]/10 rounded-lg flex items-center justify-center mb-4">
              <UIcon name="i-heroicons-cube-transparent" class="w-6 h-6 text-[#23b573]" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Ethereum</h3>
            <p class="text-gray-600 text-sm">A decentralized platform that enables smart contracts and decentralized applications (dApps) to be built and run without downtime.</p>
          </UCard>
          
          <UCard class="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-12 h-12 bg-[#23b573]/10 rounded-lg flex items-center justify-center mb-4">
              <UIcon name="i-heroicons-currency-dollar" class="w-6 h-6 text-[#23b573]" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Bitcoin</h3>
            <p class="text-gray-600 text-sm">The first and most well-known cryptocurrency, operating on a decentralized peer-to-peer network without central authority.</p>
          </UCard>
        </div>

        <!-- Partner Projects Section -->
        <div class="text-center">
          <h3 class="text-2xl font-bold text-gray-900 mb-8">Our Flagship Open-Source Partners</h3>
          <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <UCard class="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div class="w-16 h-16 bg-[#23b573]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <UIcon name="i-heroicons-globe-alt" class="w-8 h-8 text-[#23b573]" />
              </div>
              <h4 class="text-lg font-semibold text-gray-900 mb-2">MOR.org</h4>
              <p class="text-gray-600 text-sm mb-4">Our flagship open-source project focused on decentralized AI and blockchain solutions.</p>
              <a href="https://mor.org" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-[#23b573] hover:text-[#1ea065] transition-colors">
                Visit Project
                <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-4 h-4 ml-2" />
              </a>
            </UCard>
            
            <UCard class="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div class="w-16 h-16 bg-[#23b573]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <UIcon name="i-heroicons-globe-alt" class="w-8 h-8 text-[#23b573]" />
              </div>
              <h4 class="text-lg font-semibold text-gray-900 mb-2">Morpheus.asia</h4>
              <p class="text-gray-600 text-sm mb-4">Advanced AI and blockchain infrastructure for the Asia-Pacific region.</p>
              <a href="https://morpheus.asia" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-[#23b573] hover:text-[#1ea065] transition-colors">
                Visit Project
                <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-4 h-4 ml-2" />
              </a>
            </UCard>
          </div>
        </div>
      </div>
    </section>
    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="Inspirilab" class="h-8 w-auto" />
            </div>
            <p class="text-gray-400 mb-4">
              Where innovation meets inspiration. Creating solutions that transform ideas into reality.
            </p>
            <div class="text-gray-400 text-sm">
              <p class="mb-1">Level 3, Wisma Suria</p>
              <p class="mb-1">Jalan Teknokrat 6</p>
              <p class="mb-1">Cyberjaya 63000</p>
              <p>Malaysia</p>
            </div>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Services</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-[#23b573] transition-colors">Web Development</a></li>
              <li><a href="#" class="hover:text-[#23b573] transition-colors">Mobile Apps</a></li>
              <li><a href="#" class="hover:text-[#23b573] transition-colors">Data Analytics</a></li>
              <li><a href="#" class="hover:text-[#23b573] transition-colors">Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Company</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-[#23b573] transition-colors">About Us</a></li>
              <li><a href="#" class="hover:text-[#23b573] transition-colors">Our Team</a></li>
              <li><a href="#" class="hover:text-[#23b573] transition-colors">Careers</a></li>
              <li><a href="#" class="hover:text-[#23b573] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Connect</h3>
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 bg-[#23b573] rounded-full flex items-center justify-center hover:bg-[#1ea065] transition-colors">
                <UIcon name="i-simple-icons-twitter" class="w-5 h-5" />
              </a>
              <a href="#" class="w-10 h-10 bg-[#23b573] rounded-full flex items-center justify-center hover:bg-[#1ea065] transition-colors">
                <UIcon name="i-simple-icons-linkedin" class="w-5 h-5" />
              </a>
              <a href="#" class="w-10 h-10 bg-[#23b573] rounded-full flex items-center justify-center hover:bg-[#1ea065] transition-colors">
                <UIcon name="i-simple-icons-github" class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Inspirilab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</UApp>
</template>

<style scoped>
/* Additional component-specific styles can go here */
</style>
