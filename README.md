# Craindo meu primeiro App
## Instalar dependências
````
npm insttal
````
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
│   ├── components
│   ├── config
│   ├── navigation
│   ├── screens
│   ├── services
│   └── util
````