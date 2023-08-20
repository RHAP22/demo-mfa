import React from "react";
var QRCode = require("qrcode")

function a(){
    let data_src
    QRCode.toDataURL('qdqfqbfjkqbfajlf', function(err, data){
        data_src = data
        console.log(data)
      }) 
      return data_src
}
let data_src
console.log("adaada")
QRCode.toDataURL('qdqfqbfjkqbfajlf', function(err, data){
  data_src = data
  console.log(data)
})

export default function QrcodeImg(){
    return(
     <div>
        <img src = {data_src}></img>
     </div>   
    )
}