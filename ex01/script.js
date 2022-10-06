
    let galery = document.querySelector("#galery")
    
    window.onload = () =>{
        let lenght
        let array = []
        let index = []
        let images = document.querySelectorAll("#galery img")
        document.querySelectorAll(".filtre div").forEach((filtre) =>{
            filtre.addEventListener("click", () =>{
                array.push(...images);

                for(let i = 0; i < array.length;i++){
                    if(array[i].attributes.alt.value == filtre.attributes.class.value){
                        removeClass(array[i], "inactive")
                        addClass(array[i], "active")
                        index.push(array[i])
                        lenght = index.length
                    }
                    else{
                        removeClass(array[i], "active")
                        addClass(array[i], "inactive")
                    }
                }
                if(lenght > 2){
                    galery.style.gridTemplateColumns = `repeat(2, 1fr)`
                }
                else{
                    galery.style.display.gridTemplateColumns = `repeat(${lenght}, 1fr)`
                }
                if(index.length === 0){
                    get()
                }
                console.log(array);
                console.log(index);
                index = []
                array = []
            })
            //Fonction
    
            function addClass(item, classItem){
                item.classList.add(classItem)
            }
            function removeClass(item, classItem){
                item.classList.remove(classItem)
            }

            function get(){
                galery.style.display = "block"
                galery.innerHTML = 
                     `<h1>Aucun résultat pour ${filtre.attributes.class.value}</h1> 
                     <i class="las la-times-circle"></i>` 
                     galery.lastChild.addEventListener("click", ()=>{
                        clear()
                     })
            }
            function clear(){
                document.querySelector("#galery").innerHTML = ""          
                window.location.reload()
            }
        })

    }