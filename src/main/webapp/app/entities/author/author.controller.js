(function() {
    'use strict';

    angular
        .module('protractorTechDemoApp')
        .controller('AuthorController', AuthorController);

    AuthorController.$inject = ['Author', 'Book', 'ParseLinks', 'AlertService', 'paginationConstants', '$log'];

    function AuthorController(Author, Book, ParseLinks, AlertService, paginationConstants, $log) {

        var vm = this;

        vm.authors = [];
        vm.loadPage = loadPage;
        vm.itemsPerPage = paginationConstants.itemsPerPage;
        vm.page = 0;
        vm.links = {
            last: 0
        };
        vm.predicate = 'id';
        vm.reset = reset;
        vm.reverse = true;

        loadAll();

        function loadAll () {
            $log.debug("author.controller::loadAll");
            Author.query({
                page: vm.page,
                size: vm.itemsPerPage,
                sort: sort()
            }, onSuccess, onError);
            function sort() {
                var result = [vm.predicate + ',' + (vm.reverse ? 'asc' : 'desc')];
                if (vm.predicate !== 'id') {
                    result.push('id');
                }
                return result;
            }

            function onSuccess(data, headers) {
                vm.links = ParseLinks.parse(headers('link'));
                vm.totalItems = headers('X-Total-Count');
                for (var i = 0; i < data.length; i++) {
                    var entity = data[i];
                    //entity.books = Book.query();
                    assignBooks(entity);
                    vm.authors.push(data[i]);
                }
            }

            function assignBooks(entity) {
                $log.debug("Entity : " + entity.name);
                Book.query().$promise.then(function(response) {
                    var res = "";
                    if (response.length == 0) {
                        res = "None";
                    } else {
                        for (var i = 0; i < response.length - 1; i++) {
                            res += response[i].title + ", ";
                        }
                        res += response[response.length - 1].title;
                    }
                    entity.books = res;
                });
            }

            function onError(error) {
                AlertService.error(error.data.message);
            }
        }

        function reset () {
            vm.page = 0;
            vm.authors = [];
            loadAll();
        }

        function loadPage(page) {
            vm.page = page;
            loadAll();
        }
    }
})();