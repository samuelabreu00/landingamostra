import './blog.css'

export const Blog =()=>{
    return(
        <>
        <section className="blog" id='blog'>
            <div className="container-blog">
                
                <div className="left">
                        <h1>Get Started</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt est ullam accusamus praesentium corrupti quod officia.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat quasi nesciunt optio perferendis </p>
                        <a href="">Learn More</a>
                </div>
               
                
                <div className="right">
                    <div className="content-right">
                        <span>Contact-me</span>
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Email"/>
                        <textarea cols="20" rows="5" placeholder='Mensage'/>
                        <button type="submit">Selecionar e Enviar</button>
                    </div>
                </div>
                
            </div>
        </section>
        </>
    )
}