Package.describe({
  name: 'dpraburaj:react-spin',
  version: '2.3.4',
  summary: 'Spin.js wrapper for React.js projects in Meteor',
  git: 'https://github.com/dpraburaj/meteor-react-spin',
});

Npm.depends({
  "spin.js": "2.3.1"
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('react@0.1.4');

  api.addFiles([
    '.npm/package/node_modules/spin.js/spin.js',
    'lib/spinner.css',
    'lib/spinner.jsx',
  ], 'client');

  api.export(['SpinnerView', 'SpinnerMixin'], 'client');
});
