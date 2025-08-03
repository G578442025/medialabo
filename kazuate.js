// 答え
let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 回答回数
let kaisu = 1;
document.getElementById("kaisu").textContent = kaisu;

document.getElementById("kaitou").addEventListener("click", hantei);

function hantei() {
  let yoso = Number(document.getElementById("yoso").value);
  let result = document.getElementById("result");
  let answer = document.getElementById("answer");

  answer.textContent = yoso;

  if (kaisu <= 3) {
    if (yoso === kotae) {
      result.textContent = "正解です。おめでとう！";
    } else if (kaisu === 3) {
      result.textContent = "まちがい。残念でした。答えは " + kotae + " です。";
    } else if (yoso > kotae) {
      result.textContent = "まちがい。答えはもっと小さいですよ。";
    } else if (yoso < kotae) {
      result.textContent = "まちがい。答えはもっと大きいですよ。";
    }
  } else {
    result.textContent = "答えは " + kotae + " でした。すでにゲームは終わっています。";
  }

  kaisu++;
  document.getElementById("kaisu").textContent = kaisu;
}
