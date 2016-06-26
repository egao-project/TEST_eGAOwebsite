
$(function(){
var $menu = $('#slide_menu'), // スライドインするメニューを指定
    $menuBtn = $('#toggle-btn'), // メニューボタンを指定
    $wrap = $('#header'),     
    menuWidth = $menu.outerWidth();                	
     
    // メニューボタンをクリックした時の動き
    $menuBtn.on('click', function(){
    	// $wrap に open クラスを付与する
    	$wrap.toggleClass('open');
    	    if($wrap.hasClass('open')){
    	        // open クラスが $wrap についていたらメニューをスライドインする
    	        $wrap.animate({'ridht' : menuWidth }, 300);            
    	        $menu.animate({'right' : 0 }, 300);                    
    	    } else {
    	        // open クラスが $wrap についていなかったらスライドアウトする
    	        $menu.animate({'right' : -menuWidth }, 300);
    	        $wrap.animate({'right' : 0 }, 300);            
    	    }             
    });
});    