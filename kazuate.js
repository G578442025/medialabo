// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
document.getElementById("kaisu").textContent = kaisu;

document.getElementById("kaitou").addEventListener("click",hantei);

function hantei() {


  let yoso1 = document.querySelector("input#yoso");
   yoso1.Value;
  let yoso = yoso1;
  kaisu=kaisu+1;
  console.log(kaisu+"回目の予想:"+yoso);

if(kaisu>=4){
  console.log("答えは"+kotae+"でした。すでにゲームは終わっています");
}else if(kotae===yoso){
  console.log("正解です。おめでとう！");
}else{
  if(kaisu===3){
    console.log("まちがい、残念でした答えは"+kotae+"です。")
  }else if(kaisu>=2&&yoso<kotae){
    console.log("まちがい、答えはもっと大きいですよ")
  }else if(kaisu>=2&&yoso>kotae){
    console.log("まちがい、答えはもっと小さいですよ")
  }
}

}