module Test.Main where

import Prelude
import Test.Unit (suite, test)
import Test.Unit.Main (runTest)
import Test.Unit.Assert as Assert
import Control.Monad.Eff (Eff)
import Control.Monad.Eff.Console (CONSOLE)
import Control.Monad.Eff.Exception (EXCEPTION)
import Control.Monad.Eff.Random (RANDOM)
import Test.Unit.Console (TESTOUTPUT)
import Control.Monad.Aff.AVar (AVAR)
import Test.QuickCheck (quickCheck)
import Data.Tuple (fst, snd, Tuple(..))
import Data.String (length)
import Main (crumbify, getTags, processDescription, Shaped(..), DescriptionSection(..), takeSections, dropSections, prependPath, cutPath)
import Autocategorise (classifier, mostFrequent, getStats, mostFrequentTuples, Stats(..), showStats, hasClasses)
import Data.Maybe (Maybe(..))
import Data.Map as Map
import Data.Array (fold)
import Data.List as List
import Data.List ((:), List(..))

main :: forall e. Eff (
  console :: CONSOLE,
  testOutput :: TESTOUTPUT,
  avar :: AVAR,            
  err :: EXCEPTION,
  random :: RANDOM
   | e) Unit                      
main = do
  quickCheck (\ x -> takeSections x [] == [])     
  runTest $ do
    suite "getTags" do
      test "parses hashtags" do
        Assert.equal ["simple"] (getTags "a #simple one")
        Assert.equal ["multiple", "ones"] (getTags "#multiple #ones")
        Assert.equal ["comma"] (getTags "with #comma, right")
        Assert.equal ["dash-now"] (getTags "with #dash-now right")
        Assert.equal ["thrashwithin"] (getTags "any #thrash#within a word")
      test "ignores a single hash" do
        Assert.equal [] (getTags "nothing # here")
    suite "Stats" do
      test "folds as expected" do
        Assert.equal ((Tuple "a" (Just 2)) : Nil) (showStats (fold [Stats (Map.singleton "a" 1), Stats (Map.singleton "a" 1)]))
      test "folds with more keys" do
        Assert.equal ((Tuple "a" (Just 2)) : (Tuple "b" (Just 1)) : Nil) (showStats (fold [Stats (Map.singleton "a" 1), Stats (Map.singleton "a" 1), Stats (Map.singleton "b" 1)]))
      test "showStats <<< getStats" do
        Assert.equal ((Tuple "a" (Just 2)) : (Tuple "b" (Just 1)) : Nil) (showStats (getStats ["a", "a", "b"]))
    suite "mostFrequentTuples <<< getStats" do
      test "works as expected" do
        Assert.equal [(Tuple (Just 2) "a"), (Tuple (Just 1) "b")] (mostFrequentTuples (getStats ["b", "a", "a"]) ["b", "a"])
    suite "mostFrequent <<< getStats" do
      test "works as expected" do
        Assert.equal ["a", "b"] (mostFrequent (getStats ["b", "a", "a"]) ["b", "a"])
        Assert.equal ["c", "a", "b"] (mostFrequent (getStats ["b", "a", "c", "a", "c", "c"]) ["c", "b", "a"])
        Assert.equal ["a", "b"] (mostFrequent (getStats ["a", "b"]) ["a", "b"])
    suite "classifier" do
      test "works as expected" do
        Assert.equal "d" (classifier ["d", "d"] "b d")
        Assert.equal "b" (classifier ["d", "b", "b"] "d b")
        Assert.equal "c" (classifier ["d", "b", "c", "c", "c d"] "d b c")
        Assert.equal "c" (classifier ["c b"] "c b")
    suite "prependPath" do
      test "works as expected" do
        Assert.equal "a b c" (prependPath ["a", "b"] "c")
        Assert.equal "c b a" (prependPath ["a", "b"] "c b a")
        Assert.equal "c b a" (prependPath [] "c b a")
    suite "cutPath" do
      test "works as expected" do
        Assert.equal ["a", "b"] (cutPath ["a", "b", "c"] "c")
        Assert.equal ["a"] (cutPath ["a", "b", "c"] "b")
        Assert.equal ["a", "b", "c"] (cutPath ["a", "b", "c"] "d")
    suite "hasClasses" do
      test "works as expected" do
        Assert.equal True (hasClasses ["b", "d"] "b d")
        Assert.equal False (hasClasses ["b", "d"] "b c")
        Assert.equal True (hasClasses [] "")
    suite "processDescription" do
      test "category overlapping the colour boundary" do
        Assert.equal (Shaped { solid: [Plain "this", Linked "category"], grey: [] }) (processDescription ["category"] "this category" 7)
      test "short description, many minutes" do
        Assert.equal (Shaped { solid: [Plain "", Plain "......."], grey: [] }) (processDescription [] "" 7)
    suite "takeSections" do
      test "works in some basic cases" do
        Assert.equal [Plain "first"] (takeSections 3 [Plain "first", Plain "second"])
        Assert.equal [Plain "a"] (takeSections 1 [Plain "a", Plain "b", Plain "c"])
        Assert.equal [Plain "a", Plain "b", Plain "c"] (takeSections 30 [Plain "a", Plain "b", Plain "c"])
      test "works with empty sections" do
        Assert.equal [] (takeSections 3 [])
      test "works with zero" do
        Assert.equal [] (takeSections 0 [])
        Assert.equal [] (takeSections 0 [Plain "some"])
      test "works with a negative number" do
        Assert.equal [] (takeSections (-1) [])
    suite "dropSections" do
      test "works in a basic case" do
        Assert.equal [Plain "second"] (dropSections 3 [Plain "first", Plain "second"])
      test "works with empty sections" do
        Assert.equal [] (dropSections 3 [])
      test "works with zero" do
        Assert.equal [] (dropSections 0 [])
    suite "crumbify" do
      test "basic use cases" do
        Assert.equal [Plain "word", Plain "......"] (crumbify 10 [Plain "word"])
      test "some corner cases" do
        Assert.equal [Plain ".........."] (crumbify 10 [])
        Assert.equal [] (crumbify 0 [])
        Assert.equal [Plain "word"] (crumbify 0 [Plain "word"])
