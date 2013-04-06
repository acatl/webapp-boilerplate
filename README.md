WebApp Boilderplate

## Dependencies

* [http://nodejs.org/](http://nodejs.org/)
* [http://git-scm.com/](http://git-scm.com/)
* [http://coffeescript.org/](http://coffeescript.org/)
* [http://sass-lang.com/](http://sass-lang.com/)
* [http://jade-lang.com/](http://jade-lang.com/)
* [http://nodejs.org/](http://nodejs.org/)
* [http://expressjs.com/](http://expressjs.com/)
* [http://gruntjs.com/](http://gruntjs.com/)
* [http://twitter.github.com/bower/](http://twitter.github.com/bower/)


## Installation

1. download -> install **git**
  [http://git-scm.com/download/](http://git-scm.com/download/)

2. download -> install **NodeJS**
  [http://nodejs.org/](http://nodejs.org/)

3. install **coffeescript**
  [http://coffeescript.org/](http://coffeescript.org/)
  ```bash
  sudo npm install -g coffee-script
  ```
4. install **SASS**
  [http://sass-lang.com/](http://sass-lang.com/)
  ```bash
  sudo gem install sass
  ```
5. install **jade**
  [https://github.com/visionmedia/jade#readme](https://github.com/visionmedia/jade#readme)
  ```bash
  sudo npm install jade
  ```
6. install **grunt**
  ```bash
  sudo npm install -g grunt-cli
  ```
7. install **bower**
  [http://twitter.github.io/bower/](http://twitter.github.io/bower/)
  ```bash
  npm install -g bower
  ```


## Common Tasks:

### Grunt start watching files to auto compile

```bash
grunt watch
```

### Grunt recompile bower components

```bash
bower concat:plugins
```

### Update components (bower)
remember to recompile components after updating

```bash
bower update
```



