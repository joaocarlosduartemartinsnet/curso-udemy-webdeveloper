function pessoa(){
    this.idade = 0

    setinterval(() => { 
        this.idade++
        console.log(this.idade)
    }, 1000)
}  

new pessoa