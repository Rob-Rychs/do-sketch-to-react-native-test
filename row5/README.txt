The do-sketch library has 10 rows of 13 UI views differently styled for a total of 130 svgs in total. Here is the fifth of 13 run attempts (or row5),  The one error messages are included below. The svgs are found in the images folder.

> sketch-to-react-native 9-Create.svg
gathering elements...
filtering elements...
TypeError: Cannot read property 'left' of undefined
    at determineAlignJustify (/Users/rob/Desktop/sketch-to-react-native/build/attributes.js:132:46)
    at /Users/rob/Desktop/sketch-to-react-native/build/flex.js:286:26
    at Array.forEach (<anonymous>)
    at flattenBoxComps (/Users/rob/Desktop/sketch-to-react-native/build/flex.js:281:13)
    at /Users/rob/Desktop/sketch-to-react-native/build/flex.js:291:11
    at Array.forEach (<anonymous>)
    at flattenBoxComps (/Users/rob/Desktop/sketch-to-react-native/build/flex.js:281:13)
    at /Users/rob/Desktop/sketch-to-react-native/build/flex.js:291:11
    at Array.forEach (<anonymous>)
    at flattenBoxComps (/Users/rob/Desktop/sketch-to-react-native/build/flex.js:281:13)


    > sketch-to-react-native 13-Navigation.svg
gathering elements...
filtering elements...
TypeError: Cannot read property 'right' of undefined
    at determineAlignJustify (/Users/rob/Desktop/sketch-to-react-native/build/attributes.js:133:87)
    at /Users/rob/Desktop/sketch-to-react-native/build/flex.js:286:26
    at Array.forEach (<anonymous>)
    at flattenBoxComps (/Users/rob/Desktop/sketch-to-react-native/build/flex.js:281:13)
    at flattenBoxComps (/Users/rob/Desktop/sketch-to-react-native/build/flex.js:276:9)
    at flattenBoxComps (/Users/rob/Desktop/sketch-to-react-native/build/flex.js:260:9)
    at flattenBoxComps (/Users/rob/Desktop/sketch-to-react-native/build/flex.js:260:9)
    at flattenBoxComponents (/Users/rob/Desktop/sketch-to-react-native/build/flex.js:298:3)
    at _callee$ (/Users/rob/Desktop/sketch-to-react-native/build/index.js:147:36)
    at tryCatch (/Users/rob/Desktop/sketch-to-react-native/node_modules/regenerator-runtime/runtime.js:65:40)