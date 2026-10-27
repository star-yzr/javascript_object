// JavaScript
console.log('Hello world!');

const products = [
    { name: 'リングライト（ランダム）', price: 1800, image: 'images/img18.png', inStock: true },
    { name: 'サコッシュ', price: 3500, image: 'images/img16.png', inStock: false },
    { name: '雑誌', price: 1200, image: 'images/img13.png', inStock: true },
    { name: '絵の具セット', price: 2100, image: 'images/img17.png', inStock: true },
    { name: '日焼け止めクリーム', price: 700, image: 'images/img14.png', inStock: true },
    { name: '二階建て観光バス貸切', price: 50000, image: 'images/img15.png', inStock: false }
];

console.log('商品配列:', products);
console.log('商品数:', products.length);
console.log('2番目の商品:', products[1]);
console.log('2番目の値段:', products[1].price);

const productContainer = document.querySelector('#product-container');
const showAllBtn = document.querySelector('#show-all');
const filterPriceBtn = document.querySelector('#filter-price');
const filterStockBtn = document.querySelector('#filter-stock');

// --- 関数：商品の配列を受け取って、画面にカードを表示する ---
function displayProducts(productArray) {
    productContainer.innerHTML = ''; // 表示エリアを一度空にする

    productArray.forEach(product => {
        // 在庫状況に応じて表示を変える
        const stockStatus = product.inStock ? '在庫あり' : '在庫なし';

        // カードのHTMLを文字列として組み立てる
        const cardHTML = `
            <div class="card">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p class="price">¥${product.price.toLocaleString()}</p>
                <p class="stock">${stockStatus}</p>
            </div>
        `;
        // 組み立てたHTMLをコンテナに追加
        productContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
}

//←ここにイベントを追加
showAllBtn.addEventListener('click', () => {
    displayProducts(products); // 全ての商品データをそのまま表示
});

filterPriceBtn.addEventListener('click', () => {
    // filterを使って、価格が2000円以下の商品だけを絞り込む
    const cheapProducts = products.filter(p => p.price <= 2000);
    displayProducts(cheapProducts); // 絞り込んだ結果を表示
});

filterStockBtn.addEventListener('click', () => {
    // filterを使って、在庫がある商品だけを絞り込む
    const stockProducts = products.filter(p => p.inStock === true);
    displayProducts(stockProducts); // 絞り込んだ結果を表示
});

displayProducts(products); // 初期表示