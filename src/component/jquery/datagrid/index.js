import {detailview} from '../../../jqlib/easyui'

export default {
    name: 'datagrid',
    option: {
        bindings: {
            url: "="
        },
        template: require('./index.html'),
        controller: ['$scope', 'API', function($scope, API) {
            var that = this;
    
            $scope.showAlert = function() {
                alert('这是Angular绑定的点击事件')
            };
    
            $scope.showAlertHeader = function() {
                alert('你点到了标题')
            };
    
            $('#dg').datagrid({
                view: detailview,
                method: 'get',
                url: API.ROOT + API.METHOD.EXAMPLE,
                detailFormatter:function(){
                    return '<div class="ddv" style="padding:5px 0"></div>';
                },
                onExpandRow: function(index,row){
                    var ddv = $(this).datagrid('getRowDetail',index).find('div.ddv');
                    ddv.panel({
                        border:false,
                        cache:false,
                        href: API.ROOT + that.url + '?itemid='+row.itemid,
                        onLoad:function(){
                            $('#dg').datagrid('fixDetailRowHeight',index);
                        }
                    });
                    $('#dg').datagrid('fixDetailRowHeight',index);
                }
            });
        }]
    }
}