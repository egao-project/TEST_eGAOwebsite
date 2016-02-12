
$(function(){
var menu = $('#slide_menu'), // スライドインするメニューを指定
    menuBtn = $('#toggle-btn'), // メニューボタンを指定
    body = $(document.body),     
    menuWidth = menu.outerWidth();                	
     
    // メニューボタンをクリックした時の動き
    menuBtn.on('click', function(){
    	// body に open クラスを付与する
    	body.toggleClass('open');
    	    if(body.hasClass('open')){
    	        // open クラスが body についていたらメニューをスライドインする
    	        body.animate({'ridht' : menuWidth }, 300);            
    	        menu.animate({'right' : 0 }, 300);                    
    	    } else {
    	        // open クラスが body についていなかったらスライドアウトする
    	        menu.animate({'right' : -menuWidth }, 300);
    	        body.animate({'right' : 0 }, 300);            
    	    }             
    });
});    