'use client'
import { useEffect, useState } from 'react'
import { Button } from '../design-system/Button'

export function ToggleTheme() {
  const [theme, setTheme] = useState<string>(
    typeof window !== 'undefined'
      ? localStorage.theme !== undefined
        ? localStorage.theme
        : 'dark'
      : 'dark',
  )
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    document.startViewTransition(() => {
      console.log('view transition')

      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    })
    localStorage.setItem('theme', theme)
  }, [theme])

  //   const toggler = document.getElementById('themeToggler')

  //   toggler?.addEventListener('click', () =>
  //     document.startViewTransition(() => {
  //       console.log('view transition')
  //       document.documentElement.classList.toggle('dark')
  //     }),
  //   )
  if (!isMounted) {
    return <div>test</div> // or null;
  }

  return (
    <Button
      onClick={handleClick}
      id="themeToggler"
      variant={'default'}
      size={'default'}
    >
      {theme === 'light' ? 'ACTIVAR MODO OSCURO' : 'ACTIVAR MODO CLARO'}
    </Button>
  )
}
