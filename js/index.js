/*$(function(){
	//animation
	//queue
	//dequeue
	//delay
	//stop
	$('.animation').animate(
	{
		width:400,
		
	},
	2000,
	function(){
		$(this).animate({
		height:400,
		},1000,)
	}
	);*/
/*	$('.animation')
	.animate({width:400},400)
	.delay(500)
	.queue(function(){
		$(this).css('backgroundColor','red').dequeue();
	})
	.animate({height:400},1000)*/
/*	for (var i = 0; i < 100; i++) {
	
	var w=Math.floor(Math.random()*4+3);
	var b=Math.floor(Math.random()*100+155);
	var left=Math.floor(Math.random()*$(document).width());
	var top=Math.floor(Math.random()*$(document).height());
	$('<div>')
	.addClass('zidan')
	.width(w)
	.height(w)
	.css({
		backgroundColor:'rgba(12,104,'+b+',0.4)'
	})
	.appendTo('body')
	.delay(i*10)
	.animate({
		left:left,
		top:top,
	})
  }

  
});*/
$(function(){
	//生牌
	document.bdColor='green';
	var paker=[];
	var backcolor=['c','d','s','h'];
	var dict={};
	while(paker.length<52){
	var a=backcolor[Math.floor(Math.random()*4)];
	var b=Math.ceil(Math.random()*13);
	var item={backcolor:a,shuzi:b};
	if(!dict[a+'-'+b]){
		paker.push(item);
		dict[item.backcolor+'-'+item.shuzi]=true;

	}
    
	}
	 
	//铺牌  
  
    var d=0;
  var index=0;
  var biao={
    1:'A',
    2:'2',
    3:'3',
    4:'4',
    5:'5',
    6:'6',
    7:'7',
    8:'8',
    9:'9',
    10:'T',
    11:'J',
    12:'Q',
    13:'K'
  }
  var d;
  function pupai(){

 
  for (var i = 0; i < 7; i++) {
    var t=i*50;
     for(var j = 0; j < (i+1); j++){
      d+=50;
      index+=1;
      var l=(6-i)*45+j*100;
    $('<div>')
    .addClass('pai shang')
    .css({
      
      backgroundImage:'url(images/'+biao[paker[index].shuzi]+paker[index].backcolor+'.png)'
    })
    .attr('id',i+'-'+j)
    .data('num',paker[index].shuzi)
    .appendTo('.zhuozi')
    .delay(d)
    .animate({
      top:t,
      left:l,
      opacity:1
    })
    
  }
}

for(;index<paker.length;index++){
      d+=50;
   $('<div>')
    .addClass('pai zuo').data('num',paker[index].shuzi)
    .css({
      backgroundImage:'url(images/'+biao[paker[index].shuzi]+paker[index].backcolor+'.png)'
    })
    .appendTo('.zhuozi')
    .delay(d)
    .animate({
      top:460,
      left:150,
      opacity:1
    })
   
}
 
	
var youmeiyoubeiya=function(el){
	//出错原因是因为没有转化为字符串；
   var a=parseInt(el.attr('id').split('-')[0]);
   var b=parseInt(el.attr('id').split('-')[1]);
   console.log($('#'+(a+1)+'-'+b).length)
   return $('#'+(a+1)+'-'+b).length||$('#'+(a+1)+'-'+(b+1)).length;
}

 
   var shangyizhang;
  
  
$('.zhuozi .pai').on('click',function(){
      //上下分开
          
     if($(this).hasClass('shang')){


      if(youmeiyoubeiya($(this))){

    	return;
    }
    //第一次点击
    }
    if($(this).data('num')===13){
    	$(this).animate(
    	{
    	 top:0,
    	 left:600,
         opacity:0
    	}).queue(function(){
    		$(this).remove()
    	})
    	return;
   
    }
    //点击动画
	$(this).toggleClass('bianhua');
	if($(this).hasClass('bianhua')){
		$(this).animate({top:'-=30'})
	}else{
        $(this).animate({top:'+=30'})
	}
    //第二次点击
   if(!shangyizhang){
        shangyizhang=$(this)
    } else{
    	if(shangyizhang.data('num')+$(this).data('num')===13){
    		$('.zhuozi .bianhua').animate(
    	{
    	 top:0,
    	 left:600,
         opacity:0
    	}).queue(function(){
    		$(this).remove()
    	})
    	}else{
    	$('.zhuozi .bianhua')
    	.removeClass('bianhua')
    	.animate({top:'+=30'})
    }
       shangyizhang=null;
    }/*
    if(!shangyizhang){
       shangyizhang=$(this)
    }else{
    	if(shangyizhang.data('num')+$(this).data('num')===13){
    		shangyizhang.delay(400).animate(
    	{
    	 top:0,
    	 left:600,
         opacity:0
    	}).queue(function(){
    		$(this).remove()
    	})
       $(this).animate(
    	{
    	 top:0,
    	 left:600,
         opacity:0
    	}).queue(function(){
    		$(this).remove()
    	})	
    	}else{
    	$('.zhuozi .bianhua')
    	.removeClass('bianhua')
    	.animate({top:'+=30'})
    }
    shangyizhang=null;
}*/
}) 
 }
   var zIndex=0;
   $('.zhuozi .move-left').on('click',function(){
   	  zIndex+=1;
   	  if($('.zhuozi .zuo').eq(-1).data('num')===13){
   	  $('.zhuozi .zuo').eq(-1).animate(
    	{
    	 top:0,
    	 left:600,
         opacity:0
    	}).queue(function(){
    		$(this).remove()
    	})
    	return;

   	  }else{
   	  	$('.zhuozi .zuo').eq(-1)
      .animate({
      	top:460,
  	  left:450
      })
      .removeClass('zuo bianhua')
      .addClass('you')
      .css({zIndex:zIndex})

   	}
      
   })
      var cishu=0;
    $('.zhuozi .move-right').on('click',function(){
    	cishu+=1;
    	if( $('.zhuozi .pai.zuo').length){
    		return;
    	}
    	if(cishu>3){
          return;
    	}
      $('.zhuozi .you').each(function(i,el){
          $(this).delay(i*10).animate({
      	   top:460,
  	      left:150
          })
          .addClass('zuo')
          .removeClass('you')
      })
    })

$('.start').on('click',function(){
  $('.xipai').toggleClass('xipai1');
  $(this).css({display:'none'});
  $('.pukepai').addClass('pukepai1');
  $('.name').addClass('name1');
})
$('.xipai').on('click',function(){
  shengpai();
  $(this).removeClass('xipai1');
  $('.fapai').addClass('fapai1');
})
$('.fapai').on('click',function(){
  $('.pukepai').css({display:'none'})
  $(this).css({display:'none'})
   pupai();
   $('.hezi,.move-left,.move-right').css({display:'block'})
   $('.cf').addClass('cf1');
   $('.tc').addClass('tc1');
})
   
   $('.tc').on('click',function(){
    window.location.reload();
   })
   //生牌
   var shengpai=function(){
         var d=0;
  var index=0;
  var biao={
    1:'A',
    2:'2',
    3:'3',
    4:'4',
    5:'5',
    6:'6',
    7:'7',
    8:'8',
    9:'9',
    10:'T',
    11:'J',
    12:'Q',
    13:'K'
  }
  var d;
  for(var i=0;i<51;i++){
     index++;

     $('<div>')
     .addClass('pai1')
     .css({
      backgroundImage:'url(images/'+biao[paker[index].shuzi]+paker[index].backcolor+'.png)'
    })
     .appendTo('.pukepai')
     .delay(1000)
     
   }
   $('.anniu1').on('click',function(){
    $('.pai1').each(function(i,el){
        $(this).delay(i*10).animate({
           top:40,
          left:450
          })
   })
   })
    $('.anniu2').on('click',function(){
    $('.pai1').each(function(i,el){
        $(this).delay(i*10).animate({
           top:40,
          left:-500
          })
   })
   })
    var flag=true;
    var unn=0;
    var t=setInterval(function(){
      unn++
      if(unn>5){
        clearInterval(t)
      }
      if(flag){

        $('.anniu1').trigger('click')
        flag=false;
      }else{
        $('.anniu2').trigger('click')
        flag=true;
      }
      
     

    },1000)

 }
 $('.cf').on('click',function(){
     pupai();

   }) 

})