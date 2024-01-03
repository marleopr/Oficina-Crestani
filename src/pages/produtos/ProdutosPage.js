import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../App.css';
import * as s from "./styled";
import { Cards } from './Cards';

const ProdutosPage = () => {

    return (
        <s.Body>
            <s.MainCards>
                <s.TituloCards>
                    <h3>Confira alguns dos nossos produtos:</h3>
                    <h4>Entre em contato para consultar outros</h4>
                </s.TituloCards>
                <Cards />
                {/* {ScrollPage} */}

            </s.MainCards>
            {/* <s.VoltarAoTopo href="#"><ion-icon name="arrow-up-sharp"></ion-icon>🔝</s.VoltarAoTopo> */}

            {/* <div class="back-to-top" href="#"></div> */}
        </s.Body>
    )
}
export default ProdutosPage