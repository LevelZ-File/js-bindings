if [ ! -d "docs" ]; then
  mkdir docs
fi

browserify index.js -t [ babelify --presets [ @babel/preset-env ] ] > docs/levelz.js
terser docs/levelz.js --compress --source-map --output docs/levelz.js