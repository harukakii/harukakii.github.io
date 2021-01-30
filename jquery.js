
// ページ共通 TOPへ戻るボタン設定
$(function () {
    $('.page__top').click(function () {
        $("html,bady").animate({ scrollTop: 0 }, "300");  //スクロール時間
    });
});

// ページ共通 TOPボタン表示設定
$(function () {
    $('.page__top').hide();
    $(window).scroll(function () {
        if ($(window).scrollTop() > 250) {
            $('.page__top').fadeIn(1000);
        } else {
            $('.page__top').fadeOut(1000);
        }
    });
});

// imdex.html プロフィール部分スライドイン設定
$(window).scroll(function () {
    $('.profile__container').each(function () {
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 60) {
            $(this).addClass('scrollin');
        }
    });
});


// album.html モーダルウィンドウ設定
$(function () {

    // モーダルのボタンをクリックした時
    $('.modal_trigger .modal_btn').on('click', function () {
        var btnIndex = $(this).index(); // 何番目のモーダルボタンかを取得
        $('.modal_area .modal_box').eq(btnIndex).fadeIn(); // クリックしたモーダルボタンと同じ番目のモーダルを表示する
    });

    // ×やモーダルの背景をクリックした時
    $('.modal_close , .modal_bg').click(function () {
        $('.modal_box').fadeOut(); // モーダルを非表示にする
    });
});


