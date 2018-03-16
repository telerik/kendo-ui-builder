window.moduleDirectives = (window.moduleDirectives || []).concat([{
    module: '@progress/kendo-angular-grid',
    main: 'dist/cdn/js/kendo-angular-grid.js',
    match: '(kendo-grid|GridModule)',
    import: 'GridModule, PDFModule, ExcelModule'
}, {
    module: '@progress/kendo-angular-dialog',
    match: '(kendo-dialog|DialogModule)',
    main: 'dist/cdn/js/kendo-angular-dialog.js',
    import: 'DialogModule'
}, {
    module: '@progress/kendo-angular-popup',
    match: '(kendo-popup|PopupModule)',
    main: 'dist/cdn/js/kendo-angular-popup.js',
    import: 'PopupModule'
}, {
    module: '@progress/kendo-angular-dropdowns',
    match: '(kendo-dropdownlist|DropDownListModule)',
    main: 'dist/cdn/js/kendo-angular-dropdowns.js',
    import: 'DropDownListModule'
}, {
    module: '@progress/kendo-angular-inputs',
    main: 'dist/cdn/js/kendo-angular-inputs.js',
    match: '(InputsModule|kendo-slider|kendo-switch|kendo-maskedtextbox|kendo-numerictextbox)',
    import: 'InputsModule'
}, {
    module: '@progress/kendo-angular-intl',
    main: 'dist/cdn/js/kendo-angular-intl.js',
}, {
    module: '@progress/kendo-angular-l10n',
    main: 'dist/cdn/js/kendo-angular-l10n.js',
}, {
    module: '@angular/forms',
    match: '(FormsModule|ReactiveFormsModule)',
    import: 'FormsModule, ReactiveFormsModule',
    main: 'bundles/forms.umd.js',
    defaultExtension: 'js'
}, {
    module: '@progress/kendo-data-query',
    main: 'dist/cdn/js/kendo-data-query.js'
}, {
    module: '@progress/kendo-drawing',
    main: 'dist/es/main.js'
}]);

