import { useEffect, useState } from 'react';

const Wrapper = ({ children }) => {

  const [offset, setOffset] = useState({ top: -30, right: -100 })

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      setOffset({
        top: -30 + scrollY * 0.1,
        right: -100 + scrollY * 0.05,
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      style={{
        position: 'absolute',
        top: `${offset.top}px`,
        right: `${offset.right}px`,
        width: '20rem',  // 80 (tailwind units) = 20rem
        height: '20rem',
      }}
     
    >
      {children}
    </div>
  )
}

export default Wrapper;
