class ProductsService {

    static async getAllProducts() {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const products = await response.json();
        console.log(products);
      } catch (error) {
        console.error('Помилка при отриманні продуктів:', error);
      }
    }
 
    static async deleteProducts() {
      const randomId = Math.floor(Math.random() * 9996) + 5;
      const ids = [1, 2, 3, 4, randomId];
 
      ids.forEach(async (id) => {
        try {
          const response = await fetch(`https://dummyjson.com/products/${id}`, {
            method: 'DELETE'
          });
 
          if (response.ok) {
            console.log(`Продукт з ID ${id} успішно видалений`);
          } else {
            console.error(`Помилка при видаленні продукту з ID ${id}`);
          }
        } catch (error) {
          console.error('Помилка при видаленні продукту:', error);
        }
      });
    }
 }
 
 ProductsService.getAllProducts();
 
 ProductsService.deleteProducts();
