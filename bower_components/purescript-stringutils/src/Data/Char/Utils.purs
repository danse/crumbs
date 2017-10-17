module Data.Char.Utils
  ( fromCodePoint
  , isSurrogate
  , toCodePoint
  , unsafeFromCodePoint
  )
where

import Data.Int.Bits ((.&.))
import Data.Maybe    (Maybe(Just, Nothing))
import Prelude


-- | Return the character corresponding to the given Unicode code point and
-- | `Nothing` if the given number is outside the range 0 .. 0x10FFFF.
fromCodePoint :: Int -> Maybe Char
fromCodePoint = _fromCodePoint Just Nothing

foreign import _fromCodePoint
  :: (∀ a. a -> Maybe a)
  -> (∀ a. Maybe a)
  -> Int
  -> Maybe Char

-- | Return true if the given character (Unicode code point) is a high or low
-- | surrogate code point.
isSurrogate :: Char -> Boolean
isSurrogate c = toCodePoint c .&. 0x1FF800 == 0xD800

-- | Return the Unicode code point of a character.
-- |
-- | Example:
-- | ```purescript
-- | toCodePoint '∀' == 8704
-- | ```
foreign import toCodePoint :: Char -> Int

-- | Return the character corresponding to the given Unicode code point.
-- | **Unsafe:** Throws runtime exception if the given number is outside the
-- | range 0 .. 0x10FFFF.
foreign import unsafeFromCodePoint :: Int -> Char
