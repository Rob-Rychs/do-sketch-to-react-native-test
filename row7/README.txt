The do-sketch library has 10 rows of 13 UI views differently styled for a total of 130 svgs in total. Here is the seventh 13 run attempts (or row7),  The nine error messages are included below. The svgs are found in the images folder.

> sketch-to-react-native 2-SignUp.svg
gathering elements...
filtering elements...
TypeError: Cannot read property 'right' of undefined
    at determineAlignJustify (/Users/rob/Desktop/sketch-to-react-native/build/attributes.js:133:87)
    at /Users/rob/Desktop/sketch-to-react-native/build/flex.js:286:26
    at Array.forEach (<anonymous>)
    at flattenBoxComps (/Users/rob/Desktop/sketch-to-react-native/build/flex.js:281:13)
    at /Users/rob/Desktop/sketch-to-react-native/build/flex.js:291:11
    at Array.forEach (<anonymous>)
    at flattenBoxComps (/Users/rob/Desktop/sketch-to-react-native/build/flex.js:281:13)
    at flattenBoxComps (/Users/rob/Desktop/sketch-to-react-native/build/flex.js:276:9)
    at flattenBoxComps (/Users/rob/Desktop/sketch-to-react-native/build/flex.js:260:9)
    at flattenBoxComponents (/Users/rob/Desktop/sketch-to-react-native/build/flex.js:298:3)

    > sketch-to-react-native 3-Walkthrough.svg
gathering elements...
filtering elements...
Error: Timed out after 30000 ms while trying to connect to Chrome! The only Chrome revision guaranteed to work is r497674
    at Timeout.onTimeout (/Users/rob/Desktop/sketch-to-react-native/node_modules/puppeteer/lib/Launcher.js:153:14)
    at ontimeout (timers.js:471:11)
    at tryOnTimeout (timers.js:306:5)
    at Timer.listOnTimeout (timers.js:266:5)

> sketch-to-react-native 4-Home.svg
gathering elements...
Error: Timed out after 30000 ms while trying to connect to Chrome! The only Chrome revision guaranteed to work is r497674
    at Timeout.onTimeout (/Users/rob/Desktop/sketch-to-react-native/node_modules/puppeteer/lib/Launcher.js:153:14)
    at ontimeout (timers.js:471:11)
    at tryOnTimeout (timers.js:306:5)
    at Timer.listOnTimeout (timers.js:266:5)

> sketch-to-react-native 5-Calendar.svg
gathering elements...
filtering elements...
Error: Timed out after 30000 ms while trying to connect to Chrome! The only Chrome revision guaranteed to work is r497674
    at Timeout.onTimeout (/Users/rob/Desktop/sketch-to-react-native/node_modules/puppeteer/lib/Launcher.js:153:14)
    at ontimeout (timers.js:471:11)
    at tryOnTimeout (timers.js:306:5)
    at Timer.listOnTimeout (timers.js:266:5)

> sketch-to-react-native 6-Overview.svg
fs.js:853
  return binding.rmdir(pathModule._makeLong(path));
                 ^

Error: EACCES: permission denied, rmdir 'temp/5-Calendar_images'
    at Object.fs.rmdirSync (fs.js:853:18)
    at deleteFolderRecursive (/Users/rob/Desktop/sketch-to-react-native/build/lib/files.js:18:8)
    at /Users/rob/Desktop/sketch-to-react-native/build/lib/files.js:12:9
    at Array.forEach (<anonymous>)
    at deleteFolderRecursive (/Users/rob/Desktop/sketch-to-react-native/build/lib/files.js:8:26)
    at module.exports.emptyAndCreateDir (/Users/rob/Desktop/sketch-to-react-native/build/lib/files.js:29:3)
    at Object.<anonymous> (/Users/rob/Desktop/sketch-to-react-native/build/index.js:77:1)
    at Module._compile (module.js:624:30)
    at Object.Module._extensions..js (module.js:635:10)
    at Module.load (module.js:545:32)

> sketch-to-react-native 8-List.svg
/Users/rob/Desktop/sketch-to-react-native/build/input.js:12
  var oldDefs = data.match(/\<defs\>[\s\S]*\<\/defs\>/g);
                     ^

TypeError: Cannot read property 'match' of undefined
    at prepData (/Users/rob/Desktop/sketch-to-react-native/build/input.js:12:22)
    at ReadFileContext.callback (/Users/rob/Desktop/sketch-to-react-native/build/index.js:89:31)
    at FSReqWrap.readFileAfterOpen [as oncomplete] (fs.js:421:13)

> sketch-to-react-native 9-Create.svg
gathering elements...
filtering elements...
TypeError: Cannot read property 'right' of undefined
    at determineAlignJustify (/Users/rob/Desktop/sketch-to-react-native/build/attributes.js:133:87)
    at /Users/rob/Desktop/sketch-to-react-native/build/flex.js:286:26
    at Array.forEach (<anonymous>)
    at flattenBoxComps (/Users/rob/Desktop/sketch-to-react-native/build/flex.js:281:13)
    at /Users/rob/Desktop/sketch-to-react-native/build/flex.js:291:11
    at Array.forEach (<anonymous>)
    at flattenBoxComps (/Users/rob/Desktop/sketch-to-react-native/build/flex.js:281:13)
    at flattenBoxComps (/Users/rob/Desktop/sketch-to-react-native/build/flex.js:276:9)
    at flattenBoxComps (/Users/rob/Desktop/sketch-to-react-native/build/flex.js:260:9)
    at flattenBoxComponents (/Users/rob/Desktop/sketch-to-react-native/build/flex.js:298:3)

    > sketch-to-react-native 11-Timeline.svg
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

    > sketch-to-react-native 12-Settings.svg
gathering elements...
filtering elements...
TypeError: Cannot read property 'right' of undefined
    at determineAlignJustify (/Users/rob/Desktop/sketch-to-react-native/build/attributes.js:133:87)
    at /Users/rob/Desktop/sketch-to-react-native/build/flex.js:286:26
    at Array.forEach (<anonymous>)
    at flattenBoxComps (/Users/rob/Desktop/sketch-to-react-native/build/flex.js:281:13)
    at /Users/rob/Desktop/sketch-to-react-native/build/flex.js:291:11
    at Array.forEach (<anonymous>)
    at flattenBoxComps (/Users/rob/Desktop/sketch-to-react-native/build/flex.js:281:13)
    at flattenBoxComps (/Users/rob/Desktop/sketch-to-react-native/build/flex.js:276:9)
    at flattenBoxComps (/Users/rob/Desktop/sketch-to-react-native/build/flex.js:260:9)
    at flattenBoxComponents (/Users/rob/Desktop/sketch-to-react-native/build/flex.js:298:3)

