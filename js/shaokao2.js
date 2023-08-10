 //获取元素
        var oTxt1 = document.getElementsByClassName("txt1")[0];
        var oTxt2 = document.getElementsByClassName("txt2")[0];
        var oList = document.getElementsByClassName("list")[0];
 
        //创建对象，用来保存每次输入的数和计算符号
        var obj = {};
 
        //设置一个开关，识别负号和减号
        var bStop = false;
 
        //函数执行
        calculator();
 
 
        //计算器
        function calculator() {
            oList.addEventListener("click", function (e) {
 
                //事件源对象，获取每次点击的内容
                var even = e || event;
                var target = e.target || e.srcElement;
 
                //保存每次点击的内容
                var num = target.innerHTML;
 
 
                //一轮计算之后，第二轮输入
                if (obj.d) {
                    oTxt1.value = "";
                    oTxt2.value = "";
                    obj = {};
                    obj.d = false;
                }
 
 
                //当输入的数值为小数，且比0还小时
                if (oTxt2.value === "0" && num != ".") {
                    oTxt2.value = "";
                }
                oTxt2.value += num;
 
                //清零
                if (num == "c") {
                    oTxt1.value = "";
                    oTxt2.value = 0;
                    obj = {};
                }
 
                //获取输入的数值
                value(num);
 
 
            }, false)
 
 
        }
 
        //变量赋值
        function value(code) {
 
            //当输入为等于号的时候
            if (code == "=") {
                //保存第二个输入的数
                obj.b = parseFloat(oTxt2.value);
                oTxt1.value += oTxt2.value;
                add(obj);
 
                //当第一轮计算结束之后，给一个开关，第二轮输入的时候，
                //不需要清零，也不会影响第二轮输入（以输入等号为一轮计算结束）
                obj.d = true;
 
                //将负号开关重置，不影响下次输入
                bStop = false;
            }
 
            //当连续两次输入减号的时候，第二次输入的为负号，并将开关关上
            if (bStop) {
                bStop = false;
                return;
            }
 
            if (code == "+" || code == "-" || code == "*" || code == "/") {
 
                //在不输入等号的情况下，输入计算符号也可以计算上一轮的结果
                if (obj.c) {
                    obj.b = parseFloat(oTxt2.value);
                    add(obj);
                    oTxt1.value = oTxt2.value + code;
                    oTxt2.value = "";
                    //将上一轮计算的结果保存在下一轮的第一个数
                    obj.a = parseFloat(oTxt1.value);
                    //保存计算符号
                    obj.c = code;
                    //将负号开关打开
                    bStop = true;
                    return;
                }
                //计算器刚启动的时候或者是一轮计算过后，输入的第一个减号即为负号
                if (oTxt2.value == "-") return;
 
 
                oTxt1.value = oTxt2.value;
                oTxt2.value = "";
                //保存第一个输入的数
                obj.a = parseFloat(oTxt1.value);
                //保存输入的计算符号
                obj.c = code;
                //将负号开关打开
                bStop = true;
            }
        }
        //数值计算
        function add(obj) {
            switch (obj.c) {
                case "+":
                    oTxt2.value = obj.a + obj.b;
                    break;
                case "-":
                    oTxt2.value = obj.a - obj.b;
                    break;
                case "*":
                    oTxt2.value = obj.a * obj.b;
                    break;
                case "/":
                    if (Number.isNaN(obj.a / obj.b)) {
                        oTxt2.value = "被除数不能为0";
                    } else {
                        oTxt2.value = obj.a / obj.b;
                    }
                    break;
            }
        }