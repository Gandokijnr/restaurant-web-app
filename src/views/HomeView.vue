<template>
  <main>
  <div>
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(slide, index) in slides" :key="index" :class="{ 'carousel-item': true, 'active': index === 0 }">
          <img :src="slide.image" class="d-block w-100" :alt="'Slide ' + (index + 1)">
          <div class="carousel-caption d-flex  flex-column h-100 d-flex align-items-center justify-content-center text-center">
            <h5>First slide label</h5>
            <h3>{{ slide.caption }}</h3>
            <button class="btn text-white rounded-0 mt-3">Order Now</button>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
    <div class="container-fluid row d-flex justify-content-center align-items-center  gap-3 row-12 mt-5">
      <div class="d-flex align-items-baseline gap-3 col-4 flex-column bg-light p-3">
        <div class="d-flex flex-row gap-3">
        <div>
          <img src="../assets/services-icon1.png" alt="">
        </div>
        <div>
          <p class="fw-bold fs-4">Lorem ipsum.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis inventore aliquid dicta.</p>
        </div>
        </div>
        <!-----------another card------------->
        <div class="d-flex flex-row gap-3">
        <div>
          <img src="../assets/services-icon2.png" alt="">
        </div>
        <div>
          <p class="fw-bold fs-4">Lorem ipsum.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis inventore aliquid dicta.</p>
        </div>
        </div>
        <!-----------another card------------->

        <div class="d-flex flex-row gap-3">
        <div>
          <img src="../assets/services-icon3.png" alt="">
        </div>
        <div>
          <p class="fw-bold fs-4">Lorem ipsum.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis inventore aliquid dicta.</p>
        </div>
      </div>
      </div>
      <div class="col-md-5">
        <h3 class="why-choose-us-1 fs-1">Why Choose us ?</h3>
        <hr />
        <h3 class="why-choose-us fs-1"> For many reasons</h3>
        <p>
            Proin scelerisque felis quam, a venenatis magna vestibulum at. Praesent sollicitudin nibh diam, eget commodo tellus tempor egestas. Ut sed tincidunt purus. Aliquam 
            accumsan ipsum dolor, tincidunt hendrerit nunc maximus et. Sed condimentum iaculis semper. Proin semper tellus in neque ultrices convallis. Mauris feugiat quam sit 
            amet turpis aliquet. Integer et neque accumsan, consectetur tincidunt hendrerit nunc maximus et urna in, commodo massa non venenatis dolor volutpat. Suspendisse hendrerit 
            lobortis sapien, in finibus lacus ullamcorper vel.
        </p>
        <p> non ligula vitae libero malesuada fermentum. Phasellus non tempus augue. Duis sodales turpis ac aliquam varius. 
            Nullam pharetra ante tempor erat aliquet Integer et neque accumsan, consectetur urna in, commodo massa.
        </p>
          <button class="btn rounded-0 text-white">Learn More</button>
      </div>
    </div>
    <hr class="mt-5" />
  </main>
  <section class="menu-section mt-5">
    <h2 class="text-center menu-text p-3 text-white">Our Menu</h2>
  <div class="d-flex align-items-center justify-content-evenly flex-wrap">
  <!-- Breakfast Menu -->
  <div class="menu-items">
    <div class="menu-header d-flex justify-content-around align-items-center flex-wrap mt-5">
      <div class="breakfast-menu d-flex flex-column align-items-center">
        <h3 class="menu-header-title">{{ breakfast.header }}</h3>
        <div class="breakfast-menu-items mt-5 d-flex align-items-center align-content-center flex-column gap-5">
          <div v-for="(item, itemIndex) in breakfast.items" :key="itemIndex" class="menu-card d-flex align-items-center gap-3 w-75 p-3 shadow opacity-75 rounded cursor-pointer">
            <img :src="item.image" :alt="item.caption" class="rounded" style="width: 7rem; height: 7rem;">
            <div class="breakfast-menu-item d-flex">
              <div class="breakfast-menu-item-text">
                <div class="d-flex align-items-center justify-content-between">
                <h3 class="lunch-menu-item-title">{{ item.caption }}</h3>
                <i class="bi bi-balloon-heart-fill fs-2" :class="{ 'text-danger': item.isFavorite }" @click="toggleFavorite('breakfast', itemIndex)"></i>
                </div>
                  <span>{{ item.price }}</span>
                <p class="breakfast-menu-item-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Lunch Menu -->
  <div class="menu-items">
    <div class="menu-header d-flex justify-content-around align-items-center flex-wrap mt-5">
      <div class="lunch-menu d-flex flex-column align-items-center">
        <h3 class="menu-header-title">{{ lunch.header }}</h3>
        <div class="lunch-menu-items mt-5 d-flex align-items-center align-content-center flex-column gap-5">
          <div v-for="(item, itemIndex) in lunch.items" :key="itemIndex" class="menu-card d-flex align-items-center gap-3 w-75 p-3 shadow opacity-75 rounded cursor-pointer">
            <img :src="item.image" :alt="item.caption" class="rounded" style="width: 7rem; height: 7rem;">
            <div class="lunch-menu-item d-flex">
              <div class="lunch-menu-item-text">
                <div class="d-flex align-items-center justify-content-between">
                <h3 class="lunch-menu-item-title">{{ item.caption }}</h3>
                <i class="bi bi-balloon-heart-fill fs-2" :class="{ 'text-danger': item.isFavorite }" @click="toggleFavorite('lunch', itemIndex)"></i>
                </div>
                <span>{{ item.price }}</span>
                <p class="lunch-menu-item-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Dinner Menu -->
  <div class="menu-items">
    <div class="menu-header d-flex justify-content-around align-items-center flex-wrap mt-5">
      <div class="dinner-menu d-flex flex-column align-items-center">
        <h3 class="menu-header-title">{{ dinner.header }}</h3>
        <div class="dinner-menu-items mt-5 d-flex align-items-center align-content-center flex-column gap-5">
          <div @click="toggleFavorite" v-for="(item, itemIndex) in dinner.items" :key="itemIndex" class="menu-card d-flex align-items-center gap-3 w-75 p-3 shadow opacity-75 rounded cursor-pointer">
            <img :src="item.image" :alt="item.caption" class="rounded" style="width: 7rem; height: 7rem;">
            <div class="dinner-menu-item d-flex">
              <div class="dinner-menu-item-text">
                <div class="d-flex align-items-center justify-content-between">
                <h3 class="lunch-menu-item-title">{{ item.caption }}</h3>
                <i class="bi bi-balloon-heart-fill fs-2" :class="{ 'text-danger': item.isFavorite }" @click="toggleFavorite('dinner', itemIndex)"></i>
                </div>
                  <span>{{ item.price }}</span>
                <p class="dinner-menu-item-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      slides: [
        { image: 'src/assets/slider3.jpg', caption: 'There is no sincerer love than the love of food' },
        { image: 'src/assets/slider2.jpg', caption: 'Good Food Good Health' },
        { image: 'src/assets/slider1.jpg', caption: 'You do not need a silver fork to eat good food.' },
        // Add more slides as needed
      ],
      breakfast: {
        header: 'Breakfast',
        items: [
          { image: 'src/assets/breakfast1.jpg', caption: 'Pizza', price: '$45'},
          { image: 'src/assets/breakfast1.jpg', caption: 'Omelette', price: '$45' },
          // Add more breakfast items as needed
        ]
      },
      lunch: {
        header: 'Lunch',
        items: [
          { image: 'src/assets/breakfast1.jpg', caption: 'Salad', price: '$45' },
          { image: 'src/assets/breakfast1.jpg', caption: 'Sandwich', price: '$45' },
          // Add more lunch items as needed
        ]
      },
      dinner: {
        header: 'Dinner',
        items: [
          { image: 'src/assets/breakfast1.jpg', caption: 'Pasta', price: '$45' },
          { image: 'src/assets/breakfast1.jpg', caption: 'Steak', price: '$45' },
          // Add more dinner items as needed
        ]
      },
    };
  },
  mounted() {
    this.initCarousel();
  },
  methods: {
    toggleFavorite(menuType, index) {
  const menu = this[menuType];
  const menuItem = menu.items[index];
  menuItem.isFavorite = !menuItem.isFavorite;

  const itemName = menuItem.caption;

  if (menuItem.isFavorite) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${itemName} added to favorites`,
      showConfirmButton: false,
      timer: 1000
});
  } else {
      Swal.fire({
      position: "top-end",
      icon: "error",
      title: `${itemName} removed to favorites`,
      showConfirmButton: false,
      timer: 1000
    });
  }
},
    initCarousel() {
      this.$nextTick(() => {
        const carousel = new bootstrap.Carousel(document.getElementById('carouselExample'), {
          interval: 100, // Set the interval (in milliseconds) for auto sliding
          wrap: true, // Allow wrapping from the last slide to the first
        });
      });
    },
  },
};
</script>

<style scoped>
/* Your component-specific styles if needed */
.main {
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: -1;
}

.cursor-pointer{
  cursor: pointer;
}


.btn,
.menu-text {
  background: #FF8413;
}

.why-choose-us,
.why-choose-us-1{
  font-family: "Great Vibes", Sans-serif;
}

.why-choose-us-1{
  color: #FF8413;
}

.menu-card {
  /* Other styles for your menu card */
  transition: transform 0.3s ease; /* Smooth transition for transform property */
}

.menu-card:hover {
  transform: scale(1.1); /* Zoom out slightly on hover */
  opacity: 1!important;
}

</style>
