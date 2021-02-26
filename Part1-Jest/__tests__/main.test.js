const vol = require('../assets/scripts/main');

describe( 'volume', () => {
    test('is level 3', () => {
        expect(vol(67)).toBe(`./assets/media/icons/volume-level-3.svg`);
    });

    test('is level 2', () => {
        expect(vol(34)).toBe(`./assets/media/icons/volume-level-2.svg`);
    });

    test('is level 1', () => {
        expect(vol(1)).toBe(`./assets/media/icons/volume-level-1.svg`);
    });

    test('is level 0', () => {
        expect(vol(0)).toBe(`./assets/media/icons/volume-level-0.svg`);
    });
});

// test('', () => {
//     expect().toBe();
// });