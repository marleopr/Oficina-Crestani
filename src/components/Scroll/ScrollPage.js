import { useState } from "react"

export default function ScrollPage() {

    const [pageYPosition, setPageYPosition] = useState(0);

    function getPageYAfterScroll() {
        setPageYPosition(window.scrollY);
    }

    window.addEventListener('scroll', getPageYAfterScroll);

    return (
        <div
            id="container"
            style={{ height: '600vh', position: 'relative' }}
        >
            <h1>Nossa página</h1>
            {pageYPosition > 900 &&
                <a
                    href="#container"
                    style={{ position: 'fixed', bottom: '20px', background: '#333', color: 'white' }}
                >
                    Voltar ao topo
                </a>
            }
        </div>
    )
}