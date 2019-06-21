$(document).ready(
    function(){
        $("#frmsignup").validate({
            rules: {
                ten: "required",
                user: {
                    required: true,
                    minlength: 6
                },
                mk: {
                    required: true,
                    minlength: 6,
                    maxlength: 20
                },
                xnmk: {
                    required: true,
                    equalTo: "#password"
                },
                email: {
                    required: true,
                    email: true
                },
                ns: {
                    required: true
                },
                cmtnd: {
                    required: true,
                    minlength: 9,
                    maxlength: 12,
                    digits: true
                },
                noicapcmt: {
                    required: true
                },
                ngaycapcmt: {
                    required: true
                },
                diachi: {
                    required: true,
                },
                noio: {
                    required:true,
                },
                dantoc: {
                    required: true
                },
                sdt: {
                    digits: true
                },
            },
            messages: {
                ten: "Vui lòng nhập họ tên",
                user: {
                    required: "Vui lòng nhập tên tài khoản",
                    minlength: "Tên tài khoản tối thiểu 6 ký tự"
                },
                mk: {
                    required: "Vui lòng nhập mật khẩu",
                    minlength: "Mật khẩu tối thiểu 6 ký tự",
                    maxlength: "Mật khẩu tối đa 20 ký tự"
                },
                xnmk: {
                    required: "Vui lòng nhập lại mật khẩu",
                    equalTo: "Nhập lại mật khẩu không chính xác"
                },
                email: {
                    required: "Vui lòng nhập email",
                    email: "Không đúng định dạng email"
                },
                ns: {
                    required: "Vui lòng nhập ngày sinh"
                },
                cmtnd: {
                    required: "Vui lòng nhập CMND",
                    minlength: "CMND phải chứa 9-12 số",
                    maxlength: "CMND phải chứa 9-12 số",
                    digits: "CMND phải là số"
                },
                noicapcmt: {
                    required: "Vui lòng nhập nơi cấp CMND"
                },
                ngaycapcmt: {
                    required: "Vui lòng nhập ngày cấp CMND"
                },
                diachi: {
                    required: "Vui lòng nhập địa chỉ"
                },
                noio: {
                    required: "Vui lòng nhập nơi ở hiện tại"
                },
                dantoc: {
                    required: "Vui lòng nhập dân tộc của bạn"
                },
                sdt: {
                    digits: "Số điện thoại phải là số từ 0-9"
                }
            }
        });
        $('#birthday').datepicker({
        	dateFormat:"dd/mm/yy"
    	});
        $('#ngaycapcmnd').datepicker({
            dateFormat:"dd/mm/yy"
        });
    }
);