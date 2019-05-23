
# Craindo meu primeiro App

| Main | Product |
|---|---|
| ![Main](https://raw.githubusercontent.com/uandersonmbc/my-first-app/master/src/assets/img/01.png#left) | ![Product](https://raw.githubusercontent.com/uandersonmbc/my-first-app/master/src/assets/img/02.png#right) |


- [Gerador de sombra](https://ethercreative.github.io/react-native-shadow-generator/)
- [Gerar paleta de cor](https://coolors.co/00b9ae-037171-03312e-02c3bd-009f93)
## Instalar dependências
````
npm install

npm install --save [dependência]
````
## Dependências a ser instaladas

- [ES 2015](https://www.npmjs.com/package/babel-preset-es2015)
- [React](https://www.npmjs.com/package/react)
- [Axios](https://www.npmjs.com/package/react-native-axios)
- [React Navigation](https://reactnavigation.org/docs/en/getting-started.html)
- [React Native WebView](https://github.com/react-native-community/react-native-webview/blob/HEAD/docs/Getting-Started.md)

## Construir aplicação
````
Android : react-native run-android
    iOS : react-native run-ios
````
## Abrir menu do React Native
### Executando em um emulador
Usando atalhos
````
CTRL + M (Windows)
CMD + M (macOS)
````
### Executando em um aparelho Andoid
Abra o terminal e execute esse comando para abrir o menu do react-native quando estiver usando um aparelho android.
````
adb shell input keyevent 82
````

## Organização das pastas
````
├── __tests__/
├── android/
├── ios/
├── src/
│   ├── assets
│   │   ├── img/
│   │   └── styles/
│   ├── components
│   ├── config
│   ├── navigation
│   └── services
````

## Errors

```
User esse comando no terminal do linux para resolver esse erro: chmod 755 android/gradlew 

Error: spawnSync ./gradlew EACCES
    at Object.spawnSync (internal/child_process.js:998:20)
    at spawnSync (child_process.js:622:24)
    at Object.execFileSync (child_process.js:650:13)
    at runOnAllDevices (/home/user/react/front-end/project/node_modules    /react-native/local-cli/runAndroid/runAndroid.js:299:19)
    at buildAndRun (/home/user/react/front-end/project/node_modules/react-native/local-cli/runAndroid/runAndroid.js:135:12)
    at isPackagerRunning.then.result (/home/user/react/front-end/project/node_modules/react-native/local-cli/runAndroid/runAndroid.js:65:12)
    at processTicksAndRejections (internal/process/next_tick.js:81:5)
```
