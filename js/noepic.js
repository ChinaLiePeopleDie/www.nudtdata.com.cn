var viewMarks=[];
function renderNoEpicArea(){
    $.ajax({
        url:'/getNoEpicInfo/',
        async: false,
        type:'get',
        success: function (result) {
            var noEpicIcon = new BMap.Icon("../static/image/noEpicIcon/point.png", new BMap.Size(25, 25));
            var publictime = result.publictime.split("-");
            var js_noEpicArea = result.resultlist;
            $("#noEpicTitle")[0].innerText = ""+publictime[1]+"月"+publictime[2]+"日发布"
            for(var i=0; i<js_noEpicArea.length; i++){
                var oneItem = js_noEpicArea[i];
                var point = new BMap.Point(oneItem.lng, oneItem.lat);
                var marker = new BMap.Marker(point,{icon:noEpicIcon});
                var label = new BMap.Label(oneItem.area,{offset:new BMap.Size(20,-10)});
                label.disableMassClear();
                marker.setLabel(label);

                viewMarks.push(marker);
            }
            var myStyles = [{
                url:  '../static/image/noEpicIcon/20.png',
                size: new BMap.Size(20, 20),
                 textColor: '#ffffff',
                textSize: 12
            },{url:  '../static/image/noEpicIcon/30.png',
                size: new BMap.Size(30, 30),
                 textColor: '#ffffff',
                textSize: 16
            }, {
                url: '../static/image/noEpicIcon/40.png',
                size: new BMap.Size(40, 40),
                //opt_anchor: new BMap.Size(20, 20),
                 textColor: '#ffffff',
                textSize: 18,

            }];

            //MinClusterSize(5);//最小的聚合数量，小于该数量的不能成为一个聚合，默认为2
            var opt = {
                markers: viewMarks,
                "minClusterSize":5,
                "styles":myStyles
            }
            var markerCluster = new BMapLib.MarkerClusterer(NoEpicMap,opt);
            //debugger;
        }

    });
}

///搜索框光标失焦处理
$("#searchArea").keydown(function (e) {
    if (e.keyCode == 13) {
        searchNoEpicArea(); //处理事件
        $("input").blur();
    }
});

// 搜索无疫情小区
function searchNoEpicArea(){
    var search_info = $("#searchArea").val();
     $.ajax({
        url: "/noEpicSearch/",
            type: "POST",
            dataType:'json',
            data: {"search_info":search_info},
            success: function (js_success) {
                if(js_success['status'] == '1'){
                    $("#showResult").html('&nbsp;&nbsp;为您找到'+js_success['result'].length+'条结果:');
                    var str='';
                    for (let arr of js_success['result']){
                        str += "&nbsp;"+arr['county'] +'&nbsp;'+ arr['area'] + "&nbsp;为无疫情小区 最新公布时间是:&nbsp;"+ arr['collect_time']+"<br>";

                    }
                    $("#noEmpicArea").html(str);
                }
                if(js_success.status == '0'){
                    $("#showResult").html('&nbsp;&nbsp;尚未找到该小区详情');
                    $("#noEmpicArea").html("");
                }
            }
     });
    // var NoEpicMap = new BMap.Map("noEmpicCon");    // 创建Map实例
    // var local = NoEpicMap.LocalSearch(map, {
    //     renderOptions:{map: map},
    //         onMarkersSet: function( container){
    //             for (var i = 0; i < container.length; i++){
    //                 container[i].detailUrl = "";
    //                 container[i].url = "";
    //                 container[i].marker.name = "SearchMarker";
    //             }
    //     }, pageCapacity: 8
    // });
    // local.search(search_info);
}
//

// 搜索时清空上次搜索记录
function clean_Data(){
    $("#showResult").html("");
    $("#noEmpicArea").html("");

}