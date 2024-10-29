import React from 'react'
import meImage from '../assets/me.jpg';
import uxImage from '../assets/ux.png';
import projekgisImage from '../assets/projek gis.png';
import projekwebImage from '../assets/projek web.jpg';
import projekuiImage from '../assets/projek ui.jpg';



const Home = () => {
    return (
        <>
        <section id="home">
        <div className="home-left">
            <h3 className='pre-title'>Halo Semua Saya</h3>
            <h1 className='home-name'>LEO RICHARDO ALELO</h1>
            <p className>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo reprehenderit eaque culpa fugit placeat ea illum et debitis necessitatibus aspernatur odit vel recusandae repellat eveniet sed blanditiis iusto iste nemo accusamus possimus, sequi ratione molestias, est aut. Ratione porro voluptatum id totam, neque alias corrupti distinctio consequuntur facilis, molestias voluptatibus.</p>
            <button className="btn" onclick="openPopup()">Lihat Profil</button>
        </div>

        <div className="home-right">
            <img src={meImage} alt="foto saya"/>
        </div>
        </section>


        <section id="about">
            <div className="main-contaniner-about">
                <h1 className="section-title-about">About
                    <div className="line"></div>
                </h1>
                <div className="text-about">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos alias asperiores excepturi explicabo voluptas harum aliquid magnam tempore maxime repellat praesentium, ab eveniet.</p>
                </div>

                <div className="row-3">
                    <div className="about">
                        <div className="about-icon">
                            <img src={uxImage} alt="ux"/>
                            </div>
                            <h4>UI/UX</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, sunt recusandae dolor, aperiam rerum possimus
                        sit, fuga assumenda impedit minus ad qui. Voluptatem dicta, eveniet expedita in at suscipit.</p>
                    </div>

                    <div className="about">
                        <div className="about-icon">
                            <img src={uxImage} alt="ux"/>
                            </div>
                            <h4>UI/UX</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, sunt recusandae dolor, aperiam rerum possimus
                        sit, fuga assumenda impedit minus ad qui. Voluptatem dicta, eveniet expedita in at suscipit.</p>
                    </div>

                    <div className="about">
                        <div className="about-icon">
                            <img src={uxImage} alt="ux"/>
                            </div>
                            <h4>UI/UX</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, sunt recusandae dolor, aperiam rerum possimus
                        sit, fuga assumenda impedit minus ad qui. Voluptatem dicta, eveniet expedita in at suscipit.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="project">
            <div className="main-container">
                <h1 className='section-title-project'>Projek
                    <div className="line"></div></h1>
                <div className="project-box">
                    <div className="box">
                        <div className="container-top">
                            <div className="box-image">
                            <img src={projekgisImage} alt="projek gis"/>
                            </div>
                            <h4>GIS</h4>
                            <h5>Pemetaan area pemukiman masyarakat</h5>
                        </div>
                    </div>

                    <div className="box">
                        <div className="container-top">
                            <div className="box-image">
                            <img src={projekwebImage} alt="projek web"/>
                            </div>
                            <h4>WEB</h4>
                            <h5>Pemetaan area pemukiman masyarakat</h5>
                        </div>
                    </div>

                    <div className="box">
                        <div className="container-top">
                            <div className="box-image">
                            <img src={projekuiImage} alt="projek ui"/>
                            </div>
                            <h4>GIS</h4>
                            <h5>Pemetaan area pemukiman masyarakat</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact">
            <div className="main-container">
                <h1 className="section-title-contact">Contact
                    <div className="line"></div>
                </h1>
                <div className="text-contact">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quia molestias debitis dolor numquam 
                    quibusdam, aspernatur quos tenetur et repellat quae possimus laudantium sed temporibus accusantium facere
                    perspiciatis nobis fuga.</p>
                </div>

                <form className="contact-form">
                <div>
                    <input type="text"  name="name" placeholder="Nama"></input>
                </div>
                <div>
                    <input type="email"  name="email" placeholder="Email"></input>
                </div>
                <div>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Pesan"></textarea>
                </div>
                <button className="btn-submit">Kirim Pesan</button>
                </form>
            </div>
        </section>
        </>
    )
}

export default Home
