<template>
  <mainsec :page="page_data" />

  <BlogsMain />
  <HomeOurpartener />
</template>
<script setup>
import { GeneralStore } from "@/stores/general";
let store = GeneralStore();
store.getBlogsData();

const page_data = {
  title: "Blogs",
  image: "/images/Blog.svg",
  pathes: {
    main: "Home",
    sub: "Blogs",
  },
};
</script>
