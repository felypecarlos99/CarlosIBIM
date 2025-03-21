import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className='body'>
                <header>
                    <img src="png-clipart-used-car-computer-icons-vehicle-car-icon-angle-rectangle-removebg-preview.png"
                        width="50px" />
                    <p className="carshop">CAR SHOP</p>
                </header>
                <div className="container">
                    <img className="imgheader" src="https://quatrorodas.abril.com.br/wp-content/uploads/2024/07/Red-Bull-RB17-1-2048x1365-1.webp?quality=70&w=1024&crop=1" />
                    <p className="texto1">Os melhores</p>
                    <p className="texto2">carros</p>
                    <p className="texto3">do mundo</p>
                </div>

                <div className="containerzao">


                    <div className="container2">
                        <div className="blue">
                            <div className="gridItem red"></div>
                        </div>
                        <img className="imagem1" src="https://quatrorodas.abril.com.br/wp-content/uploads/2022/06/Pagani-Huayra_Codalunga-2022-1280-01-e1655486059777.jpg?quality=70&strip=info&w=1024&crop=1" />
                        <img className="cifrao" src="https://images.vexels.com/content/266053/preview/dollar-sign-money-icon-941b0d.png" />
                        <p className="textoimgs">PAGANI </p>
                        <p className="textoimgs2">ZONDA </p>
                        <p className="textoimgs3">20 milhões</p>
                    </div>



                    <div className="container2">
                        <div className="blue">
                            <div className="gridItem red"></div>
                        </div>
                        <div>
                            <img className="imagem1" src="https://quatrorodas.abril.com.br/wp-content/uploads/2024/10/Excelero.jpg?quality=70&strip=info&w=1024&crop=1" />
                            <img className="cifrao" src="https://images.vexels.com/content/266053/preview/dollar-sign-money-icon-941b0d.png" />
                            <p className="textoimgs4">LA </p>
                            <p className="textoimgs2">VOITURE </p>
                            <p className="textoimgs3">20 milhões</p>
                        </div>





                        <div className="container2">
                            <div className="blue">
                                <div className="gridItem red"></div>
                            </div>
                            <img className="imagem1" src="https://quatrorodas.abril.com.br/wp-content/uploads/2019/08/bugatti-centodieci-2020-2-e1565996026914.jpg?quality=70&strip=info&w=1024&crop=1" />
                            <img className="cifrao" src="https://images.vexels.com/content/266053/preview/dollar-sign-money-icon-941b0d.png" />
                            <p className="textoimgs5">777</p>
                            <p className="textoimgs6">HYPERCAR </p>
                            <p className="textoimgs3">20 milhões</p>
                        </div>


                        <div className="container2">
                            <div className="blue">
                                <div className="gridItem red"></div>
                            </div>
                            <img className="imagem1" src="https://quatrorodas.abril.com.br/wp-content/uploads/2017/05/rolls-royce_sweptail-e1496087957712.jpeg?quality=70&strip=info&w=1024&crop=1" />
                            <img className="cifrao" src="https://images.vexels.com/content/266053/preview/dollar-sign-money-icon-941b0d.png" />
                            <p className="textoimgs9">SP</p>
                            <p className="textoimgs10">AUTOMOTIVE</p>
                            <p className="textoimgs3">20 milhões</p>
                        </div>




                        <div className="container2">
                            <div className="blue">
                                <div className="gridItem red"></div>
                            </div>
                            <img className="imagem1" src="https://quatrorodas.abril.com.br/wp-content/uploads/2021/05/bugatti_la_voiture_noire_914.jpg?quality=70&strip=info&w=1024&crop=1" />
                            <img className="cifrao" src="https://images.vexels.com/content/266053/preview/dollar-sign-money-icon-941b0d.png" />
                            <p className="textoimgs8">MERCEDES</p>
                            <p className="textoimgs2">MAYBACH</p>
                            <p className="textoimgs3">20 milhões</p>
                        </div>



                        <div className="container2">
                            <div className="blue">
                                <div className="gridItem red"></div>
                            </div>
                            <img className="imagem1" src="https://quatrorodas.abril.com.br/wp-content/uploads/2021/05/ROLLS-ROYCE-1-feito.jpg?quality=70&strip=info&w=1024&crop=1" />
                            <img className="cifrao1" src="https://images.vexels.com/content/266053/preview/dollar-sign-money-icon-941b0d.png" />
                            <p className="textoimgs7">CENTODIECE</p>
                            <p className="textoimgs3">20 milhões</p>
                        </div>


                        <div className="container2">
                            <div className="blue">
                                <div className="gridItem red"></div>
                            </div>
                            <img className="imagem1" src="https://quatrorodas.abril.com.br/wp-content/uploads/2023/08/rolls-royce_la_rose_noire_droptail_16x9.jpg?quality=70&strip=info&w=1024&crop=1" />
                            <img className="cifrao" src="https://images.vexels.com/content/266053/preview/dollar-sign-money-icon-941b0d.png" />
                            <p className="textoimgs9">ROLLS-</p>
                            <p className="textoimgs10">ROYCE</p>
                            <p className="textoimgs3">20 milhões</p>
                        </div>
                    </div>
                </div>


                <div className="rodape">
                    <img className="iconecarro" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpORocZ-UyfvfXOC-1mAAIq_YlWiLAoLMB1A&s" />
                    <p className="textorodape">Siga nossas redes sociais</p>
                    <div className="iconesrodape">
                        <img className="iconeinsta" src="data:image/jpeg;base64,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" />
                        <img className="iconeface" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQJvUZOZMxorVcA7GRPjwgrCR6CKZX0mCZgg&s" />
                        <img className="iconeyoutube" src="https://yt3.googleusercontent.com/u6H_TO65Atxmpc98XR-HcMFZ16o1UVppXqO7gj4hMUfz6H6YHjXZh4rLGTkyMHXNmeOfRFa0=s900-c-k-c0x00ffffff-no-rj" />
                        <img className="iconeinsta2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJrd4MJaO9EYEG5f7kX0w1-ARjDXgI8y8ztA&s" />
                    </div>
                    <p className="textorodape1">Car Enterprises</p>
                    <p className="textorodape2">Maranello, Itália, 78950</p>
                    <div className="porcima">
                        <p className="esgotamento">ESGOTADO</p>
                    </div>
                    <div className="circulo">
                        <p className="textocirculo">20% OFF</p>
                    </div>
                    <div className="circulo2">
                        <p className="textocirculo2">20% OFF</p>
                    </div>
                    <div className="circulo3">
                        <p className="textocirculo">20% OFF</p>
                    </div>
                </div>

            </div>
            {/*  <!--oi vc--> */}
        </>
    )
}

export default App


