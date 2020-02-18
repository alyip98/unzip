const AdmZip = require('adm-zip');
const core = require('@actions/core');

try {
  const file = core.getInput('file', {required: true});
  const path = core.getInput('path', {required: true}) || '';
  new AdmZip(file).extractAllTo(path, true);
  core.setOutput('path', path);
} catch (error) {
  core.setFailed(error.message);
}

