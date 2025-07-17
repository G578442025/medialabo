//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!
let shown = false; // ← フラグを定義

document.getElementById("show").addEventListener("click", show);

function show() {
  if (shown) return; // すでに表示していたら何もしない
  shown = true;      // 一度だけ表示するようにフラグをセット

  // 住所の表示
  const p = document.createElement("p");
  p.textContent = campus.address;
  const h2Address = document.querySelector("h2");
  h2Address.insertAdjacentElement("afterend", p);

  // 学科一覧の表示
  const ul = document.createElement("ul");
  for (const dept of gakka) {
    const li = document.createElement("li");
    li.textContent = dept.name;
    ul.appendChild(li);
  }
  const h2Gakka = document.querySelectorAll("h2")[1];
  h2Gakka.insertAdjacentElement("afterend", ul);
}
