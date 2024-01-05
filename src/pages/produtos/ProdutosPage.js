import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../App.css';
import * as s from "./styled";
import Cards from './Cards';
import Pagination from '../../hooks/Pagination';
import { useState } from 'react';
import cardsData from './Cards.json'
import CardsV2 from './CardsV2';

const ProdutosPage = () => {

    const [searchHero, setSearchHero] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10
    const [data, setData] = useState(cardsData.produtos)
    const [loading, setLoading] = useState(false)

    const handleSearchHero = (event) => {
        setSearchHero(event.target.value)
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const filteredHero = data
        ? data.filter((heroes) => heroes.title.toLowerCase().includes(searchHero))
        : [];

    const currentItems =
        filteredHero && filteredHero.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = filteredHero
        ? Math.ceil(filteredHero.length / itemsPerPage)
        : 0;

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <s.Body>
            <s.MainCards>
                <s.TituloCards>
                    <h3>Confira alguns dos nossos produtos:</h3>
                    <h4>Entre em contato para consultar outros</h4>
                </s.TituloCards>
                <input type="text" value={searchHero} placeholder='Buscar produto...' onChange={handleSearchHero} />
                {/* <Cards /> */}
                <s.ContainerCards>
                    {loading ? (
                        <p>Carregando...</p>
                    ) : (
                        currentItems &&
                        currentItems.map((produto, index) => (
                            <CardsV2
                                key={index}
                                produto={produto}
                            />
                        ))
                    )}
                </s.ContainerCards>
                {/* {ScrollPage} */}
                <s.ContainerPaginator>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </s.ContainerPaginator>

            </s.MainCards>
            {/* <s.VoltarAoTopo href="#"><ion-icon name="arrow-up-sharp"></ion-icon>🔝</s.VoltarAoTopo> */}

            {/* <div class="back-to-top" href="#"></div> */}
        </s.Body>
    )
}
export default ProdutosPage