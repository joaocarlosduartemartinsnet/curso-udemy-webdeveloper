function pessoa(){
    this.idade = 0

    const self = this
    setinterval(function(){ 
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new pessoa

