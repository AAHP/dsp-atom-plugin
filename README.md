# Atom dsp plugin #

## Start app ##

  ```
  git clone https://github.com/AAHP/dsp-atom-plugin.git
  ```
  ```
  cd dsp-atom-plugin
  ```
  ```
  yarn start
  ```

## Build plugin ##

  ```
  yarn build
  ```


## Install plugin##

  ```
  cd dist
  ```
  ```
  apm install browser-plus
  ```
  ```
  apm link dsp-atom-plugin
  ```

## Build zip for customers##

  ```
  yarn zip
  ```
  Customer should unzip archive and run next commands
  ```
  apm install browser-plus
  ```
  ```
  apm link dsp-atom-plugin
  ```
