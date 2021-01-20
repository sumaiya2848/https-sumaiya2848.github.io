lucasMass = 95;
lucasHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

let lucasBMI = lucasMass / lucasHeight ** 2;
let johnBMI = johnMass / (johnHeight ** 2);

let lucasHigherBMI = Boolean(lucasBMI > johnBMI);

console.log("Lucas and John are friends, Lucas is " + lucasHeight + "m tall and John is " + johnHeight + "m tall. So John has higher BMI than Lucas, that is " + !lucasHigherBMI + ".");