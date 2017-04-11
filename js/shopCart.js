var all = 0;//全选
var k = 0;
$(function(){
    twh();
});

function twh(){
     var maindiv=$("#middle2");
         maindiv.html("");
         var str = '';
       for(var i=1;i<10;i++){
                str += '<div class="one" id="'+i+'">'
                     + '<div class="quan" onclick="quan('+i+')" alt="0"></div>'
                     + '<div class="picture">商品'+i+'元</div>'
                     + '<div class="text">'
                     + '<div>这是件商品这是件商品这是件商品</div><div onclick="left('+i+')" class="left">-</div><div class="num">0</div><div onclick="right('+i+')" class="right">+</div>'
                     + '<div class="delect" onclick="delect('+i+')">删除</div>'
                     + '</div>'
                     + '</div>'
       }
       maindiv.html(str);
}

function quan(i){
     var result = $(".price").text(); //获取总金额
     var num = $("#"+i).find(".num").text(); //获取相对应的数量
    if($("#"+i).find(".quan").attr("alt")==0){
       $("#"+i).find(".quan").css("background","red").attr("alt","1").text("√");
       $(".price").text(parseInt(result)+i*num);
       k++;
       if(k==9){
        $(".all").css("background","red").text("√");
        all=1;
       }
    }else{
       $("#"+i).find(".quan").css("background","none").attr("alt","0").text("");
       $(".price").text(parseInt(result)-i*num);
       $(".all").css("background","none");//全选
       k--;
       all=0;
    }
}

//点击减少
function left(i){
    var num = $("#"+i).find(".num").text();//获取相对应的数量
    var result = $(".price").text(); //获取总金额
    num--;
    if(num<0){
        alert("商品个数不能小于0！");
        return false;
    }
    $("#"+i).find(".num").text(num);
    if($("#"+i).find(".quan").attr("alt")==1){
        $(".price").text(parseInt(result)-i);
    }
}

//点击增加
function right(i){
    var num = $("#"+i).find(".num").text();//获取相对应的数量
    var result = $(".price").text(); //获取总金额
    num++;
    $("#"+i).find(".num").text(num);
    if($("#"+i).find(".quan").attr("alt")==1){
        $(".price").text(parseInt(result)+i);
    }
}

//点击全选
$(function(){
   $(".all").on("click",function(){
         if(all==0){
           for(var i=1;i<10;i++){
               var num = $("#"+i).find(".num").text();//获取相对应的数量
               var result = $(".price").text(); //获取总金额
               var b = $("#"+i).find(".quan").text();
              if(b=="√"){
                 b=i;
                 var price = i*num;
                 $(".price").text(parseInt(result)+i*num-price);
              }else{
                 $(".price").text(parseInt(result)+i*num);
              }

           }
                $(this).css("background","red").text("√");
                $(".quan").attr("alt","1").css("background","red").text("√");
                all=1;
                k=9;
                return false;
         }
         if(all==1){
                $(".quan").attr("alt","0").css("background","none").text("");
                $(this).css("background","none").text("");
                $(".price").text(0);
                all=0;
                k=0;
                return false;
         }
     });
});

//点击编辑
var f = 0;
$(function(){
    $("#bianji span").on("click",function(){
        if(f==0){
            $(".delect").show();
            $("#bianji span").text("完成");
            f=1;
            return false;
        }
        if(f==1){
            $(".delect").hide();
            $("#bianji span").text("编辑");
            f=0;
            return false;
        }
    });
});

//删除
function delect(i){
    $("#"+i).hide(500);
    var result = $(".price").text(); //获取总金额
    var num = $("#"+i).find(".num").text(); //获取相对应的数量
    //$("#"+i).find(".quan").attr("alt","0");
    $(".price").text(parseInt(result)-i*num);
    //无动画效果 $("#"+i).remove();
}
