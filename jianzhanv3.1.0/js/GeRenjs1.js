function information(){
layer.confirm('请输入密码',{btn:['确定','取消']},
	function(){
layer.prompt(function(val, index){
  layer.msg('修改为'+val);
layer.close(index)
})
;}
)}

function jlayer(){
	layer.prompt({title: '随便写点啥，并确认', formType: 2}, function(text, index){
    layer.close(index);
    layer.msg('<br>感谢您的建议');
    layer.load(2);
    setTimeout(function(){
  layer.closeAll('loading');
}, 3000);
    })
}