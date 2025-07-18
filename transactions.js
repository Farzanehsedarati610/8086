const transactionMap = new Map([
    ["20f586474bf292d420bb8c5139bfb8224cda900280ffa2c95b45a33eb98e96cd", { routing: "283977688", account: "0000339715", register: "AX" }],
    ["c1e586cecb4f643611e882c6b3638f2d51a7b6ccd4f647c305351fccde94b9b4", { routing: "283977688", account: "0000339715", register: "BX" }],
    ["7f1c56bf38070c1637e6b0ce91fe5ab1ab8474be6dab8be2a3bf8eadb771e062", { routing: "283977688", account: "0000339715", register: "CX" }],
    ["b818d555523674878848476ee8ffc99cff1c95529e3cc450511672922a4a5736", { routing: "283977688", account: "0000339715", register: "DX" }],
    ["3e153176e6fcf704b9ebdb6cce4818ea6f276bcb42d4db72d6207df3434f3344", { routing: "283977688", account: "0000339715", register: "AX" }],
    ["94e02b38274bfc81e66ea2e90f57f62faa2b5ae13e15bf89a3fc113881871e4e", { routing: "283977688", account: "0000339715", register: "BX" }],
    ["029ff25d832b97b9d55fc93078dac6552a61be7a", { routing: "283977688", account: "0000339715", register: "CX" }],
    ["7c7228137410dc76b4925dfcc729fdc92cfd94a026022111c1a502d6240580fb", { routing: "283977688", account: "0000339715", register: "DX" }],
    ["26efc86c0269a129bd183480f947c7424a48f9523156a8a70d3dfe5ed7103aab", { routing: "283977688", account: "0000339715", register: "AX" }],
    ["c6f44160cdd0479af696b81abdd1982d36e08263322e4c5b07bf27b5623b29d5", { routing: "283977688", account: "0000339715", register: "BX" }],
    ["d71d4b23cb2ec49e7b0ff31fd563b5ffdf4899dbecebd599711213ff37e52bd9", { routing: "283977688", account: "0000339715", register: "CX" }],
    ["3fc8241058ee913bfe277e4652abc04822b33aa939d6f65084aae02e917eeff1", { routing: "283977688", account: "0000339715", register: "DX" }],
    ["663e295cc4399e9a551571eebd7a4db0d6f3662c87eb18d0e0a2a4b67f07145c", { routing: "283977688", account: "0000339715", register: "AX" }],
    ["8470faf251f8c3c8672718cbd982f942ce649bb69714794eb8b1de934cb59d52", { routing: "283977688", account: "0000339715", register: "BX" }],
    ["dc5b25606dc0c977dec5aa13d61946b470066976aefcf390c40ffaff75d9a186", { routing: "283977688", account: "0000339715", register: "CX" }],
    ["a23b0d1d1e8a721623a1a85b64a353fface595030eb41ba33d8fe4a554ee59d5", { routing: "283977688", account: "0000339715", register: "DX" }],
    ["3842daf9315978e904e20579f52913aec3274e22b09c4fa9ddd2a2b7", { routing: "283977688", account: "0000339715", register: "AX" }],
    ["ca4ba96c58580a9d2ddbc99d993cf0a703c366c85f608a8d9d6b3890", { routing: "283977688", account: "0000339715", register: "BX" }],
    ["65a6745f084e7af17e1715ae9302cc14820e331af610badd3d9805cb9cd3504e", { routing: "283977688", account: "0000339715", register: "CX" }]
]);

function executeTransaction(hash) {
    const details = transactionMap.get(hash);
    if (!details) return console.error("Invalid transaction hash.");

    console.log(`MOV ${details.register}, [${hash}]`);
    console.log(`Transaction routing: ${details.routing}, Account: ${details.account}`);
    console.log(`OUT DX, AL  ; Sending transaction through port 8086`);
}

