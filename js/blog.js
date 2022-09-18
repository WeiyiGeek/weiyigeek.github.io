$.BLOG = {
	init: function() {
		this.console();
		this.basic();
		this.menu();
		setTimeout(function(THIS) {
			THIS.toc().scroll( $(window).scrollTop() );
			THIS.toc().go();
		}, 500, this);
		this.scroll();
		this.resize();
		this.goTop().active();
		this.share();
		this.header();
		this.search().init();
		this.reward();
		this.waves();
		this.mask();
		this.waterfall();
		this.footer();
		this.tabBar();
	},
	console: function() {
		console.log('Welcome to WeiyiGeek\'Blog Site - [https://blog.weiyigeek.top].\n花开堪折直须折，莫待无花空折枝!');
    console.log('%c希望与各位志同道合的朋友一起学习交流，如文章有误请留下您宝贵的知识建议，或者通过邮箱【master#weiyigeek.top】联系我哟！', 'color:white');
    console.log('%c专栏书写不易,如果您觉得这个专栏还不错的,请给这篇专栏 【点个赞、投个币、收个藏、关个注，转个发】(人间五大情),这将对我的肯定,谢谢支持！(๑′ᴗ‵๑) ❤！', 'color:red');
	},
	basic: function() {
		$.fixedClick();
		$.page().loaded();
	},
	menu: function() {
   		$.toggleMenu().init();
	},
	header: function(top) {
		if (!top) {
			var top = $(window).scrollTop();
		}
		$.fixedHeader(top);
	},
	footer: function() {
		$.initFooter();
	},
	toc: function() {
		var toc = $('#post-toc');
		var repo = $('#repo');
		return {
			scroll: function(top) {
				if (!toc.length) return;
				$.toc().fixed(top);
				$.toc().actived(top);
			},
			go: function() {
				if (!toc.length && !repo.length) {
					$('.post-article').css("width", "100%");
					return;
				};
				$.toc().go();
			}
		}
	},
	goTop: function() {
		return {
			active: function() {
				$.toggleGoTop().active();
			},
			scroll: function(top) {
				$.toggleGoTop().scroll(top);
			}
		}
	},
	share: function() {
		$.share();
	},
	search: function() {
		return {
			init: function() {
				$.search().init();
				$.search().zoom();
			},
			zoom: function() {
				$.search().zoom();
			},
		}
	},
	waves: function(){
		$.waves();
	},
	reward: function() {
		$.reward();
	},
	mask: function() {
		$.mask();
	},
	waterfall: function() {
		$.waterfall();
	},
	tabBar: function() {
		$.tabBar();
	},
	scroll: function() {
		$(window).scroll(function() {
			var top = $(window).scrollTop();
			$.BLOG.toc().scroll(top);
			$.BLOG.header(top);
			$.BLOG.goTop().scroll(top);
			$.BLOG.waterfall();
		});
	},
	resize: function() {
		$(window).resize(function() {
			var top = $(window).scrollTop();
			$.BLOG.toc().scroll(top);
			$.BLOG.search().zoom();
		});
	}
};

$.BLOG.init();