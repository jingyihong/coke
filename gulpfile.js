var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    url = require('url');

var data = [
        {id:'0',click:'coke',src:'img/1.png',title:'可乐鸡翅',score:'评分8.1',txt:'49718人做过',p1:'用料',p2:'鸡翅（翅中最佳）',p3:'8个',p4:'可乐',p5:'易拉罐一罐',p6:'盐',p7:'适量'},
        {id:'1',click:'ribs',src:'img/2.png',title:'懒人版糖醋排骨',score:'评分8.5',txt:'41140人做过',p1:'用料',p2:'排骨',p3:'8个',p4:'糖',p5:'适量',p6:'醋',p7:'适量'},
        {id:'2',click:'prawns',src:'img/3.png',title:'油焖大虾',score:'评分8.7',txt:'18859人做过',p1:'用料',p2:'大虾',p3:'8个',p4:'油',p5:'适量',p6:'盐',p7:'适量'},
        {id:'3',click:'wings',src:'img/4.png',title:'可乐鸡翅',score:'评分8.7',txt:'19055人做过',p1:'用料',p2:'鸡翅（翅中最佳）',p3:'8个',p4:'可乐',p5:'易拉罐一罐',p6:'盐',p7:'适量'}
    ]

gulp.task('webserver',function(){
    gulp.src('.').pipe(webserver({
        port:'8080',
        host:'localhost',
        middleware:function(req,res,next){
            var obj = url.parse(req.url);
            if(req.method === 'GET'){
                if(obj.pathname === '/getdata'){
                    res.end(JSON.stringify(data));
                }else{
                    next();
                }
            }else{
                next();
            }
        }
    }))
})