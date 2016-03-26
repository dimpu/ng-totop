angular.module('ngTotop',[])
.directive('ngTotop',function(){
  return {
    template:'<a href="" style=" text-decoration: none; border: 1px solid #333; border-radius: 50%; display: inline-block; width: 25px; height: 25px; text-align: center; font-size: 1.3em; position: fixed; bottom: 100px; right: 10px; ">↑</a>',
    link:function(scope,ele,attrs){
      console.log(ele);
      ele.on("click", function(e){
        e.preventDefault();
        ele.scrollTop(0);
      });
    }
  };
});
