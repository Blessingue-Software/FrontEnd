import create from "zustand";

const Store = create((set) => ({
    email: "",
    setEmail: (email) => set({ email }),
    password: "",
    setPassword: (password) => set({ password }),
    auth: "",
    setAuth: (auth) => set({ auth }),
}));

export default Store;
