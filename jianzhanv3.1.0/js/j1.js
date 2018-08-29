function ShowLoginText(){
    layer.open({
        type:0,
        title:"注册",
        area:["395px","300px"],
        content: '<br><form> &#160 Username: <input type="text" name="user" style="margin:10px;border:1px solid #585858;border-radius:3px;padding:3px 0px;border-top:1px double #fff;border-right:1px double #fff;border-bottom:1px double #2E64FE;border-left:1px double #fff;padding-left:3px;"><br> &#160 Password: <input type="password" name="pwd"  style="border:1px solid #585858;padding:3px 0px;border-radius:3px;padding-left:3px;margin:10px;border-top:1px double #fff;border-right:1px double #fff;border-bottom:1px double #2E64FE;border-left:1px double #fff"></form>'     
    });
    }
function Login(){
    var username=$.trim($("#InputUsername").val());//获取用户名trim是去掉空格
    var password=$.trim($("#InputUserPwd").val());//获取密码
    if(username==""||password==""){
        layer.alert("用户名或者密码不能为空!",{
        title:"提示",
        icon:5, 
        });
    }
}
function recall(){
layer.confirm('请输入手机号',{btn:['确定','取消']},
    function(){
layer.prompt(function(val, index){
  layer.msg('已发送到'+val);
layer.close(index)
})
;}
)}
