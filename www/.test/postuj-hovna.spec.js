mocha.setup('bdd');

require('./map.spec');
require('./downscale-image.spec');
//all specs need to be enumerated here

if (window.mochaPhantomJS) {
    mochaPhantomJS.run();
} else {
    mocha.run(function() {
        console.log('tests ran at ', new Date());
    });
}