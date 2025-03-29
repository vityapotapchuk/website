import { create } from 'zustand'

const useFormStore = create((set) => ({
    isMobile: false,
    clickState: "main",
    setMobile: (params) => set(
        (state) => ({
            isMobile : !state.isMobile,
            clickState: params
        })
    ),
  }))

export default useFormStore