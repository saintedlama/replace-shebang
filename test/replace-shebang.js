const replaceShebang = require('../');
const shebang = '#!/usr/bin/env node\nconsole.log("unicorns");';
const expect = require('chai').expect;

describe('replace-shebang', function() {
  it('should remove shebang', function() {
    var replaced = replaceShebang(shebang);

    expect(replaced).to.equal('\nconsole.log("unicorns");');
  });

  it('should replace shebang', function() {
    var replaced = replaceShebang(shebang, '// shebang');

    expect(replaced).to.equal('// shebang\nconsole.log("unicorns");');
  });

  it('should invoke a replace function shebang', function() {
    var replaced = replaceShebang(shebang, m => '// ' + m);

    expect(replaced).to.equal('// #!/usr/bin/env node\nconsole.log("unicorns");');
  });
});