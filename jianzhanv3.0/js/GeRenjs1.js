function information(){
layer.confirm('请输入密码',{btn:['确定','取消']},
	function(){
layer.prompt(function(val, index){
  layer.msg('修改为'+val);
layer.close(index)
})
;}
)}
