var reduce = require('../');
var test = require('tape');

test('numeric reduces', function (t) {
    t.plan(6);
    
    var xs = [ 1, 2, 3, 4 ];
    t.equal(
        reduce(xs, function (acc, x) { return acc + x }, 0),
        10
    );
    t.equal(
        reduce(xs, function (acc, x) { return acc + x }, 100),
        110
    );
    t.equal(
        reduce(xs, function (acc, x) { return acc + x }),
        10
    );
    
    var ys = cripple([ 1, 2, 3, 4 ]);
    t.equal(
        reduce(ys, function (acc, x) { return acc + x }, 0),
        10
    );
    t.equal(
        reduce(ys, function (acc, x) { return acc + x }, 100),
        110
    );
    t.equal(
        reduce(ys, function (acc, x) { return acc + x }),
        10
    );
});

function cripple (xs) {
    xs.reduce = undefined;
    return xs;
}
