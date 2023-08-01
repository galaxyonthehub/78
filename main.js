var images =
[
"https://yt3.googleusercontent.com/A2oBsCvsRdepij574-mJWnIM1bxdMqHUd1ZCX4tCoiSoNJxK1zqQ9R-Zd14F9-_8y5i7mmcj=s176-c-k-c0x00ffffff-no-rj", 
"https://blog.newoldman.com.br/wp-content/uploads/2021/04/Polemica-O-Que-e-Ser-um-Homem-Bonito.jpg", "https://diariodocomercio.com.br/wp-content/uploads/2022/08/mulher-na-politica-eleicoes.jpg"
];
var names = ["familia", "Pai", "Mãe"];
var i = 0;
function update()
{
    i++;

    var numbersOfFamilyMenberInArray = 2
    if(i > numbersOfFamilyMenberInArray)
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("familyMenberImage").src = updatedImage;
    document.getElementById("familyMenberName").innerHTML = updatedName;
}