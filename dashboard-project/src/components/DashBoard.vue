<template>
  <div class="dashboard">
    <div class="menu-toggle" @click="toggleMenu" :class="{ 'fixed-icon' : isMenuOpen }">
      <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
    </div>
    <aside class="sidebar" :class="{ 'sidebar-open' : isMenuOpen }">
        <h1>Menu Principal</h1>
        <ul class="list-menu">
          <li class="list">Visão Geral</li>
          <li class="list">Vendas</li>
          <li class="list">Clientes</li>
          <li class="list">Produtos</li>
          <li class="list">Configurações</li>
        </ul>
    </aside>
    <main class="content">
      <section class="overview">
        <h2>Visão Geral</h2>
        <div class="widget">
          <h3>Vendas Recentes</h3>
          <p>R$ 12.000,00</p>
        </div>
        <div class="widget">
          <h3>Novos Clientes</h3>
          <p>10</p>
        </div>
        <div class="widget chart">
          <h3>Vendas por mês</h3>
        </div>
      </section>
      <section class="sales">
        <h2>Vendas</h2>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'DashBoard',
  data() {
    return {
      isMenuOpen: false
    }
  },

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  },

  closeMenu() {
    this.isMenuOpen = false;
  }
}
</script>


<style scoped>
body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
}

.dashboard {
  display: flex;
  min-height: 100vh;
}

.menu-toggle {
  position: fixed;
  top: 20px;
  left: 20px;
  cursor: pointer;
  font-size: 20px;
  z-index: 2;
  transition: left 0.3s ease, right 0.3s ease;
}

.fixed-icon {
    position: fixed;
    right: 20px;
    top: 20px;
    left: 175px;
}

.menu-toggle.fixed-icon {
    transition: left 0.3s ease, right 0.3s ease;
}

.menu-toggle i {
    transition: transform 0.3s ease;
    /* Adiciona animação ao ícone do menu */
}

.menu-toggle.open {
    transform: rotate(90deg);
    /* Rotação do ícone quando o menu está aberto */
}

.sidebar {
    width: 200px;
    background-color: #f8f9fa;
    height: 100vh;
    position: fixed;
    top: 0;
    left: -200px;
    /* Inicia fechado */
    padding-top: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    transition: left 0.3s ease;
    z-index: 1;
}

.title-menu h1 {
    font-weight: bold;
    padding-left: 10px;
    padding-top: 0;
    color: #5E2C8C;
    font-size: 1.8em;
}

.list-menu {
    margin-top: 50px;
}

.list {
    padding-left: 10px;
    cursor: pointer;
}

.list:hover {
    background-color: #c386fc;
    color: white;
    transition: 0.3s ease;
    width: 100%;
}

.list-1 {
    padding-left: 10px;
    cursor: pointer;
}

.list-1:hover {
    background-color: red;
    color: white;
    transition: 0.3s ease;
    width: 100%;
}

.sidebar-open {
    left: 0;
}

.list-menu {
    list-style: none;
    padding: 0;
    padding-top: 0;
}

.content {
  flex: 1;
  padding: 20px;
}

.content h2 {
  margin-bottom: 20px;
}

.widget {
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
}

.widget h3 {
  margin-bottom: 10px;
}

/* Estilo inicial para o gráfico (substitua pelo código da biblioteca escolhida) */
.chart {
  width: 100%;
  height: 300px;
}
</style>
