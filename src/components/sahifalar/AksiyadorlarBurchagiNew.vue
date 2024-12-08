<template>
  <div class="container">
    <h1 class="title">Hurmatli Aksiyadorlar!</h1>

    <p class="description">
    O‘zbekiston Respublikasining “Qimmatli qog‘ozlar bozori to‘g‘risida”gi va “Aksiyadorlik jamiyatlari hamda aksiyadorlarning huquqlarini himoya qilish to‘g‘risida”gi qonunlarida nazarda tutilgan huquqlaringiz qimmatli qog‘ozlar bozorining boshqa ishtirokchilari tomonidan buzilgan taqdirda, O‘zbekiston Respublikasi Hukumatini muvofiqlashtirish va rivojlantirish markaziga murojaat qiling. Qimmatli qog‘ozlar bozori yoki Toshkent shahar hududiy boshqarmasi.
    <br><br>
  <b>Yoki pochta manziliga murojaat yuboring:</b>
    </p>
    <div class="management-section">
      <h2 class="subtitle">Markaziy apparat/Toshkent shahar hokimligi</h2>
      <ul class="management-list">
        <li>100047, Toshkent sh. Buxoro, 10 ko`ch.</li>
      </ul>
      <br>
      <h2 class="subtitle">Qimmatli qog‘ozlar bozorini muvofiqlashtirish va rivojlantirish markazi bosh direktorining virtual qabulxonasi</h2>
      <ul class="management-list">
        <li>www.online.csm.gov.uz</li>
      </ul>

    <br>
      <h2 class="subtitle">Ishonch telefoni:</h2>
      <ul class="management-list">
        <li>(+998 71) 232-07-38</li>
        <li>(+998 71) 232-41-72</li>
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