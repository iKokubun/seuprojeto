import React, { useEffect } from 'react';
import './index.css';
import './App.css';

function Home() {
    useEffect(() => {
        // Add scroll animation logic if needed
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    }, []);

    return (
        <div className="app">
            {/* Navigation */}
            <nav className="navbar">
                <div className="container nav-content">
                    <div className="logo">AURA <span>CHÁS</span></div>
                    <ul className="nav-links">
                        <li><a href="#collection">Coleção</a></li>
                        <li><a href="#ritual">O Ritual</a></li>
                        <li><a href="#about">Herança</a></li>
                        <li><a href="#boutique" className="btn-small">Boutique</a></li>
                    </ul>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-video-container">
                    <iframe
                        src="https://www.youtube.com/embed/JjL70MjnzN4?autoplay=1&mute=1&loop=1&playlist=JjL70MjnzN4&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <h1 className="animate-up delay-1">O Ritual da <span>Felicidade</span></h1>
                    <p className="animate-up delay-2">Desenvolvemos blends botânicos premiuns para mentes que buscam o silêncio e a reconexão com a essência orgânica da vida.</p>
                    <div className="hero-btns animate-up delay-3">
                        <a href="#collection" className="btn-primary">Descobrir Blends</a>
                    </div>
                </div>
                <div className="hero-scroll-indicator">
                    <span>SCROLL</span>
                    <div className="line"></div>
                </div>
            </section>

            {/* Philosophy / Features */}
            <section id="ritual" className="features">
                <div className="container">
                    <div className="section-header animate-on-scroll">
                        <h2>Cultivando a Calma</h2>
                        <p>Cada infusão é uma jornada sensorial de volta ao equilíbrio.</p>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card animate-on-scroll">
                            <div className="feature-icon">🌿</div>
                            <h3>Origem Pura</h3>
                            <p>Botânicos selecionados individualmente em cultivos sustentáveis e orgânicos.</p>
                        </div>
                        <div className="feature-card animate-on-scroll delay-1">
                            <div className="feature-icon">🌙</div>
                            <h3>Ritual Noturno</h3>
                            <p>Blends desenhados para induzir estados profundos de relaxamento e sono reparador.</p>
                        </div>
                        <div className="feature-card animate-on-scroll delay-2">
                            <div className="feature-icon">✨</div>
                            <h3>Curadoria Luxo</h3>
                            <p>Embalagens artesanais que preservam a integridade e o aroma mineral das plantas.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Collection Showcase */}
            <section id="collection" className="collection">
                <div className="container">
                    <div className="collection-layout">
                        <div className="collection-info animate-on-scroll">
                            <span className="subtitle">Signature Series</span>
                            <h2>Nossa Coleção de Inverno</h2>
                            <p>Explore as nuances de sabor e propriedades terapêuticas dos nossos blends mais raros.</p>
                            <a href="#" className="link-underlined">Ver Catálogo Completo</a>
                        </div>
                        <div className="products-grid">
                            <div className="product-card animate-on-scroll">
                                <div className="product-image-placeholder item-1">
                                    <div className="badge">Best Seller</div>
                                </div>
                                <h3>Lumière de Lune</h3>
                                <p>Lavanda, Camomila Real e Melisse.</p>
                                <span className="price">R$ 149,00</span>
                                <button className="btn-add">Adicionar</button>
                            </div>
                            <div className="product-card animate-on-scroll delay-1">
                                <div className="product-image-placeholder item-2"></div>
                                <h3>Brise de Forêt</h3>
                                <p>Menta Piperita, Alecrim e Cedro.</p>
                                <span className="price">R$ 129,00</span>
                                <button className="btn-add">Adicionar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote / Atmosphere */}
            <section className="atmosphere">
                <div className="container">
                    <div className="quote-box animate-on-scroll">
                        <p className="quote">"O chá é um convite para o agora. Um sopro de vida em meio ao caos urbano."</p>
                        <cite>— Curadoria Aura</cite>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-brand">
                            <div className="logo-white">AURA</div>
                            <p>Experiência botânica premium desde 2024.</p>
                        </div>
                        <div className="footer-links">
                            <div>
                                <h4>Contato</h4>
                                <p>contato@aurachas.com.br</p>
                            </div>
                            <div>
                                <h4>Social</h4>
                                <div className="social-icons">
                                    <a href="#">Instagram</a>
                                    <a href="#">Pinterest</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2026 Aura Chás. Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
