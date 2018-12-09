import System.IO 
import Data.Char
import Control.Monad

main = do  
    contents <- readFile "../input.txt"
    print $ map digitToInt contents