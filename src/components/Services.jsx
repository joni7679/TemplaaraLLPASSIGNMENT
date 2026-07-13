import { services } from '../data/services';

export default function Services() {
    return (
        <section className="container services-section ">
            <div className="row g-4 justify-content-center">
                {
                    services.map((service) => {
                        const { id, icon, name, title, description } = service
                        return (
                            <div key={id} className="col-md-4" >
                                <div className="feature-box">
                                    <div className="feature-icon-outer">
                                        <div className="feature-icon-inner">
                                            <i className={icon}></i>
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <h3 className="feature-title">{title}</h3>
                                        <p className="feature-desc">{description}</p>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}
