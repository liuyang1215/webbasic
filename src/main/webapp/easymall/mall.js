
	window.onload = function() {
		var second = document.getElementById("second"),
		pic = document.getElementById("ad_img").getElementsByTagName("li"),
		list = document.getElementById("ad_num").getElementsByTagName("li"),
		index = 0,
		timer = null;	
	
	timer = setInterval(autoPlay,2000);
	second.onmouseover = function() {
		clearInterval(timer);
	}
	second.onmouseout = function() {
		timer = setInterval(autoPlay,2000);
	}
	for(var i = 0;i< list.length;i++) {
		list[i].onmouseover = function() {
			clearInterval(timer);
			index = list.innerText-1;
			changPic(index);
		}
	}
	function autoPlay() {
		if(++index >= pic.length)index = 0;
		changePic(index);
	}
	function changePic(curIndex) {
		for(var i=0; i<pic.length; ++i) {
			pic[i].style.display ="none";
			list[i].className = "";
		}
		pic[curIndex].style.display = "block";
		list[curIndex].className = "ad_num";
	}
};