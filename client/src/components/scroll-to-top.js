import { useEffect } from "react"

export const ScrollToTop = ({ children, location }) => {
    useEffect(() => window.scrollTo(0, 0), [location.pathname])
    return children
  }