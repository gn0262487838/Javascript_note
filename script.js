
// 初始函數
function init(){
    showTime();
    // window.setInterval(程式, 間隔時間以毫秒為單位) >> 把程式設成週期性執行
    // window.clearInterval(計時器編號)
    // window.setTimeout(程式, 間隔時間以毫秒為單位) >> 間格時間到了就執行一次，然後over
    // window.clearTimeout(計時器編號)
    timeId = window.setInterval(showTime, 1000);
    }

// 查詢目前時間
function showTime(){
    var date = new Date()
    document.getElementById("timePanel").innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

/* 
設計一個可以查詢書籍的窗口
input : None
output : None
*/
function query(){
    // prompt 輸入的框框
    var _query = window.prompt("請輸入要查詢的書籍:");
    if (_query != null){
        // double check 框框
        var decide = window.confirm("確定要查詢書號:" + _query + "嗎?");

        if (decide == true){
            // location.href 可轉址
            window.location.href="query.php?_query=" + _query;
        }
        else{
            return query();
        }
    }
}

// check按鍵是數字
function checkNum(){
    if (window.event.keyCode < 48 | window.event.keyCode > 57){
        window.event.returnValue = false; // 設定為false表示拒絕此次預設值並不執行
    }
}

// 利用css刷淡圖片
function fading(){
    var img = document.getElementById("jake_1");
    // 要注意的是某些功能不見得都可以在不同遊覽器執行，故有時需要特別把它寫出來
    if (navigator.appName == "Microsoft Internet Explorer"){
        img.style.filter = "alpha(opacity=50)";
    }
    else{
    img.style.opacity = 0.5;
    }
}

