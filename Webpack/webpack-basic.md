# Webpack Configuration

> 웹팩 설정을 하는데 필요한 옵션들에 대해서 알아본다.

## Install Webpack

`npm install -D webpack webpack-cli`:

> webpack-cli : command line에서 webpack명령어를 사용할 수 있게 해준다.

<br/>

## Core Concepts

> 기본적으로 웹팩은 `Mode, Entry, Output, Loader, Plugin` 옵션을 설정한다. 일반적으로 `webpack.config.js` 라는 설정 파일을 생성하여서 설정하지만, `cli 명령어`를 통해서도 가능하다.(webpack-cli를 설치했기 때문에)

```
node_modules/.bin/webpack --mode development --entry ./scr/app.js --output dist/main.js`
```

> `node_modules/.bin` 안에는 webpack 실행 파일이 들어있다. 이 실행 파일을 옵션과 함께 실행시키면 된다. 위 명령이 실행되면 최종적으로 `dist의 main.js`라는 번들링된 자바스크립트 파일이 생성된다. 이 파일을 `index.html에 추가`하여 로딩하면 된다.

> > 하지만 매번 옵션을 이렇게 지정해주면 매우 불편하다. 또한 실제로는 더 복잡하고 많은 옵션들이 필요하다. 그래서 위에서 말한 것처럼 `webpack.config.js`라는 설정 파일을 생성해서 번들링에 필요한 옵션들을 관리하게 된다.

> 일반적으로 웹팩의 실행은 <u>package.json의 scripts의 명령어</u>를 이용한다. package.json의 scripts에 `build : "webpack"`을 설정하여 `npm run build` 명령어를 실행한다. 그렇게 되면 npm은 현재 프로젝트의 node_module 안에 webpack관련 명령어를 찾아서 실행을 하게 된다.(위의 cli에서 처럼 bin 폴더에 가서 실행파일을 찾는다.) 그렇게 되면 webpack은 기본 설정파일인 `webpack.config.js`를 읽어서 빌드 작업을 실행한다.

<br/>

### Mode

> 웹팩의 실행모드를 설정한다. 이 실행모드에 따라서 웹팩의 결과물이 달라진다. 모드를 설정하지 않으면 기본값인 `production`으로 설정된다.

> development : 개발모드 / production : 배포모드 / none : 모드 설정 없음

```javascript
module.exports = {
	mode: 'development',
	//...
};
```

<br />

### Entry

> 모듈의 시작점의 `경로`를 지정한다.(자바스크립트라고 한다면, 자바스크립트 파일의 시작점)

> 여기서 경로라 함은 `JS파일의 경로`를 말한다.

> entry에 적힐 파일은 웹팩이 의존성 관계를 분석할 때, 최상위에 위치한 파일이다. 그 최상위로 부터 내려가면서 의존성 관계를 번들링한다. 그렇기 때문에 이 파일은 웹앱의 전반적인 구조를 담고 있어야 한다.

> 상황에 따라서 **여러 개의 entry파일**이 존재 할 수도 있다. 그런 경우에는 entry에 배열 혹은 객체를 사용 할 수 있다.

```javascript
module.exports = {
	entry: {
		main: './src/app.js',
	},
	//...
};
```

<br />

### Output

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

- `filename`은 웹팩이 빌드한 파일의 이름을 말한다. 그런데 여기서 `[name]` 이라고 적은 것은 무슨 의미일까? 이것은 entry에서 객체로 옵션을 설정했을 경우, **객체의 키값이 name에 들어오게 된다**. 그래서 결국 `main.js`라는 이름을 가진 파일이 생성된다. 이 외에도 이름 관련된 옵션들이 존재한다.

  > 참고로 `bundle.js`라는 이름으로 자주 사용한다.

- `path`는 실제 결과값의 위치를 `절대경로`로서 지정해 주는 것이다. 여기서 node.js의 path 모듈을 사용한다.

  > **[참고]** [path module](https://nodejs.org/api/path.html)

<br />

### Loaders

> 앞에서 말한 바와 같이 웹팩은 `모듈 번들러`이다. <u>모든 파일을 모듈로 바라본다.</u> 그렇기 때문에 우리가 웹팩을 사용하면 JS, CSS, image, font 등등을 import 를 통해서 다른 파일 안으로 가져올 수 있게 된다. 하지만 무조건 그렇게 되는 것은 아니다. 해당 리소스(모듈)에 맞는 옵션을 지정해줘야만 한다. 그러한 **옵션에 대한 규칙을 설정하여 해당 리소스가 모듈로서 사용 가능하게 변환시켜 주는 부분이 `Loader` 에서 하는 일**이다.

> 각각의 로더는 `npm install`을 통해서 설치 후 사용할 수 있다. '설정만 하고 왜 안되지?' 하는 경우 종종 있어서 기록해 둔다.

```javascript
module.exports = {
	entry: './src/app.js',
	output: {
		fileName: 'bundle.js',
		path: path.resolve(__dirname + '/dist'),
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};
```

> 대표적인 `css-loader`를 설정한 것이다.

> <u>`module`이라는 객체</u> 안에 <u>`rules` 라는 배열</u>에 객체를 추가해줌으로서 로더를 설정한다. 새로운 리소스에 대한 설정이라면 여러 개의 객체를 추가할 수 있다.

> 객체 안에는 `test`와 `use` 라는 키값을 갖는 프로퍼티를 만든다. test는 <u>어떤 리소스 파일에 대한 것인지 패턴을 밝히는 프로퍼티</u>이다. 이 부분은 정규표현식으로 작성된다. use는 <u>이 리소스에 어떠한 로더를 사용할 것인지를 배열 안의 요소로서 추가</u>한다. 특히 <u>**먼저 적용이 되어야하는 로더는 배열의 끝에 위치하여 뒤에서부터 순서대로 실행된다**</u>.

`css-loader`:

css-loader가 실행되면 css파일을 모두 JS파일 안에 코드로서 집어 넣는다. 그렇기 때문에 css-loader만 실행되면 JS파일 안의 CSS를 CSS로서 실행할 수 없기 때문에 제대로 된 동작을 할 수 없다.

`style-loader`:

CSS가 제대로 된 동작을 하기 위해선 CSS만으로 읽힐 수 있게 만들어 줘야한다. inline-script로서 혹은 html파일 내에서 CSS파일을 불러오게 만들거나 등등의 방법이 있을 수 있다. style-loader는 JS파일 안의 CSS를 inline-script로서 불러와서 CSS를 해당 페이지에 적용시킨다.

> 이러한 일련의 과정이 필요하기 때문에 CSS를 모듈로서 사용하기 위해선 2가지의 로더가 필요하다.

#### 그 외 대표적인 로더들

`file-loader`:

file-loader는 말 그대로 파일을 처리하는 로더로서 이미지나 폰트 같은 것들을 모듈로서 사용가능하게 만들어준다.

```javascript
module.exports = {
	//...
	module: {
		rules: [
			{
				test: /\.(jpg|png|svg|gif)$/,
				use: ['file-loader'],
			},
		],
	},
};
```

> 위에 처럼 사용하는 경우에 실제 페이지를 랜더링을 하게 되면 에러가 발생한다. 그 이유는 빌드 할 때, 이미지를 넣어준 위치와 실제 위치가 다르기 때문이다. 그렇기 때문에 빌드 후에 실제 존재하는 위치를 볼 수 있도록 옵션을 변경해줘야한다.

```javascript
module.exports = {
	//...
	module: {
		rules: [
			{
				test: /\.(jpg|png|svg|gif)$/,
				loader: 'file-loader',
				options: {
					publicPath: './dist/',
					name: '[name].[ext]?[hash]',
				},
			},
		],
	},
};
```

> 위의 코드 처럼 옵션을 약간 변경시켜줄 수 있다. 이 외에도 다양한 옵션이 있다. 웹팩 공식문서를 참고하여 상황에 맞게 커스터마이징 할 수 있어야 하겠다.

> `publicPath`는 빌드 후 파일 경로를 말한다. `name`은 파일 이름에 대한 옵션을 설정한다. `[name]`은 원본 파일 이름을 그대로 가져오고, `[ext]`는 파일의 확장자명을 말한다. `[hash]`는 특정 빌드에 해당하는 해쉬값을 뜻하는 것으로서 요청시 브라우저에서의 캐슁을 피하는 전략으로 사용하기 위한 것이다.

`url-loader`:

> 작은 이미지 같은 경우, base64 방식을 통해서 데이터를 문자열로 인코딩하여서 자바스크립트 파일의 인라인 코드로 넣어줄 수 있다. 이런 식으로 변환시켜주는 로더가 url-loader 이다.

> > [참고\_data uri schema](https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)

> url-loader를 사용하는 이유는 상황에 따라 달라질 수 있다. 예를 들어서 많은 파일을 받아야 하는 상황에서 작은 파일은 하나의 자바스크립트 코드 안에 넣어서 보내주는 것이 더 효율적이라면 url-loader를 사용할 수 있을 것이다.

```javascript
module.exports = {
	//...
	module: {
		rules: [
			{
				test: /\.(jpg|png|svg|gif)$/,
				loader: 'url-loader',
				options: {
					publicPath: './dist/',
					name: '[name].[ext]?[hash]',
					limit: 8196, //byte
					fallback: require.resolve('file-loader'),
				},
			},
		],
	},
};
```

> url-loader를 사용하기 위해선 우선 `limit` 옵션을 추가해야한다. limit는 바이트 용량을 설정한다. 이 설정값을 넘지 않으면, url-loader를 사용하여 빌드한다. 하지만 이 용량을 넘어서게 되면 fallback에 설정된 로더에 의해서 빌드된다. 기본값으로는 file-loader가 설정되어있다. 그렇기 때문에 위 코드 처럼 명시적으로 적어주지 않아도 용량이 큰 파일의 경우는 file-loader에 의해서 처리된다. 만약에 용량이 큰 파일을 다른 로더로 처리하고 싶다면 위 옵션을 사용하여 설정해주면 된다.

`babel-loader`:

`sass-loader`:

### Plugins

<br />

# Ref

- [웹팩 핸드북](https://joshua1988.github.io/webpack-guide/motivation/why-webpack.html#%EC%9B%B9%ED%8C%A9%EC%9D%98-%EB%93%B1%EC%9E%A5-%EB%B0%B0%EA%B2%BD)

- [프론트엔드 개발환경의 이해](https://jeonghwan-kim.github.io/series/2019/12/10/frontend-dev-env-webpack-basic.html)
