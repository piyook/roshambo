export default function guest({ next, store }) {

  if (!store.getters["auth/guest"] && !store.getters["auth/authUser"]) {

    store.dispatch("auth/getAuthUser").then(() => {
      if (store.getters["auth/authUser"]) {
        next({ name: "Authorized" });
      } else {
        store.dispatch("auth/setGuest", { value: true });
        next();
      }
    });
  } else {
    next();
  }
}
