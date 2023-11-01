let nickName = "LordLaykon";
let qtdXP = 1600;
let nivel;

switch(true) {
  case qtdXP < 1000:
    nivel = "Ferro";
    break;

  case qtdXP >= 1001 && qtdXP <= 2000:
    nivel = "Bronze";
    break;

  case qtdXP >= 2001 && qtdXP <= 5000:
    nivel = "Prata";
    break;

  case qtdXP >= 6001 && qtdXP <= 7000:
    nivel = "Ouro";
    break;

  case qtdXP >= 7001 && qtdXP <= 8000:
    nivel = "Platina";
    break;

  case qtdXP >= 8001 && qtdXP <= 9000:
    nivel = "Ascendente";
    break;

  case qtdXP >= 9001 && qtdXP <= 10000:
    nivel = "Imortal";
    break;

  default:
    nivel = "Radiante";
}

console.log("O Herói " + nickName + " está no nível de " + nivel);
console.log("Foi o seu próprio reflexo que o assustou e ele não temia nada. Exceto o mal em sua própria face horrorosa. " + "Thundercats")
console.log(" ")
console.log("                 Developed              ");
console.log(" ")
console.log("            ____                          ");
console.log("           | __ )    ||      ||       ");
console.log("           |  _ \\      ||  ||          ");
console.log("           | |_) |       ||            ");
console.log("           |____/        ||            ");
console.log(" ");
console.log(" ");
console.log("                Cinara Neis             ");
console.log(" ")