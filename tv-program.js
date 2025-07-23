
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log(data);

  // 番組リストだけ出力（g1 = NHK総合1）
  const programs = data.list.g1;
  console.log(programs);

  // 各番組の情報を1件ずつ表示
  programs.forEach(program => {
    console.log('タイトル:', program.title);
    console.log('開始時刻:', program.start_time);
    console.log('終了時刻:', program.end_time);
    console.log('チャンネル:', program.service.name);
    console.log('出演者:', program.act || '記載なし');
    console.log('----------------------------');
  });
}

let btn = document.querySelector('button');
btn.addEventListener('click', sendRequest);


// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let oldResult = document.querySelector("#result");
  if (oldResult) {
    oldResult.remove();
}

let resultDiv = document.createElement("div");
  resultDiv.id = "result";
  resultDiv.classList.add("result-box"); // CSSが適用されるように

  // 見出しを追加
  let title = document.createElement("div");
  title.className = "result-title";
  title.textContent = "番組表の検索結果";
  resultDiv.appendChild(title);

  // table 要素を作成
  let table = document.createElement("table");

  // thead を作成
  let thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
      <th>開始時刻</th>
      <th>終了時刻</th>
      <th>チャンネル</th>
      <th>タイトル</th>
      <th>出演者</th>
    </tr>
  `;
  table.appendChild(thead);

  // tbody を作成
  let tbody = document.createElement("tbody");
  let programs;
  if(data.list!==null ){

  if(data.list.e1!==undefined){
    programs=data.list.e1
  }else{
    programs = data.list.g1
  }
  
  programs.forEach(program => {
    const tr = document.createElement("tr");

    let tdStart = document.createElement("td");
    tdStart.textContent = program.start_time;
    tr.appendChild(tdStart);

    let tdEnd = document.createElement("td");
    tdEnd.textContent = program.end_time;
    tr.appendChild(tdEnd);

    let tdChannel = document.createElement("td");
    tdChannel.textContent = program.service.name;
    tr.appendChild(tdChannel);

    let tdTitle = document.createElement("td");
    tdTitle.textContent = program.title;
    tr.appendChild(tdTitle);

    let tdAct = document.createElement("td");
    tdAct.textContent = program.act || "記載なし";
    tr.appendChild(tdAct);

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  resultDiv.appendChild(table);

  // body の末尾に追加
  
}else{
 let p = document.createElement("p");
 p.textContent = "チャンネルがありませんでした"
 resultDiv.insertAdjacentElement("beforeend",p);
}
document.body.appendChild(resultDiv);
}
// 課題6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

let s = document.querySelector('select#ch1');

let r = document.querySelector('select#ch2');


  let url = "https://www.nishita-lab.org/web-contents/jsons/nhk/"+s.value+"-"+r.value+"-j.json";

  axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;
  if (typeof data === 'string') {
        data = JSON.parse(data);
  }
  printDom(data);

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

// //////////////////////////////////////
// 以下はテレビ番組表のデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
// let data = {
// "list": {
//     "g1": [
//       {
//         "id": "2022030428673",
//         "event_id": "28673",
//         "start_time": "2022-03-04T04:35:00+09:00",
//         "end_time": "2022-03-04T04:40:00+09:00",
//         "area": {
//           "id": "130",
//           "name": "東京"
//         },
//         "service": {
//           "id": "g1",
//           "name": "ＮＨＫ総合１",
//           "logo_s": {
//             "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
//             "width": "100",
//             "height": "50"
//           },
//           "logo_m": {
//             "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
//             "width": "200",
//             "height": "100"
//           },
//           "logo_l": {
//             "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
//             "width": "200",
//             "height": "200"
//           }
//         },
//         "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
//         "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
//         "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
//         "act": "",
//         "genres": [
//           "0409",
//           "0700",
//           "0504"
//         ]
//       },
//       {
//         "id": "2022030427069",
//         "event_id": "27069",
//         "start_time": "2022-03-04T23:05:00+09:00",
//         "end_time": "2022-03-04T23:10:00+09:00",
//         "area": {
//           "id": "130",
//           "name": "東京"
//         },
//         "service": {
//           "id": "g1",
//           "name": "ＮＨＫ総合１",
//           "logo_s": {
//             "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
//             "width": "100",
//             "height": "50"
//           },
//           "logo_m": {
//             "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
//             "width": "200",
//             "height": "100"
//           },
//           "logo_l": {
//             "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
//             "width": "200",
//             "height": "200"
//           }
//         },
//         "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
//         "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
//         "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
//         "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
//         "genres": [
//           "0700"
//         ]
//       }
//     ]
//   }
// };

