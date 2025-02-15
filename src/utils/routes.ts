const routes = {
  landing() {
    return "/";
  },
  // article(slug: string) {
  //   return `/blog/${slug}`;
  // },
  components() {
    return "/components";
  },
  community() {
    return "/community";
  },
  about() {
    return "/about";
  },
  social: {
    github() {
      return "https://github.com/ZaharBorisenko/React-UI-Library";
    },
    telegram() {
      return "https://t.me/ZaharWeb007";
    },
  },
};

export default routes;
