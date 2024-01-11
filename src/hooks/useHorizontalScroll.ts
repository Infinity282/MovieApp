import { useEffect, useRef } from 'react'

export function useHorizontalScroll<T extends HTMLElement>() {
  const ref = useRef<null | T>(null)

  useEffect(() => {
    const element = ref.current

    if (element) {
      const onWheelScroll = (e: WheelEvent) => {
        e.preventDefault()
        element.scrollTo({
          left: element.scrollLeft + e.deltaY + 150,
          behavior: 'smooth',
        })
      }
      element.addEventListener('wheel', onWheelScroll)
      return () => element.removeEventListener('wheel', onWheelScroll)
    }
  }, [])

  return ref
}
