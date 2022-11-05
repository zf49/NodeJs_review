function renderState(url){

    let arr = ["/home","/list","/api/home","/api/list"]

    return arr.includes(url)?200:404


}



function renderHTML(url){

    switch(url){
        case "/home":
            return `<html>
                <h1>Home</h1>
            </html>`
        case '/list':
            return `<html>
            <h1>List</h1>
        </html>`
        case '/api/list':
            return `["list1","list2","list3"]`
        case '/api/home':
            return `{
                name:"chris",
                age:26,
                eat:false,
            }`
        default:
            return `<html>
                <h1>404default</h1>
            </html>`
    }



}


export { renderState, renderHTML}