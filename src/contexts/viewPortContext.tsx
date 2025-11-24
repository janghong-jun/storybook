import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react'

type Viewport = 'mobile' | 'tablet' | 'desktop'

interface ViewportContextType {
  viewport: Viewport
}

const ViewportContext = createContext<ViewportContextType | undefined>(
  undefined
)

export const ViewportProvider = ({ children }: { children: ReactNode }) => {
  const getViewportFromWidth = (width: number): Viewport => {
    if (width < 768) return 'mobile'
    if (width < 1024) return 'tablet'
    return 'desktop'
  }

  const [viewport, setViewport] = useState<Viewport>('desktop')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () =>
        setViewport(getViewportFromWidth(window.innerWidth))
      queueMicrotask(() => setViewport(getViewportFromWidth(window.innerWidth)))
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <ViewportContext.Provider value={{ viewport }}>
      {children}
    </ViewportContext.Provider>
  )
}

export const useViewport = () => {
  const context = useContext(ViewportContext)
  if (!context)
    throw new Error('useViewport must be used within a ViewportProvider')
  return context
}
