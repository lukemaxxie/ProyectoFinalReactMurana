import { Image } from 'react-bootstrap';
import front from '../../assets/bottonFlower.jpg';
import products from '../ItemListContainer/MOCK_DATA.json';
import { ItemCard } from '../ItemCard/ItemCard'; // Make sure to import ItemCard if not already imported

export const ItemFrontPage = () => {
  return (
    <section className="card position-relative section1">
      <Image src={front} fluid className="h-100 w-100" />
      <div className="card-img-overlay position-absolute w-100 text-center top-50 start-50 translate-middle">
        <h1 data-shadow="Pachamama" className="">
          Pachamama Eventos
        </h1>
        <div className="d-flex justify-content-center pt-lg-10 mt-lg-0">
          <button className="button mt-lg-1 mt-2">Contáctame</button>
        </div>

        {/* Render mock products */}
        <div className="container d-flex row justify-content-center mt-5">
          {products.length === 0 ? (
            <div className="custom-loader"></div>
          ) : (
            products.map((elem) => <ItemCard key={elem.id} {...elem} />)
          )}
        </div>
      </div>
    </section>
  );
};