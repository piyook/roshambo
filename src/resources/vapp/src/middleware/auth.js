
export default function auth({next, store }) {
  // const loginQuery = { path: "/login", query: { redirect: to.fullPath } };

  if (!store.getters["auth/authUser"]) {
    store.dispatch("auth/getAuthUser").then(() => {
      if (!store.getters["auth/authUser"]) next('/userlogin');
      else next();
    });
  } else {
    next();
  }
}
