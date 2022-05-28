let timerid;

    let container = document.getElementById("container")
    async function serch() {
        try {
            let input = document.getElementById('find').value;

            let res = await fetch(`https://www.omdbapi.com/?apikey=51d99311&s=${input}`);

            let data = await res.json()

            let arr_data = data.Search

            //console.log(data)
            return arr_data;
            //append(data.Search)
        }
        catch (err) {
            console.log("err")
        }

    }
    function append(data) {
        document.getElementById("container").style.display="block";
        container.innerHTML = null;
        if (data == undefined) {
            return false
        }

        data.forEach(function (elem) {

            let title = document.createElement('p');
            title.innerText = elem.Title;

            container.append(title)

        })
    }

    async function main() {
        try {
            let data = await serch()
            if (data == undefined) {
                return false;
            }

            //console.log(data)
            append(data)
        }
        catch(err){
            console.log("error")

        }
    }

    // aptimizing debounse function

    function debounce(func,dely){
        if(timerid){
            clearInterval(timerid)
        }
        
        timerid = setTimeout (function (){
            func()
        },dely)
    }