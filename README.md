# Taskly

This is a demo app for using the [https://www.npmjs.com/package/@proton/react-native-sdk](Proton React Native SDK)

The project uses Typescript and is was started with a template from https://github.com/infinitered/ignite

This project does not use Expo(https://expo.io/).

# Requirements (Android)

Requirements:

1. Install Android Studio (It was tested with version 4.1.1), [https://www.oracle.com/java/technologies/javase/15-relnote-issues.html](JDK v15).
2. Follow the setting up instructions on https://reactnative.dev/docs/environment-setup for the section `Installing dependencies`
3. In Android Studio, select "Open an Existing Project" and select `/android`
4. Android Studio may ask to install some additional dependencies.
5. If there is an "Upgrade Gradle" dialog that pops up, DO NOT do this. This might break the build.
6. Click the phone icon on the top right and add a virtual device to test with a simulator.
7. Specify the location of the Android SDK by making a new file `local.properties` in the root of the `android` folder with the contents (for Macs): `sdk.dir = /Users/[your username]/Library/Android/sdk` or the path that the Android SDK was installed for your device.

We use Node version v10 to v11. Make sure [https://nodejs.org/en/](Node) and [https://yarnpkg.com/]Yarn are installed.

Installation of the app:

`git clone`

`yarn`

To run the app on the simulator:

1. Start the react-native dev server by running `yarn start`. Keep that window open.
2. Open a simulator in Android Studio by clicking on the phone in the top bar and then selecting the phone and clicking the launch button.
3. In the console run `yarn android` and the application should be installed to your phone.

For running the app on a real device do the same steps as above, but instead of opening the simulator connect your phone with USB to your computer and make sure you have enabled USB debugging.

In certain environments, there may be an issue with the Gradle version number. This error may pop up in the console when running `yarn start` or `yarn android`: 
```
java.lang.NoClassDefFoundError: Could not initialize class org.codehaus.groovy.vmplugin.v7.Java7
```

If this is the case, you must upgrade the Gradle version to 6.3 in `/android/gradle/wrapper/gradle-wrapper.properties`. Change the version like so:
```
distributionUrl=https\://services.gradle.org/distributions/gradle-6.3-all.zip
```

## Building a Release build for Android (apk)

To build and apk that does not need a Javascript server to connect to, run the following commands:

1. `cd android` (go to the android folder)
2.  `./gradlew assembleRelease ` (build the apk)

After those commands you should be able to find the apk under ./app/build/outputs/apk/release/app-release.apk


# Requirements (iOS)

Since this project is an iOS App, a Mac is necessary.

Install the following requirements.

1. Install XCode and make sure you have version (12.2).
2. Install the Xcode command line tools by runnning `xcode-select --install` in the terminal.
3. Install CocoaPods (https://cocoapods.org/) by running `sudo gem install cocoapods`.
4. Install homebrew by following the instructions on https://brew.sh/.
5. Run `brew install watchman` to install watchman.

We use Node version v10 to v11. Make sure [https://nodejs.org/en/](Node) and [https://yarnpkg.com/]Yarn are installed.

## To run the app on a simulator:

1. Install the application's packages by running `yarn`
2. Create an `.env` file based on the `.env.template`.
3. Start the react-native dev server by running `yarn start`.
4. Start up xcode by running `open ios/TasklyIos.xcworkspace/` in another tab.
5. Select **Taskly iOS Dev** scheme.
6. Select **iPhone 11** as a simulator.
7. Click the run button.

The first time the app builds can take quite some time (maybe 10 minutes) depending on the number of cores and other functionality. While the app is building, a new terminal will popup that has the dev server running. Please do not close this window while the simulator is running.

## When you want to run on a physical device:

1. Open the xcode **Preferences** menu and select the **Accounts** tab to add your account (i.e. Apple ID of your device).
2. In xcode, open the `TasklyIos.xcodeproj` file.
3. Select `TasklyIos` listed under **Targets**.
4. Under the **Signing & Capabilities** tab, expand the **Signing (Debug)** options and use the **Team** dropdown to select the xcode account you just created in the first step.
5. Name your **Bundle Identifier** (note that this name needs to be unique).
6. Quit xcode.
7. Connect your iPhone with a cable to your computer.
8. Install the application's packages by running `yarn`
9. Create an `.env` file based on the `.env.template`.
10. Start the react-native dev server by running `yarn start`.
11. Restart xcode by running `open ios/TasklyIos.xcworkspace/` in another tab.
12. Select **Taskly iOS Dev** scheme.
13. Select **YourName's Phone** as the iOS device.
14. Click the run button.
15. After the application has finished building, open your iPhone's **General** settings and scroll down to **Device Management**. Open the option under **DEVELOPER APP** and select **Trust "Apple Development: ...** to mark your xcode developer account as trusted.

After granting trust to your developer account, click the run button again. The application should appear on your phone.
