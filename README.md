# Mobile Application
## Install and generate starter code
1. install node https://nodejs.org (current project is generated using node version 15.7.0)
2. install ionic dependencies `npm install -g @ionic/cli native-run cordova-res`
    - @ionic/cli - ionic command line interface
    - native-run - tool to run native binaries
    - cordova-res - tool to generate native app icons and splash screens
3. ionic start `<app-name>` will run cli to generate project

https://ionicframework.com/docs/react/your-first-app

## Run application
To run generated application in a web browser go into project folder and use command: `ionic serve`

## Build
- To build the latest version run command: `ionic build`
- To create android app run command: `ionic cap add android`
- To create ios app run command: `ionic cap add ios`
   - PS! if you are using macOS you may need to install more dependencies:
      - `xcode-select --install`
      - `sudo gem install cocoapods`
   
If you make updates to native code you should run command : `ionic cap sync`

Command: `ionic cap open ios` - will open native iOS project in XCode (XCode needs to be installed)</br>
Command: `ionic cap open android` - will open native iOS project in Android Studio (Android Studio needs to be installed)
