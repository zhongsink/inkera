# inkera
![2018-04-24 12 10 43](https://user-images.githubusercontent.com/12597344/39165817-e3dfd284-47b8-11e8-8829-a6e3d67650eb.png)

![2018-04-24 12 10 58](https://user-images.githubusercontent.com/12597344/39165805-d7fbf510-47b8-11e8-8c1a-f20fee1b63ce.png)

Environment: ubuntu 14.04

> koa2、react、react-universal-component、koa-webpack-server、async/await、code-splitting、hot-module-replacement、react-router4、redux-thunk

<b>Less is More:</b> All key ingredients are in `app/development`、`app/production` and webpack configurations, easy to understand、set-up and extend. We promise to use the most recent & official packages(as much as we can), no weird or tricky stuffs, keeping this project <b>clean and fully customizable</b>.

<b>Fully functional:</b> HMR for client and server side, code splitting for both javascript and css, universal support for async/await programming with koa2 server-side and redux-thunk client-side...

<b>Universal:</b> We are using [react-universal-component](https://github.com/faceyspacey/react-universal-component)、[webpack-flush-chunks](https://github.com/faceyspacey/webpack-flush-chunks). It simplifies <b>universal</b> development with <b>code-splitting</b>(js、css) and is also compatible with the latest react-router-v4.

<b>Production:</b> We are using webpack to build client(target: web) and server(target: node).

<b>Development:</b> We are using [koa-webpack-server](https://github.com/kimjuny/koa-webpack-server) (which simplifies development env set-ups), it also webpacks client and server(with client & server hot-load), so we can stay as much as the same with production.

### Screenshots

developing

### Components

* koa2
* react
* react-router4
* redux-thunk
* react-universal-component
* es2015 + async/await
* less、postcss(autoprefixer)
* webpack
* koa-webpack-server
* webpack-flush-chunks
* axios
* ejs
* jest
* eslint(airbnb)
* docker


### Start

#### Prerequisites

development

* yarn / npm
* node ≥ 7.6

production

* docker ≥ 1.13


#### Development

```
yarn dev
```

#### Production

```
yarn prod
```

or with docker

```
docker build -t inkera .
docker run -d -p 3006:3006 inkera
```

#### Test

```
yarn test
```

```
CMD + SHIFT + R -> R (vscode)
```

### License

Base on https://github.com/kimjuny/koa-react-universal
