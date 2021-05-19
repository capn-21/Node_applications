const hot=require('http')

var abe="haloooo";
const server=hot.createServer((req,res)=>{
 if(req.url==='/'){
        res.end("this is main oage");
    }
    if(req.url==='/home'){
        res.end(abe);
    }
    if(req.url==='/prices'){
        res.end(`<h1>adasd</hq>
        <a href="/home"> click my</a>
        `);
    }
    if(req.url==='/app'){
        res.end(`<html>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
        <body ng-app="as" ng-controller="cc">
            <div ng-show="hide">
        
                <p >{{text}}</p>
            </div>
            <button ng-click="hidefun()">click to hide</button>
        </body>
        <script>
        angular.module("as",[])
        .controller("cc",c)
        
        function c ($scope){
        
            $scope.text="clik on the button to hide me";
            $scope.hide=true;
            $scope.hidefun=function(){
                $scope.hide=!$scope.hide;
            }
        
        }
        
        </script>
        </html>
        
        
        
        `);
    }
    


}).listen(6969);

