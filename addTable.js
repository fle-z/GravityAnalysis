function addTable(data){
    $.each(data, function(index, obj) {
        var tr = "<tr><td>"+"xxx"+"</td><td><a href='stationDetail.html?stationName="+obj.name+"'>"+obj.name+"</td><td>"+"gPhone"+"</td></tr>";
        $("table").append(tr);
    });
}
