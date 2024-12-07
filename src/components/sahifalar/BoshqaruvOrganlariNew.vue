<template>
  <div class="container">
    <h1 class="title">Samarali boshqaruv kompaniyaning jadal rivojlanish kalitidir</h1>

    <p class="description">
      "O'zbekiston pochtasi" AJ rahbariyati zamon bilan hamnafas bo'lib, aholiga sifatli xizmat ko'rsatishni ta'minlash maqsadida xalqaro tajribadan foydalanib, ilg'or texnologiyalarni joriy qilmoqda.
    </p>

    <div class="management-section">
      <h2 class="subtitle">Boshqaruv organlari:</h2>
      <ul class="management-list">
        <li>Ijro etuvchi organlar</li>
        <li>Kuzatuv kengashi</li>
        <li>Taftish komissiyasi</li>
        <li>Ichki audit xizmati</li>
        <li>Korporativ maslahatchi</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f8f9ff;
  border-radius: 8px;
  font-family: system-ui, -apple-system, sans-serif;
}

.title {
  color: #1a47b8;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  line-height: 1.3;
  font-weight: 600;
}

.description {
  color: #333;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.subtitle {
  color: #333;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.management-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.management-list li {
  color: #333;
  font-size: 1.1rem;
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;
  transition: transform 0.2s ease;
}

.management-list li:hover {
  transform: translateX(5px);
}

.management-list li::before {
  content: "-";
  position: absolute;
  left: 0;
  color: #1a47b8;
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
    margin: 1rem;
  }

  .title {
    font-size: 1.5rem;
  }

  .description, .management-list li {
    font-size: 1rem;
  }
}
</style>