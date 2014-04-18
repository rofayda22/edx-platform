define([ "jquery", "js/spec_helpers/create_sinon", "squire", "URI", "js/views/asset",
    "js/views/assets", "js/views/paging", "js/views/paging_header", "js/views/paging_footer",
    "js/models/asset", "js/collections/asset" ],
    function ($, create_sinon, Squire, URI, AssetView, AssetsView, PagingView, PagingHeader, PagingFooter,
              AssetModel, AssetCollection) {

        describe("Assets", function() {
            var assetsViewVar, mockEmptyAssetsResponse, mockAssetsResponse, mockAssetUploadResponse;

            var assetLibraryTpl, assetTpl, pagingFooterTpl, pagingHeaderTpl, uploadModalTpl;
            assetLibraryTpl = readFixtures('asset-library.underscore');
            assetTpl = readFixtures('asset.underscore');
            pagingHeaderTpl = readFixtures('paging-header.underscore');
            pagingFooterTpl = readFixtures('paging-footer.underscore');
            uploadModalTpl = readFixtures('asset-upload-modal.underscore');

            beforeEach(function () {
                setFixtures($("<script>", { id: "asset-library-tpl", type: "text/template" }).text(assetLibraryTpl));
                appendSetFixtures($("<script>", { id: "asset-tpl", type: "text/template" }).text(assetTpl));
                appendSetFixtures($("<script>", { id: "paging-header-tpl", type: "text/template" }).text(pagingHeaderTpl));
                appendSetFixtures($("<script>", { id: "paging-footer-tpl", type: "text/template" }).text(pagingFooterTpl));
                appendSetFixtures(uploadModalTpl);
                appendSetFixtures(sandbox({ id: "asset_table_body" }));

                var collection = new AssetCollection();
                collection.url = "assets-url";
                assetsViewVar = new AssetsView({
                    collection: collection,
                    el: $('#asset_table_body')
                });
                assetsViewVar.render();
            });

            this.mockAsset = {
                display_name: "dummy.jpg",
                url: 'actual_asset_url',
                portable_url: 'portable_url',
                date_added: 'date',
                thumbnail: null,
                locked: false,
                id: 'id_1'
            };

            mockEmptyAssetsResponse = {
                assets: [],
                start: 0,
                end: 0,
                page: 0,
                pageSize: 5,
                totalCount: 0
            };

            mockAssetUploadResponse = {
                asset: this.mockAsset,
                msg: "Upload completed"
            };

            mockAssetsResponse = function (requests) {
                return create_sinon.respondWithJson(requests, {
                    assets: [this.mockAsset],
                    start: 0,
                    end: 1,
                    page: 0,
                    pageSize: 5,
                    totalCount: 1
                });
            };

            $.fn.fileupload = function() {
                return '';
            };

            describe("AssetsView", function () {
                var setup;
                setup = function() {
                    var requests;
                    requests = create_sinon.requests(this);
                    assetsViewVar.setPage(0);
                    create_sinon.respondWithJson(requests, mockEmptyAssetsResponse);
                    return requests;
                };

                beforeEach(function () {
                    window.analytics = jasmine.createSpyObj('analytics', ['track'])
                    window.course_location_analytics = jasmine.createSpy()
                });

                afterEach(function () {
                    delete window.analytics;
                    delete window.course_location_analytics;
                });

                it('shows the upload modal when clicked on "Upload your first asset" button', function () {
                    expect(assetsViewVar).toBeDefined();
                    appendSetFixtures('<div class="ui-loading"/>');
                    expect($('.ui-loading').is(':visible')).toBe(true);
                    expect($('.upload-button').is(':visible')).toBe(false);
                    setup.call(this);
                    expect($('.ui-loading').is(':visible')).toBe(false);
                    expect($('.upload-button').is(':visible')).toBe(true);

                    expect($('.upload-modal').is(':visible')).toBe(false);
                    $('a:contains("Upload your first asset")').click();
                    expect($('.upload-modal').is(':visible')).toBe(true);

                    $('.close-button').click()
                    expect($('.upload-modal').is(':visible')).toBe(false);
                });

                it('uploads file properly', function () {
                    expect(assetsViewVar).toBeDefined();
                    spyOn(assetsViewVar, "addAsset").andCallFake(function () {
                        assetsViewVar.collection.add(mockAssetUploadResponse.asset)
                        assetsViewVar.renderPageItems()
                        assetsViewVar.setPage(0);
                    });
                    mockFiles = [];
                    mockFileInput = jasmine.createSpy('mockFileInput');
                    mockFileInput.files = this.mockFiles;
                    jqMockFileInput = jasmine.createSpyObj('jqMockFileInput', ['get']);
                    jqMockFileInput.get.andReturn(mockAssetsResponse);
                    realMethod = assetsViewVar.$;
                    spyOn(assetsViewVar, "$").andCallFake(function (selector) {
                        if (selector === "input[type=file]") {
                            return jqMockFileInput;
                        } else {
                            return realMethod.apply(this, arguments);
                        }
                    });

                    var requests = setup.call(this);
                    $('a:contains("Upload your first asset")').click();
                    expect($('.upload-modal').is(':visible')).toBe(true);

                    $('.choose-file-button').click()
                    file = {name: "dummy.jpg", filename: "dummy.jpg"}
                    mockFiles.push(file)
                    assetsViewVar.displayFinishedUpload(mockAssetUploadResponse)
                    expect($('div.progress-bar').text()).toContain("Upload completed")
                    $('.close-button').click()
                    expect($('.upload-modal').is(':visible')).toBe(false);

                    expect($('#asset_table_body').html()).toContain("dummy")
                    expect(assetsViewVar.collection.length).toBe(1)
                });
            });
        });
    });
