<template>
  <div
    id="sec_us"
    class="sec"
    :style="{ backgroundImage: `url(${page.image})`, maxHeight: '220px' }"
  >
    <div class="container py-16">
      <div class="row">
        <div class="col-md-6">
          <div class="sec__content mb-3">
            <p class="sec__title text-[#1C95CA] font-extrabold">
              {{ $t(page.pathes.main) }}
              <span v-if="!page.pathes.sub_" class="text-white"
                >> {{ $t(page.pathes.sub) }}</span
              >

              <span v-if="page.pathes.sub_">> {{ $t(page.pathes.sub) }}</span>
              <span class="text-white" v-if="page.pathes.sub_">
                > {{ $t(page.pathes.sub_) }}</span
              >
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <h2 class="text-3xl font-bold text-white">{{ $t(page.title) }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  page: {
    type: Object,
    required: true,
  },
});
</script>
<style scoped>
.sec {
  position: relative;
  background-size: cover;
  background-position: center;
  padding: 20px;
  /* background-attachment: fixed; */
}
.sec::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(33, 33, 33, 0.6); /* Dark overlay */
  z-index: 1; /* Make sure it sits on top of the background */
}
.sec > * {
  position: relative;
  z-index: 2; /* Ensures content sits on top of the overlay */
}

@media screen and (max-width: 960px) {
  .sec {
    background-color: transparent;
  }
}
</style>
