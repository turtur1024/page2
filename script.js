// 按鈕名稱陣列（你可以自己改成你要的名稱）
const buttonNames = [
  "首頁", "關於我們", "商品1", "商品2", "會員專區",
  "客服", "活動頁", "部落格", "聯絡我們", "退出"
];

// 每個名稱對應的網址
const buttonUrls = [
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "https://www.youtube.com/watch?v=1S4xFl4CD34",
  "https://www.youtube.com/watch?v=qAtgtS-Yz5Q&pp=ygUJ6Im-55Ge5Y2h",
  "https://www.youtube.com/shorts/XvAlNtk-ZU0",
  "https://www.youtube.com/watch?v=iaQrBrwT1r8&t=684s&pp=ygUS5paH5bGx5ZyL5Lit5qCh5oW2",
  "https://www.youtube.com/watch?v=WW3kBbsy80M&pp=ygUS5paH5bGx5ZyL5Lit5qCh5oW2",
  "https://www.youtube.com/watch?v=0mCEjsMvQiE",
  "https://www.youtube.com/watch?v=C-u5WLJ9Yk4",
  "https://www.youtube.com/watch?v=TuHOBjKueKs&pp=ygUS576p5YuH6LuN6YCy6KGM5puy",
  "https://www.youtube.com/watch?v=bAXXhFbhBw4&pp=ygUP6L-q6L-q5LiN6KaB5YGc"
];

function showNumberButtons() {
  const box = document.getElementById('main-box');
  box.innerHTML = `
    <h2>請選擇要前往的頁面</h2>
    <div class="number-buttons" id="number-buttons"></div>
  `;

  const buttonContainer = document.getElementById('number-buttons');

  for (let i = 0; i < buttonNames.length; i++) {
    const btn = document.createElement('button');
    btn.textContent = buttonNames[i];
    btn.onclick = () => goToSite(i);
    buttonContainer.appendChild(btn);
  }
}

function goToSite(index) {
  const url = buttonUrls[index];
  if (url) {
    window.location.href = url;
  } else {
    alert("無效的選擇");
  }
}

function denyAccess() {
  document.body.innerHTML = `
    <div class="denied">
      <h2>很抱歉，您必須年滿 18 歲才能進入本網站。</h2>
      <img src="denied.jpg" alt="拒絕訪問圖片">
    </div>
  `;
}
