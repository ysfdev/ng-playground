(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var buyController = this;

    var defaultItems = [
      {
        name: "Monitors",
        quantity: 4
      },
      {
        name: "Keyboards",
        quantity: 2
      },
      {
        name: "LED Lights",
        quantity: 5
      },
      {
        name: "HDMI cables",
        quantity: 10
      },
      {
        name: "VGA Adapters",
        quantity: 4
      },
      {
        name: "Mice",
        quantity: 2
      }
    ];

    //Set default inital items
    ShoppingListCheckOffService.setDefaultBuyItems(defaultItems);

    buyController.items = ShoppingListCheckOffService.getToBuyItems();

    buyController.addToBoughtList = function(itemIndex) {
      var itemName = buyController.items[itemIndex].name;
      var itemQuantity = buyController.items[itemIndex].quantity;
      ShoppingListCheckOffService.removeToBuyItem(itemIndex);
      ShoppingListCheckOffService.addBoughtItem(itemName, itemQuantity);
    }

    buyController.addNewItem = function() {
      var itemName = buyController.itemName;
      var quantity = buyController.itemQuantity;
      ShoppingListCheckOffService.addToBuyItem(itemName, quantity);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtController = this;
    boughtController.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var boughtItems = [];
    var toBuyItems = [];

    service.setDefaultBuyItems = function(defaultItems) {
      if (defaultItems !== undefined) {
        toBuyItems = defaultItems;
      }
    }
    service.addToBuyItem = function(itemName, itemQuantity) {
      var item = {
        name : itemName,
        quantity: itemQuantity
      }
      toBuyItems.push(item);
    };

    service.addBoughtItem = function(itemName, itemQuantity) {
      var item = {
        name : itemName,
        quantity: itemQuantity
      }
      boughtItems.push(item);
    };

    service.removeToBuyItem = function(itemIndex) {
      toBuyItems.splice(itemIndex, 1);
    };

    service.removeBoughtItem = function(itemIndex) {
      boughtItems.splice(itemIndex, 1);
    };

    service.getToBuyItems = function() {
      return toBuyItems;
    };

    service.getBoughtItems = function() {
      return boughtItems;
    }
  }
})();
