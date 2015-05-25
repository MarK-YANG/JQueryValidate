// 扩展当前规则为一个新规则
	
	// 新规则要求输入文本 "buga"，我们也可以定义一个默认的消息
	$.validator.addMethod("buga", function(value) {
		return value == "buga";
	}, 'MarK said 请输入 "buga"！');
	
	// 新规则要求值必须与第一个参数相同
	$.validator.methods.equal = function(value, element, param) {
		return value == param;
	};
	
	$().ready(function() {
		var validator = $("#texttests").validate({
			debug: false,
			errorElement: "em",
//			errorContainer: $("#warning, #summary"),
			errorPlacement: function(error, element) {
				error.appendTo(element.parent());
			},

//			errorContainer: "div.error",
//			errorLabelContainer: $("#texttests div.error"),
//			wrapper: "li",
//			success: function(label) {
//				label.text("ok!").addClass("success");
//			},
			rules: {
				number: {
					required:true,
					minlength:3,
					maxlength:15,
					number:true	
				},
				secret: "buga",
				math: {
					equal: 11	
				}
			},
			messages:{
				number:{
					required: "MarK said it is required",
					minlength: "MarK said it should 3",
					maxlength: "MarK said it should 15",
					number: "MarK said it should be number"
				},
				math: {
					equal: "MarK said it is equal to 11"
				}
			}
		});
		
	});