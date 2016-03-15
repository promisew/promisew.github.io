$(function (){
	$menu	=	$('.menu li');
	$subMenuWrapper	=	$('#submenu-wrapper');
	$subMenu	=	$('#submenu-wrapper ul');
	$firstSumMenu	=	$subMenu.eq(0);
	//console.log($menu+'\n'+$subMenuWrapper+'\n'+$subMenu+'\n'+$firstSumMenu);
	$menu.hover(function (){
		$subMenuWrapper.stop().animate({'marginTop':'0px'});
	},function (){
		$subMenuWrapper.stop().animate({'marginTop':'-155px'});
	});
	
	$subMenuWrapper.hover(function (){
		$subMenuWrapper.stop().animate({'marginTop':'0px'});
	},function (){
		$subMenuWrapper.stop().animate({'marginTop':'-155px'});
	});
	
});


/*$(document).ready(function() {
	
	menu				= $('.menu li');
	submenuWrapper	= $('#submenu-wrapper'); 
	submenu			= submenuWrapper.children('ul');
	firstSubmenu 	= submenu.eq(0);
	
	menu.hover(
		function() {
			moveTo = $(this).index() * (firstSubmenu.height() + 20);
			showsubmenu(submenuWrapper);
			firstSubmenu.stop().animate({'marginTop' : '-'+moveTo+'px' });
		},
		
		function() { hidesubmenu(submenuWrapper); });
	
	submenuWrapper.hover(
		function() { showsubmenu($(this)); },
		function() { hidesubmenu($(this));
	});
	
	submenu
		.children('li')
		.hover(	function() { $(this).siblings().stop().animate({'opacity':'0.5'}); }, 
					function() { $(this).siblings().stop().animate({'opacity':'1'}); });
	
	submenu
		.hover(	function() { menu.eq($(this).index()).addClass('selected')  },
					function() { menu.eq($(this).index()).removeClass('selected') });
	
	function showsubmenu(item) {
		if(!item.hasClass('show'))
			item.addClass('show').stop().animate({'marginTop' : '0'});
	}
	
	function hidesubmenu(item) {
		item.removeClass('show').stop().animate({'marginTop' : '-170px'});
	}
	
});*/