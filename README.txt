The do-sketch library has 10 rows of 13 UI views differently styled for a total of 130 svgs in total. Here is the first 13 run attempts (or row1), we had two errors on the first two elements and generated .js and images folder for the other 11 svgs. The two error messages are included below. The svgs are found in the images folder.


> sketch-to-react-native 2-SignUp.svg
> gathering elements...
> filtering elements...
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
    at flattenBoxComponents (/Users/rob/Desktop/sketch-to-react-native/build/flex.js:298:3)

>sketch-to-react-native 1-Login.svg
gathering elements...
filtering elements...
Error: Timed out after 30000 ms while trying to connect to Chrome! The only Chrome revision guaranteed to work is r497674
    at Timeout.onTimeout (/Users/rob/Desktop/sketch-to-react-native/node_modules/puppeteer/lib/Launcher.js:153:14)
    at ontimeout (timers.js:471:11)
    at tryOnTimeout (timers.js:306:5)
    at Timer.listOnTimeout (timers.js:266:5)
