import Form from "../Form/form";
import PromoBox from "../PromoBox/promobox";

const App = ()=>{
    return( 
        <>
        <section className="container-main">
            <OutBox/>
            <div>
                <PromoBox texto="Try it free 7 days then 20$/mo. Thereafter"/>
                <Form/>
            </div>
        </section>
        </>
    )
}

export default App;