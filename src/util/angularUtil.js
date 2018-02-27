function retrieveArgs(argus) {
    var args = Array.prototype.slice.apply(argus);
    return {
        module: args[0],
        widgets: args.slice(1)
    };
}

export function serviceInit() {
    var args = retrieveArgs(arguments);
    var module = args.module;
    var services = args.widgets;
    services.forEach(function(service) {
        module.service(service.name, service.constructor);
    });
}

export function providerInit() {
    var args = retrieveArgs(arguments);
    var module = args.module;
    var providers = args.widgets;

    providers.forEach(function(provider) {
        module.provider(provider.name, provider.constructor);
    });
}

export function componentInit() {
    var args = retrieveArgs(arguments);
    var module = args.module;
    var components = args.widgets;
    components.forEach(function(component) {
        module.component(component.name, component.option);
    });
}

export function viewInit() {
    var args = retrieveArgs(arguments);
    var module = args.module;
    var views = args.widgets;
    views.forEach(function(view) {
        module.config(['$stateProvider', function($stateProvider) {
            $stateProvider.state(view);
        }]);
    });
}