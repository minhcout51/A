import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/reset.css"
import "../public/css/style.css"
import TopNav from "../components/TopNav";

function MyApp({Component, pageProps}){

    return(
        <>
        {/* sdsadsf */}
        <TopNav/>
        < Component {...pageProps} />;
        </>
        
    ); 
 

}
export default MyApp;