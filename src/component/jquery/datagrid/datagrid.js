import {detailview} from '../../../jqlib/easyui'

export default ['apiBase', 'method', function(apiBase, method) {
    return {
        restrict: 'E',
        scope: {
            url: "=url"
        },
        template: require('./datagrid.html'),
        controller: ['$scope', function($scope) {
            $scope.showAlert = function() {
                alert('这是Angular绑定的点击事件')
            };

            $scope.showAlertHeader = function() {
                alert('你点到了标题')
            };

            $('#dg').datagrid({
                view: detailview,
                url: apiBase + method.example,
                detailFormatter:function(){
                    return '<div class="ddv" style="padding:5px 0"></div>';
                },
                onExpandRow: function(index,row){
                    var ddv = $(this).datagrid('getRowDetail',index).find('div.ddv');
                    ddv.panel({
                        border:false,
                        cache:false,
                        href: apiBase + $scope.url + '?itemid='+row.itemid,
                        onLoad:function(){
                            $('#dg').datagrid('fixDetailRowHeight',index);
                        }
                    });
                    $('#dg').datagrid('fixDetailRowHeight',index);
                }
            });
        }]
    }
}];