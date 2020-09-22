# Webpack Configuration

`npm install -D webpack webpack-cli`:

> webpack-cli : command line에서 webpack명령어를 사용할 수 있게 해준다.

<br />

# Core Concepts

> 기본적으로 웹팩은 `Mode, Entry, Output, Loader, Plugin` 옵션을 설정합니다. 이것을 `cli 명령어`를 통해서도 가능하다.

`node_modules/.bin/webpack --mode development --entry ./scr/app.js --output dist/main.js`

> `node_modules/.bin` 안에는 webpack 실행 파일이 들어있다. 이 실행 파일을 옵션과 함께 실행시키면 된다. 위 명령이 실행되면 최종적으로 dist의 main.js라는 번들링된 자바스크립트 파일이 생성된다. 이 파일을 index.html에 추가하여 로딩하면 된다.

> 하지만 매번 옵션을 이렇게 지정해주면 매우 불편하다. 또한 실제로는 더 복잡하고 많은 옵션들이 필요하다. 그래서 따로 `webpack.config.js`라는 설정 파일을 생성해서 번들링에 필요한 옵션들을 관리하게 된다.

> 일반적으로 웹팩의 실행은 <u>package.json의 scripts의 명령어</u>를 이용한다. `build : "webpack"`을 사용하면 npm은 현재프로젝트의 node_module 안에 webpack관련 명령어를 찾아서 실행을 하게 된다.(위의 cli에서 처럼 bin 폴더에 가서 실행파일을 찾는다.) 그렇게 되면 webpack은 기본 설정파일인 `webpack.config.js`를 읽어서 빌드 작업을 실행한다.

## Mode

> 웹팩의 실행모드를 설정한다. 이 실행모드에 따라서 웹팩의 결과물이 달라진다. 모드를 설정하지 않으면 기본값인 `production`으로 설정된다.

> development : 개발모드 / production : 배포모드 / none : 모드 설정 없음

```javascript
module.exports = {
	mode: 'development',
	//...
};
```

## Entry

> 모듈의 시작점의 `경로`를 지정한다.(자바스크립트라고 한다면, 자바스크립트 파일의 시작점)

> 여기서 경로라 함은 `JS파일의 경로`를 말한다.

> entry에 적힐 파일은 웹팩이 의존성 관계를 분석할 때, 최상위에 위치한 파일이다. 그 최상위로 부터 내려가면서 의존성 관계를 번들링한다. 그렇기 때문에 이 파일은 웹앱의 전반적인 구조를 담고 있어야 한다.

> 상황에 따라서 **여러 개의 entry파일**이 존재 할 수도 있다. 그런 경우에는 entry에 배열 혹은 객체를 사용 할 수 있다. <u>또한 여러 개를 사용하는 이유는 코드/모듈의 재사용성 때문이라고 한다.</u>

> > 아직 경험해보지 못한 부분이기 때문에 추후에 밑줄에 대한 의미를 좀 더 명확하게 정리해보도록 하겠다.

```javascript
module.exports = {
	entry: {
		main: './src/app.js',
	},
	//...
};
```

## Output

> 하나로 번들링한 후 그 결과 파일이 있는 경로를 지정한다.

```javascript
module.exports = {
	entry: {
		main: './src/app.js',
	},
	//...
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname + '/dist'),
	},
};
```

> output 안에서는 **2가지 설정**을 한다.

- `filename`은 웹팩이 빌드한 파일의 이름을 말한다. 그런데 여기서 [name] 이라고 적은 것은 무슨 의미일까? 이것은 entry에서 객체로 옵션을 설정했을 경우, 객체의 키값이 name에 들어오게 된다. 그래서 결국 `main.js`라는 이름을 가진 파일이 생성된다. 이 외에도 이름 관련된 옵션들이 존재한다.

  > 참고로 `bundle.js`라는 이름으로 자주 사용한다.

- `path`는 실제 결과값의 위치를 `절대경로`로서 지정해 주는 것이다. 여기서 node.js의 path 모듈을 사용한다.

> `path.resolve(__dirname + '/dist')` 의미

- `path.resolve()`는 `/dist`가 `절대경로`를 갖을 때까지 앞의 문자열(`__dirname`)을 이어붙여서 주소를 리턴한다. 만약에 앞의 문자열을 모두 사용했음에도 절대경로를 얻지 못했다면, `현재워킹디렉토리`를 사용한다.

- `__dirname`은 현재 실행 중인 폴더(디렉토리) 이름을 반환한다.

## Loaders

## Plugins

## Browser Compatibility

# Ref

- [웹팩 핸드북](https://joshua1988.github.io/webpack-guide/motivation/why-webpack.html#%EC%9B%B9%ED%8C%A9%EC%9D%98-%EB%93%B1%EC%9E%A5-%EB%B0%B0%EA%B2%BD)

- [프론트엔드 개발환경의 이해](https://jeonghwan-kim.github.io/series/2019/12/10/frontend-dev-env-webpack-basic.html)
