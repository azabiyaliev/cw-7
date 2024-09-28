import './App.css';
import './components/Products.tsx';
import Products from './components/Products.tsx';
import burgerImage from './assets/burger.svg';
import friesImage from './assets/fries.svg';
import coffeeImage from './assets/coffee.svg';
import teaImage from './assets/tea.svg';
import colaImage from './assets/cola.svg';
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
    {title: 'Cheeseburger', price: 90, image: burgerImage},
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
    setCount(prevState => prevState.map(item => {
      return item.name === productsName ? {
        ...item,
        count: (item.count) + 1,
        price: (item.price + productPrice),
      } : item;
    }));
  });

  const display = {
    display: 'block',
  };

  for (const product of count) {
    console.log(product.price);
    if (product.price > 0) {
      display.display = 'none';
    }
  }

  const showProducts = products.map((product) => {
      return (
          <Products key={product.title} title={product.title} price={product.price} image={product.image} addProduct={() => addProductButton(product.title, product.price)}/>
      );
  });

  const deleteProductButton = ((productsName: string, productPrice: number) => {
    setCount(prevState => prevState.map(item => {
      return item.name === productsName ? {
        ...item,
        count: (item.count) - item.count,
        price: (item.price - productPrice),
      } : item;
    }));
  });

  const showOrders = count.map(order => {
    if (order.price > 0) {
      return (
          <ChooseProduct key={order.name} title={order.name} price={order.price} count={order.count} deleteProduct={() => deleteProductButton(order.name, order.price)}/>
      );
    }
  });
  const totalPrice = count.reduce((acc, order) => acc + order.price, 0);

  return (
      <div className='mainDiv'>
        <div className='leftDiv'>
          <h2>Other Details:</h2>
          <div>
            {showOrders}
            <p style={display}>Order is empty!<br/>Please add some items!</p>
          </div>
          <p><strong>Total price:</strong> <b>{totalPrice} KGS</b></p>
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
