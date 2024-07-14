const KNOWN_LANGUAGES = [
  {
    language: 'English',
    locale: 'en',
  },
  {
    language: 'Spanish',
    locale: 'es',
  },
] as const

interface StaticLocalePath {
  params: {
    locale: string
  }
}

const staticLocalePaths = KNOWN_LANGUAGES.reduce((acc, curr) => {
  return [
    ...acc,
    {
      params: { locale: curr.locale },
    },
  ]
}, [] as StaticLocalePath[])

const localesArray = KNOWN_LANGUAGES.reduce((acc, curr) => {
  return [...acc, curr.locale]
}, [] as string[])

const defaultLocale = localesArray[0]

export {
  KNOWN_LANGUAGES,
  staticLocalePaths,
  localesArray,
  defaultLocale,
  type StaticLocalePath,
}
