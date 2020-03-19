const Format = {
    formatDate:function(secs){ //123456789 --> 年-月-日 时：分：秒
                var t = new Date(secs);
                var year = t.getFullYear();
                var month = t.getMonth() + 1;
                if(month < 10){month = '0' + month;}
                var date = t.getDate();
                if(date < 10){date = '0' + date;}
                var hour = t.getHours();
                if(hour < 10){hour = '0' + hour;}
                var minute = t.getMinutes();
                if(minute < 10){minute = '0' + minute;}
                var second = t.getSeconds();
                if(second < 10){second = '0' + second;}
                return year+'-'+month+'-'+date+' '+hour+':'+minute+':'+second;
            },
    formatDateNoSecond:function(secs){//123456789 --> 年-月-日 时：分
                var t = new Date(secs);
                var year = t.getFullYear();
                var month = t.getMonth() + 1;
                if(month < 10){month = '0' + month;}
                var date = t.getDate();
                if(date < 10){date = '0' + date;}
                var hour = t.getHours();
                if(hour < 10){hour = '0' + hour;}
                var minute = t.getMinutes();
                if(minute < 10){minute = '0' + minute;}
                var second = t.getSeconds();
                if(second < 10){second = '0' + second;}
                return year+'-'+month+'-'+date+' '+hour+':'+minute;
            },
    formatDateNoHouer:function(secs){//123456789 --> 年-月-日
                var t = new Date(secs);
                var year = t.getFullYear();
                var month = t.getMonth() + 1;
                if(month < 10){month = '0' + month;}
                var date = t.getDate();
                if(date < 10){date = '0' + date;}
                var hour = t.getHours();
                if(hour < 10){hour = '0' + hour;}
                var minute = t.getMinutes();
                if(minute < 10){minute = '0' + minute;}
                var second = t.getSeconds();
                if(second < 10){second = '0' + second;}
                return year+'-'+month+'-'+date;
            }
}

export {Format}