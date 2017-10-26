The do-sketch library has 10 rows of 13 UI views differently styled for a total of 130 svgs in total. Here is the sixth of 13 run attempts (or row6),  The four error messages are included below. The svgs are found in the images folder (for some reason the 10th UI view in the 6th row crashes the sketch app everytime I try to export an svg❓).

> sketch-to-react-native 1-Login.svg
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

> sketch-to-react-native 2-SignUp.svg

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

    > sketch-to-react-native 9-Create.svg
gathering elements...
filtering elements...
TypeError: Cannot read property 'left' of undefined
    at /Users/rob/Desktop/sketch-to-react-native/build/attributes.js:138:55
    at Array.forEach (<anonymous>)
    at determineAlignJustify (/Users/rob/Desktop/sketch-to-react-native/build/attributes.js:136:14)
    at /Users/rob/Desktop/sketch-to-react-native/build/flex.js:286:26
    at Array.forEach (<anonymous>)
    at flattenBoxComps (/Users/rob/Desktop/sketch-to-react-native/build/flex.js:281:13)
    at /Users/rob/Desktop/sketch-to-react-native/build/flex.js:291:11
    at Array.forEach (<anonymous>)
    at flattenBoxComps (/Users/rob/Desktop/sketch-to-react-native/build/flex.js:281:13)
    at flattenBoxComps (/Users/rob/Desktop/sketch-to-react-native/build/flex.js:276:9)

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
    at /Users/rob/Desktop/sketch-to-react-native/build/flex.js:291:11
    at Array.forEach (<anonymous>)

