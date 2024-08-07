import { useEffect, useState } from 'react'
import { Button } from '../design-system/Button'
import { DarkModeIcon } from '../icons/DarkModeIcon'
import { LightModeIcon } from '../icons/LightModeIcon'

export function ToggleTheme() {
  const [theme, setTheme] = useState<string>(
    typeof window !== 'undefined'
      ? localStorage.theme !== undefined
        ? localStorage.theme
        : 'dark'
      : 'dark',
  )
  // const [isMounted, setIsMounted] = useState(true)
  // console.log('state ', isMounted)
  // console.log('render')
  // useEffect(() => {
  //   console.log('primer render')
  //   console.log('isMounted: ', isMounted)
  //   setIsMounted((prev) => !prev)

  //   console.log('se actualizó isMounted')
  // }, [])
  const getTheme = () => {
    if (typeof localStorage !== 'undefined') {
      const storedTheme = localStorage.getItem('theme')
      if (storedTheme) {
        return storedTheme
      }
    }
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return 'dark'
    }
    return 'light'
  }
  const handleClick = () => {
    console.log('click')
    setTheme(theme === 'light' ? 'dark' : 'light')
    let themeLocal = getTheme()
    themeLocal = theme === 'dark' ? 'light' : 'dark'
    console.log('test apply theme')
    localStorage.setItem('theme', theme)

    // if(firstTime) {
    // 	if (theme === 'dark') {
    // 		document.documentElement.classList.add('dark')
    // 	} else {
    // 		document.documentElement.classList.remove('dark')
    // 	}
    // } else {

    // document.startViewTransition(() => {
    console.log('view transition')
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    // })
    // }
  }

  // useEffect(() => {
  //   document.startViewTransition(() => {
  //     console.log('view transition')

  //     if (theme === 'dark') {
  //       document.documentElement.classList.add('dark')
  //     } else {
  //       document.documentElement.classList.remove('dark')
  //     }
  //   })
  //   localStorage.setItem('theme', theme)
  // }, [theme])

  //   const toggler = document.getElementById('themeToggler')

  //   toggler?.addEventListener('click', () =>
  //     document.startViewTransition(() => {
  //       console.log('view transition')
  //       document.documentElement.classList.toggle('dark')
  //     }),
  //   )
  // if (!isMounted) {
  //   return <div>test</div> // or null;
  // }
  console.log(theme)
  return (
    <Button
      onClick={handleClick}
      id="themeToggler"
      aria-label="Toggle Theme"
      variant="default"
      size="icon"
      className="size-8"
    >
      {theme === 'light' ? (
        <DarkModeIcon className="size-4" />
      ) : (
        <LightModeIcon className="size-4" />
      )}
    </Button>
  )
}
