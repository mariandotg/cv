import { useEffect, useState } from 'react'
import { Button } from '../design-system/Button'
import { DarkModeIcon } from '../icons/DarkModeIcon'
import { LightModeIcon } from '../icons/LightModeIcon'

export function ToggleTheme() {
  const [theme, setTheme] = useState<string>('dark')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    const defaultTheme =
      storedTheme ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light')
    setTheme(defaultTheme)
    document.documentElement.classList.toggle('dark', defaultTheme === 'dark')
  }, [])

  const handleClick = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

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
