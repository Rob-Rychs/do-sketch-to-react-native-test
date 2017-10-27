The do-sketch library has 10 rows of 13 UI views differently styled for a total of 130 svgs in total. Here is the eigth 13 run attempts (or row8),  The error messages are included below. The svgs are found in the images folder.

> sketch-to-react-native 4-Home.svg
gathering elements...
Error: Timed out after 30000 ms while trying to connect to Chrome! The only Chrome revision guaranteed to work is r497674
    at Timeout.onTimeout (/Users/rob/Desktop/sketch-to-react-native/node_modules/puppeteer/lib/Launcher.js:153:14)
    at ontimeout (timers.js:471:11)
    at tryOnTimeout (timers.js:306:5)
    at Timer.listOnTimeout (timers.js:266:5)

> sketch-to-react-native 12-Settings.svg
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
    at flattenBoxComps (/Users/rob/Desktop/sketch-to-react-native/build/flex.js:276:9)
    at flattenBoxComps (/Users/rob/Desktop/sketch-to-react-native/build/flex.js:260:9)
    at flattenBoxComps (/Users/rob/Desktop/sketch-to-react-native/build/flex.js:260:9)

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
    at flattenBoxComponents (/Users/rob/Desktop/sketch-to-react-native/build/flex.js:298:3)
    at _callee$ (/Users/rob/Desktop/sketch-to-react-native/build/index.js:147:36)
    at tryCatch (/Users/rob/Desktop/sketch-to-react-native/node_modules/regenerator-runtime/runtime.js:65:40)
    at Generator.invoke [as _invoke] (/Users/rob/Desktop/sketch-to-react-native/node_modules/regenerator-runtime/runtime.js:299:22)