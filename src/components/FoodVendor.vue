<template>
    <div class="container">   
        <div class="d-flex align-items-center justify-content-center flex-column pt-5">
            <span class="fs-2 text-capitalize fw-bold">Become a food vendor </span><br /><a href="/"><button class="bn632-hover bn19 m-0 p-0 rounded-0">Start</button></a>
        </div>
            <div class="d-flex gap-4 flex-column mt-5">
                <div v-for="(vendor, index) in vendors" :key="index" v-show="index < visibleVendors">
                    <div>
                        <div class="vendor-slider p-5 border-none shadow">
                            <div class="vendor-item  gap-3 d-flex flex-md-row flex-column">
                                <div class="vendor-img">
                                <img :src="vendor.image" width="150" height="150" class="rounded" alt="">
                                </div>
                                <div class="vendor-content">
                                    <div class="vendor-content-inner">
                                        <h3 class="vendor-title text-capitalize"><a :href="vendor.link" class="text-decoration-none text-black">{{ vendor.name }}</a></h3>
                                        <div class="vendor-rating">
                                        <i v-for="star in 5" :key="star" class="bi bi-star-fill"></i>
                                        </div>
                                        <p>{{ vendor.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="d-flex justify-content-center mt-3">
            <button class="btn bn632-hover bn19 text-white rounded-0 p-2 px-3" @click="toggleVisibility">
                {{ showMoreText }}
            </button>
        </div>
    </div>

</template>

<script>
export default {
  data() {
    return {
        visibleVendors: 3,
        showMore: false,
      vendors: [
        {
          name: 'Chicken Republic',
          image: 'src/assets/breakfast1.jpg',
          link: '/',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet qui numquam, earum expedita fuga debitis blanditiis quae sequi sit cum itaque, beatae facere mollitia distinctio, autem nulla saepe reiciendis accusantium odit placeat. Commodi ratione corrupti reprehenderit expedita. Similique perferendis quas dolorum, repellendus earum autem sequi enim officiis consequuntur porro eius?'
        },
        {
          name: 'The Place Food',
          image: 'src/assets/background5.jpeg',
          link: '/',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet qui numquam, earum expedita fuga debitis blanditiis quae sequi sit cum itaque, beatae facere mollitia distinctio, autem nulla saepe reiciendis accusantium odit placeat. Commodi ratione corrupti reprehenderit expedita. Similique perferendis quas dolorum, repellendus earum autem sequi enim officiis consequuntur porro eius?'
        },
        {
          name: 'Chicken Republic',
          image: 'src/assets/background6.jpeg',
          link: '/',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet qui numquam, earum expedita fuga debitis blanditiis quae sequi sit cum itaque, beatae facere mollitia distinctio, autem nulla saepe reiciendis accusantium odit placeat. Commodi ratione corrupti reprehenderit expedita. Similique perferendis quas dolorum, repellendus earum autem sequi enim officiis consequuntur porro eius?'
        },
        {
          name: 'Mummy chinedu Food canteen',
          image: 'src/assets/background7.jpeg',
          link: '/',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet qui numquam, earum expedita fuga debitis blanditiis quae sequi sit cum itaque, beatae facere mollitia distinctio, autem nulla saepe reiciendis accusantium odit placeat. Commodi ratione corrupti reprehenderit expedita. Similique perferendis quas dolorum, repellendus earum autem sequi enim officiis consequuntur porro eius?'
        },
        
    ]
    };
  },
  computed: {
    showMoreText() {
      return this.showMore ? 'View Less' : 'View More';
    }
  },
  methods: {
    toggleVisibility() {
      this.showMore = !this.showMore;
      if (this.showMore) {
        this.visibleVendors = this.vendors.length; // Show all vendors
      } else {
        this.visibleVendors = 3; // Only show 3 vendors
      }
    }   
  }
};
</script>

<style scoped>

.btn {
    background-color: #FF8413;
}
    .bn632-hover {
  width: 160px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 20px;
  height: 55px;
  text-align:center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  moz-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

.bn632-hover:hover {
  background-position: 100% 0;
  moz-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

.bn632-hover:focus {
  outline: none;
}

.bn632-hover.bn19 {
  background-image: linear-gradient(
    to right,
    #f5ce62,
    #FF8413,
    #fa7199,
    #e85a19
  );
  box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);
}
</style>