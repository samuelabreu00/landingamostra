import './about.css'

export const About = () =>{
    return(
        <>
        <section className="about" id='about'>
            <div className="container-about">
                <h1 className='title-prin'>How it Works</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quod natus labore laborum praesentium nisi consequuntur <br /> aspernatur blanditiis eos eum vero, <br /> quae doloremque illum repellendus!</p>

                <div className="container-box">
                    <div className="box">
                        <span className="title-span">Aqui vai um titulo</span>
                        <h1>Contextual Analistics</h1>
                        <span className="green">Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. commodi dolorem accusantium </p>
                        <p><span className="green-2">Exemplo: </span>Lorem ipsum dolor</p>
                    </div>

                    <div className="box">
                        <span className="title-span">Aqui vai um titulo</span>
                        <h1>Contextual Analistics</h1>
                        <span className="green">Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. commodi dolorem accusantium </p>
                        <p><span className="green-2">Exemplo: </span>Lorem ipsum dolor</p>
                    </div>

                    <div className="box">
                        <span className="title-span">Aqui vai um titulo</span>
                        <h1>Contextual Analistics</h1>
                        <span className="green">Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. commodi dolorem accusantium </p>
                        <p><span className="green-2">Exemplo: </span>Lorem ipsum dolor</p>
                    </div>
                </div>

                <a href=""><div>Lorem Ipsum</div></a>
            </div>
        </section>
        </>
    )
}