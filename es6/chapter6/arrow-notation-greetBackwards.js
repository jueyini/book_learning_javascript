const o = {
    name: 'Julie',
    greetBackwards: function() {
        const getReservename = () => {
            let nameBackwards = '';
            for (let i=this.name.length-1; i>0; i--){
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        }
        return `${getReservName()} si eman ym ,olleH`;
    }
};
o.greetBackwards();