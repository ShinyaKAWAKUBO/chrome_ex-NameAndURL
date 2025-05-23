document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('copyInfoBtn').addEventListener('click', async () => {
        try {
            const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
            const infoToCopy = `${tab.title}\n${tab.url}`;
            await navigator.clipboard.writeText(infoToCopy);

            // 成功時の処理
            document.getElementById('copyInfoBtn').textContent = 'コピーしました'; // ボタンのテキストを変更
            setTimeout(window.close, 500); // 0.5秒後にポップアップを閉じる

        } catch (err) {
            console.error('情報のコピーに失敗しました: ', err);
            alert('情報のコピーに失敗しました。');
            window.close(); 
        }
    });
});
