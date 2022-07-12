import create from "zustand";

const Store = create((set) => ({
    email: "",
    password: "",
    auth: "",
    setEmail: (email) => set({ email }),
    setPassword: (password) => set({ password }),
    setAuth: (auth) => set({ auth }),
}));

export default Store;
