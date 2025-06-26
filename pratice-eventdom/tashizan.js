

function answer(){

   let left = document.querySelector('input[name="left"]');
   let i1 = parseInt(left.value);

   let right = document.querySelector('input[name="right"]');
   let i2 = parseInt(right.value);

   let sum = i1 + i2;
   console.log(sum);


    swer1 = document.querySelector("span#answer");
    swer1.textContent = sum;
}

let kotae = document.querySelector("button#calc");
kotae.addEventListener("click",answer);