class Distribution<T> {
    def: T;
    constructor(evidence: T) {
        
        this.def = evidence;
    }
    Sample(): T {
     return this.def;   
    }
}