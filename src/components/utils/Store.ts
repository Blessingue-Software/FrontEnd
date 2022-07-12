import create from "zustand";

const Store = create((set) => ({
    email: "",
    setEmail: (email:string) => set({ email }),
    password: "",
    setPassword: (password:string) => set({ password }),
    auth: "",
    setAuth: (auth:string) => set({ auth }),
}));

export default Store;
