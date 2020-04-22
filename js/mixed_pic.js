var pics = {
  data: [

  ],
  address: getImageBaseUrl(),
};
layui.use(['jquery','flow'], function () {
	var $ = layui.jquery;
	// 流加载 图片
    var flow = layui.flow;
    var count = pics.data.length-1;

    console.log(pics.data[0]);
    console.log(pics.data);
    flow.load({
    	elem: '.mixed-main', //流加载容器
    	isAuto: true,
		//address: getImageBaseUrl(),
    	end: '没有更多的图片了~QAQ',
    	  done: function(page,next) {
            var lis = [];
    		for (var i=0; i<8; i++) {
    			if (count < -1) break;
    			if (count==-1) {
    				lis.push('<div class="mixed shadow animated zoomIn">'+
    	                 '<div class="mixed-pic">'+
    	                    '<a href="javascript:"><img src="images/pic/0.jpg" alt="图片还在拍摄中" /></a>'+
	                    '</div>'+
	                    '<div class="mixed-info">图片还在拍摄中</div>'+
	                    '<div class="mixed-footer">'+
	                        '<a class="layui-btn layui-btn-small layui-btn-primary layui-btn-disabled"><i class="fa fa-eye fa-fw"></i>查看</a>'+
	                        '<a class="layui-btn layui-btn-small layui-btn-primary layui-btn-disabled"><i class="fa fa-download fa-fw"></i>下载</a>'+
	                    '</div>',
	                '</div>');
    			} else {
                    lis.push('<div class="mixed shadow animated zoomIn">'+
	                    '<div class="mixed-pic">'+
	                        '<a href="javascript:view('+count+')"><img src="'+'http://182.92.169.183:80/download/'+pics.data[count].img+'" alt="'+pics.data[count].content+'" /></a>'+
	                    '</div>'+
	                    '<div class="mixed-info">'+pics.data[count].content+'</div>'+
	                    '<div class="mixed-footer">'+
	                        '<a class="layui-btn layui-btn-small layui-btn-primary" href="javascript:view('+count+')"><i class="fa fa-eye fa-fw"></i>查看</a>'+
	                        '<a class="layui-btn layui-btn-small layui-btn-primary" href="http://182.92.169.183:80/download/'+pics.data[count].img+'"><i class="fa fa-download fa-fw"></i>下载</a>'+
	                    '</div>',
	                '</div>');
    			}
    			count--;
    		}
    		next(lis.join(''), page < pics.data.length/8);
    	}
    });
});
function view(start) {
	pics.start = start;
	layer.photos({photos: pics });
}

    $(function () {
        $(".fa-paper-plane-o").parent().parent().addClass("layui-this");
    });