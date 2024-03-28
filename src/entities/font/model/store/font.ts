import { createEvent, createStore } from 'effector/compat'
import { useUnit } from 'effector-react'

import { FontState } from '@entities/font/model'
import { FontFamilies, storageKeysEnum } from '@shared/constants'

const eventChangeFont = createEvent<FontState>()

const loadStateFromLocalStorage = (): FontState => {
  const fontFamily = localStorage.getItem(storageKeysEnum.fontFamily)

  if (
    fontFamily &&
    Object.values(FontFamilies).includes(fontFamily as FontFamilies)
  ) {
    return { fontFamily: fontFamily as FontFamilies }
  }
  return { fontFamily: FontFamilies.cascadiaCode }
}

export const $font = createStore<FontState>(loadStateFromLocalStorage()).on(
  eventChangeFont,
  (_, font) => font,
)

$font.watch((state) => {
  localStorage.setItem(storageKeysEnum.fontFamily, state.fontFamily)
})
export const useCurrentFont = () => useUnit($font)
export const useChangeFont = () => useUnit(eventChangeFont)
