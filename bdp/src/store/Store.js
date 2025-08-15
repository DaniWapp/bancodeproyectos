import { create } from 'zustand'
const useStore = create((set) => ({
    isLoged: false,
    setLoged: (state) => set(() => ({ loged: state})),
    pantalla: 0,
    setPantalla: (d) => set(() => ({ pantalla: d })),
  }))

  export default useStore;