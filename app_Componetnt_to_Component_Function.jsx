
export default function Layout(){
    return(
        <div>
                <Header/>
                <Content/>
                <Footer/>

        </div>
    )
}

function Header(){
    return(
        <h1> this is a header section </h1>
    )
}

function Content(){
    return(
        <h1><i>thisis a content section</i></h1>
    )
}

function Footer(){
    return(
        <div> 
             <h1>this is a footer section</h1>
             <h2>this is a footer secount line </h2>
        </div>
       
    )
}