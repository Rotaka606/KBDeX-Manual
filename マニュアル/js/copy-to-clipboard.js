document.addEventListener('DOMContentLoaded', function() {
    // パーマリンクのクリックイベントを設定
    const link = document.getElementById('link1');
    
    link.addEventListener('click', function(event) {
        event.preventDefault();  // デフォルトのリンク動作をキャンセル
        copyPermalink('#id1');
    });
});

function copyPermalink(hash) {
    const url = window.location.origin + window.location.pathname + hash;

    // クリップボードにコピーする処理
    navigator.clipboard.writeText(url).then(function() {
        alert('パーマリンクがコピーされました: ' + url);
    }).catch(function(err) {
        console.error('クリップボードにコピーできませんでした: ', err);
    });
}
