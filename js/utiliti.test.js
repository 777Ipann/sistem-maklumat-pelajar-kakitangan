const {
    tambah
} = require("./utiliti"); 

test(
    "Tambah nombor",
    () => {
        expect(
            tambah(2, 3)
        ).toBe(5);
    }
);