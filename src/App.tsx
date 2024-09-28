import './App.css';
import './components/Products.tsx';
import Products from './components/Products.tsx';
import burgerImage from './assets/burger.png';
import cheeseburgerImage from './assets/cheeseburger.png';
import friesImage from './assets/fries.png';
import coffeeImage from './assets/coffee.png';
import teaImage from './assets/tea.png';
import colaImage from './assets/cola.png';

const App = () => {


  type IProducts = {
    title: string;
    price: number;
    image: string;
  }

  const products: IProducts[] = [
    {title: 'Hamburger', price: 80, image: burgerImage},
    {title: 'Cheeseburger', price: 90, image: cheeseburgerImage},
    {title: 'Fries', price: 45, image: friesImage},
    {title: 'Coffee', price: 70, image: coffeeImage},
    {title: 'Tea', price: 50, image: teaImage},
    {title: 'Cola', price: 40, image: colaImage},
  ];

  const showProducts = products.map((product) => {
    return (
        <Products key={product.title} title={product.title} price={product.price} image={product.image} />
    );
  });

  return (
      <div className='mainDiv'>
        <div className='leftDiv'>
          <h2>Other Details:</h2>
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
