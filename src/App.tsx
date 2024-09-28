import './App.css';
import './components/Products.tsx';
import Products from './components/Products.tsx';
import burgerImage from './assets/burger.png';
import cheeseburgerImage from './assets/cheeseburger.png';
import friesImage from './assets/fries.png';
import coffeeImage from './assets/coffee.png';
import teaImage from './assets/tea.png';
import colaImage from './assets/cola.png';
import {useState} from 'react';
import ChooseProduct from './components/ChooseProduct.tsx';

type IProducts = {
  title: string;
  price: number;
  image: string;
}

type IProductsCount = {
  name: string;
  count: number;
  price: number;
}

const App = () => {

  const products: IProducts[] = [
    {title: 'Hamburger', price: 80, image: burgerImage},
    {title: 'Cheeseburger', price: 90, image: cheeseburgerImage},
    {title: 'Fries', price: 45, image: friesImage},
    {title: 'Coffee', price: 70, image: coffeeImage},
    {title: 'Tea', price: 50, image: teaImage},
    {title: 'Cola', price: 40, image: colaImage},
  ];

  const [count, setCount] = useState<IProductsCount[]>([
    {name: 'Hamburger', count: 0, price: 0},
    {name: 'Cheeseburger', count: 0, price: 0},
    {name: 'Fries', count: 0, price: 0},
    {name: 'Coffee', count: 0, price: 0},
    {name: 'Tea', count: 0, price: 0},
    {name: 'Cola', count: 0, price: 0},
  ]);

  const addProductButton = ((productsName: string, productPrice: number,) => {
    console.log('btn clicked');
    setCount(prevState => prevState.map(item => {
      return item.name === productsName ? {
        ...item,
        count: (item.count) + 1,
        price: (item.price + productPrice),
      } : item;
    }));
    console.log(count);
  });

  const showProducts = products.map((product) => {
      return (
          <Products key={product.title} title={product.title} price={product.price} image={product.image} addProduct={() => addProductButton(product.title, product.price)}/>
      );
  });

  const deleteProductButton = ((productsName: string, productPrice: number) => {
    console.log('btn clicked');
    setCount(prevState => prevState.map(item => {
      return item.name === productsName ? {
        ...item,
        count: (item.count) - item.count,
        price: (item.price - productPrice),
      } : item;
      console.log(item.price);
    }));
    console.log(count);
  });

  const showOrders = count.map(order => {
      return (
          <ChooseProduct key={order.name} title={order.name} price={order.price} count={order.count} deleteProduct={() => deleteProductButton(order.name, order.price)}/>
      );
  });


  return (
      <div className='mainDiv'>
        <div className='leftDiv'>
          <h2>Other Details:</h2>
          <div>
            {showOrders}
          </div>
          <p><strong></strong>{}</p>
        </div>

        <div className='rightDiv'>
          <h2>Add items:</h2>
          <div className='rightDivInner'>
            {showProducts}
          </div>
        </div>
      </div>
  );
};

export default App;
