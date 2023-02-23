class Cards {
    constructor() {
        this.cardSymbols = {
            '0': {
                symbols: '@',
                numbers: [],
                generatedCardSet: []
            },
            '1': {
                symbols: '$',
                numbers: [],
                generatedCardSet: []
            },
            '2': {
                symbols: '&',
                numbers: [],
                generatedCardSet: []
            },
            '3': {
                symbols: '*',
                numbers: [],
                generatedCardSet: []
            }
        }
        this.generatedCards = [];
    }

    generateRandomNum(num, objKey = null) {
        let key = Math.random() * num; 
        key = Math.floor(key);
        if(objKey !==null && this.cardSymbols[objKey]['numbers'].includes(key)) {
            this.generateRandomNum(num, objKey);
        } else if(objKey !==null) {
            this.cardSymbols[objKey]['numbers'].push(key);
            return key
        }
        return key
    }



    generateCards() {
        if(this.generatedCards.length >= 52) {
            return;
        }
        for(let i =0; i < 5; i++) {
            let objKey = this.generateRandomNum(4);
            objKey = String(objKey);
            let num = this.generateRandomNum(10, objKey);
            this.generatedCards.push(this.cardSymbols[objKey]['symbols'] + num );
        }
        // return this.generatedCards;

    }

    getCards() {
        return this.generatedCards.slice(-5);
    }

    resetCards() {
        this.generatedCards = [];
        for(let i =0; i< 4; i++) {
            this.generatedCards = [];
        }
    }
}