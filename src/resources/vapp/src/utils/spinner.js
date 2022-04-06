import store from "@/store";

export const Spinner = (value) => {
    store.commit(
        "updateLoadingStatus",
        { status: value },
        { root: true }
    );
}