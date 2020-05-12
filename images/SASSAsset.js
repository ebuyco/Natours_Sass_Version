let opts =
(await this.getConfig(['.sassrc', '.sassrc.js'], {packageKey: 'sass'})) ||
{};

opts.includePaths = (opts.includePaths
? opts.includePaths.map(includePath => path.resolve(includePath))
: []
).concat(path.dirname(this.name));
opts.data = opts.data ? opts.data + os.EOL + code : code;
let type = this.options.rendition
  ? this.options.rendition.type
