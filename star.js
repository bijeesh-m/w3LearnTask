let row = 6;

// for (let i = 1; i <= row; i++) {
//     let star = "";
//     for (let s = 1; s <= row - i; s++) {
//         star += "  ";
//     }
//     for (let j = 1; j <= i; j++) {
//         star += "* ";
//     }

//     console.log(star);
// }
// for (let i = row-1; i >=1; i--) {
//     let star = "";
//     for (let s = 1; s <= row - i; s++) {
//         star += "  ";
//     }
//     for (let j = 1; j <= i; j++) {
//         star += "* ";
//     }

//     console.log(star);
// }

for (let i = 1; i <= row; i++) {
    let star = "";

    for (let s = 1; s <= row - i; s++) {
        star += " ";
    }

    for (let j = 1; j <= row; j++) {
        if (i === 1 || i === row || j === 1 || j === row) {
            star += "* ";
        } else {
            star += "  ";
        }
    }

    console.log(star);
}
