


const buttonGenerate = document.querySelector(".button-generate");
const nickName = document.querySelector(".nickname-input");
const userGender = document.querySelector("select");
const imageGenerate = document.querySelector(".image-generate");

buttonGenerate.addEventListener("click",() => {
 
  console.log(nickName.value)
  console.log(userGender.options[userGender.selectedIndex].value)

  imageGenerate.src=`https://joeschmoe.io/api/v1/${userGender.options[userGender.selectedIndex].value}/${nickName.value}`
})


