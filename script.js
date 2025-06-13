// AOS（Animate On Scroll）ライブラリを初期化
AOS.init({
    duration: 1000, // アニメーションが完了するまでの時間（ミリ秒）
    once: true,     // アニメーションを1回だけ実行する
});

// ===== モーダル（ポップアップ）機能 =====
const modalTriggers = document.querySelectorAll('[data-modal-target]');
const modals = document.querySelectorAll('.modal');
const modalCloses = document.querySelectorAll('.modal__close');

// ポップアップを開く
modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const modalId = trigger.getAttribute('data-modal-target');
        const modal = document.querySelector(modalId);
        if (modal) {
            modal.classList.add('is-visible');
        }
    });
});

// ×ボタンでポップアップを閉じる
modalCloses.forEach(close => {
    close.addEventListener('click', () => {
        const modal = close.closest('.modal');
        if (modal) {
            modal.classList.remove('is-visible');
        }
    });
});

// ポップアップの外側をクリックして閉じる
modals.forEach(modal => {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('is-visible');
        }
    });
});