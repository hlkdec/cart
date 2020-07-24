$('.subtract').on('click',function(){
	let result= Number($('.amount').text())
	if (result>1){
		result-=1
	}
	$('.amount').text(result)
});
$('.add').on('click',function(){
	let result= Number($('.amount').text())
	result+=1
	$('.amount').text(result)
});
