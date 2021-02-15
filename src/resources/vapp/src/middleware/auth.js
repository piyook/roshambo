export default function auth({ to, next, store }) {
  // const loginQuery = { path: "/login", query: { redirect: to.fullPath } };
  console.log(to);

  if (!store.getters["auth/authUser"]) {
    store.dispatch("auth/getAuthUser").then(() => {
      if (!store.getters["auth/authUser"]) next('/userlogin');
      else next();
    });
  } else {
    next();
  }
}
